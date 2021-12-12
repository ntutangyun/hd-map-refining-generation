// source: modules/storytelling/proto/storytelling_config.proto
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

goog.exportSymbol('proto.apollo.storytelling.StorytellingConfig', null, global);
goog.exportSymbol('proto.apollo.storytelling.TopicConfig', null, global);
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
proto.apollo.storytelling.TopicConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.storytelling.TopicConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.storytelling.TopicConfig.displayName = 'proto.apollo.storytelling.TopicConfig';
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
proto.apollo.storytelling.StorytellingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.storytelling.StorytellingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.storytelling.StorytellingConfig.displayName = 'proto.apollo.storytelling.StorytellingConfig';
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
proto.apollo.storytelling.TopicConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.storytelling.TopicConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.storytelling.TopicConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.storytelling.TopicConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    planningTrajectoryTopic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    storytellingTopic: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of TopicConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.storytelling.TopicConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.planningTrajectoryTopic;

  /** @type {?|undefined} */
  this.storytellingTopic;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.storytelling.TopicConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.storytelling.TopicConfig}
 */
proto.apollo.storytelling.TopicConfig.fromObject = function(obj) {
  var msg = new proto.apollo.storytelling.TopicConfig();
  obj.planningTrajectoryTopic != null && jspb.Message.setField(msg, 1, obj.planningTrajectoryTopic);
  obj.storytellingTopic != null && jspb.Message.setField(msg, 2, obj.storytellingTopic);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.storytelling.TopicConfig}
 */
proto.apollo.storytelling.TopicConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.storytelling.TopicConfig;
  return proto.apollo.storytelling.TopicConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.storytelling.TopicConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.storytelling.TopicConfig}
 */
proto.apollo.storytelling.TopicConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanningTrajectoryTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorytellingTopic(value);
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
proto.apollo.storytelling.TopicConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.storytelling.TopicConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.storytelling.TopicConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.storytelling.TopicConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string planning_trajectory_topic = 1;
 * @return {string}
 */
proto.apollo.storytelling.TopicConfig.prototype.getPlanningTrajectoryTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.storytelling.TopicConfig} returns this
 */
proto.apollo.storytelling.TopicConfig.prototype.setPlanningTrajectoryTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.storytelling.TopicConfig} returns this
 */
proto.apollo.storytelling.TopicConfig.prototype.clearPlanningTrajectoryTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.storytelling.TopicConfig.prototype.hasPlanningTrajectoryTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string storytelling_topic = 2;
 * @return {string}
 */
proto.apollo.storytelling.TopicConfig.prototype.getStorytellingTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.storytelling.TopicConfig} returns this
 */
proto.apollo.storytelling.TopicConfig.prototype.setStorytellingTopic = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.storytelling.TopicConfig} returns this
 */
proto.apollo.storytelling.TopicConfig.prototype.clearStorytellingTopic = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.storytelling.TopicConfig.prototype.hasStorytellingTopic = function() {
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
proto.apollo.storytelling.StorytellingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.storytelling.StorytellingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.storytelling.StorytellingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.storytelling.StorytellingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicConfig: (f = msg.getTopicConfig()) && proto.apollo.storytelling.TopicConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of StorytellingConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.storytelling.StorytellingConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.topicConfig;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.storytelling.StorytellingConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.storytelling.StorytellingConfig}
 */
proto.apollo.storytelling.StorytellingConfig.fromObject = function(obj) {
  var msg = new proto.apollo.storytelling.StorytellingConfig();
  obj.topicConfig && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.storytelling.TopicConfig.fromObject(obj.topicConfig));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.storytelling.StorytellingConfig}
 */
proto.apollo.storytelling.StorytellingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.storytelling.StorytellingConfig;
  return proto.apollo.storytelling.StorytellingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.storytelling.StorytellingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.storytelling.StorytellingConfig}
 */
proto.apollo.storytelling.StorytellingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.storytelling.TopicConfig;
      reader.readMessage(value,proto.apollo.storytelling.TopicConfig.deserializeBinaryFromReader);
      msg.setTopicConfig(value);
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
proto.apollo.storytelling.StorytellingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.storytelling.StorytellingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.storytelling.StorytellingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.storytelling.StorytellingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.storytelling.TopicConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional TopicConfig topic_config = 1;
 * @return {?proto.apollo.storytelling.TopicConfig}
 */
proto.apollo.storytelling.StorytellingConfig.prototype.getTopicConfig = function() {
  return /** @type{?proto.apollo.storytelling.TopicConfig} */ (
    jspb.Message.getWrapperField(this, proto.apollo.storytelling.TopicConfig, 1));
};


/**
 * @param {?proto.apollo.storytelling.TopicConfig|undefined} value
 * @return {!proto.apollo.storytelling.StorytellingConfig} returns this
*/
proto.apollo.storytelling.StorytellingConfig.prototype.setTopicConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.storytelling.StorytellingConfig} returns this
 */
proto.apollo.storytelling.StorytellingConfig.prototype.clearTopicConfig = function() {
  return this.setTopicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.storytelling.StorytellingConfig.prototype.hasTopicConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.apollo.storytelling);