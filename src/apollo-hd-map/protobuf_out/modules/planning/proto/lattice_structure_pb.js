// source: modules/planning/proto/lattice_structure.proto
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

goog.exportSymbol('proto.apollo.planning.PlanningTarget', null, global);
goog.exportSymbol('proto.apollo.planning.StopPoint', null, global);
goog.exportSymbol('proto.apollo.planning.StopPoint.Type', null, global);
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
proto.apollo.planning.StopPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning.StopPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning.StopPoint.displayName = 'proto.apollo.planning.StopPoint';
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
proto.apollo.planning.PlanningTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning.PlanningTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning.PlanningTarget.displayName = 'proto.apollo.planning.PlanningTarget';
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
proto.apollo.planning.StopPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning.StopPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning.StopPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning.StopPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    s: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of StopPoint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning.StopPoint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.s;

  /** @type {?|undefined} */
  this.type;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning.StopPoint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning.StopPoint}
 */
proto.apollo.planning.StopPoint.fromObject = function(obj) {
  var msg = new proto.apollo.planning.StopPoint();
  obj.s != null && jspb.Message.setField(msg, 1, obj.s);
  obj.type != null && jspb.Message.setField(msg, 2, obj.type);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning.StopPoint}
 */
proto.apollo.planning.StopPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning.StopPoint;
  return proto.apollo.planning.StopPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning.StopPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning.StopPoint}
 */
proto.apollo.planning.StopPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setS(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.planning.StopPoint.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.apollo.planning.StopPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning.StopPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning.StopPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning.StopPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.planning.StopPoint.Type} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.planning.StopPoint.Type = {
  HARD: 0,
  SOFT: 1
};

/**
 * optional double s = 1;
 * @return {number}
 */
proto.apollo.planning.StopPoint.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning.StopPoint} returns this
 */
proto.apollo.planning.StopPoint.prototype.setS = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning.StopPoint} returns this
 */
proto.apollo.planning.StopPoint.prototype.clearS = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning.StopPoint.prototype.hasS = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type type = 2;
 * @return {!proto.apollo.planning.StopPoint.Type}
 */
proto.apollo.planning.StopPoint.prototype.getType = function() {
  return /** @type {!proto.apollo.planning.StopPoint.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.planning.StopPoint.Type} value
 * @return {!proto.apollo.planning.StopPoint} returns this
 */
proto.apollo.planning.StopPoint.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning.StopPoint} returns this
 */
proto.apollo.planning.StopPoint.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning.StopPoint.prototype.hasType = function() {
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
proto.apollo.planning.PlanningTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning.PlanningTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning.PlanningTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning.PlanningTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    stopPoint: (f = msg.getStopPoint()) && proto.apollo.planning.StopPoint.toObject(includeInstance, f),
    cruiseSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PlanningTarget as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning.PlanningTarget.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.stopPoint;

  /** @type {?|undefined} */
  this.cruiseSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning.PlanningTarget.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning.PlanningTarget}
 */
proto.apollo.planning.PlanningTarget.fromObject = function(obj) {
  var msg = new proto.apollo.planning.PlanningTarget();
  obj.stopPoint && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.planning.StopPoint.fromObject(obj.stopPoint));
  obj.cruiseSpeed != null && jspb.Message.setField(msg, 2, obj.cruiseSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning.PlanningTarget}
 */
proto.apollo.planning.PlanningTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning.PlanningTarget;
  return proto.apollo.planning.PlanningTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning.PlanningTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning.PlanningTarget}
 */
proto.apollo.planning.PlanningTarget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.planning.StopPoint;
      reader.readMessage(value,proto.apollo.planning.StopPoint.deserializeBinaryFromReader);
      msg.setStopPoint(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCruiseSpeed(value);
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
proto.apollo.planning.PlanningTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning.PlanningTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning.PlanningTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning.PlanningTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStopPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.planning.StopPoint.serializeBinaryToWriter
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
 * optional StopPoint stop_point = 1;
 * @return {?proto.apollo.planning.StopPoint}
 */
proto.apollo.planning.PlanningTarget.prototype.getStopPoint = function() {
  return /** @type{?proto.apollo.planning.StopPoint} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning.StopPoint, 1));
};


/**
 * @param {?proto.apollo.planning.StopPoint|undefined} value
 * @return {!proto.apollo.planning.PlanningTarget} returns this
*/
proto.apollo.planning.PlanningTarget.prototype.setStopPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning.PlanningTarget} returns this
 */
proto.apollo.planning.PlanningTarget.prototype.clearStopPoint = function() {
  return this.setStopPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning.PlanningTarget.prototype.hasStopPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double cruise_speed = 2;
 * @return {number}
 */
proto.apollo.planning.PlanningTarget.prototype.getCruiseSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning.PlanningTarget} returns this
 */
proto.apollo.planning.PlanningTarget.prototype.setCruiseSpeed = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning.PlanningTarget} returns this
 */
proto.apollo.planning.PlanningTarget.prototype.clearCruiseSpeed = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning.PlanningTarget.prototype.hasCruiseSpeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.apollo.planning);