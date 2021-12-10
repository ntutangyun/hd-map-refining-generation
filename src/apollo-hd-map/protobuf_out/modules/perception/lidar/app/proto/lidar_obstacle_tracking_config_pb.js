// source: modules/perception/lidar/app/proto/lidar_obstacle_tracking_config.proto
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

goog.exportSymbol('proto.apollo.perception.lidar.LidarObstacleTrackingConfig', null, global);
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
proto.apollo.perception.lidar.LidarObstacleTrackingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.lidar.LidarObstacleTrackingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.lidar.LidarObstacleTrackingConfig.displayName = 'proto.apollo.perception.lidar.LidarObstacleTrackingConfig';
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
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.lidar.LidarObstacleTrackingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    multiTargetTracker: jspb.Message.getFieldWithDefault(msg, 1, "DummyMultiTargetTracker"),
    frameClassifier: jspb.Message.getFieldWithDefault(msg, 2, "DummyClassifier"),
    fusionClassifier: jspb.Message.getFieldWithDefault(msg, 3, "DummyClassifier")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LidarObstacleTrackingConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.multiTargetTracker;

  /** @type {?|undefined} */
  this.frameClassifier;

  /** @type {?|undefined} */
  this.fusionClassifier;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.fromObject = function(obj) {
  var msg = new proto.apollo.perception.lidar.LidarObstacleTrackingConfig();
  obj.multiTargetTracker != null && jspb.Message.setField(msg, 1, obj.multiTargetTracker);
  obj.frameClassifier != null && jspb.Message.setField(msg, 2, obj.frameClassifier);
  obj.fusionClassifier != null && jspb.Message.setField(msg, 3, obj.fusionClassifier);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.lidar.LidarObstacleTrackingConfig;
  return proto.apollo.perception.lidar.LidarObstacleTrackingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMultiTargetTracker(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameClassifier(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFusionClassifier(value);
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
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.lidar.LidarObstacleTrackingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string multi_target_tracker = 1;
 * @return {string}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.getMultiTargetTracker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "DummyMultiTargetTracker"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.setMultiTargetTracker = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.clearMultiTargetTracker = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.hasMultiTargetTracker = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string frame_classifier = 2;
 * @return {string}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.getFrameClassifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "DummyClassifier"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.setFrameClassifier = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.clearFrameClassifier = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.hasFrameClassifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string fusion_classifier = 3;
 * @return {string}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.getFusionClassifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "DummyClassifier"));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.setFusionClassifier = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.LidarObstacleTrackingConfig} returns this
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.clearFusionClassifier = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.LidarObstacleTrackingConfig.prototype.hasFusionClassifier = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.apollo.perception.lidar);
