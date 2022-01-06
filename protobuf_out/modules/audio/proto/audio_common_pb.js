// source: modules/audio/proto/audio_common.proto
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

goog.exportSymbol('proto.apollo.audio.AudioDirection', null, global);
goog.exportSymbol('proto.apollo.audio.AudioType', null, global);
goog.exportSymbol('proto.apollo.audio.MovingResult', null, global);
/**
 * @enum {number}
 */
proto.apollo.audio.MovingResult = {
  UNKNOWN: 0,
  APPROACHING: 1,
  DEPARTING: 2,
  STATIONARY: 3
};

/**
 * @enum {number}
 */
proto.apollo.audio.AudioType = {
  UNKNOWN_TYPE: 0,
  POLICE: 1,
  AMBULANCE: 2,
  FIRETRUCK: 3
};

/**
 * @enum {number}
 */
proto.apollo.audio.AudioDirection = {
  UNKNOWN_DIRECTION: 0,
  FRONT: 1,
  LEFT: 2,
  BACK: 3,
  RIGHT: 4
};

goog.object.extend(exports, proto.apollo.audio);
