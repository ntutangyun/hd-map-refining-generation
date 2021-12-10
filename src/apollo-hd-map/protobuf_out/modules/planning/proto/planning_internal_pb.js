// source: modules/planning/proto/planning_internal.proto
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

var modules_common_proto_geometry_pb = require('../../../modules/common/proto/geometry_pb.js');
goog.object.extend(proto, modules_common_proto_geometry_pb);
var modules_common_proto_header_pb = require('../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
var modules_canbus_proto_chassis_pb = require('../../../modules/canbus/proto/chassis_pb.js');
goog.object.extend(proto, modules_canbus_proto_chassis_pb);
var modules_common_proto_pnc_point_pb = require('../../../modules/common/proto/pnc_point_pb.js');
goog.object.extend(proto, modules_common_proto_pnc_point_pb);
var modules_localization_proto_localization_pb = require('../../../modules/localization/proto/localization_pb.js');
goog.object.extend(proto, modules_localization_proto_localization_pb);
var modules_dreamview_proto_chart_pb = require('../../../modules/dreamview/proto/chart_pb.js');
goog.object.extend(proto, modules_dreamview_proto_chart_pb);
var modules_map_relative_map_proto_navigation_pb = require('../../../modules/map/relative_map/proto/navigation_pb.js');
goog.object.extend(proto, modules_map_relative_map_proto_navigation_pb);
var modules_routing_proto_routing_pb = require('../../../modules/routing/proto/routing_pb.js');
goog.object.extend(proto, modules_routing_proto_routing_pb);
var modules_perception_proto_traffic_light_detection_pb = require('../../../modules/perception/proto/traffic_light_detection_pb.js');
goog.object.extend(proto, modules_perception_proto_traffic_light_detection_pb);
var modules_planning_proto_sl_boundary_pb = require('../../../modules/planning/proto/sl_boundary_pb.js');
goog.object.extend(proto, modules_planning_proto_sl_boundary_pb);
var modules_planning_proto_decision_pb = require('../../../modules/planning/proto/decision_pb.js');
goog.object.extend(proto, modules_planning_proto_decision_pb);
var modules_planning_proto_planning_config_pb = require('../../../modules/planning/proto/planning_config_pb.js');
goog.object.extend(proto, modules_planning_proto_planning_config_pb);
goog.exportSymbol('proto.apollo.planning_internal.AutoTuningTrainingData', null, global);
goog.exportSymbol('proto.apollo.planning_internal.CloudReferenceLineRequest', null, global);
goog.exportSymbol('proto.apollo.planning_internal.CloudReferenceLineResponse', null, global);
goog.exportSymbol('proto.apollo.planning_internal.CloudReferenceLineRoutingRequest', null, global);
goog.exportSymbol('proto.apollo.planning_internal.CostComponents', null, global);
goog.exportSymbol('proto.apollo.planning_internal.Debug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.DecisionTag', null, global);
goog.exportSymbol('proto.apollo.planning_internal.DpPolyGraphDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.HybridModelDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.LatticeStPixel', null, global);
goog.exportSymbol('proto.apollo.planning_internal.LatticeStTraining', null, global);
goog.exportSymbol('proto.apollo.planning_internal.ObstacleDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.OpenSpaceDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.PlanningData', null, global);
goog.exportSymbol('proto.apollo.planning_internal.PullOverDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.ReferenceLineDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SLFrameDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.STGraphDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef', null, global);
goog.exportSymbol('proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef', null, global);
goog.exportSymbol('proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SampleLayerDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.ScenarioDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SignalLightDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SignalLightDebug.SignalDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SmootherDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SmootherDebug.SmootherType', null, global);
goog.exportSymbol('proto.apollo.planning_internal.SpeedPlan', null, global);
goog.exportSymbol('proto.apollo.planning_internal.StGraphBoundaryDebug', null, global);
goog.exportSymbol('proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType', null, global);
goog.exportSymbol('proto.apollo.planning_internal.Trajectories', null, global);
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
proto.apollo.planning_internal.Debug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.Debug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.Debug.displayName = 'proto.apollo.planning_internal.Debug';
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
proto.apollo.planning_internal.SpeedPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.SpeedPlan.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.SpeedPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SpeedPlan.displayName = 'proto.apollo.planning_internal.SpeedPlan';
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
proto.apollo.planning_internal.StGraphBoundaryDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.StGraphBoundaryDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.StGraphBoundaryDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.StGraphBoundaryDebug.displayName = 'proto.apollo.planning_internal.StGraphBoundaryDebug';
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
proto.apollo.planning_internal.SLFrameDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.SLFrameDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.SLFrameDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SLFrameDebug.displayName = 'proto.apollo.planning_internal.SLFrameDebug';
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
proto.apollo.planning_internal.STGraphDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.STGraphDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.STGraphDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.STGraphDebug.displayName = 'proto.apollo.planning_internal.STGraphDebug';
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
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.displayName = 'proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint';
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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.displayName = 'proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef';
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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.displayName = 'proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef';
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
proto.apollo.planning_internal.SignalLightDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.SignalLightDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.SignalLightDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SignalLightDebug.displayName = 'proto.apollo.planning_internal.SignalLightDebug';
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
proto.apollo.planning_internal.SignalLightDebug.SignalDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.SignalLightDebug.SignalDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SignalLightDebug.SignalDebug.displayName = 'proto.apollo.planning_internal.SignalLightDebug.SignalDebug';
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
proto.apollo.planning_internal.DecisionTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.DecisionTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.DecisionTag.displayName = 'proto.apollo.planning_internal.DecisionTag';
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
proto.apollo.planning_internal.ObstacleDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.ObstacleDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.ObstacleDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.ObstacleDebug.displayName = 'proto.apollo.planning_internal.ObstacleDebug';
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
proto.apollo.planning_internal.ReferenceLineDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.ReferenceLineDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.ReferenceLineDebug.displayName = 'proto.apollo.planning_internal.ReferenceLineDebug';
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
proto.apollo.planning_internal.SampleLayerDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.SampleLayerDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.SampleLayerDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SampleLayerDebug.displayName = 'proto.apollo.planning_internal.SampleLayerDebug';
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
proto.apollo.planning_internal.DpPolyGraphDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.DpPolyGraphDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.DpPolyGraphDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.DpPolyGraphDebug.displayName = 'proto.apollo.planning_internal.DpPolyGraphDebug';
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
proto.apollo.planning_internal.ScenarioDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.ScenarioDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.ScenarioDebug.displayName = 'proto.apollo.planning_internal.ScenarioDebug';
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
proto.apollo.planning_internal.Trajectories = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.Trajectories.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.Trajectories, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.Trajectories.displayName = 'proto.apollo.planning_internal.Trajectories';
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
proto.apollo.planning_internal.OpenSpaceDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.OpenSpaceDebug.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.OpenSpaceDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.OpenSpaceDebug.displayName = 'proto.apollo.planning_internal.OpenSpaceDebug';
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
proto.apollo.planning_internal.SmootherDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.SmootherDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.SmootherDebug.displayName = 'proto.apollo.planning_internal.SmootherDebug';
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
proto.apollo.planning_internal.PullOverDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.PullOverDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.PullOverDebug.displayName = 'proto.apollo.planning_internal.PullOverDebug';
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
proto.apollo.planning_internal.PlanningData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.PlanningData.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.PlanningData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.PlanningData.displayName = 'proto.apollo.planning_internal.PlanningData';
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
proto.apollo.planning_internal.LatticeStPixel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.LatticeStPixel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.LatticeStPixel.displayName = 'proto.apollo.planning_internal.LatticeStPixel';
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
proto.apollo.planning_internal.LatticeStTraining = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.LatticeStTraining.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.LatticeStTraining, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.LatticeStTraining.displayName = 'proto.apollo.planning_internal.LatticeStTraining';
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
proto.apollo.planning_internal.CostComponents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.CostComponents.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.CostComponents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.CostComponents.displayName = 'proto.apollo.planning_internal.CostComponents';
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
proto.apollo.planning_internal.AutoTuningTrainingData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.AutoTuningTrainingData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.AutoTuningTrainingData.displayName = 'proto.apollo.planning_internal.AutoTuningTrainingData';
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
proto.apollo.planning_internal.CloudReferenceLineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.CloudReferenceLineRequest.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.CloudReferenceLineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.CloudReferenceLineRequest.displayName = 'proto.apollo.planning_internal.CloudReferenceLineRequest';
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
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.CloudReferenceLineRoutingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.displayName = 'proto.apollo.planning_internal.CloudReferenceLineRoutingRequest';
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
proto.apollo.planning_internal.CloudReferenceLineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.planning_internal.CloudReferenceLineResponse.repeatedFields_, null);
};
goog.inherits(proto.apollo.planning_internal.CloudReferenceLineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.CloudReferenceLineResponse.displayName = 'proto.apollo.planning_internal.CloudReferenceLineResponse';
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
proto.apollo.planning_internal.HybridModelDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.planning_internal.HybridModelDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.planning_internal.HybridModelDebug.displayName = 'proto.apollo.planning_internal.HybridModelDebug';
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
proto.apollo.planning_internal.Debug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.Debug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.Debug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.Debug.toObject = function(includeInstance, msg) {
  var f, obj = {
    planningData: (f = msg.getPlanningData()) && proto.apollo.planning_internal.PlanningData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Debug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.Debug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.planningData;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.Debug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.Debug}
 */
proto.apollo.planning_internal.Debug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.Debug();
  obj.planningData && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.planning_internal.PlanningData.fromObject(obj.planningData));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.Debug}
 */
proto.apollo.planning_internal.Debug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.Debug;
  return proto.apollo.planning_internal.Debug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.Debug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.Debug}
 */
proto.apollo.planning_internal.Debug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.apollo.planning_internal.PlanningData;
      reader.readMessage(value,proto.apollo.planning_internal.PlanningData.deserializeBinaryFromReader);
      msg.setPlanningData(value);
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
proto.apollo.planning_internal.Debug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.Debug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.Debug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.Debug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanningData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.planning_internal.PlanningData.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlanningData planning_data = 2;
 * @return {?proto.apollo.planning_internal.PlanningData}
 */
proto.apollo.planning_internal.Debug.prototype.getPlanningData = function() {
  return /** @type{?proto.apollo.planning_internal.PlanningData} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.PlanningData, 2));
};


/**
 * @param {?proto.apollo.planning_internal.PlanningData|undefined} value
 * @return {!proto.apollo.planning_internal.Debug} returns this
*/
proto.apollo.planning_internal.Debug.prototype.setPlanningData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.Debug} returns this
 */
proto.apollo.planning_internal.Debug.prototype.clearPlanningData = function() {
  return this.setPlanningData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.Debug.prototype.hasPlanningData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.SpeedPlan.repeatedFields_ = [2];



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
proto.apollo.planning_internal.SpeedPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SpeedPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SpeedPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SpeedPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    speedPointList: jspb.Message.toObjectList(msg.getSpeedPointList(),
    modules_common_proto_pnc_point_pb.SpeedPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SpeedPlan as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SpeedPlan.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.speedPointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SpeedPlan.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SpeedPlan}
 */
proto.apollo.planning_internal.SpeedPlan.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SpeedPlan();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.speedPointList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.speedPointList.map(
          modules_common_proto_pnc_point_pb.SpeedPoint.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SpeedPlan}
 */
proto.apollo.planning_internal.SpeedPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SpeedPlan;
  return proto.apollo.planning_internal.SpeedPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SpeedPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SpeedPlan}
 */
proto.apollo.planning_internal.SpeedPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new modules_common_proto_pnc_point_pb.SpeedPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SpeedPoint.deserializeBinaryFromReader);
      msg.addSpeedPoint(value);
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
proto.apollo.planning_internal.SpeedPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SpeedPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SpeedPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SpeedPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpeedPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      modules_common_proto_pnc_point_pb.SpeedPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.planning_internal.SpeedPlan.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.SpeedPlan} returns this
 */
proto.apollo.planning_internal.SpeedPlan.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SpeedPlan} returns this
 */
proto.apollo.planning_internal.SpeedPlan.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SpeedPlan.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated apollo.common.SpeedPoint speed_point = 2;
 * @return {!Array<!proto.apollo.common.SpeedPoint>}
 */
proto.apollo.planning_internal.SpeedPlan.prototype.getSpeedPointList = function() {
  return /** @type{!Array<!proto.apollo.common.SpeedPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SpeedPoint, 2));
};


/**
 * @param {!Array<!proto.apollo.common.SpeedPoint>} value
 * @return {!proto.apollo.planning_internal.SpeedPlan} returns this
*/
proto.apollo.planning_internal.SpeedPlan.prototype.setSpeedPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.common.SpeedPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.planning_internal.SpeedPlan.prototype.addSpeedPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.common.SpeedPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SpeedPlan} returns this
 */
proto.apollo.planning_internal.SpeedPlan.prototype.clearSpeedPointList = function() {
  return this.setSpeedPointList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.repeatedFields_ = [2];



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
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.StGraphBoundaryDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    modules_common_proto_pnc_point_pb.SpeedPoint.toObject, includeInstance),
    type: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of StGraphBoundaryDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.pointList;

  /** @type {?|undefined} */
  this.type;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.StGraphBoundaryDebug();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.pointList.map(
          modules_common_proto_pnc_point_pb.SpeedPoint.fromObject));
  obj.type != null && jspb.Message.setField(msg, 3, obj.type);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.StGraphBoundaryDebug;
  return proto.apollo.planning_internal.StGraphBoundaryDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new modules_common_proto_pnc_point_pb.SpeedPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SpeedPoint.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType} */ (reader.readEnum());
      msg.setType(value);
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
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.StGraphBoundaryDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      modules_common_proto_pnc_point_pb.SpeedPoint.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType = {
  ST_BOUNDARY_TYPE_UNKNOWN: 1,
  ST_BOUNDARY_TYPE_STOP: 2,
  ST_BOUNDARY_TYPE_FOLLOW: 3,
  ST_BOUNDARY_TYPE_YIELD: 4,
  ST_BOUNDARY_TYPE_OVERTAKE: 5,
  ST_BOUNDARY_TYPE_KEEP_CLEAR: 6,
  ST_BOUNDARY_TYPE_DRIVABLE_REGION: 7
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated apollo.common.SpeedPoint point = 2;
 * @return {!Array<!proto.apollo.common.SpeedPoint>}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.common.SpeedPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SpeedPoint, 2));
};


/**
 * @param {!Array<!proto.apollo.common.SpeedPoint>} value
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
*/
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.common.SpeedPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.common.SpeedPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * optional StBoundaryType type = 3;
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.getType = function() {
  return /** @type {!proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug.StBoundaryType} value
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug} returns this
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.StGraphBoundaryDebug.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.SLFrameDebug.repeatedFields_ = [2,3,4,5,6,7,8,9,10,11,12];



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
proto.apollo.planning_internal.SLFrameDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SLFrameDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SLFrameDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SLFrameDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sampledSList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    staticObstacleLowerBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    dynamicObstacleLowerBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    staticObstacleUpperBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
    dynamicObstacleUpperBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
    mapLowerBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
    mapUpperBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 8)) == null ? undefined : f,
    slPathList: jspb.Message.toObjectList(msg.getSlPathList(),
    modules_common_proto_pnc_point_pb.SLPoint.toObject, includeInstance),
    aggregatedBoundarySList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 10)) == null ? undefined : f,
    aggregatedBoundaryLowList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 11)) == null ? undefined : f,
    aggregatedBoundaryHighList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SLFrameDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SLFrameDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.sampledSList;

  /** @type {?|undefined} */
  this.staticObstacleLowerBoundList;

  /** @type {?|undefined} */
  this.dynamicObstacleLowerBoundList;

  /** @type {?|undefined} */
  this.staticObstacleUpperBoundList;

  /** @type {?|undefined} */
  this.dynamicObstacleUpperBoundList;

  /** @type {?|undefined} */
  this.mapLowerBoundList;

  /** @type {?|undefined} */
  this.mapUpperBoundList;

  /** @type {?|undefined} */
  this.slPathList;

  /** @type {?|undefined} */
  this.aggregatedBoundarySList;

  /** @type {?|undefined} */
  this.aggregatedBoundaryLowList;

  /** @type {?|undefined} */
  this.aggregatedBoundaryHighList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SLFrameDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SLFrameDebug}
 */
proto.apollo.planning_internal.SLFrameDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SLFrameDebug();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.sampledSList != null && jspb.Message.setField(msg, 2, obj.sampledSList);
  obj.staticObstacleLowerBoundList != null && jspb.Message.setField(msg, 3, obj.staticObstacleLowerBoundList);
  obj.dynamicObstacleLowerBoundList != null && jspb.Message.setField(msg, 4, obj.dynamicObstacleLowerBoundList);
  obj.staticObstacleUpperBoundList != null && jspb.Message.setField(msg, 5, obj.staticObstacleUpperBoundList);
  obj.dynamicObstacleUpperBoundList != null && jspb.Message.setField(msg, 6, obj.dynamicObstacleUpperBoundList);
  obj.mapLowerBoundList != null && jspb.Message.setField(msg, 7, obj.mapLowerBoundList);
  obj.mapUpperBoundList != null && jspb.Message.setField(msg, 8, obj.mapUpperBoundList);
  obj.slPathList && jspb.Message.setRepeatedWrapperField(
      msg, 9, obj.slPathList.map(
          modules_common_proto_pnc_point_pb.SLPoint.fromObject));
  obj.aggregatedBoundarySList != null && jspb.Message.setField(msg, 10, obj.aggregatedBoundarySList);
  obj.aggregatedBoundaryLowList != null && jspb.Message.setField(msg, 11, obj.aggregatedBoundaryLowList);
  obj.aggregatedBoundaryHighList != null && jspb.Message.setField(msg, 12, obj.aggregatedBoundaryHighList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SLFrameDebug}
 */
proto.apollo.planning_internal.SLFrameDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SLFrameDebug;
  return proto.apollo.planning_internal.SLFrameDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SLFrameDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SLFrameDebug}
 */
proto.apollo.planning_internal.SLFrameDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSampledS(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStaticObstacleLowerBound(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDynamicObstacleLowerBound(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStaticObstacleUpperBound(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDynamicObstacleUpperBound(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMapLowerBound(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMapUpperBound(values[i]);
      }
      break;
    case 9:
      var value = new modules_common_proto_pnc_point_pb.SLPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SLPoint.deserializeBinaryFromReader);
      msg.addSlPath(value);
      break;
    case 10:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAggregatedBoundaryS(values[i]);
      }
      break;
    case 11:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAggregatedBoundaryLow(values[i]);
      }
      break;
    case 12:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAggregatedBoundaryHigh(values[i]);
      }
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
proto.apollo.planning_internal.SLFrameDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SLFrameDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SLFrameDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SLFrameDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSampledSList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      2,
      f
    );
  }
  f = message.getStaticObstacleLowerBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      3,
      f
    );
  }
  f = message.getDynamicObstacleLowerBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      4,
      f
    );
  }
  f = message.getStaticObstacleUpperBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      5,
      f
    );
  }
  f = message.getDynamicObstacleUpperBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      6,
      f
    );
  }
  f = message.getMapLowerBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      7,
      f
    );
  }
  f = message.getMapUpperBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      8,
      f
    );
  }
  f = message.getSlPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      modules_common_proto_pnc_point_pb.SLPoint.serializeBinaryToWriter
    );
  }
  f = message.getAggregatedBoundarySList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      10,
      f
    );
  }
  f = message.getAggregatedBoundaryLowList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      11,
      f
    );
  }
  f = message.getAggregatedBoundaryHighList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double sampled_s = 2;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getSampledSList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setSampledSList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addSampledS = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearSampledSList = function() {
  return this.setSampledSList([]);
};


/**
 * repeated double static_obstacle_lower_bound = 3;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getStaticObstacleLowerBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setStaticObstacleLowerBoundList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addStaticObstacleLowerBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearStaticObstacleLowerBoundList = function() {
  return this.setStaticObstacleLowerBoundList([]);
};


/**
 * repeated double dynamic_obstacle_lower_bound = 4;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getDynamicObstacleLowerBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setDynamicObstacleLowerBoundList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addDynamicObstacleLowerBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearDynamicObstacleLowerBoundList = function() {
  return this.setDynamicObstacleLowerBoundList([]);
};


/**
 * repeated double static_obstacle_upper_bound = 5;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getStaticObstacleUpperBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setStaticObstacleUpperBoundList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addStaticObstacleUpperBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearStaticObstacleUpperBoundList = function() {
  return this.setStaticObstacleUpperBoundList([]);
};


/**
 * repeated double dynamic_obstacle_upper_bound = 6;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getDynamicObstacleUpperBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setDynamicObstacleUpperBoundList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addDynamicObstacleUpperBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearDynamicObstacleUpperBoundList = function() {
  return this.setDynamicObstacleUpperBoundList([]);
};


/**
 * repeated double map_lower_bound = 7;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getMapLowerBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setMapLowerBoundList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addMapLowerBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearMapLowerBoundList = function() {
  return this.setMapLowerBoundList([]);
};


/**
 * repeated double map_upper_bound = 8;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getMapUpperBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setMapUpperBoundList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addMapUpperBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearMapUpperBoundList = function() {
  return this.setMapUpperBoundList([]);
};


/**
 * repeated apollo.common.SLPoint sl_path = 9;
 * @return {!Array<!proto.apollo.common.SLPoint>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getSlPathList = function() {
  return /** @type{!Array<!proto.apollo.common.SLPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SLPoint, 9));
};


/**
 * @param {!Array<!proto.apollo.common.SLPoint>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
*/
proto.apollo.planning_internal.SLFrameDebug.prototype.setSlPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.apollo.common.SLPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SLPoint}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addSlPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.apollo.common.SLPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearSlPathList = function() {
  return this.setSlPathList([]);
};


/**
 * repeated double aggregated_boundary_s = 10;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getAggregatedBoundarySList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setAggregatedBoundarySList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addAggregatedBoundaryS = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearAggregatedBoundarySList = function() {
  return this.setAggregatedBoundarySList([]);
};


/**
 * repeated double aggregated_boundary_low = 11;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getAggregatedBoundaryLowList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 11));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setAggregatedBoundaryLowList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addAggregatedBoundaryLow = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearAggregatedBoundaryLowList = function() {
  return this.setAggregatedBoundaryLowList([]);
};


/**
 * repeated double aggregated_boundary_high = 12;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.getAggregatedBoundaryHighList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 12));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.setAggregatedBoundaryHighList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.addAggregatedBoundaryHigh = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SLFrameDebug} returns this
 */
proto.apollo.planning_internal.SLFrameDebug.prototype.clearAggregatedBoundaryHighList = function() {
  return this.setAggregatedBoundaryHighList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.STGraphDebug.repeatedFields_ = [2,3,4];



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
proto.apollo.planning_internal.STGraphDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.STGraphDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.STGraphDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    boundaryList: jspb.Message.toObjectList(msg.getBoundaryList(),
    proto.apollo.planning_internal.StGraphBoundaryDebug.toObject, includeInstance),
    speedLimitList: jspb.Message.toObjectList(msg.getSpeedLimitList(),
    modules_common_proto_pnc_point_pb.SpeedPoint.toObject, includeInstance),
    speedProfileList: jspb.Message.toObjectList(msg.getSpeedProfileList(),
    modules_common_proto_pnc_point_pb.SpeedPoint.toObject, includeInstance),
    speedConstraint: (f = msg.getSpeedConstraint()) && proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.toObject(includeInstance, f),
    kernelCruiseRef: (f = msg.getKernelCruiseRef()) && proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.toObject(includeInstance, f),
    kernelFollowRef: (f = msg.getKernelFollowRef()) && proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of STGraphDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.STGraphDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.boundaryList;

  /** @type {?|undefined} */
  this.speedLimitList;

  /** @type {?|undefined} */
  this.speedProfileList;

  /** @type {?|undefined} */
  this.speedConstraint;

  /** @type {?|undefined} */
  this.kernelCruiseRef;

  /** @type {?|undefined} */
  this.kernelFollowRef;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.STGraphDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.STGraphDebug}
 */
proto.apollo.planning_internal.STGraphDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.STGraphDebug();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.boundaryList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.boundaryList.map(
          proto.apollo.planning_internal.StGraphBoundaryDebug.fromObject));
  obj.speedLimitList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.speedLimitList.map(
          modules_common_proto_pnc_point_pb.SpeedPoint.fromObject));
  obj.speedProfileList && jspb.Message.setRepeatedWrapperField(
      msg, 4, obj.speedProfileList.map(
          modules_common_proto_pnc_point_pb.SpeedPoint.fromObject));
  obj.speedConstraint && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.fromObject(obj.speedConstraint));
  obj.kernelCruiseRef && jspb.Message.setWrapperField(
      msg, 6, proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.fromObject(obj.kernelCruiseRef));
  obj.kernelFollowRef && jspb.Message.setWrapperField(
      msg, 7, proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.fromObject(obj.kernelFollowRef));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.STGraphDebug}
 */
proto.apollo.planning_internal.STGraphDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.STGraphDebug;
  return proto.apollo.planning_internal.STGraphDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.STGraphDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.STGraphDebug}
 */
proto.apollo.planning_internal.STGraphDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.apollo.planning_internal.StGraphBoundaryDebug;
      reader.readMessage(value,proto.apollo.planning_internal.StGraphBoundaryDebug.deserializeBinaryFromReader);
      msg.addBoundary(value);
      break;
    case 3:
      var value = new modules_common_proto_pnc_point_pb.SpeedPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SpeedPoint.deserializeBinaryFromReader);
      msg.addSpeedLimit(value);
      break;
    case 4:
      var value = new modules_common_proto_pnc_point_pb.SpeedPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SpeedPoint.deserializeBinaryFromReader);
      msg.addSpeedProfile(value);
      break;
    case 5:
      var value = new proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint;
      reader.readMessage(value,proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.deserializeBinaryFromReader);
      msg.setSpeedConstraint(value);
      break;
    case 6:
      var value = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef;
      reader.readMessage(value,proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.deserializeBinaryFromReader);
      msg.setKernelCruiseRef(value);
      break;
    case 7:
      var value = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef;
      reader.readMessage(value,proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.deserializeBinaryFromReader);
      msg.setKernelFollowRef(value);
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
proto.apollo.planning_internal.STGraphDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.STGraphDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.STGraphDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBoundaryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.planning_internal.StGraphBoundaryDebug.serializeBinaryToWriter
    );
  }
  f = message.getSpeedLimitList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      modules_common_proto_pnc_point_pb.SpeedPoint.serializeBinaryToWriter
    );
  }
  f = message.getSpeedProfileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      modules_common_proto_pnc_point_pb.SpeedPoint.serializeBinaryToWriter
    );
  }
  f = message.getSpeedConstraint();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.serializeBinaryToWriter
    );
  }
  f = message.getKernelCruiseRef();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.serializeBinaryToWriter
    );
  }
  f = message.getKernelFollowRef();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.repeatedFields_ = [1,2,3];



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
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.toObject = function(includeInstance, msg) {
  var f, obj = {
    tList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    lowerBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    upperBoundList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of STGraphSpeedConstraint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.tList;

  /** @type {?|undefined} */
  this.lowerBoundList;

  /** @type {?|undefined} */
  this.upperBoundList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint();
  obj.tList != null && jspb.Message.setField(msg, 1, obj.tList);
  obj.lowerBoundList != null && jspb.Message.setField(msg, 2, obj.lowerBoundList);
  obj.upperBoundList != null && jspb.Message.setField(msg, 3, obj.upperBoundList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint;
  return proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addT(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLowerBound(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUpperBound(values[i]);
      }
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
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      1,
      f
    );
  }
  f = message.getLowerBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      2,
      f
    );
  }
  f = message.getUpperBoundList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      3,
      f
    );
  }
};


/**
 * repeated double t = 1;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.getTList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.setTList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.addT = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.clearTList = function() {
  return this.setTList([]);
};


/**
 * repeated double lower_bound = 2;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.getLowerBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.setLowerBoundList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.addLowerBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.clearLowerBoundList = function() {
  return this.setLowerBoundList([]);
};


/**
 * repeated double upper_bound = 3;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.getUpperBoundList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.setUpperBoundList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.addUpperBound = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint.prototype.clearUpperBoundList = function() {
  return this.setUpperBoundList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.repeatedFields_ = [1,2];



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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    tList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    cruiseLineSList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of STGraphKernelCuiseRef as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.tList;

  /** @type {?|undefined} */
  this.cruiseLineSList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef();
  obj.tList != null && jspb.Message.setField(msg, 1, obj.tList);
  obj.cruiseLineSList != null && jspb.Message.setField(msg, 2, obj.cruiseLineSList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef;
  return proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addT(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCruiseLineS(values[i]);
      }
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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      1,
      f
    );
  }
  f = message.getCruiseLineSList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      2,
      f
    );
  }
};


/**
 * repeated double t = 1;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.getTList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.setTList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.addT = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.clearTList = function() {
  return this.setTList([]);
};


/**
 * repeated double cruise_line_s = 2;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.getCruiseLineSList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.setCruiseLineSList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.addCruiseLineS = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef.prototype.clearCruiseLineSList = function() {
  return this.setCruiseLineSList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.repeatedFields_ = [1,2];



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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    tList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    followLineSList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of STGraphKernelFollowRef as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.tList;

  /** @type {?|undefined} */
  this.followLineSList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef();
  obj.tList != null && jspb.Message.setField(msg, 1, obj.tList);
  obj.followLineSList != null && jspb.Message.setField(msg, 2, obj.followLineSList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef;
  return proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addT(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFollowLineS(values[i]);
      }
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
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      1,
      f
    );
  }
  f = message.getFollowLineSList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      2,
      f
    );
  }
};


/**
 * repeated double t = 1;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.getTList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.setTList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.addT = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.clearTList = function() {
  return this.setTList([]);
};


/**
 * repeated double follow_line_s = 2;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.getFollowLineSList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.setFollowLineSList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.addFollowLineS = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} returns this
 */
proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef.prototype.clearFollowLineSList = function() {
  return this.setFollowLineSList([]);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated StGraphBoundaryDebug boundary = 2;
 * @return {!Array<!proto.apollo.planning_internal.StGraphBoundaryDebug>}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getBoundaryList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.StGraphBoundaryDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.StGraphBoundaryDebug, 2));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.StGraphBoundaryDebug>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setBoundaryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.planning_internal.StGraphBoundaryDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.StGraphBoundaryDebug}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.addBoundary = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.planning_internal.StGraphBoundaryDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearBoundaryList = function() {
  return this.setBoundaryList([]);
};


/**
 * repeated apollo.common.SpeedPoint speed_limit = 3;
 * @return {!Array<!proto.apollo.common.SpeedPoint>}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getSpeedLimitList = function() {
  return /** @type{!Array<!proto.apollo.common.SpeedPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SpeedPoint, 3));
};


/**
 * @param {!Array<!proto.apollo.common.SpeedPoint>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setSpeedLimitList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.common.SpeedPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.addSpeedLimit = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.common.SpeedPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearSpeedLimitList = function() {
  return this.setSpeedLimitList([]);
};


/**
 * repeated apollo.common.SpeedPoint speed_profile = 4;
 * @return {!Array<!proto.apollo.common.SpeedPoint>}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getSpeedProfileList = function() {
  return /** @type{!Array<!proto.apollo.common.SpeedPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SpeedPoint, 4));
};


/**
 * @param {!Array<!proto.apollo.common.SpeedPoint>} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setSpeedProfileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.apollo.common.SpeedPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.addSpeedProfile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.apollo.common.SpeedPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearSpeedProfileList = function() {
  return this.setSpeedProfileList([]);
};


/**
 * optional STGraphSpeedConstraint speed_constraint = 5;
 * @return {?proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getSpeedConstraint = function() {
  return /** @type{?proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint, 5));
};


/**
 * @param {?proto.apollo.planning_internal.STGraphDebug.STGraphSpeedConstraint|undefined} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setSpeedConstraint = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearSpeedConstraint = function() {
  return this.setSpeedConstraint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.hasSpeedConstraint = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional STGraphKernelCuiseRef kernel_cruise_ref = 6;
 * @return {?proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getKernelCruiseRef = function() {
  return /** @type{?proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef, 6));
};


/**
 * @param {?proto.apollo.planning_internal.STGraphDebug.STGraphKernelCuiseRef|undefined} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setKernelCruiseRef = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearKernelCruiseRef = function() {
  return this.setKernelCruiseRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.hasKernelCruiseRef = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional STGraphKernelFollowRef kernel_follow_ref = 7;
 * @return {?proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.getKernelFollowRef = function() {
  return /** @type{?proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef, 7));
};


/**
 * @param {?proto.apollo.planning_internal.STGraphDebug.STGraphKernelFollowRef|undefined} value
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
*/
proto.apollo.planning_internal.STGraphDebug.prototype.setKernelFollowRef = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.STGraphDebug} returns this
 */
proto.apollo.planning_internal.STGraphDebug.prototype.clearKernelFollowRef = function() {
  return this.setKernelFollowRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.STGraphDebug.prototype.hasKernelFollowRef = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.SignalLightDebug.repeatedFields_ = [3];



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
proto.apollo.planning_internal.SignalLightDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SignalLightDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SignalLightDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SignalLightDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    adcSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    adcFrontS: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    signalList: jspb.Message.toObjectList(msg.getSignalList(),
    proto.apollo.planning_internal.SignalLightDebug.SignalDebug.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SignalLightDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SignalLightDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.adcSpeed;

  /** @type {?|undefined} */
  this.adcFrontS;

  /** @type {?|undefined} */
  this.signalList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SignalLightDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SignalLightDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SignalLightDebug();
  obj.adcSpeed != null && jspb.Message.setField(msg, 1, obj.adcSpeed);
  obj.adcFrontS != null && jspb.Message.setField(msg, 2, obj.adcFrontS);
  obj.signalList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.signalList.map(
          proto.apollo.planning_internal.SignalLightDebug.SignalDebug.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SignalLightDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SignalLightDebug;
  return proto.apollo.planning_internal.SignalLightDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SignalLightDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SignalLightDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAdcSpeed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAdcFrontS(value);
      break;
    case 3:
      var value = new proto.apollo.planning_internal.SignalLightDebug.SignalDebug;
      reader.readMessage(value,proto.apollo.planning_internal.SignalLightDebug.SignalDebug.deserializeBinaryFromReader);
      msg.addSignal(value);
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
proto.apollo.planning_internal.SignalLightDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SignalLightDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SignalLightDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SignalLightDebug.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSignalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.planning_internal.SignalLightDebug.SignalDebug.serializeBinaryToWriter
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
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SignalLightDebug.SignalDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    lightId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    color: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lightStopS: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    adcStopDeceleration: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    isStopWallCreated: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SignalDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.lightId;

  /** @type {?|undefined} */
  this.color;

  /** @type {?|undefined} */
  this.lightStopS;

  /** @type {?|undefined} */
  this.adcStopDeceleration;

  /** @type {?|undefined} */
  this.isStopWallCreated;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SignalLightDebug.SignalDebug();
  obj.lightId != null && jspb.Message.setField(msg, 1, obj.lightId);
  obj.color != null && jspb.Message.setField(msg, 2, obj.color);
  obj.lightStopS != null && jspb.Message.setField(msg, 3, obj.lightStopS);
  obj.adcStopDeceleration != null && jspb.Message.setField(msg, 4, obj.adcStopDeceleration);
  obj.isStopWallCreated != null && jspb.Message.setField(msg, 5, obj.isStopWallCreated);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SignalLightDebug.SignalDebug;
  return proto.apollo.planning_internal.SignalLightDebug.SignalDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLightId(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.perception.TrafficLight.Color} */ (reader.readEnum());
      msg.setColor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLightStopS(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAdcStopDeceleration(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStopWallCreated(value);
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
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SignalLightDebug.SignalDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.perception.TrafficLight.Color} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string light_id = 1;
 * @return {string}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.getLightId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.setLightId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.clearLightId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.hasLightId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.perception.TrafficLight.Color color = 2;
 * @return {!proto.apollo.perception.TrafficLight.Color}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.getColor = function() {
  return /** @type {!proto.apollo.perception.TrafficLight.Color} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.perception.TrafficLight.Color} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.setColor = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.clearColor = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.hasColor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double light_stop_s = 3;
 * @return {number}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.getLightStopS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.setLightStopS = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.clearLightStopS = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.hasLightStopS = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double adc_stop_deceleration = 4;
 * @return {number}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.getAdcStopDeceleration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.setAdcStopDeceleration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.clearAdcStopDeceleration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.hasAdcStopDeceleration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_stop_wall_created = 5;
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.getIsStopWallCreated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.setIsStopWallCreated = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.clearIsStopWallCreated = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.SignalDebug.prototype.hasIsStopWallCreated = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double adc_speed = 1;
 * @return {number}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.getAdcSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.setAdcSpeed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.clearAdcSpeed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.hasAdcSpeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double adc_front_s = 2;
 * @return {number}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.getAdcFrontS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.setAdcFrontS = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.clearAdcFrontS = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.hasAdcFrontS = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SignalDebug signal = 3;
 * @return {!Array<!proto.apollo.planning_internal.SignalLightDebug.SignalDebug>}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.getSignalList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.SignalLightDebug.SignalDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.SignalLightDebug.SignalDebug, 3));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.SignalLightDebug.SignalDebug>} value
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
*/
proto.apollo.planning_internal.SignalLightDebug.prototype.setSignalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SignalLightDebug.SignalDebug}
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.addSignal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.planning_internal.SignalLightDebug.SignalDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SignalLightDebug} returns this
 */
proto.apollo.planning_internal.SignalLightDebug.prototype.clearSignalList = function() {
  return this.setSignalList([]);
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
proto.apollo.planning_internal.DecisionTag.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.DecisionTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.DecisionTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.DecisionTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    deciderTag: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    decision: (f = msg.getDecision()) && modules_planning_proto_decision_pb.ObjectDecisionType.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DecisionTag as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.DecisionTag.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.deciderTag;

  /** @type {?|undefined} */
  this.decision;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.DecisionTag.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.DecisionTag}
 */
proto.apollo.planning_internal.DecisionTag.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.DecisionTag();
  obj.deciderTag != null && jspb.Message.setField(msg, 1, obj.deciderTag);
  obj.decision && jspb.Message.setWrapperField(
      msg, 2, modules_planning_proto_decision_pb.ObjectDecisionType.fromObject(obj.decision));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.DecisionTag}
 */
proto.apollo.planning_internal.DecisionTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.DecisionTag;
  return proto.apollo.planning_internal.DecisionTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.DecisionTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.DecisionTag}
 */
proto.apollo.planning_internal.DecisionTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeciderTag(value);
      break;
    case 2:
      var value = new modules_planning_proto_decision_pb.ObjectDecisionType;
      reader.readMessage(value,modules_planning_proto_decision_pb.ObjectDecisionType.deserializeBinaryFromReader);
      msg.setDecision(value);
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
proto.apollo.planning_internal.DecisionTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.DecisionTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.DecisionTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.DecisionTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDecision();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_planning_proto_decision_pb.ObjectDecisionType.serializeBinaryToWriter
    );
  }
};


/**
 * optional string decider_tag = 1;
 * @return {string}
 */
proto.apollo.planning_internal.DecisionTag.prototype.getDeciderTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.DecisionTag} returns this
 */
proto.apollo.planning_internal.DecisionTag.prototype.setDeciderTag = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.DecisionTag} returns this
 */
proto.apollo.planning_internal.DecisionTag.prototype.clearDeciderTag = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.DecisionTag.prototype.hasDeciderTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.planning.ObjectDecisionType decision = 2;
 * @return {?proto.apollo.planning.ObjectDecisionType}
 */
proto.apollo.planning_internal.DecisionTag.prototype.getDecision = function() {
  return /** @type{?proto.apollo.planning.ObjectDecisionType} */ (
    jspb.Message.getWrapperField(this, modules_planning_proto_decision_pb.ObjectDecisionType, 2));
};


/**
 * @param {?proto.apollo.planning.ObjectDecisionType|undefined} value
 * @return {!proto.apollo.planning_internal.DecisionTag} returns this
*/
proto.apollo.planning_internal.DecisionTag.prototype.setDecision = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.DecisionTag} returns this
 */
proto.apollo.planning_internal.DecisionTag.prototype.clearDecision = function() {
  return this.setDecision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.DecisionTag.prototype.hasDecision = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.ObstacleDebug.repeatedFields_ = [3,4,5];



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
proto.apollo.planning_internal.ObstacleDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.ObstacleDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.ObstacleDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ObstacleDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    slBoundary: (f = msg.getSlBoundary()) && modules_planning_proto_sl_boundary_pb.SLBoundary.toObject(includeInstance, f),
    decisionTagList: jspb.Message.toObjectList(msg.getDecisionTagList(),
    proto.apollo.planning_internal.DecisionTag.toObject, includeInstance),
    verticesXCoordsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    verticesYCoordsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ObstacleDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.ObstacleDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.slBoundary;

  /** @type {?|undefined} */
  this.decisionTagList;

  /** @type {?|undefined} */
  this.verticesXCoordsList;

  /** @type {?|undefined} */
  this.verticesYCoordsList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.ObstacleDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.ObstacleDebug}
 */
proto.apollo.planning_internal.ObstacleDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.ObstacleDebug();
  obj.id != null && jspb.Message.setField(msg, 1, obj.id);
  obj.slBoundary && jspb.Message.setWrapperField(
      msg, 2, modules_planning_proto_sl_boundary_pb.SLBoundary.fromObject(obj.slBoundary));
  obj.decisionTagList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.decisionTagList.map(
          proto.apollo.planning_internal.DecisionTag.fromObject));
  obj.verticesXCoordsList != null && jspb.Message.setField(msg, 4, obj.verticesXCoordsList);
  obj.verticesYCoordsList != null && jspb.Message.setField(msg, 5, obj.verticesYCoordsList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.ObstacleDebug}
 */
proto.apollo.planning_internal.ObstacleDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.ObstacleDebug;
  return proto.apollo.planning_internal.ObstacleDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.ObstacleDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.ObstacleDebug}
 */
proto.apollo.planning_internal.ObstacleDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new modules_planning_proto_sl_boundary_pb.SLBoundary;
      reader.readMessage(value,modules_planning_proto_sl_boundary_pb.SLBoundary.deserializeBinaryFromReader);
      msg.setSlBoundary(value);
      break;
    case 3:
      var value = new proto.apollo.planning_internal.DecisionTag;
      reader.readMessage(value,proto.apollo.planning_internal.DecisionTag.deserializeBinaryFromReader);
      msg.addDecisionTag(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVerticesXCoords(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVerticesYCoords(values[i]);
      }
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
proto.apollo.planning_internal.ObstacleDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.ObstacleDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.ObstacleDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ObstacleDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlBoundary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_planning_proto_sl_boundary_pb.SLBoundary.serializeBinaryToWriter
    );
  }
  f = message.getDecisionTagList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.planning_internal.DecisionTag.serializeBinaryToWriter
    );
  }
  f = message.getVerticesXCoordsList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      4,
      f
    );
  }
  f = message.getVerticesYCoordsList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.planning.SLBoundary sl_boundary = 2;
 * @return {?proto.apollo.planning.SLBoundary}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.getSlBoundary = function() {
  return /** @type{?proto.apollo.planning.SLBoundary} */ (
    jspb.Message.getWrapperField(this, modules_planning_proto_sl_boundary_pb.SLBoundary, 2));
};


/**
 * @param {?proto.apollo.planning.SLBoundary|undefined} value
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
*/
proto.apollo.planning_internal.ObstacleDebug.prototype.setSlBoundary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.clearSlBoundary = function() {
  return this.setSlBoundary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.hasSlBoundary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DecisionTag decision_tag = 3;
 * @return {!Array<!proto.apollo.planning_internal.DecisionTag>}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.getDecisionTagList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.DecisionTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.DecisionTag, 3));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.DecisionTag>} value
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
*/
proto.apollo.planning_internal.ObstacleDebug.prototype.setDecisionTagList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.planning_internal.DecisionTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.DecisionTag}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.addDecisionTag = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.planning_internal.DecisionTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.clearDecisionTagList = function() {
  return this.setDecisionTagList([]);
};


/**
 * repeated double vertices_x_coords = 4;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.getVerticesXCoordsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.setVerticesXCoordsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.addVerticesXCoords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.clearVerticesXCoordsList = function() {
  return this.setVerticesXCoordsList([]);
};


/**
 * repeated double vertices_y_coords = 5;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.getVerticesYCoordsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.setVerticesYCoordsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.addVerticesYCoords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.ObstacleDebug} returns this
 */
proto.apollo.planning_internal.ObstacleDebug.prototype.clearVerticesYCoordsList = function() {
  return this.setVerticesYCoordsList([]);
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
proto.apollo.planning_internal.ReferenceLineDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.ReferenceLineDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.ReferenceLineDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ReferenceLineDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    length: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    cost: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    isChangeLanePath: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    isDrivable: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    isProtected: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    isOffroad: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    minimumBoundary: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    averageKappa: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    averageDkappa: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
    kappaRms: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    dkappaRms: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
    kappaMaxAbs: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
    dkappaMaxAbs: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
    averageOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ReferenceLineDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.ReferenceLineDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.length;

  /** @type {?|undefined} */
  this.cost;

  /** @type {?|undefined} */
  this.isChangeLanePath;

  /** @type {?|undefined} */
  this.isDrivable;

  /** @type {?|undefined} */
  this.isProtected;

  /** @type {?|undefined} */
  this.isOffroad;

  /** @type {?|undefined} */
  this.minimumBoundary;

  /** @type {?|undefined} */
  this.averageKappa;

  /** @type {?|undefined} */
  this.averageDkappa;

  /** @type {?|undefined} */
  this.kappaRms;

  /** @type {?|undefined} */
  this.dkappaRms;

  /** @type {?|undefined} */
  this.kappaMaxAbs;

  /** @type {?|undefined} */
  this.dkappaMaxAbs;

  /** @type {?|undefined} */
  this.averageOffset;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.ReferenceLineDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug}
 */
proto.apollo.planning_internal.ReferenceLineDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.ReferenceLineDebug();
  obj.id != null && jspb.Message.setField(msg, 1, obj.id);
  obj.length != null && jspb.Message.setField(msg, 2, obj.length);
  obj.cost != null && jspb.Message.setField(msg, 3, obj.cost);
  obj.isChangeLanePath != null && jspb.Message.setField(msg, 4, obj.isChangeLanePath);
  obj.isDrivable != null && jspb.Message.setField(msg, 5, obj.isDrivable);
  obj.isProtected != null && jspb.Message.setField(msg, 6, obj.isProtected);
  obj.isOffroad != null && jspb.Message.setField(msg, 7, obj.isOffroad);
  obj.minimumBoundary != null && jspb.Message.setField(msg, 8, obj.minimumBoundary);
  obj.averageKappa != null && jspb.Message.setField(msg, 9, obj.averageKappa);
  obj.averageDkappa != null && jspb.Message.setField(msg, 10, obj.averageDkappa);
  obj.kappaRms != null && jspb.Message.setField(msg, 11, obj.kappaRms);
  obj.dkappaRms != null && jspb.Message.setField(msg, 12, obj.dkappaRms);
  obj.kappaMaxAbs != null && jspb.Message.setField(msg, 13, obj.kappaMaxAbs);
  obj.dkappaMaxAbs != null && jspb.Message.setField(msg, 14, obj.dkappaMaxAbs);
  obj.averageOffset != null && jspb.Message.setField(msg, 15, obj.averageOffset);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug}
 */
proto.apollo.planning_internal.ReferenceLineDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.ReferenceLineDebug;
  return proto.apollo.planning_internal.ReferenceLineDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.ReferenceLineDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug}
 */
proto.apollo.planning_internal.ReferenceLineDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCost(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsChangeLanePath(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDrivable(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProtected(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOffroad(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinimumBoundary(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageKappa(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageDkappa(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKappaRms(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDkappaRms(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKappaMaxAbs(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDkappaMaxAbs(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageOffset(value);
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
proto.apollo.planning_internal.ReferenceLineDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.ReferenceLineDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.ReferenceLineDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ReferenceLineDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double length = 2;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setLength = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearLength = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasLength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double cost = 3;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setCost = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearCost = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasCost = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_change_lane_path = 4;
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getIsChangeLanePath = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setIsChangeLanePath = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearIsChangeLanePath = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasIsChangeLanePath = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_drivable = 5;
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getIsDrivable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setIsDrivable = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearIsDrivable = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasIsDrivable = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_protected = 6;
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getIsProtected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setIsProtected = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearIsProtected = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasIsProtected = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_offroad = 7;
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getIsOffroad = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setIsOffroad = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearIsOffroad = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasIsOffroad = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double minimum_boundary = 8;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getMinimumBoundary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setMinimumBoundary = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearMinimumBoundary = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasMinimumBoundary = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double average_kappa = 9;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getAverageKappa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setAverageKappa = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearAverageKappa = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasAverageKappa = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double average_dkappa = 10;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getAverageDkappa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setAverageDkappa = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearAverageDkappa = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasAverageDkappa = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double kappa_rms = 11;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getKappaRms = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setKappaRms = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearKappaRms = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasKappaRms = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double dkappa_rms = 12;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getDkappaRms = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setDkappaRms = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearDkappaRms = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasDkappaRms = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double kappa_max_abs = 13;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getKappaMaxAbs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setKappaMaxAbs = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearKappaMaxAbs = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasKappaMaxAbs = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double dkappa_max_abs = 14;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getDkappaMaxAbs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setDkappaMaxAbs = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearDkappaMaxAbs = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasDkappaMaxAbs = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double average_offset = 15;
 * @return {number}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.getAverageOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.setAverageOffset = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug} returns this
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.clearAverageOffset = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ReferenceLineDebug.prototype.hasAverageOffset = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.SampleLayerDebug.repeatedFields_ = [1];



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
proto.apollo.planning_internal.SampleLayerDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SampleLayerDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SampleLayerDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SampleLayerDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    slPointList: jspb.Message.toObjectList(msg.getSlPointList(),
    modules_common_proto_pnc_point_pb.SLPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SampleLayerDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SampleLayerDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.slPointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SampleLayerDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SampleLayerDebug}
 */
proto.apollo.planning_internal.SampleLayerDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SampleLayerDebug();
  obj.slPointList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.slPointList.map(
          modules_common_proto_pnc_point_pb.SLPoint.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SampleLayerDebug}
 */
proto.apollo.planning_internal.SampleLayerDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SampleLayerDebug;
  return proto.apollo.planning_internal.SampleLayerDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SampleLayerDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SampleLayerDebug}
 */
proto.apollo.planning_internal.SampleLayerDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_pnc_point_pb.SLPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SLPoint.deserializeBinaryFromReader);
      msg.addSlPoint(value);
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
proto.apollo.planning_internal.SampleLayerDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SampleLayerDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SampleLayerDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SampleLayerDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_common_proto_pnc_point_pb.SLPoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.common.SLPoint sl_point = 1;
 * @return {!Array<!proto.apollo.common.SLPoint>}
 */
proto.apollo.planning_internal.SampleLayerDebug.prototype.getSlPointList = function() {
  return /** @type{!Array<!proto.apollo.common.SLPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SLPoint, 1));
};


/**
 * @param {!Array<!proto.apollo.common.SLPoint>} value
 * @return {!proto.apollo.planning_internal.SampleLayerDebug} returns this
*/
proto.apollo.planning_internal.SampleLayerDebug.prototype.setSlPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.SLPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SLPoint}
 */
proto.apollo.planning_internal.SampleLayerDebug.prototype.addSlPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.SLPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.SampleLayerDebug} returns this
 */
proto.apollo.planning_internal.SampleLayerDebug.prototype.clearSlPointList = function() {
  return this.setSlPointList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.DpPolyGraphDebug.repeatedFields_ = [1,2];



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
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.DpPolyGraphDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.DpPolyGraphDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.DpPolyGraphDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    sampleLayerList: jspb.Message.toObjectList(msg.getSampleLayerList(),
    proto.apollo.planning_internal.SampleLayerDebug.toObject, includeInstance),
    minCostPointList: jspb.Message.toObjectList(msg.getMinCostPointList(),
    modules_common_proto_pnc_point_pb.SLPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DpPolyGraphDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.DpPolyGraphDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.sampleLayerList;

  /** @type {?|undefined} */
  this.minCostPointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.DpPolyGraphDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.DpPolyGraphDebug();
  obj.sampleLayerList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.sampleLayerList.map(
          proto.apollo.planning_internal.SampleLayerDebug.fromObject));
  obj.minCostPointList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.minCostPointList.map(
          modules_common_proto_pnc_point_pb.SLPoint.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.DpPolyGraphDebug;
  return proto.apollo.planning_internal.DpPolyGraphDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.DpPolyGraphDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.planning_internal.SampleLayerDebug;
      reader.readMessage(value,proto.apollo.planning_internal.SampleLayerDebug.deserializeBinaryFromReader);
      msg.addSampleLayer(value);
      break;
    case 2:
      var value = new modules_common_proto_pnc_point_pb.SLPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.SLPoint.deserializeBinaryFromReader);
      msg.addMinCostPoint(value);
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
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.DpPolyGraphDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.DpPolyGraphDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.DpPolyGraphDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSampleLayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.planning_internal.SampleLayerDebug.serializeBinaryToWriter
    );
  }
  f = message.getMinCostPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      modules_common_proto_pnc_point_pb.SLPoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SampleLayerDebug sample_layer = 1;
 * @return {!Array<!proto.apollo.planning_internal.SampleLayerDebug>}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.getSampleLayerList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.SampleLayerDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.SampleLayerDebug, 1));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.SampleLayerDebug>} value
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug} returns this
*/
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.setSampleLayerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.planning_internal.SampleLayerDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SampleLayerDebug}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.addSampleLayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.planning_internal.SampleLayerDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug} returns this
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.clearSampleLayerList = function() {
  return this.setSampleLayerList([]);
};


/**
 * repeated apollo.common.SLPoint min_cost_point = 2;
 * @return {!Array<!proto.apollo.common.SLPoint>}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.getMinCostPointList = function() {
  return /** @type{!Array<!proto.apollo.common.SLPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.SLPoint, 2));
};


/**
 * @param {!Array<!proto.apollo.common.SLPoint>} value
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug} returns this
*/
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.setMinCostPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.common.SLPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.SLPoint}
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.addMinCostPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.common.SLPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.DpPolyGraphDebug} returns this
 */
proto.apollo.planning_internal.DpPolyGraphDebug.prototype.clearMinCostPointList = function() {
  return this.setMinCostPointList([]);
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
proto.apollo.planning_internal.ScenarioDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.ScenarioDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.ScenarioDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ScenarioDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenarioType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    stageType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    msg: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ScenarioDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.ScenarioDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.scenarioType;

  /** @type {?|undefined} */
  this.stageType;

  /** @type {?|undefined} */
  this.msg;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.ScenarioDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.ScenarioDebug}
 */
proto.apollo.planning_internal.ScenarioDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.ScenarioDebug();
  obj.scenarioType != null && jspb.Message.setField(msg, 1, obj.scenarioType);
  obj.stageType != null && jspb.Message.setField(msg, 2, obj.stageType);
  obj.msg != null && jspb.Message.setField(msg, 3, obj.msg);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.ScenarioDebug}
 */
proto.apollo.planning_internal.ScenarioDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.ScenarioDebug;
  return proto.apollo.planning_internal.ScenarioDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.ScenarioDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.ScenarioDebug}
 */
proto.apollo.planning_internal.ScenarioDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.planning.ScenarioConfig.ScenarioType} */ (reader.readEnum());
      msg.setScenarioType(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.planning.ScenarioConfig.StageType} */ (reader.readEnum());
      msg.setStageType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.apollo.planning_internal.ScenarioDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.ScenarioDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.ScenarioDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.ScenarioDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.planning.ScenarioConfig.ScenarioType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.planning.ScenarioConfig.StageType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * optional apollo.planning.ScenarioConfig.ScenarioType scenario_type = 1;
 * @return {!proto.apollo.planning.ScenarioConfig.ScenarioType}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.getScenarioType = function() {
  return /** @type {!proto.apollo.planning.ScenarioConfig.ScenarioType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.planning.ScenarioConfig.ScenarioType} value
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.setScenarioType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.clearScenarioType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.hasScenarioType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.planning.ScenarioConfig.StageType stage_type = 2;
 * @return {!proto.apollo.planning.ScenarioConfig.StageType}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.getStageType = function() {
  return /** @type {!proto.apollo.planning.ScenarioConfig.StageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.planning.ScenarioConfig.StageType} value
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.setStageType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.clearStageType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.hasStageType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.setMsg = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.ScenarioDebug} returns this
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.clearMsg = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.ScenarioDebug.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.Trajectories.repeatedFields_ = [1];



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
proto.apollo.planning_internal.Trajectories.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.Trajectories.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.Trajectories} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.Trajectories.toObject = function(includeInstance, msg) {
  var f, obj = {
    trajectoryList: jspb.Message.toObjectList(msg.getTrajectoryList(),
    modules_common_proto_pnc_point_pb.Trajectory.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Trajectories as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.Trajectories.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.trajectoryList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.Trajectories.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.Trajectories.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.Trajectories();
  obj.trajectoryList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.trajectoryList.map(
          modules_common_proto_pnc_point_pb.Trajectory.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.Trajectories.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.Trajectories;
  return proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.Trajectories} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_pnc_point_pb.Trajectory;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.Trajectory.deserializeBinaryFromReader);
      msg.addTrajectory(value);
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
proto.apollo.planning_internal.Trajectories.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.Trajectories} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrajectoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_common_proto_pnc_point_pb.Trajectory.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.common.Trajectory trajectory = 1;
 * @return {!Array<!proto.apollo.common.Trajectory>}
 */
proto.apollo.planning_internal.Trajectories.prototype.getTrajectoryList = function() {
  return /** @type{!Array<!proto.apollo.common.Trajectory>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.Trajectory, 1));
};


/**
 * @param {!Array<!proto.apollo.common.Trajectory>} value
 * @return {!proto.apollo.planning_internal.Trajectories} returns this
*/
proto.apollo.planning_internal.Trajectories.prototype.setTrajectoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.Trajectory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.Trajectory}
 */
proto.apollo.planning_internal.Trajectories.prototype.addTrajectory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.Trajectory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.Trajectories} returns this
 */
proto.apollo.planning_internal.Trajectories.prototype.clearTrajectoryList = function() {
  return this.setTrajectoryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.OpenSpaceDebug.repeatedFields_ = [4,5,6,7,8,9];



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
proto.apollo.planning_internal.OpenSpaceDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.OpenSpaceDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.OpenSpaceDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.OpenSpaceDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    trajectories: (f = msg.getTrajectories()) && proto.apollo.planning_internal.Trajectories.toObject(includeInstance, f),
    warmStartTrajectory: (f = msg.getWarmStartTrajectory()) && modules_common_proto_pnc_point_pb.VehicleMotion.toObject(includeInstance, f),
    smoothedTrajectory: (f = msg.getSmoothedTrajectory()) && modules_common_proto_pnc_point_pb.VehicleMotion.toObject(includeInstance, f),
    warmStartDualLambdaList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    warmStartDualMiuList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
    optimizedDualLambdaList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f,
    optimizedDualMiuList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
    xyBoundaryList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 8)) == null ? undefined : f,
    obstaclesList: jspb.Message.toObjectList(msg.getObstaclesList(),
    proto.apollo.planning_internal.ObstacleDebug.toObject, includeInstance),
    roiShiftPoint: (f = msg.getRoiShiftPoint()) && modules_common_proto_pnc_point_pb.TrajectoryPoint.toObject(includeInstance, f),
    endPoint: (f = msg.getEndPoint()) && modules_common_proto_pnc_point_pb.TrajectoryPoint.toObject(includeInstance, f),
    partitionedTrajectories: (f = msg.getPartitionedTrajectories()) && proto.apollo.planning_internal.Trajectories.toObject(includeInstance, f),
    chosenTrajectory: (f = msg.getChosenTrajectory()) && proto.apollo.planning_internal.Trajectories.toObject(includeInstance, f),
    isFallbackTrajectory: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    fallbackTrajectory: (f = msg.getFallbackTrajectory()) && proto.apollo.planning_internal.Trajectories.toObject(includeInstance, f),
    trajectoryStitchingPoint: (f = msg.getTrajectoryStitchingPoint()) && modules_common_proto_pnc_point_pb.TrajectoryPoint.toObject(includeInstance, f),
    futureCollisionPoint: (f = msg.getFutureCollisionPoint()) && modules_common_proto_pnc_point_pb.TrajectoryPoint.toObject(includeInstance, f),
    timeLatency: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    originPoint: (f = msg.getOriginPoint()) && modules_common_proto_geometry_pb.PointENU.toObject(includeInstance, f),
    originHeadingRad: (f = jspb.Message.getOptionalFloatingPointField(msg, 20)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of OpenSpaceDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.OpenSpaceDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.trajectories;

  /** @type {?|undefined} */
  this.warmStartTrajectory;

  /** @type {?|undefined} */
  this.smoothedTrajectory;

  /** @type {?|undefined} */
  this.warmStartDualLambdaList;

  /** @type {?|undefined} */
  this.warmStartDualMiuList;

  /** @type {?|undefined} */
  this.optimizedDualLambdaList;

  /** @type {?|undefined} */
  this.optimizedDualMiuList;

  /** @type {?|undefined} */
  this.xyBoundaryList;

  /** @type {?|undefined} */
  this.obstaclesList;

  /** @type {?|undefined} */
  this.roiShiftPoint;

  /** @type {?|undefined} */
  this.endPoint;

  /** @type {?|undefined} */
  this.partitionedTrajectories;

  /** @type {?|undefined} */
  this.chosenTrajectory;

  /** @type {?|undefined} */
  this.isFallbackTrajectory;

  /** @type {?|undefined} */
  this.fallbackTrajectory;

  /** @type {?|undefined} */
  this.trajectoryStitchingPoint;

  /** @type {?|undefined} */
  this.futureCollisionPoint;

  /** @type {?|undefined} */
  this.timeLatency;

  /** @type {?|undefined} */
  this.originPoint;

  /** @type {?|undefined} */
  this.originHeadingRad;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.OpenSpaceDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug}
 */
proto.apollo.planning_internal.OpenSpaceDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.OpenSpaceDebug();
  obj.trajectories && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.planning_internal.Trajectories.fromObject(obj.trajectories));
  obj.warmStartTrajectory && jspb.Message.setWrapperField(
      msg, 2, modules_common_proto_pnc_point_pb.VehicleMotion.fromObject(obj.warmStartTrajectory));
  obj.smoothedTrajectory && jspb.Message.setWrapperField(
      msg, 3, modules_common_proto_pnc_point_pb.VehicleMotion.fromObject(obj.smoothedTrajectory));
  obj.warmStartDualLambdaList != null && jspb.Message.setField(msg, 4, obj.warmStartDualLambdaList);
  obj.warmStartDualMiuList != null && jspb.Message.setField(msg, 5, obj.warmStartDualMiuList);
  obj.optimizedDualLambdaList != null && jspb.Message.setField(msg, 6, obj.optimizedDualLambdaList);
  obj.optimizedDualMiuList != null && jspb.Message.setField(msg, 7, obj.optimizedDualMiuList);
  obj.xyBoundaryList != null && jspb.Message.setField(msg, 8, obj.xyBoundaryList);
  obj.obstaclesList && jspb.Message.setRepeatedWrapperField(
      msg, 9, obj.obstaclesList.map(
          proto.apollo.planning_internal.ObstacleDebug.fromObject));
  obj.roiShiftPoint && jspb.Message.setWrapperField(
      msg, 10, modules_common_proto_pnc_point_pb.TrajectoryPoint.fromObject(obj.roiShiftPoint));
  obj.endPoint && jspb.Message.setWrapperField(
      msg, 11, modules_common_proto_pnc_point_pb.TrajectoryPoint.fromObject(obj.endPoint));
  obj.partitionedTrajectories && jspb.Message.setWrapperField(
      msg, 12, proto.apollo.planning_internal.Trajectories.fromObject(obj.partitionedTrajectories));
  obj.chosenTrajectory && jspb.Message.setWrapperField(
      msg, 13, proto.apollo.planning_internal.Trajectories.fromObject(obj.chosenTrajectory));
  obj.isFallbackTrajectory != null && jspb.Message.setField(msg, 14, obj.isFallbackTrajectory);
  obj.fallbackTrajectory && jspb.Message.setWrapperField(
      msg, 15, proto.apollo.planning_internal.Trajectories.fromObject(obj.fallbackTrajectory));
  obj.trajectoryStitchingPoint && jspb.Message.setWrapperField(
      msg, 16, modules_common_proto_pnc_point_pb.TrajectoryPoint.fromObject(obj.trajectoryStitchingPoint));
  obj.futureCollisionPoint && jspb.Message.setWrapperField(
      msg, 17, modules_common_proto_pnc_point_pb.TrajectoryPoint.fromObject(obj.futureCollisionPoint));
  obj.timeLatency != null && jspb.Message.setField(msg, 18, obj.timeLatency);
  obj.originPoint && jspb.Message.setWrapperField(
      msg, 19, modules_common_proto_geometry_pb.PointENU.fromObject(obj.originPoint));
  obj.originHeadingRad != null && jspb.Message.setField(msg, 20, obj.originHeadingRad);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug}
 */
proto.apollo.planning_internal.OpenSpaceDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.OpenSpaceDebug;
  return proto.apollo.planning_internal.OpenSpaceDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.OpenSpaceDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug}
 */
proto.apollo.planning_internal.OpenSpaceDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.planning_internal.Trajectories;
      reader.readMessage(value,proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader);
      msg.setTrajectories(value);
      break;
    case 2:
      var value = new modules_common_proto_pnc_point_pb.VehicleMotion;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.VehicleMotion.deserializeBinaryFromReader);
      msg.setWarmStartTrajectory(value);
      break;
    case 3:
      var value = new modules_common_proto_pnc_point_pb.VehicleMotion;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.VehicleMotion.deserializeBinaryFromReader);
      msg.setSmoothedTrajectory(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addWarmStartDualLambda(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addWarmStartDualMiu(values[i]);
      }
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptimizedDualLambda(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptimizedDualMiu(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addXyBoundary(values[i]);
      }
      break;
    case 9:
      var value = new proto.apollo.planning_internal.ObstacleDebug;
      reader.readMessage(value,proto.apollo.planning_internal.ObstacleDebug.deserializeBinaryFromReader);
      msg.addObstacles(value);
      break;
    case 10:
      var value = new modules_common_proto_pnc_point_pb.TrajectoryPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setRoiShiftPoint(value);
      break;
    case 11:
      var value = new modules_common_proto_pnc_point_pb.TrajectoryPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setEndPoint(value);
      break;
    case 12:
      var value = new proto.apollo.planning_internal.Trajectories;
      reader.readMessage(value,proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader);
      msg.setPartitionedTrajectories(value);
      break;
    case 13:
      var value = new proto.apollo.planning_internal.Trajectories;
      reader.readMessage(value,proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader);
      msg.setChosenTrajectory(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFallbackTrajectory(value);
      break;
    case 15:
      var value = new proto.apollo.planning_internal.Trajectories;
      reader.readMessage(value,proto.apollo.planning_internal.Trajectories.deserializeBinaryFromReader);
      msg.setFallbackTrajectory(value);
      break;
    case 16:
      var value = new modules_common_proto_pnc_point_pb.TrajectoryPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setTrajectoryStitchingPoint(value);
      break;
    case 17:
      var value = new modules_common_proto_pnc_point_pb.TrajectoryPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setFutureCollisionPoint(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeLatency(value);
      break;
    case 19:
      var value = new modules_common_proto_geometry_pb.PointENU;
      reader.readMessage(value,modules_common_proto_geometry_pb.PointENU.deserializeBinaryFromReader);
      msg.setOriginPoint(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOriginHeadingRad(value);
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
proto.apollo.planning_internal.OpenSpaceDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.OpenSpaceDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.OpenSpaceDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.OpenSpaceDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrajectories();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter
    );
  }
  f = message.getWarmStartTrajectory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      modules_common_proto_pnc_point_pb.VehicleMotion.serializeBinaryToWriter
    );
  }
  f = message.getSmoothedTrajectory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      modules_common_proto_pnc_point_pb.VehicleMotion.serializeBinaryToWriter
    );
  }
  f = message.getWarmStartDualLambdaList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      4,
      f
    );
  }
  f = message.getWarmStartDualMiuList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      5,
      f
    );
  }
  f = message.getOptimizedDualLambdaList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      6,
      f
    );
  }
  f = message.getOptimizedDualMiuList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      7,
      f
    );
  }
  f = message.getXyBoundaryList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      8,
      f
    );
  }
  f = message.getObstaclesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.apollo.planning_internal.ObstacleDebug.serializeBinaryToWriter
    );
  }
  f = message.getRoiShiftPoint();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      modules_common_proto_pnc_point_pb.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getEndPoint();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      modules_common_proto_pnc_point_pb.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getPartitionedTrajectories();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter
    );
  }
  f = message.getChosenTrajectory();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getFallbackTrajectory();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.planning_internal.Trajectories.serializeBinaryToWriter
    );
  }
  f = message.getTrajectoryStitchingPoint();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      modules_common_proto_pnc_point_pb.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getFutureCollisionPoint();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      modules_common_proto_pnc_point_pb.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = message.getOriginPoint();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      modules_common_proto_geometry_pb.PointENU.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeDouble(
      20,
      f
    );
  }
};


/**
 * optional Trajectories trajectories = 1;
 * @return {?proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getTrajectories = function() {
  return /** @type{?proto.apollo.planning_internal.Trajectories} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.Trajectories, 1));
};


/**
 * @param {?proto.apollo.planning_internal.Trajectories|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setTrajectories = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearTrajectories = function() {
  return this.setTrajectories(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasTrajectories = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.common.VehicleMotion warm_start_trajectory = 2;
 * @return {?proto.apollo.common.VehicleMotion}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getWarmStartTrajectory = function() {
  return /** @type{?proto.apollo.common.VehicleMotion} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.VehicleMotion, 2));
};


/**
 * @param {?proto.apollo.common.VehicleMotion|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setWarmStartTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearWarmStartTrajectory = function() {
  return this.setWarmStartTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasWarmStartTrajectory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional apollo.common.VehicleMotion smoothed_trajectory = 3;
 * @return {?proto.apollo.common.VehicleMotion}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getSmoothedTrajectory = function() {
  return /** @type{?proto.apollo.common.VehicleMotion} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.VehicleMotion, 3));
};


/**
 * @param {?proto.apollo.common.VehicleMotion|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setSmoothedTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearSmoothedTrajectory = function() {
  return this.setSmoothedTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasSmoothedTrajectory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated double warm_start_dual_lambda = 4;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getWarmStartDualLambdaList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setWarmStartDualLambdaList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addWarmStartDualLambda = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearWarmStartDualLambdaList = function() {
  return this.setWarmStartDualLambdaList([]);
};


/**
 * repeated double warm_start_dual_miu = 5;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getWarmStartDualMiuList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setWarmStartDualMiuList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addWarmStartDualMiu = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearWarmStartDualMiuList = function() {
  return this.setWarmStartDualMiuList([]);
};


/**
 * repeated double optimized_dual_lambda = 6;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getOptimizedDualLambdaList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setOptimizedDualLambdaList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addOptimizedDualLambda = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearOptimizedDualLambdaList = function() {
  return this.setOptimizedDualLambdaList([]);
};


/**
 * repeated double optimized_dual_miu = 7;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getOptimizedDualMiuList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setOptimizedDualMiuList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addOptimizedDualMiu = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearOptimizedDualMiuList = function() {
  return this.setOptimizedDualMiuList([]);
};


/**
 * repeated double xy_boundary = 8;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getXyBoundaryList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setXyBoundaryList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addXyBoundary = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearXyBoundaryList = function() {
  return this.setXyBoundaryList([]);
};


/**
 * repeated ObstacleDebug obstacles = 9;
 * @return {!Array<!proto.apollo.planning_internal.ObstacleDebug>}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getObstaclesList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.ObstacleDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.ObstacleDebug, 9));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.ObstacleDebug>} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setObstaclesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.apollo.planning_internal.ObstacleDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.ObstacleDebug}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.addObstacles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.apollo.planning_internal.ObstacleDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearObstaclesList = function() {
  return this.setObstaclesList([]);
};


/**
 * optional apollo.common.TrajectoryPoint roi_shift_point = 10;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getRoiShiftPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.TrajectoryPoint, 10));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setRoiShiftPoint = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearRoiShiftPoint = function() {
  return this.setRoiShiftPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasRoiShiftPoint = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional apollo.common.TrajectoryPoint end_point = 11;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getEndPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.TrajectoryPoint, 11));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setEndPoint = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearEndPoint = function() {
  return this.setEndPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasEndPoint = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Trajectories partitioned_trajectories = 12;
 * @return {?proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getPartitionedTrajectories = function() {
  return /** @type{?proto.apollo.planning_internal.Trajectories} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.Trajectories, 12));
};


/**
 * @param {?proto.apollo.planning_internal.Trajectories|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setPartitionedTrajectories = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearPartitionedTrajectories = function() {
  return this.setPartitionedTrajectories(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasPartitionedTrajectories = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Trajectories chosen_trajectory = 13;
 * @return {?proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getChosenTrajectory = function() {
  return /** @type{?proto.apollo.planning_internal.Trajectories} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.Trajectories, 13));
};


/**
 * @param {?proto.apollo.planning_internal.Trajectories|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setChosenTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearChosenTrajectory = function() {
  return this.setChosenTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasChosenTrajectory = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool is_fallback_trajectory = 14;
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getIsFallbackTrajectory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setIsFallbackTrajectory = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearIsFallbackTrajectory = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasIsFallbackTrajectory = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Trajectories fallback_trajectory = 15;
 * @return {?proto.apollo.planning_internal.Trajectories}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getFallbackTrajectory = function() {
  return /** @type{?proto.apollo.planning_internal.Trajectories} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.Trajectories, 15));
};


/**
 * @param {?proto.apollo.planning_internal.Trajectories|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setFallbackTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearFallbackTrajectory = function() {
  return this.setFallbackTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasFallbackTrajectory = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional apollo.common.TrajectoryPoint trajectory_stitching_point = 16;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getTrajectoryStitchingPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.TrajectoryPoint, 16));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setTrajectoryStitchingPoint = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearTrajectoryStitchingPoint = function() {
  return this.setTrajectoryStitchingPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasTrajectoryStitchingPoint = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional apollo.common.TrajectoryPoint future_collision_point = 17;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getFutureCollisionPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.TrajectoryPoint, 17));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setFutureCollisionPoint = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearFutureCollisionPoint = function() {
  return this.setFutureCollisionPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasFutureCollisionPoint = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double time_latency = 18;
 * @return {number}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getTimeLatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setTimeLatency = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearTimeLatency = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasTimeLatency = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional apollo.common.PointENU origin_point = 19;
 * @return {?proto.apollo.common.PointENU}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getOriginPoint = function() {
  return /** @type{?proto.apollo.common.PointENU} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.PointENU, 19));
};


/**
 * @param {?proto.apollo.common.PointENU|undefined} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
*/
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setOriginPoint = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearOriginPoint = function() {
  return this.setOriginPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasOriginPoint = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional double origin_heading_rad = 20;
 * @return {number}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.getOriginHeadingRad = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.setOriginHeadingRad = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.OpenSpaceDebug} returns this
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.clearOriginHeadingRad = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.OpenSpaceDebug.prototype.hasOriginHeadingRad = function() {
  return jspb.Message.getField(this, 20) != null;
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
proto.apollo.planning_internal.SmootherDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.SmootherDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.SmootherDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SmootherDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    isSmoothed: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 2, 1),
    reason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SmootherDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.SmootherDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isSmoothed;

  /** @type {?|undefined} */
  this.type;

  /** @type {?|undefined} */
  this.reason;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.SmootherDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.SmootherDebug}
 */
proto.apollo.planning_internal.SmootherDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.SmootherDebug();
  obj.isSmoothed != null && jspb.Message.setField(msg, 1, obj.isSmoothed);
  obj.type != null && jspb.Message.setField(msg, 2, obj.type);
  obj.reason != null && jspb.Message.setField(msg, 3, obj.reason);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.SmootherDebug}
 */
proto.apollo.planning_internal.SmootherDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.SmootherDebug;
  return proto.apollo.planning_internal.SmootherDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.SmootherDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.SmootherDebug}
 */
proto.apollo.planning_internal.SmootherDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSmoothed(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.planning_internal.SmootherDebug.SmootherType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
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
proto.apollo.planning_internal.SmootherDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.SmootherDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.SmootherDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.SmootherDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.planning_internal.SmootherDebug.SmootherType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.planning_internal.SmootherDebug.SmootherType = {
  SMOOTHER_NONE: 1,
  SMOOTHER_CLOSE_STOP: 2
};

/**
 * optional bool is_smoothed = 1;
 * @return {boolean}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.getIsSmoothed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.setIsSmoothed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.clearIsSmoothed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.hasIsSmoothed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SmootherType type = 2;
 * @return {!proto.apollo.planning_internal.SmootherDebug.SmootherType}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.getType = function() {
  return /** @type {!proto.apollo.planning_internal.SmootherDebug.SmootherType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.apollo.planning_internal.SmootherDebug.SmootherType} value
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.SmootherDebug} returns this
 */
proto.apollo.planning_internal.SmootherDebug.prototype.clearReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.SmootherDebug.prototype.hasReason = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.apollo.planning_internal.PullOverDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.PullOverDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.PullOverDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.PullOverDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && modules_common_proto_geometry_pb.PointENU.toObject(includeInstance, f),
    theta: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    lengthFront: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    lengthBack: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    widthLeft: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    widthRight: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PullOverDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.PullOverDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.position;

  /** @type {?|undefined} */
  this.theta;

  /** @type {?|undefined} */
  this.lengthFront;

  /** @type {?|undefined} */
  this.lengthBack;

  /** @type {?|undefined} */
  this.widthLeft;

  /** @type {?|undefined} */
  this.widthRight;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.PullOverDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.PullOverDebug}
 */
proto.apollo.planning_internal.PullOverDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.PullOverDebug();
  obj.position && jspb.Message.setWrapperField(
      msg, 1, modules_common_proto_geometry_pb.PointENU.fromObject(obj.position));
  obj.theta != null && jspb.Message.setField(msg, 2, obj.theta);
  obj.lengthFront != null && jspb.Message.setField(msg, 3, obj.lengthFront);
  obj.lengthBack != null && jspb.Message.setField(msg, 4, obj.lengthBack);
  obj.widthLeft != null && jspb.Message.setField(msg, 5, obj.widthLeft);
  obj.widthRight != null && jspb.Message.setField(msg, 6, obj.widthRight);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.PullOverDebug}
 */
proto.apollo.planning_internal.PullOverDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.PullOverDebug;
  return proto.apollo.planning_internal.PullOverDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.PullOverDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.PullOverDebug}
 */
proto.apollo.planning_internal.PullOverDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_geometry_pb.PointENU;
      reader.readMessage(value,modules_common_proto_geometry_pb.PointENU.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTheta(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLengthFront(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLengthBack(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidthLeft(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWidthRight(value);
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
proto.apollo.planning_internal.PullOverDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.PullOverDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.PullOverDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.PullOverDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_common_proto_geometry_pb.PointENU.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional apollo.common.PointENU position = 1;
 * @return {?proto.apollo.common.PointENU}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getPosition = function() {
  return /** @type{?proto.apollo.common.PointENU} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_geometry_pb.PointENU, 1));
};


/**
 * @param {?proto.apollo.common.PointENU|undefined} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
*/
proto.apollo.planning_internal.PullOverDebug.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double theta = 2;
 * @return {number}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getTheta = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.setTheta = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearTheta = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasTheta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double length_front = 3;
 * @return {number}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getLengthFront = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.setLengthFront = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearLengthFront = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasLengthFront = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double length_back = 4;
 * @return {number}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getLengthBack = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.setLengthBack = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearLengthBack = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasLengthBack = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double width_left = 5;
 * @return {number}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getWidthLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.setWidthLeft = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearWidthLeft = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasWidthLeft = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double width_right = 6;
 * @return {number}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.getWidthRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.setWidthRight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PullOverDebug} returns this
 */
proto.apollo.planning_internal.PullOverDebug.prototype.clearWidthRight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PullOverDebug.prototype.hasWidthRight = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.PlanningData.repeatedFields_ = [6,13,14,15,18,19,25];



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
proto.apollo.planning_internal.PlanningData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.PlanningData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.PlanningData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.PlanningData.toObject = function(includeInstance, msg) {
  var f, obj = {
    adcPosition: (f = msg.getAdcPosition()) && modules_localization_proto_localization_pb.LocalizationEstimate.toObject(includeInstance, f),
    chassis: (f = msg.getChassis()) && modules_canbus_proto_chassis_pb.Chassis.toObject(includeInstance, f),
    routing: (f = msg.getRouting()) && modules_routing_proto_routing_pb.RoutingResponse.toObject(includeInstance, f),
    initPoint: (f = msg.getInitPoint()) && modules_common_proto_pnc_point_pb.TrajectoryPoint.toObject(includeInstance, f),
    pathList: jspb.Message.toObjectList(msg.getPathList(),
    modules_common_proto_pnc_point_pb.Path.toObject, includeInstance),
    speedPlanList: jspb.Message.toObjectList(msg.getSpeedPlanList(),
    proto.apollo.planning_internal.SpeedPlan.toObject, includeInstance),
    stGraphList: jspb.Message.toObjectList(msg.getStGraphList(),
    proto.apollo.planning_internal.STGraphDebug.toObject, includeInstance),
    slFrameList: jspb.Message.toObjectList(msg.getSlFrameList(),
    proto.apollo.planning_internal.SLFrameDebug.toObject, includeInstance),
    predictionHeader: (f = msg.getPredictionHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    signalLight: (f = msg.getSignalLight()) && proto.apollo.planning_internal.SignalLightDebug.toObject(includeInstance, f),
    obstacleList: jspb.Message.toObjectList(msg.getObstacleList(),
    proto.apollo.planning_internal.ObstacleDebug.toObject, includeInstance),
    referenceLineList: jspb.Message.toObjectList(msg.getReferenceLineList(),
    proto.apollo.planning_internal.ReferenceLineDebug.toObject, includeInstance),
    dpPolyGraph: (f = msg.getDpPolyGraph()) && proto.apollo.planning_internal.DpPolyGraphDebug.toObject(includeInstance, f),
    latticeStImage: (f = msg.getLatticeStImage()) && proto.apollo.planning_internal.LatticeStTraining.toObject(includeInstance, f),
    relativeMap: (f = msg.getRelativeMap()) && modules_map_relative_map_proto_navigation_pb.MapMsg.toObject(includeInstance, f),
    autoTuningTrainingData: (f = msg.getAutoTuningTrainingData()) && proto.apollo.planning_internal.AutoTuningTrainingData.toObject(includeInstance, f),
    frontClearDistance: (f = jspb.Message.getOptionalFloatingPointField(msg, 24)) == null ? undefined : f,
    chartList: jspb.Message.toObjectList(msg.getChartList(),
    modules_dreamview_proto_chart_pb.Chart.toObject, includeInstance),
    scenario: (f = msg.getScenario()) && proto.apollo.planning_internal.ScenarioDebug.toObject(includeInstance, f),
    openSpace: (f = msg.getOpenSpace()) && proto.apollo.planning_internal.OpenSpaceDebug.toObject(includeInstance, f),
    smoother: (f = msg.getSmoother()) && proto.apollo.planning_internal.SmootherDebug.toObject(includeInstance, f),
    pullOver: (f = msg.getPullOver()) && proto.apollo.planning_internal.PullOverDebug.toObject(includeInstance, f),
    hybridModel: (f = msg.getHybridModel()) && proto.apollo.planning_internal.HybridModelDebug.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PlanningData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.PlanningData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.adcPosition;

  /** @type {?|undefined} */
  this.chassis;

  /** @type {?|undefined} */
  this.routing;

  /** @type {?|undefined} */
  this.initPoint;

  /** @type {?|undefined} */
  this.pathList;

  /** @type {?|undefined} */
  this.speedPlanList;

  /** @type {?|undefined} */
  this.stGraphList;

  /** @type {?|undefined} */
  this.slFrameList;

  /** @type {?|undefined} */
  this.predictionHeader;

  /** @type {?|undefined} */
  this.signalLight;

  /** @type {?|undefined} */
  this.obstacleList;

  /** @type {?|undefined} */
  this.referenceLineList;

  /** @type {?|undefined} */
  this.dpPolyGraph;

  /** @type {?|undefined} */
  this.latticeStImage;

  /** @type {?|undefined} */
  this.relativeMap;

  /** @type {?|undefined} */
  this.autoTuningTrainingData;

  /** @type {?|undefined} */
  this.frontClearDistance;

  /** @type {?|undefined} */
  this.chartList;

  /** @type {?|undefined} */
  this.scenario;

  /** @type {?|undefined} */
  this.openSpace;

  /** @type {?|undefined} */
  this.smoother;

  /** @type {?|undefined} */
  this.pullOver;

  /** @type {?|undefined} */
  this.hybridModel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.PlanningData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.PlanningData}
 */
proto.apollo.planning_internal.PlanningData.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.PlanningData();
  obj.adcPosition && jspb.Message.setWrapperField(
      msg, 7, modules_localization_proto_localization_pb.LocalizationEstimate.fromObject(obj.adcPosition));
  obj.chassis && jspb.Message.setWrapperField(
      msg, 8, modules_canbus_proto_chassis_pb.Chassis.fromObject(obj.chassis));
  obj.routing && jspb.Message.setWrapperField(
      msg, 9, modules_routing_proto_routing_pb.RoutingResponse.fromObject(obj.routing));
  obj.initPoint && jspb.Message.setWrapperField(
      msg, 10, modules_common_proto_pnc_point_pb.TrajectoryPoint.fromObject(obj.initPoint));
  obj.pathList && jspb.Message.setRepeatedWrapperField(
      msg, 6, obj.pathList.map(
          modules_common_proto_pnc_point_pb.Path.fromObject));
  obj.speedPlanList && jspb.Message.setRepeatedWrapperField(
      msg, 13, obj.speedPlanList.map(
          proto.apollo.planning_internal.SpeedPlan.fromObject));
  obj.stGraphList && jspb.Message.setRepeatedWrapperField(
      msg, 14, obj.stGraphList.map(
          proto.apollo.planning_internal.STGraphDebug.fromObject));
  obj.slFrameList && jspb.Message.setRepeatedWrapperField(
      msg, 15, obj.slFrameList.map(
          proto.apollo.planning_internal.SLFrameDebug.fromObject));
  obj.predictionHeader && jspb.Message.setWrapperField(
      msg, 16, modules_common_proto_header_pb.Header.fromObject(obj.predictionHeader));
  obj.signalLight && jspb.Message.setWrapperField(
      msg, 17, proto.apollo.planning_internal.SignalLightDebug.fromObject(obj.signalLight));
  obj.obstacleList && jspb.Message.setRepeatedWrapperField(
      msg, 18, obj.obstacleList.map(
          proto.apollo.planning_internal.ObstacleDebug.fromObject));
  obj.referenceLineList && jspb.Message.setRepeatedWrapperField(
      msg, 19, obj.referenceLineList.map(
          proto.apollo.planning_internal.ReferenceLineDebug.fromObject));
  obj.dpPolyGraph && jspb.Message.setWrapperField(
      msg, 20, proto.apollo.planning_internal.DpPolyGraphDebug.fromObject(obj.dpPolyGraph));
  obj.latticeStImage && jspb.Message.setWrapperField(
      msg, 21, proto.apollo.planning_internal.LatticeStTraining.fromObject(obj.latticeStImage));
  obj.relativeMap && jspb.Message.setWrapperField(
      msg, 22, modules_map_relative_map_proto_navigation_pb.MapMsg.fromObject(obj.relativeMap));
  obj.autoTuningTrainingData && jspb.Message.setWrapperField(
      msg, 23, proto.apollo.planning_internal.AutoTuningTrainingData.fromObject(obj.autoTuningTrainingData));
  obj.frontClearDistance != null && jspb.Message.setField(msg, 24, obj.frontClearDistance);
  obj.chartList && jspb.Message.setRepeatedWrapperField(
      msg, 25, obj.chartList.map(
          modules_dreamview_proto_chart_pb.Chart.fromObject));
  obj.scenario && jspb.Message.setWrapperField(
      msg, 26, proto.apollo.planning_internal.ScenarioDebug.fromObject(obj.scenario));
  obj.openSpace && jspb.Message.setWrapperField(
      msg, 27, proto.apollo.planning_internal.OpenSpaceDebug.fromObject(obj.openSpace));
  obj.smoother && jspb.Message.setWrapperField(
      msg, 28, proto.apollo.planning_internal.SmootherDebug.fromObject(obj.smoother));
  obj.pullOver && jspb.Message.setWrapperField(
      msg, 29, proto.apollo.planning_internal.PullOverDebug.fromObject(obj.pullOver));
  obj.hybridModel && jspb.Message.setWrapperField(
      msg, 30, proto.apollo.planning_internal.HybridModelDebug.fromObject(obj.hybridModel));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.PlanningData}
 */
proto.apollo.planning_internal.PlanningData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.PlanningData;
  return proto.apollo.planning_internal.PlanningData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.PlanningData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.PlanningData}
 */
proto.apollo.planning_internal.PlanningData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 7:
      var value = new modules_localization_proto_localization_pb.LocalizationEstimate;
      reader.readMessage(value,modules_localization_proto_localization_pb.LocalizationEstimate.deserializeBinaryFromReader);
      msg.setAdcPosition(value);
      break;
    case 8:
      var value = new modules_canbus_proto_chassis_pb.Chassis;
      reader.readMessage(value,modules_canbus_proto_chassis_pb.Chassis.deserializeBinaryFromReader);
      msg.setChassis(value);
      break;
    case 9:
      var value = new modules_routing_proto_routing_pb.RoutingResponse;
      reader.readMessage(value,modules_routing_proto_routing_pb.RoutingResponse.deserializeBinaryFromReader);
      msg.setRouting(value);
      break;
    case 10:
      var value = new modules_common_proto_pnc_point_pb.TrajectoryPoint;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setInitPoint(value);
      break;
    case 6:
      var value = new modules_common_proto_pnc_point_pb.Path;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.Path.deserializeBinaryFromReader);
      msg.addPath(value);
      break;
    case 13:
      var value = new proto.apollo.planning_internal.SpeedPlan;
      reader.readMessage(value,proto.apollo.planning_internal.SpeedPlan.deserializeBinaryFromReader);
      msg.addSpeedPlan(value);
      break;
    case 14:
      var value = new proto.apollo.planning_internal.STGraphDebug;
      reader.readMessage(value,proto.apollo.planning_internal.STGraphDebug.deserializeBinaryFromReader);
      msg.addStGraph(value);
      break;
    case 15:
      var value = new proto.apollo.planning_internal.SLFrameDebug;
      reader.readMessage(value,proto.apollo.planning_internal.SLFrameDebug.deserializeBinaryFromReader);
      msg.addSlFrame(value);
      break;
    case 16:
      var value = new modules_common_proto_header_pb.Header;
      reader.readMessage(value,modules_common_proto_header_pb.Header.deserializeBinaryFromReader);
      msg.setPredictionHeader(value);
      break;
    case 17:
      var value = new proto.apollo.planning_internal.SignalLightDebug;
      reader.readMessage(value,proto.apollo.planning_internal.SignalLightDebug.deserializeBinaryFromReader);
      msg.setSignalLight(value);
      break;
    case 18:
      var value = new proto.apollo.planning_internal.ObstacleDebug;
      reader.readMessage(value,proto.apollo.planning_internal.ObstacleDebug.deserializeBinaryFromReader);
      msg.addObstacle(value);
      break;
    case 19:
      var value = new proto.apollo.planning_internal.ReferenceLineDebug;
      reader.readMessage(value,proto.apollo.planning_internal.ReferenceLineDebug.deserializeBinaryFromReader);
      msg.addReferenceLine(value);
      break;
    case 20:
      var value = new proto.apollo.planning_internal.DpPolyGraphDebug;
      reader.readMessage(value,proto.apollo.planning_internal.DpPolyGraphDebug.deserializeBinaryFromReader);
      msg.setDpPolyGraph(value);
      break;
    case 21:
      var value = new proto.apollo.planning_internal.LatticeStTraining;
      reader.readMessage(value,proto.apollo.planning_internal.LatticeStTraining.deserializeBinaryFromReader);
      msg.setLatticeStImage(value);
      break;
    case 22:
      var value = new modules_map_relative_map_proto_navigation_pb.MapMsg;
      reader.readMessage(value,modules_map_relative_map_proto_navigation_pb.MapMsg.deserializeBinaryFromReader);
      msg.setRelativeMap(value);
      break;
    case 23:
      var value = new proto.apollo.planning_internal.AutoTuningTrainingData;
      reader.readMessage(value,proto.apollo.planning_internal.AutoTuningTrainingData.deserializeBinaryFromReader);
      msg.setAutoTuningTrainingData(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrontClearDistance(value);
      break;
    case 25:
      var value = new modules_dreamview_proto_chart_pb.Chart;
      reader.readMessage(value,modules_dreamview_proto_chart_pb.Chart.deserializeBinaryFromReader);
      msg.addChart(value);
      break;
    case 26:
      var value = new proto.apollo.planning_internal.ScenarioDebug;
      reader.readMessage(value,proto.apollo.planning_internal.ScenarioDebug.deserializeBinaryFromReader);
      msg.setScenario(value);
      break;
    case 27:
      var value = new proto.apollo.planning_internal.OpenSpaceDebug;
      reader.readMessage(value,proto.apollo.planning_internal.OpenSpaceDebug.deserializeBinaryFromReader);
      msg.setOpenSpace(value);
      break;
    case 28:
      var value = new proto.apollo.planning_internal.SmootherDebug;
      reader.readMessage(value,proto.apollo.planning_internal.SmootherDebug.deserializeBinaryFromReader);
      msg.setSmoother(value);
      break;
    case 29:
      var value = new proto.apollo.planning_internal.PullOverDebug;
      reader.readMessage(value,proto.apollo.planning_internal.PullOverDebug.deserializeBinaryFromReader);
      msg.setPullOver(value);
      break;
    case 30:
      var value = new proto.apollo.planning_internal.HybridModelDebug;
      reader.readMessage(value,proto.apollo.planning_internal.HybridModelDebug.deserializeBinaryFromReader);
      msg.setHybridModel(value);
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
proto.apollo.planning_internal.PlanningData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.PlanningData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.PlanningData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.PlanningData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdcPosition();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      modules_localization_proto_localization_pb.LocalizationEstimate.serializeBinaryToWriter
    );
  }
  f = message.getChassis();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      modules_canbus_proto_chassis_pb.Chassis.serializeBinaryToWriter
    );
  }
  f = message.getRouting();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      modules_routing_proto_routing_pb.RoutingResponse.serializeBinaryToWriter
    );
  }
  f = message.getInitPoint();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      modules_common_proto_pnc_point_pb.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      modules_common_proto_pnc_point_pb.Path.serializeBinaryToWriter
    );
  }
  f = message.getSpeedPlanList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.apollo.planning_internal.SpeedPlan.serializeBinaryToWriter
    );
  }
  f = message.getStGraphList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.apollo.planning_internal.STGraphDebug.serializeBinaryToWriter
    );
  }
  f = message.getSlFrameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.apollo.planning_internal.SLFrameDebug.serializeBinaryToWriter
    );
  }
  f = message.getPredictionHeader();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getSignalLight();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.apollo.planning_internal.SignalLightDebug.serializeBinaryToWriter
    );
  }
  f = message.getObstacleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.apollo.planning_internal.ObstacleDebug.serializeBinaryToWriter
    );
  }
  f = message.getReferenceLineList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.apollo.planning_internal.ReferenceLineDebug.serializeBinaryToWriter
    );
  }
  f = message.getDpPolyGraph();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.apollo.planning_internal.DpPolyGraphDebug.serializeBinaryToWriter
    );
  }
  f = message.getLatticeStImage();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.apollo.planning_internal.LatticeStTraining.serializeBinaryToWriter
    );
  }
  f = message.getRelativeMap();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      modules_map_relative_map_proto_navigation_pb.MapMsg.serializeBinaryToWriter
    );
  }
  f = message.getAutoTuningTrainingData();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.apollo.planning_internal.AutoTuningTrainingData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeDouble(
      24,
      f
    );
  }
  f = message.getChartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      modules_dreamview_proto_chart_pb.Chart.serializeBinaryToWriter
    );
  }
  f = message.getScenario();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.apollo.planning_internal.ScenarioDebug.serializeBinaryToWriter
    );
  }
  f = message.getOpenSpace();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.apollo.planning_internal.OpenSpaceDebug.serializeBinaryToWriter
    );
  }
  f = message.getSmoother();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.apollo.planning_internal.SmootherDebug.serializeBinaryToWriter
    );
  }
  f = message.getPullOver();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.apollo.planning_internal.PullOverDebug.serializeBinaryToWriter
    );
  }
  f = message.getHybridModel();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.apollo.planning_internal.HybridModelDebug.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.localization.LocalizationEstimate adc_position = 7;
 * @return {?proto.apollo.localization.LocalizationEstimate}
 */
proto.apollo.planning_internal.PlanningData.prototype.getAdcPosition = function() {
  return /** @type{?proto.apollo.localization.LocalizationEstimate} */ (
    jspb.Message.getWrapperField(this, modules_localization_proto_localization_pb.LocalizationEstimate, 7));
};


/**
 * @param {?proto.apollo.localization.LocalizationEstimate|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setAdcPosition = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearAdcPosition = function() {
  return this.setAdcPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasAdcPosition = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional apollo.canbus.Chassis chassis = 8;
 * @return {?proto.apollo.canbus.Chassis}
 */
proto.apollo.planning_internal.PlanningData.prototype.getChassis = function() {
  return /** @type{?proto.apollo.canbus.Chassis} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_chassis_pb.Chassis, 8));
};


/**
 * @param {?proto.apollo.canbus.Chassis|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setChassis = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearChassis = function() {
  return this.setChassis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasChassis = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional apollo.routing.RoutingResponse routing = 9;
 * @return {?proto.apollo.routing.RoutingResponse}
 */
proto.apollo.planning_internal.PlanningData.prototype.getRouting = function() {
  return /** @type{?proto.apollo.routing.RoutingResponse} */ (
    jspb.Message.getWrapperField(this, modules_routing_proto_routing_pb.RoutingResponse, 9));
};


/**
 * @param {?proto.apollo.routing.RoutingResponse|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setRouting = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearRouting = function() {
  return this.setRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasRouting = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional apollo.common.TrajectoryPoint init_point = 10;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.planning_internal.PlanningData.prototype.getInitPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.TrajectoryPoint, 10));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setInitPoint = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearInitPoint = function() {
  return this.setInitPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasInitPoint = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated apollo.common.Path path = 6;
 * @return {!Array<!proto.apollo.common.Path>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getPathList = function() {
  return /** @type{!Array<!proto.apollo.common.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.Path, 6));
};


/**
 * @param {!Array<!proto.apollo.common.Path>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.apollo.common.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.Path}
 */
proto.apollo.planning_internal.PlanningData.prototype.addPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.apollo.common.Path, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * repeated SpeedPlan speed_plan = 13;
 * @return {!Array<!proto.apollo.planning_internal.SpeedPlan>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getSpeedPlanList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.SpeedPlan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.SpeedPlan, 13));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.SpeedPlan>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setSpeedPlanList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.apollo.planning_internal.SpeedPlan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SpeedPlan}
 */
proto.apollo.planning_internal.PlanningData.prototype.addSpeedPlan = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.apollo.planning_internal.SpeedPlan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearSpeedPlanList = function() {
  return this.setSpeedPlanList([]);
};


/**
 * repeated STGraphDebug st_graph = 14;
 * @return {!Array<!proto.apollo.planning_internal.STGraphDebug>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getStGraphList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.STGraphDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.STGraphDebug, 14));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.STGraphDebug>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setStGraphList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.apollo.planning_internal.STGraphDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.STGraphDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.addStGraph = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.apollo.planning_internal.STGraphDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearStGraphList = function() {
  return this.setStGraphList([]);
};


/**
 * repeated SLFrameDebug sl_frame = 15;
 * @return {!Array<!proto.apollo.planning_internal.SLFrameDebug>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getSlFrameList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.SLFrameDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.SLFrameDebug, 15));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.SLFrameDebug>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setSlFrameList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.apollo.planning_internal.SLFrameDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.SLFrameDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.addSlFrame = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.apollo.planning_internal.SLFrameDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearSlFrameList = function() {
  return this.setSlFrameList([]);
};


/**
 * optional apollo.common.Header prediction_header = 16;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.planning_internal.PlanningData.prototype.getPredictionHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 16));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setPredictionHeader = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearPredictionHeader = function() {
  return this.setPredictionHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasPredictionHeader = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional SignalLightDebug signal_light = 17;
 * @return {?proto.apollo.planning_internal.SignalLightDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getSignalLight = function() {
  return /** @type{?proto.apollo.planning_internal.SignalLightDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.SignalLightDebug, 17));
};


/**
 * @param {?proto.apollo.planning_internal.SignalLightDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setSignalLight = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearSignalLight = function() {
  return this.setSignalLight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasSignalLight = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated ObstacleDebug obstacle = 18;
 * @return {!Array<!proto.apollo.planning_internal.ObstacleDebug>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getObstacleList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.ObstacleDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.ObstacleDebug, 18));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.ObstacleDebug>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setObstacleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.apollo.planning_internal.ObstacleDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.ObstacleDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.addObstacle = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.apollo.planning_internal.ObstacleDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearObstacleList = function() {
  return this.setObstacleList([]);
};


/**
 * repeated ReferenceLineDebug reference_line = 19;
 * @return {!Array<!proto.apollo.planning_internal.ReferenceLineDebug>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getReferenceLineList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.ReferenceLineDebug>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.ReferenceLineDebug, 19));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.ReferenceLineDebug>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setReferenceLineList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.apollo.planning_internal.ReferenceLineDebug=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.ReferenceLineDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.addReferenceLine = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.apollo.planning_internal.ReferenceLineDebug, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearReferenceLineList = function() {
  return this.setReferenceLineList([]);
};


/**
 * optional DpPolyGraphDebug dp_poly_graph = 20;
 * @return {?proto.apollo.planning_internal.DpPolyGraphDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getDpPolyGraph = function() {
  return /** @type{?proto.apollo.planning_internal.DpPolyGraphDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.DpPolyGraphDebug, 20));
};


/**
 * @param {?proto.apollo.planning_internal.DpPolyGraphDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setDpPolyGraph = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearDpPolyGraph = function() {
  return this.setDpPolyGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasDpPolyGraph = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional LatticeStTraining lattice_st_image = 21;
 * @return {?proto.apollo.planning_internal.LatticeStTraining}
 */
proto.apollo.planning_internal.PlanningData.prototype.getLatticeStImage = function() {
  return /** @type{?proto.apollo.planning_internal.LatticeStTraining} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.LatticeStTraining, 21));
};


/**
 * @param {?proto.apollo.planning_internal.LatticeStTraining|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setLatticeStImage = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearLatticeStImage = function() {
  return this.setLatticeStImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasLatticeStImage = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional apollo.relative_map.MapMsg relative_map = 22;
 * @return {?proto.apollo.relative_map.MapMsg}
 */
proto.apollo.planning_internal.PlanningData.prototype.getRelativeMap = function() {
  return /** @type{?proto.apollo.relative_map.MapMsg} */ (
    jspb.Message.getWrapperField(this, modules_map_relative_map_proto_navigation_pb.MapMsg, 22));
};


/**
 * @param {?proto.apollo.relative_map.MapMsg|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setRelativeMap = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearRelativeMap = function() {
  return this.setRelativeMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasRelativeMap = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AutoTuningTrainingData auto_tuning_training_data = 23;
 * @return {?proto.apollo.planning_internal.AutoTuningTrainingData}
 */
proto.apollo.planning_internal.PlanningData.prototype.getAutoTuningTrainingData = function() {
  return /** @type{?proto.apollo.planning_internal.AutoTuningTrainingData} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.AutoTuningTrainingData, 23));
};


/**
 * @param {?proto.apollo.planning_internal.AutoTuningTrainingData|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setAutoTuningTrainingData = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearAutoTuningTrainingData = function() {
  return this.setAutoTuningTrainingData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasAutoTuningTrainingData = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional double front_clear_distance = 24;
 * @return {number}
 */
proto.apollo.planning_internal.PlanningData.prototype.getFrontClearDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.setFrontClearDistance = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearFrontClearDistance = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasFrontClearDistance = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated apollo.dreamview.Chart chart = 25;
 * @return {!Array<!proto.apollo.dreamview.Chart>}
 */
proto.apollo.planning_internal.PlanningData.prototype.getChartList = function() {
  return /** @type{!Array<!proto.apollo.dreamview.Chart>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_dreamview_proto_chart_pb.Chart, 25));
};


/**
 * @param {!Array<!proto.apollo.dreamview.Chart>} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setChartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.apollo.dreamview.Chart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.Chart}
 */
proto.apollo.planning_internal.PlanningData.prototype.addChart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.apollo.dreamview.Chart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearChartList = function() {
  return this.setChartList([]);
};


/**
 * optional ScenarioDebug scenario = 26;
 * @return {?proto.apollo.planning_internal.ScenarioDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getScenario = function() {
  return /** @type{?proto.apollo.planning_internal.ScenarioDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.ScenarioDebug, 26));
};


/**
 * @param {?proto.apollo.planning_internal.ScenarioDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setScenario = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearScenario = function() {
  return this.setScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasScenario = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional OpenSpaceDebug open_space = 27;
 * @return {?proto.apollo.planning_internal.OpenSpaceDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getOpenSpace = function() {
  return /** @type{?proto.apollo.planning_internal.OpenSpaceDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.OpenSpaceDebug, 27));
};


/**
 * @param {?proto.apollo.planning_internal.OpenSpaceDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setOpenSpace = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearOpenSpace = function() {
  return this.setOpenSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasOpenSpace = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional SmootherDebug smoother = 28;
 * @return {?proto.apollo.planning_internal.SmootherDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getSmoother = function() {
  return /** @type{?proto.apollo.planning_internal.SmootherDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.SmootherDebug, 28));
};


/**
 * @param {?proto.apollo.planning_internal.SmootherDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setSmoother = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearSmoother = function() {
  return this.setSmoother(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasSmoother = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional PullOverDebug pull_over = 29;
 * @return {?proto.apollo.planning_internal.PullOverDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getPullOver = function() {
  return /** @type{?proto.apollo.planning_internal.PullOverDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.PullOverDebug, 29));
};


/**
 * @param {?proto.apollo.planning_internal.PullOverDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setPullOver = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearPullOver = function() {
  return this.setPullOver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasPullOver = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional HybridModelDebug hybrid_model = 30;
 * @return {?proto.apollo.planning_internal.HybridModelDebug}
 */
proto.apollo.planning_internal.PlanningData.prototype.getHybridModel = function() {
  return /** @type{?proto.apollo.planning_internal.HybridModelDebug} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.HybridModelDebug, 30));
};


/**
 * @param {?proto.apollo.planning_internal.HybridModelDebug|undefined} value
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
*/
proto.apollo.planning_internal.PlanningData.prototype.setHybridModel = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.PlanningData} returns this
 */
proto.apollo.planning_internal.PlanningData.prototype.clearHybridModel = function() {
  return this.setHybridModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.PlanningData.prototype.hasHybridModel = function() {
  return jspb.Message.getField(this, 30) != null;
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
proto.apollo.planning_internal.LatticeStPixel.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.LatticeStPixel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.LatticeStPixel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.LatticeStPixel.toObject = function(includeInstance, msg) {
  var f, obj = {
    s: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    t: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    r: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    g: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    b: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LatticeStPixel as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.LatticeStPixel.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.s;

  /** @type {?|undefined} */
  this.t;

  /** @type {?|undefined} */
  this.r;

  /** @type {?|undefined} */
  this.g;

  /** @type {?|undefined} */
  this.b;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.LatticeStPixel.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.LatticeStPixel}
 */
proto.apollo.planning_internal.LatticeStPixel.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.LatticeStPixel();
  obj.s != null && jspb.Message.setField(msg, 1, obj.s);
  obj.t != null && jspb.Message.setField(msg, 2, obj.t);
  obj.r != null && jspb.Message.setField(msg, 3, obj.r);
  obj.g != null && jspb.Message.setField(msg, 4, obj.g);
  obj.b != null && jspb.Message.setField(msg, 5, obj.b);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.LatticeStPixel}
 */
proto.apollo.planning_internal.LatticeStPixel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.LatticeStPixel;
  return proto.apollo.planning_internal.LatticeStPixel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.LatticeStPixel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.LatticeStPixel}
 */
proto.apollo.planning_internal.LatticeStPixel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setT(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setR(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setG(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setB(value);
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
proto.apollo.planning_internal.LatticeStPixel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.LatticeStPixel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.LatticeStPixel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.LatticeStPixel.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional int32 s = 1;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.setS = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.clearS = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.hasS = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 t = 2;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.getT = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.setT = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.clearT = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.hasT = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 r = 3;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.getR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.setR = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.clearR = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.hasR = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 g = 4;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.setG = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.clearG = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.hasG = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 b = 5;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.setB = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStPixel} returns this
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.clearB = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStPixel.prototype.hasB = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.LatticeStTraining.repeatedFields_ = [1];



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
proto.apollo.planning_internal.LatticeStTraining.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.LatticeStTraining.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.LatticeStTraining} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.LatticeStTraining.toObject = function(includeInstance, msg) {
  var f, obj = {
    pixelList: jspb.Message.toObjectList(msg.getPixelList(),
    proto.apollo.planning_internal.LatticeStPixel.toObject, includeInstance),
    timestamp: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    annotation: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    numSGrids: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    numTGrids: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    sResolution: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    tResolution: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LatticeStTraining as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.LatticeStTraining.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pixelList;

  /** @type {?|undefined} */
  this.timestamp;

  /** @type {?|undefined} */
  this.annotation;

  /** @type {?|undefined} */
  this.numSGrids;

  /** @type {?|undefined} */
  this.numTGrids;

  /** @type {?|undefined} */
  this.sResolution;

  /** @type {?|undefined} */
  this.tResolution;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.LatticeStTraining.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.LatticeStTraining}
 */
proto.apollo.planning_internal.LatticeStTraining.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.LatticeStTraining();
  obj.pixelList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.pixelList.map(
          proto.apollo.planning_internal.LatticeStPixel.fromObject));
  obj.timestamp != null && jspb.Message.setField(msg, 2, obj.timestamp);
  obj.annotation != null && jspb.Message.setField(msg, 3, obj.annotation);
  obj.numSGrids != null && jspb.Message.setField(msg, 4, obj.numSGrids);
  obj.numTGrids != null && jspb.Message.setField(msg, 5, obj.numTGrids);
  obj.sResolution != null && jspb.Message.setField(msg, 6, obj.sResolution);
  obj.tResolution != null && jspb.Message.setField(msg, 7, obj.tResolution);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.LatticeStTraining}
 */
proto.apollo.planning_internal.LatticeStTraining.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.LatticeStTraining;
  return proto.apollo.planning_internal.LatticeStTraining.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.LatticeStTraining} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.LatticeStTraining}
 */
proto.apollo.planning_internal.LatticeStTraining.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.planning_internal.LatticeStPixel;
      reader.readMessage(value,proto.apollo.planning_internal.LatticeStPixel.deserializeBinaryFromReader);
      msg.addPixel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnnotation(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumSGrids(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumTGrids(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSResolution(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTResolution(value);
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
proto.apollo.planning_internal.LatticeStTraining.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.LatticeStTraining.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.LatticeStTraining} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.LatticeStTraining.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPixelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.planning_internal.LatticeStPixel.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * repeated LatticeStPixel pixel = 1;
 * @return {!Array<!proto.apollo.planning_internal.LatticeStPixel>}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getPixelList = function() {
  return /** @type{!Array<!proto.apollo.planning_internal.LatticeStPixel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.planning_internal.LatticeStPixel, 1));
};


/**
 * @param {!Array<!proto.apollo.planning_internal.LatticeStPixel>} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
*/
proto.apollo.planning_internal.LatticeStTraining.prototype.setPixelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.planning_internal.LatticeStPixel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.LatticeStPixel}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.addPixel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.planning_internal.LatticeStPixel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearPixelList = function() {
  return this.setPixelList([]);
};


/**
 * optional double timestamp = 2;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string annotation = 3;
 * @return {string}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getAnnotation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setAnnotation = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearAnnotation = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 num_s_grids = 4;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getNumSGrids = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setNumSGrids = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearNumSGrids = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasNumSGrids = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 num_t_grids = 5;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getNumTGrids = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setNumTGrids = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearNumTGrids = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasNumTGrids = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double s_resolution = 6;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getSResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setSResolution = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearSResolution = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasSResolution = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double t_resolution = 7;
 * @return {number}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.getTResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.setTResolution = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.LatticeStTraining} returns this
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.clearTResolution = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.LatticeStTraining.prototype.hasTResolution = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.CostComponents.repeatedFields_ = [1];



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
proto.apollo.planning_internal.CostComponents.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.CostComponents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.CostComponents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CostComponents.toObject = function(includeInstance, msg) {
  var f, obj = {
    costComponentList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CostComponents as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.CostComponents.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.costComponentList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.CostComponents.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.CostComponents}
 */
proto.apollo.planning_internal.CostComponents.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.CostComponents();
  obj.costComponentList != null && jspb.Message.setField(msg, 1, obj.costComponentList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.CostComponents}
 */
proto.apollo.planning_internal.CostComponents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.CostComponents;
  return proto.apollo.planning_internal.CostComponents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.CostComponents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.CostComponents}
 */
proto.apollo.planning_internal.CostComponents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCostComponent(values[i]);
      }
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
proto.apollo.planning_internal.CostComponents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.CostComponents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.CostComponents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CostComponents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCostComponentList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      1,
      f
    );
  }
};


/**
 * repeated double cost_component = 1;
 * @return {!Array<number>}
 */
proto.apollo.planning_internal.CostComponents.prototype.getCostComponentList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.apollo.planning_internal.CostComponents} returns this
 */
proto.apollo.planning_internal.CostComponents.prototype.setCostComponentList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.apollo.planning_internal.CostComponents} returns this
 */
proto.apollo.planning_internal.CostComponents.prototype.addCostComponent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.CostComponents} returns this
 */
proto.apollo.planning_internal.CostComponents.prototype.clearCostComponentList = function() {
  return this.setCostComponentList([]);
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
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.AutoTuningTrainingData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.AutoTuningTrainingData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.AutoTuningTrainingData.toObject = function(includeInstance, msg) {
  var f, obj = {
    teacherComponent: (f = msg.getTeacherComponent()) && proto.apollo.planning_internal.CostComponents.toObject(includeInstance, f),
    studentComponent: (f = msg.getStudentComponent()) && proto.apollo.planning_internal.CostComponents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of AutoTuningTrainingData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.AutoTuningTrainingData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.teacherComponent;

  /** @type {?|undefined} */
  this.studentComponent;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.AutoTuningTrainingData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.AutoTuningTrainingData();
  obj.teacherComponent && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.planning_internal.CostComponents.fromObject(obj.teacherComponent));
  obj.studentComponent && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.planning_internal.CostComponents.fromObject(obj.studentComponent));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.AutoTuningTrainingData;
  return proto.apollo.planning_internal.AutoTuningTrainingData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.AutoTuningTrainingData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.planning_internal.CostComponents;
      reader.readMessage(value,proto.apollo.planning_internal.CostComponents.deserializeBinaryFromReader);
      msg.setTeacherComponent(value);
      break;
    case 2:
      var value = new proto.apollo.planning_internal.CostComponents;
      reader.readMessage(value,proto.apollo.planning_internal.CostComponents.deserializeBinaryFromReader);
      msg.setStudentComponent(value);
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
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.AutoTuningTrainingData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.AutoTuningTrainingData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.AutoTuningTrainingData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeacherComponent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.planning_internal.CostComponents.serializeBinaryToWriter
    );
  }
  f = message.getStudentComponent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.planning_internal.CostComponents.serializeBinaryToWriter
    );
  }
};


/**
 * optional CostComponents teacher_component = 1;
 * @return {?proto.apollo.planning_internal.CostComponents}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.getTeacherComponent = function() {
  return /** @type{?proto.apollo.planning_internal.CostComponents} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.CostComponents, 1));
};


/**
 * @param {?proto.apollo.planning_internal.CostComponents|undefined} value
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData} returns this
*/
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.setTeacherComponent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData} returns this
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.clearTeacherComponent = function() {
  return this.setTeacherComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.hasTeacherComponent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CostComponents student_component = 2;
 * @return {?proto.apollo.planning_internal.CostComponents}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.getStudentComponent = function() {
  return /** @type{?proto.apollo.planning_internal.CostComponents} */ (
    jspb.Message.getWrapperField(this, proto.apollo.planning_internal.CostComponents, 2));
};


/**
 * @param {?proto.apollo.planning_internal.CostComponents|undefined} value
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData} returns this
*/
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.setStudentComponent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.AutoTuningTrainingData} returns this
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.clearStudentComponent = function() {
  return this.setStudentComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.AutoTuningTrainingData.prototype.hasStudentComponent = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.repeatedFields_ = [1];



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
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.CloudReferenceLineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    laneSegmentList: jspb.Message.toObjectList(msg.getLaneSegmentList(),
    modules_routing_proto_routing_pb.LaneSegment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CloudReferenceLineRequest as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.laneSegmentList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRequest.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.CloudReferenceLineRequest();
  obj.laneSegmentList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.laneSegmentList.map(
          modules_routing_proto_routing_pb.LaneSegment.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.CloudReferenceLineRequest;
  return proto.apollo.planning_internal.CloudReferenceLineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_routing_proto_routing_pb.LaneSegment;
      reader.readMessage(value,modules_routing_proto_routing_pb.LaneSegment.deserializeBinaryFromReader);
      msg.addLaneSegment(value);
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
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.CloudReferenceLineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLaneSegmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_routing_proto_routing_pb.LaneSegment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.routing.LaneSegment lane_segment = 1;
 * @return {!Array<!proto.apollo.routing.LaneSegment>}
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.getLaneSegmentList = function() {
  return /** @type{!Array<!proto.apollo.routing.LaneSegment>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_routing_proto_routing_pb.LaneSegment, 1));
};


/**
 * @param {!Array<!proto.apollo.routing.LaneSegment>} value
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRequest} returns this
*/
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.setLaneSegmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.routing.LaneSegment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.routing.LaneSegment}
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.addLaneSegment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.routing.LaneSegment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRequest} returns this
 */
proto.apollo.planning_internal.CloudReferenceLineRequest.prototype.clearLaneSegmentList = function() {
  return this.setLaneSegmentList([]);
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
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    routing: (f = msg.getRouting()) && modules_routing_proto_routing_pb.RoutingResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CloudReferenceLineRoutingRequest as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.routing;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.CloudReferenceLineRoutingRequest();
  obj.routing && jspb.Message.setWrapperField(
      msg, 1, modules_routing_proto_routing_pb.RoutingResponse.fromObject(obj.routing));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.CloudReferenceLineRoutingRequest;
  return proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest}
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_routing_proto_routing_pb.RoutingResponse;
      reader.readMessage(value,modules_routing_proto_routing_pb.RoutingResponse.deserializeBinaryFromReader);
      msg.setRouting(value);
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
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_routing_proto_routing_pb.RoutingResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.routing.RoutingResponse routing = 1;
 * @return {?proto.apollo.routing.RoutingResponse}
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.getRouting = function() {
  return /** @type{?proto.apollo.routing.RoutingResponse} */ (
    jspb.Message.getWrapperField(this, modules_routing_proto_routing_pb.RoutingResponse, 1));
};


/**
 * @param {?proto.apollo.routing.RoutingResponse|undefined} value
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest} returns this
*/
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.setRouting = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineRoutingRequest} returns this
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.clearRouting = function() {
  return this.setRouting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.CloudReferenceLineRoutingRequest.prototype.hasRouting = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.repeatedFields_ = [1];



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
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.CloudReferenceLineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.CloudReferenceLineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    segmentList: jspb.Message.toObjectList(msg.getSegmentList(),
    modules_common_proto_pnc_point_pb.Path.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CloudReferenceLineResponse as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.segmentList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineResponse.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineResponse}
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.CloudReferenceLineResponse();
  obj.segmentList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.segmentList.map(
          modules_common_proto_pnc_point_pb.Path.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineResponse}
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.CloudReferenceLineResponse;
  return proto.apollo.planning_internal.CloudReferenceLineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineResponse}
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_pnc_point_pb.Path;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.Path.deserializeBinaryFromReader);
      msg.addSegment(value);
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
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.CloudReferenceLineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.CloudReferenceLineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSegmentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      modules_common_proto_pnc_point_pb.Path.serializeBinaryToWriter
    );
  }
};


/**
 * repeated apollo.common.Path segment = 1;
 * @return {!Array<!proto.apollo.common.Path>}
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.getSegmentList = function() {
  return /** @type{!Array<!proto.apollo.common.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, modules_common_proto_pnc_point_pb.Path, 1));
};


/**
 * @param {!Array<!proto.apollo.common.Path>} value
 * @return {!proto.apollo.planning_internal.CloudReferenceLineResponse} returns this
*/
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.setSegmentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.Path}
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.addSegment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.Path, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.planning_internal.CloudReferenceLineResponse} returns this
 */
proto.apollo.planning_internal.CloudReferenceLineResponse.prototype.clearSegmentList = function() {
  return this.setSegmentList([]);
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
proto.apollo.planning_internal.HybridModelDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.planning_internal.HybridModelDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.planning_internal.HybridModelDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.HybridModelDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    usingLearningModelOutput: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    learningModelOutputUsageRatio: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    learningModelOutputFailReason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    evaluatedPathReference: (f = msg.getEvaluatedPathReference()) && modules_common_proto_pnc_point_pb.Path.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of HybridModelDebug as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.planning_internal.HybridModelDebug.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.usingLearningModelOutput;

  /** @type {?|undefined} */
  this.learningModelOutputUsageRatio;

  /** @type {?|undefined} */
  this.learningModelOutputFailReason;

  /** @type {?|undefined} */
  this.evaluatedPathReference;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.planning_internal.HybridModelDebug.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.planning_internal.HybridModelDebug}
 */
proto.apollo.planning_internal.HybridModelDebug.fromObject = function(obj) {
  var msg = new proto.apollo.planning_internal.HybridModelDebug();
  obj.usingLearningModelOutput != null && jspb.Message.setField(msg, 1, obj.usingLearningModelOutput);
  obj.learningModelOutputUsageRatio != null && jspb.Message.setField(msg, 2, obj.learningModelOutputUsageRatio);
  obj.learningModelOutputFailReason != null && jspb.Message.setField(msg, 3, obj.learningModelOutputFailReason);
  obj.evaluatedPathReference && jspb.Message.setWrapperField(
      msg, 4, modules_common_proto_pnc_point_pb.Path.fromObject(obj.evaluatedPathReference));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.planning_internal.HybridModelDebug}
 */
proto.apollo.planning_internal.HybridModelDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.planning_internal.HybridModelDebug;
  return proto.apollo.planning_internal.HybridModelDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.planning_internal.HybridModelDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.planning_internal.HybridModelDebug}
 */
proto.apollo.planning_internal.HybridModelDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsingLearningModelOutput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLearningModelOutputUsageRatio(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLearningModelOutputFailReason(value);
      break;
    case 4:
      var value = new modules_common_proto_pnc_point_pb.Path;
      reader.readMessage(value,modules_common_proto_pnc_point_pb.Path.deserializeBinaryFromReader);
      msg.setEvaluatedPathReference(value);
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
proto.apollo.planning_internal.HybridModelDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.planning_internal.HybridModelDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.planning_internal.HybridModelDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.planning_internal.HybridModelDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEvaluatedPathReference();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      modules_common_proto_pnc_point_pb.Path.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool using_learning_model_output = 1;
 * @return {boolean}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.getUsingLearningModelOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.setUsingLearningModelOutput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.clearUsingLearningModelOutput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.hasUsingLearningModelOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double learning_model_output_usage_ratio = 2;
 * @return {number}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.getLearningModelOutputUsageRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.setLearningModelOutputUsageRatio = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.clearLearningModelOutputUsageRatio = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.hasLearningModelOutputUsageRatio = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string learning_model_output_fail_reason = 3;
 * @return {string}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.getLearningModelOutputFailReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.setLearningModelOutputFailReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.clearLearningModelOutputFailReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.hasLearningModelOutputFailReason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional apollo.common.Path evaluated_path_reference = 4;
 * @return {?proto.apollo.common.Path}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.getEvaluatedPathReference = function() {
  return /** @type{?proto.apollo.common.Path} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_pnc_point_pb.Path, 4));
};


/**
 * @param {?proto.apollo.common.Path|undefined} value
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
*/
proto.apollo.planning_internal.HybridModelDebug.prototype.setEvaluatedPathReference = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.planning_internal.HybridModelDebug} returns this
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.clearEvaluatedPathReference = function() {
  return this.setEvaluatedPathReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.planning_internal.HybridModelDebug.prototype.hasEvaluatedPathReference = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.apollo.planning_internal);
