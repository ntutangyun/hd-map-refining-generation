// source: modules/canbus/proto/lexus.proto
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

goog.exportSymbol('proto.apollo.canbus.Accel_aux_rpt_300', null, global);
goog.exportSymbol('proto.apollo.canbus.Accel_cmd_100', null, global);
goog.exportSymbol('proto.apollo.canbus.Accel_rpt_200', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_aux_rpt_304', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_cmd_104', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_1_401', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_2_402', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_motor_rpt_3_403', null, global);
goog.exportSymbol('proto.apollo.canbus.Brake_rpt_204', null, global);
goog.exportSymbol('proto.apollo.canbus.Component_rpt_20', null, global);
goog.exportSymbol('proto.apollo.canbus.Component_rpt_20.Component_funcType', null, global);
goog.exportSymbol('proto.apollo.canbus.Component_rpt_20.Component_typeType', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_cmd_108', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_rpt_208', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_cmd_10c', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_rpt_20c', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_cmd_110', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_rpt_210', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Date_time_rpt_40f', null, global);
goog.exportSymbol('proto.apollo.canbus.Detected_object_rpt_411', null, global);
goog.exportSymbol('proto.apollo.canbus.Door_rpt_417', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_10', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType', null, global);
goog.exportSymbol('proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType', null, global);
goog.exportSymbol('proto.apollo.canbus.Hazard_lights_cmd_114', null, global);
goog.exportSymbol('proto.apollo.canbus.Hazard_lights_rpt_214', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_aux_rpt_318', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_cmd_118', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_218', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_218.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Headlight_rpt_218.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_cmd_11c', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_21c', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_21c.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Horn_rpt_21c.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Interior_lights_rpt_416', null, global);
goog.exportSymbol('proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType', null, global);
goog.exportSymbol('proto.apollo.canbus.Lat_lon_heading_rpt_40e', null, global);
goog.exportSymbol('proto.apollo.canbus.Lexus', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_cmd_120', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_rpt_220', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Media_controls_rpt_220.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Occupancy_rpt_415', null, global);
goog.exportSymbol('proto.apollo.canbus.Parking_brake_cmd_124', null, global);
goog.exportSymbol('proto.apollo.canbus.Parking_brake_rpt_224', null, global);
goog.exportSymbol('proto.apollo.canbus.Rear_lights_rpt_418', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_aux_rpt_328', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_cmd_128', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_cmd_128.Shift_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_228', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_228.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_228.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Shift_rpt_228.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_aux_rpt_32c', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_cmd_12c', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_1_404', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_2_405', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_motor_rpt_3_406', null, global);
goog.exportSymbol('proto.apollo.canbus.Steering_rpt_22c', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_aux_rpt_330', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_cmd_130', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_230', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_230.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_230.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Turn_rpt_230.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Veh_dynamics_rpt_413', null, global);
goog.exportSymbol('proto.apollo.canbus.Veh_specific_rpt_1_412', null, global);
goog.exportSymbol('proto.apollo.canbus.Vehicle_speed_rpt_400', null, global);
goog.exportSymbol('proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType', null, global);
goog.exportSymbol('proto.apollo.canbus.Vin_rpt_414', null, global);
goog.exportSymbol('proto.apollo.canbus.Wheel_speed_rpt_407', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_aux_rpt_334', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_cmd_134', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_234', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_234.Manual_inputType', null, global);
goog.exportSymbol('proto.apollo.canbus.Wiper_rpt_234.Output_valueType', null, global);
goog.exportSymbol('proto.apollo.canbus.Yaw_rate_rpt_40d', null, global);
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
proto.apollo.canbus.Hazard_lights_rpt_214 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Hazard_lights_rpt_214, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Hazard_lights_rpt_214.displayName = 'proto.apollo.canbus.Hazard_lights_rpt_214';
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
proto.apollo.canbus.Steering_cmd_12c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_cmd_12c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_cmd_12c.displayName = 'proto.apollo.canbus.Steering_cmd_12c';
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
proto.apollo.canbus.Dash_controls_right_rpt_210 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Dash_controls_right_rpt_210, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Dash_controls_right_rpt_210.displayName = 'proto.apollo.canbus.Dash_controls_right_rpt_210';
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
proto.apollo.canbus.Dash_controls_left_cmd_10c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Dash_controls_left_cmd_10c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Dash_controls_left_cmd_10c.displayName = 'proto.apollo.canbus.Dash_controls_left_cmd_10c';
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
proto.apollo.canbus.Steering_rpt_22c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_rpt_22c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_rpt_22c.displayName = 'proto.apollo.canbus.Steering_rpt_22c';
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
proto.apollo.canbus.Turn_aux_rpt_330 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Turn_aux_rpt_330, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Turn_aux_rpt_330.displayName = 'proto.apollo.canbus.Turn_aux_rpt_330';
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
proto.apollo.canbus.Headlight_rpt_218 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Headlight_rpt_218, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Headlight_rpt_218.displayName = 'proto.apollo.canbus.Headlight_rpt_218';
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
proto.apollo.canbus.Hazard_lights_cmd_114 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Hazard_lights_cmd_114, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Hazard_lights_cmd_114.displayName = 'proto.apollo.canbus.Hazard_lights_cmd_114';
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
proto.apollo.canbus.Dash_controls_left_rpt_20c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Dash_controls_left_rpt_20c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Dash_controls_left_rpt_20c.displayName = 'proto.apollo.canbus.Dash_controls_left_rpt_20c';
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
proto.apollo.canbus.Headlight_aux_rpt_318 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Headlight_aux_rpt_318, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Headlight_aux_rpt_318.displayName = 'proto.apollo.canbus.Headlight_aux_rpt_318';
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
proto.apollo.canbus.Dash_controls_right_cmd_110 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Dash_controls_right_cmd_110, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Dash_controls_right_cmd_110.displayName = 'proto.apollo.canbus.Dash_controls_right_cmd_110';
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
proto.apollo.canbus.Wiper_cmd_134 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wiper_cmd_134, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wiper_cmd_134.displayName = 'proto.apollo.canbus.Wiper_cmd_134';
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
proto.apollo.canbus.Wiper_rpt_234 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wiper_rpt_234, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wiper_rpt_234.displayName = 'proto.apollo.canbus.Wiper_rpt_234';
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
proto.apollo.canbus.Turn_rpt_230 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Turn_rpt_230, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Turn_rpt_230.displayName = 'proto.apollo.canbus.Turn_rpt_230';
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
proto.apollo.canbus.Headlight_cmd_118 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Headlight_cmd_118, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Headlight_cmd_118.displayName = 'proto.apollo.canbus.Headlight_cmd_118';
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
proto.apollo.canbus.Door_rpt_417 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Door_rpt_417, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Door_rpt_417.displayName = 'proto.apollo.canbus.Door_rpt_417';
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
proto.apollo.canbus.Component_rpt_20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Component_rpt_20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Component_rpt_20.displayName = 'proto.apollo.canbus.Component_rpt_20';
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
proto.apollo.canbus.Wheel_speed_rpt_407 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wheel_speed_rpt_407, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wheel_speed_rpt_407.displayName = 'proto.apollo.canbus.Wheel_speed_rpt_407';
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
proto.apollo.canbus.Steering_motor_rpt_3_406 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_3_406, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_3_406.displayName = 'proto.apollo.canbus.Steering_motor_rpt_3_406';
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
proto.apollo.canbus.Steering_motor_rpt_2_405 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_2_405, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_2_405.displayName = 'proto.apollo.canbus.Steering_motor_rpt_2_405';
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
proto.apollo.canbus.Steering_motor_rpt_1_404 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_motor_rpt_1_404, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_motor_rpt_1_404.displayName = 'proto.apollo.canbus.Steering_motor_rpt_1_404';
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
proto.apollo.canbus.Brake_motor_rpt_3_403 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_3_403, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_3_403.displayName = 'proto.apollo.canbus.Brake_motor_rpt_3_403';
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
proto.apollo.canbus.Brake_motor_rpt_2_402 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_2_402, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_2_402.displayName = 'proto.apollo.canbus.Brake_motor_rpt_2_402';
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
proto.apollo.canbus.Brake_motor_rpt_1_401 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_motor_rpt_1_401, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_motor_rpt_1_401.displayName = 'proto.apollo.canbus.Brake_motor_rpt_1_401';
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
proto.apollo.canbus.Wiper_aux_rpt_334 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Wiper_aux_rpt_334, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Wiper_aux_rpt_334.displayName = 'proto.apollo.canbus.Wiper_aux_rpt_334';
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
proto.apollo.canbus.Shift_aux_rpt_328 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Shift_aux_rpt_328, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Shift_aux_rpt_328.displayName = 'proto.apollo.canbus.Shift_aux_rpt_328';
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
proto.apollo.canbus.Accel_rpt_200 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Accel_rpt_200, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Accel_rpt_200.displayName = 'proto.apollo.canbus.Accel_rpt_200';
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
proto.apollo.canbus.Brake_rpt_204 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_rpt_204, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_rpt_204.displayName = 'proto.apollo.canbus.Brake_rpt_204';
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
proto.apollo.canbus.Horn_cmd_11c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Horn_cmd_11c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Horn_cmd_11c.displayName = 'proto.apollo.canbus.Horn_cmd_11c';
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
proto.apollo.canbus.Global_rpt_10 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Global_rpt_10, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Global_rpt_10.displayName = 'proto.apollo.canbus.Global_rpt_10';
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
proto.apollo.canbus.Accel_aux_rpt_300 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Accel_aux_rpt_300, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Accel_aux_rpt_300.displayName = 'proto.apollo.canbus.Accel_aux_rpt_300';
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
proto.apollo.canbus.Cruise_control_buttons_rpt_208 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Cruise_control_buttons_rpt_208, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Cruise_control_buttons_rpt_208.displayName = 'proto.apollo.canbus.Cruise_control_buttons_rpt_208';
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
proto.apollo.canbus.Vehicle_speed_rpt_400 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Vehicle_speed_rpt_400, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Vehicle_speed_rpt_400.displayName = 'proto.apollo.canbus.Vehicle_speed_rpt_400';
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
proto.apollo.canbus.Brake_aux_rpt_304 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_aux_rpt_304, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_aux_rpt_304.displayName = 'proto.apollo.canbus.Brake_aux_rpt_304';
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
proto.apollo.canbus.Media_controls_cmd_120 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Media_controls_cmd_120, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Media_controls_cmd_120.displayName = 'proto.apollo.canbus.Media_controls_cmd_120';
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
proto.apollo.canbus.Cruise_control_buttons_cmd_108 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Cruise_control_buttons_cmd_108, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Cruise_control_buttons_cmd_108.displayName = 'proto.apollo.canbus.Cruise_control_buttons_cmd_108';
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
proto.apollo.canbus.Parking_brake_cmd_124 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Parking_brake_cmd_124, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Parking_brake_cmd_124.displayName = 'proto.apollo.canbus.Parking_brake_cmd_124';
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
proto.apollo.canbus.Horn_rpt_21c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Horn_rpt_21c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Horn_rpt_21c.displayName = 'proto.apollo.canbus.Horn_rpt_21c';
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
proto.apollo.canbus.Shift_rpt_228 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Shift_rpt_228, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Shift_rpt_228.displayName = 'proto.apollo.canbus.Shift_rpt_228';
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
proto.apollo.canbus.Shift_cmd_128 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Shift_cmd_128, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Shift_cmd_128.displayName = 'proto.apollo.canbus.Shift_cmd_128';
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
proto.apollo.canbus.Accel_cmd_100 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Accel_cmd_100, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Accel_cmd_100.displayName = 'proto.apollo.canbus.Accel_cmd_100';
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
proto.apollo.canbus.Parking_brake_rpt_224 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Parking_brake_rpt_224, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Parking_brake_rpt_224.displayName = 'proto.apollo.canbus.Parking_brake_rpt_224';
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
proto.apollo.canbus.Brake_cmd_104 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Brake_cmd_104, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Brake_cmd_104.displayName = 'proto.apollo.canbus.Brake_cmd_104';
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
proto.apollo.canbus.Media_controls_rpt_220 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Media_controls_rpt_220, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Media_controls_rpt_220.displayName = 'proto.apollo.canbus.Media_controls_rpt_220';
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
proto.apollo.canbus.Steering_aux_rpt_32c = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Steering_aux_rpt_32c, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Steering_aux_rpt_32c.displayName = 'proto.apollo.canbus.Steering_aux_rpt_32c';
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
proto.apollo.canbus.Lat_lon_heading_rpt_40e = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Lat_lon_heading_rpt_40e, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Lat_lon_heading_rpt_40e.displayName = 'proto.apollo.canbus.Lat_lon_heading_rpt_40e';
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
proto.apollo.canbus.Yaw_rate_rpt_40d = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Yaw_rate_rpt_40d, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Yaw_rate_rpt_40d.displayName = 'proto.apollo.canbus.Yaw_rate_rpt_40d';
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
proto.apollo.canbus.Date_time_rpt_40f = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Date_time_rpt_40f, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Date_time_rpt_40f.displayName = 'proto.apollo.canbus.Date_time_rpt_40f';
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
proto.apollo.canbus.Vin_rpt_414 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Vin_rpt_414, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Vin_rpt_414.displayName = 'proto.apollo.canbus.Vin_rpt_414';
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
proto.apollo.canbus.Occupancy_rpt_415 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Occupancy_rpt_415, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Occupancy_rpt_415.displayName = 'proto.apollo.canbus.Occupancy_rpt_415';
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
proto.apollo.canbus.Interior_lights_rpt_416 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Interior_lights_rpt_416, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Interior_lights_rpt_416.displayName = 'proto.apollo.canbus.Interior_lights_rpt_416';
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
proto.apollo.canbus.Turn_cmd_130 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Turn_cmd_130, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Turn_cmd_130.displayName = 'proto.apollo.canbus.Turn_cmd_130';
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
proto.apollo.canbus.Detected_object_rpt_411 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Detected_object_rpt_411, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Detected_object_rpt_411.displayName = 'proto.apollo.canbus.Detected_object_rpt_411';
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
proto.apollo.canbus.Veh_specific_rpt_1_412 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Veh_specific_rpt_1_412, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Veh_specific_rpt_1_412.displayName = 'proto.apollo.canbus.Veh_specific_rpt_1_412';
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
proto.apollo.canbus.Veh_dynamics_rpt_413 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Veh_dynamics_rpt_413, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Veh_dynamics_rpt_413.displayName = 'proto.apollo.canbus.Veh_dynamics_rpt_413';
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
proto.apollo.canbus.Rear_lights_rpt_418 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Rear_lights_rpt_418, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Rear_lights_rpt_418.displayName = 'proto.apollo.canbus.Rear_lights_rpt_418';
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
proto.apollo.canbus.Lexus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.canbus.Lexus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.canbus.Lexus.displayName = 'proto.apollo.canbus.Lexus';
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
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Hazard_lights_rpt_214.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Hazard_lights_rpt_214} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Hazard_lights_rpt_214.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Hazard_lights_rpt_214 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Hazard_lights_rpt_214.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Hazard_lights_rpt_214.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Hazard_lights_rpt_214();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 3, obj.manualInput);
  obj.vehicleFault != null && jspb.Message.setField(msg, 4, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 5, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 6, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 7, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 8, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 9, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 10, obj.commandOutputFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Hazard_lights_rpt_214;
  return proto.apollo.canbus.Hazard_lights_rpt_214.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Hazard_lights_rpt_214} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setManualInput(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
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
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Hazard_lights_rpt_214.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Hazard_lights_rpt_214} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Hazard_lights_rpt_214.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool output_value = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getOutputValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool commanded_value = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getCommandedValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool manual_input = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getManualInput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool vehicle_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pacmod_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool override_active = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool output_reported_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool input_output_fault = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool command_output_fault = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_rpt_214} returns this
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_rpt_214.prototype.hasCommandOutputFault = function() {
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
proto.apollo.canbus.Steering_cmd_12c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_cmd_12c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_cmd_12c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_cmd_12c.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    position: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    rotationRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_cmd_12c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_cmd_12c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.position;

  /** @type {?|undefined} */
  this.rotationRate;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_cmd_12c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_cmd_12c}
 */
proto.apollo.canbus.Steering_cmd_12c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_cmd_12c();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.position != null && jspb.Message.setField(msg, 5, obj.position);
  obj.rotationRate != null && jspb.Message.setField(msg, 6, obj.rotationRate);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_cmd_12c}
 */
proto.apollo.canbus.Steering_cmd_12c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_cmd_12c;
  return proto.apollo.canbus.Steering_cmd_12c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_cmd_12c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_cmd_12c}
 */
proto.apollo.canbus.Steering_cmd_12c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPosition(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationRate(value);
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
proto.apollo.canbus.Steering_cmd_12c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_cmd_12c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_cmd_12c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_cmd_12c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double position = 5;
 * @return {number}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setPosition = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearPosition = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double rotation_rate = 6;
 * @return {number}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.getRotationRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.setRotationRate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_cmd_12c} returns this
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.clearRotationRate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_cmd_12c.prototype.hasRotationRate = function() {
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
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Dash_controls_right_rpt_210.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Dash_controls_right_rpt_210 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Dash_controls_right_rpt_210();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.vehicleFault != null && jspb.Message.setField(msg, 3, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 4, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 5, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 6, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 7, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 8, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 9, obj.commandOutputFault);
  obj.manualInput != null && jspb.Message.setField(msg, 10, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Dash_controls_right_rpt_210;
  return proto.apollo.canbus.Dash_controls_right_rpt_210.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType} */ (reader.readEnum());
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
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Dash_controls_right_rpt_210.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType} */ (jspb.Message.getField(message, 2));
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
  f = /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType = {
  OUTPUT_VALUE_DASH_CONTROL_NONE: 0,
  OUTPUT_VALUE_DASH_CONTROL_OK: 1,
  OUTPUT_VALUE_DASH_CONTROL_LEFT: 2,
  OUTPUT_VALUE_DASH_CONTROL_RIGHT: 3,
  OUTPUT_VALUE_DASH_CONTROL_UP: 4,
  OUTPUT_VALUE_DASH_CONTROL_DOWN: 5
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType = {
  COMMANDED_VALUE_DASH_CONTROL_NONE: 0,
  COMMANDED_VALUE_DASH_CONTROL_OK: 1,
  COMMANDED_VALUE_DASH_CONTROL_LEFT: 2,
  COMMANDED_VALUE_DASH_CONTROL_RIGHT: 3,
  COMMANDED_VALUE_DASH_CONTROL_UP: 4,
  COMMANDED_VALUE_DASH_CONTROL_DOWN: 5
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType = {
  MANUAL_INPUT_DASH_CONTROL_NONE: 0,
  MANUAL_INPUT_DASH_CONTROL_OK: 1,
  MANUAL_INPUT_DASH_CONTROL_LEFT: 2,
  MANUAL_INPUT_DASH_CONTROL_RIGHT: 3,
  MANUAL_INPUT_DASH_CONTROL_UP: 4,
  MANUAL_INPUT_DASH_CONTROL_DOWN: 5
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210.Output_valueType} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool vehicle_fault = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool pacmod_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool override_active = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool output_reported_fault = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool input_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool enabled = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool command_output_fault = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Manual_inputType manual_input = 10;
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_right_rpt_210.Manual_inputType} value
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_rpt_210} returns this
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_rpt_210.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Dash_controls_left_cmd_10c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Dash_controls_left_cmd_10c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    dashControlsButton: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Dash_controls_left_cmd_10c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.dashControlsButton;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Dash_controls_left_cmd_10c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Dash_controls_left_cmd_10c();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.dashControlsButton != null && jspb.Message.setField(msg, 5, obj.dashControlsButton);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Dash_controls_left_cmd_10c;
  return proto.apollo.canbus.Dash_controls_left_cmd_10c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Dash_controls_left_cmd_10c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType} */ (reader.readEnum());
      msg.setDashControlsButton(value);
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
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Dash_controls_left_cmd_10c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Dash_controls_left_cmd_10c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType = {
  DASH_CONTROLS_BUTTON_DASH_CONTROL_NONE: 0,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_OK: 1,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_LEFT: 2,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_RIGHT: 3,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_UP: 4,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_DOWN: 5
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dash_controls_buttonType dash_controls_button = 5;
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.getDashControlsButton = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_left_cmd_10c.Dash_controls_buttonType} value
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.setDashControlsButton = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_cmd_10c} returns this
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.clearDashControlsButton = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_cmd_10c.prototype.hasDashControlsButton = function() {
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
proto.apollo.canbus.Steering_rpt_22c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_rpt_22c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_rpt_22c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_rpt_22c.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_rpt_22c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_rpt_22c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_rpt_22c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_rpt_22c}
 */
proto.apollo.canbus.Steering_rpt_22c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_rpt_22c();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.manualInput != null && jspb.Message.setField(msg, 8, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 10, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_rpt_22c}
 */
proto.apollo.canbus.Steering_rpt_22c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_rpt_22c;
  return proto.apollo.canbus.Steering_rpt_22c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_rpt_22c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_rpt_22c}
 */
proto.apollo.canbus.Steering_rpt_22c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 10:
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
proto.apollo.canbus.Steering_rpt_22c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_rpt_22c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_rpt_22c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_rpt_22c.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double manual_input = 8;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double commanded_value = 9;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double output_value = 10;
 * @return {number}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_rpt_22c} returns this
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_rpt_22c.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Turn_aux_rpt_330.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Turn_aux_rpt_330.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Turn_aux_rpt_330} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_aux_rpt_330.toObject = function(includeInstance, msg) {
  var f, obj = {
    passBlinkerBulbOnIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    passBlinkerBulbOn: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    driverBlinkerBulbOnIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    driverBlinkerBulbOn: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Turn_aux_rpt_330 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Turn_aux_rpt_330.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.passBlinkerBulbOnIsValid;

  /** @type {?|undefined} */
  this.passBlinkerBulbOn;

  /** @type {?|undefined} */
  this.driverBlinkerBulbOnIsValid;

  /** @type {?|undefined} */
  this.driverBlinkerBulbOn;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Turn_aux_rpt_330.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330}
 */
proto.apollo.canbus.Turn_aux_rpt_330.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Turn_aux_rpt_330();
  obj.passBlinkerBulbOnIsValid != null && jspb.Message.setField(msg, 1, obj.passBlinkerBulbOnIsValid);
  obj.passBlinkerBulbOn != null && jspb.Message.setField(msg, 2, obj.passBlinkerBulbOn);
  obj.driverBlinkerBulbOnIsValid != null && jspb.Message.setField(msg, 3, obj.driverBlinkerBulbOnIsValid);
  obj.driverBlinkerBulbOn != null && jspb.Message.setField(msg, 4, obj.driverBlinkerBulbOn);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330}
 */
proto.apollo.canbus.Turn_aux_rpt_330.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Turn_aux_rpt_330;
  return proto.apollo.canbus.Turn_aux_rpt_330.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Turn_aux_rpt_330} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330}
 */
proto.apollo.canbus.Turn_aux_rpt_330.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassBlinkerBulbOnIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassBlinkerBulbOn(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverBlinkerBulbOnIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverBlinkerBulbOn(value);
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
proto.apollo.canbus.Turn_aux_rpt_330.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Turn_aux_rpt_330.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Turn_aux_rpt_330} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_aux_rpt_330.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool pass_blinker_bulb_on_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.getPassBlinkerBulbOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.setPassBlinkerBulbOnIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.clearPassBlinkerBulbOnIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.hasPassBlinkerBulbOnIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pass_blinker_bulb_on = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.getPassBlinkerBulbOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.setPassBlinkerBulbOn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.clearPassBlinkerBulbOn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.hasPassBlinkerBulbOn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool driver_blinker_bulb_on_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.getDriverBlinkerBulbOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.setDriverBlinkerBulbOnIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.clearDriverBlinkerBulbOnIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.hasDriverBlinkerBulbOnIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool driver_blinker_bulb_on = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.getDriverBlinkerBulbOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.setDriverBlinkerBulbOn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_aux_rpt_330} returns this
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.clearDriverBlinkerBulbOn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_aux_rpt_330.prototype.hasDriverBlinkerBulbOn = function() {
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
proto.apollo.canbus.Headlight_rpt_218.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Headlight_rpt_218.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Headlight_rpt_218} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_rpt_218.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Headlight_rpt_218 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Headlight_rpt_218.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Headlight_rpt_218.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Headlight_rpt_218}
 */
proto.apollo.canbus.Headlight_rpt_218.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Headlight_rpt_218();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.outputValue != null && jspb.Message.setField(msg, 8, obj.outputValue);
  obj.manualInput != null && jspb.Message.setField(msg, 9, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 10, obj.commandedValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Headlight_rpt_218}
 */
proto.apollo.canbus.Headlight_rpt_218.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Headlight_rpt_218;
  return proto.apollo.canbus.Headlight_rpt_218.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Headlight_rpt_218} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Headlight_rpt_218}
 */
proto.apollo.canbus.Headlight_rpt_218.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType} */ (reader.readEnum());
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
proto.apollo.canbus.Headlight_rpt_218.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Headlight_rpt_218.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Headlight_rpt_218} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_rpt_218.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Output_valueType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Manual_inputType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Headlight_rpt_218.Output_valueType = {
  OUTPUT_VALUE_HEADLIGHTS_OFF: 0,
  OUTPUT_VALUE_LOW_BEAMS: 1,
  OUTPUT_VALUE_HIGH_BEAMS: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_rpt_218.Manual_inputType = {
  MANUAL_INPUT_HEADLIGHTS_OFF: 0,
  MANUAL_INPUT_LOW_BEAMS: 1,
  MANUAL_INPUT_HIGH_BEAMS: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType = {
  COMMANDED_VALUE_HEADLIGHTS_OFF: 0,
  COMMANDED_VALUE_LOW_BEAMS: 1,
  COMMANDED_VALUE_HIGH_BEAMS: 2
};

/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Output_valueType output_value = 8;
 * @return {!proto.apollo.canbus.Headlight_rpt_218.Output_valueType}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_218.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_218.Output_valueType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Manual_inputType manual_input = 9;
 * @return {!proto.apollo.canbus.Headlight_rpt_218.Manual_inputType}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_218.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_218.Manual_inputType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Commanded_valueType commanded_value = 10;
 * @return {!proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_rpt_218.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_rpt_218} returns this
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_rpt_218.prototype.hasCommandedValue = function() {
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
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Hazard_lights_cmd_114.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Hazard_lights_cmd_114} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Hazard_lights_cmd_114.toObject = function(includeInstance, msg) {
  var f, obj = {
    hazardLightsCmd: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Hazard_lights_cmd_114 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Hazard_lights_cmd_114.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.hazardLightsCmd;

  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearFaults;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Hazard_lights_cmd_114.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Hazard_lights_cmd_114();
  obj.hazardLightsCmd != null && jspb.Message.setField(msg, 1, obj.hazardLightsCmd);
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 2, obj.ignoreOverrides);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.enable != null && jspb.Message.setField(msg, 4, obj.enable);
  obj.clearFaults != null && jspb.Message.setField(msg, 5, obj.clearFaults);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Hazard_lights_cmd_114;
  return proto.apollo.canbus.Hazard_lights_cmd_114.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Hazard_lights_cmd_114} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHazardLightsCmd(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
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
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Hazard_lights_cmd_114.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Hazard_lights_cmd_114} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Hazard_lights_cmd_114.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool hazard_lights_cmd = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.getHazardLightsCmd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.setHazardLightsCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.clearHazardLightsCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.hasHazardLightsCmd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool ignore_overrides = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool clear_faults = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Hazard_lights_cmd_114} returns this
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Hazard_lights_cmd_114.prototype.hasClearFaults = function() {
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
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Dash_controls_left_rpt_20c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Dash_controls_left_rpt_20c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Dash_controls_left_rpt_20c();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 3, obj.manualInput);
  obj.vehicleFault != null && jspb.Message.setField(msg, 4, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 5, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 6, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 7, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 8, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 9, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 10, obj.commandOutputFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Dash_controls_left_rpt_20c;
  return proto.apollo.canbus.Dash_controls_left_rpt_20c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
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
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Dash_controls_left_rpt_20c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType = {
  OUTPUT_VALUE_DASH_CONTROL_NONE: 0,
  OUTPUT_VALUE_DASH_CONTROL_OK: 1,
  OUTPUT_VALUE_DASH_CONTROL_LEFT: 2,
  OUTPUT_VALUE_DASH_CONTROL_RIGHT: 3,
  OUTPUT_VALUE_DASH_CONTROL_UP: 4,
  OUTPUT_VALUE_DASH_CONTROL_DOWN: 5
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType = {
  COMMANDED_VALUE_DASH_CONTROL_NONE: 0,
  COMMANDED_VALUE_DASH_CONTROL_OK: 1,
  COMMANDED_VALUE_DASH_CONTROL_LEFT: 2,
  COMMANDED_VALUE_DASH_CONTROL_RIGHT: 3,
  COMMANDED_VALUE_DASH_CONTROL_UP: 4,
  COMMANDED_VALUE_DASH_CONTROL_DOWN: 5
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType = {
  MANUAL_INPUT_DASH_CONTROL_NONE: 0,
  MANUAL_INPUT_DASH_CONTROL_OK: 1,
  MANUAL_INPUT_DASH_CONTROL_LEFT: 2,
  MANUAL_INPUT_DASH_CONTROL_RIGHT: 3,
  MANUAL_INPUT_DASH_CONTROL_UP: 4,
  MANUAL_INPUT_DASH_CONTROL_DOWN: 5
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Output_valueType} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Manual_inputType manual_input = 3;
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_left_rpt_20c.Manual_inputType} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool vehicle_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pacmod_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool override_active = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool output_reported_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool input_output_fault = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool command_output_fault = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_left_rpt_20c} returns this
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_left_rpt_20c.prototype.hasCommandOutputFault = function() {
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
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Headlight_aux_rpt_318.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Headlight_aux_rpt_318} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_aux_rpt_318.toObject = function(includeInstance, msg) {
  var f, obj = {
    headlightsModeIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    headlightsMode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fogLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    fogLightsOn: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    headlightsOnBrightIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    headlightsOnBright: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    headlightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    headlightsOn: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Headlight_aux_rpt_318 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Headlight_aux_rpt_318.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.headlightsModeIsValid;

  /** @type {?|undefined} */
  this.headlightsMode;

  /** @type {?|undefined} */
  this.fogLightsOnIsValid;

  /** @type {?|undefined} */
  this.fogLightsOn;

  /** @type {?|undefined} */
  this.headlightsOnBrightIsValid;

  /** @type {?|undefined} */
  this.headlightsOnBright;

  /** @type {?|undefined} */
  this.headlightsOnIsValid;

  /** @type {?|undefined} */
  this.headlightsOn;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Headlight_aux_rpt_318.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Headlight_aux_rpt_318();
  obj.headlightsModeIsValid != null && jspb.Message.setField(msg, 1, obj.headlightsModeIsValid);
  obj.headlightsMode != null && jspb.Message.setField(msg, 2, obj.headlightsMode);
  obj.fogLightsOnIsValid != null && jspb.Message.setField(msg, 3, obj.fogLightsOnIsValid);
  obj.fogLightsOn != null && jspb.Message.setField(msg, 4, obj.fogLightsOn);
  obj.headlightsOnBrightIsValid != null && jspb.Message.setField(msg, 5, obj.headlightsOnBrightIsValid);
  obj.headlightsOnBright != null && jspb.Message.setField(msg, 6, obj.headlightsOnBright);
  obj.headlightsOnIsValid != null && jspb.Message.setField(msg, 7, obj.headlightsOnIsValid);
  obj.headlightsOn != null && jspb.Message.setField(msg, 8, obj.headlightsOn);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Headlight_aux_rpt_318;
  return proto.apollo.canbus.Headlight_aux_rpt_318.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Headlight_aux_rpt_318} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadlightsModeIsValid(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType} */ (reader.readEnum());
      msg.setHeadlightsMode(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFogLightsOnIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFogLightsOn(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadlightsOnBrightIsValid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadlightsOnBright(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadlightsOnIsValid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHeadlightsOn(value);
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
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Headlight_aux_rpt_318.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Headlight_aux_rpt_318} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_aux_rpt_318.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType} */ (jspb.Message.getField(message, 2));
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType = {
  HEADLIGHTS_MODE_HEADLIGHTS_OFF: 0,
  HEADLIGHTS_MODE_PARKING_LIGHTS_ONLY: 1,
  HEADLIGHTS_MODE_HEADLIGHTS_ON_MANUAL_MODE: 2,
  HEADLIGHTS_MODE_HEADLIGHTS_ON_AUTO_MODE: 3
};

/**
 * optional bool headlights_mode_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsModeIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsModeIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsModeIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsModeIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Headlights_modeType headlights_mode = 2;
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsMode = function() {
  return /** @type {!proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_aux_rpt_318.Headlights_modeType} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsMode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsMode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsMode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool fog_lights_on_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getFogLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setFogLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearFogLightsOnIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasFogLightsOnIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool fog_lights_on = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getFogLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setFogLightsOn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearFogLightsOn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasFogLightsOn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool headlights_on_bright_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsOnBrightIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsOnBrightIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsOnBrightIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsOnBrightIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool headlights_on_bright = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsOnBright = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsOnBright = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsOnBright = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsOnBright = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool headlights_on_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsOnIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsOnIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool headlights_on = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.getHeadlightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.setHeadlightsOn = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_aux_rpt_318} returns this
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.clearHeadlightsOn = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_aux_rpt_318.prototype.hasHeadlightsOn = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Dash_controls_right_cmd_110.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Dash_controls_right_cmd_110} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    dashControlsButton: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Dash_controls_right_cmd_110 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.dashControlsButton;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Dash_controls_right_cmd_110.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Dash_controls_right_cmd_110();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.dashControlsButton != null && jspb.Message.setField(msg, 5, obj.dashControlsButton);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Dash_controls_right_cmd_110;
  return proto.apollo.canbus.Dash_controls_right_cmd_110.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Dash_controls_right_cmd_110} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType} */ (reader.readEnum());
      msg.setDashControlsButton(value);
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
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Dash_controls_right_cmd_110.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Dash_controls_right_cmd_110} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType = {
  DASH_CONTROLS_BUTTON_DASH_CONTROL_NONE: 0,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_OK: 1,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_LEFT: 2,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_RIGHT: 3,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_UP: 4,
  DASH_CONTROLS_BUTTON_DASH_CONTROL_DOWN: 5
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dash_controls_buttonType dash_controls_button = 5;
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.getDashControlsButton = function() {
  return /** @type {!proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Dash_controls_right_cmd_110.Dash_controls_buttonType} value
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.setDashControlsButton = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Dash_controls_right_cmd_110} returns this
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.clearDashControlsButton = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Dash_controls_right_cmd_110.prototype.hasDashControlsButton = function() {
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
proto.apollo.canbus.Wiper_cmd_134.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wiper_cmd_134.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wiper_cmd_134} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_cmd_134.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    wiperCmd: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wiper_cmd_134 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wiper_cmd_134.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.wiperCmd;

  /** @type {?|undefined} */
  this.clearFaults;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wiper_cmd_134.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wiper_cmd_134}
 */
proto.apollo.canbus.Wiper_cmd_134.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wiper_cmd_134();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.wiperCmd != null && jspb.Message.setField(msg, 4, obj.wiperCmd);
  obj.clearFaults != null && jspb.Message.setField(msg, 5, obj.clearFaults);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wiper_cmd_134}
 */
proto.apollo.canbus.Wiper_cmd_134.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wiper_cmd_134;
  return proto.apollo.canbus.Wiper_cmd_134.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wiper_cmd_134} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wiper_cmd_134}
 */
proto.apollo.canbus.Wiper_cmd_134.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType} */ (reader.readEnum());
      msg.setWiperCmd(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
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
proto.apollo.canbus.Wiper_cmd_134.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wiper_cmd_134.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wiper_cmd_134} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_cmd_134.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType} */ (jspb.Message.getField(message, 4));
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
 * @enum {number}
 */
proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType = {
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
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Wiper_cmdType wiper_cmd = 4;
 * @return {!proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.getWiperCmd = function() {
  return /** @type {!proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_cmd_134.Wiper_cmdType} value
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.setWiperCmd = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.clearWiperCmd = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.hasWiperCmd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool clear_faults = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_cmd_134} returns this
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_cmd_134.prototype.hasClearFaults = function() {
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
proto.apollo.canbus.Wiper_rpt_234.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wiper_rpt_234.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wiper_rpt_234} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_rpt_234.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wiper_rpt_234 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wiper_rpt_234.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wiper_rpt_234.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wiper_rpt_234}
 */
proto.apollo.canbus.Wiper_rpt_234.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wiper_rpt_234();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.outputValue != null && jspb.Message.setField(msg, 8, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 10, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wiper_rpt_234}
 */
proto.apollo.canbus.Wiper_rpt_234.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wiper_rpt_234;
  return proto.apollo.canbus.Wiper_rpt_234.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wiper_rpt_234} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wiper_rpt_234}
 */
proto.apollo.canbus.Wiper_rpt_234.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Manual_inputType} */ (reader.readEnum());
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
proto.apollo.canbus.Wiper_rpt_234.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wiper_rpt_234.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wiper_rpt_234} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_rpt_234.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Output_valueType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Wiper_rpt_234.Manual_inputType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Wiper_rpt_234.Output_valueType = {
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
proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType = {
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
proto.apollo.canbus.Wiper_rpt_234.Manual_inputType = {
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
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Output_valueType output_value = 8;
 * @return {!proto.apollo.canbus.Wiper_rpt_234.Output_valueType}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_234.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_234.Output_valueType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Commanded_valueType commanded_value = 9;
 * @return {!proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_234.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Manual_inputType manual_input = 10;
 * @return {!proto.apollo.canbus.Wiper_rpt_234.Manual_inputType}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Wiper_rpt_234.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Wiper_rpt_234.Manual_inputType} value
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_rpt_234} returns this
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_rpt_234.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Turn_rpt_230.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Turn_rpt_230.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Turn_rpt_230} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_rpt_230.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Turn_rpt_230 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Turn_rpt_230.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Turn_rpt_230.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Turn_rpt_230}
 */
proto.apollo.canbus.Turn_rpt_230.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Turn_rpt_230();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.manualInput != null && jspb.Message.setField(msg, 8, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 10, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Turn_rpt_230}
 */
proto.apollo.canbus.Turn_rpt_230.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Turn_rpt_230;
  return proto.apollo.canbus.Turn_rpt_230.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Turn_rpt_230} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Turn_rpt_230}
 */
proto.apollo.canbus.Turn_rpt_230.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_230.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_230.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Turn_rpt_230.Output_valueType} */ (reader.readEnum());
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
proto.apollo.canbus.Turn_rpt_230.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Turn_rpt_230.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Turn_rpt_230} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_rpt_230.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Turn_rpt_230.Manual_inputType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Turn_rpt_230.Commanded_valueType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Turn_rpt_230.Output_valueType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Turn_rpt_230.Manual_inputType = {
  MANUAL_INPUT_RIGHT: 0,
  MANUAL_INPUT_NONE: 1,
  MANUAL_INPUT_LEFT: 2,
  MANUAL_INPUT_HAZARD: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_rpt_230.Commanded_valueType = {
  COMMANDED_VALUE_RIGHT: 0,
  COMMANDED_VALUE_NONE: 1,
  COMMANDED_VALUE_LEFT: 2,
  COMMANDED_VALUE_HAZARD: 3
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_rpt_230.Output_valueType = {
  OUTPUT_VALUE_RIGHT: 0,
  OUTPUT_VALUE_NONE: 1,
  OUTPUT_VALUE_LEFT: 2,
  OUTPUT_VALUE_HAZARD: 3
};

/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Manual_inputType manual_input = 8;
 * @return {!proto.apollo.canbus.Turn_rpt_230.Manual_inputType}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_230.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_230.Manual_inputType} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Commanded_valueType commanded_value = 9;
 * @return {!proto.apollo.canbus.Turn_rpt_230.Commanded_valueType}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_230.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_230.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Output_valueType output_value = 10;
 * @return {!proto.apollo.canbus.Turn_rpt_230.Output_valueType}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Turn_rpt_230.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_rpt_230.Output_valueType} value
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_rpt_230} returns this
 */
proto.apollo.canbus.Turn_rpt_230.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_rpt_230.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Headlight_cmd_118.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Headlight_cmd_118.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Headlight_cmd_118} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_cmd_118.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    headlightCmd: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Headlight_cmd_118 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Headlight_cmd_118.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.headlightCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Headlight_cmd_118.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Headlight_cmd_118}
 */
proto.apollo.canbus.Headlight_cmd_118.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Headlight_cmd_118();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.headlightCmd != null && jspb.Message.setField(msg, 5, obj.headlightCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Headlight_cmd_118}
 */
proto.apollo.canbus.Headlight_cmd_118.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Headlight_cmd_118;
  return proto.apollo.canbus.Headlight_cmd_118.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Headlight_cmd_118} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Headlight_cmd_118}
 */
proto.apollo.canbus.Headlight_cmd_118.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType} */ (reader.readEnum());
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
proto.apollo.canbus.Headlight_cmd_118.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Headlight_cmd_118.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Headlight_cmd_118} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Headlight_cmd_118.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType = {
  HEADLIGHT_CMD_HEADLIGHTS_OFF: 0,
  HEADLIGHT_CMD_LOW_BEAMS: 1,
  HEADLIGHT_CMD_HIGH_BEAMS: 2
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Headlight_cmdType headlight_cmd = 5;
 * @return {!proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.getHeadlightCmd = function() {
  return /** @type {!proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Headlight_cmd_118.Headlight_cmdType} value
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.setHeadlightCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Headlight_cmd_118} returns this
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.clearHeadlightCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Headlight_cmd_118.prototype.hasHeadlightCmd = function() {
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
proto.apollo.canbus.Door_rpt_417.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Door_rpt_417.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Door_rpt_417} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Door_rpt_417.toObject = function(includeInstance, msg) {
  var f, obj = {
    fuelDoorOpenIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    trunkOpenIsValid: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    hoodOpenIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    rearPassDoorOpenIsValid: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    rearDriverDoorOpenIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    passDoorOpenIsValid: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    driverDoorOpenIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    fuelDoorOpen: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    trunkOpen: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    hoodOpen: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    rearPassDoorOpen: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    rearDriverDoorOpen: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    passDoorOpen: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    driverDoorOpen: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Door_rpt_417 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Door_rpt_417.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.fuelDoorOpenIsValid;

  /** @type {?|undefined} */
  this.trunkOpenIsValid;

  /** @type {?|undefined} */
  this.hoodOpenIsValid;

  /** @type {?|undefined} */
  this.rearPassDoorOpenIsValid;

  /** @type {?|undefined} */
  this.rearDriverDoorOpenIsValid;

  /** @type {?|undefined} */
  this.passDoorOpenIsValid;

  /** @type {?|undefined} */
  this.driverDoorOpenIsValid;

  /** @type {?|undefined} */
  this.fuelDoorOpen;

  /** @type {?|undefined} */
  this.trunkOpen;

  /** @type {?|undefined} */
  this.hoodOpen;

  /** @type {?|undefined} */
  this.rearPassDoorOpen;

  /** @type {?|undefined} */
  this.rearDriverDoorOpen;

  /** @type {?|undefined} */
  this.passDoorOpen;

  /** @type {?|undefined} */
  this.driverDoorOpen;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Door_rpt_417.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Door_rpt_417}
 */
proto.apollo.canbus.Door_rpt_417.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Door_rpt_417();
  obj.fuelDoorOpenIsValid != null && jspb.Message.setField(msg, 1, obj.fuelDoorOpenIsValid);
  obj.trunkOpenIsValid != null && jspb.Message.setField(msg, 2, obj.trunkOpenIsValid);
  obj.hoodOpenIsValid != null && jspb.Message.setField(msg, 3, obj.hoodOpenIsValid);
  obj.rearPassDoorOpenIsValid != null && jspb.Message.setField(msg, 4, obj.rearPassDoorOpenIsValid);
  obj.rearDriverDoorOpenIsValid != null && jspb.Message.setField(msg, 5, obj.rearDriverDoorOpenIsValid);
  obj.passDoorOpenIsValid != null && jspb.Message.setField(msg, 6, obj.passDoorOpenIsValid);
  obj.driverDoorOpenIsValid != null && jspb.Message.setField(msg, 7, obj.driverDoorOpenIsValid);
  obj.fuelDoorOpen != null && jspb.Message.setField(msg, 8, obj.fuelDoorOpen);
  obj.trunkOpen != null && jspb.Message.setField(msg, 9, obj.trunkOpen);
  obj.hoodOpen != null && jspb.Message.setField(msg, 10, obj.hoodOpen);
  obj.rearPassDoorOpen != null && jspb.Message.setField(msg, 11, obj.rearPassDoorOpen);
  obj.rearDriverDoorOpen != null && jspb.Message.setField(msg, 12, obj.rearDriverDoorOpen);
  obj.passDoorOpen != null && jspb.Message.setField(msg, 13, obj.passDoorOpen);
  obj.driverDoorOpen != null && jspb.Message.setField(msg, 14, obj.driverDoorOpen);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Door_rpt_417}
 */
proto.apollo.canbus.Door_rpt_417.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Door_rpt_417;
  return proto.apollo.canbus.Door_rpt_417.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Door_rpt_417} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Door_rpt_417}
 */
proto.apollo.canbus.Door_rpt_417.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFuelDoorOpenIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrunkOpenIsValid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHoodOpenIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearPassDoorOpenIsValid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearDriverDoorOpenIsValid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassDoorOpenIsValid(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverDoorOpenIsValid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFuelDoorOpen(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrunkOpen(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHoodOpen(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearPassDoorOpen(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearDriverDoorOpen(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassDoorOpen(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverDoorOpen(value);
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
proto.apollo.canbus.Door_rpt_417.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Door_rpt_417.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Door_rpt_417} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Door_rpt_417.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool fuel_door_open_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getFuelDoorOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setFuelDoorOpenIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearFuelDoorOpenIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasFuelDoorOpenIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool trunk_open_is_valid = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getTrunkOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setTrunkOpenIsValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearTrunkOpenIsValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasTrunkOpenIsValid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool hood_open_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getHoodOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setHoodOpenIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearHoodOpenIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasHoodOpenIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool rear_pass_door_open_is_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getRearPassDoorOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setRearPassDoorOpenIsValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearRearPassDoorOpenIsValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasRearPassDoorOpenIsValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool rear_driver_door_open_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getRearDriverDoorOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setRearDriverDoorOpenIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearRearDriverDoorOpenIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasRearDriverDoorOpenIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool pass_door_open_is_valid = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getPassDoorOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setPassDoorOpenIsValid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearPassDoorOpenIsValid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasPassDoorOpenIsValid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool driver_door_open_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getDriverDoorOpenIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setDriverDoorOpenIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearDriverDoorOpenIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasDriverDoorOpenIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool fuel_door_open = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getFuelDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setFuelDoorOpen = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearFuelDoorOpen = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasFuelDoorOpen = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool trunk_open = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getTrunkOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setTrunkOpen = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearTrunkOpen = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasTrunkOpen = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool hood_open = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getHoodOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setHoodOpen = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearHoodOpen = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasHoodOpen = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool rear_pass_door_open = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getRearPassDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setRearPassDoorOpen = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearRearPassDoorOpen = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasRearPassDoorOpen = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool rear_driver_door_open = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getRearDriverDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setRearDriverDoorOpen = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearRearDriverDoorOpen = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasRearDriverDoorOpen = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool pass_door_open = 13;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getPassDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setPassDoorOpen = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearPassDoorOpen = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasPassDoorOpen = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool driver_door_open = 14;
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.getDriverDoorOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.setDriverDoorOpen = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Door_rpt_417} returns this
 */
proto.apollo.canbus.Door_rpt_417.prototype.clearDriverDoorOpen = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Door_rpt_417.prototype.hasDriverDoorOpen = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.apollo.canbus.Component_rpt_20.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Component_rpt_20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Component_rpt_20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Component_rpt_20.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    componentFunc: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    counter: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    complement: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    configFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Component_rpt_20 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Component_rpt_20.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.componentType;

  /** @type {?|undefined} */
  this.componentFunc;

  /** @type {?|undefined} */
  this.counter;

  /** @type {?|undefined} */
  this.complement;

  /** @type {?|undefined} */
  this.configFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Component_rpt_20.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Component_rpt_20}
 */
proto.apollo.canbus.Component_rpt_20.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Component_rpt_20();
  obj.componentType != null && jspb.Message.setField(msg, 1, obj.componentType);
  obj.componentFunc != null && jspb.Message.setField(msg, 2, obj.componentFunc);
  obj.counter != null && jspb.Message.setField(msg, 3, obj.counter);
  obj.complement != null && jspb.Message.setField(msg, 4, obj.complement);
  obj.configFault != null && jspb.Message.setField(msg, 5, obj.configFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Component_rpt_20}
 */
proto.apollo.canbus.Component_rpt_20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Component_rpt_20;
  return proto.apollo.canbus.Component_rpt_20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Component_rpt_20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Component_rpt_20}
 */
proto.apollo.canbus.Component_rpt_20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Component_rpt_20.Component_typeType} */ (reader.readEnum());
      msg.setComponentType(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Component_rpt_20.Component_funcType} */ (reader.readEnum());
      msg.setComponentFunc(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounter(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setComplement(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfigFault(value);
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
proto.apollo.canbus.Component_rpt_20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Component_rpt_20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Component_rpt_20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Component_rpt_20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Component_rpt_20.Component_typeType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Component_rpt_20.Component_funcType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Component_rpt_20.Component_typeType = {
  COMPONENT_TYPE_PACMOD: 0,
  COMPONENT_TYPE_PACMINI: 1,
  COMPONENT_TYPE_PACMICRO: 2
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Component_rpt_20.Component_funcType = {
  COMPONENT_FUNC_PACMOD: 0,
  COMPONENT_FUNC_STEERING_AND_STEERING_COLUMN: 1,
  COMPONENT_FUNC_ACCELERATOR_AND_BRAKING: 2,
  COMPONENT_FUNC_BRAKING: 3,
  COMPONENT_FUNC_SHIFTING: 4,
  COMPONENT_FUNC_STEERING: 5,
  COMPONENT_FUNC_E_SHIFTER: 6,
  COMPONENT_FUNC_WATCHDOG: 7
};

/**
 * optional Component_typeType component_type = 1;
 * @return {!proto.apollo.canbus.Component_rpt_20.Component_typeType}
 */
proto.apollo.canbus.Component_rpt_20.prototype.getComponentType = function() {
  return /** @type {!proto.apollo.canbus.Component_rpt_20.Component_typeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Component_rpt_20.Component_typeType} value
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.setComponentType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.clearComponentType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.hasComponentType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Component_funcType component_func = 2;
 * @return {!proto.apollo.canbus.Component_rpt_20.Component_funcType}
 */
proto.apollo.canbus.Component_rpt_20.prototype.getComponentFunc = function() {
  return /** @type {!proto.apollo.canbus.Component_rpt_20.Component_funcType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Component_rpt_20.Component_funcType} value
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.setComponentFunc = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.clearComponentFunc = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.hasComponentFunc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 counter = 3;
 * @return {number}
 */
proto.apollo.canbus.Component_rpt_20.prototype.getCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.setCounter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.clearCounter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.hasCounter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 complement = 4;
 * @return {number}
 */
proto.apollo.canbus.Component_rpt_20.prototype.getComplement = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.setComplement = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.clearComplement = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.hasComplement = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool config_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.getConfigFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.setConfigFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Component_rpt_20} returns this
 */
proto.apollo.canbus.Component_rpt_20.prototype.clearConfigFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Component_rpt_20.prototype.hasConfigFault = function() {
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
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wheel_speed_rpt_407.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_407} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wheel_speed_rpt_407.toObject = function(includeInstance, msg) {
  var f, obj = {
    wheelSpdRearRight: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    wheelSpdRearLeft: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    wheelSpdFrontRight: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    wheelSpdFrontLeft: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wheel_speed_rpt_407 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wheel_speed_rpt_407.ObjectFormat = function() {
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
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_407.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wheel_speed_rpt_407();
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
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wheel_speed_rpt_407;
  return proto.apollo.canbus.Wheel_speed_rpt_407.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_407} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdRearRight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdRearLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWheelSpdFrontRight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
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
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wheel_speed_rpt_407.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wheel_speed_rpt_407} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wheel_speed_rpt_407.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double wheel_spd_rear_right = 1;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.getWheelSpdRearRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.setWheelSpdRearRight = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.clearWheelSpdRearRight = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.hasWheelSpdRearRight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double wheel_spd_rear_left = 2;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.getWheelSpdRearLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.setWheelSpdRearLeft = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.clearWheelSpdRearLeft = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.hasWheelSpdRearLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double wheel_spd_front_right = 3;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.getWheelSpdFrontRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.setWheelSpdFrontRight = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.clearWheelSpdFrontRight = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.hasWheelSpdFrontRight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double wheel_spd_front_left = 4;
 * @return {number}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.getWheelSpdFrontLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.setWheelSpdFrontLeft = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wheel_speed_rpt_407} returns this
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.clearWheelSpdFrontLeft = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wheel_speed_rpt_407.prototype.hasWheelSpdFrontLeft = function() {
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
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_3_406.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_406} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.toObject = function(includeInstance, msg) {
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
 * The raw object form of Steering_motor_rpt_3_406 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.torqueOutput;

  /** @type {?|undefined} */
  this.torqueInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_406.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_3_406();
  obj.torqueOutput != null && jspb.Message.setField(msg, 1, obj.torqueOutput);
  obj.torqueInput != null && jspb.Message.setField(msg, 2, obj.torqueInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_3_406;
  return proto.apollo.canbus.Steering_motor_rpt_3_406.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_406} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_3_406.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_3_406} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.getTorqueOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.setTorqueOutput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.clearTorqueOutput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.hasTorqueOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double torque_input = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.getTorqueInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.setTorqueInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_3_406} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.clearTorqueInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_3_406.prototype.hasTorqueInput = function() {
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
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_2_405.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_405} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.toObject = function(includeInstance, msg) {
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
 * The raw object form of Steering_motor_rpt_2_405 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.encoderTemperature;

  /** @type {?|undefined} */
  this.motorTemperature;

  /** @type {?|undefined} */
  this.angularSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_405.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_2_405();
  obj.encoderTemperature != null && jspb.Message.setField(msg, 1, obj.encoderTemperature);
  obj.motorTemperature != null && jspb.Message.setField(msg, 2, obj.motorTemperature);
  obj.angularSpeed != null && jspb.Message.setField(msg, 3, obj.angularSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_2_405;
  return proto.apollo.canbus.Steering_motor_rpt_2_405.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_405} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_2_405.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_2_405} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.getEncoderTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.setEncoderTemperature = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.clearEncoderTemperature = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.hasEncoderTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 motor_temperature = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.getMotorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.setMotorTemperature = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.clearMotorTemperature = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.hasMotorTemperature = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double angular_speed = 3;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.getAngularSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.setAngularSpeed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_2_405} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.clearAngularSpeed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_2_405.prototype.hasAngularSpeed = function() {
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
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_motor_rpt_1_404.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_404} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.toObject = function(includeInstance, msg) {
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
 * The raw object form of Steering_motor_rpt_1_404 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.motorCurrent;

  /** @type {?|undefined} */
  this.shaftPosition;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_404.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_motor_rpt_1_404();
  obj.motorCurrent != null && jspb.Message.setField(msg, 1, obj.motorCurrent);
  obj.shaftPosition != null && jspb.Message.setField(msg, 2, obj.shaftPosition);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_motor_rpt_1_404;
  return proto.apollo.canbus.Steering_motor_rpt_1_404.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_404} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_motor_rpt_1_404.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_motor_rpt_1_404} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.getMotorCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.setMotorCurrent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.clearMotorCurrent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.hasMotorCurrent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double shaft_position = 2;
 * @return {number}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.getShaftPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.setShaftPosition = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_motor_rpt_1_404} returns this
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.clearShaftPosition = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_motor_rpt_1_404.prototype.hasShaftPosition = function() {
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
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_3_403.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_403} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.toObject = function(includeInstance, msg) {
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
 * The raw object form of Brake_motor_rpt_3_403 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.torqueOutput;

  /** @type {?|undefined} */
  this.torqueInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_403.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_3_403();
  obj.torqueOutput != null && jspb.Message.setField(msg, 1, obj.torqueOutput);
  obj.torqueInput != null && jspb.Message.setField(msg, 2, obj.torqueInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_3_403;
  return proto.apollo.canbus.Brake_motor_rpt_3_403.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_403} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_3_403.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_3_403} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.getTorqueOutput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.setTorqueOutput = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.clearTorqueOutput = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.hasTorqueOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double torque_input = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.getTorqueInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.setTorqueInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_3_403} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.clearTorqueInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_3_403.prototype.hasTorqueInput = function() {
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
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_2_402.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_402} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.toObject = function(includeInstance, msg) {
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
 * The raw object form of Brake_motor_rpt_2_402 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.encoderTemperature;

  /** @type {?|undefined} */
  this.motorTemperature;

  /** @type {?|undefined} */
  this.angularSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_402.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_2_402();
  obj.encoderTemperature != null && jspb.Message.setField(msg, 1, obj.encoderTemperature);
  obj.motorTemperature != null && jspb.Message.setField(msg, 2, obj.motorTemperature);
  obj.angularSpeed != null && jspb.Message.setField(msg, 3, obj.angularSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_2_402;
  return proto.apollo.canbus.Brake_motor_rpt_2_402.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_402} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_2_402.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_2_402} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.getEncoderTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.setEncoderTemperature = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.clearEncoderTemperature = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.hasEncoderTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 motor_temperature = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.getMotorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.setMotorTemperature = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.clearMotorTemperature = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.hasMotorTemperature = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double angular_speed = 3;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.getAngularSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.setAngularSpeed = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_2_402} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.clearAngularSpeed = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_2_402.prototype.hasAngularSpeed = function() {
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
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_motor_rpt_1_401.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_401} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.toObject = function(includeInstance, msg) {
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
 * The raw object form of Brake_motor_rpt_1_401 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.motorCurrent;

  /** @type {?|undefined} */
  this.shaftPosition;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_401.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_motor_rpt_1_401();
  obj.motorCurrent != null && jspb.Message.setField(msg, 1, obj.motorCurrent);
  obj.shaftPosition != null && jspb.Message.setField(msg, 2, obj.shaftPosition);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_motor_rpt_1_401;
  return proto.apollo.canbus.Brake_motor_rpt_1_401.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_401} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_motor_rpt_1_401.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_motor_rpt_1_401} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.getMotorCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.setMotorCurrent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.clearMotorCurrent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.hasMotorCurrent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double shaft_position = 2;
 * @return {number}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.getShaftPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.setShaftPosition = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_motor_rpt_1_401} returns this
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.clearShaftPosition = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_motor_rpt_1_401.prototype.hasShaftPosition = function() {
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
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Wiper_aux_rpt_334.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Wiper_aux_rpt_334} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_aux_rpt_334.toObject = function(includeInstance, msg) {
  var f, obj = {
    sprayEmptyIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    sprayEmpty: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    sprayNearEmptyIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    sprayNearEmpty: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    rearSprayingIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    rearSpraying: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    rearWipingIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    rearWiping: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    frontSprayingIsValid: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    frontSpraying: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    frontWipingIsValid: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    frontWiping: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Wiper_aux_rpt_334 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Wiper_aux_rpt_334.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.sprayEmptyIsValid;

  /** @type {?|undefined} */
  this.sprayEmpty;

  /** @type {?|undefined} */
  this.sprayNearEmptyIsValid;

  /** @type {?|undefined} */
  this.sprayNearEmpty;

  /** @type {?|undefined} */
  this.rearSprayingIsValid;

  /** @type {?|undefined} */
  this.rearSpraying;

  /** @type {?|undefined} */
  this.rearWipingIsValid;

  /** @type {?|undefined} */
  this.rearWiping;

  /** @type {?|undefined} */
  this.frontSprayingIsValid;

  /** @type {?|undefined} */
  this.frontSpraying;

  /** @type {?|undefined} */
  this.frontWipingIsValid;

  /** @type {?|undefined} */
  this.frontWiping;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Wiper_aux_rpt_334.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Wiper_aux_rpt_334();
  obj.sprayEmptyIsValid != null && jspb.Message.setField(msg, 1, obj.sprayEmptyIsValid);
  obj.sprayEmpty != null && jspb.Message.setField(msg, 2, obj.sprayEmpty);
  obj.sprayNearEmptyIsValid != null && jspb.Message.setField(msg, 3, obj.sprayNearEmptyIsValid);
  obj.sprayNearEmpty != null && jspb.Message.setField(msg, 4, obj.sprayNearEmpty);
  obj.rearSprayingIsValid != null && jspb.Message.setField(msg, 5, obj.rearSprayingIsValid);
  obj.rearSpraying != null && jspb.Message.setField(msg, 6, obj.rearSpraying);
  obj.rearWipingIsValid != null && jspb.Message.setField(msg, 7, obj.rearWipingIsValid);
  obj.rearWiping != null && jspb.Message.setField(msg, 8, obj.rearWiping);
  obj.frontSprayingIsValid != null && jspb.Message.setField(msg, 9, obj.frontSprayingIsValid);
  obj.frontSpraying != null && jspb.Message.setField(msg, 10, obj.frontSpraying);
  obj.frontWipingIsValid != null && jspb.Message.setField(msg, 11, obj.frontWipingIsValid);
  obj.frontWiping != null && jspb.Message.setField(msg, 12, obj.frontWiping);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Wiper_aux_rpt_334;
  return proto.apollo.canbus.Wiper_aux_rpt_334.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Wiper_aux_rpt_334} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSprayEmptyIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSprayEmpty(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSprayNearEmptyIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSprayNearEmpty(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSprayingIsValid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSpraying(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearWipingIsValid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearWiping(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontSprayingIsValid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontSpraying(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontWipingIsValid(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontWiping(value);
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
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Wiper_aux_rpt_334.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Wiper_aux_rpt_334} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Wiper_aux_rpt_334.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional bool spray_empty_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getSprayEmptyIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setSprayEmptyIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearSprayEmptyIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasSprayEmptyIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool spray_empty = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getSprayEmpty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setSprayEmpty = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearSprayEmpty = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasSprayEmpty = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool spray_near_empty_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getSprayNearEmptyIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setSprayNearEmptyIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearSprayNearEmptyIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasSprayNearEmptyIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool spray_near_empty = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getSprayNearEmpty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setSprayNearEmpty = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearSprayNearEmpty = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasSprayNearEmpty = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool rear_spraying_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getRearSprayingIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setRearSprayingIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearRearSprayingIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasRearSprayingIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool rear_spraying = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getRearSpraying = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setRearSpraying = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearRearSpraying = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasRearSpraying = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool rear_wiping_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getRearWipingIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setRearWipingIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearRearWipingIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasRearWipingIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool rear_wiping = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getRearWiping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setRearWiping = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearRearWiping = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasRearWiping = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool front_spraying_is_valid = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getFrontSprayingIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setFrontSprayingIsValid = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearFrontSprayingIsValid = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasFrontSprayingIsValid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool front_spraying = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getFrontSpraying = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setFrontSpraying = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearFrontSpraying = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasFrontSpraying = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool front_wiping_is_valid = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getFrontWipingIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setFrontWipingIsValid = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearFrontWipingIsValid = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasFrontWipingIsValid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool front_wiping = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.getFrontWiping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.setFrontWiping = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Wiper_aux_rpt_334} returns this
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.clearFrontWiping = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Wiper_aux_rpt_334.prototype.hasFrontWiping = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.apollo.canbus.Shift_aux_rpt_328.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Shift_aux_rpt_328.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Shift_aux_rpt_328} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_aux_rpt_328.toObject = function(includeInstance, msg) {
  var f, obj = {
    speedInterlockActiveIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    speedInterlockActive: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    brakeInterlockActiveIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    brakeInterlockActive: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    stayInNeutralModeIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    stayInNeutralMode: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    betweenGearsIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    betweenGears: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Shift_aux_rpt_328 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Shift_aux_rpt_328.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.speedInterlockActiveIsValid;

  /** @type {?|undefined} */
  this.speedInterlockActive;

  /** @type {?|undefined} */
  this.brakeInterlockActiveIsValid;

  /** @type {?|undefined} */
  this.brakeInterlockActive;

  /** @type {?|undefined} */
  this.stayInNeutralModeIsValid;

  /** @type {?|undefined} */
  this.stayInNeutralMode;

  /** @type {?|undefined} */
  this.betweenGearsIsValid;

  /** @type {?|undefined} */
  this.betweenGears;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Shift_aux_rpt_328.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328}
 */
proto.apollo.canbus.Shift_aux_rpt_328.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Shift_aux_rpt_328();
  obj.speedInterlockActiveIsValid != null && jspb.Message.setField(msg, 1, obj.speedInterlockActiveIsValid);
  obj.speedInterlockActive != null && jspb.Message.setField(msg, 2, obj.speedInterlockActive);
  obj.brakeInterlockActiveIsValid != null && jspb.Message.setField(msg, 3, obj.brakeInterlockActiveIsValid);
  obj.brakeInterlockActive != null && jspb.Message.setField(msg, 4, obj.brakeInterlockActive);
  obj.stayInNeutralModeIsValid != null && jspb.Message.setField(msg, 5, obj.stayInNeutralModeIsValid);
  obj.stayInNeutralMode != null && jspb.Message.setField(msg, 6, obj.stayInNeutralMode);
  obj.betweenGearsIsValid != null && jspb.Message.setField(msg, 7, obj.betweenGearsIsValid);
  obj.betweenGears != null && jspb.Message.setField(msg, 8, obj.betweenGears);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328}
 */
proto.apollo.canbus.Shift_aux_rpt_328.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Shift_aux_rpt_328;
  return proto.apollo.canbus.Shift_aux_rpt_328.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Shift_aux_rpt_328} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328}
 */
proto.apollo.canbus.Shift_aux_rpt_328.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpeedInterlockActiveIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpeedInterlockActive(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeInterlockActiveIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeInterlockActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStayInNeutralModeIsValid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStayInNeutralMode(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBetweenGearsIsValid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBetweenGears(value);
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
proto.apollo.canbus.Shift_aux_rpt_328.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Shift_aux_rpt_328.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Shift_aux_rpt_328} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_aux_rpt_328.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool speed_interlock_active_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getSpeedInterlockActiveIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setSpeedInterlockActiveIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearSpeedInterlockActiveIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasSpeedInterlockActiveIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool speed_interlock_active = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getSpeedInterlockActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setSpeedInterlockActive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearSpeedInterlockActive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasSpeedInterlockActive = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool brake_interlock_active_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getBrakeInterlockActiveIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setBrakeInterlockActiveIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearBrakeInterlockActiveIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasBrakeInterlockActiveIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool brake_interlock_active = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getBrakeInterlockActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setBrakeInterlockActive = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearBrakeInterlockActive = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasBrakeInterlockActive = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool stay_in_neutral_mode_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getStayInNeutralModeIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setStayInNeutralModeIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearStayInNeutralModeIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasStayInNeutralModeIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool stay_in_neutral_mode = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getStayInNeutralMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setStayInNeutralMode = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearStayInNeutralMode = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasStayInNeutralMode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool between_gears_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getBetweenGearsIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setBetweenGearsIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearBetweenGearsIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasBetweenGearsIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool between_gears = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.getBetweenGears = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.setBetweenGears = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_aux_rpt_328} returns this
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.clearBetweenGears = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_aux_rpt_328.prototype.hasBetweenGears = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.apollo.canbus.Accel_rpt_200.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Accel_rpt_200.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Accel_rpt_200} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_rpt_200.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Accel_rpt_200 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Accel_rpt_200.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Accel_rpt_200.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Accel_rpt_200}
 */
proto.apollo.canbus.Accel_rpt_200.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Accel_rpt_200();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 3, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 4, obj.inputOutputFault);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 5, obj.commandOutputFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 6, obj.overrideActive);
  obj.enabled != null && jspb.Message.setField(msg, 7, obj.enabled);
  obj.manualInput != null && jspb.Message.setField(msg, 8, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 10, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Accel_rpt_200}
 */
proto.apollo.canbus.Accel_rpt_200.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Accel_rpt_200;
  return proto.apollo.canbus.Accel_rpt_200.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Accel_rpt_200} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Accel_rpt_200}
 */
proto.apollo.canbus.Accel_rpt_200.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 10:
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
proto.apollo.canbus.Accel_rpt_200.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Accel_rpt_200.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Accel_rpt_200} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_rpt_200.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool output_reported_fault = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool input_output_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool command_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool override_active = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool enabled = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double manual_input = 8;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double commanded_value = 9;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double output_value = 10;
 * @return {number}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_rpt_200} returns this
 */
proto.apollo.canbus.Accel_rpt_200.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_rpt_200.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Brake_rpt_204.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_rpt_204.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_rpt_204} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_rpt_204.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_rpt_204 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_rpt_204.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_rpt_204.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_rpt_204}
 */
proto.apollo.canbus.Brake_rpt_204.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_rpt_204();
  obj.commandOutputFault != null && jspb.Message.setField(msg, 1, obj.commandOutputFault);
  obj.vehicleFault != null && jspb.Message.setField(msg, 2, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 3, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 4, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 5, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 6, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 7, obj.enabled);
  obj.manualInput != null && jspb.Message.setField(msg, 8, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 10, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_rpt_204}
 */
proto.apollo.canbus.Brake_rpt_204.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_rpt_204;
  return proto.apollo.canbus.Brake_rpt_204.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_rpt_204} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_rpt_204}
 */
proto.apollo.canbus.Brake_rpt_204.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setManualInput(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCommandedValue(value);
      break;
    case 10:
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
proto.apollo.canbus.Brake_rpt_204.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_rpt_204.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_rpt_204} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_rpt_204.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool command_output_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool vehicle_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool pacmod_fault = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool override_active = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool output_reported_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool input_output_fault = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool enabled = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double manual_input = 8;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getManualInput = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double commanded_value = 9;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getCommandedValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double output_value = 10;
 * @return {number}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.getOutputValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_rpt_204} returns this
 */
proto.apollo.canbus.Brake_rpt_204.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_rpt_204.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Horn_cmd_11c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Horn_cmd_11c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Horn_cmd_11c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_cmd_11c.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    hornCmd: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Horn_cmd_11c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Horn_cmd_11c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.hornCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Horn_cmd_11c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Horn_cmd_11c}
 */
proto.apollo.canbus.Horn_cmd_11c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Horn_cmd_11c();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.hornCmd != null && jspb.Message.setField(msg, 5, obj.hornCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Horn_cmd_11c}
 */
proto.apollo.canbus.Horn_cmd_11c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Horn_cmd_11c;
  return proto.apollo.canbus.Horn_cmd_11c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Horn_cmd_11c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Horn_cmd_11c}
 */
proto.apollo.canbus.Horn_cmd_11c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType} */ (reader.readEnum());
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
proto.apollo.canbus.Horn_cmd_11c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Horn_cmd_11c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Horn_cmd_11c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_cmd_11c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType = {
  HORN_CMD_OFF: 0,
  HORN_CMD_ON: 1
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Horn_cmdType horn_cmd = 5;
 * @return {!proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.getHornCmd = function() {
  return /** @type {!proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_cmd_11c.Horn_cmdType} value
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.setHornCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_cmd_11c} returns this
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.clearHornCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_cmd_11c.prototype.hasHornCmd = function() {
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
proto.apollo.canbus.Global_rpt_10.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Global_rpt_10.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Global_rpt_10} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_rpt_10.toObject = function(includeInstance, msg) {
  var f, obj = {
    configFaultActive: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodSubsystemTimeout: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    pacmodSystemEnabled: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    pacmodSystemOverrideActive: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    pacmodSystemFaultActive: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    vehCanTimeout: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    strCanTimeout: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    brkCanTimeout: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    usrCanTimeout: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    usrCanReadErrors: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Global_rpt_10 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Global_rpt_10.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.configFaultActive;

  /** @type {?|undefined} */
  this.pacmodSubsystemTimeout;

  /** @type {?|undefined} */
  this.pacmodSystemEnabled;

  /** @type {?|undefined} */
  this.pacmodSystemOverrideActive;

  /** @type {?|undefined} */
  this.pacmodSystemFaultActive;

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
 * @param {!proto.apollo.canbus.Global_rpt_10.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Global_rpt_10}
 */
proto.apollo.canbus.Global_rpt_10.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Global_rpt_10();
  obj.configFaultActive != null && jspb.Message.setField(msg, 1, obj.configFaultActive);
  obj.pacmodSubsystemTimeout != null && jspb.Message.setField(msg, 2, obj.pacmodSubsystemTimeout);
  obj.pacmodSystemEnabled != null && jspb.Message.setField(msg, 3, obj.pacmodSystemEnabled);
  obj.pacmodSystemOverrideActive != null && jspb.Message.setField(msg, 4, obj.pacmodSystemOverrideActive);
  obj.pacmodSystemFaultActive != null && jspb.Message.setField(msg, 5, obj.pacmodSystemFaultActive);
  obj.vehCanTimeout != null && jspb.Message.setField(msg, 6, obj.vehCanTimeout);
  obj.strCanTimeout != null && jspb.Message.setField(msg, 7, obj.strCanTimeout);
  obj.brkCanTimeout != null && jspb.Message.setField(msg, 8, obj.brkCanTimeout);
  obj.usrCanTimeout != null && jspb.Message.setField(msg, 9, obj.usrCanTimeout);
  obj.usrCanReadErrors != null && jspb.Message.setField(msg, 10, obj.usrCanReadErrors);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Global_rpt_10}
 */
proto.apollo.canbus.Global_rpt_10.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Global_rpt_10;
  return proto.apollo.canbus.Global_rpt_10.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Global_rpt_10} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Global_rpt_10}
 */
proto.apollo.canbus.Global_rpt_10.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfigFaultActive(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodSubsystemTimeout(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType} */ (reader.readEnum());
      msg.setPacmodSystemEnabled(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType} */ (reader.readEnum());
      msg.setPacmodSystemOverrideActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodSystemFaultActive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehCanTimeout(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStrCanTimeout(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType} */ (reader.readEnum());
      msg.setBrkCanTimeout(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsrCanTimeout(value);
      break;
    case 10:
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
proto.apollo.canbus.Global_rpt_10.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Global_rpt_10.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Global_rpt_10} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Global_rpt_10.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType} */ (jspb.Message.getField(message, 4));
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
  f = /** @type {!proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType = {
  PACMOD_SYSTEM_ENABLED_CONTROL_DISABLED: 0,
  PACMOD_SYSTEM_ENABLED_CONTROL_ENABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType = {
  PACMOD_SYSTEM_OVERRIDE_ACTIVE_NOT_OVERRIDDEN: 0,
  PACMOD_SYSTEM_OVERRIDE_ACTIVE_OVERRIDDEN: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType = {
  BRK_CAN_TIMEOUT_NO_ACTIVE_CAN_TIMEOUT: 0,
  BRK_CAN_TIMEOUT_ACTIVE_CAN_TIMEOUT: 1
};

/**
 * optional bool config_fault_active = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getConfigFaultActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setConfigFaultActive = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearConfigFaultActive = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasConfigFaultActive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_subsystem_timeout = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getPacmodSubsystemTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setPacmodSubsystemTimeout = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearPacmodSubsystemTimeout = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasPacmodSubsystemTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pacmod_system_enabledType pacmod_system_enabled = 3;
 * @return {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getPacmodSystemEnabled = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_enabledType} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setPacmodSystemEnabled = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearPacmodSystemEnabled = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasPacmodSystemEnabled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Pacmod_system_override_activeType pacmod_system_override_active = 4;
 * @return {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getPacmodSystemOverrideActive = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_10.Pacmod_system_override_activeType} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setPacmodSystemOverrideActive = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearPacmodSystemOverrideActive = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasPacmodSystemOverrideActive = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pacmod_system_fault_active = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getPacmodSystemFaultActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setPacmodSystemFaultActive = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearPacmodSystemFaultActive = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasPacmodSystemFaultActive = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool veh_can_timeout = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getVehCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setVehCanTimeout = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearVehCanTimeout = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasVehCanTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool str_can_timeout = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getStrCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setStrCanTimeout = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearStrCanTimeout = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasStrCanTimeout = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Brk_can_timeoutType brk_can_timeout = 8;
 * @return {!proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getBrkCanTimeout = function() {
  return /** @type {!proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Global_rpt_10.Brk_can_timeoutType} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setBrkCanTimeout = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearBrkCanTimeout = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasBrkCanTimeout = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool usr_can_timeout = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getUsrCanTimeout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setUsrCanTimeout = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearUsrCanTimeout = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasUsrCanTimeout = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 usr_can_read_errors = 10;
 * @return {number}
 */
proto.apollo.canbus.Global_rpt_10.prototype.getUsrCanReadErrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.setUsrCanReadErrors = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Global_rpt_10} returns this
 */
proto.apollo.canbus.Global_rpt_10.prototype.clearUsrCanReadErrors = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Global_rpt_10.prototype.hasUsrCanReadErrors = function() {
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
proto.apollo.canbus.Accel_aux_rpt_300.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Accel_aux_rpt_300.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Accel_aux_rpt_300} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_aux_rpt_300.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInteractionIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    userInteraction: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    rawPedalForceIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    rawPedalForce: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    rawPedalPosIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    rawPedalPos: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Accel_aux_rpt_300 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Accel_aux_rpt_300.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.userInteractionIsValid;

  /** @type {?|undefined} */
  this.userInteraction;

  /** @type {?|undefined} */
  this.rawPedalForceIsValid;

  /** @type {?|undefined} */
  this.rawPedalForce;

  /** @type {?|undefined} */
  this.rawPedalPosIsValid;

  /** @type {?|undefined} */
  this.rawPedalPos;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Accel_aux_rpt_300.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300}
 */
proto.apollo.canbus.Accel_aux_rpt_300.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Accel_aux_rpt_300();
  obj.userInteractionIsValid != null && jspb.Message.setField(msg, 1, obj.userInteractionIsValid);
  obj.userInteraction != null && jspb.Message.setField(msg, 2, obj.userInteraction);
  obj.rawPedalForceIsValid != null && jspb.Message.setField(msg, 3, obj.rawPedalForceIsValid);
  obj.rawPedalForce != null && jspb.Message.setField(msg, 4, obj.rawPedalForce);
  obj.rawPedalPosIsValid != null && jspb.Message.setField(msg, 5, obj.rawPedalPosIsValid);
  obj.rawPedalPos != null && jspb.Message.setField(msg, 6, obj.rawPedalPos);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300}
 */
proto.apollo.canbus.Accel_aux_rpt_300.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Accel_aux_rpt_300;
  return proto.apollo.canbus.Accel_aux_rpt_300.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Accel_aux_rpt_300} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300}
 */
proto.apollo.canbus.Accel_aux_rpt_300.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteractionIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteraction(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawPedalForceIsValid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawPedalForce(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawPedalPosIsValid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawPedalPos(value);
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
proto.apollo.canbus.Accel_aux_rpt_300.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Accel_aux_rpt_300.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Accel_aux_rpt_300} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_aux_rpt_300.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional bool user_interaction_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getUserInteractionIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setUserInteractionIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearUserInteractionIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasUserInteractionIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool user_interaction = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getUserInteraction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setUserInteraction = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearUserInteraction = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasUserInteraction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool raw_pedal_force_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getRawPedalForceIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setRawPedalForceIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearRawPedalForceIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasRawPedalForceIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double raw_pedal_force = 4;
 * @return {number}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getRawPedalForce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setRawPedalForce = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearRawPedalForce = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasRawPedalForce = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool raw_pedal_pos_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getRawPedalPosIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setRawPedalPosIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearRawPedalPosIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasRawPedalPosIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double raw_pedal_pos = 6;
 * @return {number}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.getRawPedalPos = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.setRawPedalPos = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_aux_rpt_300} returns this
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.clearRawPedalPos = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_aux_rpt_300.prototype.hasRawPedalPos = function() {
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
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Cruise_control_buttons_rpt_208.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Cruise_control_buttons_rpt_208 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Cruise_control_buttons_rpt_208();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.manualInput != null && jspb.Message.setField(msg, 2, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 3, obj.commandedValue);
  obj.vehicleFault != null && jspb.Message.setField(msg, 4, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 5, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 6, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 7, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 8, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 9, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 10, obj.commandOutputFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Cruise_control_buttons_rpt_208;
  return proto.apollo.canbus.Cruise_control_buttons_rpt_208.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
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
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Cruise_control_buttons_rpt_208.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType = {
  OUTPUT_VALUE_CRUISE_CONTROL_NONE: 0,
  OUTPUT_VALUE_CRUISE_CONTROL_CNCL: 1,
  OUTPUT_VALUE_CRUISE_CONTROL_ACC_FURTHER: 2,
  OUTPUT_VALUE_CRUISE_CONTROL_ACC_CLOSER: 3,
  OUTPUT_VALUE_CRUISE_CONTROL_SET_DEC: 4,
  OUTPUT_VALUE_CRUISE_CONTROL_RES_INC: 5,
  OUTPUT_VALUE_CRUISE_CONTROL_ON_OFF: 6
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType = {
  MANUAL_INPUT_CRUISE_CONTROL_NONE: 0,
  MANUAL_INPUT_CRUISE_CONTROL_CNCL: 1,
  MANUAL_INPUT_CRUISE_CONTROL_ACC_FURTHER: 2,
  MANUAL_INPUT_CRUISE_CONTROL_ACC_CLOSER: 3,
  MANUAL_INPUT_CRUISE_CONTROL_SET_DEC: 4,
  MANUAL_INPUT_CRUISE_CONTROL_RES_INC: 5,
  MANUAL_INPUT_CRUISE_CONTROL_ON_OFF: 6
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType = {
  COMMANDED_VALUE_CRUISE_CONTROL_NONE: 0,
  COMMANDED_VALUE_CRUISE_CONTROL_CNCL: 1,
  COMMANDED_VALUE_CRUISE_CONTROL_ACC_FURTHER: 2,
  COMMANDED_VALUE_CRUISE_CONTROL_ACC_CLOSER: 3,
  COMMANDED_VALUE_CRUISE_CONTROL_SET_DEC: 4,
  COMMANDED_VALUE_CRUISE_CONTROL_RES_INC: 5,
  COMMANDED_VALUE_CRUISE_CONTROL_ON_OFF: 6
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Output_valueType} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Manual_inputType manual_input = 2;
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Manual_inputType} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Commanded_valueType commanded_value = 3;
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Cruise_control_buttons_rpt_208.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool vehicle_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pacmod_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool override_active = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool output_reported_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool input_output_fault = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool command_output_fault = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_rpt_208} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_rpt_208.prototype.hasCommandOutputFault = function() {
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
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Vehicle_speed_rpt_400.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_400} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.toObject = function(includeInstance, msg) {
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
 * The raw object form of Vehicle_speed_rpt_400 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleSpeed;

  /** @type {?|undefined} */
  this.vehicleSpeedValid;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_400.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Vehicle_speed_rpt_400();
  obj.vehicleSpeed != null && jspb.Message.setField(msg, 1, obj.vehicleSpeed);
  obj.vehicleSpeedValid != null && jspb.Message.setField(msg, 2, obj.vehicleSpeedValid);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Vehicle_speed_rpt_400;
  return proto.apollo.canbus.Vehicle_speed_rpt_400.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_400} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType} */ (reader.readEnum());
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
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Vehicle_speed_rpt_400.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_400} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType} */ (jspb.Message.getField(message, 2));
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
proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType = {
  VEHICLE_SPEED_VALID_INVALID: 0,
  VEHICLE_SPEED_VALID_VALID: 1
};

/**
 * optional double vehicle_speed = 1;
 * @return {number}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.getVehicleSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.setVehicleSpeed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.clearVehicleSpeed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.hasVehicleSpeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vehicle_speed_validType vehicle_speed_valid = 2;
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.getVehicleSpeedValid = function() {
  return /** @type {!proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Vehicle_speed_rpt_400.Vehicle_speed_validType} value
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.setVehicleSpeedValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vehicle_speed_rpt_400} returns this
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.clearVehicleSpeedValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vehicle_speed_rpt_400.prototype.hasVehicleSpeedValid = function() {
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
proto.apollo.canbus.Brake_aux_rpt_304.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_aux_rpt_304.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_aux_rpt_304} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_aux_rpt_304.toObject = function(includeInstance, msg) {
  var f, obj = {
    brakeOnOffIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    brakeOnOff: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    userInteractionIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    userInteraction: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    rawBrakePressureIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    rawBrakePressure: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    rawPedalForceIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    rawPedalForce: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    rawPedalPosIsValid: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    rawPedalPos: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_aux_rpt_304 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_aux_rpt_304.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.brakeOnOffIsValid;

  /** @type {?|undefined} */
  this.brakeOnOff;

  /** @type {?|undefined} */
  this.userInteractionIsValid;

  /** @type {?|undefined} */
  this.userInteraction;

  /** @type {?|undefined} */
  this.rawBrakePressureIsValid;

  /** @type {?|undefined} */
  this.rawBrakePressure;

  /** @type {?|undefined} */
  this.rawPedalForceIsValid;

  /** @type {?|undefined} */
  this.rawPedalForce;

  /** @type {?|undefined} */
  this.rawPedalPosIsValid;

  /** @type {?|undefined} */
  this.rawPedalPos;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_aux_rpt_304.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304}
 */
proto.apollo.canbus.Brake_aux_rpt_304.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_aux_rpt_304();
  obj.brakeOnOffIsValid != null && jspb.Message.setField(msg, 1, obj.brakeOnOffIsValid);
  obj.brakeOnOff != null && jspb.Message.setField(msg, 2, obj.brakeOnOff);
  obj.userInteractionIsValid != null && jspb.Message.setField(msg, 3, obj.userInteractionIsValid);
  obj.userInteraction != null && jspb.Message.setField(msg, 4, obj.userInteraction);
  obj.rawBrakePressureIsValid != null && jspb.Message.setField(msg, 5, obj.rawBrakePressureIsValid);
  obj.rawBrakePressure != null && jspb.Message.setField(msg, 6, obj.rawBrakePressure);
  obj.rawPedalForceIsValid != null && jspb.Message.setField(msg, 7, obj.rawPedalForceIsValid);
  obj.rawPedalForce != null && jspb.Message.setField(msg, 8, obj.rawPedalForce);
  obj.rawPedalPosIsValid != null && jspb.Message.setField(msg, 9, obj.rawPedalPosIsValid);
  obj.rawPedalPos != null && jspb.Message.setField(msg, 10, obj.rawPedalPos);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304}
 */
proto.apollo.canbus.Brake_aux_rpt_304.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_aux_rpt_304;
  return proto.apollo.canbus.Brake_aux_rpt_304.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_aux_rpt_304} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304}
 */
proto.apollo.canbus.Brake_aux_rpt_304.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeOnOffIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeOnOff(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteractionIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteraction(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawBrakePressureIsValid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawBrakePressure(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawPedalForceIsValid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawPedalForce(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawPedalPosIsValid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawPedalPos(value);
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
proto.apollo.canbus.Brake_aux_rpt_304.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_aux_rpt_304.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_aux_rpt_304} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_aux_rpt_304.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
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
    writer.writeDouble(
      10,
      f
    );
  }
};


/**
 * optional bool brake_on_off_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getBrakeOnOffIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setBrakeOnOffIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearBrakeOnOffIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasBrakeOnOffIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool brake_on_off = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getBrakeOnOff = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setBrakeOnOff = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearBrakeOnOff = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasBrakeOnOff = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool user_interaction_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getUserInteractionIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setUserInteractionIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearUserInteractionIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasUserInteractionIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool user_interaction = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getUserInteraction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setUserInteraction = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearUserInteraction = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasUserInteraction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool raw_brake_pressure_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawBrakePressureIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawBrakePressureIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawBrakePressureIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawBrakePressureIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double raw_brake_pressure = 6;
 * @return {number}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawBrakePressure = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawBrakePressure = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawBrakePressure = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawBrakePressure = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool raw_pedal_force_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawPedalForceIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawPedalForceIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawPedalForceIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawPedalForceIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double raw_pedal_force = 8;
 * @return {number}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawPedalForce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawPedalForce = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawPedalForce = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawPedalForce = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool raw_pedal_pos_is_valid = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawPedalPosIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawPedalPosIsValid = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawPedalPosIsValid = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawPedalPosIsValid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double raw_pedal_pos = 10;
 * @return {number}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.getRawPedalPos = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.setRawPedalPos = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_aux_rpt_304} returns this
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.clearRawPedalPos = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_aux_rpt_304.prototype.hasRawPedalPos = function() {
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
proto.apollo.canbus.Media_controls_cmd_120.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Media_controls_cmd_120.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Media_controls_cmd_120} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Media_controls_cmd_120.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaControlsCmd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Media_controls_cmd_120 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Media_controls_cmd_120.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.mediaControlsCmd;

  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.enable;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Media_controls_cmd_120.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120}
 */
proto.apollo.canbus.Media_controls_cmd_120.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Media_controls_cmd_120();
  obj.mediaControlsCmd != null && jspb.Message.setField(msg, 1, obj.mediaControlsCmd);
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 2, obj.ignoreOverrides);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.enable != null && jspb.Message.setField(msg, 5, obj.enable);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120}
 */
proto.apollo.canbus.Media_controls_cmd_120.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Media_controls_cmd_120;
  return proto.apollo.canbus.Media_controls_cmd_120.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Media_controls_cmd_120} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120}
 */
proto.apollo.canbus.Media_controls_cmd_120.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType} */ (reader.readEnum());
      msg.setMediaControlsCmd(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
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
proto.apollo.canbus.Media_controls_cmd_120.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Media_controls_cmd_120.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Media_controls_cmd_120} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Media_controls_cmd_120.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType = {
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_NONE: 0,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_VOICE_COMMAND: 1,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_MUTE: 2,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_PREV_TRACK_ANSWER: 3,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_NEXT_TRACK_HANG_UP: 4,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_VOL_UP: 5,
  MEDIA_CONTROLS_CMD_MEDIA_CONTROL_VOL_DOWN: 6
};

/**
 * optional Media_controls_cmdType media_controls_cmd = 1;
 * @return {!proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.getMediaControlsCmd = function() {
  return /** @type {!proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Media_controls_cmd_120.Media_controls_cmdType} value
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.setMediaControlsCmd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.clearMediaControlsCmd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.hasMediaControlsCmd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool ignore_overrides = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool enable = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_cmd_120} returns this
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_cmd_120.prototype.hasEnable = function() {
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
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Cruise_control_buttons_cmd_108.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.toObject = function(includeInstance, msg) {
  var f, obj = {
    cruiseControlButton: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Cruise_control_buttons_cmd_108 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.cruiseControlButton;

  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearFaults;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Cruise_control_buttons_cmd_108();
  obj.cruiseControlButton != null && jspb.Message.setField(msg, 1, obj.cruiseControlButton);
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 2, obj.ignoreOverrides);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.enable != null && jspb.Message.setField(msg, 4, obj.enable);
  obj.clearFaults != null && jspb.Message.setField(msg, 5, obj.clearFaults);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Cruise_control_buttons_cmd_108;
  return proto.apollo.canbus.Cruise_control_buttons_cmd_108.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType} */ (reader.readEnum());
      msg.setCruiseControlButton(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
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
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Cruise_control_buttons_cmd_108.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType = {
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_NONE: 0,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_CNCL: 1,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_ACC_FURTHER: 2,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_ACC_CLOSER: 3,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_SET_DEC: 4,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_RES_INC: 5,
  CRUISE_CONTROL_BUTTON_CRUISE_CONTROL_ON_OFF: 6
};

/**
 * optional Cruise_control_buttonType cruise_control_button = 1;
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.getCruiseControlButton = function() {
  return /** @type {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Cruise_control_buttons_cmd_108.Cruise_control_buttonType} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.setCruiseControlButton = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.clearCruiseControlButton = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.hasCruiseControlButton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool ignore_overrides = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool enable = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool clear_faults = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Cruise_control_buttons_cmd_108} returns this
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Cruise_control_buttons_cmd_108.prototype.hasClearFaults = function() {
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
proto.apollo.canbus.Parking_brake_cmd_124.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Parking_brake_cmd_124.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Parking_brake_cmd_124} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_cmd_124.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    parkingBrakeCmd: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Parking_brake_cmd_124 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Parking_brake_cmd_124.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.parkingBrakeCmd;

  /** @type {?|undefined} */
  this.clearFaults;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Parking_brake_cmd_124.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124}
 */
proto.apollo.canbus.Parking_brake_cmd_124.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Parking_brake_cmd_124();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.parkingBrakeCmd != null && jspb.Message.setField(msg, 4, obj.parkingBrakeCmd);
  obj.clearFaults != null && jspb.Message.setField(msg, 5, obj.clearFaults);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124}
 */
proto.apollo.canbus.Parking_brake_cmd_124.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Parking_brake_cmd_124;
  return proto.apollo.canbus.Parking_brake_cmd_124.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Parking_brake_cmd_124} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124}
 */
proto.apollo.canbus.Parking_brake_cmd_124.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setParkingBrakeCmd(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
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
proto.apollo.canbus.Parking_brake_cmd_124.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Parking_brake_cmd_124.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Parking_brake_cmd_124} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_cmd_124.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool parking_brake_cmd = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.getParkingBrakeCmd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.setParkingBrakeCmd = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.clearParkingBrakeCmd = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.hasParkingBrakeCmd = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool clear_faults = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_cmd_124} returns this
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_cmd_124.prototype.hasClearFaults = function() {
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
proto.apollo.canbus.Horn_rpt_21c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Horn_rpt_21c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Horn_rpt_21c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_rpt_21c.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Horn_rpt_21c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Horn_rpt_21c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Horn_rpt_21c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Horn_rpt_21c}
 */
proto.apollo.canbus.Horn_rpt_21c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Horn_rpt_21c();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.outputValue != null && jspb.Message.setField(msg, 8, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 10, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Horn_rpt_21c}
 */
proto.apollo.canbus.Horn_rpt_21c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Horn_rpt_21c;
  return proto.apollo.canbus.Horn_rpt_21c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Horn_rpt_21c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Horn_rpt_21c}
 */
proto.apollo.canbus.Horn_rpt_21c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Manual_inputType} */ (reader.readEnum());
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
proto.apollo.canbus.Horn_rpt_21c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Horn_rpt_21c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Horn_rpt_21c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Horn_rpt_21c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Output_valueType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Horn_rpt_21c.Manual_inputType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Horn_rpt_21c.Output_valueType = {
  OUTPUT_VALUE_OFF: 0,
  OUTPUT_VALUE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType = {
  COMMANDED_VALUE_OFF: 0,
  COMMANDED_VALUE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Horn_rpt_21c.Manual_inputType = {
  MANUAL_INPUT_OFF: 0,
  MANUAL_INPUT_ON: 1
};

/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Output_valueType output_value = 8;
 * @return {!proto.apollo.canbus.Horn_rpt_21c.Output_valueType}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_21c.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_21c.Output_valueType} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Commanded_valueType commanded_value = 9;
 * @return {!proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_21c.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Manual_inputType manual_input = 10;
 * @return {!proto.apollo.canbus.Horn_rpt_21c.Manual_inputType}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Horn_rpt_21c.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Horn_rpt_21c.Manual_inputType} value
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Horn_rpt_21c} returns this
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Horn_rpt_21c.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Shift_rpt_228.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Shift_rpt_228.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Shift_rpt_228} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_rpt_228.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Shift_rpt_228 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Shift_rpt_228.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.outputValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Shift_rpt_228.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Shift_rpt_228}
 */
proto.apollo.canbus.Shift_rpt_228.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Shift_rpt_228();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.manualInput != null && jspb.Message.setField(msg, 8, obj.manualInput);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.outputValue != null && jspb.Message.setField(msg, 10, obj.outputValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Shift_rpt_228}
 */
proto.apollo.canbus.Shift_rpt_228.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Shift_rpt_228;
  return proto.apollo.canbus.Shift_rpt_228.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Shift_rpt_228} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Shift_rpt_228}
 */
proto.apollo.canbus.Shift_rpt_228.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_228.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_228.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.canbus.Shift_rpt_228.Output_valueType} */ (reader.readEnum());
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
proto.apollo.canbus.Shift_rpt_228.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Shift_rpt_228.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Shift_rpt_228} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_rpt_228.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Shift_rpt_228.Manual_inputType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Shift_rpt_228.Commanded_valueType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Shift_rpt_228.Output_valueType} */ (jspb.Message.getField(message, 10));
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
proto.apollo.canbus.Shift_rpt_228.Manual_inputType = {
  MANUAL_INPUT_PARK: 0,
  MANUAL_INPUT_REVERSE: 1,
  MANUAL_INPUT_NEUTRAL: 2,
  MANUAL_INPUT_FORWARD_HIGH: 3,
  MANUAL_INPUT_LOW: 4,
  MANUAL_INPUT_BETWEEN_GEARS: 5,
  MANUAL_INPUT_ERROR: 6,
  MANUAL_INPUT_NONE: 7
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_rpt_228.Commanded_valueType = {
  COMMANDED_VALUE_PARK: 0,
  COMMANDED_VALUE_REVERSE: 1,
  COMMANDED_VALUE_NEUTRAL: 2,
  COMMANDED_VALUE_FORWARD_HIGH: 3,
  COMMANDED_VALUE_LOW: 4,
  COMMANDED_VALUE_NONE: 7
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_rpt_228.Output_valueType = {
  OUTPUT_VALUE_PARK: 0,
  OUTPUT_VALUE_REVERSE: 1,
  OUTPUT_VALUE_NEUTRAL: 2,
  OUTPUT_VALUE_FORWARD_HIGH: 3,
  OUTPUT_VALUE_LOW: 4,
  OUTPUT_VALUE_BETWEEN_GEARS: 5,
  OUTPUT_VALUE_ERROR: 6,
  OUTPUT_VALUE_NONE: 7
};

/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Manual_inputType manual_input = 8;
 * @return {!proto.apollo.canbus.Shift_rpt_228.Manual_inputType}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_228.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_228.Manual_inputType} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Commanded_valueType commanded_value = 9;
 * @return {!proto.apollo.canbus.Shift_rpt_228.Commanded_valueType}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_228.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_228.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Output_valueType output_value = 10;
 * @return {!proto.apollo.canbus.Shift_rpt_228.Output_valueType}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Shift_rpt_228.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_rpt_228.Output_valueType} value
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_rpt_228} returns this
 */
proto.apollo.canbus.Shift_rpt_228.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_rpt_228.prototype.hasOutputValue = function() {
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
proto.apollo.canbus.Shift_cmd_128.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Shift_cmd_128.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Shift_cmd_128} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_cmd_128.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    shiftCmd: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Shift_cmd_128 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Shift_cmd_128.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.shiftCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Shift_cmd_128.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Shift_cmd_128}
 */
proto.apollo.canbus.Shift_cmd_128.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Shift_cmd_128();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.shiftCmd != null && jspb.Message.setField(msg, 5, obj.shiftCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Shift_cmd_128}
 */
proto.apollo.canbus.Shift_cmd_128.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Shift_cmd_128;
  return proto.apollo.canbus.Shift_cmd_128.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Shift_cmd_128} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Shift_cmd_128}
 */
proto.apollo.canbus.Shift_cmd_128.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Shift_cmd_128.Shift_cmdType} */ (reader.readEnum());
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
proto.apollo.canbus.Shift_cmd_128.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Shift_cmd_128.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Shift_cmd_128} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Shift_cmd_128.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Shift_cmd_128.Shift_cmdType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Shift_cmd_128.Shift_cmdType = {
  SHIFT_CMD_PARK: 0,
  SHIFT_CMD_REVERSE: 1,
  SHIFT_CMD_NEUTRAL: 2,
  SHIFT_CMD_FORWARD_HIGH: 3,
  SHIFT_CMD_LOW: 4,
  SHIFT_CMD_NONE: 7
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Shift_cmdType shift_cmd = 5;
 * @return {!proto.apollo.canbus.Shift_cmd_128.Shift_cmdType}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.getShiftCmd = function() {
  return /** @type {!proto.apollo.canbus.Shift_cmd_128.Shift_cmdType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Shift_cmd_128.Shift_cmdType} value
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.setShiftCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Shift_cmd_128} returns this
 */
proto.apollo.canbus.Shift_cmd_128.prototype.clearShiftCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Shift_cmd_128.prototype.hasShiftCmd = function() {
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
proto.apollo.canbus.Accel_cmd_100.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Accel_cmd_100.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Accel_cmd_100} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_cmd_100.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    accelCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Accel_cmd_100 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Accel_cmd_100.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.accelCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Accel_cmd_100.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Accel_cmd_100}
 */
proto.apollo.canbus.Accel_cmd_100.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Accel_cmd_100();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.accelCmd != null && jspb.Message.setField(msg, 5, obj.accelCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Accel_cmd_100}
 */
proto.apollo.canbus.Accel_cmd_100.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Accel_cmd_100;
  return proto.apollo.canbus.Accel_cmd_100.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Accel_cmd_100} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Accel_cmd_100}
 */
proto.apollo.canbus.Accel_cmd_100.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
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
proto.apollo.canbus.Accel_cmd_100.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Accel_cmd_100.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Accel_cmd_100} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Accel_cmd_100.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double accel_cmd = 5;
 * @return {number}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.getAccelCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.setAccelCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Accel_cmd_100} returns this
 */
proto.apollo.canbus.Accel_cmd_100.prototype.clearAccelCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Accel_cmd_100.prototype.hasAccelCmd = function() {
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
proto.apollo.canbus.Parking_brake_rpt_224.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Parking_brake_rpt_224.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Parking_brake_rpt_224} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_rpt_224.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    outputValue: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Parking_brake_rpt_224 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Parking_brake_rpt_224.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;

  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Parking_brake_rpt_224.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224}
 */
proto.apollo.canbus.Parking_brake_rpt_224.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Parking_brake_rpt_224();
  obj.vehicleFault != null && jspb.Message.setField(msg, 1, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 2, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 3, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 4, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 5, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 6, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 7, obj.commandOutputFault);
  obj.outputValue != null && jspb.Message.setField(msg, 8, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 9, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 10, obj.manualInput);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224}
 */
proto.apollo.canbus.Parking_brake_rpt_224.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Parking_brake_rpt_224;
  return proto.apollo.canbus.Parking_brake_rpt_224.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Parking_brake_rpt_224} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224}
 */
proto.apollo.canbus.Parking_brake_rpt_224.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputValue(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandedValue(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
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
proto.apollo.canbus.Parking_brake_rpt_224.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Parking_brake_rpt_224.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Parking_brake_rpt_224} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Parking_brake_rpt_224.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool vehicle_fault = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pacmod_fault = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool override_active = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool output_reported_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool input_output_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enabled = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool command_output_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasCommandOutputFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool output_value = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getOutputValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool commanded_value = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getCommandedValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool manual_input = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.getManualInput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Parking_brake_rpt_224} returns this
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Parking_brake_rpt_224.prototype.hasManualInput = function() {
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
proto.apollo.canbus.Brake_cmd_104.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Brake_cmd_104.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Brake_cmd_104} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_cmd_104.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    brakeCmd: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Brake_cmd_104 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Brake_cmd_104.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.brakeCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Brake_cmd_104.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Brake_cmd_104}
 */
proto.apollo.canbus.Brake_cmd_104.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Brake_cmd_104();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.brakeCmd != null && jspb.Message.setField(msg, 5, obj.brakeCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Brake_cmd_104}
 */
proto.apollo.canbus.Brake_cmd_104.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Brake_cmd_104;
  return proto.apollo.canbus.Brake_cmd_104.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Brake_cmd_104} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Brake_cmd_104}
 */
proto.apollo.canbus.Brake_cmd_104.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
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
proto.apollo.canbus.Brake_cmd_104.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Brake_cmd_104.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Brake_cmd_104} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Brake_cmd_104.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double brake_cmd = 5;
 * @return {number}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.getBrakeCmd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.setBrakeCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Brake_cmd_104} returns this
 */
proto.apollo.canbus.Brake_cmd_104.prototype.clearBrakeCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Brake_cmd_104.prototype.hasBrakeCmd = function() {
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
proto.apollo.canbus.Media_controls_rpt_220.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Media_controls_rpt_220.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Media_controls_rpt_220} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Media_controls_rpt_220.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandedValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    manualInput: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    vehicleFault: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    pacmodFault: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    overrideActive: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    outputReportedFault: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    inputOutputFault: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    enabled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    commandOutputFault: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Media_controls_rpt_220 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Media_controls_rpt_220.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.outputValue;

  /** @type {?|undefined} */
  this.commandedValue;

  /** @type {?|undefined} */
  this.manualInput;

  /** @type {?|undefined} */
  this.vehicleFault;

  /** @type {?|undefined} */
  this.pacmodFault;

  /** @type {?|undefined} */
  this.overrideActive;

  /** @type {?|undefined} */
  this.outputReportedFault;

  /** @type {?|undefined} */
  this.inputOutputFault;

  /** @type {?|undefined} */
  this.enabled;

  /** @type {?|undefined} */
  this.commandOutputFault;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Media_controls_rpt_220.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220}
 */
proto.apollo.canbus.Media_controls_rpt_220.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Media_controls_rpt_220();
  obj.outputValue != null && jspb.Message.setField(msg, 1, obj.outputValue);
  obj.commandedValue != null && jspb.Message.setField(msg, 2, obj.commandedValue);
  obj.manualInput != null && jspb.Message.setField(msg, 3, obj.manualInput);
  obj.vehicleFault != null && jspb.Message.setField(msg, 4, obj.vehicleFault);
  obj.pacmodFault != null && jspb.Message.setField(msg, 5, obj.pacmodFault);
  obj.overrideActive != null && jspb.Message.setField(msg, 6, obj.overrideActive);
  obj.outputReportedFault != null && jspb.Message.setField(msg, 7, obj.outputReportedFault);
  obj.inputOutputFault != null && jspb.Message.setField(msg, 8, obj.inputOutputFault);
  obj.enabled != null && jspb.Message.setField(msg, 9, obj.enabled);
  obj.commandOutputFault != null && jspb.Message.setField(msg, 10, obj.commandOutputFault);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220}
 */
proto.apollo.canbus.Media_controls_rpt_220.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Media_controls_rpt_220;
  return proto.apollo.canbus.Media_controls_rpt_220.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Media_controls_rpt_220} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220}
 */
proto.apollo.canbus.Media_controls_rpt_220.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Output_valueType} */ (reader.readEnum());
      msg.setOutputValue(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType} */ (reader.readEnum());
      msg.setCommandedValue(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType} */ (reader.readEnum());
      msg.setManualInput(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVehicleFault(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacmodFault(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverrideActive(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutputReportedFault(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputOutputFault(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandOutputFault(value);
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
proto.apollo.canbus.Media_controls_rpt_220.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Media_controls_rpt_220.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Media_controls_rpt_220} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Media_controls_rpt_220.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Output_valueType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Media_controls_rpt_220.Output_valueType = {
  OUTPUT_VALUE_MEDIA_CONTROL_NONE: 0,
  OUTPUT_VALUE_MEDIA_CONTROL_VOICE_COMMAND: 1,
  OUTPUT_VALUE_MEDIA_CONTROL_MUTE: 2,
  OUTPUT_VALUE_MEDIA_CONTROL_PREV_TRACK_ANSWER: 3,
  OUTPUT_VALUE_MEDIA_CONTROL_NEXT_TRACK_HANG_UP: 4,
  OUTPUT_VALUE_MEDIA_CONTROL_VOL_UP: 5,
  OUTPUT_VALUE_MEDIA_CONTROL_VOL_DOWN: 6
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType = {
  COMMANDED_VALUE_MEDIA_CONTROL_NONE: 0,
  COMMANDED_VALUE_MEDIA_CONTROL_VOICE_COMMAND: 1,
  COMMANDED_VALUE_MEDIA_CONTROL_MUTE: 2,
  COMMANDED_VALUE_MEDIA_CONTROL_PREV_TRACK_ANSWER: 3,
  COMMANDED_VALUE_MEDIA_CONTROL_NEXT_TRACK_HANG_UP: 4,
  COMMANDED_VALUE_MEDIA_CONTROL_VOL_UP: 5,
  COMMANDED_VALUE_MEDIA_CONTROL_VOL_DOWN: 6
};

/**
 * @enum {number}
 */
proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType = {
  MANUAL_INPUT_MEDIA_CONTROL_NONE: 0,
  MANUAL_INPUT_MEDIA_CONTROL_VOICE_COMMAND: 1,
  MANUAL_INPUT_MEDIA_CONTROL_MUTE: 2,
  MANUAL_INPUT_MEDIA_CONTROL_PREV_TRACK_ANSWER: 3,
  MANUAL_INPUT_MEDIA_CONTROL_NEXT_TRACK_HANG_UP: 4,
  MANUAL_INPUT_MEDIA_CONTROL_VOL_UP: 5,
  MANUAL_INPUT_MEDIA_CONTROL_VOL_DOWN: 6
};

/**
 * optional Output_valueType output_value = 1;
 * @return {!proto.apollo.canbus.Media_controls_rpt_220.Output_valueType}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getOutputValue = function() {
  return /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Output_valueType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.canbus.Media_controls_rpt_220.Output_valueType} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setOutputValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearOutputValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasOutputValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commanded_valueType commanded_value = 2;
 * @return {!proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getCommandedValue = function() {
  return /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.canbus.Media_controls_rpt_220.Commanded_valueType} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setCommandedValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearCommandedValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasCommandedValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Manual_inputType manual_input = 3;
 * @return {!proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getManualInput = function() {
  return /** @type {!proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.canbus.Media_controls_rpt_220.Manual_inputType} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setManualInput = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearManualInput = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasManualInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool vehicle_fault = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getVehicleFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setVehicleFault = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearVehicleFault = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasVehicleFault = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pacmod_fault = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getPacmodFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setPacmodFault = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearPacmodFault = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasPacmodFault = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool override_active = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getOverrideActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setOverrideActive = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearOverrideActive = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasOverrideActive = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool output_reported_fault = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getOutputReportedFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setOutputReportedFault = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearOutputReportedFault = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasOutputReportedFault = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool input_output_fault = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getInputOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setInputOutputFault = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearInputOutputFault = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasInputOutputFault = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool enabled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool command_output_fault = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.getCommandOutputFault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.setCommandOutputFault = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Media_controls_rpt_220} returns this
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.clearCommandOutputFault = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Media_controls_rpt_220.prototype.hasCommandOutputFault = function() {
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
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Steering_aux_rpt_32c.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Steering_aux_rpt_32c} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_aux_rpt_32c.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInteractionIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    userInteraction: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    rotationRateIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    rotationRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    rawTorqueIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    rawTorque: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    rawPositionIsValid: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    rawPosition: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Steering_aux_rpt_32c as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Steering_aux_rpt_32c.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.userInteractionIsValid;

  /** @type {?|undefined} */
  this.userInteraction;

  /** @type {?|undefined} */
  this.rotationRateIsValid;

  /** @type {?|undefined} */
  this.rotationRate;

  /** @type {?|undefined} */
  this.rawTorqueIsValid;

  /** @type {?|undefined} */
  this.rawTorque;

  /** @type {?|undefined} */
  this.rawPositionIsValid;

  /** @type {?|undefined} */
  this.rawPosition;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Steering_aux_rpt_32c.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Steering_aux_rpt_32c();
  obj.userInteractionIsValid != null && jspb.Message.setField(msg, 1, obj.userInteractionIsValid);
  obj.userInteraction != null && jspb.Message.setField(msg, 2, obj.userInteraction);
  obj.rotationRateIsValid != null && jspb.Message.setField(msg, 3, obj.rotationRateIsValid);
  obj.rotationRate != null && jspb.Message.setField(msg, 4, obj.rotationRate);
  obj.rawTorqueIsValid != null && jspb.Message.setField(msg, 5, obj.rawTorqueIsValid);
  obj.rawTorque != null && jspb.Message.setField(msg, 6, obj.rawTorque);
  obj.rawPositionIsValid != null && jspb.Message.setField(msg, 7, obj.rawPositionIsValid);
  obj.rawPosition != null && jspb.Message.setField(msg, 8, obj.rawPosition);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Steering_aux_rpt_32c;
  return proto.apollo.canbus.Steering_aux_rpt_32c.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Steering_aux_rpt_32c} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteractionIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserInteraction(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRotationRateIsValid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationRate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawTorqueIsValid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawTorque(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawPositionIsValid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRawPosition(value);
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
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Steering_aux_rpt_32c.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Steering_aux_rpt_32c} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Steering_aux_rpt_32c.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional bool user_interaction_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getUserInteractionIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setUserInteractionIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearUserInteractionIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasUserInteractionIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool user_interaction = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getUserInteraction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setUserInteraction = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearUserInteraction = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasUserInteraction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool rotation_rate_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRotationRateIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRotationRateIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRotationRateIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRotationRateIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double rotation_rate = 4;
 * @return {number}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRotationRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRotationRate = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRotationRate = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRotationRate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool raw_torque_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRawTorqueIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRawTorqueIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRawTorqueIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRawTorqueIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double raw_torque = 6;
 * @return {number}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRawTorque = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRawTorque = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRawTorque = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRawTorque = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool raw_position_is_valid = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRawPositionIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRawPositionIsValid = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRawPositionIsValid = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRawPositionIsValid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double raw_position = 8;
 * @return {number}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.getRawPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.setRawPosition = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Steering_aux_rpt_32c} returns this
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.clearRawPosition = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Steering_aux_rpt_32c.prototype.hasRawPosition = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Lat_lon_heading_rpt_40e.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.toObject = function(includeInstance, msg) {
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
 * The raw object form of Lat_lon_heading_rpt_40e as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.ObjectFormat = function() {
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
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_40e.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Lat_lon_heading_rpt_40e();
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
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Lat_lon_heading_rpt_40e;
  return proto.apollo.canbus.Lat_lon_heading_rpt_40e.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Lat_lon_heading_rpt_40e.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 longitude_seconds = 2;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLongitudeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLongitudeSeconds = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLongitudeSeconds = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLongitudeSeconds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 longitude_minutes = 3;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLongitudeMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLongitudeMinutes = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLongitudeMinutes = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLongitudeMinutes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 longitude_degrees = 4;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLongitudeDegrees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLongitudeDegrees = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLongitudeDegrees = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLongitudeDegrees = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 latitude_seconds = 5;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLatitudeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLatitudeSeconds = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLatitudeSeconds = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLatitudeSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 latitude_minutes = 6;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLatitudeMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLatitudeMinutes = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLatitudeMinutes = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLatitudeMinutes = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 latitude_degrees = 7;
 * @return {number}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.getLatitudeDegrees = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.setLatitudeDegrees = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Lat_lon_heading_rpt_40e} returns this
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.clearLatitudeDegrees = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lat_lon_heading_rpt_40e.prototype.hasLatitudeDegrees = function() {
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
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Yaw_rate_rpt_40d.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_40d} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.toObject = function(includeInstance, msg) {
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
 * The raw object form of Yaw_rate_rpt_40d as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.yawRate;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_40d.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_40d}
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Yaw_rate_rpt_40d();
  obj.yawRate != null && jspb.Message.setField(msg, 1, obj.yawRate);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_40d}
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Yaw_rate_rpt_40d;
  return proto.apollo.canbus.Yaw_rate_rpt_40d.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_40d} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_40d}
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Yaw_rate_rpt_40d.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Yaw_rate_rpt_40d} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.getYawRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_40d} returns this
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.setYawRate = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Yaw_rate_rpt_40d} returns this
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.clearYawRate = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Yaw_rate_rpt_40d.prototype.hasYawRate = function() {
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
proto.apollo.canbus.Date_time_rpt_40f.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Date_time_rpt_40f.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Date_time_rpt_40f} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Date_time_rpt_40f.toObject = function(includeInstance, msg) {
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
 * The raw object form of Date_time_rpt_40f as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Date_time_rpt_40f.ObjectFormat = function() {
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
 * @param {!proto.apollo.canbus.Date_time_rpt_40f.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f}
 */
proto.apollo.canbus.Date_time_rpt_40f.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Date_time_rpt_40f();
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
 * @return {!proto.apollo.canbus.Date_time_rpt_40f}
 */
proto.apollo.canbus.Date_time_rpt_40f.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Date_time_rpt_40f;
  return proto.apollo.canbus.Date_time_rpt_40f.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Date_time_rpt_40f} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f}
 */
proto.apollo.canbus.Date_time_rpt_40f.deserializeBinaryFromReader = function(msg, reader) {
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
proto.apollo.canbus.Date_time_rpt_40f.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Date_time_rpt_40f.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Date_time_rpt_40f} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Date_time_rpt_40f.serializeBinaryToWriter = function(message, writer) {
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
proto.apollo.canbus.Date_time_rpt_40f.prototype.getTimeSecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setTimeSecond = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearTimeSecond = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasTimeSecond = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 time_minute = 2;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.getTimeMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setTimeMinute = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearTimeMinute = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasTimeMinute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 time_hour = 3;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.getTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setTimeHour = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearTimeHour = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasTimeHour = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 date_day = 4;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.getDateDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setDateDay = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearDateDay = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasDateDay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 date_month = 5;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.getDateMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setDateMonth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearDateMonth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasDateMonth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 date_year = 6;
 * @return {number}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.getDateYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.setDateYear = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Date_time_rpt_40f} returns this
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.clearDateYear = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Date_time_rpt_40f.prototype.hasDateYear = function() {
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
proto.apollo.canbus.Vin_rpt_414.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Vin_rpt_414.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Vin_rpt_414} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vin_rpt_414.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehSerial: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    vehMyCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    vehMfgCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vin_rpt_414 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Vin_rpt_414.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehSerial;

  /** @type {?|undefined} */
  this.vehMyCode;

  /** @type {?|undefined} */
  this.vehMfgCode;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Vin_rpt_414.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Vin_rpt_414}
 */
proto.apollo.canbus.Vin_rpt_414.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Vin_rpt_414();
  obj.vehSerial != null && jspb.Message.setField(msg, 1, obj.vehSerial);
  obj.vehMyCode != null && jspb.Message.setField(msg, 2, obj.vehMyCode);
  obj.vehMfgCode != null && jspb.Message.setField(msg, 3, obj.vehMfgCode);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Vin_rpt_414}
 */
proto.apollo.canbus.Vin_rpt_414.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Vin_rpt_414;
  return proto.apollo.canbus.Vin_rpt_414.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Vin_rpt_414} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Vin_rpt_414}
 */
proto.apollo.canbus.Vin_rpt_414.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVehSerial(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVehMyCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVehMfgCode(value);
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
proto.apollo.canbus.Vin_rpt_414.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Vin_rpt_414.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Vin_rpt_414} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Vin_rpt_414.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional int32 veh_serial = 1;
 * @return {number}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.getVehSerial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.setVehSerial = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.clearVehSerial = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.hasVehSerial = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 veh_my_code = 2;
 * @return {number}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.getVehMyCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.setVehMyCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.clearVehMyCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.hasVehMyCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 veh_mfg_code = 3;
 * @return {number}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.getVehMfgCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.setVehMfgCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Vin_rpt_414} returns this
 */
proto.apollo.canbus.Vin_rpt_414.prototype.clearVehMfgCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Vin_rpt_414.prototype.hasVehMfgCode = function() {
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
proto.apollo.canbus.Occupancy_rpt_415.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Occupancy_rpt_415.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Occupancy_rpt_415} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Occupancy_rpt_415.toObject = function(includeInstance, msg) {
  var f, obj = {
    rearSeatbeltBuckledIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    passSeatbeltBuckledIsValid: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    driverSeatbeltBuckledIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    rearSeatOccupiedIsValid: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    passSeatOccupiedIsValid: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    driverSeatOccupiedIsValid: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    rearSeatbeltBuckled: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    passSeatbeltBuckled: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    driverSeatbeltBuckled: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    rearSeatOccupied: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    passSeatOccupied: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    driverSeatOccupied: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Occupancy_rpt_415 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Occupancy_rpt_415.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.rearSeatbeltBuckledIsValid;

  /** @type {?|undefined} */
  this.passSeatbeltBuckledIsValid;

  /** @type {?|undefined} */
  this.driverSeatbeltBuckledIsValid;

  /** @type {?|undefined} */
  this.rearSeatOccupiedIsValid;

  /** @type {?|undefined} */
  this.passSeatOccupiedIsValid;

  /** @type {?|undefined} */
  this.driverSeatOccupiedIsValid;

  /** @type {?|undefined} */
  this.rearSeatbeltBuckled;

  /** @type {?|undefined} */
  this.passSeatbeltBuckled;

  /** @type {?|undefined} */
  this.driverSeatbeltBuckled;

  /** @type {?|undefined} */
  this.rearSeatOccupied;

  /** @type {?|undefined} */
  this.passSeatOccupied;

  /** @type {?|undefined} */
  this.driverSeatOccupied;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Occupancy_rpt_415.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415}
 */
proto.apollo.canbus.Occupancy_rpt_415.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Occupancy_rpt_415();
  obj.rearSeatbeltBuckledIsValid != null && jspb.Message.setField(msg, 1, obj.rearSeatbeltBuckledIsValid);
  obj.passSeatbeltBuckledIsValid != null && jspb.Message.setField(msg, 2, obj.passSeatbeltBuckledIsValid);
  obj.driverSeatbeltBuckledIsValid != null && jspb.Message.setField(msg, 3, obj.driverSeatbeltBuckledIsValid);
  obj.rearSeatOccupiedIsValid != null && jspb.Message.setField(msg, 4, obj.rearSeatOccupiedIsValid);
  obj.passSeatOccupiedIsValid != null && jspb.Message.setField(msg, 5, obj.passSeatOccupiedIsValid);
  obj.driverSeatOccupiedIsValid != null && jspb.Message.setField(msg, 6, obj.driverSeatOccupiedIsValid);
  obj.rearSeatbeltBuckled != null && jspb.Message.setField(msg, 7, obj.rearSeatbeltBuckled);
  obj.passSeatbeltBuckled != null && jspb.Message.setField(msg, 8, obj.passSeatbeltBuckled);
  obj.driverSeatbeltBuckled != null && jspb.Message.setField(msg, 9, obj.driverSeatbeltBuckled);
  obj.rearSeatOccupied != null && jspb.Message.setField(msg, 10, obj.rearSeatOccupied);
  obj.passSeatOccupied != null && jspb.Message.setField(msg, 11, obj.passSeatOccupied);
  obj.driverSeatOccupied != null && jspb.Message.setField(msg, 12, obj.driverSeatOccupied);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415}
 */
proto.apollo.canbus.Occupancy_rpt_415.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Occupancy_rpt_415;
  return proto.apollo.canbus.Occupancy_rpt_415.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Occupancy_rpt_415} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415}
 */
proto.apollo.canbus.Occupancy_rpt_415.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSeatbeltBuckledIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassSeatbeltBuckledIsValid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverSeatbeltBuckledIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSeatOccupiedIsValid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassSeatOccupiedIsValid(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverSeatOccupiedIsValid(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSeatbeltBuckled(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassSeatbeltBuckled(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverSeatbeltBuckled(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSeatOccupied(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPassSeatOccupied(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDriverSeatOccupied(value);
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
proto.apollo.canbus.Occupancy_rpt_415.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Occupancy_rpt_415.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Occupancy_rpt_415} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Occupancy_rpt_415.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional bool rear_seatbelt_buckled_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getRearSeatbeltBuckledIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setRearSeatbeltBuckledIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearRearSeatbeltBuckledIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasRearSeatbeltBuckledIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool pass_seatbelt_buckled_is_valid = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getPassSeatbeltBuckledIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setPassSeatbeltBuckledIsValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearPassSeatbeltBuckledIsValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasPassSeatbeltBuckledIsValid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool driver_seatbelt_buckled_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getDriverSeatbeltBuckledIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setDriverSeatbeltBuckledIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearDriverSeatbeltBuckledIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasDriverSeatbeltBuckledIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool rear_seat_occupied_is_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getRearSeatOccupiedIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setRearSeatOccupiedIsValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearRearSeatOccupiedIsValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasRearSeatOccupiedIsValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pass_seat_occupied_is_valid = 5;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getPassSeatOccupiedIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setPassSeatOccupiedIsValid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearPassSeatOccupiedIsValid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasPassSeatOccupiedIsValid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool driver_seat_occupied_is_valid = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getDriverSeatOccupiedIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setDriverSeatOccupiedIsValid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearDriverSeatOccupiedIsValid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasDriverSeatOccupiedIsValid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool rear_seatbelt_buckled = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getRearSeatbeltBuckled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setRearSeatbeltBuckled = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearRearSeatbeltBuckled = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasRearSeatbeltBuckled = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool pass_seatbelt_buckled = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getPassSeatbeltBuckled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setPassSeatbeltBuckled = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearPassSeatbeltBuckled = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasPassSeatbeltBuckled = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool driver_seatbelt_buckled = 9;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getDriverSeatbeltBuckled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setDriverSeatbeltBuckled = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearDriverSeatbeltBuckled = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasDriverSeatbeltBuckled = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool rear_seat_occupied = 10;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getRearSeatOccupied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setRearSeatOccupied = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearRearSeatOccupied = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasRearSeatOccupied = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool pass_seat_occupied = 11;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getPassSeatOccupied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setPassSeatOccupied = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearPassSeatOccupied = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasPassSeatOccupied = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool driver_seat_occupied = 12;
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.getDriverSeatOccupied = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.setDriverSeatOccupied = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Occupancy_rpt_415} returns this
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.clearDriverSeatOccupied = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Occupancy_rpt_415.prototype.hasDriverSeatOccupied = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.apollo.canbus.Interior_lights_rpt_416.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Interior_lights_rpt_416.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Interior_lights_rpt_416} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Interior_lights_rpt_416.toObject = function(includeInstance, msg) {
  var f, obj = {
    dimLevelIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    moodLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    rearDomeLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    frontDomeLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    dimLevel: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    moodLightsOn: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
    rearDomeLightsOn: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    frontDomeLightsOn: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Interior_lights_rpt_416 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Interior_lights_rpt_416.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dimLevelIsValid;

  /** @type {?|undefined} */
  this.moodLightsOnIsValid;

  /** @type {?|undefined} */
  this.rearDomeLightsOnIsValid;

  /** @type {?|undefined} */
  this.frontDomeLightsOnIsValid;

  /** @type {?|undefined} */
  this.dimLevel;

  /** @type {?|undefined} */
  this.moodLightsOn;

  /** @type {?|undefined} */
  this.rearDomeLightsOn;

  /** @type {?|undefined} */
  this.frontDomeLightsOn;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Interior_lights_rpt_416.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416}
 */
proto.apollo.canbus.Interior_lights_rpt_416.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Interior_lights_rpt_416();
  obj.dimLevelIsValid != null && jspb.Message.setField(msg, 1, obj.dimLevelIsValid);
  obj.moodLightsOnIsValid != null && jspb.Message.setField(msg, 2, obj.moodLightsOnIsValid);
  obj.rearDomeLightsOnIsValid != null && jspb.Message.setField(msg, 3, obj.rearDomeLightsOnIsValid);
  obj.frontDomeLightsOnIsValid != null && jspb.Message.setField(msg, 4, obj.frontDomeLightsOnIsValid);
  obj.dimLevel != null && jspb.Message.setField(msg, 5, obj.dimLevel);
  obj.moodLightsOn != null && jspb.Message.setField(msg, 6, obj.moodLightsOn);
  obj.rearDomeLightsOn != null && jspb.Message.setField(msg, 7, obj.rearDomeLightsOn);
  obj.frontDomeLightsOn != null && jspb.Message.setField(msg, 8, obj.frontDomeLightsOn);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416}
 */
proto.apollo.canbus.Interior_lights_rpt_416.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Interior_lights_rpt_416;
  return proto.apollo.canbus.Interior_lights_rpt_416.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Interior_lights_rpt_416} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416}
 */
proto.apollo.canbus.Interior_lights_rpt_416.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDimLevelIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMoodLightsOnIsValid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearDomeLightsOnIsValid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontDomeLightsOnIsValid(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType} */ (reader.readEnum());
      msg.setDimLevel(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMoodLightsOn(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearDomeLightsOn(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontDomeLightsOn(value);
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
proto.apollo.canbus.Interior_lights_rpt_416.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Interior_lights_rpt_416.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Interior_lights_rpt_416} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Interior_lights_rpt_416.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType} */ (jspb.Message.getField(message, 5));
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
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType = {
  DIM_LEVEL_DIM_LEVEL_MIN: 0,
  DIM_LEVEL_DIM_LEVEL_1: 1,
  DIM_LEVEL_DIM_LEVEL_2: 2,
  DIM_LEVEL_DIM_LEVEL_3: 3,
  DIM_LEVEL_DIM_LEVEL_4: 4,
  DIM_LEVEL_DIM_LEVEL_5: 5,
  DIM_LEVEL_DIM_LEVEL_6: 6,
  DIM_LEVEL_DIM_LEVEL_7: 7,
  DIM_LEVEL_DIM_LEVEL_8: 8,
  DIM_LEVEL_DIM_LEVEL_9: 9,
  DIM_LEVEL_DIM_LEVEL_10: 10,
  DIM_LEVEL_DIM_LEVEL_11: 11,
  DIM_LEVEL_DIM_LEVEL_MAX: 12
};

/**
 * optional bool dim_level_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getDimLevelIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setDimLevelIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearDimLevelIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasDimLevelIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool mood_lights_on_is_valid = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getMoodLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setMoodLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearMoodLightsOnIsValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasMoodLightsOnIsValid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool rear_dome_lights_on_is_valid = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getRearDomeLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setRearDomeLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearRearDomeLightsOnIsValid = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasRearDomeLightsOnIsValid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool front_dome_lights_on_is_valid = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getFrontDomeLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setFrontDomeLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearFrontDomeLightsOnIsValid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasFrontDomeLightsOnIsValid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Dim_levelType dim_level = 5;
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getDimLevel = function() {
  return /** @type {!proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Interior_lights_rpt_416.Dim_levelType} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setDimLevel = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearDimLevel = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasDimLevel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool mood_lights_on = 6;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getMoodLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setMoodLightsOn = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearMoodLightsOn = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasMoodLightsOn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool rear_dome_lights_on = 7;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getRearDomeLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setRearDomeLightsOn = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearRearDomeLightsOn = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasRearDomeLightsOn = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool front_dome_lights_on = 8;
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.getFrontDomeLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.setFrontDomeLightsOn = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Interior_lights_rpt_416} returns this
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.clearFrontDomeLightsOn = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Interior_lights_rpt_416.prototype.hasFrontDomeLightsOn = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.apollo.canbus.Turn_cmd_130.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Turn_cmd_130.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Turn_cmd_130} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_cmd_130.toObject = function(includeInstance, msg) {
  var f, obj = {
    ignoreOverrides: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    enable: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    clearOverride: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    clearFaults: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    turnSignalCmd: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Turn_cmd_130 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Turn_cmd_130.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.ignoreOverrides;

  /** @type {?|undefined} */
  this.enable;

  /** @type {?|undefined} */
  this.clearOverride;

  /** @type {?|undefined} */
  this.clearFaults;

  /** @type {?|undefined} */
  this.turnSignalCmd;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Turn_cmd_130.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Turn_cmd_130}
 */
proto.apollo.canbus.Turn_cmd_130.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Turn_cmd_130();
  obj.ignoreOverrides != null && jspb.Message.setField(msg, 1, obj.ignoreOverrides);
  obj.enable != null && jspb.Message.setField(msg, 2, obj.enable);
  obj.clearOverride != null && jspb.Message.setField(msg, 3, obj.clearOverride);
  obj.clearFaults != null && jspb.Message.setField(msg, 4, obj.clearFaults);
  obj.turnSignalCmd != null && jspb.Message.setField(msg, 5, obj.turnSignalCmd);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Turn_cmd_130}
 */
proto.apollo.canbus.Turn_cmd_130.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Turn_cmd_130;
  return proto.apollo.canbus.Turn_cmd_130.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Turn_cmd_130} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Turn_cmd_130}
 */
proto.apollo.canbus.Turn_cmd_130.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreOverrides(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearOverride(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearFaults(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType} */ (reader.readEnum());
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
proto.apollo.canbus.Turn_cmd_130.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Turn_cmd_130.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Turn_cmd_130} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Turn_cmd_130.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType = {
  TURN_SIGNAL_CMD_RIGHT: 0,
  TURN_SIGNAL_CMD_NONE: 1,
  TURN_SIGNAL_CMD_LEFT: 2,
  TURN_SIGNAL_CMD_HAZARD: 3
};

/**
 * optional bool ignore_overrides = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.getIgnoreOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.setIgnoreOverrides = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.clearIgnoreOverrides = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.hasIgnoreOverrides = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.setEnable = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.clearEnable = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.hasEnable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool clear_override = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.getClearOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.setClearOverride = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.clearClearOverride = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.hasClearOverride = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool clear_faults = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.getClearFaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.setClearFaults = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.clearClearFaults = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.hasClearFaults = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Turn_signal_cmdType turn_signal_cmd = 5;
 * @return {!proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.getTurnSignalCmd = function() {
  return /** @type {!proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.canbus.Turn_cmd_130.Turn_signal_cmdType} value
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.setTurnSignalCmd = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Turn_cmd_130} returns this
 */
proto.apollo.canbus.Turn_cmd_130.prototype.clearTurnSignalCmd = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Turn_cmd_130.prototype.hasTurnSignalCmd = function() {
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
proto.apollo.canbus.Detected_object_rpt_411.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Detected_object_rpt_411.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Detected_object_rpt_411} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Detected_object_rpt_411.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontObjectDistanceHighRes: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    frontObjectDistanceLowRes: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Detected_object_rpt_411 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Detected_object_rpt_411.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.frontObjectDistanceHighRes;

  /** @type {?|undefined} */
  this.frontObjectDistanceLowRes;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Detected_object_rpt_411.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Detected_object_rpt_411}
 */
proto.apollo.canbus.Detected_object_rpt_411.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Detected_object_rpt_411();
  obj.frontObjectDistanceHighRes != null && jspb.Message.setField(msg, 1, obj.frontObjectDistanceHighRes);
  obj.frontObjectDistanceLowRes != null && jspb.Message.setField(msg, 2, obj.frontObjectDistanceLowRes);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Detected_object_rpt_411}
 */
proto.apollo.canbus.Detected_object_rpt_411.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Detected_object_rpt_411;
  return proto.apollo.canbus.Detected_object_rpt_411.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Detected_object_rpt_411} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Detected_object_rpt_411}
 */
proto.apollo.canbus.Detected_object_rpt_411.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrontObjectDistanceHighRes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrontObjectDistanceLowRes(value);
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
proto.apollo.canbus.Detected_object_rpt_411.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Detected_object_rpt_411.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Detected_object_rpt_411} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Detected_object_rpt_411.serializeBinaryToWriter = function(message, writer) {
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
 * optional double front_object_distance_high_res = 1;
 * @return {number}
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.getFrontObjectDistanceHighRes = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Detected_object_rpt_411} returns this
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.setFrontObjectDistanceHighRes = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Detected_object_rpt_411} returns this
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.clearFrontObjectDistanceHighRes = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.hasFrontObjectDistanceHighRes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double front_object_distance_low_res = 2;
 * @return {number}
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.getFrontObjectDistanceLowRes = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Detected_object_rpt_411} returns this
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.setFrontObjectDistanceLowRes = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Detected_object_rpt_411} returns this
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.clearFrontObjectDistanceLowRes = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Detected_object_rpt_411.prototype.hasFrontObjectDistanceLowRes = function() {
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
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Veh_specific_rpt_1_412.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Veh_specific_rpt_1_412} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.toObject = function(includeInstance, msg) {
  var f, obj = {
    shiftPos2: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    shiftPos1: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Veh_specific_rpt_1_412 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.shiftPos2;

  /** @type {?|undefined} */
  this.shiftPos1;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Veh_specific_rpt_1_412.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Veh_specific_rpt_1_412();
  obj.shiftPos2 != null && jspb.Message.setField(msg, 1, obj.shiftPos2);
  obj.shiftPos1 != null && jspb.Message.setField(msg, 2, obj.shiftPos1);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Veh_specific_rpt_1_412;
  return proto.apollo.canbus.Veh_specific_rpt_1_412.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Veh_specific_rpt_1_412} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShiftPos2(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShiftPos1(value);
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
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Veh_specific_rpt_1_412.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Veh_specific_rpt_1_412} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 shift_pos_2 = 1;
 * @return {number}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.getShiftPos2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412} returns this
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.setShiftPos2 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412} returns this
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.clearShiftPos2 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.hasShiftPos2 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 shift_pos_1 = 2;
 * @return {number}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.getShiftPos1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412} returns this
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.setShiftPos1 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Veh_specific_rpt_1_412} returns this
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.clearShiftPos1 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Veh_specific_rpt_1_412.prototype.hasShiftPos1 = function() {
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
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Veh_dynamics_rpt_413.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Veh_dynamics_rpt_413} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehGForces: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Veh_dynamics_rpt_413 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.vehGForces;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Veh_dynamics_rpt_413.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Veh_dynamics_rpt_413}
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Veh_dynamics_rpt_413();
  obj.vehGForces != null && jspb.Message.setField(msg, 1, obj.vehGForces);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Veh_dynamics_rpt_413}
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Veh_dynamics_rpt_413;
  return proto.apollo.canbus.Veh_dynamics_rpt_413.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Veh_dynamics_rpt_413} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Veh_dynamics_rpt_413}
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVehGForces(value);
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
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Veh_dynamics_rpt_413.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Veh_dynamics_rpt_413} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.serializeBinaryToWriter = function(message, writer) {
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
 * optional double veh_g_forces = 1;
 * @return {number}
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.getVehGForces = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.canbus.Veh_dynamics_rpt_413} returns this
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.setVehGForces = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Veh_dynamics_rpt_413} returns this
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.clearVehGForces = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Veh_dynamics_rpt_413.prototype.hasVehGForces = function() {
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
proto.apollo.canbus.Rear_lights_rpt_418.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Rear_lights_rpt_418.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Rear_lights_rpt_418} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Rear_lights_rpt_418.toObject = function(includeInstance, msg) {
  var f, obj = {
    reverseLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    brakeLightsOnIsValid: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    reverseLightsOn: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    brakeLightsOn: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Rear_lights_rpt_418 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Rear_lights_rpt_418.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.reverseLightsOnIsValid;

  /** @type {?|undefined} */
  this.brakeLightsOnIsValid;

  /** @type {?|undefined} */
  this.reverseLightsOn;

  /** @type {?|undefined} */
  this.brakeLightsOn;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Rear_lights_rpt_418.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418}
 */
proto.apollo.canbus.Rear_lights_rpt_418.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Rear_lights_rpt_418();
  obj.reverseLightsOnIsValid != null && jspb.Message.setField(msg, 1, obj.reverseLightsOnIsValid);
  obj.brakeLightsOnIsValid != null && jspb.Message.setField(msg, 2, obj.brakeLightsOnIsValid);
  obj.reverseLightsOn != null && jspb.Message.setField(msg, 3, obj.reverseLightsOn);
  obj.brakeLightsOn != null && jspb.Message.setField(msg, 4, obj.brakeLightsOn);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418}
 */
proto.apollo.canbus.Rear_lights_rpt_418.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Rear_lights_rpt_418;
  return proto.apollo.canbus.Rear_lights_rpt_418.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Rear_lights_rpt_418} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418}
 */
proto.apollo.canbus.Rear_lights_rpt_418.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverseLightsOnIsValid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeLightsOnIsValid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverseLightsOn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBrakeLightsOn(value);
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
proto.apollo.canbus.Rear_lights_rpt_418.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Rear_lights_rpt_418.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Rear_lights_rpt_418} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Rear_lights_rpt_418.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool reverse_lights_on_is_valid = 1;
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.getReverseLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.setReverseLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.clearReverseLightsOnIsValid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.hasReverseLightsOnIsValid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool brake_lights_on_is_valid = 2;
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.getBrakeLightsOnIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.setBrakeLightsOnIsValid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.clearBrakeLightsOnIsValid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.hasBrakeLightsOnIsValid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool reverse_lights_on = 3;
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.getReverseLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.setReverseLightsOn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.clearReverseLightsOn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.hasReverseLightsOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool brake_lights_on = 4;
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.getBrakeLightsOn = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.setBrakeLightsOn = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.canbus.Rear_lights_rpt_418} returns this
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.clearBrakeLightsOn = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Rear_lights_rpt_418.prototype.hasBrakeLightsOn = function() {
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
proto.apollo.canbus.Lexus.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.canbus.Lexus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.canbus.Lexus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lexus.toObject = function(includeInstance, msg) {
  var f, obj = {
    hazardLightsRpt214: (f = msg.getHazardLightsRpt214()) && proto.apollo.canbus.Hazard_lights_rpt_214.toObject(includeInstance, f),
    steeringCmd12c: (f = msg.getSteeringCmd12c()) && proto.apollo.canbus.Steering_cmd_12c.toObject(includeInstance, f),
    dashControlsRightRpt210: (f = msg.getDashControlsRightRpt210()) && proto.apollo.canbus.Dash_controls_right_rpt_210.toObject(includeInstance, f),
    dashControlsLeftCmd10c: (f = msg.getDashControlsLeftCmd10c()) && proto.apollo.canbus.Dash_controls_left_cmd_10c.toObject(includeInstance, f),
    steeringRpt22c: (f = msg.getSteeringRpt22c()) && proto.apollo.canbus.Steering_rpt_22c.toObject(includeInstance, f),
    turnAuxRpt330: (f = msg.getTurnAuxRpt330()) && proto.apollo.canbus.Turn_aux_rpt_330.toObject(includeInstance, f),
    headlightRpt218: (f = msg.getHeadlightRpt218()) && proto.apollo.canbus.Headlight_rpt_218.toObject(includeInstance, f),
    hazardLightsCmd114: (f = msg.getHazardLightsCmd114()) && proto.apollo.canbus.Hazard_lights_cmd_114.toObject(includeInstance, f),
    dashControlsLeftRpt20c: (f = msg.getDashControlsLeftRpt20c()) && proto.apollo.canbus.Dash_controls_left_rpt_20c.toObject(includeInstance, f),
    headlightAuxRpt318: (f = msg.getHeadlightAuxRpt318()) && proto.apollo.canbus.Headlight_aux_rpt_318.toObject(includeInstance, f),
    dashControlsRightCmd110: (f = msg.getDashControlsRightCmd110()) && proto.apollo.canbus.Dash_controls_right_cmd_110.toObject(includeInstance, f),
    wiperCmd134: (f = msg.getWiperCmd134()) && proto.apollo.canbus.Wiper_cmd_134.toObject(includeInstance, f),
    wiperRpt234: (f = msg.getWiperRpt234()) && proto.apollo.canbus.Wiper_rpt_234.toObject(includeInstance, f),
    turnRpt230: (f = msg.getTurnRpt230()) && proto.apollo.canbus.Turn_rpt_230.toObject(includeInstance, f),
    headlightCmd118: (f = msg.getHeadlightCmd118()) && proto.apollo.canbus.Headlight_cmd_118.toObject(includeInstance, f),
    doorRpt417: (f = msg.getDoorRpt417()) && proto.apollo.canbus.Door_rpt_417.toObject(includeInstance, f),
    componentRpt20: (f = msg.getComponentRpt20()) && proto.apollo.canbus.Component_rpt_20.toObject(includeInstance, f),
    wheelSpeedRpt407: (f = msg.getWheelSpeedRpt407()) && proto.apollo.canbus.Wheel_speed_rpt_407.toObject(includeInstance, f),
    steeringMotorRpt3406: (f = msg.getSteeringMotorRpt3406()) && proto.apollo.canbus.Steering_motor_rpt_3_406.toObject(includeInstance, f),
    steeringMotorRpt2405: (f = msg.getSteeringMotorRpt2405()) && proto.apollo.canbus.Steering_motor_rpt_2_405.toObject(includeInstance, f),
    steeringMotorRpt1404: (f = msg.getSteeringMotorRpt1404()) && proto.apollo.canbus.Steering_motor_rpt_1_404.toObject(includeInstance, f),
    brakeMotorRpt3403: (f = msg.getBrakeMotorRpt3403()) && proto.apollo.canbus.Brake_motor_rpt_3_403.toObject(includeInstance, f),
    brakeMotorRpt2402: (f = msg.getBrakeMotorRpt2402()) && proto.apollo.canbus.Brake_motor_rpt_2_402.toObject(includeInstance, f),
    brakeMotorRpt1401: (f = msg.getBrakeMotorRpt1401()) && proto.apollo.canbus.Brake_motor_rpt_1_401.toObject(includeInstance, f),
    wiperAuxRpt334: (f = msg.getWiperAuxRpt334()) && proto.apollo.canbus.Wiper_aux_rpt_334.toObject(includeInstance, f),
    shiftAuxRpt328: (f = msg.getShiftAuxRpt328()) && proto.apollo.canbus.Shift_aux_rpt_328.toObject(includeInstance, f),
    accelRpt200: (f = msg.getAccelRpt200()) && proto.apollo.canbus.Accel_rpt_200.toObject(includeInstance, f),
    brakeRpt204: (f = msg.getBrakeRpt204()) && proto.apollo.canbus.Brake_rpt_204.toObject(includeInstance, f),
    hornCmd11c: (f = msg.getHornCmd11c()) && proto.apollo.canbus.Horn_cmd_11c.toObject(includeInstance, f),
    globalRpt10: (f = msg.getGlobalRpt10()) && proto.apollo.canbus.Global_rpt_10.toObject(includeInstance, f),
    accelAuxRpt300: (f = msg.getAccelAuxRpt300()) && proto.apollo.canbus.Accel_aux_rpt_300.toObject(includeInstance, f),
    cruiseControlButtonsRpt208: (f = msg.getCruiseControlButtonsRpt208()) && proto.apollo.canbus.Cruise_control_buttons_rpt_208.toObject(includeInstance, f),
    vehicleSpeedRpt400: (f = msg.getVehicleSpeedRpt400()) && proto.apollo.canbus.Vehicle_speed_rpt_400.toObject(includeInstance, f),
    brakeAuxRpt304: (f = msg.getBrakeAuxRpt304()) && proto.apollo.canbus.Brake_aux_rpt_304.toObject(includeInstance, f),
    mediaControlsCmd120: (f = msg.getMediaControlsCmd120()) && proto.apollo.canbus.Media_controls_cmd_120.toObject(includeInstance, f),
    cruiseControlButtonsCmd108: (f = msg.getCruiseControlButtonsCmd108()) && proto.apollo.canbus.Cruise_control_buttons_cmd_108.toObject(includeInstance, f),
    parkingBrakeCmd124: (f = msg.getParkingBrakeCmd124()) && proto.apollo.canbus.Parking_brake_cmd_124.toObject(includeInstance, f),
    hornRpt21c: (f = msg.getHornRpt21c()) && proto.apollo.canbus.Horn_rpt_21c.toObject(includeInstance, f),
    shiftRpt228: (f = msg.getShiftRpt228()) && proto.apollo.canbus.Shift_rpt_228.toObject(includeInstance, f),
    shiftCmd128: (f = msg.getShiftCmd128()) && proto.apollo.canbus.Shift_cmd_128.toObject(includeInstance, f),
    accelCmd100: (f = msg.getAccelCmd100()) && proto.apollo.canbus.Accel_cmd_100.toObject(includeInstance, f),
    parkingBrakeRpt224: (f = msg.getParkingBrakeRpt224()) && proto.apollo.canbus.Parking_brake_rpt_224.toObject(includeInstance, f),
    brakeCmd104: (f = msg.getBrakeCmd104()) && proto.apollo.canbus.Brake_cmd_104.toObject(includeInstance, f),
    mediaControlsRpt220: (f = msg.getMediaControlsRpt220()) && proto.apollo.canbus.Media_controls_rpt_220.toObject(includeInstance, f),
    steeringAuxRpt32c: (f = msg.getSteeringAuxRpt32c()) && proto.apollo.canbus.Steering_aux_rpt_32c.toObject(includeInstance, f),
    latLonHeadingRpt40e: (f = msg.getLatLonHeadingRpt40e()) && proto.apollo.canbus.Lat_lon_heading_rpt_40e.toObject(includeInstance, f),
    yawRateRpt40d: (f = msg.getYawRateRpt40d()) && proto.apollo.canbus.Yaw_rate_rpt_40d.toObject(includeInstance, f),
    dateTimeRpt40f: (f = msg.getDateTimeRpt40f()) && proto.apollo.canbus.Date_time_rpt_40f.toObject(includeInstance, f),
    vinRpt414: (f = msg.getVinRpt414()) && proto.apollo.canbus.Vin_rpt_414.toObject(includeInstance, f),
    occupancyRpt415: (f = msg.getOccupancyRpt415()) && proto.apollo.canbus.Occupancy_rpt_415.toObject(includeInstance, f),
    interiorLightsRpt416: (f = msg.getInteriorLightsRpt416()) && proto.apollo.canbus.Interior_lights_rpt_416.toObject(includeInstance, f),
    turnCmd130: (f = msg.getTurnCmd130()) && proto.apollo.canbus.Turn_cmd_130.toObject(includeInstance, f),
    detectedObjectRpt411: (f = msg.getDetectedObjectRpt411()) && proto.apollo.canbus.Detected_object_rpt_411.toObject(includeInstance, f),
    vehSpecificRpt1412: (f = msg.getVehSpecificRpt1412()) && proto.apollo.canbus.Veh_specific_rpt_1_412.toObject(includeInstance, f),
    vehDynamicsRpt413: (f = msg.getVehDynamicsRpt413()) && proto.apollo.canbus.Veh_dynamics_rpt_413.toObject(includeInstance, f),
    rearLightsRpt418: (f = msg.getRearLightsRpt418()) && proto.apollo.canbus.Rear_lights_rpt_418.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Lexus as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.canbus.Lexus.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.hazardLightsRpt214;

  /** @type {?|undefined} */
  this.steeringCmd12c;

  /** @type {?|undefined} */
  this.dashControlsRightRpt210;

  /** @type {?|undefined} */
  this.dashControlsLeftCmd10c;

  /** @type {?|undefined} */
  this.steeringRpt22c;

  /** @type {?|undefined} */
  this.turnAuxRpt330;

  /** @type {?|undefined} */
  this.headlightRpt218;

  /** @type {?|undefined} */
  this.hazardLightsCmd114;

  /** @type {?|undefined} */
  this.dashControlsLeftRpt20c;

  /** @type {?|undefined} */
  this.headlightAuxRpt318;

  /** @type {?|undefined} */
  this.dashControlsRightCmd110;

  /** @type {?|undefined} */
  this.wiperCmd134;

  /** @type {?|undefined} */
  this.wiperRpt234;

  /** @type {?|undefined} */
  this.turnRpt230;

  /** @type {?|undefined} */
  this.headlightCmd118;

  /** @type {?|undefined} */
  this.doorRpt417;

  /** @type {?|undefined} */
  this.componentRpt20;

  /** @type {?|undefined} */
  this.wheelSpeedRpt407;

  /** @type {?|undefined} */
  this.steeringMotorRpt3406;

  /** @type {?|undefined} */
  this.steeringMotorRpt2405;

  /** @type {?|undefined} */
  this.steeringMotorRpt1404;

  /** @type {?|undefined} */
  this.brakeMotorRpt3403;

  /** @type {?|undefined} */
  this.brakeMotorRpt2402;

  /** @type {?|undefined} */
  this.brakeMotorRpt1401;

  /** @type {?|undefined} */
  this.wiperAuxRpt334;

  /** @type {?|undefined} */
  this.shiftAuxRpt328;

  /** @type {?|undefined} */
  this.accelRpt200;

  /** @type {?|undefined} */
  this.brakeRpt204;

  /** @type {?|undefined} */
  this.hornCmd11c;

  /** @type {?|undefined} */
  this.globalRpt10;

  /** @type {?|undefined} */
  this.accelAuxRpt300;

  /** @type {?|undefined} */
  this.cruiseControlButtonsRpt208;

  /** @type {?|undefined} */
  this.vehicleSpeedRpt400;

  /** @type {?|undefined} */
  this.brakeAuxRpt304;

  /** @type {?|undefined} */
  this.mediaControlsCmd120;

  /** @type {?|undefined} */
  this.cruiseControlButtonsCmd108;

  /** @type {?|undefined} */
  this.parkingBrakeCmd124;

  /** @type {?|undefined} */
  this.hornRpt21c;

  /** @type {?|undefined} */
  this.shiftRpt228;

  /** @type {?|undefined} */
  this.shiftCmd128;

  /** @type {?|undefined} */
  this.accelCmd100;

  /** @type {?|undefined} */
  this.parkingBrakeRpt224;

  /** @type {?|undefined} */
  this.brakeCmd104;

  /** @type {?|undefined} */
  this.mediaControlsRpt220;

  /** @type {?|undefined} */
  this.steeringAuxRpt32c;

  /** @type {?|undefined} */
  this.latLonHeadingRpt40e;

  /** @type {?|undefined} */
  this.yawRateRpt40d;

  /** @type {?|undefined} */
  this.dateTimeRpt40f;

  /** @type {?|undefined} */
  this.vinRpt414;

  /** @type {?|undefined} */
  this.occupancyRpt415;

  /** @type {?|undefined} */
  this.interiorLightsRpt416;

  /** @type {?|undefined} */
  this.turnCmd130;

  /** @type {?|undefined} */
  this.detectedObjectRpt411;

  /** @type {?|undefined} */
  this.vehSpecificRpt1412;

  /** @type {?|undefined} */
  this.vehDynamicsRpt413;

  /** @type {?|undefined} */
  this.rearLightsRpt418;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.canbus.Lexus.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.canbus.Lexus}
 */
proto.apollo.canbus.Lexus.fromObject = function(obj) {
  var msg = new proto.apollo.canbus.Lexus();
  obj.hazardLightsRpt214 && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.canbus.Hazard_lights_rpt_214.fromObject(obj.hazardLightsRpt214));
  obj.steeringCmd12c && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.canbus.Steering_cmd_12c.fromObject(obj.steeringCmd12c));
  obj.dashControlsRightRpt210 && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.canbus.Dash_controls_right_rpt_210.fromObject(obj.dashControlsRightRpt210));
  obj.dashControlsLeftCmd10c && jspb.Message.setWrapperField(
      msg, 4, proto.apollo.canbus.Dash_controls_left_cmd_10c.fromObject(obj.dashControlsLeftCmd10c));
  obj.steeringRpt22c && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.canbus.Steering_rpt_22c.fromObject(obj.steeringRpt22c));
  obj.turnAuxRpt330 && jspb.Message.setWrapperField(
      msg, 6, proto.apollo.canbus.Turn_aux_rpt_330.fromObject(obj.turnAuxRpt330));
  obj.headlightRpt218 && jspb.Message.setWrapperField(
      msg, 7, proto.apollo.canbus.Headlight_rpt_218.fromObject(obj.headlightRpt218));
  obj.hazardLightsCmd114 && jspb.Message.setWrapperField(
      msg, 8, proto.apollo.canbus.Hazard_lights_cmd_114.fromObject(obj.hazardLightsCmd114));
  obj.dashControlsLeftRpt20c && jspb.Message.setWrapperField(
      msg, 9, proto.apollo.canbus.Dash_controls_left_rpt_20c.fromObject(obj.dashControlsLeftRpt20c));
  obj.headlightAuxRpt318 && jspb.Message.setWrapperField(
      msg, 10, proto.apollo.canbus.Headlight_aux_rpt_318.fromObject(obj.headlightAuxRpt318));
  obj.dashControlsRightCmd110 && jspb.Message.setWrapperField(
      msg, 11, proto.apollo.canbus.Dash_controls_right_cmd_110.fromObject(obj.dashControlsRightCmd110));
  obj.wiperCmd134 && jspb.Message.setWrapperField(
      msg, 12, proto.apollo.canbus.Wiper_cmd_134.fromObject(obj.wiperCmd134));
  obj.wiperRpt234 && jspb.Message.setWrapperField(
      msg, 13, proto.apollo.canbus.Wiper_rpt_234.fromObject(obj.wiperRpt234));
  obj.turnRpt230 && jspb.Message.setWrapperField(
      msg, 14, proto.apollo.canbus.Turn_rpt_230.fromObject(obj.turnRpt230));
  obj.headlightCmd118 && jspb.Message.setWrapperField(
      msg, 15, proto.apollo.canbus.Headlight_cmd_118.fromObject(obj.headlightCmd118));
  obj.doorRpt417 && jspb.Message.setWrapperField(
      msg, 16, proto.apollo.canbus.Door_rpt_417.fromObject(obj.doorRpt417));
  obj.componentRpt20 && jspb.Message.setWrapperField(
      msg, 17, proto.apollo.canbus.Component_rpt_20.fromObject(obj.componentRpt20));
  obj.wheelSpeedRpt407 && jspb.Message.setWrapperField(
      msg, 18, proto.apollo.canbus.Wheel_speed_rpt_407.fromObject(obj.wheelSpeedRpt407));
  obj.steeringMotorRpt3406 && jspb.Message.setWrapperField(
      msg, 19, proto.apollo.canbus.Steering_motor_rpt_3_406.fromObject(obj.steeringMotorRpt3406));
  obj.steeringMotorRpt2405 && jspb.Message.setWrapperField(
      msg, 20, proto.apollo.canbus.Steering_motor_rpt_2_405.fromObject(obj.steeringMotorRpt2405));
  obj.steeringMotorRpt1404 && jspb.Message.setWrapperField(
      msg, 21, proto.apollo.canbus.Steering_motor_rpt_1_404.fromObject(obj.steeringMotorRpt1404));
  obj.brakeMotorRpt3403 && jspb.Message.setWrapperField(
      msg, 22, proto.apollo.canbus.Brake_motor_rpt_3_403.fromObject(obj.brakeMotorRpt3403));
  obj.brakeMotorRpt2402 && jspb.Message.setWrapperField(
      msg, 23, proto.apollo.canbus.Brake_motor_rpt_2_402.fromObject(obj.brakeMotorRpt2402));
  obj.brakeMotorRpt1401 && jspb.Message.setWrapperField(
      msg, 24, proto.apollo.canbus.Brake_motor_rpt_1_401.fromObject(obj.brakeMotorRpt1401));
  obj.wiperAuxRpt334 && jspb.Message.setWrapperField(
      msg, 25, proto.apollo.canbus.Wiper_aux_rpt_334.fromObject(obj.wiperAuxRpt334));
  obj.shiftAuxRpt328 && jspb.Message.setWrapperField(
      msg, 26, proto.apollo.canbus.Shift_aux_rpt_328.fromObject(obj.shiftAuxRpt328));
  obj.accelRpt200 && jspb.Message.setWrapperField(
      msg, 27, proto.apollo.canbus.Accel_rpt_200.fromObject(obj.accelRpt200));
  obj.brakeRpt204 && jspb.Message.setWrapperField(
      msg, 28, proto.apollo.canbus.Brake_rpt_204.fromObject(obj.brakeRpt204));
  obj.hornCmd11c && jspb.Message.setWrapperField(
      msg, 29, proto.apollo.canbus.Horn_cmd_11c.fromObject(obj.hornCmd11c));
  obj.globalRpt10 && jspb.Message.setWrapperField(
      msg, 30, proto.apollo.canbus.Global_rpt_10.fromObject(obj.globalRpt10));
  obj.accelAuxRpt300 && jspb.Message.setWrapperField(
      msg, 31, proto.apollo.canbus.Accel_aux_rpt_300.fromObject(obj.accelAuxRpt300));
  obj.cruiseControlButtonsRpt208 && jspb.Message.setWrapperField(
      msg, 32, proto.apollo.canbus.Cruise_control_buttons_rpt_208.fromObject(obj.cruiseControlButtonsRpt208));
  obj.vehicleSpeedRpt400 && jspb.Message.setWrapperField(
      msg, 33, proto.apollo.canbus.Vehicle_speed_rpt_400.fromObject(obj.vehicleSpeedRpt400));
  obj.brakeAuxRpt304 && jspb.Message.setWrapperField(
      msg, 34, proto.apollo.canbus.Brake_aux_rpt_304.fromObject(obj.brakeAuxRpt304));
  obj.mediaControlsCmd120 && jspb.Message.setWrapperField(
      msg, 35, proto.apollo.canbus.Media_controls_cmd_120.fromObject(obj.mediaControlsCmd120));
  obj.cruiseControlButtonsCmd108 && jspb.Message.setWrapperField(
      msg, 36, proto.apollo.canbus.Cruise_control_buttons_cmd_108.fromObject(obj.cruiseControlButtonsCmd108));
  obj.parkingBrakeCmd124 && jspb.Message.setWrapperField(
      msg, 37, proto.apollo.canbus.Parking_brake_cmd_124.fromObject(obj.parkingBrakeCmd124));
  obj.hornRpt21c && jspb.Message.setWrapperField(
      msg, 38, proto.apollo.canbus.Horn_rpt_21c.fromObject(obj.hornRpt21c));
  obj.shiftRpt228 && jspb.Message.setWrapperField(
      msg, 39, proto.apollo.canbus.Shift_rpt_228.fromObject(obj.shiftRpt228));
  obj.shiftCmd128 && jspb.Message.setWrapperField(
      msg, 40, proto.apollo.canbus.Shift_cmd_128.fromObject(obj.shiftCmd128));
  obj.accelCmd100 && jspb.Message.setWrapperField(
      msg, 41, proto.apollo.canbus.Accel_cmd_100.fromObject(obj.accelCmd100));
  obj.parkingBrakeRpt224 && jspb.Message.setWrapperField(
      msg, 42, proto.apollo.canbus.Parking_brake_rpt_224.fromObject(obj.parkingBrakeRpt224));
  obj.brakeCmd104 && jspb.Message.setWrapperField(
      msg, 43, proto.apollo.canbus.Brake_cmd_104.fromObject(obj.brakeCmd104));
  obj.mediaControlsRpt220 && jspb.Message.setWrapperField(
      msg, 44, proto.apollo.canbus.Media_controls_rpt_220.fromObject(obj.mediaControlsRpt220));
  obj.steeringAuxRpt32c && jspb.Message.setWrapperField(
      msg, 45, proto.apollo.canbus.Steering_aux_rpt_32c.fromObject(obj.steeringAuxRpt32c));
  obj.latLonHeadingRpt40e && jspb.Message.setWrapperField(
      msg, 46, proto.apollo.canbus.Lat_lon_heading_rpt_40e.fromObject(obj.latLonHeadingRpt40e));
  obj.yawRateRpt40d && jspb.Message.setWrapperField(
      msg, 47, proto.apollo.canbus.Yaw_rate_rpt_40d.fromObject(obj.yawRateRpt40d));
  obj.dateTimeRpt40f && jspb.Message.setWrapperField(
      msg, 48, proto.apollo.canbus.Date_time_rpt_40f.fromObject(obj.dateTimeRpt40f));
  obj.vinRpt414 && jspb.Message.setWrapperField(
      msg, 49, proto.apollo.canbus.Vin_rpt_414.fromObject(obj.vinRpt414));
  obj.occupancyRpt415 && jspb.Message.setWrapperField(
      msg, 50, proto.apollo.canbus.Occupancy_rpt_415.fromObject(obj.occupancyRpt415));
  obj.interiorLightsRpt416 && jspb.Message.setWrapperField(
      msg, 51, proto.apollo.canbus.Interior_lights_rpt_416.fromObject(obj.interiorLightsRpt416));
  obj.turnCmd130 && jspb.Message.setWrapperField(
      msg, 52, proto.apollo.canbus.Turn_cmd_130.fromObject(obj.turnCmd130));
  obj.detectedObjectRpt411 && jspb.Message.setWrapperField(
      msg, 53, proto.apollo.canbus.Detected_object_rpt_411.fromObject(obj.detectedObjectRpt411));
  obj.vehSpecificRpt1412 && jspb.Message.setWrapperField(
      msg, 54, proto.apollo.canbus.Veh_specific_rpt_1_412.fromObject(obj.vehSpecificRpt1412));
  obj.vehDynamicsRpt413 && jspb.Message.setWrapperField(
      msg, 55, proto.apollo.canbus.Veh_dynamics_rpt_413.fromObject(obj.vehDynamicsRpt413));
  obj.rearLightsRpt418 && jspb.Message.setWrapperField(
      msg, 56, proto.apollo.canbus.Rear_lights_rpt_418.fromObject(obj.rearLightsRpt418));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.canbus.Lexus}
 */
proto.apollo.canbus.Lexus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.canbus.Lexus;
  return proto.apollo.canbus.Lexus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.canbus.Lexus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.canbus.Lexus}
 */
proto.apollo.canbus.Lexus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.canbus.Hazard_lights_rpt_214;
      reader.readMessage(value,proto.apollo.canbus.Hazard_lights_rpt_214.deserializeBinaryFromReader);
      msg.setHazardLightsRpt214(value);
      break;
    case 2:
      var value = new proto.apollo.canbus.Steering_cmd_12c;
      reader.readMessage(value,proto.apollo.canbus.Steering_cmd_12c.deserializeBinaryFromReader);
      msg.setSteeringCmd12c(value);
      break;
    case 3:
      var value = new proto.apollo.canbus.Dash_controls_right_rpt_210;
      reader.readMessage(value,proto.apollo.canbus.Dash_controls_right_rpt_210.deserializeBinaryFromReader);
      msg.setDashControlsRightRpt210(value);
      break;
    case 4:
      var value = new proto.apollo.canbus.Dash_controls_left_cmd_10c;
      reader.readMessage(value,proto.apollo.canbus.Dash_controls_left_cmd_10c.deserializeBinaryFromReader);
      msg.setDashControlsLeftCmd10c(value);
      break;
    case 5:
      var value = new proto.apollo.canbus.Steering_rpt_22c;
      reader.readMessage(value,proto.apollo.canbus.Steering_rpt_22c.deserializeBinaryFromReader);
      msg.setSteeringRpt22c(value);
      break;
    case 6:
      var value = new proto.apollo.canbus.Turn_aux_rpt_330;
      reader.readMessage(value,proto.apollo.canbus.Turn_aux_rpt_330.deserializeBinaryFromReader);
      msg.setTurnAuxRpt330(value);
      break;
    case 7:
      var value = new proto.apollo.canbus.Headlight_rpt_218;
      reader.readMessage(value,proto.apollo.canbus.Headlight_rpt_218.deserializeBinaryFromReader);
      msg.setHeadlightRpt218(value);
      break;
    case 8:
      var value = new proto.apollo.canbus.Hazard_lights_cmd_114;
      reader.readMessage(value,proto.apollo.canbus.Hazard_lights_cmd_114.deserializeBinaryFromReader);
      msg.setHazardLightsCmd114(value);
      break;
    case 9:
      var value = new proto.apollo.canbus.Dash_controls_left_rpt_20c;
      reader.readMessage(value,proto.apollo.canbus.Dash_controls_left_rpt_20c.deserializeBinaryFromReader);
      msg.setDashControlsLeftRpt20c(value);
      break;
    case 10:
      var value = new proto.apollo.canbus.Headlight_aux_rpt_318;
      reader.readMessage(value,proto.apollo.canbus.Headlight_aux_rpt_318.deserializeBinaryFromReader);
      msg.setHeadlightAuxRpt318(value);
      break;
    case 11:
      var value = new proto.apollo.canbus.Dash_controls_right_cmd_110;
      reader.readMessage(value,proto.apollo.canbus.Dash_controls_right_cmd_110.deserializeBinaryFromReader);
      msg.setDashControlsRightCmd110(value);
      break;
    case 12:
      var value = new proto.apollo.canbus.Wiper_cmd_134;
      reader.readMessage(value,proto.apollo.canbus.Wiper_cmd_134.deserializeBinaryFromReader);
      msg.setWiperCmd134(value);
      break;
    case 13:
      var value = new proto.apollo.canbus.Wiper_rpt_234;
      reader.readMessage(value,proto.apollo.canbus.Wiper_rpt_234.deserializeBinaryFromReader);
      msg.setWiperRpt234(value);
      break;
    case 14:
      var value = new proto.apollo.canbus.Turn_rpt_230;
      reader.readMessage(value,proto.apollo.canbus.Turn_rpt_230.deserializeBinaryFromReader);
      msg.setTurnRpt230(value);
      break;
    case 15:
      var value = new proto.apollo.canbus.Headlight_cmd_118;
      reader.readMessage(value,proto.apollo.canbus.Headlight_cmd_118.deserializeBinaryFromReader);
      msg.setHeadlightCmd118(value);
      break;
    case 16:
      var value = new proto.apollo.canbus.Door_rpt_417;
      reader.readMessage(value,proto.apollo.canbus.Door_rpt_417.deserializeBinaryFromReader);
      msg.setDoorRpt417(value);
      break;
    case 17:
      var value = new proto.apollo.canbus.Component_rpt_20;
      reader.readMessage(value,proto.apollo.canbus.Component_rpt_20.deserializeBinaryFromReader);
      msg.setComponentRpt20(value);
      break;
    case 18:
      var value = new proto.apollo.canbus.Wheel_speed_rpt_407;
      reader.readMessage(value,proto.apollo.canbus.Wheel_speed_rpt_407.deserializeBinaryFromReader);
      msg.setWheelSpeedRpt407(value);
      break;
    case 19:
      var value = new proto.apollo.canbus.Steering_motor_rpt_3_406;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_3_406.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt3406(value);
      break;
    case 20:
      var value = new proto.apollo.canbus.Steering_motor_rpt_2_405;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_2_405.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt2405(value);
      break;
    case 21:
      var value = new proto.apollo.canbus.Steering_motor_rpt_1_404;
      reader.readMessage(value,proto.apollo.canbus.Steering_motor_rpt_1_404.deserializeBinaryFromReader);
      msg.setSteeringMotorRpt1404(value);
      break;
    case 22:
      var value = new proto.apollo.canbus.Brake_motor_rpt_3_403;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_3_403.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt3403(value);
      break;
    case 23:
      var value = new proto.apollo.canbus.Brake_motor_rpt_2_402;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_2_402.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt2402(value);
      break;
    case 24:
      var value = new proto.apollo.canbus.Brake_motor_rpt_1_401;
      reader.readMessage(value,proto.apollo.canbus.Brake_motor_rpt_1_401.deserializeBinaryFromReader);
      msg.setBrakeMotorRpt1401(value);
      break;
    case 25:
      var value = new proto.apollo.canbus.Wiper_aux_rpt_334;
      reader.readMessage(value,proto.apollo.canbus.Wiper_aux_rpt_334.deserializeBinaryFromReader);
      msg.setWiperAuxRpt334(value);
      break;
    case 26:
      var value = new proto.apollo.canbus.Shift_aux_rpt_328;
      reader.readMessage(value,proto.apollo.canbus.Shift_aux_rpt_328.deserializeBinaryFromReader);
      msg.setShiftAuxRpt328(value);
      break;
    case 27:
      var value = new proto.apollo.canbus.Accel_rpt_200;
      reader.readMessage(value,proto.apollo.canbus.Accel_rpt_200.deserializeBinaryFromReader);
      msg.setAccelRpt200(value);
      break;
    case 28:
      var value = new proto.apollo.canbus.Brake_rpt_204;
      reader.readMessage(value,proto.apollo.canbus.Brake_rpt_204.deserializeBinaryFromReader);
      msg.setBrakeRpt204(value);
      break;
    case 29:
      var value = new proto.apollo.canbus.Horn_cmd_11c;
      reader.readMessage(value,proto.apollo.canbus.Horn_cmd_11c.deserializeBinaryFromReader);
      msg.setHornCmd11c(value);
      break;
    case 30:
      var value = new proto.apollo.canbus.Global_rpt_10;
      reader.readMessage(value,proto.apollo.canbus.Global_rpt_10.deserializeBinaryFromReader);
      msg.setGlobalRpt10(value);
      break;
    case 31:
      var value = new proto.apollo.canbus.Accel_aux_rpt_300;
      reader.readMessage(value,proto.apollo.canbus.Accel_aux_rpt_300.deserializeBinaryFromReader);
      msg.setAccelAuxRpt300(value);
      break;
    case 32:
      var value = new proto.apollo.canbus.Cruise_control_buttons_rpt_208;
      reader.readMessage(value,proto.apollo.canbus.Cruise_control_buttons_rpt_208.deserializeBinaryFromReader);
      msg.setCruiseControlButtonsRpt208(value);
      break;
    case 33:
      var value = new proto.apollo.canbus.Vehicle_speed_rpt_400;
      reader.readMessage(value,proto.apollo.canbus.Vehicle_speed_rpt_400.deserializeBinaryFromReader);
      msg.setVehicleSpeedRpt400(value);
      break;
    case 34:
      var value = new proto.apollo.canbus.Brake_aux_rpt_304;
      reader.readMessage(value,proto.apollo.canbus.Brake_aux_rpt_304.deserializeBinaryFromReader);
      msg.setBrakeAuxRpt304(value);
      break;
    case 35:
      var value = new proto.apollo.canbus.Media_controls_cmd_120;
      reader.readMessage(value,proto.apollo.canbus.Media_controls_cmd_120.deserializeBinaryFromReader);
      msg.setMediaControlsCmd120(value);
      break;
    case 36:
      var value = new proto.apollo.canbus.Cruise_control_buttons_cmd_108;
      reader.readMessage(value,proto.apollo.canbus.Cruise_control_buttons_cmd_108.deserializeBinaryFromReader);
      msg.setCruiseControlButtonsCmd108(value);
      break;
    case 37:
      var value = new proto.apollo.canbus.Parking_brake_cmd_124;
      reader.readMessage(value,proto.apollo.canbus.Parking_brake_cmd_124.deserializeBinaryFromReader);
      msg.setParkingBrakeCmd124(value);
      break;
    case 38:
      var value = new proto.apollo.canbus.Horn_rpt_21c;
      reader.readMessage(value,proto.apollo.canbus.Horn_rpt_21c.deserializeBinaryFromReader);
      msg.setHornRpt21c(value);
      break;
    case 39:
      var value = new proto.apollo.canbus.Shift_rpt_228;
      reader.readMessage(value,proto.apollo.canbus.Shift_rpt_228.deserializeBinaryFromReader);
      msg.setShiftRpt228(value);
      break;
    case 40:
      var value = new proto.apollo.canbus.Shift_cmd_128;
      reader.readMessage(value,proto.apollo.canbus.Shift_cmd_128.deserializeBinaryFromReader);
      msg.setShiftCmd128(value);
      break;
    case 41:
      var value = new proto.apollo.canbus.Accel_cmd_100;
      reader.readMessage(value,proto.apollo.canbus.Accel_cmd_100.deserializeBinaryFromReader);
      msg.setAccelCmd100(value);
      break;
    case 42:
      var value = new proto.apollo.canbus.Parking_brake_rpt_224;
      reader.readMessage(value,proto.apollo.canbus.Parking_brake_rpt_224.deserializeBinaryFromReader);
      msg.setParkingBrakeRpt224(value);
      break;
    case 43:
      var value = new proto.apollo.canbus.Brake_cmd_104;
      reader.readMessage(value,proto.apollo.canbus.Brake_cmd_104.deserializeBinaryFromReader);
      msg.setBrakeCmd104(value);
      break;
    case 44:
      var value = new proto.apollo.canbus.Media_controls_rpt_220;
      reader.readMessage(value,proto.apollo.canbus.Media_controls_rpt_220.deserializeBinaryFromReader);
      msg.setMediaControlsRpt220(value);
      break;
    case 45:
      var value = new proto.apollo.canbus.Steering_aux_rpt_32c;
      reader.readMessage(value,proto.apollo.canbus.Steering_aux_rpt_32c.deserializeBinaryFromReader);
      msg.setSteeringAuxRpt32c(value);
      break;
    case 46:
      var value = new proto.apollo.canbus.Lat_lon_heading_rpt_40e;
      reader.readMessage(value,proto.apollo.canbus.Lat_lon_heading_rpt_40e.deserializeBinaryFromReader);
      msg.setLatLonHeadingRpt40e(value);
      break;
    case 47:
      var value = new proto.apollo.canbus.Yaw_rate_rpt_40d;
      reader.readMessage(value,proto.apollo.canbus.Yaw_rate_rpt_40d.deserializeBinaryFromReader);
      msg.setYawRateRpt40d(value);
      break;
    case 48:
      var value = new proto.apollo.canbus.Date_time_rpt_40f;
      reader.readMessage(value,proto.apollo.canbus.Date_time_rpt_40f.deserializeBinaryFromReader);
      msg.setDateTimeRpt40f(value);
      break;
    case 49:
      var value = new proto.apollo.canbus.Vin_rpt_414;
      reader.readMessage(value,proto.apollo.canbus.Vin_rpt_414.deserializeBinaryFromReader);
      msg.setVinRpt414(value);
      break;
    case 50:
      var value = new proto.apollo.canbus.Occupancy_rpt_415;
      reader.readMessage(value,proto.apollo.canbus.Occupancy_rpt_415.deserializeBinaryFromReader);
      msg.setOccupancyRpt415(value);
      break;
    case 51:
      var value = new proto.apollo.canbus.Interior_lights_rpt_416;
      reader.readMessage(value,proto.apollo.canbus.Interior_lights_rpt_416.deserializeBinaryFromReader);
      msg.setInteriorLightsRpt416(value);
      break;
    case 52:
      var value = new proto.apollo.canbus.Turn_cmd_130;
      reader.readMessage(value,proto.apollo.canbus.Turn_cmd_130.deserializeBinaryFromReader);
      msg.setTurnCmd130(value);
      break;
    case 53:
      var value = new proto.apollo.canbus.Detected_object_rpt_411;
      reader.readMessage(value,proto.apollo.canbus.Detected_object_rpt_411.deserializeBinaryFromReader);
      msg.setDetectedObjectRpt411(value);
      break;
    case 54:
      var value = new proto.apollo.canbus.Veh_specific_rpt_1_412;
      reader.readMessage(value,proto.apollo.canbus.Veh_specific_rpt_1_412.deserializeBinaryFromReader);
      msg.setVehSpecificRpt1412(value);
      break;
    case 55:
      var value = new proto.apollo.canbus.Veh_dynamics_rpt_413;
      reader.readMessage(value,proto.apollo.canbus.Veh_dynamics_rpt_413.deserializeBinaryFromReader);
      msg.setVehDynamicsRpt413(value);
      break;
    case 56:
      var value = new proto.apollo.canbus.Rear_lights_rpt_418;
      reader.readMessage(value,proto.apollo.canbus.Rear_lights_rpt_418.deserializeBinaryFromReader);
      msg.setRearLightsRpt418(value);
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
proto.apollo.canbus.Lexus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.canbus.Lexus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.canbus.Lexus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.canbus.Lexus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHazardLightsRpt214();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.canbus.Hazard_lights_rpt_214.serializeBinaryToWriter
    );
  }
  f = message.getSteeringCmd12c();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.canbus.Steering_cmd_12c.serializeBinaryToWriter
    );
  }
  f = message.getDashControlsRightRpt210();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.canbus.Dash_controls_right_rpt_210.serializeBinaryToWriter
    );
  }
  f = message.getDashControlsLeftCmd10c();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.canbus.Dash_controls_left_cmd_10c.serializeBinaryToWriter
    );
  }
  f = message.getSteeringRpt22c();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.canbus.Steering_rpt_22c.serializeBinaryToWriter
    );
  }
  f = message.getTurnAuxRpt330();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.apollo.canbus.Turn_aux_rpt_330.serializeBinaryToWriter
    );
  }
  f = message.getHeadlightRpt218();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.apollo.canbus.Headlight_rpt_218.serializeBinaryToWriter
    );
  }
  f = message.getHazardLightsCmd114();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.apollo.canbus.Hazard_lights_cmd_114.serializeBinaryToWriter
    );
  }
  f = message.getDashControlsLeftRpt20c();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.apollo.canbus.Dash_controls_left_rpt_20c.serializeBinaryToWriter
    );
  }
  f = message.getHeadlightAuxRpt318();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.apollo.canbus.Headlight_aux_rpt_318.serializeBinaryToWriter
    );
  }
  f = message.getDashControlsRightCmd110();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.apollo.canbus.Dash_controls_right_cmd_110.serializeBinaryToWriter
    );
  }
  f = message.getWiperCmd134();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.apollo.canbus.Wiper_cmd_134.serializeBinaryToWriter
    );
  }
  f = message.getWiperRpt234();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.apollo.canbus.Wiper_rpt_234.serializeBinaryToWriter
    );
  }
  f = message.getTurnRpt230();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.apollo.canbus.Turn_rpt_230.serializeBinaryToWriter
    );
  }
  f = message.getHeadlightCmd118();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.canbus.Headlight_cmd_118.serializeBinaryToWriter
    );
  }
  f = message.getDoorRpt417();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.apollo.canbus.Door_rpt_417.serializeBinaryToWriter
    );
  }
  f = message.getComponentRpt20();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.apollo.canbus.Component_rpt_20.serializeBinaryToWriter
    );
  }
  f = message.getWheelSpeedRpt407();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.apollo.canbus.Wheel_speed_rpt_407.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt3406();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.apollo.canbus.Steering_motor_rpt_3_406.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt2405();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.apollo.canbus.Steering_motor_rpt_2_405.serializeBinaryToWriter
    );
  }
  f = message.getSteeringMotorRpt1404();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.apollo.canbus.Steering_motor_rpt_1_404.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt3403();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.apollo.canbus.Brake_motor_rpt_3_403.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt2402();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.apollo.canbus.Brake_motor_rpt_2_402.serializeBinaryToWriter
    );
  }
  f = message.getBrakeMotorRpt1401();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.apollo.canbus.Brake_motor_rpt_1_401.serializeBinaryToWriter
    );
  }
  f = message.getWiperAuxRpt334();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.apollo.canbus.Wiper_aux_rpt_334.serializeBinaryToWriter
    );
  }
  f = message.getShiftAuxRpt328();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.apollo.canbus.Shift_aux_rpt_328.serializeBinaryToWriter
    );
  }
  f = message.getAccelRpt200();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.apollo.canbus.Accel_rpt_200.serializeBinaryToWriter
    );
  }
  f = message.getBrakeRpt204();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.apollo.canbus.Brake_rpt_204.serializeBinaryToWriter
    );
  }
  f = message.getHornCmd11c();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.apollo.canbus.Horn_cmd_11c.serializeBinaryToWriter
    );
  }
  f = message.getGlobalRpt10();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.apollo.canbus.Global_rpt_10.serializeBinaryToWriter
    );
  }
  f = message.getAccelAuxRpt300();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.apollo.canbus.Accel_aux_rpt_300.serializeBinaryToWriter
    );
  }
  f = message.getCruiseControlButtonsRpt208();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.apollo.canbus.Cruise_control_buttons_rpt_208.serializeBinaryToWriter
    );
  }
  f = message.getVehicleSpeedRpt400();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.apollo.canbus.Vehicle_speed_rpt_400.serializeBinaryToWriter
    );
  }
  f = message.getBrakeAuxRpt304();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.apollo.canbus.Brake_aux_rpt_304.serializeBinaryToWriter
    );
  }
  f = message.getMediaControlsCmd120();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.apollo.canbus.Media_controls_cmd_120.serializeBinaryToWriter
    );
  }
  f = message.getCruiseControlButtonsCmd108();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.apollo.canbus.Cruise_control_buttons_cmd_108.serializeBinaryToWriter
    );
  }
  f = message.getParkingBrakeCmd124();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.apollo.canbus.Parking_brake_cmd_124.serializeBinaryToWriter
    );
  }
  f = message.getHornRpt21c();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.apollo.canbus.Horn_rpt_21c.serializeBinaryToWriter
    );
  }
  f = message.getShiftRpt228();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.apollo.canbus.Shift_rpt_228.serializeBinaryToWriter
    );
  }
  f = message.getShiftCmd128();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.apollo.canbus.Shift_cmd_128.serializeBinaryToWriter
    );
  }
  f = message.getAccelCmd100();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.apollo.canbus.Accel_cmd_100.serializeBinaryToWriter
    );
  }
  f = message.getParkingBrakeRpt224();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.apollo.canbus.Parking_brake_rpt_224.serializeBinaryToWriter
    );
  }
  f = message.getBrakeCmd104();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.apollo.canbus.Brake_cmd_104.serializeBinaryToWriter
    );
  }
  f = message.getMediaControlsRpt220();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.apollo.canbus.Media_controls_rpt_220.serializeBinaryToWriter
    );
  }
  f = message.getSteeringAuxRpt32c();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.apollo.canbus.Steering_aux_rpt_32c.serializeBinaryToWriter
    );
  }
  f = message.getLatLonHeadingRpt40e();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.apollo.canbus.Lat_lon_heading_rpt_40e.serializeBinaryToWriter
    );
  }
  f = message.getYawRateRpt40d();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.apollo.canbus.Yaw_rate_rpt_40d.serializeBinaryToWriter
    );
  }
  f = message.getDateTimeRpt40f();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto.apollo.canbus.Date_time_rpt_40f.serializeBinaryToWriter
    );
  }
  f = message.getVinRpt414();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.apollo.canbus.Vin_rpt_414.serializeBinaryToWriter
    );
  }
  f = message.getOccupancyRpt415();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.apollo.canbus.Occupancy_rpt_415.serializeBinaryToWriter
    );
  }
  f = message.getInteriorLightsRpt416();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.apollo.canbus.Interior_lights_rpt_416.serializeBinaryToWriter
    );
  }
  f = message.getTurnCmd130();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.apollo.canbus.Turn_cmd_130.serializeBinaryToWriter
    );
  }
  f = message.getDetectedObjectRpt411();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.apollo.canbus.Detected_object_rpt_411.serializeBinaryToWriter
    );
  }
  f = message.getVehSpecificRpt1412();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.apollo.canbus.Veh_specific_rpt_1_412.serializeBinaryToWriter
    );
  }
  f = message.getVehDynamicsRpt413();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.apollo.canbus.Veh_dynamics_rpt_413.serializeBinaryToWriter
    );
  }
  f = message.getRearLightsRpt418();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto.apollo.canbus.Rear_lights_rpt_418.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hazard_lights_rpt_214 hazard_lights_rpt_214 = 1;
 * @return {?proto.apollo.canbus.Hazard_lights_rpt_214}
 */
proto.apollo.canbus.Lexus.prototype.getHazardLightsRpt214 = function() {
  return /** @type{?proto.apollo.canbus.Hazard_lights_rpt_214} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Hazard_lights_rpt_214, 1));
};


/**
 * @param {?proto.apollo.canbus.Hazard_lights_rpt_214|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHazardLightsRpt214 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHazardLightsRpt214 = function() {
  return this.setHazardLightsRpt214(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHazardLightsRpt214 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Steering_cmd_12c steering_cmd_12c = 2;
 * @return {?proto.apollo.canbus.Steering_cmd_12c}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringCmd12c = function() {
  return /** @type{?proto.apollo.canbus.Steering_cmd_12c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_cmd_12c, 2));
};


/**
 * @param {?proto.apollo.canbus.Steering_cmd_12c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringCmd12c = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringCmd12c = function() {
  return this.setSteeringCmd12c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringCmd12c = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Dash_controls_right_rpt_210 dash_controls_right_rpt_210 = 3;
 * @return {?proto.apollo.canbus.Dash_controls_right_rpt_210}
 */
proto.apollo.canbus.Lexus.prototype.getDashControlsRightRpt210 = function() {
  return /** @type{?proto.apollo.canbus.Dash_controls_right_rpt_210} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Dash_controls_right_rpt_210, 3));
};


/**
 * @param {?proto.apollo.canbus.Dash_controls_right_rpt_210|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDashControlsRightRpt210 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDashControlsRightRpt210 = function() {
  return this.setDashControlsRightRpt210(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDashControlsRightRpt210 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Dash_controls_left_cmd_10c dash_controls_left_cmd_10c = 4;
 * @return {?proto.apollo.canbus.Dash_controls_left_cmd_10c}
 */
proto.apollo.canbus.Lexus.prototype.getDashControlsLeftCmd10c = function() {
  return /** @type{?proto.apollo.canbus.Dash_controls_left_cmd_10c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Dash_controls_left_cmd_10c, 4));
};


/**
 * @param {?proto.apollo.canbus.Dash_controls_left_cmd_10c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDashControlsLeftCmd10c = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDashControlsLeftCmd10c = function() {
  return this.setDashControlsLeftCmd10c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDashControlsLeftCmd10c = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Steering_rpt_22c steering_rpt_22c = 5;
 * @return {?proto.apollo.canbus.Steering_rpt_22c}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringRpt22c = function() {
  return /** @type{?proto.apollo.canbus.Steering_rpt_22c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_rpt_22c, 5));
};


/**
 * @param {?proto.apollo.canbus.Steering_rpt_22c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringRpt22c = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringRpt22c = function() {
  return this.setSteeringRpt22c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringRpt22c = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Turn_aux_rpt_330 turn_aux_rpt_330 = 6;
 * @return {?proto.apollo.canbus.Turn_aux_rpt_330}
 */
proto.apollo.canbus.Lexus.prototype.getTurnAuxRpt330 = function() {
  return /** @type{?proto.apollo.canbus.Turn_aux_rpt_330} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Turn_aux_rpt_330, 6));
};


/**
 * @param {?proto.apollo.canbus.Turn_aux_rpt_330|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setTurnAuxRpt330 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearTurnAuxRpt330 = function() {
  return this.setTurnAuxRpt330(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasTurnAuxRpt330 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Headlight_rpt_218 headlight_rpt_218 = 7;
 * @return {?proto.apollo.canbus.Headlight_rpt_218}
 */
proto.apollo.canbus.Lexus.prototype.getHeadlightRpt218 = function() {
  return /** @type{?proto.apollo.canbus.Headlight_rpt_218} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Headlight_rpt_218, 7));
};


/**
 * @param {?proto.apollo.canbus.Headlight_rpt_218|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHeadlightRpt218 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHeadlightRpt218 = function() {
  return this.setHeadlightRpt218(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHeadlightRpt218 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Hazard_lights_cmd_114 hazard_lights_cmd_114 = 8;
 * @return {?proto.apollo.canbus.Hazard_lights_cmd_114}
 */
proto.apollo.canbus.Lexus.prototype.getHazardLightsCmd114 = function() {
  return /** @type{?proto.apollo.canbus.Hazard_lights_cmd_114} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Hazard_lights_cmd_114, 8));
};


/**
 * @param {?proto.apollo.canbus.Hazard_lights_cmd_114|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHazardLightsCmd114 = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHazardLightsCmd114 = function() {
  return this.setHazardLightsCmd114(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHazardLightsCmd114 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Dash_controls_left_rpt_20c dash_controls_left_rpt_20c = 9;
 * @return {?proto.apollo.canbus.Dash_controls_left_rpt_20c}
 */
proto.apollo.canbus.Lexus.prototype.getDashControlsLeftRpt20c = function() {
  return /** @type{?proto.apollo.canbus.Dash_controls_left_rpt_20c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Dash_controls_left_rpt_20c, 9));
};


/**
 * @param {?proto.apollo.canbus.Dash_controls_left_rpt_20c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDashControlsLeftRpt20c = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDashControlsLeftRpt20c = function() {
  return this.setDashControlsLeftRpt20c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDashControlsLeftRpt20c = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Headlight_aux_rpt_318 headlight_aux_rpt_318 = 10;
 * @return {?proto.apollo.canbus.Headlight_aux_rpt_318}
 */
proto.apollo.canbus.Lexus.prototype.getHeadlightAuxRpt318 = function() {
  return /** @type{?proto.apollo.canbus.Headlight_aux_rpt_318} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Headlight_aux_rpt_318, 10));
};


/**
 * @param {?proto.apollo.canbus.Headlight_aux_rpt_318|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHeadlightAuxRpt318 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHeadlightAuxRpt318 = function() {
  return this.setHeadlightAuxRpt318(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHeadlightAuxRpt318 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Dash_controls_right_cmd_110 dash_controls_right_cmd_110 = 11;
 * @return {?proto.apollo.canbus.Dash_controls_right_cmd_110}
 */
proto.apollo.canbus.Lexus.prototype.getDashControlsRightCmd110 = function() {
  return /** @type{?proto.apollo.canbus.Dash_controls_right_cmd_110} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Dash_controls_right_cmd_110, 11));
};


/**
 * @param {?proto.apollo.canbus.Dash_controls_right_cmd_110|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDashControlsRightCmd110 = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDashControlsRightCmd110 = function() {
  return this.setDashControlsRightCmd110(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDashControlsRightCmd110 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Wiper_cmd_134 wiper_cmd_134 = 12;
 * @return {?proto.apollo.canbus.Wiper_cmd_134}
 */
proto.apollo.canbus.Lexus.prototype.getWiperCmd134 = function() {
  return /** @type{?proto.apollo.canbus.Wiper_cmd_134} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wiper_cmd_134, 12));
};


/**
 * @param {?proto.apollo.canbus.Wiper_cmd_134|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setWiperCmd134 = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearWiperCmd134 = function() {
  return this.setWiperCmd134(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasWiperCmd134 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Wiper_rpt_234 wiper_rpt_234 = 13;
 * @return {?proto.apollo.canbus.Wiper_rpt_234}
 */
proto.apollo.canbus.Lexus.prototype.getWiperRpt234 = function() {
  return /** @type{?proto.apollo.canbus.Wiper_rpt_234} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wiper_rpt_234, 13));
};


/**
 * @param {?proto.apollo.canbus.Wiper_rpt_234|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setWiperRpt234 = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearWiperRpt234 = function() {
  return this.setWiperRpt234(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasWiperRpt234 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Turn_rpt_230 turn_rpt_230 = 14;
 * @return {?proto.apollo.canbus.Turn_rpt_230}
 */
proto.apollo.canbus.Lexus.prototype.getTurnRpt230 = function() {
  return /** @type{?proto.apollo.canbus.Turn_rpt_230} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Turn_rpt_230, 14));
};


/**
 * @param {?proto.apollo.canbus.Turn_rpt_230|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setTurnRpt230 = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearTurnRpt230 = function() {
  return this.setTurnRpt230(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasTurnRpt230 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Headlight_cmd_118 headlight_cmd_118 = 15;
 * @return {?proto.apollo.canbus.Headlight_cmd_118}
 */
proto.apollo.canbus.Lexus.prototype.getHeadlightCmd118 = function() {
  return /** @type{?proto.apollo.canbus.Headlight_cmd_118} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Headlight_cmd_118, 15));
};


/**
 * @param {?proto.apollo.canbus.Headlight_cmd_118|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHeadlightCmd118 = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHeadlightCmd118 = function() {
  return this.setHeadlightCmd118(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHeadlightCmd118 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Door_rpt_417 door_rpt_417 = 16;
 * @return {?proto.apollo.canbus.Door_rpt_417}
 */
proto.apollo.canbus.Lexus.prototype.getDoorRpt417 = function() {
  return /** @type{?proto.apollo.canbus.Door_rpt_417} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Door_rpt_417, 16));
};


/**
 * @param {?proto.apollo.canbus.Door_rpt_417|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDoorRpt417 = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDoorRpt417 = function() {
  return this.setDoorRpt417(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDoorRpt417 = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Component_rpt_20 component_rpt_20 = 17;
 * @return {?proto.apollo.canbus.Component_rpt_20}
 */
proto.apollo.canbus.Lexus.prototype.getComponentRpt20 = function() {
  return /** @type{?proto.apollo.canbus.Component_rpt_20} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Component_rpt_20, 17));
};


/**
 * @param {?proto.apollo.canbus.Component_rpt_20|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setComponentRpt20 = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearComponentRpt20 = function() {
  return this.setComponentRpt20(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasComponentRpt20 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Wheel_speed_rpt_407 wheel_speed_rpt_407 = 18;
 * @return {?proto.apollo.canbus.Wheel_speed_rpt_407}
 */
proto.apollo.canbus.Lexus.prototype.getWheelSpeedRpt407 = function() {
  return /** @type{?proto.apollo.canbus.Wheel_speed_rpt_407} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wheel_speed_rpt_407, 18));
};


/**
 * @param {?proto.apollo.canbus.Wheel_speed_rpt_407|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setWheelSpeedRpt407 = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearWheelSpeedRpt407 = function() {
  return this.setWheelSpeedRpt407(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasWheelSpeedRpt407 = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Steering_motor_rpt_3_406 steering_motor_rpt_3_406 = 19;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_3_406}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringMotorRpt3406 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_3_406} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_3_406, 19));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_3_406|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringMotorRpt3406 = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringMotorRpt3406 = function() {
  return this.setSteeringMotorRpt3406(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringMotorRpt3406 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Steering_motor_rpt_2_405 steering_motor_rpt_2_405 = 20;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_2_405}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringMotorRpt2405 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_2_405} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_2_405, 20));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_2_405|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringMotorRpt2405 = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringMotorRpt2405 = function() {
  return this.setSteeringMotorRpt2405(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringMotorRpt2405 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Steering_motor_rpt_1_404 steering_motor_rpt_1_404 = 21;
 * @return {?proto.apollo.canbus.Steering_motor_rpt_1_404}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringMotorRpt1404 = function() {
  return /** @type{?proto.apollo.canbus.Steering_motor_rpt_1_404} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_motor_rpt_1_404, 21));
};


/**
 * @param {?proto.apollo.canbus.Steering_motor_rpt_1_404|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringMotorRpt1404 = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringMotorRpt1404 = function() {
  return this.setSteeringMotorRpt1404(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringMotorRpt1404 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Brake_motor_rpt_3_403 brake_motor_rpt_3_403 = 22;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_3_403}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeMotorRpt3403 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_3_403} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_3_403, 22));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_3_403|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeMotorRpt3403 = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeMotorRpt3403 = function() {
  return this.setBrakeMotorRpt3403(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeMotorRpt3403 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Brake_motor_rpt_2_402 brake_motor_rpt_2_402 = 23;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_2_402}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeMotorRpt2402 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_2_402} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_2_402, 23));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_2_402|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeMotorRpt2402 = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeMotorRpt2402 = function() {
  return this.setBrakeMotorRpt2402(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeMotorRpt2402 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Brake_motor_rpt_1_401 brake_motor_rpt_1_401 = 24;
 * @return {?proto.apollo.canbus.Brake_motor_rpt_1_401}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeMotorRpt1401 = function() {
  return /** @type{?proto.apollo.canbus.Brake_motor_rpt_1_401} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_motor_rpt_1_401, 24));
};


/**
 * @param {?proto.apollo.canbus.Brake_motor_rpt_1_401|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeMotorRpt1401 = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeMotorRpt1401 = function() {
  return this.setBrakeMotorRpt1401(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeMotorRpt1401 = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional Wiper_aux_rpt_334 wiper_aux_rpt_334 = 25;
 * @return {?proto.apollo.canbus.Wiper_aux_rpt_334}
 */
proto.apollo.canbus.Lexus.prototype.getWiperAuxRpt334 = function() {
  return /** @type{?proto.apollo.canbus.Wiper_aux_rpt_334} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Wiper_aux_rpt_334, 25));
};


/**
 * @param {?proto.apollo.canbus.Wiper_aux_rpt_334|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setWiperAuxRpt334 = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearWiperAuxRpt334 = function() {
  return this.setWiperAuxRpt334(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasWiperAuxRpt334 = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Shift_aux_rpt_328 shift_aux_rpt_328 = 26;
 * @return {?proto.apollo.canbus.Shift_aux_rpt_328}
 */
proto.apollo.canbus.Lexus.prototype.getShiftAuxRpt328 = function() {
  return /** @type{?proto.apollo.canbus.Shift_aux_rpt_328} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Shift_aux_rpt_328, 26));
};


/**
 * @param {?proto.apollo.canbus.Shift_aux_rpt_328|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setShiftAuxRpt328 = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearShiftAuxRpt328 = function() {
  return this.setShiftAuxRpt328(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasShiftAuxRpt328 = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Accel_rpt_200 accel_rpt_200 = 27;
 * @return {?proto.apollo.canbus.Accel_rpt_200}
 */
proto.apollo.canbus.Lexus.prototype.getAccelRpt200 = function() {
  return /** @type{?proto.apollo.canbus.Accel_rpt_200} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Accel_rpt_200, 27));
};


/**
 * @param {?proto.apollo.canbus.Accel_rpt_200|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setAccelRpt200 = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearAccelRpt200 = function() {
  return this.setAccelRpt200(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasAccelRpt200 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Brake_rpt_204 brake_rpt_204 = 28;
 * @return {?proto.apollo.canbus.Brake_rpt_204}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeRpt204 = function() {
  return /** @type{?proto.apollo.canbus.Brake_rpt_204} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_rpt_204, 28));
};


/**
 * @param {?proto.apollo.canbus.Brake_rpt_204|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeRpt204 = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeRpt204 = function() {
  return this.setBrakeRpt204(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeRpt204 = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional Horn_cmd_11c horn_cmd_11c = 29;
 * @return {?proto.apollo.canbus.Horn_cmd_11c}
 */
proto.apollo.canbus.Lexus.prototype.getHornCmd11c = function() {
  return /** @type{?proto.apollo.canbus.Horn_cmd_11c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Horn_cmd_11c, 29));
};


/**
 * @param {?proto.apollo.canbus.Horn_cmd_11c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHornCmd11c = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHornCmd11c = function() {
  return this.setHornCmd11c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHornCmd11c = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Global_rpt_10 global_rpt_10 = 30;
 * @return {?proto.apollo.canbus.Global_rpt_10}
 */
proto.apollo.canbus.Lexus.prototype.getGlobalRpt10 = function() {
  return /** @type{?proto.apollo.canbus.Global_rpt_10} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Global_rpt_10, 30));
};


/**
 * @param {?proto.apollo.canbus.Global_rpt_10|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setGlobalRpt10 = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearGlobalRpt10 = function() {
  return this.setGlobalRpt10(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasGlobalRpt10 = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional Accel_aux_rpt_300 accel_aux_rpt_300 = 31;
 * @return {?proto.apollo.canbus.Accel_aux_rpt_300}
 */
proto.apollo.canbus.Lexus.prototype.getAccelAuxRpt300 = function() {
  return /** @type{?proto.apollo.canbus.Accel_aux_rpt_300} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Accel_aux_rpt_300, 31));
};


/**
 * @param {?proto.apollo.canbus.Accel_aux_rpt_300|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setAccelAuxRpt300 = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearAccelAuxRpt300 = function() {
  return this.setAccelAuxRpt300(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasAccelAuxRpt300 = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional Cruise_control_buttons_rpt_208 cruise_control_buttons_rpt_208 = 32;
 * @return {?proto.apollo.canbus.Cruise_control_buttons_rpt_208}
 */
proto.apollo.canbus.Lexus.prototype.getCruiseControlButtonsRpt208 = function() {
  return /** @type{?proto.apollo.canbus.Cruise_control_buttons_rpt_208} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Cruise_control_buttons_rpt_208, 32));
};


/**
 * @param {?proto.apollo.canbus.Cruise_control_buttons_rpt_208|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setCruiseControlButtonsRpt208 = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearCruiseControlButtonsRpt208 = function() {
  return this.setCruiseControlButtonsRpt208(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasCruiseControlButtonsRpt208 = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional Vehicle_speed_rpt_400 vehicle_speed_rpt_400 = 33;
 * @return {?proto.apollo.canbus.Vehicle_speed_rpt_400}
 */
proto.apollo.canbus.Lexus.prototype.getVehicleSpeedRpt400 = function() {
  return /** @type{?proto.apollo.canbus.Vehicle_speed_rpt_400} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Vehicle_speed_rpt_400, 33));
};


/**
 * @param {?proto.apollo.canbus.Vehicle_speed_rpt_400|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setVehicleSpeedRpt400 = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearVehicleSpeedRpt400 = function() {
  return this.setVehicleSpeedRpt400(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasVehicleSpeedRpt400 = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional Brake_aux_rpt_304 brake_aux_rpt_304 = 34;
 * @return {?proto.apollo.canbus.Brake_aux_rpt_304}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeAuxRpt304 = function() {
  return /** @type{?proto.apollo.canbus.Brake_aux_rpt_304} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_aux_rpt_304, 34));
};


/**
 * @param {?proto.apollo.canbus.Brake_aux_rpt_304|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeAuxRpt304 = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeAuxRpt304 = function() {
  return this.setBrakeAuxRpt304(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeAuxRpt304 = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional Media_controls_cmd_120 media_controls_cmd_120 = 35;
 * @return {?proto.apollo.canbus.Media_controls_cmd_120}
 */
proto.apollo.canbus.Lexus.prototype.getMediaControlsCmd120 = function() {
  return /** @type{?proto.apollo.canbus.Media_controls_cmd_120} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Media_controls_cmd_120, 35));
};


/**
 * @param {?proto.apollo.canbus.Media_controls_cmd_120|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setMediaControlsCmd120 = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearMediaControlsCmd120 = function() {
  return this.setMediaControlsCmd120(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasMediaControlsCmd120 = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional Cruise_control_buttons_cmd_108 cruise_control_buttons_cmd_108 = 36;
 * @return {?proto.apollo.canbus.Cruise_control_buttons_cmd_108}
 */
proto.apollo.canbus.Lexus.prototype.getCruiseControlButtonsCmd108 = function() {
  return /** @type{?proto.apollo.canbus.Cruise_control_buttons_cmd_108} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Cruise_control_buttons_cmd_108, 36));
};


/**
 * @param {?proto.apollo.canbus.Cruise_control_buttons_cmd_108|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setCruiseControlButtonsCmd108 = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearCruiseControlButtonsCmd108 = function() {
  return this.setCruiseControlButtonsCmd108(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasCruiseControlButtonsCmd108 = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional Parking_brake_cmd_124 parking_brake_cmd_124 = 37;
 * @return {?proto.apollo.canbus.Parking_brake_cmd_124}
 */
proto.apollo.canbus.Lexus.prototype.getParkingBrakeCmd124 = function() {
  return /** @type{?proto.apollo.canbus.Parking_brake_cmd_124} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Parking_brake_cmd_124, 37));
};


/**
 * @param {?proto.apollo.canbus.Parking_brake_cmd_124|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setParkingBrakeCmd124 = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearParkingBrakeCmd124 = function() {
  return this.setParkingBrakeCmd124(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasParkingBrakeCmd124 = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional Horn_rpt_21c horn_rpt_21c = 38;
 * @return {?proto.apollo.canbus.Horn_rpt_21c}
 */
proto.apollo.canbus.Lexus.prototype.getHornRpt21c = function() {
  return /** @type{?proto.apollo.canbus.Horn_rpt_21c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Horn_rpt_21c, 38));
};


/**
 * @param {?proto.apollo.canbus.Horn_rpt_21c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setHornRpt21c = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearHornRpt21c = function() {
  return this.setHornRpt21c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasHornRpt21c = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional Shift_rpt_228 shift_rpt_228 = 39;
 * @return {?proto.apollo.canbus.Shift_rpt_228}
 */
proto.apollo.canbus.Lexus.prototype.getShiftRpt228 = function() {
  return /** @type{?proto.apollo.canbus.Shift_rpt_228} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Shift_rpt_228, 39));
};


/**
 * @param {?proto.apollo.canbus.Shift_rpt_228|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setShiftRpt228 = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearShiftRpt228 = function() {
  return this.setShiftRpt228(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasShiftRpt228 = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional Shift_cmd_128 shift_cmd_128 = 40;
 * @return {?proto.apollo.canbus.Shift_cmd_128}
 */
proto.apollo.canbus.Lexus.prototype.getShiftCmd128 = function() {
  return /** @type{?proto.apollo.canbus.Shift_cmd_128} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Shift_cmd_128, 40));
};


/**
 * @param {?proto.apollo.canbus.Shift_cmd_128|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setShiftCmd128 = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearShiftCmd128 = function() {
  return this.setShiftCmd128(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasShiftCmd128 = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional Accel_cmd_100 accel_cmd_100 = 41;
 * @return {?proto.apollo.canbus.Accel_cmd_100}
 */
proto.apollo.canbus.Lexus.prototype.getAccelCmd100 = function() {
  return /** @type{?proto.apollo.canbus.Accel_cmd_100} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Accel_cmd_100, 41));
};


/**
 * @param {?proto.apollo.canbus.Accel_cmd_100|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setAccelCmd100 = function(value) {
  return jspb.Message.setWrapperField(this, 41, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearAccelCmd100 = function() {
  return this.setAccelCmd100(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasAccelCmd100 = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional Parking_brake_rpt_224 parking_brake_rpt_224 = 42;
 * @return {?proto.apollo.canbus.Parking_brake_rpt_224}
 */
proto.apollo.canbus.Lexus.prototype.getParkingBrakeRpt224 = function() {
  return /** @type{?proto.apollo.canbus.Parking_brake_rpt_224} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Parking_brake_rpt_224, 42));
};


/**
 * @param {?proto.apollo.canbus.Parking_brake_rpt_224|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setParkingBrakeRpt224 = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearParkingBrakeRpt224 = function() {
  return this.setParkingBrakeRpt224(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasParkingBrakeRpt224 = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional Brake_cmd_104 brake_cmd_104 = 43;
 * @return {?proto.apollo.canbus.Brake_cmd_104}
 */
proto.apollo.canbus.Lexus.prototype.getBrakeCmd104 = function() {
  return /** @type{?proto.apollo.canbus.Brake_cmd_104} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Brake_cmd_104, 43));
};


/**
 * @param {?proto.apollo.canbus.Brake_cmd_104|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setBrakeCmd104 = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearBrakeCmd104 = function() {
  return this.setBrakeCmd104(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasBrakeCmd104 = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional Media_controls_rpt_220 media_controls_rpt_220 = 44;
 * @return {?proto.apollo.canbus.Media_controls_rpt_220}
 */
proto.apollo.canbus.Lexus.prototype.getMediaControlsRpt220 = function() {
  return /** @type{?proto.apollo.canbus.Media_controls_rpt_220} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Media_controls_rpt_220, 44));
};


/**
 * @param {?proto.apollo.canbus.Media_controls_rpt_220|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setMediaControlsRpt220 = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearMediaControlsRpt220 = function() {
  return this.setMediaControlsRpt220(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasMediaControlsRpt220 = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional Steering_aux_rpt_32c steering_aux_rpt_32c = 45;
 * @return {?proto.apollo.canbus.Steering_aux_rpt_32c}
 */
proto.apollo.canbus.Lexus.prototype.getSteeringAuxRpt32c = function() {
  return /** @type{?proto.apollo.canbus.Steering_aux_rpt_32c} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Steering_aux_rpt_32c, 45));
};


/**
 * @param {?proto.apollo.canbus.Steering_aux_rpt_32c|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setSteeringAuxRpt32c = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearSteeringAuxRpt32c = function() {
  return this.setSteeringAuxRpt32c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasSteeringAuxRpt32c = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional Lat_lon_heading_rpt_40e lat_lon_heading_rpt_40e = 46;
 * @return {?proto.apollo.canbus.Lat_lon_heading_rpt_40e}
 */
proto.apollo.canbus.Lexus.prototype.getLatLonHeadingRpt40e = function() {
  return /** @type{?proto.apollo.canbus.Lat_lon_heading_rpt_40e} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Lat_lon_heading_rpt_40e, 46));
};


/**
 * @param {?proto.apollo.canbus.Lat_lon_heading_rpt_40e|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setLatLonHeadingRpt40e = function(value) {
  return jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearLatLonHeadingRpt40e = function() {
  return this.setLatLonHeadingRpt40e(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasLatLonHeadingRpt40e = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional Yaw_rate_rpt_40d yaw_rate_rpt_40d = 47;
 * @return {?proto.apollo.canbus.Yaw_rate_rpt_40d}
 */
proto.apollo.canbus.Lexus.prototype.getYawRateRpt40d = function() {
  return /** @type{?proto.apollo.canbus.Yaw_rate_rpt_40d} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Yaw_rate_rpt_40d, 47));
};


/**
 * @param {?proto.apollo.canbus.Yaw_rate_rpt_40d|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setYawRateRpt40d = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearYawRateRpt40d = function() {
  return this.setYawRateRpt40d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasYawRateRpt40d = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional Date_time_rpt_40f date_time_rpt_40f = 48;
 * @return {?proto.apollo.canbus.Date_time_rpt_40f}
 */
proto.apollo.canbus.Lexus.prototype.getDateTimeRpt40f = function() {
  return /** @type{?proto.apollo.canbus.Date_time_rpt_40f} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Date_time_rpt_40f, 48));
};


/**
 * @param {?proto.apollo.canbus.Date_time_rpt_40f|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDateTimeRpt40f = function(value) {
  return jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDateTimeRpt40f = function() {
  return this.setDateTimeRpt40f(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDateTimeRpt40f = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional Vin_rpt_414 vin_rpt_414 = 49;
 * @return {?proto.apollo.canbus.Vin_rpt_414}
 */
proto.apollo.canbus.Lexus.prototype.getVinRpt414 = function() {
  return /** @type{?proto.apollo.canbus.Vin_rpt_414} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Vin_rpt_414, 49));
};


/**
 * @param {?proto.apollo.canbus.Vin_rpt_414|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setVinRpt414 = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearVinRpt414 = function() {
  return this.setVinRpt414(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasVinRpt414 = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional Occupancy_rpt_415 occupancy_rpt_415 = 50;
 * @return {?proto.apollo.canbus.Occupancy_rpt_415}
 */
proto.apollo.canbus.Lexus.prototype.getOccupancyRpt415 = function() {
  return /** @type{?proto.apollo.canbus.Occupancy_rpt_415} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Occupancy_rpt_415, 50));
};


/**
 * @param {?proto.apollo.canbus.Occupancy_rpt_415|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setOccupancyRpt415 = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearOccupancyRpt415 = function() {
  return this.setOccupancyRpt415(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasOccupancyRpt415 = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional Interior_lights_rpt_416 interior_lights_rpt_416 = 51;
 * @return {?proto.apollo.canbus.Interior_lights_rpt_416}
 */
proto.apollo.canbus.Lexus.prototype.getInteriorLightsRpt416 = function() {
  return /** @type{?proto.apollo.canbus.Interior_lights_rpt_416} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Interior_lights_rpt_416, 51));
};


/**
 * @param {?proto.apollo.canbus.Interior_lights_rpt_416|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setInteriorLightsRpt416 = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearInteriorLightsRpt416 = function() {
  return this.setInteriorLightsRpt416(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasInteriorLightsRpt416 = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional Turn_cmd_130 turn_cmd_130 = 52;
 * @return {?proto.apollo.canbus.Turn_cmd_130}
 */
proto.apollo.canbus.Lexus.prototype.getTurnCmd130 = function() {
  return /** @type{?proto.apollo.canbus.Turn_cmd_130} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Turn_cmd_130, 52));
};


/**
 * @param {?proto.apollo.canbus.Turn_cmd_130|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setTurnCmd130 = function(value) {
  return jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearTurnCmd130 = function() {
  return this.setTurnCmd130(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasTurnCmd130 = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional Detected_object_rpt_411 detected_object_rpt_411 = 53;
 * @return {?proto.apollo.canbus.Detected_object_rpt_411}
 */
proto.apollo.canbus.Lexus.prototype.getDetectedObjectRpt411 = function() {
  return /** @type{?proto.apollo.canbus.Detected_object_rpt_411} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Detected_object_rpt_411, 53));
};


/**
 * @param {?proto.apollo.canbus.Detected_object_rpt_411|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setDetectedObjectRpt411 = function(value) {
  return jspb.Message.setWrapperField(this, 53, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearDetectedObjectRpt411 = function() {
  return this.setDetectedObjectRpt411(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasDetectedObjectRpt411 = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional Veh_specific_rpt_1_412 veh_specific_rpt_1_412 = 54;
 * @return {?proto.apollo.canbus.Veh_specific_rpt_1_412}
 */
proto.apollo.canbus.Lexus.prototype.getVehSpecificRpt1412 = function() {
  return /** @type{?proto.apollo.canbus.Veh_specific_rpt_1_412} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Veh_specific_rpt_1_412, 54));
};


/**
 * @param {?proto.apollo.canbus.Veh_specific_rpt_1_412|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setVehSpecificRpt1412 = function(value) {
  return jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearVehSpecificRpt1412 = function() {
  return this.setVehSpecificRpt1412(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasVehSpecificRpt1412 = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional Veh_dynamics_rpt_413 veh_dynamics_rpt_413 = 55;
 * @return {?proto.apollo.canbus.Veh_dynamics_rpt_413}
 */
proto.apollo.canbus.Lexus.prototype.getVehDynamicsRpt413 = function() {
  return /** @type{?proto.apollo.canbus.Veh_dynamics_rpt_413} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Veh_dynamics_rpt_413, 55));
};


/**
 * @param {?proto.apollo.canbus.Veh_dynamics_rpt_413|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setVehDynamicsRpt413 = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearVehDynamicsRpt413 = function() {
  return this.setVehDynamicsRpt413(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasVehDynamicsRpt413 = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional Rear_lights_rpt_418 rear_lights_rpt_418 = 56;
 * @return {?proto.apollo.canbus.Rear_lights_rpt_418}
 */
proto.apollo.canbus.Lexus.prototype.getRearLightsRpt418 = function() {
  return /** @type{?proto.apollo.canbus.Rear_lights_rpt_418} */ (
    jspb.Message.getWrapperField(this, proto.apollo.canbus.Rear_lights_rpt_418, 56));
};


/**
 * @param {?proto.apollo.canbus.Rear_lights_rpt_418|undefined} value
 * @return {!proto.apollo.canbus.Lexus} returns this
*/
proto.apollo.canbus.Lexus.prototype.setRearLightsRpt418 = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.canbus.Lexus} returns this
 */
proto.apollo.canbus.Lexus.prototype.clearRearLightsRpt418 = function() {
  return this.setRearLightsRpt418(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.canbus.Lexus.prototype.hasRearLightsRpt418 = function() {
  return jspb.Message.getField(this, 56) != null;
};


goog.object.extend(exports, proto.apollo.canbus);
