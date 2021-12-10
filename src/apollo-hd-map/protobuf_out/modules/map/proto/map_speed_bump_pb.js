// source: modules/map/proto/map_speed_bump.proto
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

var modules_map_proto_map_id_pb = require('../../../modules/map/proto/map_id_pb.js');
goog.object.extend(proto, modules_map_proto_map_id_pb);
var modules_map_proto_map_geometry_pb = require('../../../modules/map/proto/map_geometry_pb.js');
goog.object.extend(proto, modules_map_proto_map_geometry_pb);
goog.exportSymbol('proto.apollo.hdmap.SpeedBump', null, global);
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
proto.apollo.hdmap.SpeedBump = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.SpeedBump.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.SpeedBump, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.SpeedBump.displayName = 'proto.apollo.hdmap.SpeedBump';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.SpeedBump.repeatedFields_ = [2,3];



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
proto.apollo.hdmap.SpeedBump.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.SpeedBump.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.SpeedBump} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.SpeedBump.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && modules_map_proto_map_id_pb.Id.toObject(includeInstance, f),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    modules_map_proto_map_id_pb.Id.toObject, includeInstance),
    positionList: jspb.Message.toObjectList(msg.getPositionList(),
    modules_map_proto_map_geometry_pb.Curve.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SpeedBump as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.SpeedBump.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.overlapIdList;

  /** @type {?|undefined} */
  this.positionList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.SpeedBump.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.SpeedBump}
 */
proto.apollo.hdmap.SpeedBump.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.SpeedBump();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, modules_map_proto_map_id_pb.Id.fromObject(obj.id));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.overlapIdList.map(
          modules_map_proto_map_id_pb.Id.fromObject));
  obj.positionList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.positionList.map(
          modules_map_proto_map_geometry_pb.Curve.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.SpeedBump}
 */
proto.apollo.hdmap.SpeedBump.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.SpeedBump;
  return proto.apollo.hdmap.SpeedBump.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.SpeedBump} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.SpeedBump}
 */
proto.apollo.hdmap.SpeedBump.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_map_proto_map_id_pb.Id;
      reader.readMessage(value,modules_map_proto_map_id_pb.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new modules_map_proto_map_id_pb.Id;
      reader.readMessage(value,modules_map_proto_map_id_pb.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
      break;
    case 3:
      var value = new modules_map_proto_map_geometry_pb.Curve;
      reader.readMessage(value,modules_map_proto_map_geometry_pb.Curve.deserializeBinaryFromReader);
      msg.addPosition(value);
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
proto.apollo.hdmap.SpeedBump.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.SpeedBump.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.SpeedBump} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.SpeedBump.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getOverlapIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getPositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modules_map_proto_map_geometry_pb.Curve.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.SpeedBump.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, modules_map_proto_map_id_pb.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
*/
proto.apollo.hdmap.SpeedBump.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
 */
proto.apollo.hdmap.SpeedBump.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.SpeedBump.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Id overlap_id = 2;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.SpeedBump.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_map_proto_map_id_pb.Id, 2));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
*/
proto.apollo.hdmap.SpeedBump.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.SpeedBump.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
 */
proto.apollo.hdmap.SpeedBump.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


/**
 * repeated Curve position = 3;
 * @return {!Array<!proto.apollo.hdmap.Curve>}
 */
proto.apollo.hdmap.SpeedBump.prototype.getPositionList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Curve>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_map_proto_map_geometry_pb.Curve, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Curve>} value
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
*/
proto.apollo.hdmap.SpeedBump.prototype.setPositionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Curve=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.SpeedBump.prototype.addPosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Curve, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.SpeedBump} returns this
 */
proto.apollo.hdmap.SpeedBump.prototype.clearPositionList = function() {
  return this.setPositionList([]);
};


goog.object.extend(exports, proto.apollo.hdmap);
