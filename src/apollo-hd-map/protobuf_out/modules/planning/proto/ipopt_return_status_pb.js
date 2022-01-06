// source: modules/planning/proto/ipopt_return_status.proto
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

goog.exportSymbol('proto.apollo.planning.IpoptReturnStatus', null, global);
/**
 * @enum {number}
 */
proto.apollo.planning.IpoptReturnStatus = {
  SOLVE_SUCCEEDED: 0,
  SOLVED_TO_ACCEPTABLE_LEVEL: 1,
  INFEASIBLE_PROBLEM_DETECTED: 2,
  SEARCH_DIRECTION_BECOMES_TOO_SMALL: 3,
  DIVERGIN_ITERATES: 4,
  USER_REQUESTED_STOP: 5,
  FEASIBLE_POINT_FOUND: 6,
  MAXIMUM_ITERATIONS_EXCEEDED: -1,
  RESTORATION_FAILED: -2,
  ERROR_IN_STEP_COMPUTATION: -3,
  NOT_ENOUGH_DEGREES_OF_FREEDOM: -10,
  INVALID_PROGRAM_DEFINITION: -11,
  INVALID_OPTION: -12,
  INVALID_NUMBER_DETECTED: -13,
  UNRECOVERABLE_EXCEPTION: -100,
  NONIPOPT_EXCEPTION_THROWN: -101,
  INSUFFICIENT_MEMORY: -102,
  INTERNAL_ERROR: 199
};

goog.object.extend(exports, proto.apollo.planning);
