// source: modules/dreamview/proto/hmi_config.proto
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

goog.exportSymbol('proto.apollo.dreamview.HMIAction', null, global);
goog.exportSymbol('proto.apollo.dreamview.HMIConfig', null, global);
goog.exportSymbol('proto.apollo.dreamview.VehicleData', null, global);
goog.exportSymbol('proto.apollo.dreamview.VehicleData.DataFile', null, global);
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
proto.apollo.dreamview.HMIConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.HMIConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.HMIConfig.displayName = 'proto.apollo.dreamview.HMIConfig';
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
proto.apollo.dreamview.VehicleData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.VehicleData.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.VehicleData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.VehicleData.displayName = 'proto.apollo.dreamview.VehicleData';
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
proto.apollo.dreamview.VehicleData.DataFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.VehicleData.DataFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.VehicleData.DataFile.displayName = 'proto.apollo.dreamview.VehicleData.DataFile';
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
proto.apollo.dreamview.HMIConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.HMIConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.HMIConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.HMIConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    modesMap: (f = msg.getModesMap()) ? f.toObject(includeInstance, undefined) : [],
    mapsMap: (f = msg.getMapsMap()) ? f.toObject(includeInstance, undefined) : [],
    vehiclesMap: (f = msg.getVehiclesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of HMIConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.HMIConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.modesMap;

  /** @type {?|undefined} */
  this.mapsMap;

  /** @type {?|undefined} */
  this.vehiclesMap;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.HMIConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.HMIConfig}
 */
proto.apollo.dreamview.HMIConfig.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.HMIConfig();
  obj.modesMap && jspb.Message.setField(msg, 1, obj.modesMap);
  obj.mapsMap && jspb.Message.setField(msg, 2, obj.mapsMap);
  obj.vehiclesMap && jspb.Message.setField(msg, 3, obj.vehiclesMap);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.HMIConfig}
 */
proto.apollo.dreamview.HMIConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.HMIConfig;
  return proto.apollo.dreamview.HMIConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.HMIConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.HMIConfig}
 */
proto.apollo.dreamview.HMIConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getModesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = msg.getMapsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 3:
      var value = msg.getVehiclesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.apollo.dreamview.HMIConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.HMIConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.HMIConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.HMIConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMapsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getVehiclesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> modes = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.apollo.dreamview.HMIConfig.prototype.getModesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIConfig} returns this
 */
proto.apollo.dreamview.HMIConfig.prototype.clearModesMap = function() {
  this.getModesMap().clear();
  return this;};


/**
 * map<string, string> maps = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.apollo.dreamview.HMIConfig.prototype.getMapsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIConfig} returns this
 */
proto.apollo.dreamview.HMIConfig.prototype.clearMapsMap = function() {
  this.getMapsMap().clear();
  return this;};


/**
 * map<string, string> vehicles = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.apollo.dreamview.HMIConfig.prototype.getVehiclesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIConfig} returns this
 */
proto.apollo.dreamview.HMIConfig.prototype.clearVehiclesMap = function() {
  this.getVehiclesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.VehicleData.repeatedFields_ = [1];



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
proto.apollo.dreamview.VehicleData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.VehicleData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.VehicleData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.VehicleData.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataFilesList: jspb.Message.toObjectList(msg.getDataFilesList(),
    proto.apollo.dreamview.VehicleData.DataFile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of VehicleData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.VehicleData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dataFilesList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.VehicleData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.VehicleData}
 */
proto.apollo.dreamview.VehicleData.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.VehicleData();
  obj.dataFilesList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.dataFilesList.map(
          proto.apollo.dreamview.VehicleData.DataFile.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.VehicleData}
 */
proto.apollo.dreamview.VehicleData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.VehicleData;
  return proto.apollo.dreamview.VehicleData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.VehicleData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.VehicleData}
 */
proto.apollo.dreamview.VehicleData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.dreamview.VehicleData.DataFile;
      reader.readMessage(value,proto.apollo.dreamview.VehicleData.DataFile.deserializeBinaryFromReader);
      msg.addDataFiles(value);
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
proto.apollo.dreamview.VehicleData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.VehicleData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.VehicleData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.VehicleData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.dreamview.VehicleData.DataFile.serializeBinaryToWriter
    );
  }
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
proto.apollo.dreamview.VehicleData.DataFile.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.VehicleData.DataFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.VehicleData.DataFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.VehicleData.DataFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcePath: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    destPath: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DataFile as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.VehicleData.DataFile.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.sourcePath;

  /** @type {?|undefined} */
  this.destPath;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.VehicleData.DataFile.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.VehicleData.DataFile}
 */
proto.apollo.dreamview.VehicleData.DataFile.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.VehicleData.DataFile();
  obj.sourcePath != null && jspb.Message.setField(msg, 1, obj.sourcePath);
  obj.destPath != null && jspb.Message.setField(msg, 2, obj.destPath);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.VehicleData.DataFile}
 */
proto.apollo.dreamview.VehicleData.DataFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.VehicleData.DataFile;
  return proto.apollo.dreamview.VehicleData.DataFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.VehicleData.DataFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.VehicleData.DataFile}
 */
proto.apollo.dreamview.VehicleData.DataFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestPath(value);
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
proto.apollo.dreamview.VehicleData.DataFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.VehicleData.DataFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.VehicleData.DataFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.VehicleData.DataFile.serializeBinaryToWriter = function(message, writer) {
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
 * optional string source_path = 1;
 * @return {string}
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.getSourcePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.VehicleData.DataFile} returns this
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.setSourcePath = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.VehicleData.DataFile} returns this
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.clearSourcePath = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.hasSourcePath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string dest_path = 2;
 * @return {string}
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.getDestPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.VehicleData.DataFile} returns this
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.setDestPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.VehicleData.DataFile} returns this
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.clearDestPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.VehicleData.DataFile.prototype.hasDestPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DataFile data_files = 1;
 * @return {!Array<!proto.apollo.dreamview.VehicleData.DataFile>}
 */
proto.apollo.dreamview.VehicleData.prototype.getDataFilesList = function() {
  return /** @type{!Array<!proto.apollo.dreamview.VehicleData.DataFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.dreamview.VehicleData.DataFile, 1));
};


/**
 * @param {!Array<!proto.apollo.dreamview.VehicleData.DataFile>} value
 * @return {!proto.apollo.dreamview.VehicleData} returns this
*/
proto.apollo.dreamview.VehicleData.prototype.setDataFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.dreamview.VehicleData.DataFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.VehicleData.DataFile}
 */
proto.apollo.dreamview.VehicleData.prototype.addDataFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.dreamview.VehicleData.DataFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.VehicleData} returns this
 */
proto.apollo.dreamview.VehicleData.prototype.clearDataFilesList = function() {
  return this.setDataFilesList([]);
};


/**
 * @enum {number}
 */
proto.apollo.dreamview.HMIAction = {
  NONE: 0,
  SETUP_MODE: 1,
  RESET_MODE: 2,
  ENTER_AUTO_MODE: 3,
  DISENGAGE: 4,
  CHANGE_MODE: 5,
  CHANGE_MAP: 6,
  CHANGE_VEHICLE: 7,
  START_MODULE: 8,
  STOP_MODULE: 9
};

goog.object.extend(exports, proto.apollo.dreamview);
