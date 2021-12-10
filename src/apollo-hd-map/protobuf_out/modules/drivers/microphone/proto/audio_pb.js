// source: modules/drivers/microphone/proto/audio.proto
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
var modules_drivers_microphone_proto_microphone_config_pb = require('../../../../modules/drivers/microphone/proto/microphone_config_pb.js');
goog.object.extend(proto, modules_drivers_microphone_proto_microphone_config_pb);
goog.exportSymbol('proto.apollo.drivers.microphone.config.AudioData', null, global);
goog.exportSymbol('proto.apollo.drivers.microphone.config.ChannelData', null, global);
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
proto.apollo.drivers.microphone.config.ChannelData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.microphone.config.ChannelData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.microphone.config.ChannelData.displayName = 'proto.apollo.drivers.microphone.config.ChannelData';
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
proto.apollo.drivers.microphone.config.AudioData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.drivers.microphone.config.AudioData.repeatedFields_, null);
};
goog.inherits(proto.apollo.drivers.microphone.config.AudioData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.microphone.config.AudioData.displayName = 'proto.apollo.drivers.microphone.config.AudioData';
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
proto.apollo.drivers.microphone.config.ChannelData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.microphone.config.ChannelData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.microphone.config.ChannelData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.microphone.config.ChannelData.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ChannelData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.microphone.config.ChannelData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.channelType;

  /** @type {?|undefined} */
  this.data;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.microphone.config.ChannelData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.microphone.config.ChannelData}
 */
proto.apollo.drivers.microphone.config.ChannelData.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.microphone.config.ChannelData();
  obj.channelType != null && jspb.Message.setField(msg, 1, obj.channelType);
  obj.data != null && jspb.Message.setField(msg, 2, obj.data);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.microphone.config.ChannelData}
 */
proto.apollo.drivers.microphone.config.ChannelData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.microphone.config.ChannelData;
  return proto.apollo.drivers.microphone.config.ChannelData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.microphone.config.ChannelData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.microphone.config.ChannelData}
 */
proto.apollo.drivers.microphone.config.ChannelData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.microphone.config.ChannelType} */ (reader.readEnum());
      msg.setChannelType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.apollo.drivers.microphone.config.ChannelData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.microphone.config.ChannelData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.microphone.config.ChannelData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.microphone.config.ChannelData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.microphone.config.ChannelType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ChannelType channel_type = 1;
 * @return {!proto.apollo.drivers.microphone.config.ChannelType}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.getChannelType = function() {
  return /** @type {!proto.apollo.drivers.microphone.config.ChannelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.microphone.config.ChannelType} value
 * @return {!proto.apollo.drivers.microphone.config.ChannelData} returns this
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.setChannelType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.microphone.config.ChannelData} returns this
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.clearChannelType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.hasChannelType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.drivers.microphone.config.ChannelData} returns this
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.setData = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.microphone.config.ChannelData} returns this
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.clearData = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.microphone.config.ChannelData.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.drivers.microphone.config.AudioData.repeatedFields_ = [3];



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
proto.apollo.drivers.microphone.config.AudioData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.microphone.config.AudioData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.microphone.config.AudioData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.microphone.config.AudioData.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    microphoneConfig: (f = msg.getMicrophoneConfig()) && modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig.toObject(includeInstance, f),
    channelDataList: jspb.Message.toObjectList(msg.getChannelDataList(),
    proto.apollo.drivers.microphone.config.ChannelData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of AudioData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.microphone.config.AudioData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.microphoneConfig;

  /** @type {?|undefined} */
  this.channelDataList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.microphone.config.AudioData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.microphone.config.AudioData}
 */
proto.apollo.drivers.microphone.config.AudioData.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.microphone.config.AudioData();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, modules_common_proto_header_pb.Header.fromObject(obj.header));
  obj.microphoneConfig && jspb.Message.setWrapperField(
      msg, 2, modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig.fromObject(obj.microphoneConfig));
  obj.channelDataList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.channelDataList.map(
          proto.apollo.drivers.microphone.config.ChannelData.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.microphone.config.AudioData}
 */
proto.apollo.drivers.microphone.config.AudioData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.microphone.config.AudioData;
  return proto.apollo.drivers.microphone.config.AudioData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.microphone.config.AudioData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.microphone.config.AudioData}
 */
proto.apollo.drivers.microphone.config.AudioData.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig;
      reader.readMessage(value,modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig.deserializeBinaryFromReader);
      msg.setMicrophoneConfig(value);
      break;
    case 3:
      var value = new proto.apollo.drivers.microphone.config.ChannelData;
      reader.readMessage(value,proto.apollo.drivers.microphone.config.ChannelData.deserializeBinaryFromReader);
      msg.addChannelData(value);
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
proto.apollo.drivers.microphone.config.AudioData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.microphone.config.AudioData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.microphone.config.AudioData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.microphone.config.AudioData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getMicrophoneConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig.serializeBinaryToWriter
    );
  }
  f = message.getChannelDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.drivers.microphone.config.ChannelData.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
*/
proto.apollo.drivers.microphone.config.AudioData.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MicrophoneConfig microphone_config = 2;
 * @return {?proto.apollo.drivers.microphone.config.MicrophoneConfig}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.getMicrophoneConfig = function() {
  return /** @type{?proto.apollo.drivers.microphone.config.MicrophoneConfig} */ (
    jspb.Message.getWrapperField(this, modules_drivers_microphone_proto_microphone_config_pb.MicrophoneConfig, 2));
};


/**
 * @param {?proto.apollo.drivers.microphone.config.MicrophoneConfig|undefined} value
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
*/
proto.apollo.drivers.microphone.config.AudioData.prototype.setMicrophoneConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.clearMicrophoneConfig = function() {
  return this.setMicrophoneConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.hasMicrophoneConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ChannelData channel_data = 3;
 * @return {!Array<!proto.apollo.drivers.microphone.config.ChannelData>}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.getChannelDataList = function() {
  return /** @type{!Array<!proto.apollo.drivers.microphone.config.ChannelData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.drivers.microphone.config.ChannelData, 3));
};


/**
 * @param {!Array<!proto.apollo.drivers.microphone.config.ChannelData>} value
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
*/
proto.apollo.drivers.microphone.config.AudioData.prototype.setChannelDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.drivers.microphone.config.ChannelData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.drivers.microphone.config.ChannelData}
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.addChannelData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.drivers.microphone.config.ChannelData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.drivers.microphone.config.AudioData} returns this
 */
proto.apollo.drivers.microphone.config.AudioData.prototype.clearChannelDataList = function() {
  return this.setChannelDataList([]);
};


goog.object.extend(exports, proto.apollo.drivers.microphone.config);
