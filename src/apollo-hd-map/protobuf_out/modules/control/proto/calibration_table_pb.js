// source: modules/control/proto/calibration_table.proto
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

goog.exportSymbol('proto.apollo.control.calibrationtable.ControlCalibrationInfo', null, global);
goog.exportSymbol('proto.apollo.control.calibrationtable.ControlCalibrationTable', null, global);
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
proto.apollo.control.calibrationtable.ControlCalibrationTable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.control.calibrationtable.ControlCalibrationTable.repeatedFields_, null);
};
goog.inherits(proto.apollo.control.calibrationtable.ControlCalibrationTable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.control.calibrationtable.ControlCalibrationTable.displayName = 'proto.apollo.control.calibrationtable.ControlCalibrationTable';
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
proto.apollo.control.calibrationtable.ControlCalibrationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.control.calibrationtable.ControlCalibrationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.control.calibrationtable.ControlCalibrationInfo.displayName = 'proto.apollo.control.calibrationtable.ControlCalibrationInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.repeatedFields_ = [1];



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
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.control.calibrationtable.ControlCalibrationTable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationTable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.toObject = function(includeInstance, msg) {
  var f, obj = {
    calibrationList: jspb.Message.toObjectList(msg.getCalibrationList(),
    proto.apollo.control.calibrationtable.ControlCalibrationInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ControlCalibrationTable as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.calibrationList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationTable.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationTable}
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.fromObject = function(obj) {
  var msg = new proto.apollo.control.calibrationtable.ControlCalibrationTable();
  obj.calibrationList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.calibrationList.map(
          proto.apollo.control.calibrationtable.ControlCalibrationInfo.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationTable}
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.control.calibrationtable.ControlCalibrationTable;
  return proto.apollo.control.calibrationtable.ControlCalibrationTable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationTable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationTable}
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.control.calibrationtable.ControlCalibrationInfo;
      reader.readMessage(value,proto.apollo.control.calibrationtable.ControlCalibrationInfo.deserializeBinaryFromReader);
      msg.addCalibration(value);
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
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.control.calibrationtable.ControlCalibrationTable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationTable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalibrationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.control.calibrationtable.ControlCalibrationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ControlCalibrationInfo calibration = 1;
 * @return {!Array<!proto.apollo.control.calibrationtable.ControlCalibrationInfo>}
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.getCalibrationList = function() {
  return /** @type{!Array<!proto.apollo.control.calibrationtable.ControlCalibrationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.control.calibrationtable.ControlCalibrationInfo, 1));
};


/**
 * @param {!Array<!proto.apollo.control.calibrationtable.ControlCalibrationInfo>} value
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationTable} returns this
*/
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.setCalibrationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo}
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.addCalibration = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.control.calibrationtable.ControlCalibrationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationTable} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationTable.prototype.clearCalibrationList = function() {
  return this.setCalibrationList([]);
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
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.control.calibrationtable.ControlCalibrationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    speed: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    acceleration: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    command: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ControlCalibrationInfo as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.speed;

  /** @type {?|undefined} */
  this.acceleration;

  /** @type {?|undefined} */
  this.command;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationInfo.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.fromObject = function(obj) {
  var msg = new proto.apollo.control.calibrationtable.ControlCalibrationInfo();
  obj.speed != null && jspb.Message.setField(msg, 1, obj.speed);
  obj.acceleration != null && jspb.Message.setField(msg, 2, obj.acceleration);
  obj.command != null && jspb.Message.setField(msg, 3, obj.command);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.control.calibrationtable.ControlCalibrationInfo;
  return proto.apollo.control.calibrationtable.ControlCalibrationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAcceleration(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommand(value);
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
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.control.calibrationtable.ControlCalibrationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
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
 * optional double speed = 1;
 * @return {number}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.setSpeed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.clearSpeed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double acceleration = 2;
 * @return {number}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.getAcceleration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.setAcceleration = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.clearAcceleration = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.hasAcceleration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double command = 3;
 * @return {number}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.setCommand = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.control.calibrationtable.ControlCalibrationInfo} returns this
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.clearCommand = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.control.calibrationtable.ControlCalibrationInfo.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.apollo.control.calibrationtable);