// source: modules/perception/onboard/proto/fusion_component_config.proto
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

goog.exportSymbol('proto.apollo.perception.onboard.FusionComponentConfig', null, global);
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
proto.apollo.perception.onboard.FusionComponentConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.onboard.FusionComponentConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.onboard.FusionComponentConfig.displayName = 'proto.apollo.perception.onboard.FusionComponentConfig';
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
proto.apollo.perception.onboard.FusionComponentConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.onboard.FusionComponentConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.onboard.FusionComponentConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.onboard.FusionComponentConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    fusionName: jspb.Message.getFieldWithDefault(msg, 1, "ObstacleMultiSensorFusion"),
    fusionMethod: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fusionMainSensor: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    objectInRoiCheck: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    radiusForRoiObjectCheck: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    outputObstaclesChannelName: jspb.Message.getFieldWithDefault(msg, 6, "/perception/vehicle/obstacles"),
    outputVizFusedContentChannelName: jspb.Message.getFieldWithDefault(msg, 7, "/perception/inner/visualization/FusedObjects")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of FusionComponentConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.onboard.FusionComponentConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.fusionName;

  /** @type {?|undefined} */
  this.fusionMethod;

  /** @type {?|undefined} */
  this.fusionMainSensor;

  /** @type {?|undefined} */
  this.objectInRoiCheck;

  /** @type {?|undefined} */
  this.radiusForRoiObjectCheck;

  /** @type {?|undefined} */
  this.outputObstaclesChannelName;

  /** @type {?|undefined} */
  this.outputVizFusedContentChannelName;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.onboard.FusionComponentConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig}
 */
proto.apollo.perception.onboard.FusionComponentConfig.fromObject = function(obj) {
  var msg = new proto.apollo.perception.onboard.FusionComponentConfig();
  obj.fusionName != null && jspb.Message.setField(msg, 1, obj.fusionName);
  obj.fusionMethod != null && jspb.Message.setField(msg, 2, obj.fusionMethod);
  obj.fusionMainSensor != null && jspb.Message.setField(msg, 3, obj.fusionMainSensor);
  obj.objectInRoiCheck != null && jspb.Message.setField(msg, 4, obj.objectInRoiCheck);
  obj.radiusForRoiObjectCheck != null && jspb.Message.setField(msg, 5, obj.radiusForRoiObjectCheck);
  obj.outputObstaclesChannelName != null && jspb.Message.setField(msg, 6, obj.outputObstaclesChannelName);
  obj.outputVizFusedContentChannelName != null && jspb.Message.setField(msg, 7, obj.outputVizFusedContentChannelName);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig}
 */
proto.apollo.perception.onboard.FusionComponentConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.onboard.FusionComponentConfig;
  return proto.apollo.perception.onboard.FusionComponentConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.onboard.FusionComponentConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig}
 */
proto.apollo.perception.onboard.FusionComponentConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFusionName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFusionMethod(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFusionMainSensor(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setObjectInRoiCheck(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadiusForRoiObjectCheck(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputObstaclesChannelName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputVizFusedContentChannelName(value);
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
proto.apollo.perception.onboard.FusionComponentConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.onboard.FusionComponentConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.onboard.FusionComponentConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.onboard.FusionComponentConfig.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string fusion_name = 1;
 * @return {string}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getFusionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "ObstacleMultiSensorFusion"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setFusionName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearFusionName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasFusionName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fusion_method = 2;
 * @return {string}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getFusionMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setFusionMethod = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearFusionMethod = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasFusionMethod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fusion_main_sensor = 3;
 * @return {string}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getFusionMainSensor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setFusionMainSensor = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearFusionMainSensor = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasFusionMainSensor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool object_in_roi_check = 4;
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getObjectInRoiCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setObjectInRoiCheck = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearObjectInRoiCheck = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasObjectInRoiCheck = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double radius_for_roi_object_check = 5;
 * @return {number}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getRadiusForRoiObjectCheck = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setRadiusForRoiObjectCheck = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearRadiusForRoiObjectCheck = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasRadiusForRoiObjectCheck = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string output_obstacles_channel_name = 6;
 * @return {string}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getOutputObstaclesChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "/perception/vehicle/obstacles"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setOutputObstaclesChannelName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearOutputObstaclesChannelName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasOutputObstaclesChannelName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string output_viz_fused_content_channel_name = 7;
 * @return {string}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.getOutputVizFusedContentChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "/perception/inner/visualization/FusedObjects"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.setOutputVizFusedContentChannelName = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.onboard.FusionComponentConfig} returns this
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.clearOutputVizFusedContentChannelName = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.onboard.FusionComponentConfig.prototype.hasOutputVizFusedContentChannelName = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.apollo.perception.onboard);