// source: modules/data/tools/smart_recorder/proto/smart_recorder_triggers.proto
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

goog.exportSymbol('proto.apollo.data.RecordSegmentSetting', null, global);
goog.exportSymbol('proto.apollo.data.SmartRecordTrigger', null, global);
goog.exportSymbol('proto.apollo.data.Trigger', null, global);
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
proto.apollo.data.RecordSegmentSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.data.RecordSegmentSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.data.RecordSegmentSetting.displayName = 'proto.apollo.data.RecordSegmentSetting';
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
proto.apollo.data.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.data.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.data.Trigger.displayName = 'proto.apollo.data.Trigger';
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
proto.apollo.data.SmartRecordTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.data.SmartRecordTrigger.repeatedFields_, null);
};
goog.inherits(proto.apollo.data.SmartRecordTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.data.SmartRecordTrigger.displayName = 'proto.apollo.data.SmartRecordTrigger';
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
proto.apollo.data.RecordSegmentSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.data.RecordSegmentSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.data.RecordSegmentSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.RecordSegmentSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    sizeSegment: jspb.Message.getFieldWithDefault(msg, 1, 500),
    timeSegment: jspb.Message.getFieldWithDefault(msg, 2, 180)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RecordSegmentSetting as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.data.RecordSegmentSetting.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.sizeSegment;

  /** @type {?|undefined} */
  this.timeSegment;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.data.RecordSegmentSetting.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.data.RecordSegmentSetting}
 */
proto.apollo.data.RecordSegmentSetting.fromObject = function(obj) {
  var msg = new proto.apollo.data.RecordSegmentSetting();
  obj.sizeSegment != null && jspb.Message.setField(msg, 1, obj.sizeSegment);
  obj.timeSegment != null && jspb.Message.setField(msg, 2, obj.timeSegment);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.data.RecordSegmentSetting}
 */
proto.apollo.data.RecordSegmentSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.data.RecordSegmentSetting;
  return proto.apollo.data.RecordSegmentSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.data.RecordSegmentSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.data.RecordSegmentSetting}
 */
proto.apollo.data.RecordSegmentSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSizeSegment(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeSegment(value);
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
proto.apollo.data.RecordSegmentSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.data.RecordSegmentSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.data.RecordSegmentSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.RecordSegmentSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 size_segment = 1;
 * @return {number}
 */
proto.apollo.data.RecordSegmentSetting.prototype.getSizeSegment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 500));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.RecordSegmentSetting} returns this
 */
proto.apollo.data.RecordSegmentSetting.prototype.setSizeSegment = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.RecordSegmentSetting} returns this
 */
proto.apollo.data.RecordSegmentSetting.prototype.clearSizeSegment = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.RecordSegmentSetting.prototype.hasSizeSegment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 time_segment = 2;
 * @return {number}
 */
proto.apollo.data.RecordSegmentSetting.prototype.getTimeSegment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 180));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.RecordSegmentSetting} returns this
 */
proto.apollo.data.RecordSegmentSetting.prototype.setTimeSegment = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.RecordSegmentSetting} returns this
 */
proto.apollo.data.RecordSegmentSetting.prototype.clearTimeSegment = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.RecordSegmentSetting.prototype.hasTimeSegment = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.apollo.data.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.data.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.data.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    backwardTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    forwardTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Trigger as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.data.Trigger.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.triggerName;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.backwardTime;

  /** @type {?|undefined} */
  this.forwardTime;

  /** @type {?|undefined} */
  this.description;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.data.Trigger.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.data.Trigger}
 */
proto.apollo.data.Trigger.fromObject = function(obj) {
  var msg = new proto.apollo.data.Trigger();
  obj.triggerName != null && jspb.Message.setField(msg, 1, obj.triggerName);
  obj.enabled != null && jspb.Message.setField(msg, 2, obj.enabled);
  obj.backwardTime != null && jspb.Message.setField(msg, 3, obj.backwardTime);
  obj.forwardTime != null && jspb.Message.setField(msg, 4, obj.forwardTime);
  obj.description != null && jspb.Message.setField(msg, 5, obj.description);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.data.Trigger}
 */
proto.apollo.data.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.data.Trigger;
  return proto.apollo.data.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.data.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.data.Trigger}
 */
proto.apollo.data.Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBackwardTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setForwardTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.apollo.data.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.data.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.data.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string trigger_name = 1;
 * @return {string}
 */
proto.apollo.data.Trigger.prototype.getTriggerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.setTriggerName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.clearTriggerName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.hasTriggerName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double backward_time = 3;
 * @return {number}
 */
proto.apollo.data.Trigger.prototype.getBackwardTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.setBackwardTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.clearBackwardTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.hasBackwardTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double forward_time = 4;
 * @return {number}
 */
proto.apollo.data.Trigger.prototype.getForwardTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.setForwardTime = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.clearForwardTime = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.hasForwardTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.apollo.data.Trigger.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.Trigger} returns this
 */
proto.apollo.data.Trigger.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.Trigger.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.data.SmartRecordTrigger.repeatedFields_ = [2];



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
proto.apollo.data.SmartRecordTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.data.SmartRecordTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.data.SmartRecordTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.SmartRecordTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentSetting: (f = msg.getSegmentSetting()) && proto.apollo.data.RecordSegmentSetting.toObject(includeInstance, f),
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.apollo.data.Trigger.toObject, includeInstance),
    maxBackwardTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 30.0),
    minRestoreChunk: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 5.0),
    triggerLogFilePath: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SmartRecordTrigger as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.data.SmartRecordTrigger.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.segmentSetting;

  /** @type {?|undefined} */
  this.triggersList;

  /** @type {?|undefined} */
  this.maxBackwardTime;

  /** @type {?|undefined} */
  this.minRestoreChunk;

  /** @type {?|undefined} */
  this.triggerLogFilePath;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.data.SmartRecordTrigger.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.data.SmartRecordTrigger}
 */
proto.apollo.data.SmartRecordTrigger.fromObject = function(obj) {
  var msg = new proto.apollo.data.SmartRecordTrigger();
  obj.segmentSetting && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.data.RecordSegmentSetting.fromObject(obj.segmentSetting));
  obj.triggersList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.triggersList.map(
          proto.apollo.data.Trigger.fromObject));
  obj.maxBackwardTime != null && jspb.Message.setField(msg, 3, obj.maxBackwardTime);
  obj.minRestoreChunk != null && jspb.Message.setField(msg, 4, obj.minRestoreChunk);
  obj.triggerLogFilePath != null && jspb.Message.setField(msg, 5, obj.triggerLogFilePath);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.data.SmartRecordTrigger}
 */
proto.apollo.data.SmartRecordTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.data.SmartRecordTrigger;
  return proto.apollo.data.SmartRecordTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.data.SmartRecordTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.data.SmartRecordTrigger}
 */
proto.apollo.data.SmartRecordTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.data.RecordSegmentSetting;
      reader.readMessage(value,proto.apollo.data.RecordSegmentSetting.deserializeBinaryFromReader);
      msg.setSegmentSetting(value);
      break;
    case 2:
      var value = new proto.apollo.data.Trigger;
      reader.readMessage(value,proto.apollo.data.Trigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxBackwardTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinRestoreChunk(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerLogFilePath(value);
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
proto.apollo.data.SmartRecordTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.data.SmartRecordTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.data.SmartRecordTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.data.SmartRecordTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentSetting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.data.RecordSegmentSetting.serializeBinaryToWriter
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.data.Trigger.serializeBinaryToWriter
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional RecordSegmentSetting segment_setting = 1;
 * @return {?proto.apollo.data.RecordSegmentSetting}
 */
proto.apollo.data.SmartRecordTrigger.prototype.getSegmentSetting = function() {
  return /** @type{?proto.apollo.data.RecordSegmentSetting} */ (
    jspb.Message.getWrapperField(this, proto.apollo.data.RecordSegmentSetting, 1));
};


/**
 * @param {?proto.apollo.data.RecordSegmentSetting|undefined} value
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
*/
proto.apollo.data.SmartRecordTrigger.prototype.setSegmentSetting = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.clearSegmentSetting = function() {
  return this.setSegmentSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.SmartRecordTrigger.prototype.hasSegmentSetting = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Trigger triggers = 2;
 * @return {!Array<!proto.apollo.data.Trigger>}
 */
proto.apollo.data.SmartRecordTrigger.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.apollo.data.Trigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.data.Trigger, 2));
};


/**
 * @param {!Array<!proto.apollo.data.Trigger>} value
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
*/
proto.apollo.data.SmartRecordTrigger.prototype.setTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.data.Trigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.data.Trigger}
 */
proto.apollo.data.SmartRecordTrigger.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.data.Trigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
};


/**
 * optional double max_backward_time = 3;
 * @return {number}
 */
proto.apollo.data.SmartRecordTrigger.prototype.getMaxBackwardTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 30.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.setMaxBackwardTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.clearMaxBackwardTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.SmartRecordTrigger.prototype.hasMaxBackwardTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double min_restore_chunk = 4;
 * @return {number}
 */
proto.apollo.data.SmartRecordTrigger.prototype.getMinRestoreChunk = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 5.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.setMinRestoreChunk = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.clearMinRestoreChunk = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.SmartRecordTrigger.prototype.hasMinRestoreChunk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string trigger_log_file_path = 5;
 * @return {string}
 */
proto.apollo.data.SmartRecordTrigger.prototype.getTriggerLogFilePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.setTriggerLogFilePath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.data.SmartRecordTrigger} returns this
 */
proto.apollo.data.SmartRecordTrigger.prototype.clearTriggerLogFilePath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.data.SmartRecordTrigger.prototype.hasTriggerLogFilePath = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.apollo.data);