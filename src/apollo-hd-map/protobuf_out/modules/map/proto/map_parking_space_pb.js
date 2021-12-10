// source: modules/map/proto/map_parking_space.proto
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

var modules_map_proto_map_geometry_pb = require('../../../modules/map/proto/map_geometry_pb.js');
goog.object.extend(proto, modules_map_proto_map_geometry_pb);
var modules_map_proto_map_id_pb = require('../../../modules/map/proto/map_id_pb.js');
goog.object.extend(proto, modules_map_proto_map_id_pb);
goog.exportSymbol('proto.apollo.hdmap.ParkingLot', null, global);
goog.exportSymbol('proto.apollo.hdmap.ParkingSpace', null, global);
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
proto.apollo.hdmap.ParkingSpace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.ParkingSpace.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.ParkingSpace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.ParkingSpace.displayName = 'proto.apollo.hdmap.ParkingSpace';
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
proto.apollo.hdmap.ParkingLot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.ParkingLot.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.ParkingLot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.ParkingLot.displayName = 'proto.apollo.hdmap.ParkingLot';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.ParkingSpace.repeatedFields_ = [3];



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
proto.apollo.hdmap.ParkingSpace.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.ParkingSpace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.ParkingSpace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ParkingSpace.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && modules_map_proto_map_id_pb.Id.toObject(includeInstance, f),
    polygon: (f = msg.getPolygon()) && modules_map_proto_map_geometry_pb.Polygon.toObject(includeInstance, f),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    modules_map_proto_map_id_pb.Id.toObject, includeInstance),
    heading: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ParkingSpace as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.ParkingSpace.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.polygon;

  /** @type {?|undefined} */
  this.overlapIdList;

  /** @type {?|undefined} */
  this.heading;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.ParkingSpace.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.ParkingSpace}
 */
proto.apollo.hdmap.ParkingSpace.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.ParkingSpace();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, modules_map_proto_map_id_pb.Id.fromObject(obj.id));
  obj.polygon && jspb.Message.setWrapperField(
      msg, 2, modules_map_proto_map_geometry_pb.Polygon.fromObject(obj.polygon));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.overlapIdList.map(
          modules_map_proto_map_id_pb.Id.fromObject));
  obj.heading != null && jspb.Message.setField(msg, 4, obj.heading);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.ParkingSpace}
 */
proto.apollo.hdmap.ParkingSpace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.ParkingSpace;
  return proto.apollo.hdmap.ParkingSpace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.ParkingSpace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.ParkingSpace}
 */
proto.apollo.hdmap.ParkingSpace.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new modules_map_proto_map_geometry_pb.Polygon;
      reader.readMessage(value,modules_map_proto_map_geometry_pb.Polygon.deserializeBinaryFromReader);
      msg.setPolygon(value);
      break;
    case 3:
      var value = new modules_map_proto_map_id_pb.Id;
      reader.readMessage(value,modules_map_proto_map_id_pb.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
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
proto.apollo.hdmap.ParkingSpace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.ParkingSpace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.ParkingSpace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ParkingSpace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getPolygon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_map_proto_map_geometry_pb.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getOverlapIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
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
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.ParkingSpace.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, modules_map_proto_map_id_pb.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
*/
proto.apollo.hdmap.ParkingSpace.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
 */
proto.apollo.hdmap.ParkingSpace.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ParkingSpace.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Polygon polygon = 2;
 * @return {?proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.ParkingSpace.prototype.getPolygon = function() {
  return /** @type{?proto.apollo.hdmap.Polygon} */ (
    jspb.Message.getWrapperField(this, modules_map_proto_map_geometry_pb.Polygon, 2));
};


/**
 * @param {?proto.apollo.hdmap.Polygon|undefined} value
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
*/
proto.apollo.hdmap.ParkingSpace.prototype.setPolygon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
 */
proto.apollo.hdmap.ParkingSpace.prototype.clearPolygon = function() {
  return this.setPolygon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ParkingSpace.prototype.hasPolygon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Id overlap_id = 3;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.ParkingSpace.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_map_proto_map_id_pb.Id, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
*/
proto.apollo.hdmap.ParkingSpace.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.ParkingSpace.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
 */
proto.apollo.hdmap.ParkingSpace.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


/**
 * optional double heading = 4;
 * @return {number}
 */
proto.apollo.hdmap.ParkingSpace.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
 */
proto.apollo.hdmap.ParkingSpace.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.ParkingSpace} returns this
 */
proto.apollo.hdmap.ParkingSpace.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ParkingSpace.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.ParkingLot.repeatedFields_ = [3];



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
proto.apollo.hdmap.ParkingLot.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.ParkingLot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.ParkingLot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ParkingLot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && modules_map_proto_map_id_pb.Id.toObject(includeInstance, f),
    polygon: (f = msg.getPolygon()) && modules_map_proto_map_geometry_pb.Polygon.toObject(includeInstance, f),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    modules_map_proto_map_id_pb.Id.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ParkingLot as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.ParkingLot.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.polygon;

  /** @type {?|undefined} */
  this.overlapIdList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.ParkingLot.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.ParkingLot}
 */
proto.apollo.hdmap.ParkingLot.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.ParkingLot();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, modules_map_proto_map_id_pb.Id.fromObject(obj.id));
  obj.polygon && jspb.Message.setWrapperField(
      msg, 2, modules_map_proto_map_geometry_pb.Polygon.fromObject(obj.polygon));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.overlapIdList.map(
          modules_map_proto_map_id_pb.Id.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.ParkingLot}
 */
proto.apollo.hdmap.ParkingLot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.ParkingLot;
  return proto.apollo.hdmap.ParkingLot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.ParkingLot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.ParkingLot}
 */
proto.apollo.hdmap.ParkingLot.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new modules_map_proto_map_geometry_pb.Polygon;
      reader.readMessage(value,modules_map_proto_map_geometry_pb.Polygon.deserializeBinaryFromReader);
      msg.setPolygon(value);
      break;
    case 3:
      var value = new modules_map_proto_map_id_pb.Id;
      reader.readMessage(value,modules_map_proto_map_id_pb.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
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
proto.apollo.hdmap.ParkingLot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.ParkingLot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.ParkingLot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ParkingLot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getPolygon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_map_proto_map_geometry_pb.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getOverlapIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modules_map_proto_map_id_pb.Id.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.ParkingLot.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, modules_map_proto_map_id_pb.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
*/
proto.apollo.hdmap.ParkingLot.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
 */
proto.apollo.hdmap.ParkingLot.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ParkingLot.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Polygon polygon = 2;
 * @return {?proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.ParkingLot.prototype.getPolygon = function() {
  return /** @type{?proto.apollo.hdmap.Polygon} */ (
    jspb.Message.getWrapperField(this, modules_map_proto_map_geometry_pb.Polygon, 2));
};


/**
 * @param {?proto.apollo.hdmap.Polygon|undefined} value
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
*/
proto.apollo.hdmap.ParkingLot.prototype.setPolygon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
 */
proto.apollo.hdmap.ParkingLot.prototype.clearPolygon = function() {
  return this.setPolygon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ParkingLot.prototype.hasPolygon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Id overlap_id = 3;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.ParkingLot.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_map_proto_map_id_pb.Id, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
*/
proto.apollo.hdmap.ParkingLot.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.ParkingLot.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.ParkingLot} returns this
 */
proto.apollo.hdmap.ParkingLot.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


goog.object.extend(exports, proto.apollo.hdmap);
