// source: modules/perception/proto/perception_ultrasonic.proto
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

var modules_common_proto_header_pb = require('../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
var modules_common_proto_geometry_pb = require('../../../modules/common/proto/geometry_pb.js');
goog.object.extend(proto, modules_common_proto_geometry_pb);
goog.exportSymbol('proto.apollo.perception.ImpendingCollisionEdge', null, global);
goog.exportSymbol('proto.apollo.perception.ImpendingCollisionEdges', null, global);
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
proto.apollo.perception.ImpendingCollisionEdge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.perception.ImpendingCollisionEdge.repeatedFields_, null);
};
goog.inherits(proto.apollo.perception.ImpendingCollisionEdge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.ImpendingCollisionEdge.displayName = 'proto.apollo.perception.ImpendingCollisionEdge';
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
proto.apollo.perception.ImpendingCollisionEdges = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.perception.ImpendingCollisionEdges.repeatedFields_, null);
};
goog.inherits(proto.apollo.perception.ImpendingCollisionEdges, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.ImpendingCollisionEdges.displayName = 'proto.apollo.perception.ImpendingCollisionEdges';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.perception.ImpendingCollisionEdge.repeatedFields_ = [2,3];



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
proto.apollo.perception.ImpendingCollisionEdge.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.ImpendingCollisionEdge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.ImpendingCollisionEdge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.ImpendingCollisionEdge.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    coneIdListList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    modules_common_proto_geometry_pb.Point3D.toObject, includeInstance),
    trackingTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ImpendingCollisionEdge as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.ImpendingCollisionEdge.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.coneIdListList;

  /** @type {?|undefined} */
  this.pointList;

  /** @type {?|undefined} */
  this.trackingTime;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.ImpendingCollisionEdge.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge}
 */
proto.apollo.perception.ImpendingCollisionEdge.fromObject = function(obj) {
  var msg = new proto.apollo.perception.ImpendingCollisionEdge();
  obj.id != null && jspb.Message.setField(msg, 1, obj.id);
  obj.coneIdListList != null && jspb.Message.setField(msg, 2, obj.coneIdListList);
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.pointList.map(
          modules_common_proto_geometry_pb.Point3D.fromObject));
  obj.trackingTime != null && jspb.Message.setField(msg, 4, obj.trackingTime);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge}
 */
proto.apollo.perception.ImpendingCollisionEdge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.ImpendingCollisionEdge;
  return proto.apollo.perception.ImpendingCollisionEdge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.ImpendingCollisionEdge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge}
 */
proto.apollo.perception.ImpendingCollisionEdge.deserializeBinaryFromReader = function(msg, reader) {
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
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addConeIdList(values[i]);
      }
      break;
    case 3:
      var value = new modules_common_proto_geometry_pb.Point3D;
      reader.readMessage(value,modules_common_proto_geometry_pb.Point3D.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTrackingTime(value);
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
proto.apollo.perception.ImpendingCollisionEdge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.ImpendingCollisionEdge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.ImpendingCollisionEdge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.ImpendingCollisionEdge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getConeIdListList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      2,
      f
    );
  }
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
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
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 cone_id_list = 2;
 * @return {!Array<number>}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.getConeIdListList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.setConeIdListList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.addConeIdList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.clearConeIdListList = function() {
  return this.setConeIdListList([]);
};


/**
 * repeated apollo.common.Point3D point = 3;
 * @return {!Array<!proto.apollo.common.Point3D>}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.common.Point3D>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_geometry_pb.Point3D, 3));
};


/**
 * @param {!Array<!proto.apollo.common.Point3D>} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
*/
proto.apollo.perception.ImpendingCollisionEdge.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.common.Point3D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.Point3D}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.common.Point3D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * optional double tracking_time = 4;
 * @return {number}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.getTrackingTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.setTrackingTime = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.ImpendingCollisionEdge} returns this
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.clearTrackingTime = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.ImpendingCollisionEdge.prototype.hasTrackingTime = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.perception.ImpendingCollisionEdges.repeatedFields_ = [1];



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
proto.apollo.perception.ImpendingCollisionEdges.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.ImpendingCollisionEdges.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.ImpendingCollisionEdges} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.ImpendingCollisionEdges.toObject = function(includeInstance, msg) {
  var f, obj = {
    impendingCollisionEdgeList: jspb.Message.toObjectList(msg.getImpendingCollisionEdgeList(),
    proto.apollo.perception.ImpendingCollisionEdge.toObject, includeInstance),
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ImpendingCollisionEdges as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.ImpendingCollisionEdges.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.impendingCollisionEdgeList;

  /** @type {?|undefined} */
  this.header;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.ImpendingCollisionEdges.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.ImpendingCollisionEdges}
 */
proto.apollo.perception.ImpendingCollisionEdges.fromObject = function(obj) {
  var msg = new proto.apollo.perception.ImpendingCollisionEdges();
  obj.impendingCollisionEdgeList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.impendingCollisionEdgeList.map(
          proto.apollo.perception.ImpendingCollisionEdge.fromObject));
  obj.header && jspb.Message.setWrapperField(
      msg, 2, modules_common_proto_header_pb.Header.fromObject(obj.header));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.ImpendingCollisionEdges}
 */
proto.apollo.perception.ImpendingCollisionEdges.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.ImpendingCollisionEdges;
  return proto.apollo.perception.ImpendingCollisionEdges.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.ImpendingCollisionEdges} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.ImpendingCollisionEdges}
 */
proto.apollo.perception.ImpendingCollisionEdges.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.perception.ImpendingCollisionEdge;
      reader.readMessage(value,proto.apollo.perception.ImpendingCollisionEdge.deserializeBinaryFromReader);
      msg.addImpendingCollisionEdge(value);
      break;
    case 2:
      var value = new modules_common_proto_header_pb.Header;
      reader.readMessage(value,modules_common_proto_header_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.apollo.perception.ImpendingCollisionEdges.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.ImpendingCollisionEdges.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.ImpendingCollisionEdges} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.ImpendingCollisionEdges.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImpendingCollisionEdgeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.perception.ImpendingCollisionEdge.serializeBinaryToWriter
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ImpendingCollisionEdge impending_collision_edge = 1;
 * @return {!Array<!proto.apollo.perception.ImpendingCollisionEdge>}
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.getImpendingCollisionEdgeList = function() {
  return /** @type{!Array<!proto.apollo.perception.ImpendingCollisionEdge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.perception.ImpendingCollisionEdge, 1));
};


/**
 * @param {!Array<!proto.apollo.perception.ImpendingCollisionEdge>} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdges} returns this
*/
proto.apollo.perception.ImpendingCollisionEdges.prototype.setImpendingCollisionEdgeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.perception.ImpendingCollisionEdge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.perception.ImpendingCollisionEdge}
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.addImpendingCollisionEdge = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.perception.ImpendingCollisionEdge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.perception.ImpendingCollisionEdges} returns this
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.clearImpendingCollisionEdgeList = function() {
  return this.setImpendingCollisionEdgeList([]);
};


/**
 * optional apollo.common.Header header = 2;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 2));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.perception.ImpendingCollisionEdges} returns this
*/
proto.apollo.perception.ImpendingCollisionEdges.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.perception.ImpendingCollisionEdges} returns this
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.ImpendingCollisionEdges.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.apollo.perception);
