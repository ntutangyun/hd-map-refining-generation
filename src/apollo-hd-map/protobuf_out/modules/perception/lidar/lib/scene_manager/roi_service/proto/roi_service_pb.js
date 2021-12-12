// source: modules/perception/lidar/lib/scene_manager/roi_service/proto/roi_service.proto
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

goog.exportSymbol('proto.apollo.perception.lidar.ROIServiceConfig', null, global);
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
proto.apollo.perception.lidar.ROIServiceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.lidar.ROIServiceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.lidar.ROIServiceConfig.displayName = 'proto.apollo.perception.lidar.ROIServiceConfig';
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
proto.apollo.perception.lidar.ROIServiceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.lidar.ROIServiceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.lidar.ROIServiceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.ROIServiceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 120.0),
    cellSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.25)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ROIServiceConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.lidar.ROIServiceConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.range;

  /** @type {?|undefined} */
  this.cellSize;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.lidar.ROIServiceConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig}
 */
proto.apollo.perception.lidar.ROIServiceConfig.fromObject = function(obj) {
  var msg = new proto.apollo.perception.lidar.ROIServiceConfig();
  obj.range != null && jspb.Message.setField(msg, 1, obj.range);
  obj.cellSize != null && jspb.Message.setField(msg, 2, obj.cellSize);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig}
 */
proto.apollo.perception.lidar.ROIServiceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.lidar.ROIServiceConfig;
  return proto.apollo.perception.lidar.ROIServiceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.lidar.ROIServiceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig}
 */
proto.apollo.perception.lidar.ROIServiceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRange(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCellSize(value);
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
proto.apollo.perception.lidar.ROIServiceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.lidar.ROIServiceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.lidar.ROIServiceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.lidar.ROIServiceConfig.serializeBinaryToWriter = function(message, writer) {
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
 * optional double range = 1;
 * @return {number}
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 120.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig} returns this
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.setRange = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig} returns this
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.clearRange = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double cell_size = 2;
 * @return {number}
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.getCellSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.25));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig} returns this
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.setCellSize = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.lidar.ROIServiceConfig} returns this
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.clearCellSize = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.lidar.ROIServiceConfig.prototype.hasCellSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.apollo.perception.lidar);