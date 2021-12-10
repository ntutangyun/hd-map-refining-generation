// source: modules/map/proto/map_geometry.proto
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

var modules_common_proto_geometry_pb = require('../../../modules/common/proto/geometry_pb.js');
goog.object.extend(proto, modules_common_proto_geometry_pb);
goog.exportSymbol('proto.apollo.hdmap.Curve', null, global);
goog.exportSymbol('proto.apollo.hdmap.CurveSegment', null, global);
goog.exportSymbol('proto.apollo.hdmap.CurveSegment.CurveTypeCase', null, global);
goog.exportSymbol('proto.apollo.hdmap.LineSegment', null, global);
goog.exportSymbol('proto.apollo.hdmap.Polygon', null, global);
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
proto.apollo.hdmap.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.Polygon.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Polygon.displayName = 'proto.apollo.hdmap.Polygon';
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
proto.apollo.hdmap.LineSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.LineSegment.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.LineSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.LineSegment.displayName = 'proto.apollo.hdmap.LineSegment';
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
proto.apollo.hdmap.CurveSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.apollo.hdmap.CurveSegment.oneofGroups_);
};
goog.inherits(proto.apollo.hdmap.CurveSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.CurveSegment.displayName = 'proto.apollo.hdmap.CurveSegment';
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
proto.apollo.hdmap.Curve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.Curve.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.Curve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Curve.displayName = 'proto.apollo.hdmap.Curve';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.Polygon.repeatedFields_ = [1];



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
proto.apollo.hdmap.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Polygon.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    modules_common_proto_geometry_pb.PointENU.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Polygon as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Polygon.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Polygon.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.Polygon.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Polygon();
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.pointList.map(
          modules_common_proto_geometry_pb.PointENU.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Polygon;
  return proto.apollo.hdmap.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.Polygon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_geometry_pb.PointENU;
      reader.readMessage(value,modules_common_proto_geometry_pb.PointENU.deserializeBinaryFromReader);
      msg.addPoint(value);
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
proto.apollo.hdmap.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Polygon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_common_proto_geometry_pb.PointENU.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.common.PointENU point = 1;
 * @return {!Array<!proto.apollo.common.PointENU>}
 */
proto.apollo.hdmap.Polygon.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.common.PointENU>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_geometry_pb.PointENU, 1));
};


/**
 * @param {!Array<!proto.apollo.common.PointENU>} value
 * @return {!proto.apollo.hdmap.Polygon} returns this
*/
proto.apollo.hdmap.Polygon.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.PointENU=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.PointENU}
 */
proto.apollo.hdmap.Polygon.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.PointENU, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Polygon} returns this
 */
proto.apollo.hdmap.Polygon.prototype.clearPointList = function() {
  return this.setPointList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.LineSegment.repeatedFields_ = [1];



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
proto.apollo.hdmap.LineSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.LineSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.LineSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.LineSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    modules_common_proto_geometry_pb.PointENU.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LineSegment as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.LineSegment.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.LineSegment.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.LineSegment}
 */
proto.apollo.hdmap.LineSegment.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.LineSegment();
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.pointList.map(
          modules_common_proto_geometry_pb.PointENU.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.LineSegment}
 */
proto.apollo.hdmap.LineSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.LineSegment;
  return proto.apollo.hdmap.LineSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.LineSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.LineSegment}
 */
proto.apollo.hdmap.LineSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_geometry_pb.PointENU;
      reader.readMessage(value,modules_common_proto_geometry_pb.PointENU.deserializeBinaryFromReader);
      msg.addPoint(value);
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
proto.apollo.hdmap.LineSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.LineSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.LineSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.LineSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_common_proto_geometry_pb.PointENU.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.common.PointENU point = 1;
 * @return {!Array<!proto.apollo.common.PointENU>}
 */
proto.apollo.hdmap.LineSegment.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.common.PointENU>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_geometry_pb.PointENU, 1));
};


/**
 * @param {!Array<!proto.apollo.common.PointENU>} value
 * @return {!proto.apollo.hdmap.LineSegment} returns this
*/
proto.apollo.hdmap.LineSegment.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.PointENU=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.PointENU}
 */
proto.apollo.hdmap.LineSegment.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.PointENU, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.LineSegment} returns this
 */
proto.apollo.hdmap.LineSegment.prototype.clearPointList = function() {
  return this.setPointList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.apollo.hdmap.CurveSegment.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.apollo.hdmap.CurveSegment.CurveTypeCase = {
  CURVE_TYPE_NOT_SET: 0,
  LINE_SEGMENT: 1
};

/**
 * @return {proto.apollo.hdmap.CurveSegment.CurveTypeCase}
 */
proto.apollo.hdmap.CurveSegment.prototype.getCurveTypeCase = function() {
  return /** @type {proto.apollo.hdmap.CurveSegment.CurveTypeCase} */(jspb.Message.computeOneofCase(this, proto.apollo.hdmap.CurveSegment.oneofGroups_[0]));
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
proto.apollo.hdmap.CurveSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.CurveSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.CurveSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.CurveSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    lineSegment: (f = msg.getLineSegment()) && proto.apollo.hdmap.LineSegment.toObject(includeInstance, f),
    s: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    startPosition: (f = msg.getStartPosition()) && modules_common_proto_geometry_pb.PointENU.toObject(includeInstance, f),
    heading: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    length: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CurveSegment as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.CurveSegment.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.lineSegment;

  /** @type {?|undefined} */
  this.s;

  /** @type {?|undefined} */
  this.startPosition;

  /** @type {?|undefined} */
  this.heading;

  /** @type {?|undefined} */
  this.length;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.CurveSegment.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.CurveSegment}
 */
proto.apollo.hdmap.CurveSegment.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.CurveSegment();
  obj.lineSegment && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.LineSegment.fromObject(obj.lineSegment));
  obj.s != null && jspb.Message.setField(msg, 6, obj.s);
  obj.startPosition && jspb.Message.setWrapperField(
      msg, 7, modules_common_proto_geometry_pb.PointENU.fromObject(obj.startPosition));
  obj.heading != null && jspb.Message.setField(msg, 8, obj.heading);
  obj.length != null && jspb.Message.setField(msg, 9, obj.length);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.CurveSegment}
 */
proto.apollo.hdmap.CurveSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.CurveSegment;
  return proto.apollo.hdmap.CurveSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.CurveSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.CurveSegment}
 */
proto.apollo.hdmap.CurveSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.hdmap.LineSegment;
      reader.readMessage(value,proto.apollo.hdmap.LineSegment.deserializeBinaryFromReader);
      msg.setLineSegment(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setS(value);
      break;
    case 7:
      var value = new modules_common_proto_geometry_pb.PointENU;
      reader.readMessage(value,modules_common_proto_geometry_pb.PointENU.deserializeBinaryFromReader);
      msg.setStartPosition(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
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
proto.apollo.hdmap.CurveSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.CurveSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.CurveSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.CurveSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLineSegment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.LineSegment.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStartPosition();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      modules_common_proto_geometry_pb.PointENU.serializeBinaryToWriter
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
};


/**
 * optional LineSegment line_segment = 1;
 * @return {?proto.apollo.hdmap.LineSegment}
 */
proto.apollo.hdmap.CurveSegment.prototype.getLineSegment = function() {
  return /** @type{?proto.apollo.hdmap.LineSegment} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.LineSegment, 1));
};


/**
 * @param {?proto.apollo.hdmap.LineSegment|undefined} value
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
*/
proto.apollo.hdmap.CurveSegment.prototype.setLineSegment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.apollo.hdmap.CurveSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.clearLineSegment = function() {
  return this.setLineSegment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.CurveSegment.prototype.hasLineSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double s = 6;
 * @return {number}
 */
proto.apollo.hdmap.CurveSegment.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.setS = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.clearS = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.CurveSegment.prototype.hasS = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional apollo.common.PointENU start_position = 7;
 * @return {?proto.apollo.common.PointENU}
 */
proto.apollo.hdmap.CurveSegment.prototype.getStartPosition = function() {
  return /** @type{?proto.apollo.common.PointENU} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.PointENU, 7));
};


/**
 * @param {?proto.apollo.common.PointENU|undefined} value
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
*/
proto.apollo.hdmap.CurveSegment.prototype.setStartPosition = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.clearStartPosition = function() {
  return this.setStartPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.CurveSegment.prototype.hasStartPosition = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double heading = 8;
 * @return {number}
 */
proto.apollo.hdmap.CurveSegment.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.CurveSegment.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double length = 9;
 * @return {number}
 */
proto.apollo.hdmap.CurveSegment.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.setLength = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.CurveSegment} returns this
 */
proto.apollo.hdmap.CurveSegment.prototype.clearLength = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.CurveSegment.prototype.hasLength = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.Curve.repeatedFields_ = [1];



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
proto.apollo.hdmap.Curve.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Curve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Curve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Curve.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentList: jspb.Message.toObjectList(msg.getSegmentList(),
    proto.apollo.hdmap.CurveSegment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Curve as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Curve.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.segmentList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Curve.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.Curve.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Curve();
  obj.segmentList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.segmentList.map(
          proto.apollo.hdmap.CurveSegment.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.Curve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Curve;
  return proto.apollo.hdmap.Curve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Curve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.Curve.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.hdmap.CurveSegment;
      reader.readMessage(value,proto.apollo.hdmap.CurveSegment.deserializeBinaryFromReader);
      msg.addSegment(value);
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
proto.apollo.hdmap.Curve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Curve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Curve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Curve.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.hdmap.CurveSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CurveSegment segment = 1;
 * @return {!Array<!proto.apollo.hdmap.CurveSegment>}
 */
proto.apollo.hdmap.Curve.prototype.getSegmentList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.CurveSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.CurveSegment, 1));
};


/**
 * @param {!Array<!proto.apollo.hdmap.CurveSegment>} value
 * @return {!proto.apollo.hdmap.Curve} returns this
*/
proto.apollo.hdmap.Curve.prototype.setSegmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.hdmap.CurveSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.CurveSegment}
 */
proto.apollo.hdmap.Curve.prototype.addSegment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.hdmap.CurveSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Curve} returns this
 */
proto.apollo.hdmap.Curve.prototype.clearSegmentList = function() {
  return this.setSegmentList([]);
};


goog.object.extend(exports, proto.apollo.hdmap);
