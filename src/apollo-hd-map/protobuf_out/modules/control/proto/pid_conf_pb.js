// source: modules/control/proto/pid_conf.proto
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

goog.exportSymbol('proto.apollo.control.PidConf', null, global);
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
proto.apollo.control.PidConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.control.PidConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.control.PidConf.displayName = 'proto.apollo.control.PidConf';
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
proto.apollo.control.PidConf.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.control.PidConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.control.PidConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.PidConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    integratorEnable: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    integratorSaturationLevel: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    kp: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    ki: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    kd: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    kaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    outputSaturationLevel: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PidConf as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.control.PidConf.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.integratorEnable;

  /** @type {?|undefined} */
  this.integratorSaturationLevel;

  /** @type {?|undefined} */
  this.kp;

  /** @type {?|undefined} */
  this.ki;

  /** @type {?|undefined} */
  this.kd;

  /** @type {?|undefined} */
  this.kaw;

  /** @type {?|undefined} */
  this.outputSaturationLevel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.control.PidConf.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.control.PidConf}
 */
proto.apollo.control.PidConf.fromObject = function(obj) {
  var msg = new proto.apollo.control.PidConf();
  obj.integratorEnable != null && jspb.Message.setField(msg, 1, obj.integratorEnable);
  obj.integratorSaturationLevel != null && jspb.Message.setField(msg, 2, obj.integratorSaturationLevel);
  obj.kp != null && jspb.Message.setField(msg, 3, obj.kp);
  obj.ki != null && jspb.Message.setField(msg, 4, obj.ki);
  obj.kd != null && jspb.Message.setField(msg, 5, obj.kd);
  obj.kaw != null && jspb.Message.setField(msg, 6, obj.kaw);
  obj.outputSaturationLevel != null && jspb.Message.setField(msg, 7, obj.outputSaturationLevel);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.control.PidConf}
 */
proto.apollo.control.PidConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.control.PidConf;
  return proto.apollo.control.PidConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.control.PidConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.control.PidConf}
 */
proto.apollo.control.PidConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntegratorEnable(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIntegratorSaturationLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKi(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKd(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKaw(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutputSaturationLevel(value);
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
proto.apollo.control.PidConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.control.PidConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.control.PidConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.PidConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional bool integrator_enable = 1;
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.getIntegratorEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setIntegratorEnable = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearIntegratorEnable = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasIntegratorEnable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double integrator_saturation_level = 2;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getIntegratorSaturationLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setIntegratorSaturationLevel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearIntegratorSaturationLevel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasIntegratorSaturationLevel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double kp = 3;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getKp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setKp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearKp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasKp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double ki = 4;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getKi = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setKi = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearKi = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasKi = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double kd = 5;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getKd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setKd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearKd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasKd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double kaw = 6;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getKaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setKaw = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearKaw = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasKaw = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double output_saturation_level = 7;
 * @return {number}
 */
proto.apollo.control.PidConf.prototype.getOutputSaturationLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.setOutputSaturationLevel = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.PidConf} returns this
 */
proto.apollo.control.PidConf.prototype.clearOutputSaturationLevel = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.PidConf.prototype.hasOutputSaturationLevel = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.apollo.control);
