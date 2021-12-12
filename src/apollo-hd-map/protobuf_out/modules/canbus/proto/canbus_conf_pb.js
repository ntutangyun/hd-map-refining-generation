// source: modules/canbus/proto/canbus_conf.proto
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

var modules_drivers_canbus_proto_can_card_parameter_pb = require('../../../modules/drivers/canbus/proto/can_card_parameter_pb.js');
goog.object.extend(proto, modules_drivers_canbus_proto_can_card_parameter_pb);
var modules_canbus_proto_vehicle_parameter_pb = require('../../../modules/canbus/proto/vehicle_parameter_pb.js');
goog.object.extend(proto, modules_canbus_proto_vehicle_parameter_pb);
goog.exportSymbol('proto.apollo.canbus.CanbusConf', null, global);
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
proto.apollo.canbus.CanbusConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.CanbusConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.CanbusConf.displayName = 'proto.apollo.canbus.CanbusConf';
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
proto.apollo.canbus.CanbusConf.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.CanbusConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.CanbusConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.CanbusConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleParameter: (f = msg.getVehicleParameter()) && modules_canbus_proto_vehicle_parameter_pb.VehicleParameter.toObject(includeInstance, f),
    canCardParameter: (f = msg.getCanCardParameter()) && modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter.toObject(includeInstance, f),
    enableDebugMode: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    enableReceiverLog: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    enableSenderLog: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CanbusConf as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.CanbusConf.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleParameter;

  /** @type {?|undefined} */
  this.canCardParameter;

  /** @type {?|undefined} */
  this.enableDebugMode;

  /** @type {?|undefined} */
  this.enableReceiverLog;

  /** @type {?|undefined} */
  this.enableSenderLog;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.CanbusConf.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.CanbusConf}
 */
proto.apollo.canbus.CanbusConf.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.CanbusConf();
  obj.vehicleParameter && jspb.Message.setWrapperField(
      msg, 1, modules_canbus_proto_vehicle_parameter_pb.VehicleParameter.fromObject(obj.vehicleParameter));
  obj.canCardParameter && jspb.Message.setWrapperField(
      msg, 2, modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter.fromObject(obj.canCardParameter));
  obj.enableDebugMode != null && jspb.Message.setField(msg, 3, obj.enableDebugMode);
  obj.enableReceiverLog != null && jspb.Message.setField(msg, 4, obj.enableReceiverLog);
  obj.enableSenderLog != null && jspb.Message.setField(msg, 5, obj.enableSenderLog);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.CanbusConf}
 */
proto.apollo.canbus.CanbusConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.CanbusConf;
  return proto.apollo.canbus.CanbusConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.CanbusConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.CanbusConf}
 */
proto.apollo.canbus.CanbusConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_canbus_proto_vehicle_parameter_pb.VehicleParameter;
      reader.readMessage(value,modules_canbus_proto_vehicle_parameter_pb.VehicleParameter.deserializeBinaryFromReader);
      msg.setVehicleParameter(value);
      break;
    case 2:
      var value = new modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter;
      reader.readMessage(value,modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter.deserializeBinaryFromReader);
      msg.setCanCardParameter(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableDebugMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableReceiverLog(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSenderLog(value);
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
proto.apollo.canbus.CanbusConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.CanbusConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.CanbusConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.CanbusConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVehicleParameter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_canbus_proto_vehicle_parameter_pb.VehicleParameter.serializeBinaryToWriter
    );
  }
  f = message.getCanCardParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional VehicleParameter vehicle_parameter = 1;
 * @return {?proto.apollo.canbus.VehicleParameter}
 */
proto.apollo.canbus.CanbusConf.prototype.getVehicleParameter = function() {
  return /** @type{?proto.apollo.canbus.VehicleParameter} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_vehicle_parameter_pb.VehicleParameter, 1));
};


/**
 * @param {?proto.apollo.canbus.VehicleParameter|undefined} value
 * @return {!proto.apollo.canbus.CanbusConf} returns this
*/
proto.apollo.canbus.CanbusConf.prototype.setVehicleParameter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.clearVehicleParameter = function() {
  return this.setVehicleParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.hasVehicleParameter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.drivers.canbus.CANCardParameter can_card_parameter = 2;
 * @return {?proto.apollo.drivers.canbus.CANCardParameter}
 */
proto.apollo.canbus.CanbusConf.prototype.getCanCardParameter = function() {
  return /** @type{?proto.apollo.drivers.canbus.CANCardParameter} */ (
    jspb.Message.getWrapperField(this, modules_drivers_canbus_proto_can_card_parameter_pb.CANCardParameter, 2));
};


/**
 * @param {?proto.apollo.drivers.canbus.CANCardParameter|undefined} value
 * @return {!proto.apollo.canbus.CanbusConf} returns this
*/
proto.apollo.canbus.CanbusConf.prototype.setCanCardParameter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.clearCanCardParameter = function() {
  return this.setCanCardParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.hasCanCardParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool enable_debug_mode = 3;
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.getEnableDebugMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.setEnableDebugMode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.clearEnableDebugMode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.hasEnableDebugMode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool enable_receiver_log = 4;
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.getEnableReceiverLog = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.setEnableReceiverLog = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.clearEnableReceiverLog = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.hasEnableReceiverLog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool enable_sender_log = 5;
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.getEnableSenderLog = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.setEnableSenderLog = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CanbusConf} returns this
 */
proto.apollo.canbus.CanbusConf.prototype.clearEnableSenderLog = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CanbusConf.prototype.hasEnableSenderLog = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.apollo.canbus);