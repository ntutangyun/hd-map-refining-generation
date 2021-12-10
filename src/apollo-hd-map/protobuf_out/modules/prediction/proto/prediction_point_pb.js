// source: modules/prediction/proto/prediction_point.proto
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

goog.exportSymbol('proto.apollo.prediction.PredictionPathPoint', null, global);
goog.exportSymbol('proto.apollo.prediction.PredictionTrajectoryPoint', null, global);
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
proto.apollo.prediction.PredictionPathPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.prediction.PredictionPathPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.prediction.PredictionPathPoint.displayName = 'proto.apollo.prediction.PredictionPathPoint';
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
proto.apollo.prediction.PredictionTrajectoryPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.prediction.PredictionTrajectoryPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.prediction.PredictionTrajectoryPoint.displayName = 'proto.apollo.prediction.PredictionTrajectoryPoint';
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
proto.apollo.prediction.PredictionPathPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.prediction.PredictionPathPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.prediction.PredictionPathPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.prediction.PredictionPathPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    velocityHeading: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PredictionPathPoint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.prediction.PredictionPathPoint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.x;

  /** @type {?|undefined} */
  this.y;

  /** @type {?|undefined} */
  this.velocityHeading;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.prediction.PredictionPathPoint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.prediction.PredictionPathPoint}
 */
proto.apollo.prediction.PredictionPathPoint.fromObject = function(obj) {
  var msg = new proto.apollo.prediction.PredictionPathPoint();
  obj.x != null && jspb.Message.setField(msg, 1, obj.x);
  obj.y != null && jspb.Message.setField(msg, 2, obj.y);
  obj.velocityHeading != null && jspb.Message.setField(msg, 3, obj.velocityHeading);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.prediction.PredictionPathPoint}
 */
proto.apollo.prediction.PredictionPathPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.prediction.PredictionPathPoint;
  return proto.apollo.prediction.PredictionPathPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.prediction.PredictionPathPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.prediction.PredictionPathPoint}
 */
proto.apollo.prediction.PredictionPathPoint.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVelocityHeading(value);
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
proto.apollo.prediction.PredictionPathPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.prediction.PredictionPathPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.prediction.PredictionPathPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.prediction.PredictionPathPoint.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * required double x = 1;
 * @return {number}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required double y = 2;
 * @return {number}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.setY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.clearY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double velocity_heading = 3;
 * @return {number}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.getVelocityHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.setVelocityHeading = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.prediction.PredictionPathPoint} returns this
 */
proto.apollo.prediction.PredictionPathPoint.prototype.clearVelocityHeading = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.prediction.PredictionPathPoint.prototype.hasVelocityHeading = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.prediction.PredictionTrajectoryPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.prediction.PredictionTrajectoryPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.prediction.PredictionTrajectoryPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathPoint: (f = msg.getPathPoint()) && proto.apollo.prediction.PredictionPathPoint.toObject(includeInstance, f),
    timestamp: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PredictionTrajectoryPoint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.prediction.PredictionTrajectoryPoint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pathPoint;

  /** @type {?|undefined} */
  this.timestamp;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.prediction.PredictionTrajectoryPoint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.fromObject = function(obj) {
  var msg = new proto.apollo.prediction.PredictionTrajectoryPoint();
  obj.pathPoint && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.prediction.PredictionPathPoint.fromObject(obj.pathPoint));
  obj.timestamp != null && jspb.Message.setField(msg, 2, obj.timestamp);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.prediction.PredictionTrajectoryPoint;
  return proto.apollo.prediction.PredictionTrajectoryPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.prediction.PredictionTrajectoryPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.prediction.PredictionPathPoint;
      reader.readMessage(value,proto.apollo.prediction.PredictionPathPoint.deserializeBinaryFromReader);
      msg.setPathPoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
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
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.prediction.PredictionTrajectoryPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.prediction.PredictionTrajectoryPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.prediction.PredictionTrajectoryPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPathPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.prediction.PredictionPathPoint.serializeBinaryToWriter
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
 * required PredictionPathPoint path_point = 1;
 * @return {!proto.apollo.prediction.PredictionPathPoint}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.getPathPoint = function() {
  return /** @type{!proto.apollo.prediction.PredictionPathPoint} */ (
    jspb.Message.getWrapperField(this, proto.apollo.prediction.PredictionPathPoint, 1, 1));
};


/**
 * @param {!proto.apollo.prediction.PredictionPathPoint} value
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint} returns this
*/
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.setPathPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint} returns this
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.clearPathPoint = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.hasPathPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required double timestamp = 2;
 * @return {number}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint} returns this
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.prediction.PredictionTrajectoryPoint} returns this
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.prediction.PredictionTrajectoryPoint.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.apollo.prediction);
