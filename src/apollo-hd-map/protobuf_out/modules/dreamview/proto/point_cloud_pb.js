// source: modules/dreamview/proto/point_cloud.proto
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

goog.exportSymbol('proto.apollo.dreamview.PointCloud', null, global);
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
proto.apollo.dreamview.PointCloud = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.PointCloud.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.PointCloud, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.PointCloud.displayName = 'proto.apollo.dreamview.PointCloud';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.PointCloud.repeatedFields_ = [1];



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
proto.apollo.dreamview.PointCloud.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.PointCloud.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.PointCloud} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.PointCloud.toObject = function(includeInstance, msg) {
  var f, obj = {
    numList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PointCloud as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.PointCloud.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.numList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.PointCloud.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.PointCloud}
 */
proto.apollo.dreamview.PointCloud.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.PointCloud();
  obj.numList != null && jspb.Message.setField(msg, 1, obj.numList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.PointCloud}
 */
proto.apollo.dreamview.PointCloud.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.PointCloud;
  return proto.apollo.dreamview.PointCloud.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.PointCloud} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.PointCloud}
 */
proto.apollo.dreamview.PointCloud.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNum(values[i]);
      }
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
proto.apollo.dreamview.PointCloud.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.PointCloud.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.PointCloud} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.PointCloud.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float num = 1;
 * @return {!Array<number>}
 */
proto.apollo.dreamview.PointCloud.prototype.getNumList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.dreamview.PointCloud} returns this
 */
proto.apollo.dreamview.PointCloud.prototype.setNumList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.PointCloud} returns this
 */
proto.apollo.dreamview.PointCloud.prototype.addNum = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.PointCloud} returns this
 */
proto.apollo.dreamview.PointCloud.prototype.clearNumList = function() {
  return this.setNumList([]);
};


goog.object.extend(exports, proto.apollo.dreamview);
