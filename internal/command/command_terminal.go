package command

import (
	"context"
	"os"

	"github.com/pkg/errors"
	"go.uber.org/zap"
)

type terminalCommand struct {
	internalCommand

	envCollector *shellEnvCollector
	logger       *zap.Logger
}

func (c *terminalCommand) getPty() *os.File {
	cmdPty, ok := c.internalCommand.(commandWithPty)
	if !ok {
		return nil
	}
	return cmdPty.getPty()
}

func (c *terminalCommand) Start(ctx context.Context) error {
	if isNil(c.StdinWriter()) {
		return errors.New("stdin writer is nil")
	}

	c.logger.Info("starting a terminal command")
	if err := c.internalCommand.Start(ctx); err != nil {
		return err
	}
	c.logger.Info("a terminal command started")

	// [shellEnvCollector] writes defines a function collecting env and
	// registers it as a trap directly into the shell interactive session.
	c.envCollector = &shellEnvCollector{buf: c.StdinWriter()}
	return c.envCollector.Init()
}

func (c *terminalCommand) Wait() (err error) {
	err = c.internalCommand.Wait()
	if cErr := c.collectEnv(); cErr != nil {
		c.logger.Info("failed to collect the environment", zap.Error(cErr))
		if err == nil {
			err = cErr
		}
	}
	return err
}

func (c *terminalCommand) collectEnv() error {
	sess := c.Session()

	if sess == nil || c.envCollector == nil {
		return nil
	}

	changed, deleted, err := c.envCollector.Collect()
	if err != nil {
		return err
	}
	if err := sess.SetEnv(changed...); err != nil {
		return errors.WithMessage(err, "failed to set the new or updated env")
	}

	sess.DeleteEnv(deleted...)

	return nil
}
