// source: modules/common/vehicle_model/proto/vehicle_model_config.proto
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

goog.exportSymbol('proto.apollo.common.ComCenteredDynamicBicycleModelConfig', null, global);
goog.exportSymbol('proto.apollo.common.MlpModelConfig', null, global);
goog.exportSymbol('proto.apollo.common.RearCenteredKinematicBicycleModelConfig', null, global);
goog.exportSymbol('proto.apollo.common.VehicleModelConfig', null, global);
goog.exportSymbol('proto.apollo.common.VehicleModelConfig.ModelType', null, global);
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
proto.apollo.common.VehicleModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.VehicleModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.VehicleModelConfig.displayName = 'proto.apollo.common.VehicleModelConfig';
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
proto.apollo.common.RearCenteredKinematicBicycleModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.RearCenteredKinematicBicycleModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.RearCenteredKinematicBicycleModelConfig.displayName = 'proto.apollo.common.RearCenteredKinematicBicycleModelConfig';
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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.ComCenteredDynamicBicycleModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.ComCenteredDynamicBicycleModelConfig.displayName = 'proto.apollo.common.ComCenteredDynamicBicycleModelConfig';
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
proto.apollo.common.MlpModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.MlpModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.MlpModelConfig.displayName = 'proto.apollo.common.MlpModelConfig';
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
proto.apollo.common.VehicleModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.VehicleModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.VehicleModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    rcKinematicBicycleModel: (f = msg.getRcKinematicBicycleModel()) && proto.apollo.common.RearCenteredKinematicBicycleModelConfig.toObject(includeInstance, f),
    comcDynamicBicycleModel: (f = msg.getComcDynamicBicycleModel()) && proto.apollo.common.ComCenteredDynamicBicycleModelConfig.toObject(includeInstance, f),
    mlpModel: (f = msg.getMlpModel()) && proto.apollo.common.MlpModelConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of VehicleModelConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.VehicleModelConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.modelType;

  /** @type {?|undefined} */
  this.rcKinematicBicycleModel;

  /** @type {?|undefined} */
  this.comcDynamicBicycleModel;

  /** @type {?|undefined} */
  this.mlpModel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.VehicleModelConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.VehicleModelConfig}
 */
proto.apollo.common.VehicleModelConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.VehicleModelConfig();
  obj.modelType != null && jspb.Message.setField(msg, 1, obj.modelType);
  obj.rcKinematicBicycleModel && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.common.RearCenteredKinematicBicycleModelConfig.fromObject(obj.rcKinematicBicycleModel));
  obj.comcDynamicBicycleModel && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.common.ComCenteredDynamicBicycleModelConfig.fromObject(obj.comcDynamicBicycleModel));
  obj.mlpModel && jspb.Message.setWrapperField(
      msg, 4, proto.apollo.common.MlpModelConfig.fromObject(obj.mlpModel));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.VehicleModelConfig}
 */
proto.apollo.common.VehicleModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.VehicleModelConfig;
  return proto.apollo.common.VehicleModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.VehicleModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.VehicleModelConfig}
 */
proto.apollo.common.VehicleModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.common.VehicleModelConfig.ModelType} */ (reader.readEnum());
      msg.setModelType(value);
      break;
    case 2:
      var value = new proto.apollo.common.RearCenteredKinematicBicycleModelConfig;
      reader.readMessage(value,proto.apollo.common.RearCenteredKinematicBicycleModelConfig.deserializeBinaryFromReader);
      msg.setRcKinematicBicycleModel(value);
      break;
    case 3:
      var value = new proto.apollo.common.ComCenteredDynamicBicycleModelConfig;
      reader.readMessage(value,proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinaryFromReader);
      msg.setComcDynamicBicycleModel(value);
      break;
    case 4:
      var value = new proto.apollo.common.MlpModelConfig;
      reader.readMessage(value,proto.apollo.common.MlpModelConfig.deserializeBinaryFromReader);
      msg.setMlpModel(value);
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
proto.apollo.common.VehicleModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.VehicleModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.VehicleModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.common.VehicleModelConfig.ModelType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRcKinematicBicycleModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.common.RearCenteredKinematicBicycleModelConfig.serializeBinaryToWriter
    );
  }
  f = message.getComcDynamicBicycleModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.common.ComCenteredDynamicBicycleModelConfig.serializeBinaryToWriter
    );
  }
  f = message.getMlpModel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.common.MlpModelConfig.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.common.VehicleModelConfig.ModelType = {
  REAR_CENTERED_KINEMATIC_BICYCLE_MODEL: 0,
  COM_CENTERED_DYNAMIC_BICYCLE_MODEL: 1,
  MLP_MODEL: 2
};

/**
 * optional ModelType model_type = 1;
 * @return {!proto.apollo.common.VehicleModelConfig.ModelType}
 */
proto.apollo.common.VehicleModelConfig.prototype.getModelType = function() {
  return /** @type {!proto.apollo.common.VehicleModelConfig.ModelType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.common.VehicleModelConfig.ModelType} value
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
 */
proto.apollo.common.VehicleModelConfig.prototype.setModelType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
 */
proto.apollo.common.VehicleModelConfig.prototype.clearModelType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleModelConfig.prototype.hasModelType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RearCenteredKinematicBicycleModelConfig rc_kinematic_bicycle_model = 2;
 * @return {?proto.apollo.common.RearCenteredKinematicBicycleModelConfig}
 */
proto.apollo.common.VehicleModelConfig.prototype.getRcKinematicBicycleModel = function() {
  return /** @type{?proto.apollo.common.RearCenteredKinematicBicycleModelConfig} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.RearCenteredKinematicBicycleModelConfig, 2));
};


/**
 * @param {?proto.apollo.common.RearCenteredKinematicBicycleModelConfig|undefined} value
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
*/
proto.apollo.common.VehicleModelConfig.prototype.setRcKinematicBicycleModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
 */
proto.apollo.common.VehicleModelConfig.prototype.clearRcKinematicBicycleModel = function() {
  return this.setRcKinematicBicycleModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleModelConfig.prototype.hasRcKinematicBicycleModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ComCenteredDynamicBicycleModelConfig comc_dynamic_bicycle_model = 3;
 * @return {?proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.VehicleModelConfig.prototype.getComcDynamicBicycleModel = function() {
  return /** @type{?proto.apollo.common.ComCenteredDynamicBicycleModelConfig} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.ComCenteredDynamicBicycleModelConfig, 3));
};


/**
 * @param {?proto.apollo.common.ComCenteredDynamicBicycleModelConfig|undefined} value
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
*/
proto.apollo.common.VehicleModelConfig.prototype.setComcDynamicBicycleModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
 */
proto.apollo.common.VehicleModelConfig.prototype.clearComcDynamicBicycleModel = function() {
  return this.setComcDynamicBicycleModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleModelConfig.prototype.hasComcDynamicBicycleModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MlpModelConfig mlp_model = 4;
 * @return {?proto.apollo.common.MlpModelConfig}
 */
proto.apollo.common.VehicleModelConfig.prototype.getMlpModel = function() {
  return /** @type{?proto.apollo.common.MlpModelConfig} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.MlpModelConfig, 4));
};


/**
 * @param {?proto.apollo.common.MlpModelConfig|undefined} value
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
*/
proto.apollo.common.VehicleModelConfig.prototype.setMlpModel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleModelConfig} returns this
 */
proto.apollo.common.VehicleModelConfig.prototype.clearMlpModel = function() {
  return this.setMlpModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleModelConfig.prototype.hasMlpModel = function() {
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
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.RearCenteredKinematicBicycleModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    dt: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RearCenteredKinematicBicycleModelConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dt;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig}
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.RearCenteredKinematicBicycleModelConfig();
  obj.dt != null && jspb.Message.setField(msg, 1, obj.dt);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig}
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.RearCenteredKinematicBicycleModelConfig;
  return proto.apollo.common.RearCenteredKinematicBicycleModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig}
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDt(value);
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
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.RearCenteredKinematicBicycleModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double dt = 1;
 * @return {number}
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.getDt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig} returns this
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.setDt = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.RearCenteredKinematicBicycleModelConfig} returns this
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.clearDt = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.RearCenteredKinematicBicycleModelConfig.prototype.hasDt = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.ComCenteredDynamicBicycleModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    dt: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ComCenteredDynamicBicycleModelConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dt;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.ComCenteredDynamicBicycleModelConfig();
  obj.dt != null && jspb.Message.setField(msg, 1, obj.dt);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.ComCenteredDynamicBicycleModelConfig;
  return proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDt(value);
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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.ComCenteredDynamicBicycleModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double dt = 1;
 * @return {number}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.getDt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} returns this
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.setDt = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} returns this
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.clearDt = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.hasDt = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.common.MlpModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.MlpModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.MlpModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.MlpModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    dt: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MlpModelConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.MlpModelConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dt;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.MlpModelConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.MlpModelConfig}
 */
proto.apollo.common.MlpModelConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.MlpModelConfig();
  obj.dt != null && jspb.Message.setField(msg, 1, obj.dt);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.MlpModelConfig}
 */
proto.apollo.common.MlpModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.MlpModelConfig;
  return proto.apollo.common.MlpModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.MlpModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.MlpModelConfig}
 */
proto.apollo.common.MlpModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDt(value);
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
proto.apollo.common.MlpModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.MlpModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.MlpModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.MlpModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double dt = 1;
 * @return {number}
 */
proto.apollo.common.MlpModelConfig.prototype.getDt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.MlpModelConfig} returns this
 */
proto.apollo.common.MlpModelConfig.prototype.setDt = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.MlpModelConfig} returns this
 */
proto.apollo.common.MlpModelConfig.prototype.clearDt = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.MlpModelConfig.prototype.hasDt = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.apollo.common);