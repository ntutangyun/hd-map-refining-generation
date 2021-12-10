// source: cyber/examples/proto/examples.proto
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

goog.exportSymbol('proto.apollo.cyber.examples.proto.Chatter', null, global);
goog.exportSymbol('proto.apollo.cyber.examples.proto.Driver', null, global);
goog.exportSymbol('proto.apollo.cyber.examples.proto.SamplesTest1', null, global);
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
proto.apollo.cyber.examples.proto.SamplesTest1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.cyber.examples.proto.SamplesTest1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.cyber.examples.proto.SamplesTest1.displayName = 'proto.apollo.cyber.examples.proto.SamplesTest1';
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
proto.apollo.cyber.examples.proto.Chatter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.cyber.examples.proto.Chatter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.cyber.examples.proto.Chatter.displayName = 'proto.apollo.cyber.examples.proto.Chatter';
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
proto.apollo.cyber.examples.proto.Driver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.cyber.examples.proto.Driver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.cyber.examples.proto.Driver.displayName = 'proto.apollo.cyber.examples.proto.Driver';
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
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.cyber.examples.proto.SamplesTest1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.cyber.examples.proto.SamplesTest1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.SamplesTest1.toObject = function(includeInstance, msg) {
  var f, obj = {
    className: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    caseName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SamplesTest1 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.cyber.examples.proto.SamplesTest1.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.className;

  /** @type {?|undefined} */
  this.caseName;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.cyber.examples.proto.SamplesTest1.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.fromObject = function(obj) {
  var msg = new proto.apollo.cyber.examples.proto.SamplesTest1();
  obj.className != null && jspb.Message.setField(msg, 1, obj.className);
  obj.caseName != null && jspb.Message.setField(msg, 2, obj.caseName);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.cyber.examples.proto.SamplesTest1;
  return proto.apollo.cyber.examples.proto.SamplesTest1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.cyber.examples.proto.SamplesTest1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCaseName(value);
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
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.cyber.examples.proto.SamplesTest1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.cyber.examples.proto.SamplesTest1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.SamplesTest1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string class_name = 1;
 * @return {string}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.getClassName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1} returns this
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.setClassName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1} returns this
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.clearClassName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.hasClassName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string case_name = 2;
 * @return {string}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.getCaseName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1} returns this
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.setCaseName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.SamplesTest1} returns this
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.clearCaseName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.SamplesTest1.prototype.hasCaseName = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.apollo.cyber.examples.proto.Chatter.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.cyber.examples.proto.Chatter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.cyber.examples.proto.Chatter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.Chatter.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    lidarTimestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    seq: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Chatter as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.cyber.examples.proto.Chatter.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.timestamp;

  /** @type {?|undefined} */
  this.lidarTimestamp;

  /** @type {?|undefined} */
  this.seq;

  /** @type {?|undefined} */
  this.content;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.cyber.examples.proto.Chatter.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.cyber.examples.proto.Chatter}
 */
proto.apollo.cyber.examples.proto.Chatter.fromObject = function(obj) {
  var msg = new proto.apollo.cyber.examples.proto.Chatter();
  obj.timestamp != null && jspb.Message.setField(msg, 1, obj.timestamp);
  obj.lidarTimestamp != null && jspb.Message.setField(msg, 2, obj.lidarTimestamp);
  obj.seq != null && jspb.Message.setField(msg, 3, obj.seq);
  obj.content != null && jspb.Message.setField(msg, 4, obj.content);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.cyber.examples.proto.Chatter}
 */
proto.apollo.cyber.examples.proto.Chatter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.cyber.examples.proto.Chatter;
  return proto.apollo.cyber.examples.proto.Chatter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.cyber.examples.proto.Chatter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.cyber.examples.proto.Chatter}
 */
proto.apollo.cyber.examples.proto.Chatter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLidarTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeq(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
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
proto.apollo.cyber.examples.proto.Chatter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.cyber.examples.proto.Chatter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.cyber.examples.proto.Chatter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.Chatter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 lidar_timestamp = 2;
 * @return {number}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getLidarTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.setLidarTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.clearLidarTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.hasLidarTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 seq = 3;
 * @return {number}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.setSeq = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.clearSeq = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.hasSeq = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes content = 4;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes content = 4;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Chatter} returns this
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.clearContent = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Chatter.prototype.hasContent = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.apollo.cyber.examples.proto.Driver.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.cyber.examples.proto.Driver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.cyber.examples.proto.Driver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.Driver.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    timestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Driver as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.cyber.examples.proto.Driver.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.content;

  /** @type {?|undefined} */
  this.msgId;

  /** @type {?|undefined} */
  this.timestamp;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.cyber.examples.proto.Driver.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.cyber.examples.proto.Driver}
 */
proto.apollo.cyber.examples.proto.Driver.fromObject = function(obj) {
  var msg = new proto.apollo.cyber.examples.proto.Driver();
  obj.content != null && jspb.Message.setField(msg, 1, obj.content);
  obj.msgId != null && jspb.Message.setField(msg, 2, obj.msgId);
  obj.timestamp != null && jspb.Message.setField(msg, 3, obj.timestamp);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.cyber.examples.proto.Driver}
 */
proto.apollo.cyber.examples.proto.Driver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.cyber.examples.proto.Driver;
  return proto.apollo.cyber.examples.proto.Driver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.cyber.examples.proto.Driver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.cyber.examples.proto.Driver}
 */
proto.apollo.cyber.examples.proto.Driver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMsgId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
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
proto.apollo.cyber.examples.proto.Driver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.cyber.examples.proto.Driver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.cyber.examples.proto.Driver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.examples.proto.Driver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.clearContent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.hasContent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 msg_id = 2;
 * @return {number}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.getMsgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.setMsgId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.clearMsgId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.hasMsgId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 timestamp = 3;
 * @return {number}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.examples.proto.Driver} returns this
 */
proto.apollo.cyber.examples.proto.Driver.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.examples.proto.Driver.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.apollo.cyber.examples.proto);
