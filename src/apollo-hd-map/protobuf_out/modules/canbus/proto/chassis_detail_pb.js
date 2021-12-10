// source: modules/canbus/proto/chassis_detail.proto
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

var modules_common_configs_proto_vehicle_config_pb = require('../../../modules/common/configs/proto/vehicle_config_pb.js');
goog.object.extend(proto, modules_common_configs_proto_vehicle_config_pb);
var modules_canbus_proto_chassis_pb = require('../../../modules/canbus/proto/chassis_pb.js');
goog.object.extend(proto, modules_canbus_proto_chassis_pb);
var modules_canbus_proto_ch_pb = require('../../../modules/canbus/proto/ch_pb.js');
goog.object.extend(proto, modules_canbus_proto_ch_pb);
var modules_canbus_proto_devkit_pb = require('../../../modules/canbus/proto/devkit_pb.js');
goog.object.extend(proto, modules_canbus_proto_devkit_pb);
var modules_canbus_proto_ge3_pb = require('../../../modules/canbus/proto/ge3_pb.js');
goog.object.extend(proto, modules_canbus_proto_ge3_pb);
var modules_canbus_proto_lexus_pb = require('../../../modules/canbus/proto/lexus_pb.js');
goog.object.extend(proto, modules_canbus_proto_lexus_pb);
var modules_canbus_proto_transit_pb = require('../../../modules/canbus/proto/transit_pb.js');
goog.object.extend(proto, modules_canbus_proto_transit_pb);
var modules_canbus_proto_wey_pb = require('../../../modules/canbus/proto/wey_pb.js');
goog.object.extend(proto, modules_canbus_proto_wey_pb);
var modules_canbus_proto_zhongyun_pb = require('../../../modules/canbus/proto/zhongyun_pb.js');
goog.object.extend(proto, modules_canbus_proto_zhongyun_pb);
var modules_canbus_proto_neolix_edu_pb = require('../../../modules/canbus/proto/neolix_edu_pb.js');
goog.object.extend(proto, modules_canbus_proto_neolix_edu_pb);
goog.exportSymbol('proto.apollo.canbus.Accel_cmd_67', null, global);
goog.exportSymbol('proto.apollo.canbus.Accel_rpt_68', null, global);
goog.exportSymbol('proto.apollo.canbus.BasicInfo', null, global);
goog.exportSymbol('proto.apollo.canbus.BasicInfo.Type', null, global);
goog.exportSymbol('proto.apollo.canbus.Battery', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake.HSAModeType', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake.HSAStatusType', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_cmd_6b', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_1_70', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_2_71', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_3_72', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_rpt_6c', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType', null, global);
goog.exportSymbol('proto.apollo.canbus.ChassisDetail', null, global);
goog.exportSymbol('proto.apollo.canbus.ChassisDetail.Type', null, global);
goog.exportSymbol('proto.apollo.canbus.CheckResponseSignal', null, global);
goog.exportSymbol('proto.apollo.canbus.Date_time_rpt_83', null, global);
goog.exportSymbol('proto.apollo.canbus.Deceleration', null, global);
goog.exportSymbol('proto.apollo.canbus.Ems', null, global);
goog.exportSymbol('proto.apollo.canbus.Ems.Type', null, global);
goog.exportSymbol('proto.apollo.canbus.Epb', null, global);
goog.exportSymbol('proto.apollo.canbus.Epb.PBrakeType', null, global);
goog.exportSymbol('proto.apollo.canbus.Eps', null, global);
goog.exportSymbol('proto.apollo.canbus.Eps.Type', null, global);
goog.exportSymbol('proto.apollo.canbus.Esp', null, global);
goog.exportSymbol('proto.apollo.canbus.Gas', null, global);
goog.exportSymbol('proto.apollo.canbus.Gear', null, global);
goog.exportSymbol('proto.apollo.canbus.Gem', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_cmd_69', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_cmd_69.Clear_overrideType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_cmd_69.Ignore_overrideType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_cmd_69.Pacmod_enableType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_6a', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_6a.Override_statusType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_cmd_76', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_77', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_77.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_77.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_cmd_78', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_cmd_78.Horn_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_79', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_79.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_79.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_79.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Lat_lon_heading_rpt_82', null, global);
goog.exportSymbol('proto.apollo.canbus.Light', null, global);
goog.exportSymbol('proto.apollo.canbus.Light.BeamLampType', null, global);
goog.exportSymbol('proto.apollo.canbus.Light.LincolnAmbientType', null, global);
goog.exportSymbol('proto.apollo.canbus.Light.LincolnLampType', null, global);
goog.exportSymbol('proto.apollo.canbus.Light.LincolnWiperType', null, global);
goog.exportSymbol('proto.apollo.canbus.Light.TurnLightType', null, global);
goog.exportSymbol('proto.apollo.canbus.Parking_brake_status_rpt_80', null, global);
goog.exportSymbol('proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType', null, global);
goog.exportSymbol('proto.apollo.canbus.Safety', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_cmd_65', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_cmd_65.Shift_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_66', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_66.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_66.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_66.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_cmd_6d', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_1_73', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_2_74', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_3_75', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_rpt_1_6e', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_cmd_63', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_64', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_64.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_64.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_64.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.VehicleSpd', null, global);
goog.exportSymbol('proto.apollo.canbus.Vehicle_speed_rpt_6f', null, global);
goog.exportSymbol('proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wheel_speed_rpt_7a', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_cmd_90', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_91', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_91.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_91.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Yaw_rate_rpt_81', null, global);
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
proto.apollo.canbus.ChassisDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.ChassisDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.ChassisDetail.displayName = 'proto.apollo.canbus.ChassisDetail';
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
proto.apollo.canbus.CheckResponseSignal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.CheckResponseSignal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.CheckResponseSignal.displayName = 'proto.apollo.canbus.CheckResponseSignal';
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
proto.apollo.canbus.Battery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Battery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Battery.displayName = 'proto.apollo.canbus.Battery';
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
proto.apollo.canbus.Light = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Light, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Light.displayName = 'proto.apollo.canbus.Light';
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
proto.apollo.canbus.Eps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Eps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Eps.displayName = 'proto.apollo.canbus.Eps';
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
proto.apollo.canbus.VehicleSpd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.VehicleSpd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.VehicleSpd.displayName = 'proto.apollo.canbus.VehicleSpd';
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
proto.apollo.canbus.Deceleration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Deceleration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Deceleration.displayName = 'proto.apollo.canbus.Deceleration';
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
proto.apollo.canbus.Brake = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake.displayName = 'proto.apollo.canbus.Brake';
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
proto.apollo.canbus.Epb = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Epb, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Epb.displayName = 'proto.apollo.canbus.Epb';
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
proto.apollo.canbus.Gas = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Gas, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Gas.displayName = 'proto.apollo.canbus.Gas';
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
proto.apollo.canbus.Esp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Esp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Esp.displayName = 'proto.apollo.canbus.Esp';
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
proto.apollo.canbus.Ems = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Ems, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Ems.displayName = 'proto.apollo.canbus.Ems';
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
proto.apollo.canbus.Gear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Gear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Gear.displayName = 'proto.apollo.canbus.Gear';
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
proto.apollo.canbus.Safety = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Safety, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Safety.displayName = 'proto.apollo.canbus.Safety';
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
proto.apollo.canbus.BasicInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.BasicInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.BasicInfo.displayName = 'proto.apollo.canbus.BasicInfo';
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
proto.apollo.canbus.Global_rpt_6a = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Global_rpt_6a, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Global_rpt_6a.displayName = 'proto.apollo.canbus.Global_rpt_6a';
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
proto.apollo.canbus.Brake_cmd_6b = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_cmd_6b, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_cmd_6b.displayName = 'proto.apollo.canbus.Brake_cmd_6b';
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
proto.apollo.canbus.Brake_rpt_6c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_rpt_6c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_rpt_6c.displayName = 'proto.apollo.canbus.Brake_rpt_6c';
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
proto.apollo.canbus.Steering_cmd_6d = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_cmd_6d, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_cmd_6d.displayName = 'proto.apollo.canbus.Steering_cmd_6d';
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
proto.apollo.canbus.Steering_rpt_1_6e = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_rpt_1_6e, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_rpt_1_6e.displayName = 'proto.apollo.canbus.Steering_rpt_1_6e';
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
proto.apollo.canbus.Wheel_speed_rpt_7a = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wheel_speed_rpt_7a, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wheel_speed_rpt_7a.displayName = 'proto.apollo.canbus.Wheel_speed_rpt_7a';
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
proto.apollo.canbus.Date_time_rpt_83 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Date_time_rpt_83, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Date_time_rpt_83.displayName = 'proto.apollo.canbus.Date_time_rpt_83';
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
proto.apollo.canbus.Brake_motor_rpt_1_70 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_1_70, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_1_70.displayName = 'proto.apollo.canbus.Brake_motor_rpt_1_70';
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
proto.apollo.canbus.Headlight_rpt_77 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Headlight_rpt_77, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Headlight_rpt_77.displayName = 'proto.apollo.canbus.Headlight_rpt_77';
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
proto.apollo.canbus.Accel_rpt_68 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Accel_rpt_68, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Accel_rpt_68.displayName = 'proto.apollo.canbus.Accel_rpt_68';
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
proto.apollo.canbus.Steering_motor_rpt_3_75 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_3_75, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_3_75.displayName = 'proto.apollo.canbus.Steering_motor_rpt_3_75';
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
proto.apollo.canbus.Turn_cmd_63 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Turn_cmd_63, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Turn_cmd_63.displayName = 'proto.apollo.canbus.Turn_cmd_63';
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
proto.apollo.canbus.Turn_rpt_64 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Turn_rpt_64, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Turn_rpt_64.displayName = 'proto.apollo.canbus.Turn_rpt_64';
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
proto.apollo.canbus.Shift_cmd_65 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Shift_cmd_65, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Shift_cmd_65.displayName = 'proto.apollo.canbus.Shift_cmd_65';
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
proto.apollo.canbus.Shift_rpt_66 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Shift_rpt_66, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Shift_rpt_66.displayName = 'proto.apollo.canbus.Shift_rpt_66';
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
proto.apollo.canbus.Accel_cmd_67 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Accel_cmd_67, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Accel_cmd_67.displayName = 'proto.apollo.canbus.Accel_cmd_67';
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
proto.apollo.canbus.Lat_lon_heading_rpt_82 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Lat_lon_heading_rpt_82, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Lat_lon_heading_rpt_82.displayName = 'proto.apollo.canbus.Lat_lon_heading_rpt_82';
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
proto.apollo.canbus.Global_cmd_69 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Global_cmd_69, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Global_cmd_69.displayName = 'proto.apollo.canbus.Global_cmd_69';
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
proto.apollo.canbus.Parking_brake_status_rpt_80 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Parking_brake_status_rpt_80, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Parking_brake_status_rpt_80.displayName = 'proto.apollo.canbus.Parking_brake_status_rpt_80';
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
proto.apollo.canbus.Yaw_rate_rpt_81 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Yaw_rate_rpt_81, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Yaw_rate_rpt_81.displayName = 'proto.apollo.canbus.Yaw_rate_rpt_81';
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
proto.apollo.canbus.Horn_rpt_79 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Horn_rpt_79, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Horn_rpt_79.displayName = 'proto.apollo.canbus.Horn_rpt_79';
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
proto.apollo.canbus.Horn_cmd_78 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Horn_cmd_78, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Horn_cmd_78.displayName = 'proto.apollo.canbus.Horn_cmd_78';
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
proto.apollo.canbus.Wiper_rpt_91 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wiper_rpt_91, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wiper_rpt_91.displayName = 'proto.apollo.canbus.Wiper_rpt_91';
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
proto.apollo.canbus.Vehicle_speed_rpt_6f = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Vehicle_speed_rpt_6f, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Vehicle_speed_rpt_6f.displayName = 'proto.apollo.canbus.Vehicle_speed_rpt_6f';
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
proto.apollo.canbus.Headlight_cmd_76 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Headlight_cmd_76, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Headlight_cmd_76.displayName = 'proto.apollo.canbus.Headlight_cmd_76';
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
proto.apollo.canbus.Steering_motor_rpt_2_74 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_2_74, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_2_74.displayName = 'proto.apollo.canbus.Steering_motor_rpt_2_74';
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
proto.apollo.canbus.Brake_motor_rpt_2_71 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_2_71, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_2_71.displayName = 'proto.apollo.canbus.Brake_motor_rpt_2_71';
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
proto.apollo.canbus.Steering_motor_rpt_1_73 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_1_73, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_1_73.displayName = 'proto.apollo.canbus.Steering_motor_rpt_1_73';
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
proto.apollo.canbus.Wiper_cmd_90 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wiper_cmd_90, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wiper_cmd_90.displayName = 'proto.apollo.canbus.Wiper_cmd_90';
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
proto.apollo.canbus.Brake_motor_rpt_3_72 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_3_72, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_3_72.displayName = 'proto.apollo.canbus.Brake_motor_rpt_3_72';
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
proto.apollo.canbus.Gem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Gem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Gem.displayName = 'proto.apollo.canbus.Gem';
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
proto.apollo.canbus.ChassisDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.ChassisDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.ChassisDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.ChassisDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    carType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    basic: (f = msg.getBasic()) && proto.apollo.canbus.BasicInfo.toObject(includeInstance, f),
    safety: (f = msg.getSafety()) && proto.apollo.canbus.Safety.toObject(includeInstance, f),
    gear: (f = msg.getGear()) && proto.apollo.canbus.Gear.toObject(includeInstance, f),
    ems: (f = msg.getEms()) && proto.apollo.canbus.Ems.toObject(includeInstance, f),
    esp: (f = msg.getEsp()) && proto.apollo.canbus.Esp.toObject(includeInstance, f),
    gas: (f = msg.getGas()) && proto.apollo.canbus.Gas.toObject(includeInstance, f),
    epb: (f = msg.getEpb()) && proto.apollo.canbus.Epb.toObject(includeInstance, f),
    brake: (f = msg.getBrake()) && proto.apollo.canbus.Brake.toObject(includeInstance, f),
    deceleration: (f = msg.getDeceleration()) && proto.apollo.canbus.Deceleration.toObject(includeInstance, f),
    vehicleSpd: (f = msg.getVehicleSpd()) && proto.apollo.canbus.VehicleSpd.toObject(includeInstance, f),
    eps: (f = msg.getEps()) && proto.apollo.canbus.Eps.toObject(includeInstance, f),
    light: (f = msg.getLight()) && proto.apollo.canbus.Light.toObject(includeInstance, f),
    battery: (f = msg.getBattery()) && proto.apollo.canbus.Battery.toObject(includeInstance, f),
    checkResponse: (f = msg.getCheckResponse()) && proto.apollo.canbus.CheckResponseSignal.toObject(includeInstance, f),
    license: (f = msg.getLicense()) && modules_canbus_proto_chassis_pb.License.toObject(includeInstance, f),
    surround: (f = msg.getSurround()) && modules_canbus_proto_chassis_pb.Surround.toObject(includeInstance, f),
    gem: (f = msg.getGem()) && proto.apollo.canbus.Gem.toObject(includeInstance, f),
    lexus: (f = msg.getLexus()) && modules_canbus_proto_lexus_pb.Lexus.toObject(includeInstance, f),
    transit: (f = msg.getTransit()) && modules_canbus_proto_transit_pb.Transit.toObject(includeInstance, f),
    ge3: (f = msg.getGe3()) && modules_canbus_proto_ge3_pb.Ge3.toObject(includeInstance, f),
    wey: (f = msg.getWey()) && modules_canbus_proto_wey_pb.Wey.toObject(includeInstance, f),
    zhongyun: (f = msg.getZhongyun()) && modules_canbus_proto_zhongyun_pb.Zhongyun.toObject(includeInstance, f),
    ch: (f = msg.getCh()) && modules_canbus_proto_ch_pb.Ch.toObject(includeInstance, f),
    devkit: (f = msg.getDevkit()) && modules_canbus_proto_devkit_pb.Devkit.toObject(includeInstance, f),
    neolixEdu: (f = msg.getNeolixEdu()) && modules_canbus_proto_neolix_edu_pb.Neolix_edu.toObject(includeInstance, f),
    vehicleId: (f = msg.getVehicleId()) && modules_common_configs_proto_vehicle_config_pb.VehicleID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ChassisDetail as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.ChassisDetail.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.carType;

  /** @type {?|undefined} */
  this.basic;

  /** @type {?|undefined} */
  this.safety;

  /** @type {?|undefined} */
  this.gear;

  /** @type {?|undefined} */
  this.ems;

  /** @type {?|undefined} */
  this.esp;

  /** @type {?|undefined} */
  this.gas;

  /** @type {?|undefined} */
  this.epb;

  /** @type {?|undefined} */
  this.brake;

  /** @type {?|undefined} */
  this.deceleration;

  /** @type {?|undefined} */
  this.vehicleSpd;

  /** @type {?|undefined} */
  this.eps;

  /** @type {?|undefined} */
  this.light;

  /** @type {?|undefined} */
  this.battery;

  /** @type {?|undefined} */
  this.checkResponse;

  /** @type {?|undefined} */
  this.license;

  /** @type {?|undefined} */
  this.surround;

  /** @type {?|undefined} */
  this.gem;

  /** @type {?|undefined} */
  this.lexus;

  /** @type {?|undefined} */
  this.transit;

  /** @type {?|undefined} */
  this.ge3;

  /** @type {?|undefined} */
  this.wey;

  /** @type {?|undefined} */
  this.zhongyun;

  /** @type {?|undefined} */
  this.ch;

  /** @type {?|undefined} */
  this.devkit;

  /** @type {?|undefined} */
  this.neolixEdu;

  /** @type {?|undefined} */
  this.vehicleId;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.ChassisDetail.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.ChassisDetail}
 */
proto.apollo.canbus.ChassisDetail.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.ChassisDetail();
  obj.carType != null && jspb.Message.setField(msg, 1, obj.carType);
  obj.basic && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.canbus.BasicInfo.fromObject(obj.basic));
  obj.safety && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.canbus.Safety.fromObject(obj.safety));
  obj.gear && jspb.Message.setWrapperField(
      msg, 4, proto.apollo.canbus.Gear.fromObject(obj.gear));
  obj.ems && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.canbus.Ems.fromObject(obj.ems));
  obj.esp && jspb.Message.setWrapperField(
      msg, 6, proto.apollo.canbus.Esp.fromObject(obj.esp));
  obj.gas && jspb.Message.setWrapperField(
      msg, 7, proto.apollo.canbus.Gas.fromObject(obj.gas));
  obj.epb && jspb.Message.setWrapperField(
      msg, 8, proto.apollo.canbus.Epb.fromObject(obj.epb));
  obj.brake && jspb.Message.setWrapperField(
      msg, 9, proto.apollo.canbus.Brake.fromObject(obj.brake));
  obj.deceleration && jspb.Message.setWrapperField(
      msg, 10, proto.apollo.canbus.Deceleration.fromObject(obj.deceleration));
  obj.vehicleSpd && jspb.Message.setWrapperField(
      msg, 11, proto.apollo.canbus.VehicleSpd.fromObject(obj.vehicleSpd));
  obj.eps && jspb.Message.setWrapperField(
      msg, 12, proto.apollo.canbus.Eps.fromObject(obj.eps));
  obj.light && jspb.Message.setWrapperField(
      msg, 13, proto.apollo.canbus.Light.fromObject(obj.light));
  obj.battery && jspb.Message.setWrapperField(
      msg, 14, proto.apollo.canbus.Battery.fromObject(obj.battery));
  obj.checkResponse && jspb.Message.setWrapperField(
      msg, 15, proto.apollo.canbus.CheckResponseSignal.fromObject(obj.checkResponse));
  obj.license && jspb.Message.setWrapperField(
      msg, 16, modules_canbus_proto_chassis_pb.License.fromObject(obj.license));
  obj.surround && jspb.Message.setWrapperField(
      msg, 17, modules_canbus_proto_chassis_pb.Surround.fromObject(obj.surround));
  obj.gem && jspb.Message.setWrapperField(
      msg, 18, proto.apollo.canbus.Gem.fromObject(obj.gem));
  obj.lexus && jspb.Message.setWrapperField(
      msg, 19, modules_canbus_proto_lexus_pb.Lexus.fromObject(obj.lexus));
  obj.transit && jspb.Message.setWrapperField(
      msg, 20, modules_canbus_proto_transit_pb.Transit.fromObject(obj.transit));
  obj.ge3 && jspb.Message.setWrapperField(
      msg, 21, modules_canbus_proto_ge3_pb.Ge3.fromObject(obj.ge3));
  obj.wey && jspb.Message.setWrapperField(
      msg, 22, modules_canbus_proto_wey_pb.Wey.fromObject(obj.wey));
  obj.zhongyun && jspb.Message.setWrapperField(
      msg, 23, modules_canbus_proto_zhongyun_pb.Zhongyun.fromObject(obj.zhongyun));
  obj.ch && jspb.Message.setWrapperField(
      msg, 24, modules_canbus_proto_ch_pb.Ch.fromObject(obj.ch));
  obj.devkit && jspb.Message.setWrapperField(
      msg, 25, modules_canbus_proto_devkit_pb.Devkit.fromObject(obj.devkit));
  obj.neolixEdu && jspb.Message.setWrapperField(
      msg, 26, modules_canbus_proto_neolix_edu_pb.Neolix_edu.fromObject(obj.neolixEdu));
  obj.vehicleId && jspb.Message.setWrapperField(
      msg, 101, modules_common_configs_proto_vehicle_config_pb.VehicleID.fromObject(obj.vehicleId));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.ChassisDetail}
 */
proto.apollo.canbus.ChassisDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.ChassisDetail;
  return proto.apollo.canbus.ChassisDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.ChassisDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.ChassisDetail}
 */
proto.apollo.canbus.ChassisDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.ChassisDetail.Type} */ (reader.readEnum());
      msg.setCarType(value);
      break;
    case 2:
      var value = new proto.apollo.canbus.BasicInfo;
      reader.readMessage(value,proto.apollo.canbus.BasicInfo.deserializeBinaryFromReader);
      msg.setBasic(value);
      break;
    case 3:
      var value = new proto.apollo.canbus.Safety;
      reader.readMessage(value,proto.apollo.canbus.Safety.deserializeBinaryFromReader);
      msg.setSafety(value);
      break;
    case 4:
      var value = new proto.apollo.canbus.Gear;
      reader.readMessage(value,proto.apollo.canbus.Gear.deserializeBinaryFromReader);
      msg.setGear(value);
      break;
    case 5:
      var value = new proto.apollo.canbus.Ems;
      reader.readMessage(value,proto.apollo.canbus.Ems.deserializeBinaryFromReader);
      msg.setEms(value);
      break;
    case 6:
      var value = new proto.apollo.canbus.Esp;
      reader.readMessage(value,proto.apollo.canbus.Esp.deserializeBinaryFromReader);
      msg.setEsp(value);
      break;
    case 7:
      var value = new proto.apollo.canbus.Gas;
      reader.readMessage(value,proto.apollo.canbus.Gas.deserializeBinaryFromReader);
      msg.setGas(value);
      break;
    case 8:
      var value = new proto.apollo.canbus.Epb;
      reader.readMessage(value,proto.apollo.canbus.Epb.deserializeBinaryFromReader);
      msg.setEpb(value);
      break;
    case 9:
      var value = new proto.apollo.canbus.Brake;
      reader.readMessage(value,proto.apollo.canbus.Brake.deserializeBinaryFromReader);
      msg.setBrake(value);
      break;
    case 10:
      var value = new proto.apollo.canbus.Deceleration;
      reader.readMessage(value,proto.apollo.canbus.Deceleration.deserializeBinaryFromReader);
      msg.setDeceleration(value);
      break;
    case 11:
      var value = new proto.apollo.canbus.VehicleSpd;
      reader.readMessage(value,proto.apollo.canbus.VehicleSpd.deserializeBinaryFromReader);
      msg.setVehicleSpd(value);
      break;
    case 12:
      var value = new proto.apollo.canbus.Eps;
      reader.readMessage(value,proto.apollo.canbus.Eps.deserializeBinaryFromReader);
      msg.setEps(value);
      break;
    case 13:
      var value = new proto.apollo.canbus.Light;
      reader.readMessage(value,proto.apollo.canbus.Light.deserializeBinaryFromReader);
      msg.setLight(value);
      break;
    case 14:
      var value = new proto.apollo.canbus.Battery;
      reader.readMessage(value,proto.apollo.canbus.Battery.deserializeBinaryFromReader);
      msg.setBattery(value);
      break;
    case 15:
      var value = new proto.apollo.canbus.CheckResponseSignal;
      reader.readMessage(value,proto.apollo.canbus.CheckResponseSignal.deserializeBinaryFromReader);
      msg.setCheckResponse(value);
      break;
    case 16:
      var value = new modules_canbus_proto_chassis_pb.License;
      reader.readMessage(value,modules_canbus_proto_chassis_pb.License.deserializeBinaryFromReader);
      msg.setLicense(value);
      break;
    case 17:
      var value = new modules_canbus_proto_chassis_pb.Surround;
      reader.readMessage(value,modules_canbus_proto_chassis_pb.Surround.deserializeBinaryFromReader);
      msg.setSurround(value);
      break;
    case 18:
      var value = new proto.apollo.canbus.Gem;
      reader.readMessage(value,proto.apollo.canbus.Gem.deserializeBinaryFromReader);
      msg.setGem(value);
      break;
    case 19:
      var value = new modules_canbus_proto_lexus_pb.Lexus;
      reader.readMessage(value,modules_canbus_proto_lexus_pb.Lexus.deserializeBinaryFromReader);
      msg.setLexus(value);
      break;
    case 20:
      var value = new modules_canbus_proto_transit_pb.Transit;
      reader.readMessage(value,modules_canbus_proto_transit_pb.Transit.deserializeBinaryFromReader);
      msg.setTransit(value);
      break;
    case 21:
      var value = new modules_canbus_proto_ge3_pb.Ge3;
      reader.readMessage(value,modules_canbus_proto_ge3_pb.Ge3.deserializeBinaryFromReader);
      msg.setGe3(value);
      break;
    case 22:
      var value = new modules_canbus_proto_wey_pb.Wey;
      reader.readMessage(value,modules_canbus_proto_wey_pb.Wey.deserializeBinaryFromReader);
      msg.setWey(value);
      break;
    case 23:
      var value = new modules_canbus_proto_zhongyun_pb.Zhongyun;
      reader.readMessage(value,modules_canbus_proto_zhongyun_pb.Zhongyun.deserializeBinaryFromReader);
      msg.setZhongyun(value);
      break;
    case 24:
      var value = new modules_canbus_proto_ch_pb.Ch;
      reader.readMessage(value,modules_canbus_proto_ch_pb.Ch.deserializeBinaryFromReader);
      msg.setCh(value);
      break;
    case 25:
      var value = new modules_canbus_proto_devkit_pb.Devkit;
      reader.readMessage(value,modules_canbus_proto_devkit_pb.Devkit.deserializeBinaryFromReader);
      msg.setDevkit(value);
      break;
    case 26:
      var value = new modules_canbus_proto_neolix_edu_pb.Neolix_edu;
      reader.readMessage(value,modules_canbus_proto_neolix_edu_pb.Neolix_edu.deserializeBinaryFromReader);
      msg.setNeolixEdu(value);
      break;
    case 101:
      var value = new modules_common_configs_proto_vehicle_config_pb.VehicleID;
      reader.readMessage(value,modules_common_configs_proto_vehicle_config_pb.VehicleID.deserializeBinaryFromReader);
      msg.setVehicleId(value);
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
proto.apollo.canbus.ChassisDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.ChassisDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.ChassisDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.ChassisDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.ChassisDetail.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBasic();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.canbus.BasicInfo.serializeBinaryToWriter
    );
  }
  f = message.getSafety();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.canbus.Safety.serializeBinaryToWriter
    );
  }
  f = message.getGear();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.canbus.Gear.serializeBinaryToWriter
    );
  }
  f = message.getEms();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.canbus.Ems.serializeBinaryToWriter
    );
  }
  f = message.getEsp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.apollo.canbus.Esp.serializeBinaryToWriter
    );
  }
  f = message.getGas();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.apollo.canbus.Gas.serializeBinaryToWriter
    );
  }
  f = message.getEpb();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.apollo.canbus.Epb.serializeBinaryToWriter
    );
  }
  f = message.getBrake();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.apollo.canbus.Brake.serializeBinaryToWriter
    );
  }
  f = message.getDeceleration();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.apollo.canbus.Deceleration.serializeBinaryToWriter
    );
  }
  f = message.getVehicleSpd();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.apollo.canbus.VehicleSpd.serializeBinaryToWriter
    );
  }
  f = message.getEps();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.apollo.canbus.Eps.serializeBinaryToWriter
    );
  }
  f = message.getLight();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.apollo.canbus.Light.serializeBinaryToWriter
    );
  }
  f = message.getBattery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.apollo.canbus.Battery.serializeBinaryToWriter
    );
  }
  f = message.getCheckResponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.canbus.CheckResponseSignal.serializeBinaryToWriter
    );
  }
  f = message.getLicense();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      modules_canbus_proto_chassis_pb.License.serializeBinaryToWriter
    );
  }
  f = message.getSurround();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      modules_canbus_proto_chassis_pb.Surround.serializeBinaryToWriter
    );
  }
  f = message.getGem();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.apollo.canbus.Gem.serializeBinaryToWriter
    );
  }
  f = message.getLexus();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      modules_canbus_proto_lexus_pb.Lexus.serializeBinaryToWriter
    );
  }
  f = message.getTransit();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      modules_canbus_proto_transit_pb.Transit.serializeBinaryToWriter
    );
  }
  f = message.getGe3();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      modules_canbus_proto_ge3_pb.Ge3.serializeBinaryToWriter
    );
  }
  f = message.getWey();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      modules_canbus_proto_wey_pb.Wey.serializeBinaryToWriter
    );
  }
  f = message.getZhongyun();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      modules_canbus_proto_zhongyun_pb.Zhongyun.serializeBinaryToWriter
    );
  }
  f = message.getCh();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      modules_canbus_proto_ch_pb.Ch.serializeBinaryToWriter
    );
  }
  f = message.getDevkit();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      modules_canbus_proto_devkit_pb.Devkit.serializeBinaryToWriter
    );
  }
  f = message.getNeolixEdu();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      modules_canbus_proto_neolix_edu_pb.Neolix_edu.serializeBinaryToWriter
    );
  }
  f = message.getVehicleId();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      modules_common_configs_proto_vehicle_config_pb.VehicleID.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.ChassisDetail.Type = {
  QIRUI_EQ_15: 0,
  CHANGAN_RUICHENG: 1
};

/**
 * optional Type car_type = 1;
 * @return {!proto.apollo.canbus.ChassisDetail.Type}
 */
proto.apollo.canbus.ChassisDetail.prototype.getCarType = function() {
  return /** @type {!proto.apollo.canbus.ChassisDetail.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.ChassisDetail.Type} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.setCarType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearCarType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasCarType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BasicInfo basic = 2;
 * @return {?proto.apollo.canbus.BasicInfo}
 */
proto.apollo.canbus.ChassisDetail.prototype.getBasic = function() {
  return /** @type{?proto.apollo.canbus.BasicInfo} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.BasicInfo, 2));
};


/**
 * @param {?proto.apollo.canbus.BasicInfo|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setBasic = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearBasic = function() {
  return this.setBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasBasic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Safety safety = 3;
 * @return {?proto.apollo.canbus.Safety}
 */
proto.apollo.canbus.ChassisDetail.prototype.getSafety = function() {
  return /** @type{?proto.apollo.canbus.Safety} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Safety, 3));
};


/**
 * @param {?proto.apollo.canbus.Safety|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setSafety = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearSafety = function() {
  return this.setSafety(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasSafety = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Gear gear = 4;
 * @return {?proto.apollo.canbus.Gear}
 */
proto.apollo.canbus.ChassisDetail.prototype.getGear = function() {
  return /** @type{?proto.apollo.canbus.Gear} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Gear, 4));
};


/**
 * @param {?proto.apollo.canbus.Gear|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setGear = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearGear = function() {
  return this.setGear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasGear = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Ems ems = 5;
 * @return {?proto.apollo.canbus.Ems}
 */
proto.apollo.canbus.ChassisDetail.prototype.getEms = function() {
  return /** @type{?proto.apollo.canbus.Ems} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Ems, 5));
};


/**
 * @param {?proto.apollo.canbus.Ems|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setEms = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearEms = function() {
  return this.setEms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasEms = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Esp esp = 6;
 * @return {?proto.apollo.canbus.Esp}
 */
proto.apollo.canbus.ChassisDetail.prototype.getEsp = function() {
  return /** @type{?proto.apollo.canbus.Esp} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Esp, 6));
};


/**
 * @param {?proto.apollo.canbus.Esp|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setEsp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearEsp = function() {
  return this.setEsp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasEsp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Gas gas = 7;
 * @return {?proto.apollo.canbus.Gas}
 */
proto.apollo.canbus.ChassisDetail.prototype.getGas = function() {
  return /** @type{?proto.apollo.canbus.Gas} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Gas, 7));
};


/**
 * @param {?proto.apollo.canbus.Gas|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setGas = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearGas = function() {
  return this.setGas(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasGas = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Epb epb = 8;
 * @return {?proto.apollo.canbus.Epb}
 */
proto.apollo.canbus.ChassisDetail.prototype.getEpb = function() {
  return /** @type{?proto.apollo.canbus.Epb} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Epb, 8));
};


/**
 * @param {?proto.apollo.canbus.Epb|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setEpb = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearEpb = function() {
  return this.setEpb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasEpb = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Brake brake = 9;
 * @return {?proto.apollo.canbus.Brake}
 */
proto.apollo.canbus.ChassisDetail.prototype.getBrake = function() {
  return /** @type{?proto.apollo.canbus.Brake} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake, 9));
};


/**
 * @param {?proto.apollo.canbus.Brake|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setBrake = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearBrake = function() {
  return this.setBrake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasBrake = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Deceleration deceleration = 10;
 * @return {?proto.apollo.canbus.Deceleration}
 */
proto.apollo.canbus.ChassisDetail.prototype.getDeceleration = function() {
  return /** @type{?proto.apollo.canbus.Deceleration} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Deceleration, 10));
};


/**
 * @param {?proto.apollo.canbus.Deceleration|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setDeceleration = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearDeceleration = function() {
  return this.setDeceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasDeceleration = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional VehicleSpd vehicle_spd = 11;
 * @return {?proto.apollo.canbus.VehicleSpd}
 */
proto.apollo.canbus.ChassisDetail.prototype.getVehicleSpd = function() {
  return /** @type{?proto.apollo.canbus.VehicleSpd} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.VehicleSpd, 11));
};


/**
 * @param {?proto.apollo.canbus.VehicleSpd|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setVehicleSpd = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearVehicleSpd = function() {
  return this.setVehicleSpd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasVehicleSpd = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Eps eps = 12;
 * @return {?proto.apollo.canbus.Eps}
 */
proto.apollo.canbus.ChassisDetail.prototype.getEps = function() {
  return /** @type{?proto.apollo.canbus.Eps} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Eps, 12));
};


/**
 * @param {?proto.apollo.canbus.Eps|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setEps = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearEps = function() {
  return this.setEps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasEps = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Light light = 13;
 * @return {?proto.apollo.canbus.Light}
 */
proto.apollo.canbus.ChassisDetail.prototype.getLight = function() {
  return /** @type{?proto.apollo.canbus.Light} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Light, 13));
};


/**
 * @param {?proto.apollo.canbus.Light|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setLight = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearLight = function() {
  return this.setLight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasLight = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Battery battery = 14;
 * @return {?proto.apollo.canbus.Battery}
 */
proto.apollo.canbus.ChassisDetail.prototype.getBattery = function() {
  return /** @type{?proto.apollo.canbus.Battery} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Battery, 14));
};


/**
 * @param {?proto.apollo.canbus.Battery|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setBattery = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearBattery = function() {
  return this.setBattery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasBattery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CheckResponseSignal check_response = 15;
 * @return {?proto.apollo.canbus.CheckResponseSignal}
 */
proto.apollo.canbus.ChassisDetail.prototype.getCheckResponse = function() {
  return /** @type{?proto.apollo.canbus.CheckResponseSignal} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.CheckResponseSignal, 15));
};


/**
 * @param {?proto.apollo.canbus.CheckResponseSignal|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setCheckResponse = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearCheckResponse = function() {
  return this.setCheckResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasCheckResponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional License license = 16;
 * @return {?proto.apollo.canbus.License}
 */
proto.apollo.canbus.ChassisDetail.prototype.getLicense = function() {
  return /** @type{?proto.apollo.canbus.License} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_chassis_pb.License, 16));
};


/**
 * @param {?proto.apollo.canbus.License|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setLicense = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearLicense = function() {
  return this.setLicense(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasLicense = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Surround surround = 17;
 * @return {?proto.apollo.canbus.Surround}
 */
proto.apollo.canbus.ChassisDetail.prototype.getSurround = function() {
  return /** @type{?proto.apollo.canbus.Surround} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_chassis_pb.Surround, 17));
};


/**
 * @param {?proto.apollo.canbus.Surround|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setSurround = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearSurround = function() {
  return this.setSurround(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasSurround = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Gem gem = 18;
 * @return {?proto.apollo.canbus.Gem}
 */
proto.apollo.canbus.ChassisDetail.prototype.getGem = function() {
  return /** @type{?proto.apollo.canbus.Gem} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Gem, 18));
};


/**
 * @param {?proto.apollo.canbus.Gem|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setGem = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearGem = function() {
  return this.setGem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasGem = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Lexus lexus = 19;
 * @return {?proto.apollo.canbus.Lexus}
 */
proto.apollo.canbus.ChassisDetail.prototype.getLexus = function() {
  return /** @type{?proto.apollo.canbus.Lexus} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_lexus_pb.Lexus, 19));
};


/**
 * @param {?proto.apollo.canbus.Lexus|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setLexus = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearLexus = function() {
  return this.setLexus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasLexus = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Transit transit = 20;
 * @return {?proto.apollo.canbus.Transit}
 */
proto.apollo.canbus.ChassisDetail.prototype.getTransit = function() {
  return /** @type{?proto.apollo.canbus.Transit} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_transit_pb.Transit, 20));
};


/**
 * @param {?proto.apollo.canbus.Transit|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setTransit = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearTransit = function() {
  return this.setTransit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasTransit = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Ge3 ge3 = 21;
 * @return {?proto.apollo.canbus.Ge3}
 */
proto.apollo.canbus.ChassisDetail.prototype.getGe3 = function() {
  return /** @type{?proto.apollo.canbus.Ge3} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_ge3_pb.Ge3, 21));
};


/**
 * @param {?proto.apollo.canbus.Ge3|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setGe3 = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearGe3 = function() {
  return this.setGe3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasGe3 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Wey wey = 22;
 * @return {?proto.apollo.canbus.Wey}
 */
proto.apollo.canbus.ChassisDetail.prototype.getWey = function() {
  return /** @type{?proto.apollo.canbus.Wey} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_wey_pb.Wey, 22));
};


/**
 * @param {?proto.apollo.canbus.Wey|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setWey = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearWey = function() {
  return this.setWey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasWey = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Zhongyun zhongyun = 23;
 * @return {?proto.apollo.canbus.Zhongyun}
 */
proto.apollo.canbus.ChassisDetail.prototype.getZhongyun = function() {
  return /** @type{?proto.apollo.canbus.Zhongyun} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_zhongyun_pb.Zhongyun, 23));
};


/**
 * @param {?proto.apollo.canbus.Zhongyun|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setZhongyun = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearZhongyun = function() {
  return this.setZhongyun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasZhongyun = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Ch ch = 24;
 * @return {?proto.apollo.canbus.Ch}
 */
proto.apollo.canbus.ChassisDetail.prototype.getCh = function() {
  return /** @type{?proto.apollo.canbus.Ch} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_ch_pb.Ch, 24));
};


/**
 * @param {?proto.apollo.canbus.Ch|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setCh = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearCh = function() {
  return this.setCh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasCh = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional Devkit devkit = 25;
 * @return {?proto.apollo.canbus.Devkit}
 */
proto.apollo.canbus.ChassisDetail.prototype.getDevkit = function() {
  return /** @type{?proto.apollo.canbus.Devkit} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_devkit_pb.Devkit, 25));
};


/**
 * @param {?proto.apollo.canbus.Devkit|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setDevkit = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearDevkit = function() {
  return this.setDevkit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasDevkit = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Neolix_edu neolix_edu = 26;
 * @return {?proto.apollo.canbus.Neolix_edu}
 */
proto.apollo.canbus.ChassisDetail.prototype.getNeolixEdu = function() {
  return /** @type{?proto.apollo.canbus.Neolix_edu} */ (
    jspb.Message.getWrapperField(this, modules_canbus_proto_neolix_edu_pb.Neolix_edu, 26));
};


/**
 * @param {?proto.apollo.canbus.Neolix_edu|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setNeolixEdu = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearNeolixEdu = function() {
  return this.setNeolixEdu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasNeolixEdu = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional apollo.common.VehicleID vehicle_id = 101;
 * @return {?proto.apollo.common.VehicleID}
 */
proto.apollo.canbus.ChassisDetail.prototype.getVehicleId = function() {
  return /** @type{?proto.apollo.common.VehicleID} */ (
    jspb.Message.getWrapperField(this, modules_common_configs_proto_vehicle_config_pb.VehicleID, 101));
};


/**
 * @param {?proto.apollo.common.VehicleID|undefined} value
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
*/
proto.apollo.canbus.ChassisDetail.prototype.setVehicleId = function(value) {
  return jspb.Message.setWrapperField(this, 101, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.ChassisDetail} returns this
 */
proto.apollo.canbus.ChassisDetail.prototype.clearVehicleId = function() {
  return this.setVehicleId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.ChassisDetail.prototype.hasVehicleId = function() {
  return jspb.Message.getField(this, 101) != null;
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
proto.apollo.canbus.CheckResponseSignal.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.CheckResponseSignal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.CheckResponseSignal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.CheckResponseSignal.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEpsOnline: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isEpbOnline: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isEspOnline: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isVtogOnline: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isScuOnline: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isSwitchOnline: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isVcuOnline: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of CheckResponseSignal as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.CheckResponseSignal.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isEpsOnline;

  /** @type {?|undefined} */
  this.isEpbOnline;

  /** @type {?|undefined} */
  this.isEspOnline;

  /** @type {?|undefined} */
  this.isVtogOnline;

  /** @type {?|undefined} */
  this.isScuOnline;

  /** @type {?|undefined} */
  this.isSwitchOnline;

  /** @type {?|undefined} */
  this.isVcuOnline;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.CheckResponseSignal.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.CheckResponseSignal}
 */
proto.apollo.canbus.CheckResponseSignal.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.CheckResponseSignal();
  obj.isEpsOnline != null && jspb.Message.setField(msg, 1, obj.isEpsOnline);
  obj.isEpbOnline != null && jspb.Message.setField(msg, 2, obj.isEpbOnline);
  obj.isEspOnline != null && jspb.Message.setField(msg, 3, obj.isEspOnline);
  obj.isVtogOnline != null && jspb.Message.setField(msg, 4, obj.isVtogOnline);
  obj.isScuOnline != null && jspb.Message.setField(msg, 5, obj.isScuOnline);
  obj.isSwitchOnline != null && jspb.Message.setField(msg, 6, obj.isSwitchOnline);
  obj.isVcuOnline != null && jspb.Message.setField(msg, 7, obj.isVcuOnline);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.CheckResponseSignal}
 */
proto.apollo.canbus.CheckResponseSignal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.CheckResponseSignal;
  return proto.apollo.canbus.CheckResponseSignal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.CheckResponseSignal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.CheckResponseSignal}
 */
proto.apollo.canbus.CheckResponseSignal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEpsOnline(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEpbOnline(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEspOnline(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVtogOnline(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsScuOnline(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSwitchOnline(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVcuOnline(value);
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
proto.apollo.canbus.CheckResponseSignal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.CheckResponseSignal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.CheckResponseSignal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.CheckResponseSignal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
};


/**
 * optional bool is_eps_online = 1;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsEpsOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsEpsOnline = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsEpsOnline = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsEpsOnline = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_epb_online = 2;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsEpbOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsEpbOnline = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsEpbOnline = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsEpbOnline = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_esp_online = 3;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsEspOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsEspOnline = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsEspOnline = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsEspOnline = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_vtog_online = 4;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsVtogOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsVtogOnline = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsVtogOnline = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsVtogOnline = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_scu_online = 5;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsScuOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsScuOnline = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsScuOnline = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsScuOnline = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_switch_online = 6;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsSwitchOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsSwitchOnline = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsSwitchOnline = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsSwitchOnline = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_vcu_online = 7;
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.getIsVcuOnline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.setIsVcuOnline = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.CheckResponseSignal} returns this
 */
proto.apollo.canbus.CheckResponseSignal.prototype.clearIsVcuOnline = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.CheckResponseSignal.prototype.hasIsVcuOnline = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.apollo.canbus.Battery.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Battery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Battery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Battery.toObject = function(includeInstance, msg) {
  var f, obj = {
    batteryPercent: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    fuelLevel: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Battery as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Battery.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.batteryPercent;

  /** @type {?|undefined} */
  this.fuelLevel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Battery.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Battery}
 */
proto.apollo.canbus.Battery.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Battery();
  obj.batteryPercent != null && jspb.Message.setField(msg, 1, obj.batteryPercent);
  obj.fuelLevel != null && jspb.Message.setField(msg, 2, obj.fuelLevel);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Battery}
 */
proto.apollo.canbus.Battery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Battery;
  return proto.apollo.canbus.Battery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Battery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Battery}
 */
proto.apollo.canbus.Battery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBatteryPercent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFuelLevel(value);
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
proto.apollo.canbus.Battery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Battery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Battery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Battery.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double battery_percent = 1;
 * @return {number}
 */
proto.apollo.canbus.Battery.prototype.getBatteryPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Battery} returns this
 */
proto.apollo.canbus.Battery.prototype.setBatteryPercent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Battery} returns this
 */
proto.apollo.canbus.Battery.prototype.clearBatteryPercent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Battery.prototype.hasBatteryPercent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double fuel_level = 2;
 * @return {number}
 */
proto.apollo.canbus.Battery.prototype.getFuelLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Battery} returns this
 */
proto.apollo.canbus.Battery.prototype.setFuelLevel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Battery} returns this
 */
proto.apollo.canbus.Battery.prototype.clearFuelLevel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Battery.prototype.hasFuelLevel = function() {
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
proto.apollo.canbus.Light.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Light.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Light} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Light.toObject = function(includeInstance, msg) {
  var f, obj = {
    turnLightType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    beamLampType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    isBrakeLampOn: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    isAutoLight: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    wiperGear: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    lotionGear: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    isHornOn: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    lincolnLampType: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    lincolnWiper: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    lincolnAmbient: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Light as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Light.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.turnLightType;

  /** @type {?|undefined} */
  this.beamLampType;

  /** @type {?|undefined} */
  this.isBrakeLampOn;

  /** @type {?|undefined} */
  this.isAutoLight;

  /** @type {?|undefined} */
  this.wiperGear;

  /** @type {?|undefined} */
  this.lotionGear;

  /** @type {?|undefined} */
  this.isHornOn;

  /** @type {?|undefined} */
  this.lincolnLampType;

  /** @type {?|undefined} */
  this.lincolnWiper;

  /** @type {?|undefined} */
  this.lincolnAmbient;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Light.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Light}
 */
proto.apollo.canbus.Light.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Light();
  obj.turnLightType != null && jspb.Message.setField(msg, 1, obj.turnLightType);
  obj.beamLampType != null && jspb.Message.setField(msg, 2, obj.beamLampType);
  obj.isBrakeLampOn != null && jspb.Message.setField(msg, 3, obj.isBrakeLampOn);
  obj.isAutoLight != null && jspb.Message.setField(msg, 4, obj.isAutoLight);
  obj.wiperGear != null && jspb.Message.setField(msg, 5, obj.wiperGear);
  obj.lotionGear != null && jspb.Message.setField(msg, 6, obj.lotionGear);
  obj.isHornOn != null && jspb.Message.setField(msg, 7, obj.isHornOn);
  obj.lincolnLampType != null && jspb.Message.setField(msg, 8, obj.lincolnLampType);
  obj.lincolnWiper != null && jspb.Message.setField(msg, 9, obj.lincolnWiper);
  obj.lincolnAmbient != null && jspb.Message.setField(msg, 10, obj.lincolnAmbient);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Light}
 */
proto.apollo.canbus.Light.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Light;
  return proto.apollo.canbus.Light.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Light} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Light}
 */
proto.apollo.canbus.Light.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Light.TurnLightType} */ (reader.readEnum());
      msg.setTurnLightType(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Light.BeamLampType} */ (reader.readEnum());
      msg.setBeamLampType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBrakeLampOn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAutoLight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWiperGear(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLotionGear(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHornOn(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Light.LincolnLampType} */ (reader.readEnum());
      msg.setLincolnLampType(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Light.LincolnWiperType} */ (reader.readEnum());
      msg.setLincolnWiper(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Light.LincolnAmbientType} */ (reader.readEnum());
      msg.setLincolnAmbient(value);
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
proto.apollo.canbus.Light.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Light.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Light} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Light.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Light.TurnLightType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Light.BeamLampType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {!proto.apollo.canbus.Light.LincolnLampType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Light.LincolnWiperType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Light.LincolnAmbientType} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Light.TurnLightType = {
  TURN_LIGHT_OFF: 0,
  TURN_LEFT_ON: 1,
  TURN_RIGHT_ON: 2,
  TURN_LIGHT_ON: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Light.BeamLampType = {
  BEAM_OFF: 0,
  HIGH_BEAM_ON: 1,
  LOW_BEAM_ON: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Light.LincolnLampType = {
  BEAM_NULL: 0,
  BEAM_FLASH_TO_PASS: 1,
  BEAM_HIGH: 2,
  BEAM_INVALID: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Light.LincolnWiperType = {
  WIPER_OFF: 0,
  WIPER_AUTO_OFF: 1,
  WIPER_OFF_MOVING: 2,
  WIPER_MANUAL_OFF: 3,
  WIPER_MANUAL_ON: 4,
  WIPER_MANUAL_LOW: 5,
  WIPER_MANUAL_HIGH: 6,
  WIPER_MIST_FLICK: 7,
  WIPER_WASH: 8,
  WIPER_AUTO_LOW: 9,
  WIPER_AUTO_HIGH: 10,
  WIPER_COURTESY_WIPE: 11,
  WIPER_AUTO_ADJUST: 12,
  WIPER_RESERVED: 13,
  WIPER_STALLED: 14,
  WIPER_NO_DATA: 15
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Light.LincolnAmbientType = {
  AMBIENT_DARK: 0,
  AMBIENT_LIGHT: 1,
  AMBIENT_TWILIGHT: 2,
  AMBIENT_TUNNEL_ON: 3,
  AMBIENT_TUNNEL_OFF: 4,
  AMBIENT_INVALID: 5,
  AMBIENT_NO_DATA: 7
};

/**
 * optional TurnLightType turn_light_type = 1;
 * @return {!proto.apollo.canbus.Light.TurnLightType}
 */
proto.apollo.canbus.Light.prototype.getTurnLightType = function() {
  return /** @type {!proto.apollo.canbus.Light.TurnLightType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Light.TurnLightType} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setTurnLightType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearTurnLightType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasTurnLightType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BeamLampType beam_lamp_type = 2;
 * @return {!proto.apollo.canbus.Light.BeamLampType}
 */
proto.apollo.canbus.Light.prototype.getBeamLampType = function() {
  return /** @type {!proto.apollo.canbus.Light.BeamLampType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Light.BeamLampType} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setBeamLampType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearBeamLampType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasBeamLampType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_brake_lamp_on = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.getIsBrakeLampOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setIsBrakeLampOn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearIsBrakeLampOn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasIsBrakeLampOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_auto_light = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.getIsAutoLight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setIsAutoLight = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearIsAutoLight = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasIsAutoLight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 wiper_gear = 5;
 * @return {number}
 */
proto.apollo.canbus.Light.prototype.getWiperGear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setWiperGear = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearWiperGear = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasWiperGear = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 lotion_gear = 6;
 * @return {number}
 */
proto.apollo.canbus.Light.prototype.getLotionGear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setLotionGear = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearLotionGear = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasLotionGear = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_horn_on = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.getIsHornOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setIsHornOn = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearIsHornOn = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasIsHornOn = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LincolnLampType lincoln_lamp_type = 8;
 * @return {!proto.apollo.canbus.Light.LincolnLampType}
 */
proto.apollo.canbus.Light.prototype.getLincolnLampType = function() {
  return /** @type {!proto.apollo.canbus.Light.LincolnLampType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Light.LincolnLampType} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setLincolnLampType = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearLincolnLampType = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasLincolnLampType = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LincolnWiperType lincoln_wiper = 9;
 * @return {!proto.apollo.canbus.Light.LincolnWiperType}
 */
proto.apollo.canbus.Light.prototype.getLincolnWiper = function() {
  return /** @type {!proto.apollo.canbus.Light.LincolnWiperType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Light.LincolnWiperType} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setLincolnWiper = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearLincolnWiper = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasLincolnWiper = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional LincolnAmbientType lincoln_ambient = 10;
 * @return {!proto.apollo.canbus.Light.LincolnAmbientType}
 */
proto.apollo.canbus.Light.prototype.getLincolnAmbient = function() {
  return /** @type {!proto.apollo.canbus.Light.LincolnAmbientType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Light.LincolnAmbientType} value
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.setLincolnAmbient = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Light} returns this
 */
proto.apollo.canbus.Light.prototype.clearLincolnAmbient = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Light.prototype.hasLincolnAmbient = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.apollo.canbus.Eps.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Eps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Eps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Eps.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEpsFail: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    epsControlState: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    epsDriverHandTorq: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    isSteeringAngleValid: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    steeringAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    steeringAngleSpd: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    isTrimmingStatus: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    isCalibrationStatus: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    isFailureStatus: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    allowEnterAutonomousMode: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    currentDrivingMode: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    steeringAngleCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
    vehicleSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
    epasTorque: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
    steeringEnabled: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    driverOverride: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    driverActivity: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    watchdogFault: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    channel1Fault: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
    channel2Fault: (f = jspb.Message.getBooleanField(msg, 20)) == null ? undefined : f,
    calibrationFault: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
    connectorFault: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    timestamp65: (f = jspb.Message.getOptionalFloatingPointField(msg, 23)) == null ? undefined : f,
    majorVersion: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    minorVersion: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    buildNumber: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Eps as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Eps.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isEpsFail;

  /** @type {?|undefined} */
  this.epsControlState;

  /** @type {?|undefined} */
  this.epsDriverHandTorq;

  /** @type {?|undefined} */
  this.isSteeringAngleValid;

  /** @type {?|undefined} */
  this.steeringAngle;

  /** @type {?|undefined} */
  this.steeringAngleSpd;

  /** @type {?|undefined} */
  this.isTrimmingStatus;

  /** @type {?|undefined} */
  this.isCalibrationStatus;

  /** @type {?|undefined} */
  this.isFailureStatus;

  /** @type {?|undefined} */
  this.allowEnterAutonomousMode;

  /** @type {?|undefined} */
  this.currentDrivingMode;

  /** @type {?|undefined} */
  this.steeringAngleCmd;

  /** @type {?|undefined} */
  this.vehicleSpeed;

  /** @type {?|undefined} */
  this.epasTorque;

  /** @type {?|undefined} */
  this.steeringEnabled;

  /** @type {?|undefined} */
  this.driverOverride;

  /** @type {?|undefined} */
  this.driverActivity;

  /** @type {?|undefined} */
  this.watchdogFault;

  /** @type {?|undefined} */
  this.channel1Fault;

  /** @type {?|undefined} */
  this.channel2Fault;

  /** @type {?|undefined} */
  this.calibrationFault;

  /** @type {?|undefined} */
  this.connectorFault;

  /** @type {?|undefined} */
  this.timestamp65;

  /** @type {?|undefined} */
  this.majorVersion;

  /** @type {?|undefined} */
  this.minorVersion;

  /** @type {?|undefined} */
  this.buildNumber;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Eps.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Eps}
 */
proto.apollo.canbus.Eps.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Eps();
  obj.isEpsFail != null && jspb.Message.setField(msg, 1, obj.isEpsFail);
  obj.epsControlState != null && jspb.Message.setField(msg, 2, obj.epsControlState);
  obj.epsDriverHandTorq != null && jspb.Message.setField(msg, 3, obj.epsDriverHandTorq);
  obj.isSteeringAngleValid != null && jspb.Message.setField(msg, 4, obj.isSteeringAngleValid);
  obj.steeringAngle != null && jspb.Message.setField(msg, 5, obj.steeringAngle);
  obj.steeringAngleSpd != null && jspb.Message.setField(msg, 6, obj.steeringAngleSpd);
  obj.isTrimmingStatus != null && jspb.Message.setField(msg, 7, obj.isTrimmingStatus);
  obj.isCalibrationStatus != null && jspb.Message.setField(msg, 8, obj.isCalibrationStatus);
  obj.isFailureStatus != null && jspb.Message.setField(msg, 9, obj.isFailureStatus);
  obj.allowEnterAutonomousMode != null && jspb.Message.setField(msg, 10, obj.allowEnterAutonomousMode);
  obj.currentDrivingMode != null && jspb.Message.setField(msg, 11, obj.currentDrivingMode);
  obj.steeringAngleCmd != null && jspb.Message.setField(msg, 12, obj.steeringAngleCmd);
  obj.vehicleSpeed != null && jspb.Message.setField(msg, 13, obj.vehicleSpeed);
  obj.epasTorque != null && jspb.Message.setField(msg, 14, obj.epasTorque);
  obj.steeringEnabled != null && jspb.Message.setField(msg, 15, obj.steeringEnabled);
  obj.driverOverride != null && jspb.Message.setField(msg, 16, obj.driverOverride);
  obj.driverActivity != null && jspb.Message.setField(msg, 17, obj.driverActivity);
  obj.watchdogFault != null && jspb.Message.setField(msg, 18, obj.watchdogFault);
  obj.channel1Fault != null && jspb.Message.setField(msg, 19, obj.channel1Fault);
  obj.channel2Fault != null && jspb.Message.setField(msg, 20, obj.channel2Fault);
  obj.calibrationFault != null && jspb.Message.setField(msg, 21, obj.calibrationFault);
  obj.connectorFault != null && jspb.Message.setField(msg, 22, obj.connectorFault);
  obj.timestamp65 != null && jspb.Message.setField(msg, 23, obj.timestamp65);
  obj.majorVersion != null && jspb.Message.setField(msg, 24, obj.majorVersion);
  obj.minorVersion != null && jspb.Message.setField(msg, 25, obj.minorVersion);
  obj.buildNumber != null && jspb.Message.setField(msg, 26, obj.buildNumber);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Eps}
 */
proto.apollo.canbus.Eps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Eps;
  return proto.apollo.canbus.Eps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Eps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Eps}
 */
proto.apollo.canbus.Eps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEpsFail(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Eps.Type} */ (reader.readEnum());
      msg.setEpsControlState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEpsDriverHandTorq(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSteeringAngleValid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSteeringAngle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSteeringAngleSpd(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTrimmingStatus(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCalibrationStatus(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFailureStatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAllowEnterAutonomousMode(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentDrivingMode(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSteeringAngleCmd(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVehicleSpeed(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEpasTorque(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSteeringEnabled(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverOverride(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverActivity(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchdogFault(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel1Fault(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel2Fault(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCalibrationFault(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnectorFault(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp65(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajorVersion(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinorVersion(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildNumber(value);
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
proto.apollo.canbus.Eps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Eps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Eps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Eps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Eps.Type} */ (jspb.Message.getField(message, 2));
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeInt32(
      26,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Eps.Type = {
  NOT_AVAILABLE: 0,
  READY: 1,
  ACTIVE: 2,
  INVALID: 3
};

/**
 * optional bool is_eps_fail = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getIsEpsFail = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setIsEpsFail = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearIsEpsFail = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasIsEpsFail = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type eps_control_state = 2;
 * @return {!proto.apollo.canbus.Eps.Type}
 */
proto.apollo.canbus.Eps.prototype.getEpsControlState = function() {
  return /** @type {!proto.apollo.canbus.Eps.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Eps.Type} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setEpsControlState = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearEpsControlState = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasEpsControlState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double eps_driver_hand_torq = 3;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getEpsDriverHandTorq = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setEpsDriverHandTorq = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearEpsDriverHandTorq = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasEpsDriverHandTorq = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_steering_angle_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getIsSteeringAngleValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setIsSteeringAngleValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearIsSteeringAngleValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasIsSteeringAngleValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double steering_angle = 5;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getSteeringAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setSteeringAngle = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearSteeringAngle = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasSteeringAngle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double steering_angle_spd = 6;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getSteeringAngleSpd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setSteeringAngleSpd = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearSteeringAngleSpd = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasSteeringAngleSpd = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_trimming_status = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getIsTrimmingStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setIsTrimmingStatus = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearIsTrimmingStatus = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasIsTrimmingStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_calibration_status = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getIsCalibrationStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setIsCalibrationStatus = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearIsCalibrationStatus = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasIsCalibrationStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_failure_status = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getIsFailureStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setIsFailureStatus = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearIsFailureStatus = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasIsFailureStatus = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 allow_enter_autonomous_mode = 10;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getAllowEnterAutonomousMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setAllowEnterAutonomousMode = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearAllowEnterAutonomousMode = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasAllowEnterAutonomousMode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 current_driving_mode = 11;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getCurrentDrivingMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setCurrentDrivingMode = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearCurrentDrivingMode = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasCurrentDrivingMode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double steering_angle_cmd = 12;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getSteeringAngleCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setSteeringAngleCmd = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearSteeringAngleCmd = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasSteeringAngleCmd = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double vehicle_speed = 13;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getVehicleSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setVehicleSpeed = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearVehicleSpeed = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasVehicleSpeed = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double epas_torque = 14;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getEpasTorque = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setEpasTorque = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearEpasTorque = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasEpasTorque = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool steering_enabled = 15;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getSteeringEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setSteeringEnabled = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearSteeringEnabled = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasSteeringEnabled = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool driver_override = 16;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getDriverOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setDriverOverride = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearDriverOverride = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasDriverOverride = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool driver_activity = 17;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getDriverActivity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setDriverActivity = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearDriverActivity = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasDriverActivity = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool watchdog_fault = 18;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getWatchdogFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setWatchdogFault = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearWatchdogFault = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasWatchdogFault = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool channel_1_fault = 19;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getChannel1Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setChannel1Fault = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearChannel1Fault = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasChannel1Fault = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool channel_2_fault = 20;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getChannel2Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setChannel2Fault = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearChannel2Fault = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasChannel2Fault = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool calibration_fault = 21;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getCalibrationFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setCalibrationFault = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearCalibrationFault = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasCalibrationFault = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool connector_fault = 22;
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.getConnectorFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setConnectorFault = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearConnectorFault = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasConnectorFault = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional double timestamp_65 = 23;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getTimestamp65 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setTimestamp65 = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearTimestamp65 = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasTimestamp65 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional int32 major_version = 24;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getMajorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setMajorVersion = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearMajorVersion = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasMajorVersion = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional int32 minor_version = 25;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getMinorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setMinorVersion = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearMinorVersion = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasMinorVersion = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int32 build_number = 26;
 * @return {number}
 */
proto.apollo.canbus.Eps.prototype.getBuildNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.setBuildNumber = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Eps} returns this
 */
proto.apollo.canbus.Eps.prototype.clearBuildNumber = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Eps.prototype.hasBuildNumber = function() {
  return jspb.Message.getField(this, 26) != null;
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
proto.apollo.canbus.VehicleSpd.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.VehicleSpd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.VehicleSpd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.VehicleSpd.toObject = function(includeInstance, msg) {
  var f, obj = {
    isVehicleStandstill: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isVehicleSpdValid: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    vehicleSpd: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    isWheelSpdRrValid: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    wheelDirectionRr: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    wheelSpdRr: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    isWheelSpdRlValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    wheelDirectionRl: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    wheelSpdRl: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    isWheelSpdFrValid: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    wheelDirectionFr: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    wheelSpdFr: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
    isWheelSpdFlValid: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    wheelDirectionFl: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    wheelSpdFl: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f,
    isYawRateValid: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    yawRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 17)) == null ? undefined : f,
    yawRateOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 18)) == null ? undefined : f,
    isAxValid: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
    ax: (f = jspb.Message.getOptionalFloatingPointField(msg, 20)) == null ? undefined : f,
    axOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 21)) == null ? undefined : f,
    isAyValid: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    ay: (f = jspb.Message.getOptionalFloatingPointField(msg, 23)) == null ? undefined : f,
    ayOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 24)) == null ? undefined : f,
    latAcc: (f = jspb.Message.getOptionalFloatingPointField(msg, 25)) == null ? undefined : f,
    longAcc: (f = jspb.Message.getOptionalFloatingPointField(msg, 26)) == null ? undefined : f,
    vertAcc: (f = jspb.Message.getOptionalFloatingPointField(msg, 27)) == null ? undefined : f,
    rollRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 28)) == null ? undefined : f,
    accEst: (f = jspb.Message.getOptionalFloatingPointField(msg, 29)) == null ? undefined : f,
    timestampSec: (f = jspb.Message.getOptionalFloatingPointField(msg, 30)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of VehicleSpd as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.VehicleSpd.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isVehicleStandstill;

  /** @type {?|undefined} */
  this.isVehicleSpdValid;

  /** @type {?|undefined} */
  this.vehicleSpd;

  /** @type {?|undefined} */
  this.isWheelSpdRrValid;

  /** @type {?|undefined} */
  this.wheelDirectionRr;

  /** @type {?|undefined} */
  this.wheelSpdRr;

  /** @type {?|undefined} */
  this.isWheelSpdRlValid;

  /** @type {?|undefined} */
  this.wheelDirectionRl;

  /** @type {?|undefined} */
  this.wheelSpdRl;

  /** @type {?|undefined} */
  this.isWheelSpdFrValid;

  /** @type {?|undefined} */
  this.wheelDirectionFr;

  /** @type {?|undefined} */
  this.wheelSpdFr;

  /** @type {?|undefined} */
  this.isWheelSpdFlValid;

  /** @type {?|undefined} */
  this.wheelDirectionFl;

  /** @type {?|undefined} */
  this.wheelSpdFl;

  /** @type {?|undefined} */
  this.isYawRateValid;

  /** @type {?|undefined} */
  this.yawRate;

  /** @type {?|undefined} */
  this.yawRateOffset;

  /** @type {?|undefined} */
  this.isAxValid;

  /** @type {?|undefined} */
  this.ax;

  /** @type {?|undefined} */
  this.axOffset;

  /** @type {?|undefined} */
  this.isAyValid;

  /** @type {?|undefined} */
  this.ay;

  /** @type {?|undefined} */
  this.ayOffset;

  /** @type {?|undefined} */
  this.latAcc;

  /** @type {?|undefined} */
  this.longAcc;

  /** @type {?|undefined} */
  this.vertAcc;

  /** @type {?|undefined} */
  this.rollRate;

  /** @type {?|undefined} */
  this.accEst;

  /** @type {?|undefined} */
  this.timestampSec;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.VehicleSpd.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.VehicleSpd}
 */
proto.apollo.canbus.VehicleSpd.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.VehicleSpd();
  obj.isVehicleStandstill != null && jspb.Message.setField(msg, 1, obj.isVehicleStandstill);
  obj.isVehicleSpdValid != null && jspb.Message.setField(msg, 2, obj.isVehicleSpdValid);
  obj.vehicleSpd != null && jspb.Message.setField(msg, 3, obj.vehicleSpd);
  obj.isWheelSpdRrValid != null && jspb.Message.setField(msg, 4, obj.isWheelSpdRrValid);
  obj.wheelDirectionRr != null && jspb.Message.setField(msg, 5, obj.wheelDirectionRr);
  obj.wheelSpdRr != null && jspb.Message.setField(msg, 6, obj.wheelSpdRr);
  obj.isWheelSpdRlValid != null && jspb.Message.setField(msg, 7, obj.isWheelSpdRlValid);
  obj.wheelDirectionRl != null && jspb.Message.setField(msg, 8, obj.wheelDirectionRl);
  obj.wheelSpdRl != null && jspb.Message.setField(msg, 9, obj.wheelSpdRl);
  obj.isWheelSpdFrValid != null && jspb.Message.setField(msg, 10, obj.isWheelSpdFrValid);
  obj.wheelDirectionFr != null && jspb.Message.setField(msg, 11, obj.wheelDirectionFr);
  obj.wheelSpdFr != null && jspb.Message.setField(msg, 12, obj.wheelSpdFr);
  obj.isWheelSpdFlValid != null && jspb.Message.setField(msg, 13, obj.isWheelSpdFlValid);
  obj.wheelDirectionFl != null && jspb.Message.setField(msg, 14, obj.wheelDirectionFl);
  obj.wheelSpdFl != null && jspb.Message.setField(msg, 15, obj.wheelSpdFl);
  obj.isYawRateValid != null && jspb.Message.setField(msg, 16, obj.isYawRateValid);
  obj.yawRate != null && jspb.Message.setField(msg, 17, obj.yawRate);
  obj.yawRateOffset != null && jspb.Message.setField(msg, 18, obj.yawRateOffset);
  obj.isAxValid != null && jspb.Message.setField(msg, 19, obj.isAxValid);
  obj.ax != null && jspb.Message.setField(msg, 20, obj.ax);
  obj.axOffset != null && jspb.Message.setField(msg, 21, obj.axOffset);
  obj.isAyValid != null && jspb.Message.setField(msg, 22, obj.isAyValid);
  obj.ay != null && jspb.Message.setField(msg, 23, obj.ay);
  obj.ayOffset != null && jspb.Message.setField(msg, 24, obj.ayOffset);
  obj.latAcc != null && jspb.Message.setField(msg, 25, obj.latAcc);
  obj.longAcc != null && jspb.Message.setField(msg, 26, obj.longAcc);
  obj.vertAcc != null && jspb.Message.setField(msg, 27, obj.vertAcc);
  obj.rollRate != null && jspb.Message.setField(msg, 28, obj.rollRate);
  obj.accEst != null && jspb.Message.setField(msg, 29, obj.accEst);
  obj.timestampSec != null && jspb.Message.setField(msg, 30, obj.timestampSec);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.VehicleSpd}
 */
proto.apollo.canbus.VehicleSpd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.VehicleSpd;
  return proto.apollo.canbus.VehicleSpd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.VehicleSpd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.VehicleSpd}
 */
proto.apollo.canbus.VehicleSpd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVehicleStandstill(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVehicleSpdValid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVehicleSpd(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWheelSpdRrValid(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (reader.readEnum());
      msg.setWheelDirectionRr(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdRr(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWheelSpdRlValid(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (reader.readEnum());
      msg.setWheelDirectionRl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdRl(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWheelSpdFrValid(value);
      break;
    case 11:
      var value = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (reader.readEnum());
      msg.setWheelDirectionFr(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdFr(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsWheelSpdFlValid(value);
      break;
    case 14:
      var value = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (reader.readEnum());
      msg.setWheelDirectionFl(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdFl(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsYawRateValid(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYawRate(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYawRateOffset(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAxValid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAx(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAxOffset(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAyValid(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAy(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAyOffset(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatAcc(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongAcc(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVertAcc(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRollRate(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccEst(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestampSec(value);
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
proto.apollo.canbus.VehicleSpd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.VehicleSpd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.VehicleSpd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.VehicleSpd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeDouble(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeDouble(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeDouble(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeDouble(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeDouble(
      28,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeDouble(
      29,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeDouble(
      30,
      f
    );
  }
};


/**
 * optional bool is_vehicle_standstill = 1;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsVehicleStandstill = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsVehicleStandstill = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsVehicleStandstill = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsVehicleStandstill = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_vehicle_spd_valid = 2;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsVehicleSpdValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsVehicleSpdValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsVehicleSpdValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsVehicleSpdValid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double vehicle_spd = 3;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getVehicleSpd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setVehicleSpd = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearVehicleSpd = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasVehicleSpd = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_wheel_spd_rr_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsWheelSpdRrValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsWheelSpdRrValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsWheelSpdRrValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsWheelSpdRrValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WheelSpeed.WheelSpeedType wheel_direction_rr = 5;
 * @return {!proto.apollo.canbus.WheelSpeed.WheelSpeedType}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelDirectionRr = function() {
  return /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelDirectionRr = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelDirectionRr = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelDirectionRr = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double wheel_spd_rr = 6;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelSpdRr = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelSpdRr = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelSpdRr = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelSpdRr = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_wheel_spd_rl_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsWheelSpdRlValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsWheelSpdRlValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsWheelSpdRlValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsWheelSpdRlValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WheelSpeed.WheelSpeedType wheel_direction_rl = 8;
 * @return {!proto.apollo.canbus.WheelSpeed.WheelSpeedType}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelDirectionRl = function() {
  return /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelDirectionRl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelDirectionRl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelDirectionRl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double wheel_spd_rl = 9;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelSpdRl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelSpdRl = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelSpdRl = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelSpdRl = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_wheel_spd_fr_valid = 10;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsWheelSpdFrValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsWheelSpdFrValid = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsWheelSpdFrValid = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsWheelSpdFrValid = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional WheelSpeed.WheelSpeedType wheel_direction_fr = 11;
 * @return {!proto.apollo.canbus.WheelSpeed.WheelSpeedType}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelDirectionFr = function() {
  return /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelDirectionFr = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelDirectionFr = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelDirectionFr = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double wheel_spd_fr = 12;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelSpdFr = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelSpdFr = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelSpdFr = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelSpdFr = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool is_wheel_spd_fl_valid = 13;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsWheelSpdFlValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsWheelSpdFlValid = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsWheelSpdFlValid = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsWheelSpdFlValid = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WheelSpeed.WheelSpeedType wheel_direction_fl = 14;
 * @return {!proto.apollo.canbus.WheelSpeed.WheelSpeedType}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelDirectionFl = function() {
  return /** @type {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.apollo.canbus.WheelSpeed.WheelSpeedType} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelDirectionFl = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelDirectionFl = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelDirectionFl = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double wheel_spd_fl = 15;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getWheelSpdFl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setWheelSpdFl = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearWheelSpdFl = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasWheelSpdFl = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool is_yaw_rate_valid = 16;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsYawRateValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsYawRateValid = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsYawRateValid = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsYawRateValid = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional double yaw_rate = 17;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getYawRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setYawRate = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearYawRate = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasYawRate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double yaw_rate_offset = 18;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getYawRateOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setYawRateOffset = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearYawRateOffset = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasYawRateOffset = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool is_ax_valid = 19;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsAxValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsAxValid = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsAxValid = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsAxValid = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional double ax = 20;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getAx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setAx = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearAx = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasAx = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional double ax_offset = 21;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getAxOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setAxOffset = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearAxOffset = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasAxOffset = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool is_ay_valid = 22;
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.getIsAyValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setIsAyValid = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearIsAyValid = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasIsAyValid = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional double ay = 23;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getAy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setAy = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearAy = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasAy = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional double ay_offset = 24;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getAyOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setAyOffset = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearAyOffset = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasAyOffset = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional double lat_acc = 25;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getLatAcc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setLatAcc = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearLatAcc = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasLatAcc = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional double long_acc = 26;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getLongAcc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 26, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setLongAcc = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearLongAcc = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasLongAcc = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional double vert_acc = 27;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getVertAcc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setVertAcc = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearVertAcc = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasVertAcc = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional double roll_rate = 28;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getRollRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setRollRate = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearRollRate = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasRollRate = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional double acc_est = 29;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getAccEst = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setAccEst = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearAccEst = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasAccEst = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional double timestamp_sec = 30;
 * @return {number}
 */
proto.apollo.canbus.VehicleSpd.prototype.getTimestampSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.setTimestampSec = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.VehicleSpd} returns this
 */
proto.apollo.canbus.VehicleSpd.prototype.clearTimestampSec = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.VehicleSpd.prototype.hasTimestampSec = function() {
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
proto.apollo.canbus.Deceleration.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Deceleration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Deceleration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Deceleration.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDecelerationAvailable: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isDecelerationActive: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    deceleration: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    isEvbFail: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    evbPressure: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    brakePressure: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    brakePressureSpd: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Deceleration as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Deceleration.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isDecelerationAvailable;

  /** @type {?|undefined} */
  this.isDecelerationActive;

  /** @type {?|undefined} */
  this.deceleration;

  /** @type {?|undefined} */
  this.isEvbFail;

  /** @type {?|undefined} */
  this.evbPressure;

  /** @type {?|undefined} */
  this.brakePressure;

  /** @type {?|undefined} */
  this.brakePressureSpd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Deceleration.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Deceleration}
 */
proto.apollo.canbus.Deceleration.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Deceleration();
  obj.isDecelerationAvailable != null && jspb.Message.setField(msg, 1, obj.isDecelerationAvailable);
  obj.isDecelerationActive != null && jspb.Message.setField(msg, 2, obj.isDecelerationActive);
  obj.deceleration != null && jspb.Message.setField(msg, 3, obj.deceleration);
  obj.isEvbFail != null && jspb.Message.setField(msg, 4, obj.isEvbFail);
  obj.evbPressure != null && jspb.Message.setField(msg, 5, obj.evbPressure);
  obj.brakePressure != null && jspb.Message.setField(msg, 6, obj.brakePressure);
  obj.brakePressureSpd != null && jspb.Message.setField(msg, 7, obj.brakePressureSpd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Deceleration}
 */
proto.apollo.canbus.Deceleration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Deceleration;
  return proto.apollo.canbus.Deceleration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Deceleration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Deceleration}
 */
proto.apollo.canbus.Deceleration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDecelerationAvailable(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDecelerationActive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDeceleration(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setIsEvbFail(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEvbPressure(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakePressure(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakePressureSpd(value);
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
proto.apollo.canbus.Deceleration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Deceleration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Deceleration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Deceleration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional bool is_deceleration_available = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.getIsDecelerationAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setIsDecelerationAvailable = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearIsDecelerationAvailable = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasIsDecelerationAvailable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_deceleration_active = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.getIsDecelerationActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setIsDecelerationActive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearIsDecelerationActive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasIsDecelerationActive = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double deceleration = 3;
 * @return {number}
 */
proto.apollo.canbus.Deceleration.prototype.getDeceleration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setDeceleration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearDeceleration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasDeceleration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double is_evb_fail = 4;
 * @return {number}
 */
proto.apollo.canbus.Deceleration.prototype.getIsEvbFail = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setIsEvbFail = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearIsEvbFail = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasIsEvbFail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double evb_pressure = 5;
 * @return {number}
 */
proto.apollo.canbus.Deceleration.prototype.getEvbPressure = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setEvbPressure = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearEvbPressure = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasEvbPressure = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double brake_pressure = 6;
 * @return {number}
 */
proto.apollo.canbus.Deceleration.prototype.getBrakePressure = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setBrakePressure = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearBrakePressure = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasBrakePressure = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double brake_pressure_spd = 7;
 * @return {number}
 */
proto.apollo.canbus.Deceleration.prototype.getBrakePressureSpd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.setBrakePressureSpd = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Deceleration} returns this
 */
proto.apollo.canbus.Deceleration.prototype.clearBrakePressureSpd = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Deceleration.prototype.hasBrakePressureSpd = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.apollo.canbus.Brake.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake.toObject = function(includeInstance, msg) {
  var f, obj = {
    isBrakePedalPressed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    isBrakeForceExist: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    isBrakeOverHeat: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    isHandBrakeOn: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    brakePedalPosition: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    isBrakeValid: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    brakeInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    brakeCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    brakeOutput: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    booInput: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    booCmd: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    booOutput: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    watchdogApplyingBrakes: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    watchdogSource: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    brakeEnabled: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    driverOverride: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    driverActivity: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    watchdogFault: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    channel1Fault: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
    channel2Fault: (f = jspb.Message.getBooleanField(msg, 20)) == null ? undefined : f,
    booFault: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
    connectorFault: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    brakeTorqueReq: (f = jspb.Message.getOptionalFloatingPointField(msg, 23)) == null ? undefined : f,
    hsaStatus: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    brakeTorqueAct: (f = jspb.Message.getOptionalFloatingPointField(msg, 25)) == null ? undefined : f,
    hsaMode: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    wheelTorqueAct: (f = jspb.Message.getOptionalFloatingPointField(msg, 27)) == null ? undefined : f,
    majorVersion: (f = jspb.Message.getField(msg, 28)) == null ? undefined : f,
    minorVersion: (f = jspb.Message.getField(msg, 29)) == null ? undefined : f,
    buildNumber: (f = jspb.Message.getField(msg, 30)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isBrakePedalPressed;

  /** @type {?|undefined} */
  this.isBrakeForceExist;

  /** @type {?|undefined} */
  this.isBrakeOverHeat;

  /** @type {?|undefined} */
  this.isHandBrakeOn;

  /** @type {?|undefined} */
  this.brakePedalPosition;

  /** @type {?|undefined} */
  this.isBrakeValid;

  /** @type {?|undefined} */
  this.brakeInput;

  /** @type {?|undefined} */
  this.brakeCmd;

  /** @type {?|undefined} */
  this.brakeOutput;

  /** @type {?|undefined} */
  this.booInput;

  /** @type {?|undefined} */
  this.booCmd;

  /** @type {?|undefined} */
  this.booOutput;

  /** @type {?|undefined} */
  this.watchdogApplyingBrakes;

  /** @type {?|undefined} */
  this.watchdogSource;

  /** @type {?|undefined} */
  this.brakeEnabled;

  /** @type {?|undefined} */
  this.driverOverride;

  /** @type {?|undefined} */
  this.driverActivity;

  /** @type {?|undefined} */
  this.watchdogFault;

  /** @type {?|undefined} */
  this.channel1Fault;

  /** @type {?|undefined} */
  this.channel2Fault;

  /** @type {?|undefined} */
  this.booFault;

  /** @type {?|undefined} */
  this.connectorFault;

  /** @type {?|undefined} */
  this.brakeTorqueReq;

  /** @type {?|undefined} */
  this.hsaStatus;

  /** @type {?|undefined} */
  this.brakeTorqueAct;

  /** @type {?|undefined} */
  this.hsaMode;

  /** @type {?|undefined} */
  this.wheelTorqueAct;

  /** @type {?|undefined} */
  this.majorVersion;

  /** @type {?|undefined} */
  this.minorVersion;

  /** @type {?|undefined} */
  this.buildNumber;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake}
 */
proto.apollo.canbus.Brake.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake();
  obj.isBrakePedalPressed != null && jspb.Message.setField(msg, 1, obj.isBrakePedalPressed);
  obj.isBrakeForceExist != null && jspb.Message.setField(msg, 2, obj.isBrakeForceExist);
  obj.isBrakeOverHeat != null && jspb.Message.setField(msg, 3, obj.isBrakeOverHeat);
  obj.isHandBrakeOn != null && jspb.Message.setField(msg, 4, obj.isHandBrakeOn);
  obj.brakePedalPosition != null && jspb.Message.setField(msg, 5, obj.brakePedalPosition);
  obj.isBrakeValid != null && jspb.Message.setField(msg, 6, obj.isBrakeValid);
  obj.brakeInput != null && jspb.Message.setField(msg, 7, obj.brakeInput);
  obj.brakeCmd != null && jspb.Message.setField(msg, 8, obj.brakeCmd);
  obj.brakeOutput != null && jspb.Message.setField(msg, 9, obj.brakeOutput);
  obj.booInput != null && jspb.Message.setField(msg, 10, obj.booInput);
  obj.booCmd != null && jspb.Message.setField(msg, 11, obj.booCmd);
  obj.booOutput != null && jspb.Message.setField(msg, 12, obj.booOutput);
  obj.watchdogApplyingBrakes != null && jspb.Message.setField(msg, 13, obj.watchdogApplyingBrakes);
  obj.watchdogSource != null && jspb.Message.setField(msg, 14, obj.watchdogSource);
  obj.brakeEnabled != null && jspb.Message.setField(msg, 15, obj.brakeEnabled);
  obj.driverOverride != null && jspb.Message.setField(msg, 16, obj.driverOverride);
  obj.driverActivity != null && jspb.Message.setField(msg, 17, obj.driverActivity);
  obj.watchdogFault != null && jspb.Message.setField(msg, 18, obj.watchdogFault);
  obj.channel1Fault != null && jspb.Message.setField(msg, 19, obj.channel1Fault);
  obj.channel2Fault != null && jspb.Message.setField(msg, 20, obj.channel2Fault);
  obj.booFault != null && jspb.Message.setField(msg, 21, obj.booFault);
  obj.connectorFault != null && jspb.Message.setField(msg, 22, obj.connectorFault);
  obj.brakeTorqueReq != null && jspb.Message.setField(msg, 23, obj.brakeTorqueReq);
  obj.hsaStatus != null && jspb.Message.setField(msg, 24, obj.hsaStatus);
  obj.brakeTorqueAct != null && jspb.Message.setField(msg, 25, obj.brakeTorqueAct);
  obj.hsaMode != null && jspb.Message.setField(msg, 26, obj.hsaMode);
  obj.wheelTorqueAct != null && jspb.Message.setField(msg, 27, obj.wheelTorqueAct);
  obj.majorVersion != null && jspb.Message.setField(msg, 28, obj.majorVersion);
  obj.minorVersion != null && jspb.Message.setField(msg, 29, obj.minorVersion);
  obj.buildNumber != null && jspb.Message.setField(msg, 30, obj.buildNumber);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake}
 */
proto.apollo.canbus.Brake.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake;
  return proto.apollo.canbus.Brake.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake}
 */
proto.apollo.canbus.Brake.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBrakePedalPressed(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBrakeForceExist(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBrakeOverHeat(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHandBrakeOn(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakePedalPosition(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBrakeValid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeInput(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeCmd(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeOutput(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooInput(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooCmd(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooOutput(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchdogApplyingBrakes(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchdogSource(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeEnabled(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverOverride(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverActivity(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchdogFault(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel1Fault(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel2Fault(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBooFault(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnectorFault(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeTorqueReq(value);
      break;
    case 24:
      var value = /** @type {!proto.apollo.canbus.Brake.HSAStatusType} */ (reader.readEnum());
      msg.setHsaStatus(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeTorqueAct(value);
      break;
    case 26:
      var value = /** @type {!proto.apollo.canbus.Brake.HSAModeType} */ (reader.readEnum());
      msg.setHsaMode(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelTorqueAct(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajorVersion(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinorVersion(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildNumber(value);
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
proto.apollo.canbus.Brake.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Brake.HSAStatusType} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeEnum(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeDouble(
      25,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Brake.HSAModeType} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeDouble(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeInt32(
      30,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Brake.HSAStatusType = {
  HSA_INACTIVE: 0,
  HSA_FINDING_GRADIENT: 1,
  HSA_ACTIVE_PRESSED: 2,
  HSA_ACTIVE_RELEASED: 3,
  HSA_FAST_RELEASE: 4,
  HSA_SLOW_RELEASE: 5,
  HSA_FAILED: 6,
  HSA_UNDEFINED: 7
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Brake.HSAModeType = {
  HSA_OFF: 0,
  HSA_AUTO: 1,
  HSA_MANUAL: 2,
  HSA_MODE_UNDEFINED: 3
};

/**
 * optional bool is_brake_pedal_pressed = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getIsBrakePedalPressed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setIsBrakePedalPressed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearIsBrakePedalPressed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasIsBrakePedalPressed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_brake_force_exist = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getIsBrakeForceExist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setIsBrakeForceExist = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearIsBrakeForceExist = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasIsBrakeForceExist = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_brake_over_heat = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getIsBrakeOverHeat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setIsBrakeOverHeat = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearIsBrakeOverHeat = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasIsBrakeOverHeat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_hand_brake_on = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getIsHandBrakeOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setIsHandBrakeOn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearIsHandBrakeOn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasIsHandBrakeOn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double brake_pedal_position = 5;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakePedalPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakePedalPosition = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakePedalPosition = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakePedalPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_brake_valid = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getIsBrakeValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setIsBrakeValid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearIsBrakeValid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasIsBrakeValid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double brake_input = 7;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakeInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeInput = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeInput = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeInput = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double brake_cmd = 8;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakeCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeCmd = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeCmd = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeCmd = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double brake_output = 9;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakeOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeOutput = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeOutput = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeOutput = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool boo_input = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getBooInput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBooInput = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBooInput = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBooInput = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool boo_cmd = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getBooCmd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBooCmd = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBooCmd = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBooCmd = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool boo_output = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getBooOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBooOutput = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBooOutput = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBooOutput = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool watchdog_applying_brakes = 13;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getWatchdogApplyingBrakes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setWatchdogApplyingBrakes = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearWatchdogApplyingBrakes = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasWatchdogApplyingBrakes = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 watchdog_source = 14;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getWatchdogSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setWatchdogSource = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearWatchdogSource = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasWatchdogSource = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool brake_enabled = 15;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getBrakeEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeEnabled = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeEnabled = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeEnabled = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool driver_override = 16;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getDriverOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setDriverOverride = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearDriverOverride = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasDriverOverride = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool driver_activity = 17;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getDriverActivity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setDriverActivity = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearDriverActivity = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasDriverActivity = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool watchdog_fault = 18;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getWatchdogFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setWatchdogFault = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearWatchdogFault = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasWatchdogFault = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool channel_1_fault = 19;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getChannel1Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setChannel1Fault = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearChannel1Fault = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasChannel1Fault = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool channel_2_fault = 20;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getChannel2Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setChannel2Fault = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearChannel2Fault = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasChannel2Fault = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool boo_fault = 21;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getBooFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBooFault = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBooFault = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBooFault = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool connector_fault = 22;
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.getConnectorFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setConnectorFault = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearConnectorFault = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasConnectorFault = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional double brake_torque_req = 23;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakeTorqueReq = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeTorqueReq = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeTorqueReq = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeTorqueReq = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional HSAStatusType hsa_status = 24;
 * @return {!proto.apollo.canbus.Brake.HSAStatusType}
 */
proto.apollo.canbus.Brake.prototype.getHsaStatus = function() {
  return /** @type {!proto.apollo.canbus.Brake.HSAStatusType} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {!proto.apollo.canbus.Brake.HSAStatusType} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setHsaStatus = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearHsaStatus = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasHsaStatus = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional double brake_torque_act = 25;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBrakeTorqueAct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBrakeTorqueAct = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBrakeTorqueAct = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBrakeTorqueAct = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional HSAModeType hsa_mode = 26;
 * @return {!proto.apollo.canbus.Brake.HSAModeType}
 */
proto.apollo.canbus.Brake.prototype.getHsaMode = function() {
  return /** @type {!proto.apollo.canbus.Brake.HSAModeType} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.apollo.canbus.Brake.HSAModeType} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setHsaMode = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearHsaMode = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasHsaMode = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional double wheel_torque_act = 27;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getWheelTorqueAct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setWheelTorqueAct = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearWheelTorqueAct = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasWheelTorqueAct = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional int32 major_version = 28;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getMajorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setMajorVersion = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearMajorVersion = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasMajorVersion = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional int32 minor_version = 29;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getMinorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setMinorVersion = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearMinorVersion = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasMinorVersion = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional int32 build_number = 30;
 * @return {number}
 */
proto.apollo.canbus.Brake.prototype.getBuildNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.setBuildNumber = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake} returns this
 */
proto.apollo.canbus.Brake.prototype.clearBuildNumber = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake.prototype.hasBuildNumber = function() {
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
proto.apollo.canbus.Epb.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Epb.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Epb} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Epb.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEpbError: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isEpbReleased: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    epbStatus: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    parkingBrakeStatus: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Epb as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Epb.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isEpbError;

  /** @type {?|undefined} */
  this.isEpbReleased;

  /** @type {?|undefined} */
  this.epbStatus;

  /** @type {?|undefined} */
  this.parkingBrakeStatus;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Epb.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Epb}
 */
proto.apollo.canbus.Epb.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Epb();
  obj.isEpbError != null && jspb.Message.setField(msg, 1, obj.isEpbError);
  obj.isEpbReleased != null && jspb.Message.setField(msg, 2, obj.isEpbReleased);
  obj.epbStatus != null && jspb.Message.setField(msg, 3, obj.epbStatus);
  obj.parkingBrakeStatus != null && jspb.Message.setField(msg, 4, obj.parkingBrakeStatus);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Epb}
 */
proto.apollo.canbus.Epb.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Epb;
  return proto.apollo.canbus.Epb.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Epb} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Epb}
 */
proto.apollo.canbus.Epb.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEpbError(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEpbReleased(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEpbStatus(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Epb.PBrakeType} */ (reader.readEnum());
      msg.setParkingBrakeStatus(value);
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
proto.apollo.canbus.Epb.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Epb.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Epb} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Epb.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Epb.PBrakeType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Epb.PBrakeType = {
  PBRAKE_OFF: 0,
  PBRAKE_TRANSITION: 1,
  PBRAKE_ON: 2,
  PBRAKE_FAULT: 3
};

/**
 * optional bool is_epb_error = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.getIsEpbError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.setIsEpbError = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.clearIsEpbError = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.hasIsEpbError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_epb_released = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.getIsEpbReleased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.setIsEpbReleased = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.clearIsEpbReleased = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.hasIsEpbReleased = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 epb_status = 3;
 * @return {number}
 */
proto.apollo.canbus.Epb.prototype.getEpbStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.setEpbStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.clearEpbStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.hasEpbStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PBrakeType parking_brake_status = 4;
 * @return {!proto.apollo.canbus.Epb.PBrakeType}
 */
proto.apollo.canbus.Epb.prototype.getParkingBrakeStatus = function() {
  return /** @type {!proto.apollo.canbus.Epb.PBrakeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Epb.PBrakeType} value
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.setParkingBrakeStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Epb} returns this
 */
proto.apollo.canbus.Epb.prototype.clearParkingBrakeStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Epb.prototype.hasParkingBrakeStatus = function() {
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
proto.apollo.canbus.Gas.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Gas.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Gas} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gas.toObject = function(includeInstance, msg) {
  var f, obj = {
    isGasPedalError: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isGasPedalPressedMore: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    gasPedalPosition: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    isGasValid: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    throttleInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    throttleCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    throttleOutput: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    watchdogSource: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    throttleEnabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    driverOverride: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    driverActivity: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    watchdogFault: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    channel1Fault: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    channel2Fault: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    connectorFault: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    acceleratorPedal: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f,
    acceleratorPedalRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 17)) == null ? undefined : f,
    majorVersion: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    minorVersion: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    buildNumber: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Gas as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Gas.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isGasPedalError;

  /** @type {?|undefined} */
  this.isGasPedalPressedMore;

  /** @type {?|undefined} */
  this.gasPedalPosition;

  /** @type {?|undefined} */
  this.isGasValid;

  /** @type {?|undefined} */
  this.throttleInput;

  /** @type {?|undefined} */
  this.throttleCmd;

  /** @type {?|undefined} */
  this.throttleOutput;

  /** @type {?|undefined} */
  this.watchdogSource;

  /** @type {?|undefined} */
  this.throttleEnabled;

  /** @type {?|undefined} */
  this.driverOverride;

  /** @type {?|undefined} */
  this.driverActivity;

  /** @type {?|undefined} */
  this.watchdogFault;

  /** @type {?|undefined} */
  this.channel1Fault;

  /** @type {?|undefined} */
  this.channel2Fault;

  /** @type {?|undefined} */
  this.connectorFault;

  /** @type {?|undefined} */
  this.acceleratorPedal;

  /** @type {?|undefined} */
  this.acceleratorPedalRate;

  /** @type {?|undefined} */
  this.majorVersion;

  /** @type {?|undefined} */
  this.minorVersion;

  /** @type {?|undefined} */
  this.buildNumber;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Gas.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Gas}
 */
proto.apollo.canbus.Gas.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Gas();
  obj.isGasPedalError != null && jspb.Message.setField(msg, 1, obj.isGasPedalError);
  obj.isGasPedalPressedMore != null && jspb.Message.setField(msg, 2, obj.isGasPedalPressedMore);
  obj.gasPedalPosition != null && jspb.Message.setField(msg, 3, obj.gasPedalPosition);
  obj.isGasValid != null && jspb.Message.setField(msg, 4, obj.isGasValid);
  obj.throttleInput != null && jspb.Message.setField(msg, 5, obj.throttleInput);
  obj.throttleCmd != null && jspb.Message.setField(msg, 6, obj.throttleCmd);
  obj.throttleOutput != null && jspb.Message.setField(msg, 7, obj.throttleOutput);
  obj.watchdogSource != null && jspb.Message.setField(msg, 8, obj.watchdogSource);
  obj.throttleEnabled != null && jspb.Message.setField(msg, 9, obj.throttleEnabled);
  obj.driverOverride != null && jspb.Message.setField(msg, 10, obj.driverOverride);
  obj.driverActivity != null && jspb.Message.setField(msg, 11, obj.driverActivity);
  obj.watchdogFault != null && jspb.Message.setField(msg, 12, obj.watchdogFault);
  obj.channel1Fault != null && jspb.Message.setField(msg, 13, obj.channel1Fault);
  obj.channel2Fault != null && jspb.Message.setField(msg, 14, obj.channel2Fault);
  obj.connectorFault != null && jspb.Message.setField(msg, 15, obj.connectorFault);
  obj.acceleratorPedal != null && jspb.Message.setField(msg, 16, obj.acceleratorPedal);
  obj.acceleratorPedalRate != null && jspb.Message.setField(msg, 17, obj.acceleratorPedalRate);
  obj.majorVersion != null && jspb.Message.setField(msg, 18, obj.majorVersion);
  obj.minorVersion != null && jspb.Message.setField(msg, 19, obj.minorVersion);
  obj.buildNumber != null && jspb.Message.setField(msg, 20, obj.buildNumber);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Gas}
 */
proto.apollo.canbus.Gas.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Gas;
  return proto.apollo.canbus.Gas.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Gas} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Gas}
 */
proto.apollo.canbus.Gas.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGasPedalError(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGasPedalPressedMore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGasPedalPosition(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGasValid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setThrottleInput(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setThrottleCmd(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setThrottleOutput(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchdogSource(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setThrottleEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverOverride(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverActivity(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWatchdogFault(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel1Fault(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChannel2Fault(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConnectorFault(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAcceleratorPedal(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAcceleratorPedalRate(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajorVersion(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinorVersion(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildNumber(value);
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
proto.apollo.canbus.Gas.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Gas.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Gas} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gas.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
};


/**
 * optional bool is_gas_pedal_error = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getIsGasPedalError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setIsGasPedalError = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearIsGasPedalError = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasIsGasPedalError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_gas_pedal_pressed_more = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getIsGasPedalPressedMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setIsGasPedalPressedMore = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearIsGasPedalPressedMore = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasIsGasPedalPressedMore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double gas_pedal_position = 3;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getGasPedalPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setGasPedalPosition = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearGasPedalPosition = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasGasPedalPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_gas_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getIsGasValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setIsGasValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearIsGasValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasIsGasValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double throttle_input = 5;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getThrottleInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setThrottleInput = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearThrottleInput = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasThrottleInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double throttle_cmd = 6;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getThrottleCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setThrottleCmd = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearThrottleCmd = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasThrottleCmd = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double throttle_output = 7;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getThrottleOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setThrottleOutput = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearThrottleOutput = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasThrottleOutput = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 watchdog_source = 8;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getWatchdogSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setWatchdogSource = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearWatchdogSource = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasWatchdogSource = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool throttle_enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getThrottleEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setThrottleEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearThrottleEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasThrottleEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool driver_override = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getDriverOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setDriverOverride = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearDriverOverride = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasDriverOverride = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool driver_activity = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getDriverActivity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setDriverActivity = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearDriverActivity = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasDriverActivity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool watchdog_fault = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getWatchdogFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setWatchdogFault = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearWatchdogFault = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasWatchdogFault = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool channel_1_fault = 13;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getChannel1Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setChannel1Fault = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearChannel1Fault = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasChannel1Fault = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool channel_2_fault = 14;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getChannel2Fault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setChannel2Fault = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearChannel2Fault = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasChannel2Fault = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool connector_fault = 15;
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.getConnectorFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setConnectorFault = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearConnectorFault = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasConnectorFault = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double accelerator_pedal = 16;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getAcceleratorPedal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setAcceleratorPedal = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearAcceleratorPedal = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasAcceleratorPedal = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional double accelerator_pedal_rate = 17;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getAcceleratorPedalRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setAcceleratorPedalRate = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearAcceleratorPedalRate = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasAcceleratorPedalRate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 major_version = 18;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getMajorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setMajorVersion = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearMajorVersion = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasMajorVersion = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 minor_version = 19;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getMinorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setMinorVersion = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearMinorVersion = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasMinorVersion = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 build_number = 20;
 * @return {number}
 */
proto.apollo.canbus.Gas.prototype.getBuildNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.setBuildNumber = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gas} returns this
 */
proto.apollo.canbus.Gas.prototype.clearBuildNumber = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gas.prototype.hasBuildNumber = function() {
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
proto.apollo.canbus.Esp.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Esp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Esp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Esp.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEspAccError: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isEspOn: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    isEspActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    isAbsError: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    isAbsActive: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    isTcsvdcFail: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    isAbsEnabled: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    isStabActive: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    isStabEnabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    isTracActive: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    isTracEnabled: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esp as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Esp.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isEspAccError;

  /** @type {?|undefined} */
  this.isEspOn;

  /** @type {?|undefined} */
  this.isEspActive;

  /** @type {?|undefined} */
  this.isAbsError;

  /** @type {?|undefined} */
  this.isAbsActive;

  /** @type {?|undefined} */
  this.isTcsvdcFail;

  /** @type {?|undefined} */
  this.isAbsEnabled;

  /** @type {?|undefined} */
  this.isStabActive;

  /** @type {?|undefined} */
  this.isStabEnabled;

  /** @type {?|undefined} */
  this.isTracActive;

  /** @type {?|undefined} */
  this.isTracEnabled;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Esp.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Esp}
 */
proto.apollo.canbus.Esp.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Esp();
  obj.isEspAccError != null && jspb.Message.setField(msg, 1, obj.isEspAccError);
  obj.isEspOn != null && jspb.Message.setField(msg, 2, obj.isEspOn);
  obj.isEspActive != null && jspb.Message.setField(msg, 3, obj.isEspActive);
  obj.isAbsError != null && jspb.Message.setField(msg, 4, obj.isAbsError);
  obj.isAbsActive != null && jspb.Message.setField(msg, 5, obj.isAbsActive);
  obj.isTcsvdcFail != null && jspb.Message.setField(msg, 6, obj.isTcsvdcFail);
  obj.isAbsEnabled != null && jspb.Message.setField(msg, 7, obj.isAbsEnabled);
  obj.isStabActive != null && jspb.Message.setField(msg, 8, obj.isStabActive);
  obj.isStabEnabled != null && jspb.Message.setField(msg, 9, obj.isStabEnabled);
  obj.isTracActive != null && jspb.Message.setField(msg, 10, obj.isTracActive);
  obj.isTracEnabled != null && jspb.Message.setField(msg, 11, obj.isTracEnabled);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Esp}
 */
proto.apollo.canbus.Esp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Esp;
  return proto.apollo.canbus.Esp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Esp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Esp}
 */
proto.apollo.canbus.Esp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEspAccError(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEspOn(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEspActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAbsError(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAbsActive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTcsvdcFail(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAbsEnabled(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStabActive(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStabEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTracActive(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTracEnabled(value);
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
proto.apollo.canbus.Esp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Esp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Esp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Esp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional bool is_esp_acc_error = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsEspAccError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsEspAccError = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsEspAccError = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsEspAccError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_esp_on = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsEspOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsEspOn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsEspOn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsEspOn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_esp_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsEspActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsEspActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsEspActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsEspActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_abs_error = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsAbsError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsAbsError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsAbsError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsAbsError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_abs_active = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsAbsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsAbsActive = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsAbsActive = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsAbsActive = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_tcsvdc_fail = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsTcsvdcFail = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsTcsvdcFail = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsTcsvdcFail = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsTcsvdcFail = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_abs_enabled = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsAbsEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsAbsEnabled = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsAbsEnabled = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsAbsEnabled = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_stab_active = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsStabActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsStabActive = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsStabActive = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsStabActive = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_stab_enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsStabEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsStabEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsStabEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsStabEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_trac_active = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsTracActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsTracActive = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsTracActive = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsTracActive = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool is_trac_enabled = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.getIsTracEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.setIsTracEnabled = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Esp} returns this
 */
proto.apollo.canbus.Esp.prototype.clearIsTracEnabled = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Esp.prototype.hasIsTracEnabled = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.apollo.canbus.Ems.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Ems.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Ems} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Ems.toObject = function(includeInstance, msg) {
  var f, obj = {
    isEngineAccAvailable: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isEngineAccError: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    engineState: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    maxEngineTorqPercent: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    minEngineTorqPercent: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    baseEngineTorqConstant: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    isEngineSpeedError: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    engineSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    engineTorque: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    isOverEngineTorque: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    engineRpm: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Ems as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Ems.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isEngineAccAvailable;

  /** @type {?|undefined} */
  this.isEngineAccError;

  /** @type {?|undefined} */
  this.engineState;

  /** @type {?|undefined} */
  this.maxEngineTorqPercent;

  /** @type {?|undefined} */
  this.minEngineTorqPercent;

  /** @type {?|undefined} */
  this.baseEngineTorqConstant;

  /** @type {?|undefined} */
  this.isEngineSpeedError;

  /** @type {?|undefined} */
  this.engineSpeed;

  /** @type {?|undefined} */
  this.engineTorque;

  /** @type {?|undefined} */
  this.isOverEngineTorque;

  /** @type {?|undefined} */
  this.engineRpm;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Ems.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Ems}
 */
proto.apollo.canbus.Ems.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Ems();
  obj.isEngineAccAvailable != null && jspb.Message.setField(msg, 1, obj.isEngineAccAvailable);
  obj.isEngineAccError != null && jspb.Message.setField(msg, 2, obj.isEngineAccError);
  obj.engineState != null && jspb.Message.setField(msg, 3, obj.engineState);
  obj.maxEngineTorqPercent != null && jspb.Message.setField(msg, 4, obj.maxEngineTorqPercent);
  obj.minEngineTorqPercent != null && jspb.Message.setField(msg, 5, obj.minEngineTorqPercent);
  obj.baseEngineTorqConstant != null && jspb.Message.setField(msg, 6, obj.baseEngineTorqConstant);
  obj.isEngineSpeedError != null && jspb.Message.setField(msg, 7, obj.isEngineSpeedError);
  obj.engineSpeed != null && jspb.Message.setField(msg, 8, obj.engineSpeed);
  obj.engineTorque != null && jspb.Message.setField(msg, 9, obj.engineTorque);
  obj.isOverEngineTorque != null && jspb.Message.setField(msg, 10, obj.isOverEngineTorque);
  obj.engineRpm != null && jspb.Message.setField(msg, 11, obj.engineRpm);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Ems}
 */
proto.apollo.canbus.Ems.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Ems;
  return proto.apollo.canbus.Ems.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Ems} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Ems}
 */
proto.apollo.canbus.Ems.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEngineAccAvailable(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEngineAccError(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Ems.Type} */ (reader.readEnum());
      msg.setEngineState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxEngineTorqPercent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinEngineTorqPercent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaseEngineTorqConstant(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEngineSpeedError(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngineSpeed(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEngineTorque(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOverEngineTorque(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEngineRpm(value);
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
proto.apollo.canbus.Ems.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Ems.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Ems} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Ems.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {!proto.apollo.canbus.Ems.Type} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
    writer.writeInt32(
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
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Ems.Type = {
  STOP: 0,
  CRANK: 1,
  RUNNING: 2,
  INVALID: 3
};

/**
 * optional bool is_engine_acc_available = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.getIsEngineAccAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setIsEngineAccAvailable = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearIsEngineAccAvailable = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasIsEngineAccAvailable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_engine_acc_error = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.getIsEngineAccError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setIsEngineAccError = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearIsEngineAccError = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasIsEngineAccError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Type engine_state = 3;
 * @return {!proto.apollo.canbus.Ems.Type}
 */
proto.apollo.canbus.Ems.prototype.getEngineState = function() {
  return /** @type {!proto.apollo.canbus.Ems.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Ems.Type} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setEngineState = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearEngineState = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasEngineState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double max_engine_torq_percent = 4;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getMaxEngineTorqPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setMaxEngineTorqPercent = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearMaxEngineTorqPercent = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasMaxEngineTorqPercent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double min_engine_torq_percent = 5;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getMinEngineTorqPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setMinEngineTorqPercent = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearMinEngineTorqPercent = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasMinEngineTorqPercent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 base_engine_torq_constant = 6;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getBaseEngineTorqConstant = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setBaseEngineTorqConstant = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearBaseEngineTorqConstant = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasBaseEngineTorqConstant = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_engine_speed_error = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.getIsEngineSpeedError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setIsEngineSpeedError = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearIsEngineSpeedError = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasIsEngineSpeedError = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double engine_speed = 8;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getEngineSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setEngineSpeed = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearEngineSpeed = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasEngineSpeed = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 engine_torque = 9;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getEngineTorque = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setEngineTorque = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearEngineTorque = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasEngineTorque = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_over_engine_torque = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.getIsOverEngineTorque = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setIsOverEngineTorque = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearIsOverEngineTorque = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasIsOverEngineTorque = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double engine_rpm = 11;
 * @return {number}
 */
proto.apollo.canbus.Ems.prototype.getEngineRpm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.setEngineRpm = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Ems} returns this
 */
proto.apollo.canbus.Ems.prototype.clearEngineRpm = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Ems.prototype.hasEngineRpm = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.apollo.canbus.Gear.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Gear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Gear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gear.toObject = function(includeInstance, msg) {
  var f, obj = {
    isShiftPositionValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    gearState: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    driverOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    gearCmd: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canbusFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Gear as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Gear.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isShiftPositionValid;

  /** @type {?|undefined} */
  this.gearState;

  /** @type {?|undefined} */
  this.driverOverride;

  /** @type {?|undefined} */
  this.gearCmd;

  /** @type {?|undefined} */
  this.canbusFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Gear.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Gear}
 */
proto.apollo.canbus.Gear.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Gear();
  obj.isShiftPositionValid != null && jspb.Message.setField(msg, 1, obj.isShiftPositionValid);
  obj.gearState != null && jspb.Message.setField(msg, 2, obj.gearState);
  obj.driverOverride != null && jspb.Message.setField(msg, 3, obj.driverOverride);
  obj.gearCmd != null && jspb.Message.setField(msg, 4, obj.gearCmd);
  obj.canbusFault != null && jspb.Message.setField(msg, 5, obj.canbusFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Gear}
 */
proto.apollo.canbus.Gear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Gear;
  return proto.apollo.canbus.Gear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Gear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Gear}
 */
proto.apollo.canbus.Gear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsShiftPositionValid(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (reader.readEnum());
      msg.setGearState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverOverride(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (reader.readEnum());
      msg.setGearCmd(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanbusFault(value);
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
proto.apollo.canbus.Gear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Gear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Gear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
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
 * optional bool is_shift_position_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.getIsShiftPositionValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.setIsShiftPositionValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.clearIsShiftPositionValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.hasIsShiftPositionValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Chassis.GearPosition gear_state = 2;
 * @return {!proto.apollo.canbus.Chassis.GearPosition}
 */
proto.apollo.canbus.Gear.prototype.getGearState = function() {
  return /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.GearPosition} value
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.setGearState = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.clearGearState = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.hasGearState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool driver_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.getDriverOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.setDriverOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.clearDriverOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.hasDriverOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Chassis.GearPosition gear_cmd = 4;
 * @return {!proto.apollo.canbus.Chassis.GearPosition}
 */
proto.apollo.canbus.Gear.prototype.getGearCmd = function() {
  return /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.GearPosition} value
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.setGearCmd = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.clearGearCmd = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.hasGearCmd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool canbus_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.getCanbusFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.setCanbusFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Gear} returns this
 */
proto.apollo.canbus.Gear.prototype.clearCanbusFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gear.prototype.hasCanbusFault = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.apollo.canbus.Safety.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Safety.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Safety} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Safety.toObject = function(includeInstance, msg) {
  var f, obj = {
    isDriverCarDoorClose: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    isDriverBuckled: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    emergencyButton: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    hasError: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isMotorInvertorFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    isSystemFault: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    isPowerBatteryFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    isMotorInvertorOverTemperature: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    isSmallBatteryChargeDischargeFault: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    drivingMode: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    isPassengerDoorOpen: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    isRearleftDoorOpen: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    isRearrightDoorOpen: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    isHoodOpen: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    isTrunkOpen: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    isPassengerDetected: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    isPassengerAirbagEnabled: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    isPassengerBuckled: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    frontLeftTirePress: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    frontRightTirePress: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    rearLeftTirePress: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    rearRightTirePress: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
    carDrivingMode: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Safety as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Safety.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isDriverCarDoorClose;

  /** @type {?|undefined} */
  this.isDriverBuckled;

  /** @type {?|undefined} */
  this.emergencyButton;

  /** @type {?|undefined} */
  this.hasError;

  /** @type {?|undefined} */
  this.isMotorInvertorFault;

  /** @type {?|undefined} */
  this.isSystemFault;

  /** @type {?|undefined} */
  this.isPowerBatteryFault;

  /** @type {?|undefined} */
  this.isMotorInvertorOverTemperature;

  /** @type {?|undefined} */
  this.isSmallBatteryChargeDischargeFault;

  /** @type {?|undefined} */
  this.drivingMode;

  /** @type {?|undefined} */
  this.isPassengerDoorOpen;

  /** @type {?|undefined} */
  this.isRearleftDoorOpen;

  /** @type {?|undefined} */
  this.isRearrightDoorOpen;

  /** @type {?|undefined} */
  this.isHoodOpen;

  /** @type {?|undefined} */
  this.isTrunkOpen;

  /** @type {?|undefined} */
  this.isPassengerDetected;

  /** @type {?|undefined} */
  this.isPassengerAirbagEnabled;

  /** @type {?|undefined} */
  this.isPassengerBuckled;

  /** @type {?|undefined} */
  this.frontLeftTirePress;

  /** @type {?|undefined} */
  this.frontRightTirePress;

  /** @type {?|undefined} */
  this.rearLeftTirePress;

  /** @type {?|undefined} */
  this.rearRightTirePress;

  /** @type {?|undefined} */
  this.carDrivingMode;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Safety.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Safety}
 */
proto.apollo.canbus.Safety.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Safety();
  obj.isDriverCarDoorClose != null && jspb.Message.setField(msg, 1, obj.isDriverCarDoorClose);
  obj.isDriverBuckled != null && jspb.Message.setField(msg, 2, obj.isDriverBuckled);
  obj.emergencyButton != null && jspb.Message.setField(msg, 3, obj.emergencyButton);
  obj.hasError != null && jspb.Message.setField(msg, 4, obj.hasError);
  obj.isMotorInvertorFault != null && jspb.Message.setField(msg, 5, obj.isMotorInvertorFault);
  obj.isSystemFault != null && jspb.Message.setField(msg, 6, obj.isSystemFault);
  obj.isPowerBatteryFault != null && jspb.Message.setField(msg, 7, obj.isPowerBatteryFault);
  obj.isMotorInvertorOverTemperature != null && jspb.Message.setField(msg, 8, obj.isMotorInvertorOverTemperature);
  obj.isSmallBatteryChargeDischargeFault != null && jspb.Message.setField(msg, 9, obj.isSmallBatteryChargeDischargeFault);
  obj.drivingMode != null && jspb.Message.setField(msg, 10, obj.drivingMode);
  obj.isPassengerDoorOpen != null && jspb.Message.setField(msg, 11, obj.isPassengerDoorOpen);
  obj.isRearleftDoorOpen != null && jspb.Message.setField(msg, 12, obj.isRearleftDoorOpen);
  obj.isRearrightDoorOpen != null && jspb.Message.setField(msg, 13, obj.isRearrightDoorOpen);
  obj.isHoodOpen != null && jspb.Message.setField(msg, 14, obj.isHoodOpen);
  obj.isTrunkOpen != null && jspb.Message.setField(msg, 15, obj.isTrunkOpen);
  obj.isPassengerDetected != null && jspb.Message.setField(msg, 16, obj.isPassengerDetected);
  obj.isPassengerAirbagEnabled != null && jspb.Message.setField(msg, 17, obj.isPassengerAirbagEnabled);
  obj.isPassengerBuckled != null && jspb.Message.setField(msg, 18, obj.isPassengerBuckled);
  obj.frontLeftTirePress != null && jspb.Message.setField(msg, 19, obj.frontLeftTirePress);
  obj.frontRightTirePress != null && jspb.Message.setField(msg, 20, obj.frontRightTirePress);
  obj.rearLeftTirePress != null && jspb.Message.setField(msg, 21, obj.rearLeftTirePress);
  obj.rearRightTirePress != null && jspb.Message.setField(msg, 22, obj.rearRightTirePress);
  obj.carDrivingMode != null && jspb.Message.setField(msg, 23, obj.carDrivingMode);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Safety}
 */
proto.apollo.canbus.Safety.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Safety;
  return proto.apollo.canbus.Safety.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Safety} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Safety}
 */
proto.apollo.canbus.Safety.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDriverCarDoorClose(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDriverBuckled(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmergencyButton(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasError(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMotorInvertorFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSystemFault(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPowerBatteryFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMotorInvertorOverTemperature(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSmallBatteryChargeDischargeFault(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDrivingMode(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPassengerDoorOpen(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRearleftDoorOpen(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRearrightDoorOpen(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHoodOpen(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTrunkOpen(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPassengerDetected(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPassengerAirbagEnabled(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPassengerBuckled(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFrontLeftTirePress(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFrontRightTirePress(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRearLeftTirePress(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRearRightTirePress(value);
      break;
    case 23:
      var value = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (reader.readEnum());
      msg.setCarDrivingMode(value);
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
proto.apollo.canbus.Safety.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Safety.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Safety} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Safety.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
    writer.writeInt32(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
};


/**
 * optional bool is_driver_car_door_close = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsDriverCarDoorClose = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsDriverCarDoorClose = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsDriverCarDoorClose = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsDriverCarDoorClose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_driver_buckled = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsDriverBuckled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsDriverBuckled = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsDriverBuckled = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsDriverBuckled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 emergency_button = 3;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getEmergencyButton = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setEmergencyButton = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearEmergencyButton = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasEmergencyButton = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool has_error = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getHasError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setHasError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearHasError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasHasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_motor_invertor_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsMotorInvertorFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsMotorInvertorFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsMotorInvertorFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsMotorInvertorFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_system_fault = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsSystemFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsSystemFault = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsSystemFault = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsSystemFault = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_power_battery_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsPowerBatteryFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsPowerBatteryFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsPowerBatteryFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsPowerBatteryFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_motor_invertor_over_temperature = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsMotorInvertorOverTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsMotorInvertorOverTemperature = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsMotorInvertorOverTemperature = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsMotorInvertorOverTemperature = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_small_battery_charge_discharge_fault = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsSmallBatteryChargeDischargeFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsSmallBatteryChargeDischargeFault = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsSmallBatteryChargeDischargeFault = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsSmallBatteryChargeDischargeFault = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 driving_mode = 10;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getDrivingMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setDrivingMode = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearDrivingMode = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasDrivingMode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool is_passenger_door_open = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsPassengerDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsPassengerDoorOpen = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsPassengerDoorOpen = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsPassengerDoorOpen = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool is_rearleft_door_open = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsRearleftDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsRearleftDoorOpen = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsRearleftDoorOpen = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsRearleftDoorOpen = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool is_rearright_door_open = 13;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsRearrightDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsRearrightDoorOpen = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsRearrightDoorOpen = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsRearrightDoorOpen = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool is_hood_open = 14;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsHoodOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsHoodOpen = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsHoodOpen = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsHoodOpen = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool is_trunk_open = 15;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsTrunkOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsTrunkOpen = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsTrunkOpen = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsTrunkOpen = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool is_passenger_detected = 16;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsPassengerDetected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsPassengerDetected = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsPassengerDetected = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsPassengerDetected = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool is_passenger_airbag_enabled = 17;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsPassengerAirbagEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsPassengerAirbagEnabled = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsPassengerAirbagEnabled = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsPassengerAirbagEnabled = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool is_passenger_buckled = 18;
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.getIsPassengerBuckled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setIsPassengerBuckled = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearIsPassengerBuckled = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasIsPassengerBuckled = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 front_left_tire_press = 19;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getFrontLeftTirePress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setFrontLeftTirePress = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearFrontLeftTirePress = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasFrontLeftTirePress = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 front_right_tire_press = 20;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getFrontRightTirePress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setFrontRightTirePress = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearFrontRightTirePress = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasFrontRightTirePress = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int32 rear_left_tire_press = 21;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getRearLeftTirePress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setRearLeftTirePress = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearRearLeftTirePress = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasRearLeftTirePress = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional int32 rear_right_tire_press = 22;
 * @return {number}
 */
proto.apollo.canbus.Safety.prototype.getRearRightTirePress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setRearRightTirePress = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearRearRightTirePress = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasRearRightTirePress = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Chassis.DrivingMode car_driving_mode = 23;
 * @return {!proto.apollo.canbus.Chassis.DrivingMode}
 */
proto.apollo.canbus.Safety.prototype.getCarDrivingMode = function() {
  return /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.DrivingMode} value
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.setCarDrivingMode = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Safety} returns this
 */
proto.apollo.canbus.Safety.prototype.clearCarDrivingMode = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Safety.prototype.hasCarDrivingMode = function() {
  return jspb.Message.getField(this, 23) != null;
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
proto.apollo.canbus.BasicInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.BasicInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.BasicInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.BasicInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAutoMode: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    powerState: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    isAirBagDeployed: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    odoMeter: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    driveRange: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    isSystemError: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    isHumanInterrupt: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    accOnButton: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    accOffButton: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    accResButton: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    accCancelButton: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    accOnOffButton: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    accResCancelButton: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    accIncSpdButton: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    accDecSpdButton: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    accIncGapButton: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    accDecGapButton: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    lkaButton: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    canbusFault: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
    latitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 20)) == null ? undefined : f,
    longitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 21)) == null ? undefined : f,
    gpsValid: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
    year: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    month: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    day: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    hours: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    minutes: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    seconds: (f = jspb.Message.getField(msg, 28)) == null ? undefined : f,
    compassDirection: (f = jspb.Message.getOptionalFloatingPointField(msg, 29)) == null ? undefined : f,
    pdop: (f = jspb.Message.getOptionalFloatingPointField(msg, 30)) == null ? undefined : f,
    isGpsFault: (f = jspb.Message.getBooleanField(msg, 31)) == null ? undefined : f,
    isInferred: (f = jspb.Message.getBooleanField(msg, 32)) == null ? undefined : f,
    altitude: (f = jspb.Message.getOptionalFloatingPointField(msg, 33)) == null ? undefined : f,
    heading: (f = jspb.Message.getOptionalFloatingPointField(msg, 34)) == null ? undefined : f,
    hdop: (f = jspb.Message.getOptionalFloatingPointField(msg, 35)) == null ? undefined : f,
    vdop: (f = jspb.Message.getOptionalFloatingPointField(msg, 36)) == null ? undefined : f,
    quality: (f = jspb.Message.getField(msg, 37)) == null ? undefined : f,
    numSatellites: (f = jspb.Message.getField(msg, 38)) == null ? undefined : f,
    gpsSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 39)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of BasicInfo as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.BasicInfo.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.isAutoMode;

  /** @type {?|undefined} */
  this.powerState;

  /** @type {?|undefined} */
  this.isAirBagDeployed;

  /** @type {?|undefined} */
  this.odoMeter;

  /** @type {?|undefined} */
  this.driveRange;

  /** @type {?|undefined} */
  this.isSystemError;

  /** @type {?|undefined} */
  this.isHumanInterrupt;

  /** @type {?|undefined} */
  this.accOnButton;

  /** @type {?|undefined} */
  this.accOffButton;

  /** @type {?|undefined} */
  this.accResButton;

  /** @type {?|undefined} */
  this.accCancelButton;

  /** @type {?|undefined} */
  this.accOnOffButton;

  /** @type {?|undefined} */
  this.accResCancelButton;

  /** @type {?|undefined} */
  this.accIncSpdButton;

  /** @type {?|undefined} */
  this.accDecSpdButton;

  /** @type {?|undefined} */
  this.accIncGapButton;

  /** @type {?|undefined} */
  this.accDecGapButton;

  /** @type {?|undefined} */
  this.lkaButton;

  /** @type {?|undefined} */
  this.canbusFault;

  /** @type {?|undefined} */
  this.latitude;

  /** @type {?|undefined} */
  this.longitude;

  /** @type {?|undefined} */
  this.gpsValid;

  /** @type {?|undefined} */
  this.year;

  /** @type {?|undefined} */
  this.month;

  /** @type {?|undefined} */
  this.day;

  /** @type {?|undefined} */
  this.hours;

  /** @type {?|undefined} */
  this.minutes;

  /** @type {?|undefined} */
  this.seconds;

  /** @type {?|undefined} */
  this.compassDirection;

  /** @type {?|undefined} */
  this.pdop;

  /** @type {?|undefined} */
  this.isGpsFault;

  /** @type {?|undefined} */
  this.isInferred;

  /** @type {?|undefined} */
  this.altitude;

  /** @type {?|undefined} */
  this.heading;

  /** @type {?|undefined} */
  this.hdop;

  /** @type {?|undefined} */
  this.vdop;

  /** @type {?|undefined} */
  this.quality;

  /** @type {?|undefined} */
  this.numSatellites;

  /** @type {?|undefined} */
  this.gpsSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.BasicInfo.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.BasicInfo}
 */
proto.apollo.canbus.BasicInfo.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.BasicInfo();
  obj.isAutoMode != null && jspb.Message.setField(msg, 1, obj.isAutoMode);
  obj.powerState != null && jspb.Message.setField(msg, 2, obj.powerState);
  obj.isAirBagDeployed != null && jspb.Message.setField(msg, 3, obj.isAirBagDeployed);
  obj.odoMeter != null && jspb.Message.setField(msg, 4, obj.odoMeter);
  obj.driveRange != null && jspb.Message.setField(msg, 5, obj.driveRange);
  obj.isSystemError != null && jspb.Message.setField(msg, 6, obj.isSystemError);
  obj.isHumanInterrupt != null && jspb.Message.setField(msg, 7, obj.isHumanInterrupt);
  obj.accOnButton != null && jspb.Message.setField(msg, 8, obj.accOnButton);
  obj.accOffButton != null && jspb.Message.setField(msg, 9, obj.accOffButton);
  obj.accResButton != null && jspb.Message.setField(msg, 10, obj.accResButton);
  obj.accCancelButton != null && jspb.Message.setField(msg, 11, obj.accCancelButton);
  obj.accOnOffButton != null && jspb.Message.setField(msg, 12, obj.accOnOffButton);
  obj.accResCancelButton != null && jspb.Message.setField(msg, 13, obj.accResCancelButton);
  obj.accIncSpdButton != null && jspb.Message.setField(msg, 14, obj.accIncSpdButton);
  obj.accDecSpdButton != null && jspb.Message.setField(msg, 15, obj.accDecSpdButton);
  obj.accIncGapButton != null && jspb.Message.setField(msg, 16, obj.accIncGapButton);
  obj.accDecGapButton != null && jspb.Message.setField(msg, 17, obj.accDecGapButton);
  obj.lkaButton != null && jspb.Message.setField(msg, 18, obj.lkaButton);
  obj.canbusFault != null && jspb.Message.setField(msg, 19, obj.canbusFault);
  obj.latitude != null && jspb.Message.setField(msg, 20, obj.latitude);
  obj.longitude != null && jspb.Message.setField(msg, 21, obj.longitude);
  obj.gpsValid != null && jspb.Message.setField(msg, 22, obj.gpsValid);
  obj.year != null && jspb.Message.setField(msg, 23, obj.year);
  obj.month != null && jspb.Message.setField(msg, 24, obj.month);
  obj.day != null && jspb.Message.setField(msg, 25, obj.day);
  obj.hours != null && jspb.Message.setField(msg, 26, obj.hours);
  obj.minutes != null && jspb.Message.setField(msg, 27, obj.minutes);
  obj.seconds != null && jspb.Message.setField(msg, 28, obj.seconds);
  obj.compassDirection != null && jspb.Message.setField(msg, 29, obj.compassDirection);
  obj.pdop != null && jspb.Message.setField(msg, 30, obj.pdop);
  obj.isGpsFault != null && jspb.Message.setField(msg, 31, obj.isGpsFault);
  obj.isInferred != null && jspb.Message.setField(msg, 32, obj.isInferred);
  obj.altitude != null && jspb.Message.setField(msg, 33, obj.altitude);
  obj.heading != null && jspb.Message.setField(msg, 34, obj.heading);
  obj.hdop != null && jspb.Message.setField(msg, 35, obj.hdop);
  obj.vdop != null && jspb.Message.setField(msg, 36, obj.vdop);
  obj.quality != null && jspb.Message.setField(msg, 37, obj.quality);
  obj.numSatellites != null && jspb.Message.setField(msg, 38, obj.numSatellites);
  obj.gpsSpeed != null && jspb.Message.setField(msg, 39, obj.gpsSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.BasicInfo}
 */
proto.apollo.canbus.BasicInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.BasicInfo;
  return proto.apollo.canbus.BasicInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.BasicInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.BasicInfo}
 */
proto.apollo.canbus.BasicInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAutoMode(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.BasicInfo.Type} */ (reader.readEnum());
      msg.setPowerState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAirBagDeployed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOdoMeter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDriveRange(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSystemError(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHumanInterrupt(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccOnButton(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccOffButton(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccResButton(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccCancelButton(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccOnOffButton(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccResCancelButton(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccIncSpdButton(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccDecSpdButton(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccIncGapButton(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccDecGapButton(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLkaButton(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanbusFault(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGpsValid(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHours(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutes(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCompassDirection(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPdop(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGpsFault(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsInferred(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAltitude(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHdop(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVdop(value);
      break;
    case 37:
      var value = /** @type {!proto.apollo.canbus.GpsQuality} */ (reader.readEnum());
      msg.setQuality(value);
      break;
    case 38:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumSatellites(value);
      break;
    case 39:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGpsSpeed(value);
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
proto.apollo.canbus.BasicInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.BasicInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.BasicInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.BasicInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.BasicInfo.Type} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeInt32(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeInt32(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeDouble(
      29,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeDouble(
      30,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeBool(
      31,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeBool(
      32,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeDouble(
      33,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeDouble(
      34,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 35));
  if (f != null) {
    writer.writeDouble(
      35,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 36));
  if (f != null) {
    writer.writeDouble(
      36,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.GpsQuality} */ (jspb.Message.getField(message, 37));
  if (f != null) {
    writer.writeEnum(
      37,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 38));
  if (f != null) {
    writer.writeInt32(
      38,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeDouble(
      39,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.BasicInfo.Type = {
  OFF: 0,
  ACC: 1,
  ON: 2,
  START: 3,
  INVALID: 4
};

/**
 * optional bool is_auto_mode = 1;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsAutoMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsAutoMode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsAutoMode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsAutoMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Type power_state = 2;
 * @return {!proto.apollo.canbus.BasicInfo.Type}
 */
proto.apollo.canbus.BasicInfo.prototype.getPowerState = function() {
  return /** @type {!proto.apollo.canbus.BasicInfo.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.BasicInfo.Type} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setPowerState = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearPowerState = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasPowerState = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_air_bag_deployed = 3;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsAirBagDeployed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsAirBagDeployed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsAirBagDeployed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsAirBagDeployed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double odo_meter = 4;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getOdoMeter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setOdoMeter = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearOdoMeter = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasOdoMeter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double drive_range = 5;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getDriveRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setDriveRange = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearDriveRange = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasDriveRange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_system_error = 6;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsSystemError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsSystemError = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsSystemError = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsSystemError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_human_interrupt = 7;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsHumanInterrupt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsHumanInterrupt = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsHumanInterrupt = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsHumanInterrupt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool acc_on_button = 8;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccOnButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccOnButton = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccOnButton = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccOnButton = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool acc_off_button = 9;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccOffButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccOffButton = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccOffButton = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccOffButton = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool acc_res_button = 10;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccResButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccResButton = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccResButton = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccResButton = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool acc_cancel_button = 11;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccCancelButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccCancelButton = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccCancelButton = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccCancelButton = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool acc_on_off_button = 12;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccOnOffButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccOnOffButton = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccOnOffButton = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccOnOffButton = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool acc_res_cancel_button = 13;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccResCancelButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccResCancelButton = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccResCancelButton = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccResCancelButton = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool acc_inc_spd_button = 14;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccIncSpdButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccIncSpdButton = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccIncSpdButton = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccIncSpdButton = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool acc_dec_spd_button = 15;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccDecSpdButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccDecSpdButton = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccDecSpdButton = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccDecSpdButton = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool acc_inc_gap_button = 16;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccIncGapButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccIncGapButton = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccIncGapButton = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccIncGapButton = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool acc_dec_gap_button = 17;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getAccDecGapButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAccDecGapButton = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAccDecGapButton = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAccDecGapButton = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool lka_button = 18;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getLkaButton = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setLkaButton = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearLkaButton = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasLkaButton = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool canbus_fault = 19;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getCanbusFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setCanbusFault = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearCanbusFault = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasCanbusFault = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional double latitude = 20;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setLatitude = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearLatitude = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasLatitude = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional double longitude = 21;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setLongitude = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearLongitude = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasLongitude = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool gps_valid = 22;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getGpsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setGpsValid = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearGpsValid = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasGpsValid = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional int32 year = 23;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearYear = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasYear = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional int32 month = 24;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional int32 day = 25;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setDay = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearDay = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasDay = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int32 hours = 26;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setHours = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearHours = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasHours = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional int32 minutes = 27;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setMinutes = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearMinutes = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasMinutes = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional int32 seconds = 28;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setSeconds = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearSeconds = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional double compass_direction = 29;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getCompassDirection = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setCompassDirection = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearCompassDirection = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasCompassDirection = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional double pdop = 30;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getPdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 30, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setPdop = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearPdop = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasPdop = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional bool is_gps_fault = 31;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsGpsFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 31, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsGpsFault = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsGpsFault = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsGpsFault = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional bool is_inferred = 32;
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.getIsInferred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setIsInferred = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearIsInferred = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasIsInferred = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional double altitude = 33;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 33, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setAltitude = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearAltitude = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasAltitude = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional double heading = 34;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 34, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional double hdop = 35;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getHdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 35, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setHdop = function(value) {
  return jspb.Message.setField(this, 35, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearHdop = function() {
  return jspb.Message.setField(this, 35, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasHdop = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional double vdop = 36;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getVdop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 36, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setVdop = function(value) {
  return jspb.Message.setField(this, 36, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearVdop = function() {
  return jspb.Message.setField(this, 36, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasVdop = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional GpsQuality quality = 37;
 * @return {!proto.apollo.canbus.GpsQuality}
 */
proto.apollo.canbus.BasicInfo.prototype.getQuality = function() {
  return /** @type {!proto.apollo.canbus.GpsQuality} */ (jspb.Message.getFieldWithDefault(this, 37, 0));
};


/**
 * @param {!proto.apollo.canbus.GpsQuality} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setQuality = function(value) {
  return jspb.Message.setField(this, 37, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearQuality = function() {
  return jspb.Message.setField(this, 37, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasQuality = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional int32 num_satellites = 38;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getNumSatellites = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setNumSatellites = function(value) {
  return jspb.Message.setField(this, 38, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearNumSatellites = function() {
  return jspb.Message.setField(this, 38, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasNumSatellites = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional double gps_speed = 39;
 * @return {number}
 */
proto.apollo.canbus.BasicInfo.prototype.getGpsSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 39, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.setGpsSpeed = function(value) {
  return jspb.Message.setField(this, 39, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.BasicInfo} returns this
 */
proto.apollo.canbus.BasicInfo.prototype.clearGpsSpeed = function() {
  return jspb.Message.setField(this, 39, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.BasicInfo.prototype.hasGpsSpeed = function() {
  return jspb.Message.getField(this, 39) != null;
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
proto.apollo.canbus.Global_rpt_6a.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Global_rpt_6a.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Global_rpt_6a} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_rpt_6a.toObject = function(includeInstance, msg) {
  var f, obj = {
    pacmodStatus: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    overrideStatus: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    vehCanTimeout: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    strCanTimeout: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    brkCanTimeout: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    usrCanTimeout: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    usrCanReadErrors: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Global_rpt_6a as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Global_rpt_6a.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pacmodStatus;

  /** @type {?|undefined} */
  this.overrideStatus;

  /** @type {?|undefined} */
  this.vehCanTimeout;

  /** @type {?|undefined} */
  this.strCanTimeout;

  /** @type {?|undefined} */
  this.brkCanTimeout;

  /** @type {?|undefined} */
  this.usrCanTimeout;

  /** @type {?|undefined} */
  this.usrCanReadErrors;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Global_rpt_6a.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Global_rpt_6a}
 */
proto.apollo.canbus.Global_rpt_6a.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Global_rpt_6a();
  obj.pacmodStatus != null && jspb.Message.setField(msg, 1, obj.pacmodStatus);
  obj.overrideStatus != null && jspb.Message.setField(msg, 2, obj.overrideStatus);
  obj.vehCanTimeout != null && jspb.Message.setField(msg, 3, obj.vehCanTimeout);
  obj.strCanTimeout != null && jspb.Message.setField(msg, 4, obj.strCanTimeout);
  obj.brkCanTimeout != null && jspb.Message.setField(msg, 5, obj.brkCanTimeout);
  obj.usrCanTimeout != null && jspb.Message.setField(msg, 6, obj.usrCanTimeout);
  obj.usrCanReadErrors != null && jspb.Message.setField(msg, 7, obj.usrCanReadErrors);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Global_rpt_6a}
 */
proto.apollo.canbus.Global_rpt_6a.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Global_rpt_6a;
  return proto.apollo.canbus.Global_rpt_6a.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Global_rpt_6a} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Global_rpt_6a}
 */
proto.apollo.canbus.Global_rpt_6a.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType} */ (reader.readEnum());
      msg.setPacmodStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_6a.Override_statusType} */ (reader.readEnum());
      msg.setOverrideStatus(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehCanTimeout(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStrCanTimeout(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType} */ (reader.readEnum());
      msg.setBrkCanTimeout(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsrCanTimeout(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUsrCanReadErrors(value);
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
proto.apollo.canbus.Global_rpt_6a.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Global_rpt_6a.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Global_rpt_6a} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_rpt_6a.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Global_rpt_6a.Override_statusType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
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
  f = /** @type {!proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType = {
  PACMOD_STATUS_CONTROL_DISABLED: 0,
  PACMOD_STATUS_CONTROL_ENABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_6a.Override_statusType = {
  OVERRIDE_STATUS_NOT_OVERRIDDEN: 0,
  OVERRIDE_STATUS_OVERRIDDEN: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType = {
  BRK_CAN_TIMEOUT_NO_ACTIVE_CAN_TIMEOUT: 0,
  BRK_CAN_TIMEOUT_ACTIVE_CAN_TIMEOUT: 1
};

/**
 * optional Pacmod_statusType pacmod_status = 1;
 * @return {!proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getPacmodStatus = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_6a.Pacmod_statusType} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setPacmodStatus = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearPacmodStatus = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasPacmodStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Override_statusType override_status = 2;
 * @return {!proto.apollo.canbus.Global_rpt_6a.Override_statusType}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getOverrideStatus = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_6a.Override_statusType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_6a.Override_statusType} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setOverrideStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearOverrideStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasOverrideStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool veh_can_timeout = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getVehCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setVehCanTimeout = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearVehCanTimeout = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasVehCanTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool str_can_timeout = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getStrCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setStrCanTimeout = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearStrCanTimeout = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasStrCanTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Brk_can_timeoutType brk_can_timeout = 5;
 * @return {!proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getBrkCanTimeout = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_6a.Brk_can_timeoutType} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setBrkCanTimeout = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearBrkCanTimeout = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasBrkCanTimeout = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool usr_can_timeout = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getUsrCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setUsrCanTimeout = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearUsrCanTimeout = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasUsrCanTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 usr_can_read_errors = 7;
 * @return {number}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.getUsrCanReadErrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.setUsrCanReadErrors = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_6a} returns this
 */
proto.apollo.canbus.Global_rpt_6a.prototype.clearUsrCanReadErrors = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_6a.prototype.hasUsrCanReadErrors = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.apollo.canbus.Brake_cmd_6b.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_cmd_6b.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_cmd_6b} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_cmd_6b.toObject = function(includeInstance, msg) {
  var f, obj = {
    brakeCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_cmd_6b as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_cmd_6b.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.brakeCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_cmd_6b.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_cmd_6b}
 */
proto.apollo.canbus.Brake_cmd_6b.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_cmd_6b();
  obj.brakeCmd != null && jspb.Message.setField(msg, 1, obj.brakeCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_cmd_6b}
 */
proto.apollo.canbus.Brake_cmd_6b.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_cmd_6b;
  return proto.apollo.canbus.Brake_cmd_6b.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_cmd_6b} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_cmd_6b}
 */
proto.apollo.canbus.Brake_cmd_6b.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrakeCmd(value);
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
proto.apollo.canbus.Brake_cmd_6b.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_cmd_6b.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_cmd_6b} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_cmd_6b.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double brake_cmd = 1;
 * @return {number}
 */
proto.apollo.canbus.Brake_cmd_6b.prototype.getBrakeCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_cmd_6b} returns this
 */
proto.apollo.canbus.Brake_cmd_6b.prototype.setBrakeCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_6b} returns this
 */
proto.apollo.canbus.Brake_cmd_6b.prototype.clearBrakeCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_6b.prototype.hasBrakeCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Brake_rpt_6c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_rpt_6c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_rpt_6c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_rpt_6c.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    brakeOnOff: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_rpt_6c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_rpt_6c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.brakeOnOff;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_rpt_6c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_rpt_6c}
 */
proto.apollo.canbus.Brake_rpt_6c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_rpt_6c();
  obj.manualInput != null && jspb.Message.setField(msg, 1, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 3, obj.outputValue);
  obj.brakeOnOff != null && jspb.Message.setField(msg, 4, obj.brakeOnOff);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_rpt_6c}
 */
proto.apollo.canbus.Brake_rpt_6c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_rpt_6c;
  return proto.apollo.canbus.Brake_rpt_6c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_rpt_6c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_rpt_6c}
 */
proto.apollo.canbus.Brake_rpt_6c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutputValue(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType} */ (reader.readEnum());
      msg.setBrakeOnOff(value);
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
proto.apollo.canbus.Brake_rpt_6c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_rpt_6c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_rpt_6c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_rpt_6c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType = {
  BRAKE_ON_OFF_OFF: 0,
  BRAKE_ON_OFF_ON: 1
};

/**
 * optional double manual_input = 1;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double commanded_value = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double output_value = 3;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Brake_on_offType brake_on_off = 4;
 * @return {!proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.getBrakeOnOff = function() {
  return /** @type {!proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Brake_rpt_6c.Brake_on_offType} value
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.setBrakeOnOff = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_6c} returns this
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.clearBrakeOnOff = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_6c.prototype.hasBrakeOnOff = function() {
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
proto.apollo.canbus.Steering_cmd_6d.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_cmd_6d.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_cmd_6d} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_cmd_6d.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    speedLimit: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_cmd_6d as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_cmd_6d.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.positionValue;

  /** @type {?|undefined} */
  this.speedLimit;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_cmd_6d.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_cmd_6d}
 */
proto.apollo.canbus.Steering_cmd_6d.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_cmd_6d();
  obj.positionValue != null && jspb.Message.setField(msg, 1, obj.positionValue);
  obj.speedLimit != null && jspb.Message.setField(msg, 2, obj.speedLimit);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_cmd_6d}
 */
proto.apollo.canbus.Steering_cmd_6d.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_cmd_6d;
  return proto.apollo.canbus.Steering_cmd_6d.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_cmd_6d} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_cmd_6d}
 */
proto.apollo.canbus.Steering_cmd_6d.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeedLimit(value);
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
proto.apollo.canbus.Steering_cmd_6d.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_cmd_6d.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_cmd_6d} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_cmd_6d.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double position_value = 1;
 * @return {number}
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.getPositionValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_cmd_6d} returns this
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.setPositionValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_6d} returns this
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.clearPositionValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.hasPositionValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double speed_limit = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.getSpeedLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_cmd_6d} returns this
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.setSpeedLimit = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_6d} returns this
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.clearSpeedLimit = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_6d.prototype.hasSpeedLimit = function() {
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
proto.apollo.canbus.Steering_rpt_1_6e.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_rpt_1_6e.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_rpt_1_6e} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_rpt_1_6e.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_rpt_1_6e as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_rpt_1_6e.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_rpt_1_6e.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e}
 */
proto.apollo.canbus.Steering_rpt_1_6e.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_rpt_1_6e();
  obj.manualInput != null && jspb.Message.setField(msg, 1, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 3, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e}
 */
proto.apollo.canbus.Steering_rpt_1_6e.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_rpt_1_6e;
  return proto.apollo.canbus.Steering_rpt_1_6e.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_rpt_1_6e} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e}
 */
proto.apollo.canbus.Steering_rpt_1_6e.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutputValue(value);
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
proto.apollo.canbus.Steering_rpt_1_6e.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_rpt_1_6e.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_rpt_1_6e} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_rpt_1_6e.serializeBinaryToWriter = function(message, writer) {
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
 * optional double manual_input = 1;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double commanded_value = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double output_value = 3;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_1_6e} returns this
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_1_6e.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wheel_speed_rpt_7a.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_7a} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.toObject = function(includeInstance, msg) {
  var f, obj = {
    wheelSpdRearRight: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    wheelSpdRearLeft: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    wheelSpdFrontRight: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    wheelSpdFrontLeft: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wheel_speed_rpt_7a as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.wheelSpdRearRight;

  /** @type {?|undefined} */
  this.wheelSpdRearLeft;

  /** @type {?|undefined} */
  this.wheelSpdFrontRight;

  /** @type {?|undefined} */
  this.wheelSpdFrontLeft;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_7a.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wheel_speed_rpt_7a();
  obj.wheelSpdRearRight != null && jspb.Message.setField(msg, 1, obj.wheelSpdRearRight);
  obj.wheelSpdRearLeft != null && jspb.Message.setField(msg, 2, obj.wheelSpdRearLeft);
  obj.wheelSpdFrontRight != null && jspb.Message.setField(msg, 3, obj.wheelSpdFrontRight);
  obj.wheelSpdFrontLeft != null && jspb.Message.setField(msg, 4, obj.wheelSpdFrontLeft);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wheel_speed_rpt_7a;
  return proto.apollo.canbus.Wheel_speed_rpt_7a.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_7a} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWheelSpdRearRight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWheelSpdRearLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWheelSpdFrontRight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWheelSpdFrontLeft(value);
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
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wheel_speed_rpt_7a.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_7a} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 wheel_spd_rear_right = 1;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.getWheelSpdRearRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.setWheelSpdRearRight = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.clearWheelSpdRearRight = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.hasWheelSpdRearRight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 wheel_spd_rear_left = 2;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.getWheelSpdRearLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.setWheelSpdRearLeft = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.clearWheelSpdRearLeft = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.hasWheelSpdRearLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 wheel_spd_front_right = 3;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.getWheelSpdFrontRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.setWheelSpdFrontRight = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.clearWheelSpdFrontRight = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.hasWheelSpdFrontRight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 wheel_spd_front_left = 4;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.getWheelSpdFrontLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.setWheelSpdFrontLeft = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_7a} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.clearWheelSpdFrontLeft = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_7a.prototype.hasWheelSpdFrontLeft = function() {
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
proto.apollo.canbus.Date_time_rpt_83.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Date_time_rpt_83.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Date_time_rpt_83} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Date_time_rpt_83.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeSecond: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    timeMinute: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    timeHour: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    dateDay: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    dateMonth: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    dateYear: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Date_time_rpt_83 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Date_time_rpt_83.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.timeSecond;

  /** @type {?|undefined} */
  this.timeMinute;

  /** @type {?|undefined} */
  this.timeHour;

  /** @type {?|undefined} */
  this.dateDay;

  /** @type {?|undefined} */
  this.dateMonth;

  /** @type {?|undefined} */
  this.dateYear;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Date_time_rpt_83.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Date_time_rpt_83}
 */
proto.apollo.canbus.Date_time_rpt_83.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Date_time_rpt_83();
  obj.timeSecond != null && jspb.Message.setField(msg, 1, obj.timeSecond);
  obj.timeMinute != null && jspb.Message.setField(msg, 2, obj.timeMinute);
  obj.timeHour != null && jspb.Message.setField(msg, 3, obj.timeHour);
  obj.dateDay != null && jspb.Message.setField(msg, 4, obj.dateDay);
  obj.dateMonth != null && jspb.Message.setField(msg, 5, obj.dateMonth);
  obj.dateYear != null && jspb.Message.setField(msg, 6, obj.dateYear);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Date_time_rpt_83}
 */
proto.apollo.canbus.Date_time_rpt_83.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Date_time_rpt_83;
  return proto.apollo.canbus.Date_time_rpt_83.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Date_time_rpt_83} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Date_time_rpt_83}
 */
proto.apollo.canbus.Date_time_rpt_83.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeSecond(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeMinute(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeHour(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDateDay(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDateMonth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDateYear(value);
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
proto.apollo.canbus.Date_time_rpt_83.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Date_time_rpt_83.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Date_time_rpt_83} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Date_time_rpt_83.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 time_second = 1;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getTimeSecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setTimeSecond = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearTimeSecond = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasTimeSecond = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 time_minute = 2;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getTimeMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setTimeMinute = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearTimeMinute = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasTimeMinute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 time_hour = 3;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setTimeHour = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearTimeHour = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasTimeHour = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 date_day = 4;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getDateDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setDateDay = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearDateDay = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasDateDay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 date_month = 5;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getDateMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setDateMonth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearDateMonth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasDateMonth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 date_year = 6;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.getDateYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.setDateYear = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_83} returns this
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.clearDateYear = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_83.prototype.hasDateYear = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_1_70.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_70} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.toObject = function(includeInstance, msg) {
  var f, obj = {
    motorCurrent: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    shaftPosition: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_motor_rpt_1_70 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.motorCurrent;

  /** @type {?|undefined} */
  this.shaftPosition;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_70.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_1_70();
  obj.motorCurrent != null && jspb.Message.setField(msg, 1, obj.motorCurrent);
  obj.shaftPosition != null && jspb.Message.setField(msg, 2, obj.shaftPosition);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_1_70;
  return proto.apollo.canbus.Brake_motor_rpt_1_70.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_70} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMotorCurrent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShaftPosition(value);
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
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_1_70.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_70} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double motor_current = 1;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.getMotorCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.setMotorCurrent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.clearMotorCurrent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.hasMotorCurrent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double shaft_position = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.getShaftPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.setShaftPosition = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_70} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.clearShaftPosition = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_1_70.prototype.hasShaftPosition = function() {
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
proto.apollo.canbus.Headlight_rpt_77.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Headlight_rpt_77.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Headlight_rpt_77} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_rpt_77.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Headlight_rpt_77 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Headlight_rpt_77.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Headlight_rpt_77.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Headlight_rpt_77}
 */
proto.apollo.canbus.Headlight_rpt_77.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Headlight_rpt_77();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.manualInput != null && jspb.Message.setField(msg, 2, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 3, obj.commandedValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Headlight_rpt_77}
 */
proto.apollo.canbus.Headlight_rpt_77.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Headlight_rpt_77;
  return proto.apollo.canbus.Headlight_rpt_77.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Headlight_rpt_77} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Headlight_rpt_77}
 */
proto.apollo.canbus.Headlight_rpt_77.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
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
proto.apollo.canbus.Headlight_rpt_77.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Headlight_rpt_77.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Headlight_rpt_77} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_rpt_77.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Manual_inputType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Headlight_rpt_77.Output_valueType = {
  OUTPUT_VALUE_HEADLIGHTS_OFF: 0,
  OUTPUT_VALUE_LOW_BEAMS: 1,
  OUTPUT_VALUE_HIGH_BEAMS: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_rpt_77.Manual_inputType = {
  MANUAL_INPUT_HEADLIGHTS_OFF: 0,
  MANUAL_INPUT_LOW_BEAMS: 1,
  MANUAL_INPUT_HIGH_BEAMS: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType = {
  COMMANDED_VALUE_HEADLIGHTS_OFF: 0,
  COMMANDED_VALUE_LOW_BEAMS: 1,
  COMMANDED_VALUE_HIGH_BEAMS: 2
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Headlight_rpt_77.Output_valueType}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_77.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_77.Output_valueType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Manual_inputType manual_input = 2;
 * @return {!proto.apollo.canbus.Headlight_rpt_77.Manual_inputType}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_77.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_77.Manual_inputType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Commanded_valueType commanded_value = 3;
 * @return {!proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_77.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_77} returns this
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_77.prototype.hasCommandedValue = function() {
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
proto.apollo.canbus.Accel_rpt_68.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Accel_rpt_68.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Accel_rpt_68} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_rpt_68.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Accel_rpt_68 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Accel_rpt_68.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Accel_rpt_68.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Accel_rpt_68}
 */
proto.apollo.canbus.Accel_rpt_68.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Accel_rpt_68();
  obj.manualInput != null && jspb.Message.setField(msg, 1, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 3, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Accel_rpt_68}
 */
proto.apollo.canbus.Accel_rpt_68.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Accel_rpt_68;
  return proto.apollo.canbus.Accel_rpt_68.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Accel_rpt_68} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Accel_rpt_68}
 */
proto.apollo.canbus.Accel_rpt_68.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOutputValue(value);
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
proto.apollo.canbus.Accel_rpt_68.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Accel_rpt_68.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Accel_rpt_68} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_rpt_68.serializeBinaryToWriter = function(message, writer) {
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
 * optional double manual_input = 1;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double commanded_value = 2;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double output_value = 3;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_68} returns this
 */
proto.apollo.canbus.Accel_rpt_68.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_68.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_3_75.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_75} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.toObject = function(includeInstance, msg) {
  var f, obj = {
    torqueOutput: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    torqueInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_motor_rpt_3_75 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.torqueOutput;

  /** @type {?|undefined} */
  this.torqueInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_75.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_3_75();
  obj.torqueOutput != null && jspb.Message.setField(msg, 1, obj.torqueOutput);
  obj.torqueInput != null && jspb.Message.setField(msg, 2, obj.torqueInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_3_75;
  return proto.apollo.canbus.Steering_motor_rpt_3_75.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_75} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTorqueOutput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTorqueInput(value);
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
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_3_75.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_75} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double torque_output = 1;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.getTorqueOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.setTorqueOutput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.clearTorqueOutput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.hasTorqueOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double torque_input = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.getTorqueInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.setTorqueInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_75} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.clearTorqueInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_3_75.prototype.hasTorqueInput = function() {
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
proto.apollo.canbus.Turn_cmd_63.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Turn_cmd_63.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Turn_cmd_63} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_cmd_63.toObject = function(includeInstance, msg) {
  var f, obj = {
    turnSignalCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Turn_cmd_63 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Turn_cmd_63.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.turnSignalCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Turn_cmd_63.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Turn_cmd_63}
 */
proto.apollo.canbus.Turn_cmd_63.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Turn_cmd_63();
  obj.turnSignalCmd != null && jspb.Message.setField(msg, 1, obj.turnSignalCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Turn_cmd_63}
 */
proto.apollo.canbus.Turn_cmd_63.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Turn_cmd_63;
  return proto.apollo.canbus.Turn_cmd_63.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Turn_cmd_63} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Turn_cmd_63}
 */
proto.apollo.canbus.Turn_cmd_63.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType} */ (reader.readEnum());
      msg.setTurnSignalCmd(value);
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
proto.apollo.canbus.Turn_cmd_63.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Turn_cmd_63.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Turn_cmd_63} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_cmd_63.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType = {
  TURN_SIGNAL_CMD_RIGHT: 0,
  TURN_SIGNAL_CMD_NONE: 1,
  TURN_SIGNAL_CMD_LEFT: 2,
  TURN_SIGNAL_CMD_HAZARD: 3
};

/**
 * optional Turn_signal_cmdType turn_signal_cmd = 1;
 * @return {!proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType}
 */
proto.apollo.canbus.Turn_cmd_63.prototype.getTurnSignalCmd = function() {
  return /** @type {!proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_cmd_63.Turn_signal_cmdType} value
 * @return {!proto.apollo.canbus.Turn_cmd_63} returns this
 */
proto.apollo.canbus.Turn_cmd_63.prototype.setTurnSignalCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_63} returns this
 */
proto.apollo.canbus.Turn_cmd_63.prototype.clearTurnSignalCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_63.prototype.hasTurnSignalCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Turn_rpt_64.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Turn_rpt_64.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Turn_rpt_64} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_rpt_64.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualInput: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Turn_rpt_64 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Turn_rpt_64.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Turn_rpt_64.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Turn_rpt_64}
 */
proto.apollo.canbus.Turn_rpt_64.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Turn_rpt_64();
  obj.manualInput != null && jspb.Message.setField(msg, 1, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 3, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Turn_rpt_64}
 */
proto.apollo.canbus.Turn_rpt_64.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Turn_rpt_64;
  return proto.apollo.canbus.Turn_rpt_64.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Turn_rpt_64} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Turn_rpt_64}
 */
proto.apollo.canbus.Turn_rpt_64.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_64.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_64.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_64.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
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
proto.apollo.canbus.Turn_rpt_64.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Turn_rpt_64.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Turn_rpt_64} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_rpt_64.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Turn_rpt_64.Manual_inputType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Turn_rpt_64.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Turn_rpt_64.Output_valueType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Turn_rpt_64.Manual_inputType = {
  MANUAL_INPUT_RIGHT: 0,
  MANUAL_INPUT_NONE: 1,
  MANUAL_INPUT_LEFT: 2,
  MANUAL_INPUT_HAZARD: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_rpt_64.Commanded_valueType = {
  COMMANDED_VALUE_RIGHT: 0,
  COMMANDED_VALUE_NONE: 1,
  COMMANDED_VALUE_LEFT: 2,
  COMMANDED_VALUE_HAZARD: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_rpt_64.Output_valueType = {
  OUTPUT_VALUE_RIGHT: 0,
  OUTPUT_VALUE_NONE: 1,
  OUTPUT_VALUE_LEFT: 2,
  OUTPUT_VALUE_HAZARD: 3
};

/**
 * optional Manual_inputType manual_input = 1;
 * @return {!proto.apollo.canbus.Turn_rpt_64.Manual_inputType}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_64.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_64.Manual_inputType} value
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Turn_rpt_64.Commanded_valueType}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_64.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_64.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Output_valueType output_value = 3;
 * @return {!proto.apollo.canbus.Turn_rpt_64.Output_valueType}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_64.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_64.Output_valueType} value
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_64} returns this
 */
proto.apollo.canbus.Turn_rpt_64.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_64.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Shift_cmd_65.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Shift_cmd_65.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Shift_cmd_65} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_cmd_65.toObject = function(includeInstance, msg) {
  var f, obj = {
    shiftCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Shift_cmd_65 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Shift_cmd_65.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.shiftCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Shift_cmd_65.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Shift_cmd_65}
 */
proto.apollo.canbus.Shift_cmd_65.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Shift_cmd_65();
  obj.shiftCmd != null && jspb.Message.setField(msg, 1, obj.shiftCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Shift_cmd_65}
 */
proto.apollo.canbus.Shift_cmd_65.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Shift_cmd_65;
  return proto.apollo.canbus.Shift_cmd_65.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Shift_cmd_65} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Shift_cmd_65}
 */
proto.apollo.canbus.Shift_cmd_65.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Shift_cmd_65.Shift_cmdType} */ (reader.readEnum());
      msg.setShiftCmd(value);
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
proto.apollo.canbus.Shift_cmd_65.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Shift_cmd_65.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Shift_cmd_65} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_cmd_65.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Shift_cmd_65.Shift_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_cmd_65.Shift_cmdType = {
  SHIFT_CMD_PARK: 0,
  SHIFT_CMD_REVERSE: 1,
  SHIFT_CMD_NEUTRAL: 2,
  SHIFT_CMD_FORWARD: 3,
  SHIFT_CMD_LOW: 4
};

/**
 * optional Shift_cmdType shift_cmd = 1;
 * @return {!proto.apollo.canbus.Shift_cmd_65.Shift_cmdType}
 */
proto.apollo.canbus.Shift_cmd_65.prototype.getShiftCmd = function() {
  return /** @type {!proto.apollo.canbus.Shift_cmd_65.Shift_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_cmd_65.Shift_cmdType} value
 * @return {!proto.apollo.canbus.Shift_cmd_65} returns this
 */
proto.apollo.canbus.Shift_cmd_65.prototype.setShiftCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_65} returns this
 */
proto.apollo.canbus.Shift_cmd_65.prototype.clearShiftCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_65.prototype.hasShiftCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Shift_rpt_66.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Shift_rpt_66.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Shift_rpt_66} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_rpt_66.toObject = function(includeInstance, msg) {
  var f, obj = {
    manualInput: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Shift_rpt_66 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Shift_rpt_66.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Shift_rpt_66.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Shift_rpt_66}
 */
proto.apollo.canbus.Shift_rpt_66.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Shift_rpt_66();
  obj.manualInput != null && jspb.Message.setField(msg, 1, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 3, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Shift_rpt_66}
 */
proto.apollo.canbus.Shift_rpt_66.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Shift_rpt_66;
  return proto.apollo.canbus.Shift_rpt_66.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Shift_rpt_66} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Shift_rpt_66}
 */
proto.apollo.canbus.Shift_rpt_66.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_66.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_66.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_66.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
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
proto.apollo.canbus.Shift_rpt_66.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Shift_rpt_66.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Shift_rpt_66} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_rpt_66.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Shift_rpt_66.Manual_inputType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Shift_rpt_66.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Shift_rpt_66.Output_valueType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Shift_rpt_66.Manual_inputType = {
  MANUAL_INPUT_PARK: 0,
  MANUAL_INPUT_REVERSE: 1,
  MANUAL_INPUT_NEUTRAL: 2,
  MANUAL_INPUT_FORWARD: 3,
  MANUAL_INPUT_HIGH: 4
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_rpt_66.Commanded_valueType = {
  COMMANDED_VALUE_PARK: 0,
  COMMANDED_VALUE_REVERSE: 1,
  COMMANDED_VALUE_NEUTRAL: 2,
  COMMANDED_VALUE_FORWARD: 3,
  COMMANDED_VALUE_HIGH: 4
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_rpt_66.Output_valueType = {
  OUTPUT_VALUE_PARK: 0,
  OUTPUT_VALUE_REVERSE: 1,
  OUTPUT_VALUE_NEUTRAL: 2,
  OUTPUT_VALUE_FORWARD: 3,
  OUTPUT_VALUE_HIGH: 4
};

/**
 * optional Manual_inputType manual_input = 1;
 * @return {!proto.apollo.canbus.Shift_rpt_66.Manual_inputType}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_66.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_66.Manual_inputType} value
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Shift_rpt_66.Commanded_valueType}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_66.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_66.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Output_valueType output_value = 3;
 * @return {!proto.apollo.canbus.Shift_rpt_66.Output_valueType}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_66.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_66.Output_valueType} value
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_66} returns this
 */
proto.apollo.canbus.Shift_rpt_66.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_66.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Accel_cmd_67.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Accel_cmd_67.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Accel_cmd_67} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_cmd_67.toObject = function(includeInstance, msg) {
  var f, obj = {
    accelCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Accel_cmd_67 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Accel_cmd_67.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.accelCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Accel_cmd_67.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Accel_cmd_67}
 */
proto.apollo.canbus.Accel_cmd_67.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Accel_cmd_67();
  obj.accelCmd != null && jspb.Message.setField(msg, 1, obj.accelCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Accel_cmd_67}
 */
proto.apollo.canbus.Accel_cmd_67.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Accel_cmd_67;
  return proto.apollo.canbus.Accel_cmd_67.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Accel_cmd_67} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Accel_cmd_67}
 */
proto.apollo.canbus.Accel_cmd_67.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAccelCmd(value);
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
proto.apollo.canbus.Accel_cmd_67.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Accel_cmd_67.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Accel_cmd_67} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_cmd_67.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double accel_cmd = 1;
 * @return {number}
 */
proto.apollo.canbus.Accel_cmd_67.prototype.getAccelCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_cmd_67} returns this
 */
proto.apollo.canbus.Accel_cmd_67.prototype.setAccelCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_67} returns this
 */
proto.apollo.canbus.Accel_cmd_67.prototype.clearAccelCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_67.prototype.hasAccelCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Lat_lon_heading_rpt_82.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_82} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.toObject = function(includeInstance, msg) {
  var f, obj = {
    heading: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    longitudeSeconds: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    longitudeMinutes: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    longitudeDegrees: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    latitudeSeconds: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    latitudeMinutes: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    latitudeDegrees: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Lat_lon_heading_rpt_82 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.heading;

  /** @type {?|undefined} */
  this.longitudeSeconds;

  /** @type {?|undefined} */
  this.longitudeMinutes;

  /** @type {?|undefined} */
  this.longitudeDegrees;

  /** @type {?|undefined} */
  this.latitudeSeconds;

  /** @type {?|undefined} */
  this.latitudeMinutes;

  /** @type {?|undefined} */
  this.latitudeDegrees;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_82.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Lat_lon_heading_rpt_82();
  obj.heading != null && jspb.Message.setField(msg, 1, obj.heading);
  obj.longitudeSeconds != null && jspb.Message.setField(msg, 2, obj.longitudeSeconds);
  obj.longitudeMinutes != null && jspb.Message.setField(msg, 3, obj.longitudeMinutes);
  obj.longitudeDegrees != null && jspb.Message.setField(msg, 4, obj.longitudeDegrees);
  obj.latitudeSeconds != null && jspb.Message.setField(msg, 5, obj.latitudeSeconds);
  obj.latitudeMinutes != null && jspb.Message.setField(msg, 6, obj.latitudeMinutes);
  obj.latitudeDegrees != null && jspb.Message.setField(msg, 7, obj.latitudeDegrees);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Lat_lon_heading_rpt_82;
  return proto.apollo.canbus.Lat_lon_heading_rpt_82.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_82} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLongitudeSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLongitudeMinutes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLongitudeDegrees(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatitudeSeconds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatitudeMinutes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLatitudeDegrees(value);
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
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Lat_lon_heading_rpt_82.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_82} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional double heading = 1;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 longitude_seconds = 2;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLongitudeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLongitudeSeconds = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLongitudeSeconds = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLongitudeSeconds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 longitude_minutes = 3;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLongitudeMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLongitudeMinutes = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLongitudeMinutes = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLongitudeMinutes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 longitude_degrees = 4;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLongitudeDegrees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLongitudeDegrees = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLongitudeDegrees = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLongitudeDegrees = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 latitude_seconds = 5;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLatitudeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLatitudeSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLatitudeSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLatitudeSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 latitude_minutes = 6;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLatitudeMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLatitudeMinutes = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLatitudeMinutes = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLatitudeMinutes = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 latitude_degrees = 7;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.getLatitudeDegrees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.setLatitudeDegrees = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_82} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.clearLatitudeDegrees = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_82.prototype.hasLatitudeDegrees = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.apollo.canbus.Global_cmd_69.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Global_cmd_69.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Global_cmd_69} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_cmd_69.toObject = function(includeInstance, msg) {
  var f, obj = {
    pacmodEnable: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ignoreOverride: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Global_cmd_69 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Global_cmd_69.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pacmodEnable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.ignoreOverride;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Global_cmd_69.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Global_cmd_69}
 */
proto.apollo.canbus.Global_cmd_69.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Global_cmd_69();
  obj.pacmodEnable != null && jspb.Message.setField(msg, 1, obj.pacmodEnable);
  obj.clearOverride != null && jspb.Message.setField(msg, 2, obj.clearOverride);
  obj.ignoreOverride != null && jspb.Message.setField(msg, 3, obj.ignoreOverride);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Global_cmd_69}
 */
proto.apollo.canbus.Global_cmd_69.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Global_cmd_69;
  return proto.apollo.canbus.Global_cmd_69.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Global_cmd_69} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Global_cmd_69}
 */
proto.apollo.canbus.Global_cmd_69.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Global_cmd_69.Pacmod_enableType} */ (reader.readEnum());
      msg.setPacmodEnable(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Global_cmd_69.Clear_overrideType} */ (reader.readEnum());
      msg.setClearOverride(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Global_cmd_69.Ignore_overrideType} */ (reader.readEnum());
      msg.setIgnoreOverride(value);
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
proto.apollo.canbus.Global_cmd_69.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Global_cmd_69.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Global_cmd_69} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_cmd_69.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Global_cmd_69.Pacmod_enableType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Global_cmd_69.Clear_overrideType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Global_cmd_69.Ignore_overrideType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Global_cmd_69.Pacmod_enableType = {
  PACMOD_ENABLE_CONTROL_DISABLED: 0,
  PACMOD_ENABLE_CONTROL_ENABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_cmd_69.Clear_overrideType = {
  CLEAR_OVERRIDE_DON_T_CLEAR_ACTIVE_OVERRIDES: 0,
  CLEAR_OVERRIDE_CLEAR_ACTIVE_OVERRIDES: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_cmd_69.Ignore_overrideType = {
  IGNORE_OVERRIDE_DON_T_IGNORE_USER_OVERRIDES: 0,
  IGNORE_OVERRIDE_IGNORE_USER_OVERRIDES: 1
};

/**
 * optional Pacmod_enableType pacmod_enable = 1;
 * @return {!proto.apollo.canbus.Global_cmd_69.Pacmod_enableType}
 */
proto.apollo.canbus.Global_cmd_69.prototype.getPacmodEnable = function() {
  return /** @type {!proto.apollo.canbus.Global_cmd_69.Pacmod_enableType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_cmd_69.Pacmod_enableType} value
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.setPacmodEnable = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.clearPacmodEnable = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_cmd_69.prototype.hasPacmodEnable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Clear_overrideType clear_override = 2;
 * @return {!proto.apollo.canbus.Global_cmd_69.Clear_overrideType}
 */
proto.apollo.canbus.Global_cmd_69.prototype.getClearOverride = function() {
  return /** @type {!proto.apollo.canbus.Global_cmd_69.Clear_overrideType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_cmd_69.Clear_overrideType} value
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_cmd_69.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ignore_overrideType ignore_override = 3;
 * @return {!proto.apollo.canbus.Global_cmd_69.Ignore_overrideType}
 */
proto.apollo.canbus.Global_cmd_69.prototype.getIgnoreOverride = function() {
  return /** @type {!proto.apollo.canbus.Global_cmd_69.Ignore_overrideType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_cmd_69.Ignore_overrideType} value
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.setIgnoreOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_cmd_69} returns this
 */
proto.apollo.canbus.Global_cmd_69.prototype.clearIgnoreOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_cmd_69.prototype.hasIgnoreOverride = function() {
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
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Parking_brake_status_rpt_80.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Parking_brake_status_rpt_80} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.toObject = function(includeInstance, msg) {
  var f, obj = {
    parkingBrakeEnabled: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Parking_brake_status_rpt_80 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.parkingBrakeEnabled;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Parking_brake_status_rpt_80.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Parking_brake_status_rpt_80();
  obj.parkingBrakeEnabled != null && jspb.Message.setField(msg, 1, obj.parkingBrakeEnabled);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Parking_brake_status_rpt_80;
  return proto.apollo.canbus.Parking_brake_status_rpt_80.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Parking_brake_status_rpt_80} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType} */ (reader.readEnum());
      msg.setParkingBrakeEnabled(value);
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
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Parking_brake_status_rpt_80.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Parking_brake_status_rpt_80} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType = {
  PARKING_BRAKE_ENABLED_OFF: 0,
  PARKING_BRAKE_ENABLED_ON: 1
};

/**
 * optional Parking_brake_enabledType parking_brake_enabled = 1;
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.getParkingBrakeEnabled = function() {
  return /** @type {!proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Parking_brake_status_rpt_80.Parking_brake_enabledType} value
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80} returns this
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.setParkingBrakeEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_status_rpt_80} returns this
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.clearParkingBrakeEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_status_rpt_80.prototype.hasParkingBrakeEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Yaw_rate_rpt_81.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_81} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Yaw_rate_rpt_81.toObject = function(includeInstance, msg) {
  var f, obj = {
    yawRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Yaw_rate_rpt_81 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Yaw_rate_rpt_81.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.yawRate;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_81.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_81}
 */
proto.apollo.canbus.Yaw_rate_rpt_81.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Yaw_rate_rpt_81();
  obj.yawRate != null && jspb.Message.setField(msg, 1, obj.yawRate);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_81}
 */
proto.apollo.canbus.Yaw_rate_rpt_81.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Yaw_rate_rpt_81;
  return proto.apollo.canbus.Yaw_rate_rpt_81.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_81} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_81}
 */
proto.apollo.canbus.Yaw_rate_rpt_81.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYawRate(value);
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
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Yaw_rate_rpt_81.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_81} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Yaw_rate_rpt_81.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double yaw_rate = 1;
 * @return {number}
 */
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.getYawRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_81} returns this
 */
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.setYawRate = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_81} returns this
 */
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.clearYawRate = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Yaw_rate_rpt_81.prototype.hasYawRate = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Horn_rpt_79.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Horn_rpt_79.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Horn_rpt_79} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_rpt_79.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Horn_rpt_79 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Horn_rpt_79.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Horn_rpt_79.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Horn_rpt_79}
 */
proto.apollo.canbus.Horn_rpt_79.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Horn_rpt_79();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 3, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Horn_rpt_79}
 */
proto.apollo.canbus.Horn_rpt_79.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Horn_rpt_79;
  return proto.apollo.canbus.Horn_rpt_79.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Horn_rpt_79} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Horn_rpt_79}
 */
proto.apollo.canbus.Horn_rpt_79.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_79.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_79.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_79.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
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
proto.apollo.canbus.Horn_rpt_79.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Horn_rpt_79.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Horn_rpt_79} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_rpt_79.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Horn_rpt_79.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Horn_rpt_79.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Horn_rpt_79.Manual_inputType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Horn_rpt_79.Output_valueType = {
  OUTPUT_VALUE_OFF: 0,
  OUTPUT_VALUE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_rpt_79.Commanded_valueType = {
  COMMANDED_VALUE_OFF: 0,
  COMMANDED_VALUE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_rpt_79.Manual_inputType = {
  MANUAL_INPUT_OFF: 0,
  MANUAL_INPUT_ON: 1
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Horn_rpt_79.Output_valueType}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_79.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_79.Output_valueType} value
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Horn_rpt_79.Commanded_valueType}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_79.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_79.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Manual_inputType manual_input = 3;
 * @return {!proto.apollo.canbus.Horn_rpt_79.Manual_inputType}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_79.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_79.Manual_inputType} value
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_79} returns this
 */
proto.apollo.canbus.Horn_rpt_79.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_79.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Horn_cmd_78.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Horn_cmd_78.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Horn_cmd_78} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_cmd_78.toObject = function(includeInstance, msg) {
  var f, obj = {
    hornCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Horn_cmd_78 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Horn_cmd_78.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.hornCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Horn_cmd_78.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Horn_cmd_78}
 */
proto.apollo.canbus.Horn_cmd_78.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Horn_cmd_78();
  obj.hornCmd != null && jspb.Message.setField(msg, 1, obj.hornCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Horn_cmd_78}
 */
proto.apollo.canbus.Horn_cmd_78.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Horn_cmd_78;
  return proto.apollo.canbus.Horn_cmd_78.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Horn_cmd_78} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Horn_cmd_78}
 */
proto.apollo.canbus.Horn_cmd_78.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Horn_cmd_78.Horn_cmdType} */ (reader.readEnum());
      msg.setHornCmd(value);
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
proto.apollo.canbus.Horn_cmd_78.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Horn_cmd_78.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Horn_cmd_78} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_cmd_78.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Horn_cmd_78.Horn_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_cmd_78.Horn_cmdType = {
  HORN_CMD_OFF: 0,
  HORN_CMD_ON: 1
};

/**
 * optional Horn_cmdType horn_cmd = 1;
 * @return {!proto.apollo.canbus.Horn_cmd_78.Horn_cmdType}
 */
proto.apollo.canbus.Horn_cmd_78.prototype.getHornCmd = function() {
  return /** @type {!proto.apollo.canbus.Horn_cmd_78.Horn_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_cmd_78.Horn_cmdType} value
 * @return {!proto.apollo.canbus.Horn_cmd_78} returns this
 */
proto.apollo.canbus.Horn_cmd_78.prototype.setHornCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_78} returns this
 */
proto.apollo.canbus.Horn_cmd_78.prototype.clearHornCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_78.prototype.hasHornCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Wiper_rpt_91.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wiper_rpt_91.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wiper_rpt_91} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_rpt_91.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wiper_rpt_91 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wiper_rpt_91.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wiper_rpt_91.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wiper_rpt_91}
 */
proto.apollo.canbus.Wiper_rpt_91.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wiper_rpt_91();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 3, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wiper_rpt_91}
 */
proto.apollo.canbus.Wiper_rpt_91.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wiper_rpt_91;
  return proto.apollo.canbus.Wiper_rpt_91.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wiper_rpt_91} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wiper_rpt_91}
 */
proto.apollo.canbus.Wiper_rpt_91.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
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
proto.apollo.canbus.Wiper_rpt_91.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wiper_rpt_91.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wiper_rpt_91} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_rpt_91.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_91.Manual_inputType} */ (jspb.Message.getField(message, 3));
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
proto.apollo.canbus.Wiper_rpt_91.Output_valueType = {
  OUTPUT_VALUE_WIPERS_OFF: 0,
  OUTPUT_VALUE_INTERMITTENT_1: 1,
  OUTPUT_VALUE_INTERMITTENT_2: 2,
  OUTPUT_VALUE_INTERMITTENT_3: 3,
  OUTPUT_VALUE_INTERMITTENT_4: 4,
  OUTPUT_VALUE_INTERMITTENT_5: 5,
  OUTPUT_VALUE_LOW: 6,
  OUTPUT_VALUE_HIGH: 7
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType = {
  COMMANDED_VALUE_WIPERS_OFF: 0,
  COMMANDED_VALUE_INTERMITTENT_1: 1,
  COMMANDED_VALUE_INTERMITTENT_2: 2,
  COMMANDED_VALUE_INTERMITTENT_3: 3,
  COMMANDED_VALUE_INTERMITTENT_4: 4,
  COMMANDED_VALUE_INTERMITTENT_5: 5,
  COMMANDED_VALUE_LOW: 6,
  COMMANDED_VALUE_HIGH: 7
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Wiper_rpt_91.Manual_inputType = {
  MANUAL_INPUT_WIPERS_OFF: 0,
  MANUAL_INPUT_INTERMITTENT_1: 1,
  MANUAL_INPUT_INTERMITTENT_2: 2,
  MANUAL_INPUT_INTERMITTENT_3: 3,
  MANUAL_INPUT_INTERMITTENT_4: 4,
  MANUAL_INPUT_INTERMITTENT_5: 5,
  MANUAL_INPUT_LOW: 6,
  MANUAL_INPUT_HIGH: 7
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Wiper_rpt_91.Output_valueType}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_91.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_91.Output_valueType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_91.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Manual_inputType manual_input = 3;
 * @return {!proto.apollo.canbus.Wiper_rpt_91.Manual_inputType}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_91.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_91.Manual_inputType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_91} returns this
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_91.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Vehicle_speed_rpt_6f.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_6f} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    vehicleSpeedValid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle_speed_rpt_6f as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleSpeed;

  /** @type {?|undefined} */
  this.vehicleSpeedValid;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_6f.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Vehicle_speed_rpt_6f();
  obj.vehicleSpeed != null && jspb.Message.setField(msg, 1, obj.vehicleSpeed);
  obj.vehicleSpeedValid != null && jspb.Message.setField(msg, 2, obj.vehicleSpeedValid);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Vehicle_speed_rpt_6f;
  return proto.apollo.canbus.Vehicle_speed_rpt_6f.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_6f} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVehicleSpeed(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType} */ (reader.readEnum());
      msg.setVehicleSpeedValid(value);
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
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Vehicle_speed_rpt_6f.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_6f} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType = {
  VEHICLE_SPEED_VALID_INVALID: 0,
  VEHICLE_SPEED_VALID_VALID: 1
};

/**
 * optional double vehicle_speed = 1;
 * @return {number}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.getVehicleSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.setVehicleSpeed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.clearVehicleSpeed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.hasVehicleSpeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vehicle_speed_validType vehicle_speed_valid = 2;
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.getVehicleSpeedValid = function() {
  return /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_6f.Vehicle_speed_validType} value
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.setVehicleSpeedValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_6f} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.clearVehicleSpeedValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vehicle_speed_rpt_6f.prototype.hasVehicleSpeedValid = function() {
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
proto.apollo.canbus.Headlight_cmd_76.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Headlight_cmd_76.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Headlight_cmd_76} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_cmd_76.toObject = function(includeInstance, msg) {
  var f, obj = {
    headlightCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Headlight_cmd_76 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Headlight_cmd_76.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.headlightCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Headlight_cmd_76.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Headlight_cmd_76}
 */
proto.apollo.canbus.Headlight_cmd_76.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Headlight_cmd_76();
  obj.headlightCmd != null && jspb.Message.setField(msg, 1, obj.headlightCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Headlight_cmd_76}
 */
proto.apollo.canbus.Headlight_cmd_76.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Headlight_cmd_76;
  return proto.apollo.canbus.Headlight_cmd_76.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Headlight_cmd_76} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Headlight_cmd_76}
 */
proto.apollo.canbus.Headlight_cmd_76.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType} */ (reader.readEnum());
      msg.setHeadlightCmd(value);
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
proto.apollo.canbus.Headlight_cmd_76.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Headlight_cmd_76.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Headlight_cmd_76} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_cmd_76.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType = {
  HEADLIGHT_CMD_HEADLIGHTS_OFF: 0,
  HEADLIGHT_CMD_LOW_BEAMS: 1,
  HEADLIGHT_CMD_HIGH_BEAMS: 2
};

/**
 * optional Headlight_cmdType headlight_cmd = 1;
 * @return {!proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType}
 */
proto.apollo.canbus.Headlight_cmd_76.prototype.getHeadlightCmd = function() {
  return /** @type {!proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_cmd_76.Headlight_cmdType} value
 * @return {!proto.apollo.canbus.Headlight_cmd_76} returns this
 */
proto.apollo.canbus.Headlight_cmd_76.prototype.setHeadlightCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_76} returns this
 */
proto.apollo.canbus.Headlight_cmd_76.prototype.clearHeadlightCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_76.prototype.hasHeadlightCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_2_74.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_74} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.toObject = function(includeInstance, msg) {
  var f, obj = {
    encoderTemperature: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    motorTemperature: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    angularSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_motor_rpt_2_74 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.encoderTemperature;

  /** @type {?|undefined} */
  this.motorTemperature;

  /** @type {?|undefined} */
  this.angularSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_74.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_2_74();
  obj.encoderTemperature != null && jspb.Message.setField(msg, 1, obj.encoderTemperature);
  obj.motorTemperature != null && jspb.Message.setField(msg, 2, obj.motorTemperature);
  obj.angularSpeed != null && jspb.Message.setField(msg, 3, obj.angularSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_2_74;
  return proto.apollo.canbus.Steering_motor_rpt_2_74.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_74} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEncoderTemperature(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMotorTemperature(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngularSpeed(value);
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
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_2_74.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_74} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional int32 encoder_temperature = 1;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.getEncoderTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.setEncoderTemperature = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.clearEncoderTemperature = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.hasEncoderTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 motor_temperature = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.getMotorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.setMotorTemperature = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.clearMotorTemperature = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.hasMotorTemperature = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double angular_speed = 3;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.getAngularSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.setAngularSpeed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_74} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.clearAngularSpeed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_74.prototype.hasAngularSpeed = function() {
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
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_2_71.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_71} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.toObject = function(includeInstance, msg) {
  var f, obj = {
    encoderTemperature: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    motorTemperature: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    angularSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_motor_rpt_2_71 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.encoderTemperature;

  /** @type {?|undefined} */
  this.motorTemperature;

  /** @type {?|undefined} */
  this.angularSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_71.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_2_71();
  obj.encoderTemperature != null && jspb.Message.setField(msg, 1, obj.encoderTemperature);
  obj.motorTemperature != null && jspb.Message.setField(msg, 2, obj.motorTemperature);
  obj.angularSpeed != null && jspb.Message.setField(msg, 3, obj.angularSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_2_71;
  return proto.apollo.canbus.Brake_motor_rpt_2_71.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_71} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEncoderTemperature(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMotorTemperature(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngularSpeed(value);
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
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_2_71.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_71} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional int32 encoder_temperature = 1;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.getEncoderTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.setEncoderTemperature = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.clearEncoderTemperature = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.hasEncoderTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 motor_temperature = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.getMotorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.setMotorTemperature = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.clearMotorTemperature = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.hasMotorTemperature = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double angular_speed = 3;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.getAngularSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.setAngularSpeed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_71} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.clearAngularSpeed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_71.prototype.hasAngularSpeed = function() {
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
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_1_73.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_73} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.toObject = function(includeInstance, msg) {
  var f, obj = {
    motorCurrent: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    shaftPosition: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_motor_rpt_1_73 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.motorCurrent;

  /** @type {?|undefined} */
  this.shaftPosition;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_73.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_1_73();
  obj.motorCurrent != null && jspb.Message.setField(msg, 1, obj.motorCurrent);
  obj.shaftPosition != null && jspb.Message.setField(msg, 2, obj.shaftPosition);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_1_73;
  return proto.apollo.canbus.Steering_motor_rpt_1_73.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_73} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMotorCurrent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShaftPosition(value);
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
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_1_73.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_73} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double motor_current = 1;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.getMotorCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.setMotorCurrent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.clearMotorCurrent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.hasMotorCurrent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double shaft_position = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.getShaftPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.setShaftPosition = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_73} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.clearShaftPosition = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_1_73.prototype.hasShaftPosition = function() {
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
proto.apollo.canbus.Wiper_cmd_90.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wiper_cmd_90.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wiper_cmd_90} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_cmd_90.toObject = function(includeInstance, msg) {
  var f, obj = {
    wiperCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wiper_cmd_90 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wiper_cmd_90.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.wiperCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wiper_cmd_90.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wiper_cmd_90}
 */
proto.apollo.canbus.Wiper_cmd_90.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wiper_cmd_90();
  obj.wiperCmd != null && jspb.Message.setField(msg, 1, obj.wiperCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wiper_cmd_90}
 */
proto.apollo.canbus.Wiper_cmd_90.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wiper_cmd_90;
  return proto.apollo.canbus.Wiper_cmd_90.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wiper_cmd_90} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wiper_cmd_90}
 */
proto.apollo.canbus.Wiper_cmd_90.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType} */ (reader.readEnum());
      msg.setWiperCmd(value);
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
proto.apollo.canbus.Wiper_cmd_90.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wiper_cmd_90.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wiper_cmd_90} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_cmd_90.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType = {
  WIPER_CMD_WIPERS_OFF: 0,
  WIPER_CMD_INTERMITTENT_1: 1,
  WIPER_CMD_INTERMITTENT_2: 2,
  WIPER_CMD_INTERMITTENT_3: 3,
  WIPER_CMD_INTERMITTENT_4: 4,
  WIPER_CMD_INTERMITTENT_5: 5,
  WIPER_CMD_LOW: 6,
  WIPER_CMD_HIGH: 7
};

/**
 * optional Wiper_cmdType wiper_cmd = 1;
 * @return {!proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType}
 */
proto.apollo.canbus.Wiper_cmd_90.prototype.getWiperCmd = function() {
  return /** @type {!proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_cmd_90.Wiper_cmdType} value
 * @return {!proto.apollo.canbus.Wiper_cmd_90} returns this
 */
proto.apollo.canbus.Wiper_cmd_90.prototype.setWiperCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_90} returns this
 */
proto.apollo.canbus.Wiper_cmd_90.prototype.clearWiperCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_90.prototype.hasWiperCmd = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_3_72.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_72} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.toObject = function(includeInstance, msg) {
  var f, obj = {
    torqueOutput: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    torqueInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_motor_rpt_3_72 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.torqueOutput;

  /** @type {?|undefined} */
  this.torqueInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_72.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_3_72();
  obj.torqueOutput != null && jspb.Message.setField(msg, 1, obj.torqueOutput);
  obj.torqueInput != null && jspb.Message.setField(msg, 2, obj.torqueInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_3_72;
  return proto.apollo.canbus.Brake_motor_rpt_3_72.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_72} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTorqueOutput(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTorqueInput(value);
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
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_3_72.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_72} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double torque_output = 1;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.getTorqueOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.setTorqueOutput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.clearTorqueOutput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.hasTorqueOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double torque_input = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.getTorqueInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.setTorqueInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_72} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.clearTorqueInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_3_72.prototype.hasTorqueInput = function() {
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
proto.apollo.canbus.Gem.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Gem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Gem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gem.toObject = function(includeInstance, msg) {
  var f, obj = {
    globalRpt6a: (f = msg.getGlobalRpt6a()) && proto.apollo.canbus.Global_rpt_6a.toObject(includeInstance, f),
    brakeCmd6b: (f = msg.getBrakeCmd6b()) && proto.apollo.canbus.Brake_cmd_6b.toObject(includeInstance, f),
    brakeRpt6c: (f = msg.getBrakeRpt6c()) && proto.apollo.canbus.Brake_rpt_6c.toObject(includeInstance, f),
    steeringCmd6d: (f = msg.getSteeringCmd6d()) && proto.apollo.canbus.Steering_cmd_6d.toObject(includeInstance, f),
    steeringRpt16e: (f = msg.getSteeringRpt16e()) && proto.apollo.canbus.Steering_rpt_1_6e.toObject(includeInstance, f),
    wheelSpeedRpt7a: (f = msg.getWheelSpeedRpt7a()) && proto.apollo.canbus.Wheel_speed_rpt_7a.toObject(includeInstance, f),
    dateTimeRpt83: (f = msg.getDateTimeRpt83()) && proto.apollo.canbus.Date_time_rpt_83.toObject(includeInstance, f),
    brakeMotorRpt170: (f = msg.getBrakeMotorRpt170()) && proto.apollo.canbus.Brake_motor_rpt_1_70.toObject(includeInstance, f),
    headlightRpt77: (f = msg.getHeadlightRpt77()) && proto.apollo.canbus.Headlight_rpt_77.toObject(includeInstance, f),
    accelRpt68: (f = msg.getAccelRpt68()) && proto.apollo.canbus.Accel_rpt_68.toObject(includeInstance, f),
    steeringMotorRpt375: (f = msg.getSteeringMotorRpt375()) && proto.apollo.canbus.Steering_motor_rpt_3_75.toObject(includeInstance, f),
    turnCmd63: (f = msg.getTurnCmd63()) && proto.apollo.canbus.Turn_cmd_63.toObject(includeInstance, f),
    turnRpt64: (f = msg.getTurnRpt64()) && proto.apollo.canbus.Turn_rpt_64.toObject(includeInstance, f),
    shiftCmd65: (f = msg.getShiftCmd65()) && proto.apollo.canbus.Shift_cmd_65.toObject(includeInstance, f),
    shiftRpt66: (f = msg.getShiftRpt66()) && proto.apollo.canbus.Shift_rpt_66.toObject(includeInstance, f),
    accelCmd67: (f = msg.getAccelCmd67()) && proto.apollo.canbus.Accel_cmd_67.toObject(includeInstance, f),
    latLonHeadingRpt82: (f = msg.getLatLonHeadingRpt82()) && proto.apollo.canbus.Lat_lon_heading_rpt_82.toObject(includeInstance, f),
    globalCmd69: (f = msg.getGlobalCmd69()) && proto.apollo.canbus.Global_cmd_69.toObject(includeInstance, f),
    parkingBrakeStatusRpt80: (f = msg.getParkingBrakeStatusRpt80()) && proto.apollo.canbus.Parking_brake_status_rpt_80.toObject(includeInstance, f),
    yawRateRpt81: (f = msg.getYawRateRpt81()) && proto.apollo.canbus.Yaw_rate_rpt_81.toObject(includeInstance, f),
    hornRpt79: (f = msg.getHornRpt79()) && proto.apollo.canbus.Horn_rpt_79.toObject(includeInstance, f),
    hornCmd78: (f = msg.getHornCmd78()) && proto.apollo.canbus.Horn_cmd_78.toObject(includeInstance, f),
    wiperRpt91: (f = msg.getWiperRpt91()) && proto.apollo.canbus.Wiper_rpt_91.toObject(includeInstance, f),
    vehicleSpeedRpt6f: (f = msg.getVehicleSpeedRpt6f()) && proto.apollo.canbus.Vehicle_speed_rpt_6f.toObject(includeInstance, f),
    headlightCmd76: (f = msg.getHeadlightCmd76()) && proto.apollo.canbus.Headlight_cmd_76.toObject(includeInstance, f),
    steeringMotorRpt274: (f = msg.getSteeringMotorRpt274()) && proto.apollo.canbus.Steering_motor_rpt_2_74.toObject(includeInstance, f),
    brakeMotorRpt271: (f = msg.getBrakeMotorRpt271()) && proto.apollo.canbus.Brake_motor_rpt_2_71.toObject(includeInstance, f),
    steeringMotorRpt173: (f = msg.getSteeringMotorRpt173()) && proto.apollo.canbus.Steering_motor_rpt_1_73.toObject(includeInstance, f),
    wiperCmd90: (f = msg.getWiperCmd90()) && proto.apollo.canbus.Wiper_cmd_90.toObject(includeInstance, f),
    brakeMotorRpt372: (f = msg.getBrakeMotorRpt372()) && proto.apollo.canbus.Brake_motor_rpt_3_72.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Gem as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Gem.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.globalRpt6a;

  /** @type {?|undefined} */
  this.brakeCmd6b;

  /** @type {?|undefined} */
  this.brakeRpt6c;

  /** @type {?|undefined} */
  this.steeringCmd6d;

  /** @type {?|undefined} */
  this.steeringRpt16e;

  /** @type {?|undefined} */
  this.wheelSpeedRpt7a;

  /** @type {?|undefined} */
  this.dateTimeRpt83;

  /** @type {?|undefined} */
  this.brakeMotorRpt170;

  /** @type {?|undefined} */
  this.headlightRpt77;

  /** @type {?|undefined} */
  this.accelRpt68;

  /** @type {?|undefined} */
  this.steeringMotorRpt375;

  /** @type {?|undefined} */
  this.turnCmd63;

  /** @type {?|undefined} */
  this.turnRpt64;

  /** @type {?|undefined} */
  this.shiftCmd65;

  /** @type {?|undefined} */
  this.shiftRpt66;

  /** @type {?|undefined} */
  this.accelCmd67;

  /** @type {?|undefined} */
  this.latLonHeadingRpt82;

  /** @type {?|undefined} */
  this.globalCmd69;

  /** @type {?|undefined} */
  this.parkingBrakeStatusRpt80;

  /** @type {?|undefined} */
  this.yawRateRpt81;

  /** @type {?|undefined} */
  this.hornRpt79;

  /** @type {?|undefined} */
  this.hornCmd78;

  /** @type {?|undefined} */
  this.wiperRpt91;

  /** @type {?|undefined} */
  this.vehicleSpeedRpt6f;

  /** @type {?|undefined} */
  this.headlightCmd76;

  /** @type {?|undefined} */
  this.steeringMotorRpt274;

  /** @type {?|undefined} */
  this.brakeMotorRpt271;

  /** @type {?|undefined} */
  this.steeringMotorRpt173;

  /** @type {?|undefined} */
  this.wiperCmd90;

  /** @type {?|undefined} */
  this.brakeMotorRpt372;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Gem.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Gem}
 */
proto.apollo.canbus.Gem.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Gem();
  obj.globalRpt6a && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.canbus.Global_rpt_6a.fromObject(obj.globalRpt6a));
  obj.brakeCmd6b && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.canbus.Brake_cmd_6b.fromObject(obj.brakeCmd6b));
  obj.brakeRpt6c && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.canbus.Brake_rpt_6c.fromObject(obj.brakeRpt6c));
  obj.steeringCmd6d && jspb.Message.setWrapperField(
      msg, 4, proto.apollo.canbus.Steering_cmd_6d.fromObject(obj.steeringCmd6d));
  obj.steeringRpt16e && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.canbus.Steering_rpt_1_6e.fromObject(obj.steeringRpt16e));
  obj.wheelSpeedRpt7a && jspb.Message.setWrapperField(
      msg, 6, proto.apollo.canbus.Wheel_speed_rpt_7a.fromObject(obj.wheelSpeedRpt7a));
  obj.dateTimeRpt83 && jspb.Message.setWrapperField(
      msg, 7, proto.apollo.canbus.Date_time_rpt_83.fromObject(obj.dateTimeRpt83));
  obj.brakeMotorRpt170 && jspb.Message.setWrapperField(
      msg, 8, proto.apollo.canbus.Brake_motor_rpt_1_70.fromObject(obj.brakeMotorRpt170));
  obj.headlightRpt77 && jspb.Message.setWrapperField(
      msg, 9, proto.apollo.canbus.Headlight_rpt_77.fromObject(obj.headlightRpt77));
  obj.accelRpt68 && jspb.Message.setWrapperField(
      msg, 10, proto.apollo.canbus.Accel_rpt_68.fromObject(obj.accelRpt68));
  obj.steeringMotorRpt375 && jspb.Message.setWrapperField(
      msg, 11, proto.apollo.canbus.Steering_motor_rpt_3_75.fromObject(obj.steeringMotorRpt375));
  obj.turnCmd63 && jspb.Message.setWrapperField(
      msg, 12, proto.apollo.canbus.Turn_cmd_63.fromObject(obj.turnCmd63));
  obj.turnRpt64 && jspb.Message.setWrapperField(
      msg, 13, proto.apollo.canbus.Turn_rpt_64.fromObject(obj.turnRpt64));
  obj.shiftCmd65 && jspb.Message.setWrapperField(
      msg, 14, proto.apollo.canbus.Shift_cmd_65.fromObject(obj.shiftCmd65));
  obj.shiftRpt66 && jspb.Message.setWrapperField(
      msg, 15, proto.apollo.canbus.Shift_rpt_66.fromObject(obj.shiftRpt66));
  obj.accelCmd67 && jspb.Message.setWrapperField(
      msg, 16, proto.apollo.canbus.Accel_cmd_67.fromObject(obj.accelCmd67));
  obj.latLonHeadingRpt82 && jspb.Message.setWrapperField(
      msg, 17, proto.apollo.canbus.Lat_lon_heading_rpt_82.fromObject(obj.latLonHeadingRpt82));
  obj.globalCmd69 && jspb.Message.setWrapperField(
      msg, 18, proto.apollo.canbus.Global_cmd_69.fromObject(obj.globalCmd69));
  obj.parkingBrakeStatusRpt80 && jspb.Message.setWrapperField(
      msg, 19, proto.apollo.canbus.Parking_brake_status_rpt_80.fromObject(obj.parkingBrakeStatusRpt80));
  obj.yawRateRpt81 && jspb.Message.setWrapperField(
      msg, 20, proto.apollo.canbus.Yaw_rate_rpt_81.fromObject(obj.yawRateRpt81));
  obj.hornRpt79 && jspb.Message.setWrapperField(
      msg, 21, proto.apollo.canbus.Horn_rpt_79.fromObject(obj.hornRpt79));
  obj.hornCmd78 && jspb.Message.setWrapperField(
      msg, 22, proto.apollo.canbus.Horn_cmd_78.fromObject(obj.hornCmd78));
  obj.wiperRpt91 && jspb.Message.setWrapperField(
      msg, 23, proto.apollo.canbus.Wiper_rpt_91.fromObject(obj.wiperRpt91));
  obj.vehicleSpeedRpt6f && jspb.Message.setWrapperField(
      msg, 24, proto.apollo.canbus.Vehicle_speed_rpt_6f.fromObject(obj.vehicleSpeedRpt6f));
  obj.headlightCmd76 && jspb.Message.setWrapperField(
      msg, 25, proto.apollo.canbus.Headlight_cmd_76.fromObject(obj.headlightCmd76));
  obj.steeringMotorRpt274 && jspb.Message.setWrapperField(
      msg, 26, proto.apollo.canbus.Steering_motor_rpt_2_74.fromObject(obj.steeringMotorRpt274));
  obj.brakeMotorRpt271 && jspb.Message.setWrapperField(
      msg, 27, proto.apollo.canbus.Brake_motor_rpt_2_71.fromObject(obj.brakeMotorRpt271));
  obj.steeringMotorRpt173 && jspb.Message.setWrapperField(
      msg, 28, proto.apollo.canbus.Steering_motor_rpt_1_73.fromObject(obj.steeringMotorRpt173));
  obj.wiperCmd90 && jspb.Message.setWrapperField(
      msg, 29, proto.apollo.canbus.Wiper_cmd_90.fromObject(obj.wiperCmd90));
  obj.brakeMotorRpt372 && jspb.Message.setWrapperField(
      msg, 30, proto.apollo.canbus.Brake_motor_rpt_3_72.fromObject(obj.brakeMotorRpt372));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Gem}
 */
proto.apollo.canbus.Gem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Gem;
  return proto.apollo.canbus.Gem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Gem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Gem}
 */
proto.apollo.canbus.Gem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.canbus.Global_rpt_6a;
      reader.readMessage(value,proto.apollo.canbus.Global_rpt_6a.deserializeBinaryFromReader);
      msg.setGlobalRpt6a(value);
      break;
    case 2:
      var value = new proto.apollo.canbus.Brake_cmd_6b;
      reader.readMessage(value,proto.apollo.canbus.Brake_cmd_6b.deserializeBinaryFromReader);
      msg.setBrakeCmd6b(value);
      break;
    case 3:
      var value = new proto.apollo.canbus.Brake_rpt_6c;
      reader.readMessage(value,proto.apollo.canbus.Brake_rpt_6c.deserializeBinaryFromReader);
      msg.setBrakeRpt6c(value);
      break;
    case 4:
      var value = new proto.apollo.canbus.Steering_cmd_6d;
      reader.readMessage(value,proto.apollo.canbus.Steering_cmd_6d.deserializeBinaryFromReader);
      msg.setSteeringCmd6d(value);
      break;
    case 5:
      var value = new proto.apollo.canbus.Steering_rpt_1_6e;
      reader.readMessage(value,proto.apollo.canbus.Steering_rpt_1_6e.deserializeBinaryFromReader);
      msg.setSteeringRpt16e(value);
      break;
    case 6:
      var value = new proto.apollo.canbus.Wheel_speed_rpt_7a;
      reader.readMessage(value,proto.apollo.canbus.Wheel_speed_rpt_7a.deserializeBinaryFromReader);
      msg.setWheelSpeedRpt7a(value);
      break;
    case 7:
      var value = new proto.apollo.canbus.Date_time_rpt_83;
      reader.readMessage(value,proto.apollo.canbus.Date_time_rpt_83.deserializeBinaryFromReader);
      msg.setDateTimeRpt83(value);
      break;
    case 8:
      var value = new proto.apollo.canbus.Brake_motor_rpt_1_70;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_1_70.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt170(value);
      break;
    case 9:
      var value = new proto.apollo.canbus.Headlight_rpt_77;
      reader.readMessage(value,proto.apollo.canbus.Headlight_rpt_77.deserializeBinaryFromReader);
      msg.setHeadlightRpt77(value);
      break;
    case 10:
      var value = new proto.apollo.canbus.Accel_rpt_68;
      reader.readMessage(value,proto.apollo.canbus.Accel_rpt_68.deserializeBinaryFromReader);
      msg.setAccelRpt68(value);
      break;
    case 11:
      var value = new proto.apollo.canbus.Steering_motor_rpt_3_75;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_3_75.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt375(value);
      break;
    case 12:
      var value = new proto.apollo.canbus.Turn_cmd_63;
      reader.readMessage(value,proto.apollo.canbus.Turn_cmd_63.deserializeBinaryFromReader);
      msg.setTurnCmd63(value);
      break;
    case 13:
      var value = new proto.apollo.canbus.Turn_rpt_64;
      reader.readMessage(value,proto.apollo.canbus.Turn_rpt_64.deserializeBinaryFromReader);
      msg.setTurnRpt64(value);
      break;
    case 14:
      var value = new proto.apollo.canbus.Shift_cmd_65;
      reader.readMessage(value,proto.apollo.canbus.Shift_cmd_65.deserializeBinaryFromReader);
      msg.setShiftCmd65(value);
      break;
    case 15:
      var value = new proto.apollo.canbus.Shift_rpt_66;
      reader.readMessage(value,proto.apollo.canbus.Shift_rpt_66.deserializeBinaryFromReader);
      msg.setShiftRpt66(value);
      break;
    case 16:
      var value = new proto.apollo.canbus.Accel_cmd_67;
      reader.readMessage(value,proto.apollo.canbus.Accel_cmd_67.deserializeBinaryFromReader);
      msg.setAccelCmd67(value);
      break;
    case 17:
      var value = new proto.apollo.canbus.Lat_lon_heading_rpt_82;
      reader.readMessage(value,proto.apollo.canbus.Lat_lon_heading_rpt_82.deserializeBinaryFromReader);
      msg.setLatLonHeadingRpt82(value);
      break;
    case 18:
      var value = new proto.apollo.canbus.Global_cmd_69;
      reader.readMessage(value,proto.apollo.canbus.Global_cmd_69.deserializeBinaryFromReader);
      msg.setGlobalCmd69(value);
      break;
    case 19:
      var value = new proto.apollo.canbus.Parking_brake_status_rpt_80;
      reader.readMessage(value,proto.apollo.canbus.Parking_brake_status_rpt_80.deserializeBinaryFromReader);
      msg.setParkingBrakeStatusRpt80(value);
      break;
    case 20:
      var value = new proto.apollo.canbus.Yaw_rate_rpt_81;
      reader.readMessage(value,proto.apollo.canbus.Yaw_rate_rpt_81.deserializeBinaryFromReader);
      msg.setYawRateRpt81(value);
      break;
    case 21:
      var value = new proto.apollo.canbus.Horn_rpt_79;
      reader.readMessage(value,proto.apollo.canbus.Horn_rpt_79.deserializeBinaryFromReader);
      msg.setHornRpt79(value);
      break;
    case 22:
      var value = new proto.apollo.canbus.Horn_cmd_78;
      reader.readMessage(value,proto.apollo.canbus.Horn_cmd_78.deserializeBinaryFromReader);
      msg.setHornCmd78(value);
      break;
    case 23:
      var value = new proto.apollo.canbus.Wiper_rpt_91;
      reader.readMessage(value,proto.apollo.canbus.Wiper_rpt_91.deserializeBinaryFromReader);
      msg.setWiperRpt91(value);
      break;
    case 24:
      var value = new proto.apollo.canbus.Vehicle_speed_rpt_6f;
      reader.readMessage(value,proto.apollo.canbus.Vehicle_speed_rpt_6f.deserializeBinaryFromReader);
      msg.setVehicleSpeedRpt6f(value);
      break;
    case 25:
      var value = new proto.apollo.canbus.Headlight_cmd_76;
      reader.readMessage(value,proto.apollo.canbus.Headlight_cmd_76.deserializeBinaryFromReader);
      msg.setHeadlightCmd76(value);
      break;
    case 26:
      var value = new proto.apollo.canbus.Steering_motor_rpt_2_74;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_2_74.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt274(value);
      break;
    case 27:
      var value = new proto.apollo.canbus.Brake_motor_rpt_2_71;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_2_71.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt271(value);
      break;
    case 28:
      var value = new proto.apollo.canbus.Steering_motor_rpt_1_73;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_1_73.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt173(value);
      break;
    case 29:
      var value = new proto.apollo.canbus.Wiper_cmd_90;
      reader.readMessage(value,proto.apollo.canbus.Wiper_cmd_90.deserializeBinaryFromReader);
      msg.setWiperCmd90(value);
      break;
    case 30:
      var value = new proto.apollo.canbus.Brake_motor_rpt_3_72;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_3_72.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt372(value);
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
proto.apollo.canbus.Gem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Gem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Gem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Gem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobalRpt6a();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.canbus.Global_rpt_6a.serializeBinaryToWriter
    );
  }
  f = message.getBrakeCmd6b();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.canbus.Brake_cmd_6b.serializeBinaryToWriter
    );
  }
  f = message.getBrakeRpt6c();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.canbus.Brake_rpt_6c.serializeBinaryToWriter
    );
  }
  f = message.getSteeringCmd6d();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.canbus.Steering_cmd_6d.serializeBinaryToWriter
    );
  }
  f = message.getSteeringRpt16e();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.canbus.Steering_rpt_1_6e.serializeBinaryToWriter
    );
  }
  f = message.getWheelSpeedRpt7a();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.apollo.canbus.Wheel_speed_rpt_7a.serializeBinaryToWriter
    );
  }
  f = message.getDateTimeRpt83();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.apollo.canbus.Date_time_rpt_83.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt170();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.apollo.canbus.Brake_motor_rpt_1_70.serializeBinaryToWriter
    );
  }
  f = message.getHeadlightRpt77();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.apollo.canbus.Headlight_rpt_77.serializeBinaryToWriter
    );
  }
  f = message.getAccelRpt68();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.apollo.canbus.Accel_rpt_68.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt375();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.apollo.canbus.Steering_motor_rpt_3_75.serializeBinaryToWriter
    );
  }
  f = message.getTurnCmd63();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.apollo.canbus.Turn_cmd_63.serializeBinaryToWriter
    );
  }
  f = message.getTurnRpt64();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.apollo.canbus.Turn_rpt_64.serializeBinaryToWriter
    );
  }
  f = message.getShiftCmd65();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.apollo.canbus.Shift_cmd_65.serializeBinaryToWriter
    );
  }
  f = message.getShiftRpt66();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.canbus.Shift_rpt_66.serializeBinaryToWriter
    );
  }
  f = message.getAccelCmd67();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.apollo.canbus.Accel_cmd_67.serializeBinaryToWriter
    );
  }
  f = message.getLatLonHeadingRpt82();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.apollo.canbus.Lat_lon_heading_rpt_82.serializeBinaryToWriter
    );
  }
  f = message.getGlobalCmd69();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.apollo.canbus.Global_cmd_69.serializeBinaryToWriter
    );
  }
  f = message.getParkingBrakeStatusRpt80();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.apollo.canbus.Parking_brake_status_rpt_80.serializeBinaryToWriter
    );
  }
  f = message.getYawRateRpt81();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.apollo.canbus.Yaw_rate_rpt_81.serializeBinaryToWriter
    );
  }
  f = message.getHornRpt79();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.apollo.canbus.Horn_rpt_79.serializeBinaryToWriter
    );
  }
  f = message.getHornCmd78();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.apollo.canbus.Horn_cmd_78.serializeBinaryToWriter
    );
  }
  f = message.getWiperRpt91();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.apollo.canbus.Wiper_rpt_91.serializeBinaryToWriter
    );
  }
  f = message.getVehicleSpeedRpt6f();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.apollo.canbus.Vehicle_speed_rpt_6f.serializeBinaryToWriter
    );
  }
  f = message.getHeadlightCmd76();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.apollo.canbus.Headlight_cmd_76.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt274();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.apollo.canbus.Steering_motor_rpt_2_74.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt271();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.apollo.canbus.Brake_motor_rpt_2_71.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt173();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.apollo.canbus.Steering_motor_rpt_1_73.serializeBinaryToWriter
    );
  }
  f = message.getWiperCmd90();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.apollo.canbus.Wiper_cmd_90.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt372();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.apollo.canbus.Brake_motor_rpt_3_72.serializeBinaryToWriter
    );
  }
};


/**
 * optional Global_rpt_6a global_rpt_6a = 1;
 * @return {?proto.apollo.canbus.Global_rpt_6a}
 */
proto.apollo.canbus.Gem.prototype.getGlobalRpt6a = function() {
  return /** @type{?proto.apollo.canbus.Global_rpt_6a} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Global_rpt_6a, 1));
};


/**
 * @param {?proto.apollo.canbus.Global_rpt_6a|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setGlobalRpt6a = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearGlobalRpt6a = function() {
  return this.setGlobalRpt6a(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasGlobalRpt6a = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Brake_cmd_6b brake_cmd_6b = 2;
 * @return {?proto.apollo.canbus.Brake_cmd_6b}
 */
proto.apollo.canbus.Gem.prototype.getBrakeCmd6b = function() {
  return /** @type{?proto.apollo.canbus.Brake_cmd_6b} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_cmd_6b, 2));
};


/**
 * @param {?proto.apollo.canbus.Brake_cmd_6b|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setBrakeCmd6b = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearBrakeCmd6b = function() {
  return this.setBrakeCmd6b(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasBrakeCmd6b = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Brake_rpt_6c brake_rpt_6c = 3;
 * @return {?proto.apollo.canbus.Brake_rpt_6c}
 */
proto.apollo.canbus.Gem.prototype.getBrakeRpt6c = function() {
  return /** @type{?proto.apollo.canbus.Brake_rpt_6c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_rpt_6c, 3));
};


/**
 * @param {?proto.apollo.canbus.Brake_rpt_6c|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setBrakeRpt6c = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearBrakeRpt6c = function() {
  return this.setBrakeRpt6c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasBrakeRpt6c = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Steering_cmd_6d steering_cmd_6d = 4;
 * @return {?proto.apollo.canbus.Steering_cmd_6d}
 */
proto.apollo.canbus.Gem.prototype.getSteeringCmd6d = function() {
  return /** @type{?proto.apollo.canbus.Steering_cmd_6d} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_cmd_6d, 4));
};


/**
 * @param {?proto.apollo.canbus.Steering_cmd_6d|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setSteeringCmd6d = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearSteeringCmd6d = function() {
  return this.setSteeringCmd6d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasSteeringCmd6d = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Steering_rpt_1_6e steering_rpt_1_6e = 5;
 * @return {?proto.apollo.canbus.Steering_rpt_1_6e}
 */
proto.apollo.canbus.Gem.prototype.getSteeringRpt16e = function() {
  return /** @type{?proto.apollo.canbus.Steering_rpt_1_6e} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_rpt_1_6e, 5));
};


/**
 * @param {?proto.apollo.canbus.Steering_rpt_1_6e|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setSteeringRpt16e = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearSteeringRpt16e = function() {
  return this.setSteeringRpt16e(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasSteeringRpt16e = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Wheel_speed_rpt_7a wheel_speed_rpt_7a = 6;
 * @return {?proto.apollo.canbus.Wheel_speed_rpt_7a}
 */
proto.apollo.canbus.Gem.prototype.getWheelSpeedRpt7a = function() {
  return /** @type{?proto.apollo.canbus.Wheel_speed_rpt_7a} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wheel_speed_rpt_7a, 6));
};


/**
 * @param {?proto.apollo.canbus.Wheel_speed_rpt_7a|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setWheelSpeedRpt7a = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearWheelSpeedRpt7a = function() {
  return this.setWheelSpeedRpt7a(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasWheelSpeedRpt7a = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Date_time_rpt_83 date_time_rpt_83 = 7;
 * @return {?proto.apollo.canbus.Date_time_rpt_83}
 */
proto.apollo.canbus.Gem.prototype.getDateTimeRpt83 = function() {
  return /** @type{?proto.apollo.canbus.Date_time_rpt_83} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Date_time_rpt_83, 7));
};


/**
 * @param {?proto.apollo.canbus.Date_time_rpt_83|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setDateTimeRpt83 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearDateTimeRpt83 = function() {
  return this.setDateTimeRpt83(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasDateTimeRpt83 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Brake_motor_rpt_1_70 brake_motor_rpt_1_70 = 8;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_1_70}
 */
proto.apollo.canbus.Gem.prototype.getBrakeMotorRpt170 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_1_70} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_1_70, 8));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_1_70|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setBrakeMotorRpt170 = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearBrakeMotorRpt170 = function() {
  return this.setBrakeMotorRpt170(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasBrakeMotorRpt170 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Headlight_rpt_77 headlight_rpt_77 = 9;
 * @return {?proto.apollo.canbus.Headlight_rpt_77}
 */
proto.apollo.canbus.Gem.prototype.getHeadlightRpt77 = function() {
  return /** @type{?proto.apollo.canbus.Headlight_rpt_77} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Headlight_rpt_77, 9));
};


/**
 * @param {?proto.apollo.canbus.Headlight_rpt_77|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setHeadlightRpt77 = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearHeadlightRpt77 = function() {
  return this.setHeadlightRpt77(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasHeadlightRpt77 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Accel_rpt_68 accel_rpt_68 = 10;
 * @return {?proto.apollo.canbus.Accel_rpt_68}
 */
proto.apollo.canbus.Gem.prototype.getAccelRpt68 = function() {
  return /** @type{?proto.apollo.canbus.Accel_rpt_68} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Accel_rpt_68, 10));
};


/**
 * @param {?proto.apollo.canbus.Accel_rpt_68|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setAccelRpt68 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearAccelRpt68 = function() {
  return this.setAccelRpt68(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasAccelRpt68 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Steering_motor_rpt_3_75 steering_motor_rpt_3_75 = 11;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_3_75}
 */
proto.apollo.canbus.Gem.prototype.getSteeringMotorRpt375 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_3_75} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_3_75, 11));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_3_75|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setSteeringMotorRpt375 = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearSteeringMotorRpt375 = function() {
  return this.setSteeringMotorRpt375(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasSteeringMotorRpt375 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Turn_cmd_63 turn_cmd_63 = 12;
 * @return {?proto.apollo.canbus.Turn_cmd_63}
 */
proto.apollo.canbus.Gem.prototype.getTurnCmd63 = function() {
  return /** @type{?proto.apollo.canbus.Turn_cmd_63} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Turn_cmd_63, 12));
};


/**
 * @param {?proto.apollo.canbus.Turn_cmd_63|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setTurnCmd63 = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearTurnCmd63 = function() {
  return this.setTurnCmd63(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasTurnCmd63 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Turn_rpt_64 turn_rpt_64 = 13;
 * @return {?proto.apollo.canbus.Turn_rpt_64}
 */
proto.apollo.canbus.Gem.prototype.getTurnRpt64 = function() {
  return /** @type{?proto.apollo.canbus.Turn_rpt_64} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Turn_rpt_64, 13));
};


/**
 * @param {?proto.apollo.canbus.Turn_rpt_64|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setTurnRpt64 = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearTurnRpt64 = function() {
  return this.setTurnRpt64(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasTurnRpt64 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Shift_cmd_65 shift_cmd_65 = 14;
 * @return {?proto.apollo.canbus.Shift_cmd_65}
 */
proto.apollo.canbus.Gem.prototype.getShiftCmd65 = function() {
  return /** @type{?proto.apollo.canbus.Shift_cmd_65} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Shift_cmd_65, 14));
};


/**
 * @param {?proto.apollo.canbus.Shift_cmd_65|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setShiftCmd65 = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearShiftCmd65 = function() {
  return this.setShiftCmd65(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasShiftCmd65 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Shift_rpt_66 shift_rpt_66 = 15;
 * @return {?proto.apollo.canbus.Shift_rpt_66}
 */
proto.apollo.canbus.Gem.prototype.getShiftRpt66 = function() {
  return /** @type{?proto.apollo.canbus.Shift_rpt_66} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Shift_rpt_66, 15));
};


/**
 * @param {?proto.apollo.canbus.Shift_rpt_66|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setShiftRpt66 = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearShiftRpt66 = function() {
  return this.setShiftRpt66(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasShiftRpt66 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Accel_cmd_67 accel_cmd_67 = 16;
 * @return {?proto.apollo.canbus.Accel_cmd_67}
 */
proto.apollo.canbus.Gem.prototype.getAccelCmd67 = function() {
  return /** @type{?proto.apollo.canbus.Accel_cmd_67} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Accel_cmd_67, 16));
};


/**
 * @param {?proto.apollo.canbus.Accel_cmd_67|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setAccelCmd67 = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearAccelCmd67 = function() {
  return this.setAccelCmd67(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasAccelCmd67 = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Lat_lon_heading_rpt_82 lat_lon_heading_rpt_82 = 17;
 * @return {?proto.apollo.canbus.Lat_lon_heading_rpt_82}
 */
proto.apollo.canbus.Gem.prototype.getLatLonHeadingRpt82 = function() {
  return /** @type{?proto.apollo.canbus.Lat_lon_heading_rpt_82} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Lat_lon_heading_rpt_82, 17));
};


/**
 * @param {?proto.apollo.canbus.Lat_lon_heading_rpt_82|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setLatLonHeadingRpt82 = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearLatLonHeadingRpt82 = function() {
  return this.setLatLonHeadingRpt82(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasLatLonHeadingRpt82 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Global_cmd_69 global_cmd_69 = 18;
 * @return {?proto.apollo.canbus.Global_cmd_69}
 */
proto.apollo.canbus.Gem.prototype.getGlobalCmd69 = function() {
  return /** @type{?proto.apollo.canbus.Global_cmd_69} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Global_cmd_69, 18));
};


/**
 * @param {?proto.apollo.canbus.Global_cmd_69|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setGlobalCmd69 = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearGlobalCmd69 = function() {
  return this.setGlobalCmd69(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasGlobalCmd69 = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Parking_brake_status_rpt_80 parking_brake_status_rpt_80 = 19;
 * @return {?proto.apollo.canbus.Parking_brake_status_rpt_80}
 */
proto.apollo.canbus.Gem.prototype.getParkingBrakeStatusRpt80 = function() {
  return /** @type{?proto.apollo.canbus.Parking_brake_status_rpt_80} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Parking_brake_status_rpt_80, 19));
};


/**
 * @param {?proto.apollo.canbus.Parking_brake_status_rpt_80|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setParkingBrakeStatusRpt80 = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearParkingBrakeStatusRpt80 = function() {
  return this.setParkingBrakeStatusRpt80(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasParkingBrakeStatusRpt80 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Yaw_rate_rpt_81 yaw_rate_rpt_81 = 20;
 * @return {?proto.apollo.canbus.Yaw_rate_rpt_81}
 */
proto.apollo.canbus.Gem.prototype.getYawRateRpt81 = function() {
  return /** @type{?proto.apollo.canbus.Yaw_rate_rpt_81} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Yaw_rate_rpt_81, 20));
};


/**
 * @param {?proto.apollo.canbus.Yaw_rate_rpt_81|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setYawRateRpt81 = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearYawRateRpt81 = function() {
  return this.setYawRateRpt81(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasYawRateRpt81 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Horn_rpt_79 horn_rpt_79 = 21;
 * @return {?proto.apollo.canbus.Horn_rpt_79}
 */
proto.apollo.canbus.Gem.prototype.getHornRpt79 = function() {
  return /** @type{?proto.apollo.canbus.Horn_rpt_79} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Horn_rpt_79, 21));
};


/**
 * @param {?proto.apollo.canbus.Horn_rpt_79|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setHornRpt79 = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearHornRpt79 = function() {
  return this.setHornRpt79(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasHornRpt79 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Horn_cmd_78 horn_cmd_78 = 22;
 * @return {?proto.apollo.canbus.Horn_cmd_78}
 */
proto.apollo.canbus.Gem.prototype.getHornCmd78 = function() {
  return /** @type{?proto.apollo.canbus.Horn_cmd_78} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Horn_cmd_78, 22));
};


/**
 * @param {?proto.apollo.canbus.Horn_cmd_78|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setHornCmd78 = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearHornCmd78 = function() {
  return this.setHornCmd78(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasHornCmd78 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Wiper_rpt_91 wiper_rpt_91 = 23;
 * @return {?proto.apollo.canbus.Wiper_rpt_91}
 */
proto.apollo.canbus.Gem.prototype.getWiperRpt91 = function() {
  return /** @type{?proto.apollo.canbus.Wiper_rpt_91} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wiper_rpt_91, 23));
};


/**
 * @param {?proto.apollo.canbus.Wiper_rpt_91|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setWiperRpt91 = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearWiperRpt91 = function() {
  return this.setWiperRpt91(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasWiperRpt91 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Vehicle_speed_rpt_6f vehicle_speed_rpt_6f = 24;
 * @return {?proto.apollo.canbus.Vehicle_speed_rpt_6f}
 */
proto.apollo.canbus.Gem.prototype.getVehicleSpeedRpt6f = function() {
  return /** @type{?proto.apollo.canbus.Vehicle_speed_rpt_6f} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Vehicle_speed_rpt_6f, 24));
};


/**
 * @param {?proto.apollo.canbus.Vehicle_speed_rpt_6f|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setVehicleSpeedRpt6f = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearVehicleSpeedRpt6f = function() {
  return this.setVehicleSpeedRpt6f(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasVehicleSpeedRpt6f = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional Headlight_cmd_76 headlight_cmd_76 = 25;
 * @return {?proto.apollo.canbus.Headlight_cmd_76}
 */
proto.apollo.canbus.Gem.prototype.getHeadlightCmd76 = function() {
  return /** @type{?proto.apollo.canbus.Headlight_cmd_76} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Headlight_cmd_76, 25));
};


/**
 * @param {?proto.apollo.canbus.Headlight_cmd_76|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setHeadlightCmd76 = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearHeadlightCmd76 = function() {
  return this.setHeadlightCmd76(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasHeadlightCmd76 = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Steering_motor_rpt_2_74 steering_motor_rpt_2_74 = 26;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_2_74}
 */
proto.apollo.canbus.Gem.prototype.getSteeringMotorRpt274 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_2_74} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_2_74, 26));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_2_74|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setSteeringMotorRpt274 = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearSteeringMotorRpt274 = function() {
  return this.setSteeringMotorRpt274(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasSteeringMotorRpt274 = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Brake_motor_rpt_2_71 brake_motor_rpt_2_71 = 27;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_2_71}
 */
proto.apollo.canbus.Gem.prototype.getBrakeMotorRpt271 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_2_71} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_2_71, 27));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_2_71|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setBrakeMotorRpt271 = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearBrakeMotorRpt271 = function() {
  return this.setBrakeMotorRpt271(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasBrakeMotorRpt271 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Steering_motor_rpt_1_73 steering_motor_rpt_1_73 = 28;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_1_73}
 */
proto.apollo.canbus.Gem.prototype.getSteeringMotorRpt173 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_1_73} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_1_73, 28));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_1_73|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setSteeringMotorRpt173 = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearSteeringMotorRpt173 = function() {
  return this.setSteeringMotorRpt173(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasSteeringMotorRpt173 = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional Wiper_cmd_90 wiper_cmd_90 = 29;
 * @return {?proto.apollo.canbus.Wiper_cmd_90}
 */
proto.apollo.canbus.Gem.prototype.getWiperCmd90 = function() {
  return /** @type{?proto.apollo.canbus.Wiper_cmd_90} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wiper_cmd_90, 29));
};


/**
 * @param {?proto.apollo.canbus.Wiper_cmd_90|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setWiperCmd90 = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearWiperCmd90 = function() {
  return this.setWiperCmd90(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasWiperCmd90 = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Brake_motor_rpt_3_72 brake_motor_rpt_3_72 = 30;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_3_72}
 */
proto.apollo.canbus.Gem.prototype.getBrakeMotorRpt372 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_3_72} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_3_72, 30));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_3_72|undefined} value
 * @return {!proto.apollo.canbus.Gem} returns this
*/
proto.apollo.canbus.Gem.prototype.setBrakeMotorRpt372 = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Gem} returns this
 */
proto.apollo.canbus.Gem.prototype.clearBrakeMotorRpt372 = function() {
  return this.setBrakeMotorRpt372(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Gem.prototype.hasBrakeMotorRpt372 = function() {
  return jspb.Message.getField(this, 30) != null;
};


goog.object.extend(exports, proto.apollo.canbus);
