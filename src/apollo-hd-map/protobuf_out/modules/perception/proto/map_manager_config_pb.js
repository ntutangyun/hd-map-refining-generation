// source: modules/perception/proto/map_manager_config.proto
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

goog.exportSymbol('proto.apollo.perception.lidar.MapManagerConfig', null, global);
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
proto.apollo.perception.lidar.MapManagerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.lidar.MapManagerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.lidar.MapManagerConfig.displayName = 'proto.apollo.perception.lidar.MapManagerConfig';
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
proto.apollo.perception.lidar.MapManagerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.lidar.MapManagerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.lidar.MapManagerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.MapManagerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatePose: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    roiSearchDistance: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 80.0),
    laneRange: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    maxDepth: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MapManagerConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.lidar.MapManagerConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.updatePose;

  /** @type {?|undefined} */
  this.roiSearchDistance;

  /** @type {?|undefined} */
  this.laneRange;

  /** @type {?|undefined} */
  this.maxDepth;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.lidar.MapManagerConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig}
 */
proto.apollo.perception.lidar.MapManagerConfig.fromObject = function(obj) {
  var msg = new proto.apollo.perception.lidar.MapManagerConfig();
  obj.updatePose != null && jspb.Message.setField(msg, 1, obj.updatePose);
  obj.roiSearchDistance != null && jspb.Message.setField(msg, 2, obj.roiSearchDistance);
  obj.laneRange != null && jspb.Message.setField(msg, 3, obj.laneRange);
  obj.maxDepth != null && jspb.Message.setField(msg, 4, obj.maxDepth);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig}
 */
proto.apollo.perception.lidar.MapManagerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.lidar.MapManagerConfig;
  return proto.apollo.perception.lidar.MapManagerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.lidar.MapManagerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig}
 */
proto.apollo.perception.lidar.MapManagerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdatePose(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoiSearchDistance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLaneRange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxDepth(value);
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
proto.apollo.perception.lidar.MapManagerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.lidar.MapManagerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.lidar.MapManagerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.MapManagerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional bool update_pose = 1;
 * @return {boolean}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.getUpdatePose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.setUpdatePose = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.clearUpdatePose = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.hasUpdatePose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double roi_search_distance = 2;
 * @return {number}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.getRoiSearchDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 80.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.setRoiSearchDistance = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.clearRoiSearchDistance = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.hasRoiSearchDistance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double lane_range = 3;
 * @return {number}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.getLaneRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.setLaneRange = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.clearLaneRange = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.hasLaneRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double max_depth = 4;
 * @return {number}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.setMaxDepth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.MapManagerConfig} returns this
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.clearMaxDepth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.MapManagerConfig.prototype.hasMaxDepth = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.apollo.perception.lidar);
