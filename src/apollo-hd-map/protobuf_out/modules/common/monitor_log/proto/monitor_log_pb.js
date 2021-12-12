// source: modules/common/monitor_log/proto/monitor_log.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var modules_common_proto_header_pb = require('../../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
goog.exportSymbol('proto.apollo.common.monitor.MonitorMessage', null, global);
goog.exportSymbol('proto.apollo.common.monitor.MonitorMessageItem', null, global);
goog.exportSymbol('proto.apollo.common.monitor.MonitorMessageItem.LogLevel', null, global);
goog.exportSymbol('proto.apollo.common.monitor.MonitorMessageItem.MessageSource', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apollo.common.monitor.MonitorMessageItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.monitor.MonitorMessageItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.monitor.MonitorMessageItem.displayName = 'proto.apollo.common.monitor.MonitorMessageItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apollo.common.monitor.MonitorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.common.monitor.MonitorMessage.repeatedFields_, null);
};
goog.inherits(proto.apollo.common.monitor.MonitorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.monitor.MonitorMessage.displayName = 'proto.apollo.common.monitor.MonitorMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.monitor.MonitorMessageItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessageItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, 1),
    msg: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    logLevel: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MonitorMessageItem as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.monitor.MonitorMessageItem.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.source;

  /** @type {?|undefined} */
  this.msg;

  /** @type {?|undefined} */
  this.logLevel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.monitor.MonitorMessageItem.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessageItem.fromObject = function(obj) {
  var msg = new proto.apollo.common.monitor.MonitorMessageItem();
  obj.source != null && jspb.Message.setField(msg, 1, obj.source);
  obj.msg != null && jspb.Message.setField(msg, 2, obj.msg);
  obj.logLevel != null && jspb.Message.setField(msg, 3, obj.logLevel);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessageItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.monitor.MonitorMessageItem;
  return proto.apollo.common.monitor.MonitorMessageItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessageItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (reader.readEnum());
      msg.setLogLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.monitor.MonitorMessageItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessageItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.common.monitor.MonitorMessageItem.MessageSource = {
  UNKNOWN: 1,
  CANBUS: 2,
  CONTROL: 3,
  DECISION: 4,
  LOCALIZATION: 5,
  PLANNING: 6,
  PREDICTION: 7,
  SIMULATOR: 8,
  HWSYS: 9,
  ROUTING: 10,
  MONITOR: 11,
  HMI: 12,
  RELATIVE_MAP: 13,
  GNSS: 14,
  CONTI_RADAR: 15,
  RACOBIT_RADAR: 16,
  ULTRASONIC_RADAR: 17,
  MOBILEYE: 18,
  DELPHI_ESR: 19,
  STORYTELLING: 20,
  TASK_MANAGER: 21
};

/**
 * @enum {number}
 */
proto.apollo.common.monitor.MonitorMessageItem.LogLevel = {
  INFO: 0,
  WARN: 1,
  ERROR: 2,
  FATAL: 3
};

/**
 * optional MessageSource source = 1;
 * @return {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getSource = function() {
  return /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setSource = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearSource = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setMsg = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearMsg = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LogLevel log_level = 3;
 * @return {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getLogLevel = function() {
  return /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setLogLevel = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearLogLevel = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasLogLevel = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.common.monitor.MonitorMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.monitor.MonitorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.monitor.MonitorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.apollo.common.monitor.MonitorMessageItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MonitorMessage as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.monitor.MonitorMessage.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.itemList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.monitor.MonitorMessage.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.monitor.MonitorMessage}
 */
proto.apollo.common.monitor.MonitorMessage.fromObject = function(obj) {
  var msg = new proto.apollo.common.monitor.MonitorMessage();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, modules_common_proto_header_pb.Header.fromObject(obj.header));
  obj.itemList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.itemList.map(
          proto.apollo.common.monitor.MonitorMessageItem.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.monitor.MonitorMessage}
 */
proto.apollo.common.monitor.MonitorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.monitor.MonitorMessage;
  return proto.apollo.common.monitor.MonitorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.monitor.MonitorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.monitor.MonitorMessage}
 */
proto.apollo.common.monitor.MonitorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_header_pb.Header;
      reader.readMessage(value,modules_common_proto_header_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.apollo.common.monitor.MonitorMessageItem;
      reader.readMessage(value,proto.apollo.common.monitor.MonitorMessageItem.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.monitor.MonitorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.monitor.MonitorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.common.monitor.MonitorMessageItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.monitor.MonitorMessage} returns this
*/
proto.apollo.common.monitor.MonitorMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessage} returns this
 */
proto.apollo.common.monitor.MonitorMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MonitorMessageItem item = 2;
 * @return {!Array<!proto.apollo.common.monitor.MonitorMessageItem>}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.getItemList = function() {
  return /** @type{!Array<!proto.apollo.common.monitor.MonitorMessageItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.common.monitor.MonitorMessageItem, 2));
};


/**
 * @param {!Array<!proto.apollo.common.monitor.MonitorMessageItem>} value
 * @return {!proto.apollo.common.monitor.MonitorMessage} returns this
*/
proto.apollo.common.monitor.MonitorMessage.prototype.setItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.common.monitor.MonitorMessageItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessage.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.common.monitor.MonitorMessageItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.common.monitor.MonitorMessage} returns this
 */
proto.apollo.common.monitor.MonitorMessage.prototype.clearItemList = function() {
  return this.setItemList([]);
};


goog.object.extend(exports, proto.apollo.common.monitor);