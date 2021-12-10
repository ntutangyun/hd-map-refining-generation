// source: modules/perception/proto/dst_type_fusion_config.proto
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

goog.exportSymbol('proto.apollo.perception.fusion.CameraDstTypeFusionParam', null, global);
goog.exportSymbol('proto.apollo.perception.fusion.DstTypeFusionConfig', null, global);
goog.exportSymbol('proto.apollo.perception.fusion.LidarDstTypeFusionParam', null, global);
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
proto.apollo.perception.fusion.CameraDstTypeFusionParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.fusion.CameraDstTypeFusionParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.fusion.CameraDstTypeFusionParam.displayName = 'proto.apollo.perception.fusion.CameraDstTypeFusionParam';
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
proto.apollo.perception.fusion.LidarDstTypeFusionParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.perception.fusion.LidarDstTypeFusionParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.fusion.LidarDstTypeFusionParam.displayName = 'proto.apollo.perception.fusion.LidarDstTypeFusionParam';
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
proto.apollo.perception.fusion.DstTypeFusionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.perception.fusion.DstTypeFusionConfig.repeatedFields_, null);
};
goog.inherits(proto.apollo.perception.fusion.DstTypeFusionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.perception.fusion.DstTypeFusionConfig.displayName = 'proto.apollo.perception.fusion.DstTypeFusionConfig';
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
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.fusion.CameraDstTypeFusionParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validDist: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    reliability: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    reliabilityForUnknown: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CameraDstTypeFusionParam as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.validDist;

  /** @type {?|undefined} */
  this.reliability;

  /** @type {?|undefined} */
  this.reliabilityForUnknown;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.fusion.CameraDstTypeFusionParam.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.fromObject = function(obj) {
  var msg = new proto.apollo.perception.fusion.CameraDstTypeFusionParam();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.validDist != null && jspb.Message.setField(msg, 2, obj.validDist);
  obj.reliability != null && jspb.Message.setField(msg, 3, obj.reliability);
  obj.reliabilityForUnknown != null && jspb.Message.setField(msg, 4, obj.reliabilityForUnknown);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.fusion.CameraDstTypeFusionParam;
  return proto.apollo.perception.fusion.CameraDstTypeFusionParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValidDist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReliability(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReliabilityForUnknown(value);
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
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.fusion.CameraDstTypeFusionParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double valid_dist = 2;
 * @return {number}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.getValidDist = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.setValidDist = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.clearValidDist = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.hasValidDist = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double reliability = 3;
 * @return {number}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.getReliability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.setReliability = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.clearReliability = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.hasReliability = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double reliability_for_unknown = 4;
 * @return {number}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.getReliabilityForUnknown = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.setReliabilityForUnknown = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.clearReliabilityForUnknown = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.CameraDstTypeFusionParam.prototype.hasReliabilityForUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.fusion.LidarDstTypeFusionParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reliability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    reliabilityForUnknown: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LidarDstTypeFusionParam as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.reliability;

  /** @type {?|undefined} */
  this.reliabilityForUnknown;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.fusion.LidarDstTypeFusionParam.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.fromObject = function(obj) {
  var msg = new proto.apollo.perception.fusion.LidarDstTypeFusionParam();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.reliability != null && jspb.Message.setField(msg, 2, obj.reliability);
  obj.reliabilityForUnknown != null && jspb.Message.setField(msg, 3, obj.reliabilityForUnknown);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.fusion.LidarDstTypeFusionParam;
  return proto.apollo.perception.fusion.LidarDstTypeFusionParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReliability(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReliabilityForUnknown(value);
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
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.fusion.LidarDstTypeFusionParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double reliability = 2;
 * @return {number}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.getReliability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.setReliability = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.clearReliability = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.hasReliability = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double reliability_for_unknown = 3;
 * @return {number}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.getReliabilityForUnknown = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.setReliabilityForUnknown = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam} returns this
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.clearReliabilityForUnknown = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.perception.fusion.LidarDstTypeFusionParam.prototype.hasReliabilityForUnknown = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.repeatedFields_ = [1,2];



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
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.perception.fusion.DstTypeFusionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.perception.fusion.DstTypeFusionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameraParamsList: jspb.Message.toObjectList(msg.getCameraParamsList(),
    proto.apollo.perception.fusion.CameraDstTypeFusionParam.toObject, includeInstance),
    lidarParamsList: jspb.Message.toObjectList(msg.getLidarParamsList(),
    proto.apollo.perception.fusion.LidarDstTypeFusionParam.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DstTypeFusionConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.cameraParamsList;

  /** @type {?|undefined} */
  this.lidarParamsList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.perception.fusion.DstTypeFusionConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.fromObject = function(obj) {
  var msg = new proto.apollo.perception.fusion.DstTypeFusionConfig();
  obj.cameraParamsList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.cameraParamsList.map(
          proto.apollo.perception.fusion.CameraDstTypeFusionParam.fromObject));
  obj.lidarParamsList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.lidarParamsList.map(
          proto.apollo.perception.fusion.LidarDstTypeFusionParam.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.perception.fusion.DstTypeFusionConfig;
  return proto.apollo.perception.fusion.DstTypeFusionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.perception.fusion.DstTypeFusionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.perception.fusion.CameraDstTypeFusionParam;
      reader.readMessage(value,proto.apollo.perception.fusion.CameraDstTypeFusionParam.deserializeBinaryFromReader);
      msg.addCameraParams(value);
      break;
    case 2:
      var value = new proto.apollo.perception.fusion.LidarDstTypeFusionParam;
      reader.readMessage(value,proto.apollo.perception.fusion.LidarDstTypeFusionParam.deserializeBinaryFromReader);
      msg.addLidarParams(value);
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
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.perception.fusion.DstTypeFusionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.perception.fusion.DstTypeFusionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.perception.fusion.CameraDstTypeFusionParam.serializeBinaryToWriter
    );
  }
  f = message.getLidarParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.perception.fusion.LidarDstTypeFusionParam.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CameraDstTypeFusionParam camera_params = 1;
 * @return {!Array<!proto.apollo.perception.fusion.CameraDstTypeFusionParam>}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.getCameraParamsList = function() {
  return /** @type{!Array<!proto.apollo.perception.fusion.CameraDstTypeFusionParam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.perception.fusion.CameraDstTypeFusionParam, 1));
};


/**
 * @param {!Array<!proto.apollo.perception.fusion.CameraDstTypeFusionParam>} value
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig} returns this
*/
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.setCameraParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.perception.fusion.CameraDstTypeFusionParam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.perception.fusion.CameraDstTypeFusionParam}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.addCameraParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.perception.fusion.CameraDstTypeFusionParam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig} returns this
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.clearCameraParamsList = function() {
  return this.setCameraParamsList([]);
};


/**
 * repeated LidarDstTypeFusionParam lidar_params = 2;
 * @return {!Array<!proto.apollo.perception.fusion.LidarDstTypeFusionParam>}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.getLidarParamsList = function() {
  return /** @type{!Array<!proto.apollo.perception.fusion.LidarDstTypeFusionParam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.perception.fusion.LidarDstTypeFusionParam, 2));
};


/**
 * @param {!Array<!proto.apollo.perception.fusion.LidarDstTypeFusionParam>} value
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig} returns this
*/
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.setLidarParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.perception.fusion.LidarDstTypeFusionParam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.perception.fusion.LidarDstTypeFusionParam}
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.addLidarParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.perception.fusion.LidarDstTypeFusionParam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.perception.fusion.DstTypeFusionConfig} returns this
 */
proto.apollo.perception.fusion.DstTypeFusionConfig.prototype.clearLidarParamsList = function() {
  return this.setLidarParamsList([]);
};


goog.object.extend(exports, proto.apollo.perception.fusion);
