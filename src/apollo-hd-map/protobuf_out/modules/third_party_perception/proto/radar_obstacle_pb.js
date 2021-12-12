// source: modules/third_party_perception/proto/radar_obstacle.proto
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

var modules_common_proto_error_code_pb = require('../../../modules/common/proto/error_code_pb.js');
goog.object.extend(proto, modules_common_proto_error_code_pb);
var modules_common_proto_header_pb = require('../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
var modules_common_proto_geometry_pb = require('../../../modules/common/proto/geometry_pb.js');
goog.object.extend(proto, modules_common_proto_geometry_pb);
goog.exportSymbol('proto.apollo.third_party_perception.RadarObstacle', null, global);
goog.exportSymbol('proto.apollo.third_party_perception.RadarObstacles', null, global);
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
proto.apollo.third_party_perception.RadarObstacle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.third_party_perception.RadarObstacle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.third_party_perception.RadarObstacle.displayName = 'proto.apollo.third_party_perception.RadarObstacle';
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
proto.apollo.third_party_perception.RadarObstacles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.third_party_perception.RadarObstacles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.third_party_perception.RadarObstacles.displayName = 'proto.apollo.third_party_perception.RadarObstacles';
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
proto.apollo.third_party_perception.RadarObstacle.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.third_party_perception.RadarObstacle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.third_party_perception.RadarObstacle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.third_party_perception.RadarObstacle.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    relativePosition: (f = msg.getRelativePosition()) && modules_common_proto_geometry_pb.Point3D.toObject(includeInstance, f),
    relativeVelocity: (f = msg.getRelativeVelocity()) && modules_common_proto_geometry_pb.Point3D.toObject(includeInstance, f),
    rcs: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    movable: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    width: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    length: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    height: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    theta: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    absolutePosition: (f = msg.getAbsolutePosition()) && modules_common_proto_geometry_pb.Point3D.toObject(includeInstance, f),
    absoluteVelocity: (f = msg.getAbsoluteVelocity()) && modules_common_proto_geometry_pb.Point3D.toObject(includeInstance, f),
    count: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    movingFramesCount: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RadarObstacle as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.third_party_perception.RadarObstacle.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.relativePosition;

  /** @type {?|undefined} */
  this.relativeVelocity;

  /** @type {?|undefined} */
  this.rcs;

  /** @type {?|undefined} */
  this.movable;

  /** @type {?|undefined} */
  this.width;

  /** @type {?|undefined} */
  this.length;

  /** @type {?|undefined} */
  this.height;

  /** @type {?|undefined} */
  this.theta;

  /** @type {?|undefined} */
  this.absolutePosition;

  /** @type {?|undefined} */
  this.absoluteVelocity;

  /** @type {?|undefined} */
  this.count;

  /** @type {?|undefined} */
  this.movingFramesCount;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.third_party_perception.RadarObstacle.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.third_party_perception.RadarObstacle}
 */
proto.apollo.third_party_perception.RadarObstacle.fromObject = function(obj) {
  var msg = new proto.apollo.third_party_perception.RadarObstacle();
  obj.id != null && jspb.Message.setField(msg, 1, obj.id);
  obj.relativePosition && jspb.Message.setWrapperField(
      msg, 2, modules_common_proto_geometry_pb.Point3D.fromObject(obj.relativePosition));
  obj.relativeVelocity && jspb.Message.setWrapperField(
      msg, 3, modules_common_proto_geometry_pb.Point3D.fromObject(obj.relativeVelocity));
  obj.rcs != null && jspb.Message.setField(msg, 4, obj.rcs);
  obj.movable != null && jspb.Message.setField(msg, 5, obj.movable);
  obj.width != null && jspb.Message.setField(msg, 6, obj.width);
  obj.length != null && jspb.Message.setField(msg, 7, obj.length);
  obj.height != null && jspb.Message.setField(msg, 8, obj.height);
  obj.theta != null && jspb.Message.setField(msg, 9, obj.theta);
  obj.absolutePosition && jspb.Message.setWrapperField(
      msg, 10, modules_common_proto_geometry_pb.Point3D.fromObject(obj.absolutePosition));
  obj.absoluteVelocity && jspb.Message.setWrapperField(
      msg, 11, modules_common_proto_geometry_pb.Point3D.fromObject(obj.absoluteVelocity));
  obj.count != null && jspb.Message.setField(msg, 12, obj.count);
  obj.movingFramesCount != null && jspb.Message.setField(msg, 13, obj.movingFramesCount);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.third_party_perception.RadarObstacle}
 */
proto.apollo.third_party_perception.RadarObstacle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.third_party_perception.RadarObstacle;
  return proto.apollo.third_party_perception.RadarObstacle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.third_party_perception.RadarObstacle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.third_party_perception.RadarObstacle}
 */
proto.apollo.third_party_perception.RadarObstacle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new modules_common_proto_geometry_pb.Point3D;
      reader.readMessage(value,modules_common_proto_geometry_pb.Point3D.deserializeBinaryFromReader);
      msg.setRelativePosition(value);
      break;
    case 3:
      var value = new modules_common_proto_geometry_pb.Point3D;
      reader.readMessage(value,modules_common_proto_geometry_pb.Point3D.deserializeBinaryFromReader);
      msg.setRelativeVelocity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRcs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMovable(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeight(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTheta(value);
      break;
    case 10:
      var value = new modules_common_proto_geometry_pb.Point3D;
      reader.readMessage(value,modules_common_proto_geometry_pb.Point3D.deserializeBinaryFromReader);
      msg.setAbsolutePosition(value);
      break;
    case 11:
      var value = new modules_common_proto_geometry_pb.Point3D;
      reader.readMessage(value,modules_common_proto_geometry_pb.Point3D.deserializeBinaryFromReader);
      msg.setAbsoluteVelocity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMovingFramesCount(value);
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
proto.apollo.third_party_perception.RadarObstacle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.third_party_perception.RadarObstacle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.third_party_perception.RadarObstacle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.third_party_perception.RadarObstacle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRelativePosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_common_proto_geometry_pb.Point3D.serializeBinaryToWriter
    );
  }
  f = message.getRelativeVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modules_common_proto_geometry_pb.Point3D.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
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
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getAbsolutePosition();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      modules_common_proto_geometry_pb.Point3D.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteVelocity();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      modules_common_proto_geometry_pb.Point3D.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.common.Point3D relative_position = 2;
 * @return {?proto.apollo.common.Point3D}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getRelativePosition = function() {
  return /** @type{?proto.apollo.common.Point3D} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.Point3D, 2));
};


/**
 * @param {?proto.apollo.common.Point3D|undefined} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
*/
proto.apollo.third_party_perception.RadarObstacle.prototype.setRelativePosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearRelativePosition = function() {
  return this.setRelativePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasRelativePosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional apollo.common.Point3D relative_velocity = 3;
 * @return {?proto.apollo.common.Point3D}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getRelativeVelocity = function() {
  return /** @type{?proto.apollo.common.Point3D} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.Point3D, 3));
};


/**
 * @param {?proto.apollo.common.Point3D|undefined} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
*/
proto.apollo.third_party_perception.RadarObstacle.prototype.setRelativeVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearRelativeVelocity = function() {
  return this.setRelativeVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasRelativeVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double rcs = 4;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getRcs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setRcs = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearRcs = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasRcs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool movable = 5;
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getMovable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setMovable = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearMovable = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasMovable = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double width = 6;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double length = 7;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setLength = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearLength = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasLength = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double height = 8;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double theta = 9;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getTheta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setTheta = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearTheta = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasTheta = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional apollo.common.Point3D absolute_position = 10;
 * @return {?proto.apollo.common.Point3D}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getAbsolutePosition = function() {
  return /** @type{?proto.apollo.common.Point3D} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.Point3D, 10));
};


/**
 * @param {?proto.apollo.common.Point3D|undefined} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
*/
proto.apollo.third_party_perception.RadarObstacle.prototype.setAbsolutePosition = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearAbsolutePosition = function() {
  return this.setAbsolutePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasAbsolutePosition = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional apollo.common.Point3D absolute_velocity = 11;
 * @return {?proto.apollo.common.Point3D}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getAbsoluteVelocity = function() {
  return /** @type{?proto.apollo.common.Point3D} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.Point3D, 11));
};


/**
 * @param {?proto.apollo.common.Point3D|undefined} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
*/
proto.apollo.third_party_perception.RadarObstacle.prototype.setAbsoluteVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearAbsoluteVelocity = function() {
  return this.setAbsoluteVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasAbsoluteVelocity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 count = 12;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setCount = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearCount = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasCount = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 moving_frames_count = 13;
 * @return {number}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.getMovingFramesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.setMovingFramesCount = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacle} returns this
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.clearMovingFramesCount = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacle.prototype.hasMovingFramesCount = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.apollo.third_party_perception.RadarObstacles.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.third_party_perception.RadarObstacles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.third_party_perception.RadarObstacles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.third_party_perception.RadarObstacles.toObject = function(includeInstance, msg) {
  var f, obj = {
    radarObstacleMap: (f = msg.getRadarObstacleMap()) ? f.toObject(includeInstance, proto.apollo.third_party_perception.RadarObstacle.toObject) : [],
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    errorCode: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RadarObstacles as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.third_party_perception.RadarObstacles.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.radarObstacleMap;

  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.errorCode;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.third_party_perception.RadarObstacles.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.third_party_perception.RadarObstacles}
 */
proto.apollo.third_party_perception.RadarObstacles.fromObject = function(obj) {
  var msg = new proto.apollo.third_party_perception.RadarObstacles();
  obj.radarObstacleMap && jspb.Message.setWrapperField(
      msg, 1, jspb.Map.fromObject(obj.radarObstacleMap, proto.apollo.third_party_perception.RadarObstacle, proto.apollo.third_party_perception.RadarObstacle.fromObject));
  obj.header && jspb.Message.setWrapperField(
      msg, 2, modules_common_proto_header_pb.Header.fromObject(obj.header));
  obj.errorCode != null && jspb.Message.setField(msg, 3, obj.errorCode);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.third_party_perception.RadarObstacles}
 */
proto.apollo.third_party_perception.RadarObstacles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.third_party_perception.RadarObstacles;
  return proto.apollo.third_party_perception.RadarObstacles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.third_party_perception.RadarObstacles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.third_party_perception.RadarObstacles}
 */
proto.apollo.third_party_perception.RadarObstacles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRadarObstacleMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.apollo.third_party_perception.RadarObstacle.deserializeBinaryFromReader, 0, new proto.apollo.third_party_perception.RadarObstacle());
         });
      break;
    case 2:
      var value = new modules_common_proto_header_pb.Header;
      reader.readMessage(value,modules_common_proto_header_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.common.ErrorCode} */ (reader.readEnum());
      msg.setErrorCode(value);
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
proto.apollo.third_party_perception.RadarObstacles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.third_party_perception.RadarObstacles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.third_party_perception.RadarObstacles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.third_party_perception.RadarObstacles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRadarObstacleMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.third_party_perception.RadarObstacle.serializeBinaryToWriter);
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.apollo.common.ErrorCode} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * map<int32, RadarObstacle> radar_obstacle = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.apollo.third_party_perception.RadarObstacle>}
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.getRadarObstacleMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.apollo.third_party_perception.RadarObstacle>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.apollo.third_party_perception.RadarObstacle));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.third_party_perception.RadarObstacles} returns this
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.clearRadarObstacleMap = function() {
  this.getRadarObstacleMap().clear();
  return this;};


/**
 * optional apollo.common.Header header = 2;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 2));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.third_party_perception.RadarObstacles} returns this
*/
proto.apollo.third_party_perception.RadarObstacles.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacles} returns this
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional apollo.common.ErrorCode error_code = 3;
 * @return {!proto.apollo.common.ErrorCode}
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.getErrorCode = function() {
  return /** @type {!proto.apollo.common.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.common.ErrorCode} value
 * @return {!proto.apollo.third_party_perception.RadarObstacles} returns this
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.setErrorCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.third_party_perception.RadarObstacles} returns this
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.clearErrorCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.third_party_perception.RadarObstacles.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.apollo.third_party_perception);