// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file runme/kernel/v1/kernel.proto (package runme.kernel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, UInt32Value } from "@bufbuild/protobuf";

/**
 * @generated from message runme.kernel.v1.Session
 */
export class Session extends Message<Session> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<Session>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.Session";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session {
    return new Session().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJsonString(jsonString, options);
  }

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean {
    return proto3.util.equals(Session, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.DeleteSessionRequest
 */
export class DeleteSessionRequest extends Message<DeleteSessionRequest> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId = "";

  constructor(data?: PartialMessage<DeleteSessionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.DeleteSessionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined, b: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSessionRequest, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.DeleteSessionResponse
 */
export class DeleteSessionResponse extends Message<DeleteSessionResponse> {
  constructor(data?: PartialMessage<DeleteSessionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.DeleteSessionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined, b: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined): boolean {
    return proto3.util.equals(DeleteSessionResponse, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.ListSessionsRequest
 */
export class ListSessionsRequest extends Message<ListSessionsRequest> {
  constructor(data?: PartialMessage<ListSessionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.ListSessionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined, b: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined): boolean {
    return proto3.util.equals(ListSessionsRequest, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.ListSessionsResponse
 */
export class ListSessionsResponse extends Message<ListSessionsResponse> {
  /**
   * @generated from field: repeated runme.kernel.v1.Session sessions = 1;
   */
  sessions: Session[] = [];

  constructor(data?: PartialMessage<ListSessionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.ListSessionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sessions", kind: "message", T: Session, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined, b: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined): boolean {
    return proto3.util.equals(ListSessionsResponse, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.PostSessionRequest
 */
export class PostSessionRequest extends Message<PostSessionRequest> {
  /**
   * @generated from field: string command_name = 1;
   */
  commandName = "";

  /**
   * prompt is only used for debug purposes.
   * Leave it blank to be auto-detected.
   *
   * @generated from field: string prompt = 2;
   */
  prompt = "";

  /**
   * raw_output returns unaltered output when true
   * including ANSI escape sequences.
   *
   * @generated from field: bool raw_output = 3;
   */
  rawOutput = false;

  constructor(data?: PartialMessage<PostSessionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.PostSessionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "command_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prompt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "raw_output", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostSessionRequest {
    return new PostSessionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostSessionRequest {
    return new PostSessionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostSessionRequest {
    return new PostSessionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PostSessionRequest | PlainMessage<PostSessionRequest> | undefined, b: PostSessionRequest | PlainMessage<PostSessionRequest> | undefined): boolean {
    return proto3.util.equals(PostSessionRequest, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.PostSessionResponse
 */
export class PostSessionResponse extends Message<PostSessionResponse> {
  /**
   * @generated from field: runme.kernel.v1.Session session = 1;
   */
  session?: Session;

  constructor(data?: PartialMessage<PostSessionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.PostSessionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session", kind: "message", T: Session },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostSessionResponse {
    return new PostSessionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostSessionResponse {
    return new PostSessionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostSessionResponse {
    return new PostSessionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PostSessionResponse | PlainMessage<PostSessionResponse> | undefined, b: PostSessionResponse | PlainMessage<PostSessionResponse> | undefined): boolean {
    return proto3.util.equals(PostSessionResponse, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.ExecuteRequest
 */
export class ExecuteRequest extends Message<ExecuteRequest> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId = "";

  /**
   * @generated from field: string command = 2;
   */
  command = "";

  constructor(data?: PartialMessage<ExecuteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.ExecuteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "command", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ExecuteRequest | PlainMessage<ExecuteRequest> | undefined, b: ExecuteRequest | PlainMessage<ExecuteRequest> | undefined): boolean {
    return proto3.util.equals(ExecuteRequest, a, b);
  }
}

/**
 * @generated from message runme.kernel.v1.ExecuteResponse
 */
export class ExecuteResponse extends Message<ExecuteResponse> {
  /**
   * @generated from field: google.protobuf.UInt32Value exit_code = 1;
   */
  exitCode?: number;

  /**
   * @generated from field: bytes stdout = 2;
   */
  stdout = new Uint8Array(0);

  constructor(data?: PartialMessage<ExecuteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "runme.kernel.v1.ExecuteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_code", kind: "message", T: UInt32Value },
    { no: 2, name: "stdout", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ExecuteResponse | PlainMessage<ExecuteResponse> | undefined, b: ExecuteResponse | PlainMessage<ExecuteResponse> | undefined): boolean {
    return proto3.util.equals(ExecuteResponse, a, b);
  }
}