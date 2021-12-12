// source: modules/perception/camera/lib/traffic_light/tracker/proto/semantic.proto
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

goog.exportSymbol('proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam', null, global);
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
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.displayName = 'proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam';
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
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    reviseTimeSecond: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 1.5),
    blinkThresholdSecond: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.4),
    hystereticThresholdCount: jspb.Message.getFieldWithDefault(msg, 3, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SemanticReviseParam as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.reviseTimeSecond;

  /** @type {?|undefined} */
  this.blinkThresholdSecond;

  /** @type {?|undefined} */
  this.hystereticThresholdCount;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.fromObject = function(obj) {
  var msg = new proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam();
  obj.reviseTimeSecond != null && jspb.Message.setField(msg, 1, obj.reviseTimeSecond);
  obj.blinkThresholdSecond != null && jspb.Message.setField(msg, 2, obj.blinkThresholdSecond);
  obj.hystereticThresholdCount != null && jspb.Message.setField(msg, 3, obj.hystereticThresholdCount);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam;
  return proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setReviseTimeSecond(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBlinkThresholdSecond(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHystereticThresholdCount(value);
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
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional float revise_time_second = 1;
 * @return {number}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.getReviseTimeSecond = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 1.5));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.setReviseTimeSecond = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.clearReviseTimeSecond = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.hasReviseTimeSecond = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float blink_threshold_second = 2;
 * @return {number}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.getBlinkThresholdSecond = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.4));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.setBlinkThresholdSecond = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.clearBlinkThresholdSecond = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.hasBlinkThresholdSecond = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 hysteretic_threshold_count = 3;
 * @return {number}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.getHystereticThresholdCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 2));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.setHystereticThresholdCount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam} returns this
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.clearHystereticThresholdCount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.camera.traffic_light.tracker.SemanticReviseParam.prototype.hasHystereticThresholdCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.apollo.perception.camera.traffic_light.tracker);