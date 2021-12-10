// source: modules/canbus/proto/vehicle_parameter.proto
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

var modules_canbus_proto_chassis_pb = require('../../../modules/canbus/proto/chassis_pb.js');
goog.object.extend(proto, modules_canbus_proto_chassis_pb);
var modules_common_configs_proto_vehicle_config_pb = require('../../../modules/common/configs/proto/vehicle_config_pb.js');
goog.object.extend(proto, modules_common_configs_proto_vehicle_config_pb);
goog.exportSymbol('proto.apollo.canbus.VehicleParameter', null, global);
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
proto.apollo.canbus.VehicleParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.VehicleParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.VehicleParameter.displayName = 'proto.apollo.canbus.VehicleParameter';
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
proto.apollo.canbus.VehicleParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.VehicleParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.VehicleParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.VehicleParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    brand: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    maxEnginePedal: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    maxEnableFailAttempt: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    drivingMode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of VehicleParameter as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.VehicleParameter.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.brand;

  /** @type {?|undefined} */
  this.maxEnginePedal;

  /** @type {?|undefined} */
  this.maxEnableFailAttempt;

  /** @type {?|undefined} */
  this.drivingMode;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.VehicleParameter.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.VehicleParameter}
 */
proto.apollo.canbus.VehicleParameter.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.VehicleParameter();
  obj.brand != null && jspb.Message.setField(msg, 1, obj.brand);
  obj.maxEnginePedal != null && jspb.Message.setField(msg, 2, obj.maxEnginePedal);
  obj.maxEnableFailAttempt != null && jspb.Message.setField(msg, 3, obj.maxEnableFailAttempt);
  obj.drivingMode != null && jspb.Message.setField(msg, 4, obj.drivingMode);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.VehicleParameter}
 */
proto.apollo.canbus.VehicleParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.VehicleParameter;
  return proto.apollo.canbus.VehicleParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.VehicleParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.VehicleParameter}
 */
proto.apollo.canbus.VehicleParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.common.VehicleBrand} */ (reader.readEnum());
      msg.setBrand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxEnginePedal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxEnableFailAttempt(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (reader.readEnum());
      msg.setDrivingMode(value);
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
proto.apollo.canbus.VehicleParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.VehicleParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.VehicleParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.VehicleParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.common.VehicleBrand} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional apollo.common.VehicleBrand brand = 1;
 * @return {!proto.apollo.common.VehicleBrand}
 */
proto.apollo.canbus.VehicleParameter.prototype.getBrand = function() {
  return /** @type {!proto.apollo.common.VehicleBrand} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.common.VehicleBrand} value
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.setBrand = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.clearBrand = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleParameter.prototype.hasBrand = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double max_engine_pedal = 2;
 * @return {number}
 */
proto.apollo.canbus.VehicleParameter.prototype.getMaxEnginePedal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.setMaxEnginePedal = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.clearMaxEnginePedal = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleParameter.prototype.hasMaxEnginePedal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 max_enable_fail_attempt = 3;
 * @return {number}
 */
proto.apollo.canbus.VehicleParameter.prototype.getMaxEnableFailAttempt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.setMaxEnableFailAttempt = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.clearMaxEnableFailAttempt = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleParameter.prototype.hasMaxEnableFailAttempt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Chassis.DrivingMode driving_mode = 4;
 * @return {!proto.apollo.canbus.Chassis.DrivingMode}
 */
proto.apollo.canbus.VehicleParameter.prototype.getDrivingMode = function() {
  return /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.DrivingMode} value
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.setDrivingMode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleParameter} returns this
 */
proto.apollo.canbus.VehicleParameter.prototype.clearDrivingMode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleParameter.prototype.hasDrivingMode = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.apollo.canbus);
