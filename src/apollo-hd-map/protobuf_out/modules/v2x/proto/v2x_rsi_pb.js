// source: modules/v2x/proto/v2x_rsi.proto
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

var modules_common_proto_header_pb = require('../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
goog.exportSymbol('proto.apollo.v2x.RsiMsg', null, global);
goog.exportSymbol('proto.apollo.v2x.RsiPoint', null, global);
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
proto.apollo.v2x.RsiPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.v2x.RsiPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.v2x.RsiPoint.displayName = 'proto.apollo.v2x.RsiPoint';
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
proto.apollo.v2x.RsiMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.v2x.RsiMsg.repeatedFields_, null);
};
goog.inherits(proto.apollo.v2x.RsiMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.v2x.RsiMsg.displayName = 'proto.apollo.v2x.RsiMsg';
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
proto.apollo.v2x.RsiPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.v2x.RsiPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.v2x.RsiPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.v2x.RsiPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RsiPoint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.v2x.RsiPoint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.x;

  /** @type {?|undefined} */
  this.y;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.v2x.RsiPoint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.v2x.RsiPoint}
 */
proto.apollo.v2x.RsiPoint.fromObject = function(obj) {
  var msg = new proto.apollo.v2x.RsiPoint();
  obj.x != null && jspb.Message.setField(msg, 1, obj.x);
  obj.y != null && jspb.Message.setField(msg, 2, obj.y);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.v2x.RsiPoint}
 */
proto.apollo.v2x.RsiPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.v2x.RsiPoint;
  return proto.apollo.v2x.RsiPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.v2x.RsiPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.v2x.RsiPoint}
 */
proto.apollo.v2x.RsiPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
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
proto.apollo.v2x.RsiPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.v2x.RsiPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.v2x.RsiPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.v2x.RsiPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.apollo.v2x.RsiPoint.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiPoint} returns this
 */
proto.apollo.v2x.RsiPoint.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiPoint} returns this
 */
proto.apollo.v2x.RsiPoint.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiPoint.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.apollo.v2x.RsiPoint.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiPoint} returns this
 */
proto.apollo.v2x.RsiPoint.prototype.setY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiPoint} returns this
 */
proto.apollo.v2x.RsiPoint.prototype.clearY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiPoint.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.v2x.RsiMsg.repeatedFields_ = [2];



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
proto.apollo.v2x.RsiMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.v2x.RsiMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.v2x.RsiMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.v2x.RsiMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.apollo.v2x.RsiPoint.toObject, includeInstance),
    speed: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    lowSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    highSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    rsiType: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    radius: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    priority: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RsiMsg as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.v2x.RsiMsg.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.pointsList;

  /** @type {?|undefined} */
  this.speed;

  /** @type {?|undefined} */
  this.lowSpeed;

  /** @type {?|undefined} */
  this.highSpeed;

  /** @type {?|undefined} */
  this.description;

  /** @type {?|undefined} */
  this.rsiType;

  /** @type {?|undefined} */
  this.radius;

  /** @type {?|undefined} */
  this.priority;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.v2x.RsiMsg.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.v2x.RsiMsg}
 */
proto.apollo.v2x.RsiMsg.fromObject = function(obj) {
  var msg = new proto.apollo.v2x.RsiMsg();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, modules_common_proto_header_pb.Header.fromObject(obj.header));
  obj.pointsList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.pointsList.map(
          proto.apollo.v2x.RsiPoint.fromObject));
  obj.speed != null && jspb.Message.setField(msg, 3, obj.speed);
  obj.lowSpeed != null && jspb.Message.setField(msg, 4, obj.lowSpeed);
  obj.highSpeed != null && jspb.Message.setField(msg, 5, obj.highSpeed);
  obj.description != null && jspb.Message.setField(msg, 6, obj.description);
  obj.rsiType != null && jspb.Message.setField(msg, 7, obj.rsiType);
  obj.radius != null && jspb.Message.setField(msg, 8, obj.radius);
  obj.priority != null && jspb.Message.setField(msg, 9, obj.priority);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.v2x.RsiMsg}
 */
proto.apollo.v2x.RsiMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.v2x.RsiMsg;
  return proto.apollo.v2x.RsiMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.v2x.RsiMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.v2x.RsiMsg}
 */
proto.apollo.v2x.RsiMsg.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.v2x.RsiPoint;
      reader.readMessage(value,proto.apollo.v2x.RsiPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowSpeed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighSpeed(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRsiType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.apollo.v2x.RsiMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.v2x.RsiMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.v2x.RsiMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.v2x.RsiMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.v2x.RsiPoint.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.v2x.RsiMsg.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
*/
proto.apollo.v2x.RsiMsg.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RsiPoint points = 2;
 * @return {!Array<!proto.apollo.v2x.RsiPoint>}
 */
proto.apollo.v2x.RsiMsg.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.apollo.v2x.RsiPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.v2x.RsiPoint, 2));
};


/**
 * @param {!Array<!proto.apollo.v2x.RsiPoint>} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
*/
proto.apollo.v2x.RsiMsg.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.v2x.RsiPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.v2x.RsiPoint}
 */
proto.apollo.v2x.RsiMsg.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.v2x.RsiPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional double speed = 3;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setSpeed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearSpeed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double low_speed = 4;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getLowSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setLowSpeed = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearLowSpeed = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasLowSpeed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double high_speed = 5;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getHighSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setHighSpeed = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearHighSpeed = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasHighSpeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.apollo.v2x.RsiMsg.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 rsi_type = 7;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getRsiType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setRsiType = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearRsiType = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasRsiType = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double radius = 8;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setRadius = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearRadius = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasRadius = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 priority = 9;
 * @return {number}
 */
proto.apollo.v2x.RsiMsg.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.v2x.RsiMsg} returns this
 */
proto.apollo.v2x.RsiMsg.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.v2x.RsiMsg.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.apollo.v2x);
