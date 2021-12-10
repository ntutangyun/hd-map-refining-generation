// source: cyber/proto/qos_profile.proto
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

goog.exportSymbol('proto.apollo.cyber.proto.QosDurabilityPolicy', null, global);
goog.exportSymbol('proto.apollo.cyber.proto.QosHistoryPolicy', null, global);
goog.exportSymbol('proto.apollo.cyber.proto.QosProfile', null, global);
goog.exportSymbol('proto.apollo.cyber.proto.QosReliabilityPolicy', null, global);
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
proto.apollo.cyber.proto.QosProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.cyber.proto.QosProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.cyber.proto.QosProfile.displayName = 'proto.apollo.cyber.proto.QosProfile';
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
proto.apollo.cyber.proto.QosProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.cyber.proto.QosProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.cyber.proto.QosProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.proto.QosProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    history: jspb.Message.getFieldWithDefault(msg, 1, 1),
    depth: jspb.Message.getFieldWithDefault(msg, 2, 1),
    mps: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reliability: jspb.Message.getFieldWithDefault(msg, 4, 1),
    durability: jspb.Message.getFieldWithDefault(msg, 5, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of QosProfile as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.cyber.proto.QosProfile.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.history;

  /** @type {?|undefined} */
  this.depth;

  /** @type {?|undefined} */
  this.mps;

  /** @type {?|undefined} */
  this.reliability;

  /** @type {?|undefined} */
  this.durability;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.cyber.proto.QosProfile.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.cyber.proto.QosProfile}
 */
proto.apollo.cyber.proto.QosProfile.fromObject = function(obj) {
  var msg = new proto.apollo.cyber.proto.QosProfile();
  obj.history != null && jspb.Message.setField(msg, 1, obj.history);
  obj.depth != null && jspb.Message.setField(msg, 2, obj.depth);
  obj.mps != null && jspb.Message.setField(msg, 3, obj.mps);
  obj.reliability != null && jspb.Message.setField(msg, 4, obj.reliability);
  obj.durability != null && jspb.Message.setField(msg, 5, obj.durability);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.cyber.proto.QosProfile}
 */
proto.apollo.cyber.proto.QosProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.cyber.proto.QosProfile;
  return proto.apollo.cyber.proto.QosProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.cyber.proto.QosProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.cyber.proto.QosProfile}
 */
proto.apollo.cyber.proto.QosProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.cyber.proto.QosHistoryPolicy} */ (reader.readEnum());
      msg.setHistory(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDepth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMps(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.cyber.proto.QosReliabilityPolicy} */ (reader.readEnum());
      msg.setReliability(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.cyber.proto.QosDurabilityPolicy} */ (reader.readEnum());
      msg.setDurability(value);
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
proto.apollo.cyber.proto.QosProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.cyber.proto.QosProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.cyber.proto.QosProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.cyber.proto.QosProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.cyber.proto.QosHistoryPolicy} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.cyber.proto.QosReliabilityPolicy} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.apollo.cyber.proto.QosDurabilityPolicy} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional QosHistoryPolicy history = 1;
 * @return {!proto.apollo.cyber.proto.QosHistoryPolicy}
 */
proto.apollo.cyber.proto.QosProfile.prototype.getHistory = function() {
  return /** @type {!proto.apollo.cyber.proto.QosHistoryPolicy} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.apollo.cyber.proto.QosHistoryPolicy} value
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.setHistory = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.clearHistory = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.proto.QosProfile.prototype.hasHistory = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 depth = 2;
 * @return {number}
 */
proto.apollo.cyber.proto.QosProfile.prototype.getDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.setDepth = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.clearDepth = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.proto.QosProfile.prototype.hasDepth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 mps = 3;
 * @return {number}
 */
proto.apollo.cyber.proto.QosProfile.prototype.getMps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.setMps = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.clearMps = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.proto.QosProfile.prototype.hasMps = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional QosReliabilityPolicy reliability = 4;
 * @return {!proto.apollo.cyber.proto.QosReliabilityPolicy}
 */
proto.apollo.cyber.proto.QosProfile.prototype.getReliability = function() {
  return /** @type {!proto.apollo.cyber.proto.QosReliabilityPolicy} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/**
 * @param {!proto.apollo.cyber.proto.QosReliabilityPolicy} value
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.setReliability = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.clearReliability = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.proto.QosProfile.prototype.hasReliability = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional QosDurabilityPolicy durability = 5;
 * @return {!proto.apollo.cyber.proto.QosDurabilityPolicy}
 */
proto.apollo.cyber.proto.QosProfile.prototype.getDurability = function() {
  return /** @type {!proto.apollo.cyber.proto.QosDurabilityPolicy} */ (jspb.Message.getFieldWithDefault(this, 5, 2));
};


/**
 * @param {!proto.apollo.cyber.proto.QosDurabilityPolicy} value
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.setDurability = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.cyber.proto.QosProfile} returns this
 */
proto.apollo.cyber.proto.QosProfile.prototype.clearDurability = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.cyber.proto.QosProfile.prototype.hasDurability = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.apollo.cyber.proto.QosHistoryPolicy = {
  HISTORY_SYSTEM_DEFAULT: 0,
  HISTORY_KEEP_LAST: 1,
  HISTORY_KEEP_ALL: 2
};

/**
 * @enum {number}
 */
proto.apollo.cyber.proto.QosReliabilityPolicy = {
  RELIABILITY_SYSTEM_DEFAULT: 0,
  RELIABILITY_RELIABLE: 1,
  RELIABILITY_BEST_EFFORT: 2
};

/**
 * @enum {number}
 */
proto.apollo.cyber.proto.QosDurabilityPolicy = {
  DURABILITY_SYSTEM_DEFAULT: 0,
  DURABILITY_TRANSIENT_LOCAL: 1,
  DURABILITY_VOLATILE: 2
};

goog.object.extend(exports, proto.apollo.cyber.proto);
