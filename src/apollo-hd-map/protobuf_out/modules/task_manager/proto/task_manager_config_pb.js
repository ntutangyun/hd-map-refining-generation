// source: modules/task_manager/proto/task_manager_config.proto
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

goog.exportSymbol('proto.apollo.task_manager.TaskManagerConfig', null, global);
goog.exportSymbol('proto.apollo.task_manager.TopicConfig', null, global);
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
proto.apollo.task_manager.TopicConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.task_manager.TopicConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.task_manager.TopicConfig.displayName = 'proto.apollo.task_manager.TopicConfig';
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
proto.apollo.task_manager.TaskManagerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.task_manager.TaskManagerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.task_manager.TaskManagerConfig.displayName = 'proto.apollo.task_manager.TaskManagerConfig';
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
proto.apollo.task_manager.TopicConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.task_manager.TopicConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.task_manager.TopicConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.task_manager.TopicConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingRequestTopic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    routingResponseTopic: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    localizationPoseTopic: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    planningTopic: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
proto.apollo.task_manager.TopicConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.routingRequestTopic;

  /** @type {?|undefined} */
  this.routingResponseTopic;

  /** @type {?|undefined} */
  this.localizationPoseTopic;

  /** @type {?|undefined} */
  this.planningTopic;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.task_manager.TopicConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.task_manager.TopicConfig}
 */
proto.apollo.task_manager.TopicConfig.fromObject = function(obj) {
  var msg = new proto.apollo.task_manager.TopicConfig();
  obj.routingRequestTopic != null && jspb.Message.setField(msg, 1, obj.routingRequestTopic);
  obj.routingResponseTopic != null && jspb.Message.setField(msg, 2, obj.routingResponseTopic);
  obj.localizationPoseTopic != null && jspb.Message.setField(msg, 3, obj.localizationPoseTopic);
  obj.planningTopic != null && jspb.Message.setField(msg, 4, obj.planningTopic);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.task_manager.TopicConfig}
 */
proto.apollo.task_manager.TopicConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.task_manager.TopicConfig;
  return proto.apollo.task_manager.TopicConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.task_manager.TopicConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.task_manager.TopicConfig}
 */
proto.apollo.task_manager.TopicConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingRequestTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingResponseTopic(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalizationPoseTopic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlanningTopic(value);
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
proto.apollo.task_manager.TopicConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.task_manager.TopicConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.task_manager.TopicConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.task_manager.TopicConfig.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string routing_request_topic = 1;
 * @return {string}
 */
proto.apollo.task_manager.TopicConfig.prototype.getRoutingRequestTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.setRoutingRequestTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.clearRoutingRequestTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.task_manager.TopicConfig.prototype.hasRoutingRequestTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string routing_response_topic = 2;
 * @return {string}
 */
proto.apollo.task_manager.TopicConfig.prototype.getRoutingResponseTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.setRoutingResponseTopic = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.clearRoutingResponseTopic = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.task_manager.TopicConfig.prototype.hasRoutingResponseTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string localization_pose_topic = 3;
 * @return {string}
 */
proto.apollo.task_manager.TopicConfig.prototype.getLocalizationPoseTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.setLocalizationPoseTopic = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.clearLocalizationPoseTopic = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.task_manager.TopicConfig.prototype.hasLocalizationPoseTopic = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string planning_topic = 4;
 * @return {string}
 */
proto.apollo.task_manager.TopicConfig.prototype.getPlanningTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.setPlanningTopic = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.task_manager.TopicConfig} returns this
 */
proto.apollo.task_manager.TopicConfig.prototype.clearPlanningTopic = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.task_manager.TopicConfig.prototype.hasPlanningTopic = function() {
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
proto.apollo.task_manager.TaskManagerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.task_manager.TaskManagerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.task_manager.TaskManagerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.task_manager.TaskManagerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicConfig: (f = msg.getTopicConfig()) && proto.apollo.task_manager.TopicConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of TaskManagerConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.task_manager.TaskManagerConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.topicConfig;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.task_manager.TaskManagerConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.task_manager.TaskManagerConfig}
 */
proto.apollo.task_manager.TaskManagerConfig.fromObject = function(obj) {
  var msg = new proto.apollo.task_manager.TaskManagerConfig();
  obj.topicConfig && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.task_manager.TopicConfig.fromObject(obj.topicConfig));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.task_manager.TaskManagerConfig}
 */
proto.apollo.task_manager.TaskManagerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.task_manager.TaskManagerConfig;
  return proto.apollo.task_manager.TaskManagerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.task_manager.TaskManagerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.task_manager.TaskManagerConfig}
 */
proto.apollo.task_manager.TaskManagerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.task_manager.TopicConfig;
      reader.readMessage(value,proto.apollo.task_manager.TopicConfig.deserializeBinaryFromReader);
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
proto.apollo.task_manager.TaskManagerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.task_manager.TaskManagerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.task_manager.TaskManagerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.task_manager.TaskManagerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.task_manager.TopicConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional TopicConfig topic_config = 1;
 * @return {?proto.apollo.task_manager.TopicConfig}
 */
proto.apollo.task_manager.TaskManagerConfig.prototype.getTopicConfig = function() {
  return /** @type{?proto.apollo.task_manager.TopicConfig} */ (
    jspb.Message.getWrapperField(this, proto.apollo.task_manager.TopicConfig, 1));
};


/**
 * @param {?proto.apollo.task_manager.TopicConfig|undefined} value
 * @return {!proto.apollo.task_manager.TaskManagerConfig} returns this
*/
proto.apollo.task_manager.TaskManagerConfig.prototype.setTopicConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.task_manager.TaskManagerConfig} returns this
 */
proto.apollo.task_manager.TaskManagerConfig.prototype.clearTopicConfig = function() {
  return this.setTopicConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.task_manager.TaskManagerConfig.prototype.hasTopicConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.apollo.task_manager);
