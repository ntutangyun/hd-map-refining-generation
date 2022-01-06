// source: modules/drivers/proto/delphi_esr.proto
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

var modules_common_proto_header_pb = require('../../../modules/common/proto/header_pb.js');
goog.object.extend(proto, modules_common_proto_header_pb);
goog.exportSymbol('proto.apollo.drivers.Acm_inst_req_7e0', null, global);
goog.exportSymbol('proto.apollo.drivers.Acm_inst_resp_7e4', null, global);
goog.exportSymbol('proto.apollo.drivers.DelphiESR', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_sim1_5c0', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status1_4e0', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status3_4e2', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status5_5e4', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status7_5e6', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status8_5e7', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_status9_5e8', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_trackmotionpower_540', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_valid1_5d0', null, global);
goog.exportSymbol('proto.apollo.drivers.Esr_valid2_5d1', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle4_5f3', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle5_5f4', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType', null, global);
goog.exportSymbol('proto.apollo.drivers.Vehicle6_5f5', null, global);
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
proto.apollo.drivers.Esr_status9_5e8 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status9_5e8, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status9_5e8.displayName = 'proto.apollo.drivers.Esr_status9_5e8';
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
proto.apollo.drivers.Esr_status6_5e5 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status6_5e5, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status6_5e5.displayName = 'proto.apollo.drivers.Esr_status6_5e5';
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
proto.apollo.drivers.Esr_status5_5e4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status5_5e4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status5_5e4.displayName = 'proto.apollo.drivers.Esr_status5_5e4';
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
proto.apollo.drivers.Esr_status3_4e2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status3_4e2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status3_4e2.displayName = 'proto.apollo.drivers.Esr_status3_4e2';
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
proto.apollo.drivers.Esr_status4_4e3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status4_4e3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status4_4e3.displayName = 'proto.apollo.drivers.Esr_status4_4e3';
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
proto.apollo.drivers.Esr_trackmotionpower_540 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.drivers.Esr_trackmotionpower_540.repeatedFields_, null);
};
goog.inherits(proto.apollo.drivers.Esr_trackmotionpower_540, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_trackmotionpower_540.displayName = 'proto.apollo.drivers.Esr_trackmotionpower_540';
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
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.displayName = 'proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower';
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
proto.apollo.drivers.Acm_inst_req_7e0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Acm_inst_req_7e0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Acm_inst_req_7e0.displayName = 'proto.apollo.drivers.Acm_inst_req_7e0';
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
proto.apollo.drivers.Esr_track01_500 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_track01_500, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_track01_500.displayName = 'proto.apollo.drivers.Esr_track01_500';
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
proto.apollo.drivers.Esr_valid1_5d0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_valid1_5d0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_valid1_5d0.displayName = 'proto.apollo.drivers.Esr_valid1_5d0';
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
proto.apollo.drivers.Esr_valid2_5d1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_valid2_5d1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_valid2_5d1.displayName = 'proto.apollo.drivers.Esr_valid2_5d1';
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
proto.apollo.drivers.Acm_inst_resp_7e4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Acm_inst_resp_7e4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Acm_inst_resp_7e4.displayName = 'proto.apollo.drivers.Acm_inst_resp_7e4';
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
proto.apollo.drivers.Vehicle2_4f1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle2_4f1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle2_4f1.displayName = 'proto.apollo.drivers.Vehicle2_4f1';
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
proto.apollo.drivers.Vehicle1_4f0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle1_4f0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle1_4f0.displayName = 'proto.apollo.drivers.Vehicle1_4f0';
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
proto.apollo.drivers.Esr_sim1_5c0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_sim1_5c0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_sim1_5c0.displayName = 'proto.apollo.drivers.Esr_sim1_5c0';
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
proto.apollo.drivers.Esr_status1_4e0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status1_4e0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status1_4e0.displayName = 'proto.apollo.drivers.Esr_status1_4e0';
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
proto.apollo.drivers.Esr_status2_4e1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status2_4e1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status2_4e1.displayName = 'proto.apollo.drivers.Esr_status2_4e1';
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
proto.apollo.drivers.Esr_status8_5e7 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status8_5e7, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status8_5e7.displayName = 'proto.apollo.drivers.Esr_status8_5e7';
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
proto.apollo.drivers.Esr_status7_5e6 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Esr_status7_5e6, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Esr_status7_5e6.displayName = 'proto.apollo.drivers.Esr_status7_5e6';
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
proto.apollo.drivers.Vehicle3_5f2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle3_5f2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle3_5f2.displayName = 'proto.apollo.drivers.Vehicle3_5f2';
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
proto.apollo.drivers.Vehicle4_5f3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle4_5f3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle4_5f3.displayName = 'proto.apollo.drivers.Vehicle4_5f3';
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
proto.apollo.drivers.Vehicle5_5f4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle5_5f4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle5_5f4.displayName = 'proto.apollo.drivers.Vehicle5_5f4';
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
proto.apollo.drivers.Vehicle6_5f5 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.drivers.Vehicle6_5f5, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.Vehicle6_5f5.displayName = 'proto.apollo.drivers.Vehicle6_5f5';
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
proto.apollo.drivers.DelphiESR = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.drivers.DelphiESR.repeatedFields_, null);
};
goog.inherits(proto.apollo.drivers.DelphiESR, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.drivers.DelphiESR.displayName = 'proto.apollo.drivers.DelphiESR';
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
proto.apollo.drivers.Esr_status9_5e8.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status9_5e8.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status9_5e8} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status9_5e8.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxPathIdAcc3: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxPathIdAcc2: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxFilteredXohpAccCipv: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxWaterSprayTargetId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxSerialNum3rdByte: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxSideslipAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    canTxAvgPwrCwblkg: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status9_5e8 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status9_5e8.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxPathIdAcc3;

  /** @type {?|undefined} */
  this.canTxPathIdAcc2;

  /** @type {?|undefined} */
  this.canTxFilteredXohpAccCipv;

  /** @type {?|undefined} */
  this.canTxWaterSprayTargetId;

  /** @type {?|undefined} */
  this.canTxSerialNum3rdByte;

  /** @type {?|undefined} */
  this.canTxSideslipAngle;

  /** @type {?|undefined} */
  this.canTxAvgPwrCwblkg;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status9_5e8.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status9_5e8}
 */
proto.apollo.drivers.Esr_status9_5e8.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status9_5e8();
  obj.canTxPathIdAcc3 != null && jspb.Message.setField(msg, 1, obj.canTxPathIdAcc3);
  obj.canTxPathIdAcc2 != null && jspb.Message.setField(msg, 2, obj.canTxPathIdAcc2);
  obj.canTxFilteredXohpAccCipv != null && jspb.Message.setField(msg, 3, obj.canTxFilteredXohpAccCipv);
  obj.canTxWaterSprayTargetId != null && jspb.Message.setField(msg, 4, obj.canTxWaterSprayTargetId);
  obj.canTxSerialNum3rdByte != null && jspb.Message.setField(msg, 5, obj.canTxSerialNum3rdByte);
  obj.canTxSideslipAngle != null && jspb.Message.setField(msg, 6, obj.canTxSideslipAngle);
  obj.canTxAvgPwrCwblkg != null && jspb.Message.setField(msg, 7, obj.canTxAvgPwrCwblkg);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status9_5e8}
 */
proto.apollo.drivers.Esr_status9_5e8.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status9_5e8;
  return proto.apollo.drivers.Esr_status9_5e8.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status9_5e8} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status9_5e8}
 */
proto.apollo.drivers.Esr_status9_5e8.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdAcc3(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdAcc2(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxFilteredXohpAccCipv(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxWaterSprayTargetId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSerialNum3rdByte(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxSideslipAngle(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxAvgPwrCwblkg(value);
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
proto.apollo.drivers.Esr_status9_5e8.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status9_5e8.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status9_5e8} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status9_5e8.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
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
 * optional int32 can_tx_path_id_acc_3 = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxPathIdAcc3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxPathIdAcc3 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxPathIdAcc3 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxPathIdAcc3 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_path_id_acc_2 = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxPathIdAcc2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxPathIdAcc2 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxPathIdAcc2 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxPathIdAcc2 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_filtered_xohp_acc_cipv = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxFilteredXohpAccCipv = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxFilteredXohpAccCipv = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxFilteredXohpAccCipv = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxFilteredXohpAccCipv = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_water_spray_target_id = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxWaterSprayTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxWaterSprayTargetId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxWaterSprayTargetId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxWaterSprayTargetId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_serial_num_3rd_byte = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxSerialNum3rdByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxSerialNum3rdByte = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxSerialNum3rdByte = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxSerialNum3rdByte = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double can_tx_sideslip_angle = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxSideslipAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxSideslipAngle = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxSideslipAngle = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxSideslipAngle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_tx_avg_pwr_cwblkg = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.getCanTxAvgPwrCwblkg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.setCanTxAvgPwrCwblkg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status9_5e8} returns this
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.clearCanTxAvgPwrCwblkg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status9_5e8.prototype.hasCanTxAvgPwrCwblkg = function() {
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
proto.apollo.drivers.Esr_status6_5e5.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status6_5e5.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status6_5e5} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status6_5e5.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxSwVersionDsp3rdByte: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxVerticalAlignUpdated: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxVerticalMisalignment: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxServAlignUpdatesDone: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxFoundTarget: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxFactoryMisalignment: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    canTxFactoryAlignStatus2: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canTxFactoryAlignStatus1: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canTxRecommendUnconverge: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canTxWaveDiffA2d: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    canTxSystemPowerMode: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canTxSupplyN5vA2d: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    canTxSupply1p8vA2d: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status6_5e5 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status6_5e5.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxSwVersionDsp3rdByte;

  /** @type {?|undefined} */
  this.canTxVerticalAlignUpdated;

  /** @type {?|undefined} */
  this.canTxVerticalMisalignment;

  /** @type {?|undefined} */
  this.canTxServAlignUpdatesDone;

  /** @type {?|undefined} */
  this.canTxFoundTarget;

  /** @type {?|undefined} */
  this.canTxFactoryMisalignment;

  /** @type {?|undefined} */
  this.canTxFactoryAlignStatus2;

  /** @type {?|undefined} */
  this.canTxFactoryAlignStatus1;

  /** @type {?|undefined} */
  this.canTxRecommendUnconverge;

  /** @type {?|undefined} */
  this.canTxWaveDiffA2d;

  /** @type {?|undefined} */
  this.canTxSystemPowerMode;

  /** @type {?|undefined} */
  this.canTxSupplyN5vA2d;

  /** @type {?|undefined} */
  this.canTxSupply1p8vA2d;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status6_5e5.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status6_5e5}
 */
proto.apollo.drivers.Esr_status6_5e5.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status6_5e5();
  obj.canTxSwVersionDsp3rdByte != null && jspb.Message.setField(msg, 1, obj.canTxSwVersionDsp3rdByte);
  obj.canTxVerticalAlignUpdated != null && jspb.Message.setField(msg, 2, obj.canTxVerticalAlignUpdated);
  obj.canTxVerticalMisalignment != null && jspb.Message.setField(msg, 3, obj.canTxVerticalMisalignment);
  obj.canTxServAlignUpdatesDone != null && jspb.Message.setField(msg, 4, obj.canTxServAlignUpdatesDone);
  obj.canTxFoundTarget != null && jspb.Message.setField(msg, 5, obj.canTxFoundTarget);
  obj.canTxFactoryMisalignment != null && jspb.Message.setField(msg, 6, obj.canTxFactoryMisalignment);
  obj.canTxFactoryAlignStatus2 != null && jspb.Message.setField(msg, 7, obj.canTxFactoryAlignStatus2);
  obj.canTxFactoryAlignStatus1 != null && jspb.Message.setField(msg, 8, obj.canTxFactoryAlignStatus1);
  obj.canTxRecommendUnconverge != null && jspb.Message.setField(msg, 9, obj.canTxRecommendUnconverge);
  obj.canTxWaveDiffA2d != null && jspb.Message.setField(msg, 10, obj.canTxWaveDiffA2d);
  obj.canTxSystemPowerMode != null && jspb.Message.setField(msg, 11, obj.canTxSystemPowerMode);
  obj.canTxSupplyN5vA2d != null && jspb.Message.setField(msg, 12, obj.canTxSupplyN5vA2d);
  obj.canTxSupply1p8vA2d != null && jspb.Message.setField(msg, 13, obj.canTxSupply1p8vA2d);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status6_5e5}
 */
proto.apollo.drivers.Esr_status6_5e5.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status6_5e5;
  return proto.apollo.drivers.Esr_status6_5e5.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status6_5e5} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status6_5e5}
 */
proto.apollo.drivers.Esr_status6_5e5.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSwVersionDsp3rdByte(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType} */ (reader.readEnum());
      msg.setCanTxVerticalAlignUpdated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxVerticalMisalignment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxServAlignUpdatesDone(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType} */ (reader.readEnum());
      msg.setCanTxFoundTarget(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxFactoryMisalignment(value);
      break;
    case 7:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type} */ (reader.readEnum());
      msg.setCanTxFactoryAlignStatus2(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type} */ (reader.readEnum());
      msg.setCanTxFactoryAlignStatus1(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType} */ (reader.readEnum());
      msg.setCanTxRecommendUnconverge(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxWaveDiffA2d(value);
      break;
    case 11:
      var value = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType} */ (reader.readEnum());
      msg.setCanTxSystemPowerMode(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupplyN5vA2d(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupply1p8vA2d(value);
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
proto.apollo.drivers.Esr_status6_5e5.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status6_5e5.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status6_5e5} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status6_5e5.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType} */ (jspb.Message.getField(message, 2));
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
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType} */ (jspb.Message.getField(message, 5));
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
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType = {
  CAN_TX_VERTICAL_ALIGN_UPDATED_NOT_UPDATED: 0,
  CAN_TX_VERTICAL_ALIGN_UPDATED_UPDATED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType = {
  CAN_TX_FOUND_TARGET_NOT_FOUND: 0,
  CAN_TX_FOUND_TARGET_FOUND: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type = {
  CAN_TX_FACTORY_ALIGN_STATUS_2_OFF: 0,
  CAN_TX_FACTORY_ALIGN_STATUS_2_BUSY: 1,
  CAN_TX_FACTORY_ALIGN_STATUS_2_SUCCESS: 2,
  CAN_TX_FACTORY_ALIGN_STATUS_2_FAIL_NO_TARGET: 3,
  CAN_TX_FACTORY_ALIGN_STATUS_2_FAIL_DEV_TOO_LARGE: 4,
  CAN_TX_FACTORY_ALIGN_STATUS_2_FAIL_VAR_TOO_LARGE: 5
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type = {
  CAN_TX_FACTORY_ALIGN_STATUS_1_OFF: 0,
  CAN_TX_FACTORY_ALIGN_STATUS_1_BUSY: 1,
  CAN_TX_FACTORY_ALIGN_STATUS_1_SUCCESS: 2,
  CAN_TX_FACTORY_ALIGN_STATUS_1_FAIL_NO_TARGET: 3,
  CAN_TX_FACTORY_ALIGN_STATUS_1_FAIL_DEV_TOO_LARGE: 4,
  CAN_TX_FACTORY_ALIGN_STATUS_1_FAIL_VAR_TOO_LARGE: 5
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType = {
  CAN_TX_RECOMMEND_UNCONVERGE_NOT_RECOMMEND: 0,
  CAN_TX_RECOMMEND_UNCONVERGE_RECOMMEND: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType = {
  CAN_TX_SYSTEM_POWER_MODE_DSP_INIT: 0,
  CAN_TX_SYSTEM_POWER_MODE_RADIATE_OFF: 1,
  CAN_TX_SYSTEM_POWER_MODE_RADIATE_ON: 2,
  CAN_TX_SYSTEM_POWER_MODE_DSP_SHUTDOWN: 3,
  CAN_TX_SYSTEM_POWER_MODE_DSP_OFF: 4,
  CAN_TX_SYSTEM_POWER_MODE_HOST_SHUTDOWN: 5,
  CAN_TX_SYSTEM_POWER_MODE_TEST: 6,
  CAN_TX_SYSTEM_POWER_MODE_7INVALID: 7
};

/**
 * optional int32 can_tx_sw_version_dsp_3rd_byte = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxSwVersionDsp3rdByte = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxSwVersionDsp3rdByte = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxSwVersionDsp3rdByte = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxSwVersionDsp3rdByte = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_tx_vertical_align_updatedType can_tx_vertical_align_updated = 2;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxVerticalAlignUpdated = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_vertical_align_updatedType} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxVerticalAlignUpdated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxVerticalAlignUpdated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxVerticalAlignUpdated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_vertical_misalignment = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxVerticalMisalignment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxVerticalMisalignment = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxVerticalMisalignment = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxVerticalMisalignment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_serv_align_updates_done = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxServAlignUpdatesDone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxServAlignUpdatesDone = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxServAlignUpdatesDone = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxServAlignUpdatesDone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Can_tx_found_targetType can_tx_found_target = 5;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxFoundTarget = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_found_targetType} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxFoundTarget = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxFoundTarget = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxFoundTarget = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double can_tx_factory_misalignment = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxFactoryMisalignment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxFactoryMisalignment = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxFactoryMisalignment = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxFactoryMisalignment = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Can_tx_factory_align_status_2Type can_tx_factory_align_status_2 = 7;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxFactoryAlignStatus2 = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_2Type} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxFactoryAlignStatus2 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxFactoryAlignStatus2 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxFactoryAlignStatus2 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Can_tx_factory_align_status_1Type can_tx_factory_align_status_1 = 8;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxFactoryAlignStatus1 = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_factory_align_status_1Type} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxFactoryAlignStatus1 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxFactoryAlignStatus1 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxFactoryAlignStatus1 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Can_tx_recommend_unconvergeType can_tx_recommend_unconverge = 9;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxRecommendUnconverge = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_recommend_unconvergeType} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxRecommendUnconverge = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxRecommendUnconverge = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxRecommendUnconverge = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 can_tx_wave_diff_a2d = 10;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxWaveDiffA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxWaveDiffA2d = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxWaveDiffA2d = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxWaveDiffA2d = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Can_tx_system_power_modeType can_tx_system_power_mode = 11;
 * @return {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxSystemPowerMode = function() {
  return /** @type {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status6_5e5.Can_tx_system_power_modeType} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxSystemPowerMode = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxSystemPowerMode = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxSystemPowerMode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 can_tx_supply_n5v_a2d = 12;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxSupplyN5vA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxSupplyN5vA2d = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxSupplyN5vA2d = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxSupplyN5vA2d = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 can_tx_supply_1p8v_a2d = 13;
 * @return {number}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.getCanTxSupply1p8vA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.setCanTxSupply1p8vA2d = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status6_5e5} returns this
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.clearCanTxSupply1p8vA2d = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status6_5e5.prototype.hasCanTxSupply1p8vA2d = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.apollo.drivers.Esr_status5_5e4.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status5_5e4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status5_5e4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status5_5e4.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxSupply10vA2d: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxTemp2A2d: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxTemp1A2d: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxSwbattA2d: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxSupply5vdxA2d: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxSupply5vaA2d: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxSupply3p3vA2d: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canTxIgnpA2d: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status5_5e4 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status5_5e4.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxSupply10vA2d;

  /** @type {?|undefined} */
  this.canTxTemp2A2d;

  /** @type {?|undefined} */
  this.canTxTemp1A2d;

  /** @type {?|undefined} */
  this.canTxSwbattA2d;

  /** @type {?|undefined} */
  this.canTxSupply5vdxA2d;

  /** @type {?|undefined} */
  this.canTxSupply5vaA2d;

  /** @type {?|undefined} */
  this.canTxSupply3p3vA2d;

  /** @type {?|undefined} */
  this.canTxIgnpA2d;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status5_5e4.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status5_5e4}
 */
proto.apollo.drivers.Esr_status5_5e4.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status5_5e4();
  obj.canTxSupply10vA2d != null && jspb.Message.setField(msg, 1, obj.canTxSupply10vA2d);
  obj.canTxTemp2A2d != null && jspb.Message.setField(msg, 2, obj.canTxTemp2A2d);
  obj.canTxTemp1A2d != null && jspb.Message.setField(msg, 3, obj.canTxTemp1A2d);
  obj.canTxSwbattA2d != null && jspb.Message.setField(msg, 4, obj.canTxSwbattA2d);
  obj.canTxSupply5vdxA2d != null && jspb.Message.setField(msg, 5, obj.canTxSupply5vdxA2d);
  obj.canTxSupply5vaA2d != null && jspb.Message.setField(msg, 6, obj.canTxSupply5vaA2d);
  obj.canTxSupply3p3vA2d != null && jspb.Message.setField(msg, 7, obj.canTxSupply3p3vA2d);
  obj.canTxIgnpA2d != null && jspb.Message.setField(msg, 8, obj.canTxIgnpA2d);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status5_5e4}
 */
proto.apollo.drivers.Esr_status5_5e4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status5_5e4;
  return proto.apollo.drivers.Esr_status5_5e4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status5_5e4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status5_5e4}
 */
proto.apollo.drivers.Esr_status5_5e4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupply10vA2d(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxTemp2A2d(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxTemp1A2d(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSwbattA2d(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupply5vdxA2d(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupply5vaA2d(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSupply3p3vA2d(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxIgnpA2d(value);
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
proto.apollo.drivers.Esr_status5_5e4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status5_5e4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status5_5e4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status5_5e4.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional int32 can_tx_supply_10v_a2d = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxSupply10vA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxSupply10vA2d = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxSupply10vA2d = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxSupply10vA2d = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_temp2_a2d = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxTemp2A2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxTemp2A2d = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxTemp2A2d = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxTemp2A2d = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_tx_temp1_a2d = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxTemp1A2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxTemp1A2d = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxTemp1A2d = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxTemp1A2d = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_swbatt_a2d = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxSwbattA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxSwbattA2d = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxSwbattA2d = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxSwbattA2d = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_supply_5vdx_a2d = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxSupply5vdxA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxSupply5vdxA2d = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxSupply5vdxA2d = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxSupply5vdxA2d = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_tx_supply_5va_a2d = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxSupply5vaA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxSupply5vaA2d = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxSupply5vaA2d = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxSupply5vaA2d = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_tx_supply_3p3v_a2d = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxSupply3p3vA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxSupply3p3vA2d = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxSupply3p3vA2d = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxSupply3p3vA2d = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_tx_ignp_a2d = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.getCanTxIgnpA2d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.setCanTxIgnpA2d = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status5_5e4} returns this
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.clearCanTxIgnpA2d = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status5_5e4.prototype.hasCanTxIgnpA2d = function() {
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
proto.apollo.drivers.Esr_status3_4e2.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status3_4e2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status3_4e2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status3_4e2.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxSwVersionPld: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxSwVersionHost: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxHwVersion: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxInterfaceVersion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxSerialNum: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status3_4e2 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status3_4e2.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxSwVersionPld;

  /** @type {?|undefined} */
  this.canTxSwVersionHost;

  /** @type {?|undefined} */
  this.canTxHwVersion;

  /** @type {?|undefined} */
  this.canTxInterfaceVersion;

  /** @type {?|undefined} */
  this.canTxSerialNum;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status3_4e2.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status3_4e2}
 */
proto.apollo.drivers.Esr_status3_4e2.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status3_4e2();
  obj.canTxSwVersionPld != null && jspb.Message.setField(msg, 1, obj.canTxSwVersionPld);
  obj.canTxSwVersionHost != null && jspb.Message.setField(msg, 2, obj.canTxSwVersionHost);
  obj.canTxHwVersion != null && jspb.Message.setField(msg, 3, obj.canTxHwVersion);
  obj.canTxInterfaceVersion != null && jspb.Message.setField(msg, 4, obj.canTxInterfaceVersion);
  obj.canTxSerialNum != null && jspb.Message.setField(msg, 5, obj.canTxSerialNum);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status3_4e2}
 */
proto.apollo.drivers.Esr_status3_4e2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status3_4e2;
  return proto.apollo.drivers.Esr_status3_4e2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status3_4e2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status3_4e2}
 */
proto.apollo.drivers.Esr_status3_4e2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSwVersionPld(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSwVersionHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHwVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxInterfaceVersion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSerialNum(value);
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
proto.apollo.drivers.Esr_status3_4e2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status3_4e2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status3_4e2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status3_4e2.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional int32 can_tx_sw_version_pld = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.getCanTxSwVersionPld = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.setCanTxSwVersionPld = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.clearCanTxSwVersionPld = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.hasCanTxSwVersionPld = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_sw_version_host = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.getCanTxSwVersionHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.setCanTxSwVersionHost = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.clearCanTxSwVersionHost = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.hasCanTxSwVersionHost = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_tx_hw_version = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.getCanTxHwVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.setCanTxHwVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.clearCanTxHwVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.hasCanTxHwVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_interface_version = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.getCanTxInterfaceVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.setCanTxInterfaceVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.clearCanTxInterfaceVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.hasCanTxInterfaceVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_serial_num = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.getCanTxSerialNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.setCanTxSerialNum = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status3_4e2} returns this
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.clearCanTxSerialNum = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status3_4e2.prototype.hasCanTxSerialNum = function() {
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
proto.apollo.drivers.Esr_status4_4e3.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status4_4e3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status4_4e3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status4_4e3.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxTruckTargetDet: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxLrOnlyGratingLobeDet: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxSidelobeBlockage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxPartialBlockage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxPathIdAccStat: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxMrLrMode: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxAutoAlignAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    canTxRollingCount3: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canTxPathIdFcwStat: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canTxPathIdFcwMove: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    canTxPathIdCmbbStat: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canTxPathIdCmbbMove: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    canTxPathIdAcc: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status4_4e3 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status4_4e3.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxTruckTargetDet;

  /** @type {?|undefined} */
  this.canTxLrOnlyGratingLobeDet;

  /** @type {?|undefined} */
  this.canTxSidelobeBlockage;

  /** @type {?|undefined} */
  this.canTxPartialBlockage;

  /** @type {?|undefined} */
  this.canTxPathIdAccStat;

  /** @type {?|undefined} */
  this.canTxMrLrMode;

  /** @type {?|undefined} */
  this.canTxAutoAlignAngle;

  /** @type {?|undefined} */
  this.canTxRollingCount3;

  /** @type {?|undefined} */
  this.canTxPathIdFcwStat;

  /** @type {?|undefined} */
  this.canTxPathIdFcwMove;

  /** @type {?|undefined} */
  this.canTxPathIdCmbbStat;

  /** @type {?|undefined} */
  this.canTxPathIdCmbbMove;

  /** @type {?|undefined} */
  this.canTxPathIdAcc;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status4_4e3.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status4_4e3}
 */
proto.apollo.drivers.Esr_status4_4e3.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status4_4e3();
  obj.canTxTruckTargetDet != null && jspb.Message.setField(msg, 1, obj.canTxTruckTargetDet);
  obj.canTxLrOnlyGratingLobeDet != null && jspb.Message.setField(msg, 2, obj.canTxLrOnlyGratingLobeDet);
  obj.canTxSidelobeBlockage != null && jspb.Message.setField(msg, 3, obj.canTxSidelobeBlockage);
  obj.canTxPartialBlockage != null && jspb.Message.setField(msg, 4, obj.canTxPartialBlockage);
  obj.canTxPathIdAccStat != null && jspb.Message.setField(msg, 5, obj.canTxPathIdAccStat);
  obj.canTxMrLrMode != null && jspb.Message.setField(msg, 6, obj.canTxMrLrMode);
  obj.canTxAutoAlignAngle != null && jspb.Message.setField(msg, 7, obj.canTxAutoAlignAngle);
  obj.canTxRollingCount3 != null && jspb.Message.setField(msg, 8, obj.canTxRollingCount3);
  obj.canTxPathIdFcwStat != null && jspb.Message.setField(msg, 9, obj.canTxPathIdFcwStat);
  obj.canTxPathIdFcwMove != null && jspb.Message.setField(msg, 10, obj.canTxPathIdFcwMove);
  obj.canTxPathIdCmbbStat != null && jspb.Message.setField(msg, 11, obj.canTxPathIdCmbbStat);
  obj.canTxPathIdCmbbMove != null && jspb.Message.setField(msg, 12, obj.canTxPathIdCmbbMove);
  obj.canTxPathIdAcc != null && jspb.Message.setField(msg, 13, obj.canTxPathIdAcc);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status4_4e3}
 */
proto.apollo.drivers.Esr_status4_4e3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status4_4e3;
  return proto.apollo.drivers.Esr_status4_4e3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status4_4e3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status4_4e3}
 */
proto.apollo.drivers.Esr_status4_4e3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType} */ (reader.readEnum());
      msg.setCanTxTruckTargetDet(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType} */ (reader.readEnum());
      msg.setCanTxLrOnlyGratingLobeDet(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType} */ (reader.readEnum());
      msg.setCanTxSidelobeBlockage(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType} */ (reader.readEnum());
      msg.setCanTxPartialBlockage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdAccStat(value);
      break;
    case 6:
      var value = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType} */ (reader.readEnum());
      msg.setCanTxMrLrMode(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxAutoAlignAngle(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxRollingCount3(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdFcwStat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdFcwMove(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdCmbbStat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdCmbbMove(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxPathIdAcc(value);
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
proto.apollo.drivers.Esr_status4_4e3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status4_4e3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status4_4e3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status4_4e3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
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
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType = {
  CAN_TX_TRUCK_TARGET_DET_NOT_DETECTED: 0,
  CAN_TX_TRUCK_TARGET_DET_DETECTED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType = {
  CAN_TX_LR_ONLY_GRATING_LOBE_DET_NOT_DETECTED: 0,
  CAN_TX_LR_ONLY_GRATING_LOBE_DET_DETECTED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType = {
  CAN_TX_SIDELOBE_BLOCKAGE_OFF: 0,
  CAN_TX_SIDELOBE_BLOCKAGE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType = {
  CAN_TX_PARTIAL_BLOCKAGE_NOT_BLOCKED: 0,
  CAN_TX_PARTIAL_BLOCKAGE_BLOCKED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType = {
  CAN_TX_MR_LR_MODE_RESERVED: 0,
  CAN_TX_MR_LR_MODE_OUTPUT_ONLY_MEDIUM_RANGE_TRACKS: 1,
  CAN_TX_MR_LR_MODE_OUTPUT_ONLY_LONG_RANGE_TRACKS: 2,
  CAN_TX_MR_LR_MODE_OUTPUT_ALL_MEDIUM_RANGE_AND_LONG: 3
};

/**
 * optional Can_tx_truck_target_detType can_tx_truck_target_det = 1;
 * @return {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxTruckTargetDet = function() {
  return /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_truck_target_detType} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxTruckTargetDet = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxTruckTargetDet = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxTruckTargetDet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_tx_lr_only_grating_lobe_detType can_tx_lr_only_grating_lobe_det = 2;
 * @return {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxLrOnlyGratingLobeDet = function() {
  return /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_lr_only_grating_lobe_detType} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxLrOnlyGratingLobeDet = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxLrOnlyGratingLobeDet = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxLrOnlyGratingLobeDet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Can_tx_sidelobe_blockageType can_tx_sidelobe_blockage = 3;
 * @return {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxSidelobeBlockage = function() {
  return /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_sidelobe_blockageType} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxSidelobeBlockage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxSidelobeBlockage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxSidelobeBlockage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Can_tx_partial_blockageType can_tx_partial_blockage = 4;
 * @return {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPartialBlockage = function() {
  return /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_partial_blockageType} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPartialBlockage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPartialBlockage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPartialBlockage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_path_id_acc_stat = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdAccStat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdAccStat = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdAccStat = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdAccStat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Can_tx_mr_lr_modeType can_tx_mr_lr_mode = 6;
 * @return {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxMrLrMode = function() {
  return /** @type {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status4_4e3.Can_tx_mr_lr_modeType} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxMrLrMode = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxMrLrMode = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxMrLrMode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double can_tx_auto_align_angle = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxAutoAlignAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxAutoAlignAngle = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxAutoAlignAngle = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxAutoAlignAngle = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_tx_rolling_count_3 = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxRollingCount3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxRollingCount3 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxRollingCount3 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxRollingCount3 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 can_tx_path_id_fcw_stat = 9;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdFcwStat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdFcwStat = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdFcwStat = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdFcwStat = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 can_tx_path_id_fcw_move = 10;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdFcwMove = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdFcwMove = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdFcwMove = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdFcwMove = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 can_tx_path_id_cmbb_stat = 11;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdCmbbStat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdCmbbStat = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdCmbbStat = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdCmbbStat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 can_tx_path_id_cmbb_move = 12;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdCmbbMove = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdCmbbMove = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdCmbbMove = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdCmbbMove = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 can_tx_path_id_acc = 13;
 * @return {number}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.getCanTxPathIdAcc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.setCanTxPathIdAcc = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status4_4e3} returns this
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.clearCanTxPathIdAcc = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status4_4e3.prototype.hasCanTxPathIdAcc = function() {
  return jspb.Message.getField(this, 13) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.drivers.Esr_trackmotionpower_540.repeatedFields_ = [3];



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
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_trackmotionpower_540.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_trackmotionpower_540.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxTrackRollingCount2: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    canTxTrackCanIdGroup: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxTrackMotionPowerList: jspb.Message.toObjectList(msg.getCanTxTrackMotionPowerList(),
    proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_trackmotionpower_540 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_trackmotionpower_540.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxTrackRollingCount2;

  /** @type {?|undefined} */
  this.canTxTrackCanIdGroup;

  /** @type {?|undefined} */
  this.canTxTrackMotionPowerList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_trackmotionpower_540();
  obj.canTxTrackRollingCount2 != null && jspb.Message.setField(msg, 1, obj.canTxTrackRollingCount2);
  obj.canTxTrackCanIdGroup != null && jspb.Message.setField(msg, 2, obj.canTxTrackCanIdGroup);
  obj.canTxTrackMotionPowerList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.canTxTrackMotionPowerList.map(
          proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_trackmotionpower_540;
  return proto.apollo.drivers.Esr_trackmotionpower_540.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxTrackRollingCount2(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxTrackCanIdGroup(value);
      break;
    case 3:
      var value = new proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower;
      reader.readMessage(value,proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.deserializeBinaryFromReader);
      msg.addCanTxTrackMotionPower(value);
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
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_trackmotionpower_540.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_trackmotionpower_540.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCanTxTrackMotionPowerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.serializeBinaryToWriter
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
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxTrackMoving: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    canTxTrackMovingFast: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    canTxTrackMovingSlow: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    canTxTrackPower: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Motionpower as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxTrackMoving;

  /** @type {?|undefined} */
  this.canTxTrackMovingFast;

  /** @type {?|undefined} */
  this.canTxTrackMovingSlow;

  /** @type {?|undefined} */
  this.canTxTrackPower;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower();
  obj.canTxTrackMoving != null && jspb.Message.setField(msg, 1, obj.canTxTrackMoving);
  obj.canTxTrackMovingFast != null && jspb.Message.setField(msg, 2, obj.canTxTrackMovingFast);
  obj.canTxTrackMovingSlow != null && jspb.Message.setField(msg, 3, obj.canTxTrackMovingSlow);
  obj.canTxTrackPower != null && jspb.Message.setField(msg, 4, obj.canTxTrackPower);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower;
  return proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxTrackMoving(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxTrackMovingFast(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxTrackMovingSlow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxTrackPower(value);
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
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional bool can_tx_track_moving = 1;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.getCanTxTrackMoving = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.setCanTxTrackMoving = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.clearCanTxTrackMoving = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.hasCanTxTrackMoving = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool can_tx_track_moving_fast = 2;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.getCanTxTrackMovingFast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.setCanTxTrackMovingFast = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.clearCanTxTrackMovingFast = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.hasCanTxTrackMovingFast = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool can_tx_track_moving_slow = 3;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.getCanTxTrackMovingSlow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.setCanTxTrackMovingSlow = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.clearCanTxTrackMovingSlow = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.hasCanTxTrackMovingSlow = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_track_power = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.getCanTxTrackPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.setCanTxTrackPower = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.clearCanTxTrackPower = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower.prototype.hasCanTxTrackPower = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool can_tx_track_rolling_count_2 = 1;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.getCanTxTrackRollingCount2 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.setCanTxTrackRollingCount2 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.clearCanTxTrackRollingCount2 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.hasCanTxTrackRollingCount2 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_track_can_id_group = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.getCanTxTrackCanIdGroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.setCanTxTrackCanIdGroup = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.clearCanTxTrackCanIdGroup = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.hasCanTxTrackCanIdGroup = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Motionpower can_tx_track_motion_power = 3;
 * @return {!Array<!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower>}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.getCanTxTrackMotionPowerList = function() {
  return /** @type{!Array<!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower, 3));
};


/**
 * @param {!Array<!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower>} value
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
*/
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.setCanTxTrackMotionPowerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower}
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.addCanTxTrackMotionPower = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.drivers.Esr_trackmotionpower_540.Motionpower, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540} returns this
 */
proto.apollo.drivers.Esr_trackmotionpower_540.prototype.clearCanTxTrackMotionPowerList = function() {
  return this.setCanTxTrackMotionPowerList([]);
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
proto.apollo.drivers.Acm_inst_req_7e0.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Acm_inst_req_7e0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Acm_inst_req_7e0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Acm_inst_req_7e0.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandCtr: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    commandCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ccWord2: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    ccWord1: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    ccByte2: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    ccByte1: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Acm_inst_req_7e0 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Acm_inst_req_7e0.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.commandCtr;

  /** @type {?|undefined} */
  this.commandCode;

  /** @type {?|undefined} */
  this.ccWord2;

  /** @type {?|undefined} */
  this.ccWord1;

  /** @type {?|undefined} */
  this.ccByte2;

  /** @type {?|undefined} */
  this.ccByte1;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Acm_inst_req_7e0.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0}
 */
proto.apollo.drivers.Acm_inst_req_7e0.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Acm_inst_req_7e0();
  obj.commandCtr != null && jspb.Message.setField(msg, 1, obj.commandCtr);
  obj.commandCode != null && jspb.Message.setField(msg, 2, obj.commandCode);
  obj.ccWord2 != null && jspb.Message.setField(msg, 3, obj.ccWord2);
  obj.ccWord1 != null && jspb.Message.setField(msg, 4, obj.ccWord1);
  obj.ccByte2 != null && jspb.Message.setField(msg, 5, obj.ccByte2);
  obj.ccByte1 != null && jspb.Message.setField(msg, 6, obj.ccByte1);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0}
 */
proto.apollo.drivers.Acm_inst_req_7e0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Acm_inst_req_7e0;
  return proto.apollo.drivers.Acm_inst_req_7e0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Acm_inst_req_7e0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0}
 */
proto.apollo.drivers.Acm_inst_req_7e0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommandCtr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommandCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCcWord2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCcWord1(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCcByte2(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCcByte1(value);
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
proto.apollo.drivers.Acm_inst_req_7e0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Acm_inst_req_7e0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Acm_inst_req_7e0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Acm_inst_req_7e0.serializeBinaryToWriter = function(message, writer) {
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
 * optional int32 command_ctr = 1;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCommandCtr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCommandCtr = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCommandCtr = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCommandCtr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 command_code = 2;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCommandCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCommandCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCommandCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCommandCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 cc_word_2 = 3;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCcWord2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCcWord2 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCcWord2 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCcWord2 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 cc_word_1 = 4;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCcWord1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCcWord1 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCcWord1 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCcWord1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 cc_byte_2 = 5;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCcByte2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCcByte2 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCcByte2 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCcByte2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 cc_byte_1 = 6;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.getCcByte1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.setCcByte1 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_req_7e0} returns this
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.clearCcByte1 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_req_7e0.prototype.hasCcByte1 = function() {
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
proto.apollo.drivers.Esr_track01_500.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_track01_500.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_track01_500} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_track01_500.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxTrackGroupingChanged: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxTrackOncoming: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxTrackLatRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxTrackBridgeObject: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxTrackWidth: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    canTxTrackStatus: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxTrackRollingCount: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    canTxTrackRangeRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    canTxTrackRangeAccel: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    canTxTrackRange: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
    canTxTrackMedRangeMode: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canTxTrackAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_track01_500 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_track01_500.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxTrackGroupingChanged;

  /** @type {?|undefined} */
  this.canTxTrackOncoming;

  /** @type {?|undefined} */
  this.canTxTrackLatRate;

  /** @type {?|undefined} */
  this.canTxTrackBridgeObject;

  /** @type {?|undefined} */
  this.canTxTrackWidth;

  /** @type {?|undefined} */
  this.canTxTrackStatus;

  /** @type {?|undefined} */
  this.canTxTrackRollingCount;

  /** @type {?|undefined} */
  this.canTxTrackRangeRate;

  /** @type {?|undefined} */
  this.canTxTrackRangeAccel;

  /** @type {?|undefined} */
  this.canTxTrackRange;

  /** @type {?|undefined} */
  this.canTxTrackMedRangeMode;

  /** @type {?|undefined} */
  this.canTxTrackAngle;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_track01_500.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_track01_500}
 */
proto.apollo.drivers.Esr_track01_500.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_track01_500();
  obj.canTxTrackGroupingChanged != null && jspb.Message.setField(msg, 1, obj.canTxTrackGroupingChanged);
  obj.canTxTrackOncoming != null && jspb.Message.setField(msg, 2, obj.canTxTrackOncoming);
  obj.canTxTrackLatRate != null && jspb.Message.setField(msg, 3, obj.canTxTrackLatRate);
  obj.canTxTrackBridgeObject != null && jspb.Message.setField(msg, 4, obj.canTxTrackBridgeObject);
  obj.canTxTrackWidth != null && jspb.Message.setField(msg, 5, obj.canTxTrackWidth);
  obj.canTxTrackStatus != null && jspb.Message.setField(msg, 6, obj.canTxTrackStatus);
  obj.canTxTrackRollingCount != null && jspb.Message.setField(msg, 7, obj.canTxTrackRollingCount);
  obj.canTxTrackRangeRate != null && jspb.Message.setField(msg, 8, obj.canTxTrackRangeRate);
  obj.canTxTrackRangeAccel != null && jspb.Message.setField(msg, 9, obj.canTxTrackRangeAccel);
  obj.canTxTrackRange != null && jspb.Message.setField(msg, 10, obj.canTxTrackRange);
  obj.canTxTrackMedRangeMode != null && jspb.Message.setField(msg, 11, obj.canTxTrackMedRangeMode);
  obj.canTxTrackAngle != null && jspb.Message.setField(msg, 12, obj.canTxTrackAngle);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_track01_500}
 */
proto.apollo.drivers.Esr_track01_500.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_track01_500;
  return proto.apollo.drivers.Esr_track01_500.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_track01_500} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_track01_500}
 */
proto.apollo.drivers.Esr_track01_500.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType} */ (reader.readEnum());
      msg.setCanTxTrackGroupingChanged(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType} */ (reader.readEnum());
      msg.setCanTxTrackOncoming(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackLatRate(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType} */ (reader.readEnum());
      msg.setCanTxTrackBridgeObject(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackWidth(value);
      break;
    case 6:
      var value = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType} */ (reader.readEnum());
      msg.setCanTxTrackStatus(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxTrackRollingCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackRangeRate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackRangeAccel(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackRange(value);
      break;
    case 11:
      var value = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType} */ (reader.readEnum());
      msg.setCanTxTrackMedRangeMode(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxTrackAngle(value);
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
proto.apollo.drivers.Esr_track01_500.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_track01_500.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_track01_500} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_track01_500.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType} */ (jspb.Message.getField(message, 2));
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
  f = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType} */ (jspb.Message.getField(message, 11));
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
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType = {
  CAN_TX_TRACK_GROUPING_CHANGED_GROUPINGUNCHANGED: 0,
  CAN_TX_TRACK_GROUPING_CHANGED_GROUPINGCHANGED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType = {
  CAN_TX_TRACK_ONCOMING_NOTONCOMING: 0,
  CAN_TX_TRACK_ONCOMING_ONCOMING: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType = {
  CAN_TX_TRACK_BRIDGE_OBJECT_NOT_BRIDGE: 0,
  CAN_TX_TRACK_BRIDGE_OBJECT_BRIDGE: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType = {
  CAN_TX_TRACK_STATUS_NO_TARGET: 0,
  CAN_TX_TRACK_STATUS_NEW_TARGET: 1,
  CAN_TX_TRACK_STATUS_NEW_UPDATED_TARGET: 2,
  CAN_TX_TRACK_STATUS_UPDATED_TARGET: 3,
  CAN_TX_TRACK_STATUS_COASTED_TARGET: 4,
  CAN_TX_TRACK_STATUS_MERGED_TARGET: 5,
  CAN_TX_TRACK_STATUS_INVALID_COASTED_TARGET: 6,
  CAN_TX_TRACK_STATUS_NEW_COASTED_TARGET: 7
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType = {
  CAN_TX_TRACK_MED_RANGE_MODE_NO_MR_LR_UPDATE: 0,
  CAN_TX_TRACK_MED_RANGE_MODE_MR_UPDATE_ONLY: 1,
  CAN_TX_TRACK_MED_RANGE_MODE_LR_UPDATE_ONLY: 2,
  CAN_TX_TRACK_MED_RANGE_MODE_BOTH_MR_LR_UPDATE: 3
};

/**
 * optional Can_tx_track_grouping_changedType can_tx_track_grouping_changed = 1;
 * @return {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackGroupingChanged = function() {
  return /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_grouping_changedType} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackGroupingChanged = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackGroupingChanged = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackGroupingChanged = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_tx_track_oncomingType can_tx_track_oncoming = 2;
 * @return {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackOncoming = function() {
  return /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_oncomingType} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackOncoming = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackOncoming = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackOncoming = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_track_lat_rate = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackLatRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackLatRate = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackLatRate = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackLatRate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Can_tx_track_bridge_objectType can_tx_track_bridge_object = 4;
 * @return {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackBridgeObject = function() {
  return /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_bridge_objectType} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackBridgeObject = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackBridgeObject = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackBridgeObject = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double can_tx_track_width = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackWidth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackWidth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackWidth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Can_tx_track_statusType can_tx_track_status = 6;
 * @return {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackStatus = function() {
  return /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_statusType} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackStatus = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackStatus = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackStatus = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool can_tx_track_rolling_count = 7;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackRollingCount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackRollingCount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackRollingCount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackRollingCount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double can_tx_track_range_rate = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackRangeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackRangeRate = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackRangeRate = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackRangeRate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double can_tx_track_range_accel = 9;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackRangeAccel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackRangeAccel = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackRangeAccel = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackRangeAccel = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double can_tx_track_range = 10;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackRange = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackRange = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackRange = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Can_tx_track_med_range_modeType can_tx_track_med_range_mode = 11;
 * @return {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackMedRangeMode = function() {
  return /** @type {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500.Can_tx_track_med_range_modeType} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackMedRangeMode = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackMedRangeMode = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackMedRangeMode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double can_tx_track_angle = 12;
 * @return {number}
 */
proto.apollo.drivers.Esr_track01_500.prototype.getCanTxTrackAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.setCanTxTrackAngle = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_track01_500} returns this
 */
proto.apollo.drivers.Esr_track01_500.prototype.clearCanTxTrackAngle = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_track01_500.prototype.hasCanTxTrackAngle = function() {
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
proto.apollo.drivers.Esr_valid1_5d0.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_valid1_5d0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_valid1_5d0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_valid1_5d0.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxValidLrSn: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxValidLrRangeRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canTxValidLrRange: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxValidLrPower: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxValidLrAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_valid1_5d0 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_valid1_5d0.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxValidLrSn;

  /** @type {?|undefined} */
  this.canTxValidLrRangeRate;

  /** @type {?|undefined} */
  this.canTxValidLrRange;

  /** @type {?|undefined} */
  this.canTxValidLrPower;

  /** @type {?|undefined} */
  this.canTxValidLrAngle;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_valid1_5d0.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0}
 */
proto.apollo.drivers.Esr_valid1_5d0.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_valid1_5d0();
  obj.canTxValidLrSn != null && jspb.Message.setField(msg, 1, obj.canTxValidLrSn);
  obj.canTxValidLrRangeRate != null && jspb.Message.setField(msg, 2, obj.canTxValidLrRangeRate);
  obj.canTxValidLrRange != null && jspb.Message.setField(msg, 3, obj.canTxValidLrRange);
  obj.canTxValidLrPower != null && jspb.Message.setField(msg, 4, obj.canTxValidLrPower);
  obj.canTxValidLrAngle != null && jspb.Message.setField(msg, 5, obj.canTxValidLrAngle);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0}
 */
proto.apollo.drivers.Esr_valid1_5d0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_valid1_5d0;
  return proto.apollo.drivers.Esr_valid1_5d0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_valid1_5d0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0}
 */
proto.apollo.drivers.Esr_valid1_5d0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxValidLrSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidLrRangeRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidLrRange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxValidLrPower(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidLrAngle(value);
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
proto.apollo.drivers.Esr_valid1_5d0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_valid1_5d0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_valid1_5d0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_valid1_5d0.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
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
 * optional int32 can_tx_valid_lr_sn = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.getCanTxValidLrSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.setCanTxValidLrSn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.clearCanTxValidLrSn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.hasCanTxValidLrSn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_tx_valid_lr_range_rate = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.getCanTxValidLrRangeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.setCanTxValidLrRangeRate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.clearCanTxValidLrRangeRate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.hasCanTxValidLrRangeRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_valid_lr_range = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.getCanTxValidLrRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.setCanTxValidLrRange = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.clearCanTxValidLrRange = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.hasCanTxValidLrRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_valid_lr_power = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.getCanTxValidLrPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.setCanTxValidLrPower = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.clearCanTxValidLrPower = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.hasCanTxValidLrPower = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double can_tx_valid_lr_angle = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.getCanTxValidLrAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.setCanTxValidLrAngle = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid1_5d0} returns this
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.clearCanTxValidLrAngle = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid1_5d0.prototype.hasCanTxValidLrAngle = function() {
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
proto.apollo.drivers.Esr_valid2_5d1.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_valid2_5d1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_valid2_5d1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_valid2_5d1.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxValidMrSn: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxValidMrRangeRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canTxValidMrRange: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxValidMrPower: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxValidMrAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_valid2_5d1 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_valid2_5d1.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxValidMrSn;

  /** @type {?|undefined} */
  this.canTxValidMrRangeRate;

  /** @type {?|undefined} */
  this.canTxValidMrRange;

  /** @type {?|undefined} */
  this.canTxValidMrPower;

  /** @type {?|undefined} */
  this.canTxValidMrAngle;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_valid2_5d1.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1}
 */
proto.apollo.drivers.Esr_valid2_5d1.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_valid2_5d1();
  obj.canTxValidMrSn != null && jspb.Message.setField(msg, 1, obj.canTxValidMrSn);
  obj.canTxValidMrRangeRate != null && jspb.Message.setField(msg, 2, obj.canTxValidMrRangeRate);
  obj.canTxValidMrRange != null && jspb.Message.setField(msg, 3, obj.canTxValidMrRange);
  obj.canTxValidMrPower != null && jspb.Message.setField(msg, 4, obj.canTxValidMrPower);
  obj.canTxValidMrAngle != null && jspb.Message.setField(msg, 5, obj.canTxValidMrAngle);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1}
 */
proto.apollo.drivers.Esr_valid2_5d1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_valid2_5d1;
  return proto.apollo.drivers.Esr_valid2_5d1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_valid2_5d1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1}
 */
proto.apollo.drivers.Esr_valid2_5d1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxValidMrSn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidMrRangeRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidMrRange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxValidMrPower(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxValidMrAngle(value);
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
proto.apollo.drivers.Esr_valid2_5d1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_valid2_5d1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_valid2_5d1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_valid2_5d1.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
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
 * optional int32 can_tx_valid_mr_sn = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.getCanTxValidMrSn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.setCanTxValidMrSn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.clearCanTxValidMrSn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.hasCanTxValidMrSn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_tx_valid_mr_range_rate = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.getCanTxValidMrRangeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.setCanTxValidMrRangeRate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.clearCanTxValidMrRangeRate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.hasCanTxValidMrRangeRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_valid_mr_range = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.getCanTxValidMrRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.setCanTxValidMrRange = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.clearCanTxValidMrRange = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.hasCanTxValidMrRange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_valid_mr_power = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.getCanTxValidMrPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.setCanTxValidMrPower = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.clearCanTxValidMrPower = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.hasCanTxValidMrPower = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double can_tx_valid_mr_angle = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.getCanTxValidMrAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.setCanTxValidMrAngle = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_valid2_5d1} returns this
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.clearCanTxValidMrAngle = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_valid2_5d1.prototype.hasCanTxValidMrAngle = function() {
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
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Acm_inst_resp_7e4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Acm_inst_resp_7e4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Acm_inst_resp_7e4.toObject = function(includeInstance, msg) {
  var f, obj = {
    data7: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    data6: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    data5: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    data4: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    data3: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    rtnCmdCounter: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    commandReturnCode: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    pid: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Acm_inst_resp_7e4 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Acm_inst_resp_7e4.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.data7;

  /** @type {?|undefined} */
  this.data6;

  /** @type {?|undefined} */
  this.data5;

  /** @type {?|undefined} */
  this.data4;

  /** @type {?|undefined} */
  this.data3;

  /** @type {?|undefined} */
  this.rtnCmdCounter;

  /** @type {?|undefined} */
  this.commandReturnCode;

  /** @type {?|undefined} */
  this.pid;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Acm_inst_resp_7e4.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Acm_inst_resp_7e4();
  obj.data7 != null && jspb.Message.setField(msg, 1, obj.data7);
  obj.data6 != null && jspb.Message.setField(msg, 2, obj.data6);
  obj.data5 != null && jspb.Message.setField(msg, 3, obj.data5);
  obj.data4 != null && jspb.Message.setField(msg, 4, obj.data4);
  obj.data3 != null && jspb.Message.setField(msg, 5, obj.data3);
  obj.rtnCmdCounter != null && jspb.Message.setField(msg, 6, obj.rtnCmdCounter);
  obj.commandReturnCode != null && jspb.Message.setField(msg, 7, obj.commandReturnCode);
  obj.pid != null && jspb.Message.setField(msg, 8, obj.pid);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Acm_inst_resp_7e4;
  return proto.apollo.drivers.Acm_inst_resp_7e4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Acm_inst_resp_7e4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setData7(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setData6(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setData5(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setData4(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setData3(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRtnCmdCounter(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommandReturnCode(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPid(value);
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
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Acm_inst_resp_7e4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Acm_inst_resp_7e4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Acm_inst_resp_7e4.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional int32 data_7 = 1;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getData7 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setData7 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearData7 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasData7 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 data_6 = 2;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getData6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setData6 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearData6 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasData6 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 data_5 = 3;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getData5 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setData5 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearData5 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasData5 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 data_4 = 4;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getData4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setData4 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearData4 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasData4 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 data_3 = 5;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getData3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setData3 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearData3 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasData3 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 rtn_cmd_counter = 6;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getRtnCmdCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setRtnCmdCounter = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearRtnCmdCounter = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasRtnCmdCounter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 command_return_code = 7;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getCommandReturnCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setCommandReturnCode = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearCommandReturnCode = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasCommandReturnCode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 pid = 8;
 * @return {number}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.setPid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Acm_inst_resp_7e4} returns this
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.clearPid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Acm_inst_resp_7e4.prototype.hasPid = function() {
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
proto.apollo.drivers.Vehicle2_4f1.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle2_4f1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle2_4f1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle2_4f1.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxVolvoShortTrackRoc: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    canRxMrOnlyTransmit: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canRxLrOnlyTransmit: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canRxHighYawAngle: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canRxClearFaults: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canRxUseAngleMisalignment: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canRxTurnSignalStatus: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canRxBlockageDisable: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canRxVehicleSpeedValidity: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canRxMmrUpsideDown: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    canRxWiperStatus: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canRxRawDataEnable: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    canRxRadarCmdRadiate: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    canRxGroupingMode: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    canRxMaximumTracks: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    canRxLateralMountingOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f,
    canRxAngleMisalignment: (f = jspb.Message.getOptionalFloatingPointField(msg, 17)) == null ? undefined : f,
    canRxScanIndexAck: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle2_4f1 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle2_4f1.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxVolvoShortTrackRoc;

  /** @type {?|undefined} */
  this.canRxMrOnlyTransmit;

  /** @type {?|undefined} */
  this.canRxLrOnlyTransmit;

  /** @type {?|undefined} */
  this.canRxHighYawAngle;

  /** @type {?|undefined} */
  this.canRxClearFaults;

  /** @type {?|undefined} */
  this.canRxUseAngleMisalignment;

  /** @type {?|undefined} */
  this.canRxTurnSignalStatus;

  /** @type {?|undefined} */
  this.canRxBlockageDisable;

  /** @type {?|undefined} */
  this.canRxVehicleSpeedValidity;

  /** @type {?|undefined} */
  this.canRxMmrUpsideDown;

  /** @type {?|undefined} */
  this.canRxWiperStatus;

  /** @type {?|undefined} */
  this.canRxRawDataEnable;

  /** @type {?|undefined} */
  this.canRxRadarCmdRadiate;

  /** @type {?|undefined} */
  this.canRxGroupingMode;

  /** @type {?|undefined} */
  this.canRxMaximumTracks;

  /** @type {?|undefined} */
  this.canRxLateralMountingOffset;

  /** @type {?|undefined} */
  this.canRxAngleMisalignment;

  /** @type {?|undefined} */
  this.canRxScanIndexAck;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle2_4f1.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle2_4f1}
 */
proto.apollo.drivers.Vehicle2_4f1.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle2_4f1();
  obj.canRxVolvoShortTrackRoc != null && jspb.Message.setField(msg, 1, obj.canRxVolvoShortTrackRoc);
  obj.canRxMrOnlyTransmit != null && jspb.Message.setField(msg, 2, obj.canRxMrOnlyTransmit);
  obj.canRxLrOnlyTransmit != null && jspb.Message.setField(msg, 3, obj.canRxLrOnlyTransmit);
  obj.canRxHighYawAngle != null && jspb.Message.setField(msg, 4, obj.canRxHighYawAngle);
  obj.canRxClearFaults != null && jspb.Message.setField(msg, 5, obj.canRxClearFaults);
  obj.canRxUseAngleMisalignment != null && jspb.Message.setField(msg, 6, obj.canRxUseAngleMisalignment);
  obj.canRxTurnSignalStatus != null && jspb.Message.setField(msg, 7, obj.canRxTurnSignalStatus);
  obj.canRxBlockageDisable != null && jspb.Message.setField(msg, 8, obj.canRxBlockageDisable);
  obj.canRxVehicleSpeedValidity != null && jspb.Message.setField(msg, 9, obj.canRxVehicleSpeedValidity);
  obj.canRxMmrUpsideDown != null && jspb.Message.setField(msg, 10, obj.canRxMmrUpsideDown);
  obj.canRxWiperStatus != null && jspb.Message.setField(msg, 11, obj.canRxWiperStatus);
  obj.canRxRawDataEnable != null && jspb.Message.setField(msg, 12, obj.canRxRawDataEnable);
  obj.canRxRadarCmdRadiate != null && jspb.Message.setField(msg, 13, obj.canRxRadarCmdRadiate);
  obj.canRxGroupingMode != null && jspb.Message.setField(msg, 14, obj.canRxGroupingMode);
  obj.canRxMaximumTracks != null && jspb.Message.setField(msg, 15, obj.canRxMaximumTracks);
  obj.canRxLateralMountingOffset != null && jspb.Message.setField(msg, 16, obj.canRxLateralMountingOffset);
  obj.canRxAngleMisalignment != null && jspb.Message.setField(msg, 17, obj.canRxAngleMisalignment);
  obj.canRxScanIndexAck != null && jspb.Message.setField(msg, 18, obj.canRxScanIndexAck);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle2_4f1}
 */
proto.apollo.drivers.Vehicle2_4f1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle2_4f1;
  return proto.apollo.drivers.Vehicle2_4f1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle2_4f1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle2_4f1}
 */
proto.apollo.drivers.Vehicle2_4f1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxVolvoShortTrackRoc(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType} */ (reader.readEnum());
      msg.setCanRxMrOnlyTransmit(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType} */ (reader.readEnum());
      msg.setCanRxLrOnlyTransmit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxHighYawAngle(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType} */ (reader.readEnum());
      msg.setCanRxClearFaults(value);
      break;
    case 6:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType} */ (reader.readEnum());
      msg.setCanRxUseAngleMisalignment(value);
      break;
    case 7:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType} */ (reader.readEnum());
      msg.setCanRxTurnSignalStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType} */ (reader.readEnum());
      msg.setCanRxBlockageDisable(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType} */ (reader.readEnum());
      msg.setCanRxVehicleSpeedValidity(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType} */ (reader.readEnum());
      msg.setCanRxMmrUpsideDown(value);
      break;
    case 11:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType} */ (reader.readEnum());
      msg.setCanRxWiperStatus(value);
      break;
    case 12:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType} */ (reader.readEnum());
      msg.setCanRxRawDataEnable(value);
      break;
    case 13:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType} */ (reader.readEnum());
      msg.setCanRxRadarCmdRadiate(value);
      break;
    case 14:
      var value = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType} */ (reader.readEnum());
      msg.setCanRxGroupingMode(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxMaximumTracks(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxLateralMountingOffset(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxAngleMisalignment(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxScanIndexAck(value);
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
proto.apollo.drivers.Vehicle2_4f1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle2_4f1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle2_4f1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle2_4f1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType = {
  CAN_RX_MR_ONLY_TRANSMIT_OFF: 0,
  CAN_RX_MR_ONLY_TRANSMIT_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType = {
  CAN_RX_LR_ONLY_TRANSMIT_OFF: 0,
  CAN_RX_LR_ONLY_TRANSMIT_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType = {
  CAN_RX_CLEAR_FAULTS_OFF: 0,
  CAN_RX_CLEAR_FAULTS_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType = {
  CAN_RX_USE_ANGLE_MISALIGNMENT_OFF: 0,
  CAN_RX_USE_ANGLE_MISALIGNMENT_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType = {
  CAN_RX_TURN_SIGNAL_STATUS_OFF: 0,
  CAN_RX_TURN_SIGNAL_STATUS_LEFT: 1,
  CAN_RX_TURN_SIGNAL_STATUS_RIGHT: 2,
  CAN_RX_TURN_SIGNAL_STATUS_INVALID_3: 3
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType = {
  CAN_RX_BLOCKAGE_DISABLE_ENABLED: 0,
  CAN_RX_BLOCKAGE_DISABLE_DISABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType = {
  CAN_RX_VEHICLE_SPEED_VALIDITY_INVALID: 0,
  CAN_RX_VEHICLE_SPEED_VALIDITY_VALID: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType = {
  CAN_RX_MMR_UPSIDE_DOWN_RIGHT_SIDE_UP: 0,
  CAN_RX_MMR_UPSIDE_DOWN_UPSIDE_DOWN: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType = {
  CAN_RX_WIPER_STATUS_OFF: 0,
  CAN_RX_WIPER_STATUS_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType = {
  CAN_RX_RAW_DATA_ENABLE_FILTERED: 0,
  CAN_RX_RAW_DATA_ENABLE_RAW: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType = {
  CAN_RX_RADAR_CMD_RADIATE_OFF: 0,
  CAN_RX_RADAR_CMD_RADIATE_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType = {
  CAN_RX_GROUPING_MODE_NO_GROUPING: 0,
  CAN_RX_GROUPING_MODE_GROUP_MOVING_ONLY: 1,
  CAN_RX_GROUPING_MODE_GROUP_STATIONARY_ONLY: 2,
  CAN_RX_GROUPING_MODE_GROUP_MOVING_STATIONARY: 3
};

/**
 * optional double can_rx_volvo_short_track_roc = 1;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxVolvoShortTrackRoc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxVolvoShortTrackRoc = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxVolvoShortTrackRoc = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxVolvoShortTrackRoc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_rx_mr_only_transmitType can_rx_mr_only_transmit = 2;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxMrOnlyTransmit = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mr_only_transmitType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxMrOnlyTransmit = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxMrOnlyTransmit = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxMrOnlyTransmit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Can_rx_lr_only_transmitType can_rx_lr_only_transmit = 3;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxLrOnlyTransmit = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_lr_only_transmitType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxLrOnlyTransmit = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxLrOnlyTransmit = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxLrOnlyTransmit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_rx_high_yaw_angle = 4;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxHighYawAngle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxHighYawAngle = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxHighYawAngle = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxHighYawAngle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Can_rx_clear_faultsType can_rx_clear_faults = 5;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxClearFaults = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_clear_faultsType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxClearFaults = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxClearFaults = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxClearFaults = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Can_rx_use_angle_misalignmentType can_rx_use_angle_misalignment = 6;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxUseAngleMisalignment = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_use_angle_misalignmentType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxUseAngleMisalignment = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxUseAngleMisalignment = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxUseAngleMisalignment = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Can_rx_turn_signal_statusType can_rx_turn_signal_status = 7;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxTurnSignalStatus = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_turn_signal_statusType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxTurnSignalStatus = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxTurnSignalStatus = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxTurnSignalStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Can_rx_blockage_disableType can_rx_blockage_disable = 8;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxBlockageDisable = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_blockage_disableType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxBlockageDisable = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxBlockageDisable = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxBlockageDisable = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Can_rx_vehicle_speed_validityType can_rx_vehicle_speed_validity = 9;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxVehicleSpeedValidity = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_vehicle_speed_validityType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxVehicleSpeedValidity = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxVehicleSpeedValidity = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxVehicleSpeedValidity = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Can_rx_mmr_upside_downType can_rx_mmr_upside_down = 10;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxMmrUpsideDown = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_mmr_upside_downType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxMmrUpsideDown = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxMmrUpsideDown = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxMmrUpsideDown = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Can_rx_wiper_statusType can_rx_wiper_status = 11;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxWiperStatus = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_wiper_statusType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxWiperStatus = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxWiperStatus = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxWiperStatus = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Can_rx_raw_data_enableType can_rx_raw_data_enable = 12;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxRawDataEnable = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_raw_data_enableType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxRawDataEnable = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxRawDataEnable = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxRawDataEnable = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Can_rx_radar_cmd_radiateType can_rx_radar_cmd_radiate = 13;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxRadarCmdRadiate = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_radar_cmd_radiateType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxRadarCmdRadiate = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxRadarCmdRadiate = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxRadarCmdRadiate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Can_rx_grouping_modeType can_rx_grouping_mode = 14;
 * @return {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxGroupingMode = function() {
  return /** @type {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle2_4f1.Can_rx_grouping_modeType} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxGroupingMode = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxGroupingMode = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxGroupingMode = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 can_rx_maximum_tracks = 15;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxMaximumTracks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxMaximumTracks = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxMaximumTracks = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxMaximumTracks = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double can_rx_lateral_mounting_offset = 16;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxLateralMountingOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxLateralMountingOffset = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxLateralMountingOffset = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxLateralMountingOffset = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional double can_rx_angle_misalignment = 17;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxAngleMisalignment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxAngleMisalignment = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxAngleMisalignment = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxAngleMisalignment = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 can_rx_scan_index_ack = 18;
 * @return {number}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.getCanRxScanIndexAck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.setCanRxScanIndexAck = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle2_4f1} returns this
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.clearCanRxScanIndexAck = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle2_4f1.prototype.hasCanRxScanIndexAck = function() {
  return jspb.Message.getField(this, 18) != null;
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
proto.apollo.drivers.Vehicle1_4f0.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle1_4f0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle1_4f0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle1_4f0.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxSteeringAngleValidity: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canRxSteeringAngleRate: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canRxSteeringAngleSign: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canRxSteeringAngleRateSign: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canRxSteeringAngle: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canRxRadiusCurvature: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canRxYawRateValidity: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canRxYawRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    canRxVehicleSpeedDirection: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canRxVehicleSpeed: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle1_4f0 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle1_4f0.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxSteeringAngleValidity;

  /** @type {?|undefined} */
  this.canRxSteeringAngleRate;

  /** @type {?|undefined} */
  this.canRxSteeringAngleSign;

  /** @type {?|undefined} */
  this.canRxSteeringAngleRateSign;

  /** @type {?|undefined} */
  this.canRxSteeringAngle;

  /** @type {?|undefined} */
  this.canRxRadiusCurvature;

  /** @type {?|undefined} */
  this.canRxYawRateValidity;

  /** @type {?|undefined} */
  this.canRxYawRate;

  /** @type {?|undefined} */
  this.canRxVehicleSpeedDirection;

  /** @type {?|undefined} */
  this.canRxVehicleSpeed;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle1_4f0.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle1_4f0}
 */
proto.apollo.drivers.Vehicle1_4f0.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle1_4f0();
  obj.canRxSteeringAngleValidity != null && jspb.Message.setField(msg, 1, obj.canRxSteeringAngleValidity);
  obj.canRxSteeringAngleRate != null && jspb.Message.setField(msg, 2, obj.canRxSteeringAngleRate);
  obj.canRxSteeringAngleSign != null && jspb.Message.setField(msg, 3, obj.canRxSteeringAngleSign);
  obj.canRxSteeringAngleRateSign != null && jspb.Message.setField(msg, 4, obj.canRxSteeringAngleRateSign);
  obj.canRxSteeringAngle != null && jspb.Message.setField(msg, 5, obj.canRxSteeringAngle);
  obj.canRxRadiusCurvature != null && jspb.Message.setField(msg, 6, obj.canRxRadiusCurvature);
  obj.canRxYawRateValidity != null && jspb.Message.setField(msg, 7, obj.canRxYawRateValidity);
  obj.canRxYawRate != null && jspb.Message.setField(msg, 8, obj.canRxYawRate);
  obj.canRxVehicleSpeedDirection != null && jspb.Message.setField(msg, 9, obj.canRxVehicleSpeedDirection);
  obj.canRxVehicleSpeed != null && jspb.Message.setField(msg, 10, obj.canRxVehicleSpeed);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle1_4f0}
 */
proto.apollo.drivers.Vehicle1_4f0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle1_4f0;
  return proto.apollo.drivers.Vehicle1_4f0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle1_4f0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle1_4f0}
 */
proto.apollo.drivers.Vehicle1_4f0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType} */ (reader.readEnum());
      msg.setCanRxSteeringAngleValidity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxSteeringAngleRate(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType} */ (reader.readEnum());
      msg.setCanRxSteeringAngleSign(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType} */ (reader.readEnum());
      msg.setCanRxSteeringAngleRateSign(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxSteeringAngle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxRadiusCurvature(value);
      break;
    case 7:
      var value = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType} */ (reader.readEnum());
      msg.setCanRxYawRateValidity(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxYawRate(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType} */ (reader.readEnum());
      msg.setCanRxVehicleSpeedDirection(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxVehicleSpeed(value);
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
proto.apollo.drivers.Vehicle1_4f0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle1_4f0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle1_4f0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle1_4f0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType = {
  CAN_RX_STEERING_ANGLE_VALIDITY_INVALID: 0,
  CAN_RX_STEERING_ANGLE_VALIDITY_VALID: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType = {
  CAN_RX_STEERING_ANGLE_SIGN_COUNTERCLOCKWISE: 0,
  CAN_RX_STEERING_ANGLE_SIGN_CLOCKWISE: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType = {
  CAN_RX_STEERING_ANGLE_RATE_SIGN_COUNTERCLOCKWISE: 0,
  CAN_RX_STEERING_ANGLE_RATE_SIGN_CLOCKWISE: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType = {
  CAN_RX_YAW_RATE_VALIDITY_INVALID: 0,
  CAN_RX_YAW_RATE_VALIDITY_VALID: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType = {
  CAN_RX_VEHICLE_SPEED_DIRECTION_FORWARD: 0,
  CAN_RX_VEHICLE_SPEED_DIRECTION_REVERSE: 1
};

/**
 * optional Can_rx_steering_angle_validityType can_rx_steering_angle_validity = 1;
 * @return {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxSteeringAngleValidity = function() {
  return /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_validityType} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxSteeringAngleValidity = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxSteeringAngleValidity = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxSteeringAngleValidity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_rx_steering_angle_rate = 2;
 * @return {number}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxSteeringAngleRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxSteeringAngleRate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxSteeringAngleRate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxSteeringAngleRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Can_rx_steering_angle_signType can_rx_steering_angle_sign = 3;
 * @return {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxSteeringAngleSign = function() {
  return /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_signType} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxSteeringAngleSign = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxSteeringAngleSign = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxSteeringAngleSign = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Can_rx_steering_angle_rate_signType can_rx_steering_angle_rate_sign = 4;
 * @return {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxSteeringAngleRateSign = function() {
  return /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_steering_angle_rate_signType} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxSteeringAngleRateSign = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxSteeringAngleRateSign = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxSteeringAngleRateSign = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_rx_steering_angle = 5;
 * @return {number}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxSteeringAngle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxSteeringAngle = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxSteeringAngle = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxSteeringAngle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_rx_radius_curvature = 6;
 * @return {number}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxRadiusCurvature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxRadiusCurvature = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxRadiusCurvature = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxRadiusCurvature = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Can_rx_yaw_rate_validityType can_rx_yaw_rate_validity = 7;
 * @return {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxYawRateValidity = function() {
  return /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_yaw_rate_validityType} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxYawRateValidity = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxYawRateValidity = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxYawRateValidity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double can_rx_yaw_rate = 8;
 * @return {number}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxYawRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxYawRate = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxYawRate = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxYawRate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Can_rx_vehicle_speed_directionType can_rx_vehicle_speed_direction = 9;
 * @return {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxVehicleSpeedDirection = function() {
  return /** @type {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle1_4f0.Can_rx_vehicle_speed_directionType} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxVehicleSpeedDirection = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxVehicleSpeedDirection = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxVehicleSpeedDirection = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double can_rx_vehicle_speed = 10;
 * @return {number}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.getCanRxVehicleSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.setCanRxVehicleSpeed = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle1_4f0} returns this
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.clearCanRxVehicleSpeed = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle1_4f0.prototype.hasCanRxVehicleSpeed = function() {
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
proto.apollo.drivers.Esr_sim1_5c0.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_sim1_5c0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_sim1_5c0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_sim1_5c0.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxSimTrackId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canRxSimStatus: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canRxSimRangeRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canRxSimRangeAccel: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    canRxSimRange: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canRxSimLatRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    canRxSimLatPos: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    canRxSimFunction: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canRxSimAngle: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_sim1_5c0 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_sim1_5c0.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxSimTrackId;

  /** @type {?|undefined} */
  this.canRxSimStatus;

  /** @type {?|undefined} */
  this.canRxSimRangeRate;

  /** @type {?|undefined} */
  this.canRxSimRangeAccel;

  /** @type {?|undefined} */
  this.canRxSimRange;

  /** @type {?|undefined} */
  this.canRxSimLatRate;

  /** @type {?|undefined} */
  this.canRxSimLatPos;

  /** @type {?|undefined} */
  this.canRxSimFunction;

  /** @type {?|undefined} */
  this.canRxSimAngle;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_sim1_5c0.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0}
 */
proto.apollo.drivers.Esr_sim1_5c0.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_sim1_5c0();
  obj.canRxSimTrackId != null && jspb.Message.setField(msg, 1, obj.canRxSimTrackId);
  obj.canRxSimStatus != null && jspb.Message.setField(msg, 2, obj.canRxSimStatus);
  obj.canRxSimRangeRate != null && jspb.Message.setField(msg, 3, obj.canRxSimRangeRate);
  obj.canRxSimRangeAccel != null && jspb.Message.setField(msg, 4, obj.canRxSimRangeAccel);
  obj.canRxSimRange != null && jspb.Message.setField(msg, 5, obj.canRxSimRange);
  obj.canRxSimLatRate != null && jspb.Message.setField(msg, 6, obj.canRxSimLatRate);
  obj.canRxSimLatPos != null && jspb.Message.setField(msg, 7, obj.canRxSimLatPos);
  obj.canRxSimFunction != null && jspb.Message.setField(msg, 8, obj.canRxSimFunction);
  obj.canRxSimAngle != null && jspb.Message.setField(msg, 9, obj.canRxSimAngle);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0}
 */
proto.apollo.drivers.Esr_sim1_5c0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_sim1_5c0;
  return proto.apollo.drivers.Esr_sim1_5c0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_sim1_5c0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0}
 */
proto.apollo.drivers.Esr_sim1_5c0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType} */ (reader.readEnum());
      msg.setCanRxSimTrackId(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType} */ (reader.readEnum());
      msg.setCanRxSimStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSimRangeRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSimRangeAccel(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxSimRange(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSimLatRate(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSimLatPos(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType} */ (reader.readEnum());
      msg.setCanRxSimFunction(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSimAngle(value);
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
proto.apollo.drivers.Esr_sim1_5c0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_sim1_5c0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_sim1_5c0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_sim1_5c0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType} */ (jspb.Message.getField(message, 2));
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType} */ (jspb.Message.getField(message, 8));
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
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType = {
  CAN_RX_SIM_TRACK_ID_NO_TARGET: 0,
  CAN_RX_SIM_TRACK_ID_TARGET_1: 1,
  CAN_RX_SIM_TRACK_ID_TARGET_2: 2
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType = {
  CAN_RX_SIM_STATUS_INVALID: 0,
  CAN_RX_SIM_STATUS_NEW: 1,
  CAN_RX_SIM_STATUS_UPDATED: 2,
  CAN_RX_SIM_STATUS_COASTED: 3
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType = {
  CAN_RX_SIM_FUNCTION_ACC: 0,
  CAN_RX_SIM_FUNCTION_RI: 1,
  CAN_RX_SIM_FUNCTION_FCW_MOVE: 2,
  CAN_RX_SIM_FUNCTION_FCW_STAT: 3,
  CAN_RX_SIM_FUNCTION_CMBB_MOVE: 4,
  CAN_RX_SIM_FUNCTION_CMBB_STAT: 5,
  CAN_RX_SIM_FUNCTION_ALL_MOVING_ACC_FCW_CMBB: 6,
  CAN_RX_SIM_FUNCTION_ALL_STAT_RI_FCW_CMBB: 7
};

/**
 * optional Can_rx_sim_track_idType can_rx_sim_track_id = 1;
 * @return {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimTrackId = function() {
  return /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_track_idType} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimTrackId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimTrackId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimTrackId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_rx_sim_statusType can_rx_sim_status = 2;
 * @return {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimStatus = function() {
  return /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_statusType} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_rx_sim_range_rate = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimRangeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimRangeRate = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimRangeRate = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimRangeRate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double can_rx_sim_range_accel = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimRangeAccel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimRangeAccel = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimRangeAccel = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimRangeAccel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_rx_sim_range = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimRange = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimRange = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimRange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double can_rx_sim_lat_rate = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimLatRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimLatRate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimLatRate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimLatRate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double can_rx_sim_lat_pos = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimLatPos = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimLatPos = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimLatPos = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimLatPos = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Can_rx_sim_functionType can_rx_sim_function = 8;
 * @return {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimFunction = function() {
  return /** @type {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_sim1_5c0.Can_rx_sim_functionType} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimFunction = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimFunction = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimFunction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double can_rx_sim_angle = 9;
 * @return {number}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.getCanRxSimAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.setCanRxSimAngle = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_sim1_5c0} returns this
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.clearCanRxSimAngle = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_sim1_5c0.prototype.hasCanRxSimAngle = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.apollo.drivers.Esr_status1_4e0.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status1_4e0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status1_4e0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status1_4e0.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxDspTimestamp: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    canTxCommError: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    canTxYawRateCalc: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canTxVehicleSpeedCalc: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    canTxScanIndex: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxRollingCount1: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxRadiusCurvatureCalc: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status1_4e0 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status1_4e0.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxDspTimestamp;

  /** @type {?|undefined} */
  this.canTxCommError;

  /** @type {?|undefined} */
  this.canTxYawRateCalc;

  /** @type {?|undefined} */
  this.canTxVehicleSpeedCalc;

  /** @type {?|undefined} */
  this.canTxScanIndex;

  /** @type {?|undefined} */
  this.canTxRollingCount1;

  /** @type {?|undefined} */
  this.canTxRadiusCurvatureCalc;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status1_4e0.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status1_4e0}
 */
proto.apollo.drivers.Esr_status1_4e0.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status1_4e0();
  obj.canTxDspTimestamp != null && jspb.Message.setField(msg, 1, obj.canTxDspTimestamp);
  obj.canTxCommError != null && jspb.Message.setField(msg, 2, obj.canTxCommError);
  obj.canTxYawRateCalc != null && jspb.Message.setField(msg, 3, obj.canTxYawRateCalc);
  obj.canTxVehicleSpeedCalc != null && jspb.Message.setField(msg, 4, obj.canTxVehicleSpeedCalc);
  obj.canTxScanIndex != null && jspb.Message.setField(msg, 5, obj.canTxScanIndex);
  obj.canTxRollingCount1 != null && jspb.Message.setField(msg, 6, obj.canTxRollingCount1);
  obj.canTxRadiusCurvatureCalc != null && jspb.Message.setField(msg, 7, obj.canTxRadiusCurvatureCalc);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status1_4e0}
 */
proto.apollo.drivers.Esr_status1_4e0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status1_4e0;
  return proto.apollo.drivers.Esr_status1_4e0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status1_4e0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status1_4e0}
 */
proto.apollo.drivers.Esr_status1_4e0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxDspTimestamp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanTxCommError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxYawRateCalc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxVehicleSpeedCalc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxScanIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxRollingCount1(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxRadiusCurvatureCalc(value);
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
proto.apollo.drivers.Esr_status1_4e0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status1_4e0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status1_4e0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status1_4e0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
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
 * optional double can_tx_dsp_timestamp = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxDspTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxDspTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxDspTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxDspTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool can_tx_comm_error = 2;
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxCommError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxCommError = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxCommError = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxCommError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_tx_yaw_rate_calc = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxYawRateCalc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxYawRateCalc = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxYawRateCalc = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxYawRateCalc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double can_tx_vehicle_speed_calc = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxVehicleSpeedCalc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxVehicleSpeedCalc = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxVehicleSpeedCalc = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxVehicleSpeedCalc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_scan_index = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxScanIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxScanIndex = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxScanIndex = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxScanIndex = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_tx_rolling_count_1 = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxRollingCount1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxRollingCount1 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxRollingCount1 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxRollingCount1 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_tx_radius_curvature_calc = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.getCanTxRadiusCurvatureCalc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.setCanTxRadiusCurvatureCalc = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status1_4e0} returns this
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.clearCanTxRadiusCurvatureCalc = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status1_4e0.prototype.hasCanTxRadiusCurvatureCalc = function() {
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
proto.apollo.drivers.Esr_status2_4e1.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status2_4e1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status2_4e1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status2_4e1.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxYawRateBias: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    canTxVehSpdCompFactor: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canTxSwVersionDsp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxTemperature: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxRawDataMode: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxRangePerfError: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxOverheatError: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canTxMaximumTracksAck: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canTxInternalError: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canTxGroupingMode: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    canTxXcvrOperational: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canTxSteeringAngleAck: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    canTxRollingCount2: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status2_4e1 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status2_4e1.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxYawRateBias;

  /** @type {?|undefined} */
  this.canTxVehSpdCompFactor;

  /** @type {?|undefined} */
  this.canTxSwVersionDsp;

  /** @type {?|undefined} */
  this.canTxTemperature;

  /** @type {?|undefined} */
  this.canTxRawDataMode;

  /** @type {?|undefined} */
  this.canTxRangePerfError;

  /** @type {?|undefined} */
  this.canTxOverheatError;

  /** @type {?|undefined} */
  this.canTxMaximumTracksAck;

  /** @type {?|undefined} */
  this.canTxInternalError;

  /** @type {?|undefined} */
  this.canTxGroupingMode;

  /** @type {?|undefined} */
  this.canTxXcvrOperational;

  /** @type {?|undefined} */
  this.canTxSteeringAngleAck;

  /** @type {?|undefined} */
  this.canTxRollingCount2;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status2_4e1.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status2_4e1}
 */
proto.apollo.drivers.Esr_status2_4e1.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status2_4e1();
  obj.canTxYawRateBias != null && jspb.Message.setField(msg, 1, obj.canTxYawRateBias);
  obj.canTxVehSpdCompFactor != null && jspb.Message.setField(msg, 2, obj.canTxVehSpdCompFactor);
  obj.canTxSwVersionDsp != null && jspb.Message.setField(msg, 3, obj.canTxSwVersionDsp);
  obj.canTxTemperature != null && jspb.Message.setField(msg, 4, obj.canTxTemperature);
  obj.canTxRawDataMode != null && jspb.Message.setField(msg, 5, obj.canTxRawDataMode);
  obj.canTxRangePerfError != null && jspb.Message.setField(msg, 6, obj.canTxRangePerfError);
  obj.canTxOverheatError != null && jspb.Message.setField(msg, 7, obj.canTxOverheatError);
  obj.canTxMaximumTracksAck != null && jspb.Message.setField(msg, 8, obj.canTxMaximumTracksAck);
  obj.canTxInternalError != null && jspb.Message.setField(msg, 9, obj.canTxInternalError);
  obj.canTxGroupingMode != null && jspb.Message.setField(msg, 10, obj.canTxGroupingMode);
  obj.canTxXcvrOperational != null && jspb.Message.setField(msg, 11, obj.canTxXcvrOperational);
  obj.canTxSteeringAngleAck != null && jspb.Message.setField(msg, 12, obj.canTxSteeringAngleAck);
  obj.canTxRollingCount2 != null && jspb.Message.setField(msg, 13, obj.canTxRollingCount2);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status2_4e1}
 */
proto.apollo.drivers.Esr_status2_4e1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status2_4e1;
  return proto.apollo.drivers.Esr_status2_4e1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status2_4e1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status2_4e1}
 */
proto.apollo.drivers.Esr_status2_4e1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxYawRateBias(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanTxVehSpdCompFactor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSwVersionDsp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxTemperature(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType} */ (reader.readEnum());
      msg.setCanTxRawDataMode(value);
      break;
    case 6:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType} */ (reader.readEnum());
      msg.setCanTxRangePerfError(value);
      break;
    case 7:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType} */ (reader.readEnum());
      msg.setCanTxOverheatError(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxMaximumTracksAck(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType} */ (reader.readEnum());
      msg.setCanTxInternalError(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType} */ (reader.readEnum());
      msg.setCanTxGroupingMode(value);
      break;
    case 11:
      var value = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType} */ (reader.readEnum());
      msg.setCanTxXcvrOperational(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxSteeringAngleAck(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxRollingCount2(value);
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
proto.apollo.drivers.Esr_status2_4e1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status2_4e1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status2_4e1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status2_4e1.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType = {
  CAN_TX_RAW_DATA_MODE_FILTERED: 0,
  CAN_TX_RAW_DATA_MODE_RAW: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType = {
  CAN_TX_RANGE_PERF_ERROR_NOT_BLOCKED: 0,
  CAN_TX_RANGE_PERF_ERROR_BLOCKED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType = {
  CAN_TX_OVERHEAT_ERROR_NOT_OVERTEMP: 0,
  CAN_TX_OVERHEAT_ERROR_OVERTEMP: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType = {
  CAN_TX_INTERNAL_ERROR_NOT_FAILED: 0,
  CAN_TX_INTERNAL_ERROR_FAILED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType = {
  CAN_TX_GROUPING_MODE_NO_GROUPING: 0,
  CAN_TX_GROUPING_MODE_GROUP_MOVING_ONLY: 1,
  CAN_TX_GROUPING_MODE_GROUP_STATIONARY_ONLY: 2,
  CAN_TX_GROUPING_MODE_GROUP_MOVING_STATIONARY: 3
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType = {
  CAN_TX_XCVR_OPERATIONAL_OFF: 0,
  CAN_TX_XCVR_OPERATIONAL_ON: 1
};

/**
 * optional double can_tx_yaw_rate_bias = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxYawRateBias = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxYawRateBias = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxYawRateBias = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxYawRateBias = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_tx_veh_spd_comp_factor = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxVehSpdCompFactor = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxVehSpdCompFactor = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxVehSpdCompFactor = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxVehSpdCompFactor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_tx_sw_version_dsp = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxSwVersionDsp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxSwVersionDsp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxSwVersionDsp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxSwVersionDsp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_temperature = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxTemperature = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxTemperature = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxTemperature = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Can_tx_raw_data_modeType can_tx_raw_data_mode = 5;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxRawDataMode = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_raw_data_modeType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxRawDataMode = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxRawDataMode = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxRawDataMode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Can_tx_range_perf_errorType can_tx_range_perf_error = 6;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxRangePerfError = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_range_perf_errorType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxRangePerfError = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxRangePerfError = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxRangePerfError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Can_tx_overheat_errorType can_tx_overheat_error = 7;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxOverheatError = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_overheat_errorType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxOverheatError = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxOverheatError = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxOverheatError = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_tx_maximum_tracks_ack = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxMaximumTracksAck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxMaximumTracksAck = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxMaximumTracksAck = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxMaximumTracksAck = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Can_tx_internal_errorType can_tx_internal_error = 9;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxInternalError = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_internal_errorType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxInternalError = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxInternalError = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxInternalError = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Can_tx_grouping_modeType can_tx_grouping_mode = 10;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxGroupingMode = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_grouping_modeType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxGroupingMode = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxGroupingMode = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxGroupingMode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Can_tx_xcvr_operationalType can_tx_xcvr_operational = 11;
 * @return {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxXcvrOperational = function() {
  return /** @type {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.apollo.drivers.Esr_status2_4e1.Can_tx_xcvr_operationalType} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxXcvrOperational = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxXcvrOperational = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxXcvrOperational = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 can_tx_steering_angle_ack = 12;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxSteeringAngleAck = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxSteeringAngleAck = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxSteeringAngleAck = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxSteeringAngleAck = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 can_tx_rolling_count_2 = 13;
 * @return {number}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.getCanTxRollingCount2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.setCanTxRollingCount2 = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status2_4e1} returns this
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.clearCanTxRollingCount2 = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status2_4e1.prototype.hasCanTxRollingCount2 = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.apollo.drivers.Esr_status8_5e7.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status8_5e7.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status8_5e7} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status8_5e7.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxHistoryFault7: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxHistoryFault6: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxHistoryFault5: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxHistoryFault4: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxHistoryFault3: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxHistoryFault2: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxHistoryFault1: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canTxHistoryFault0: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status8_5e7 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status8_5e7.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxHistoryFault7;

  /** @type {?|undefined} */
  this.canTxHistoryFault6;

  /** @type {?|undefined} */
  this.canTxHistoryFault5;

  /** @type {?|undefined} */
  this.canTxHistoryFault4;

  /** @type {?|undefined} */
  this.canTxHistoryFault3;

  /** @type {?|undefined} */
  this.canTxHistoryFault2;

  /** @type {?|undefined} */
  this.canTxHistoryFault1;

  /** @type {?|undefined} */
  this.canTxHistoryFault0;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status8_5e7.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status8_5e7}
 */
proto.apollo.drivers.Esr_status8_5e7.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status8_5e7();
  obj.canTxHistoryFault7 != null && jspb.Message.setField(msg, 1, obj.canTxHistoryFault7);
  obj.canTxHistoryFault6 != null && jspb.Message.setField(msg, 2, obj.canTxHistoryFault6);
  obj.canTxHistoryFault5 != null && jspb.Message.setField(msg, 3, obj.canTxHistoryFault5);
  obj.canTxHistoryFault4 != null && jspb.Message.setField(msg, 4, obj.canTxHistoryFault4);
  obj.canTxHistoryFault3 != null && jspb.Message.setField(msg, 5, obj.canTxHistoryFault3);
  obj.canTxHistoryFault2 != null && jspb.Message.setField(msg, 6, obj.canTxHistoryFault2);
  obj.canTxHistoryFault1 != null && jspb.Message.setField(msg, 7, obj.canTxHistoryFault1);
  obj.canTxHistoryFault0 != null && jspb.Message.setField(msg, 8, obj.canTxHistoryFault0);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status8_5e7}
 */
proto.apollo.drivers.Esr_status8_5e7.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status8_5e7;
  return proto.apollo.drivers.Esr_status8_5e7.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status8_5e7} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status8_5e7}
 */
proto.apollo.drivers.Esr_status8_5e7.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault7(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault6(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault5(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault4(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault3(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault1(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxHistoryFault0(value);
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
proto.apollo.drivers.Esr_status8_5e7.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status8_5e7.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status8_5e7} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status8_5e7.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional int32 can_tx_history_fault_7 = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault7 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault7 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault7 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault7 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_history_fault_6 = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault6 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault6 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault6 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_tx_history_fault_5 = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault5 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault5 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault5 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault5 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_history_fault_4 = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault4 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault4 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault4 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_history_fault_3 = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault3 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault3 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault3 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_tx_history_fault_2 = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault2 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault2 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_tx_history_fault_1 = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault1 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault1 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_tx_history_fault_0 = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.getCanTxHistoryFault0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.setCanTxHistoryFault0 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status8_5e7} returns this
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.clearCanTxHistoryFault0 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status8_5e7.prototype.hasCanTxHistoryFault0 = function() {
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
proto.apollo.drivers.Esr_status7_5e6.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Esr_status7_5e6.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Esr_status7_5e6} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status7_5e6.toObject = function(includeInstance, msg) {
  var f, obj = {
    canTxActiveFault7: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canTxActiveFault6: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canTxActiveFault5: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canTxActiveFault4: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canTxActiveFault3: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canTxActiveFault2: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canTxActiveFault0: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canTxActiveFault1: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Esr_status7_5e6 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Esr_status7_5e6.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canTxActiveFault7;

  /** @type {?|undefined} */
  this.canTxActiveFault6;

  /** @type {?|undefined} */
  this.canTxActiveFault5;

  /** @type {?|undefined} */
  this.canTxActiveFault4;

  /** @type {?|undefined} */
  this.canTxActiveFault3;

  /** @type {?|undefined} */
  this.canTxActiveFault2;

  /** @type {?|undefined} */
  this.canTxActiveFault0;

  /** @type {?|undefined} */
  this.canTxActiveFault1;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Esr_status7_5e6.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Esr_status7_5e6}
 */
proto.apollo.drivers.Esr_status7_5e6.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Esr_status7_5e6();
  obj.canTxActiveFault7 != null && jspb.Message.setField(msg, 1, obj.canTxActiveFault7);
  obj.canTxActiveFault6 != null && jspb.Message.setField(msg, 2, obj.canTxActiveFault6);
  obj.canTxActiveFault5 != null && jspb.Message.setField(msg, 3, obj.canTxActiveFault5);
  obj.canTxActiveFault4 != null && jspb.Message.setField(msg, 4, obj.canTxActiveFault4);
  obj.canTxActiveFault3 != null && jspb.Message.setField(msg, 5, obj.canTxActiveFault3);
  obj.canTxActiveFault2 != null && jspb.Message.setField(msg, 6, obj.canTxActiveFault2);
  obj.canTxActiveFault0 != null && jspb.Message.setField(msg, 7, obj.canTxActiveFault0);
  obj.canTxActiveFault1 != null && jspb.Message.setField(msg, 8, obj.canTxActiveFault1);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Esr_status7_5e6}
 */
proto.apollo.drivers.Esr_status7_5e6.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Esr_status7_5e6;
  return proto.apollo.drivers.Esr_status7_5e6.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Esr_status7_5e6} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Esr_status7_5e6}
 */
proto.apollo.drivers.Esr_status7_5e6.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault7(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault6(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault5(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault4(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault3(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault0(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanTxActiveFault1(value);
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
proto.apollo.drivers.Esr_status7_5e6.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Esr_status7_5e6.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Esr_status7_5e6} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Esr_status7_5e6.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
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
};


/**
 * optional int32 can_tx_active_fault_7 = 1;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault7 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault7 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault7 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault7 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 can_tx_active_fault_6 = 2;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault6 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault6 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault6 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault6 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_tx_active_fault_5 = 3;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault5 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault5 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault5 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault5 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_tx_active_fault_4 = 4;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault4 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault4 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault4 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_tx_active_fault_3 = 5;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault3 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault3 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault3 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_tx_active_fault_2 = 6;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault2 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault2 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_tx_active_fault_0 = 7;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault0 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault0 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault0 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_tx_active_fault_1 = 8;
 * @return {number}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.getCanTxActiveFault1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.setCanTxActiveFault1 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Esr_status7_5e6} returns this
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.clearCanTxActiveFault1 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Esr_status7_5e6.prototype.hasCanTxActiveFault1 = function() {
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
proto.apollo.drivers.Vehicle3_5f2.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle3_5f2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle3_5f2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle3_5f2.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxServAlignUpdatesNeed: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canRxServAlignType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canRxServAlignEnable: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canRxAalignAvgCtrTotal: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    canRxAutoAlignConverged: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canRxAutoAlignDisable: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canRxAngleMountingOffset: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    canRxWheelSlip: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canRxRadarHeight: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canRxRadarFovMr: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    canRxRadarFovLr: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    canRxLongAccelValidity: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    canRxLongAccel: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
    canRxLatAccelValidity: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    canRxLatAccel: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle3_5f2 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle3_5f2.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxServAlignUpdatesNeed;

  /** @type {?|undefined} */
  this.canRxServAlignType;

  /** @type {?|undefined} */
  this.canRxServAlignEnable;

  /** @type {?|undefined} */
  this.canRxAalignAvgCtrTotal;

  /** @type {?|undefined} */
  this.canRxAutoAlignConverged;

  /** @type {?|undefined} */
  this.canRxAutoAlignDisable;

  /** @type {?|undefined} */
  this.canRxAngleMountingOffset;

  /** @type {?|undefined} */
  this.canRxWheelSlip;

  /** @type {?|undefined} */
  this.canRxRadarHeight;

  /** @type {?|undefined} */
  this.canRxRadarFovMr;

  /** @type {?|undefined} */
  this.canRxRadarFovLr;

  /** @type {?|undefined} */
  this.canRxLongAccelValidity;

  /** @type {?|undefined} */
  this.canRxLongAccel;

  /** @type {?|undefined} */
  this.canRxLatAccelValidity;

  /** @type {?|undefined} */
  this.canRxLatAccel;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle3_5f2.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle3_5f2}
 */
proto.apollo.drivers.Vehicle3_5f2.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle3_5f2();
  obj.canRxServAlignUpdatesNeed != null && jspb.Message.setField(msg, 1, obj.canRxServAlignUpdatesNeed);
  obj.canRxServAlignType != null && jspb.Message.setField(msg, 2, obj.canRxServAlignType);
  obj.canRxServAlignEnable != null && jspb.Message.setField(msg, 3, obj.canRxServAlignEnable);
  obj.canRxAalignAvgCtrTotal != null && jspb.Message.setField(msg, 4, obj.canRxAalignAvgCtrTotal);
  obj.canRxAutoAlignConverged != null && jspb.Message.setField(msg, 5, obj.canRxAutoAlignConverged);
  obj.canRxAutoAlignDisable != null && jspb.Message.setField(msg, 6, obj.canRxAutoAlignDisable);
  obj.canRxAngleMountingOffset != null && jspb.Message.setField(msg, 7, obj.canRxAngleMountingOffset);
  obj.canRxWheelSlip != null && jspb.Message.setField(msg, 8, obj.canRxWheelSlip);
  obj.canRxRadarHeight != null && jspb.Message.setField(msg, 9, obj.canRxRadarHeight);
  obj.canRxRadarFovMr != null && jspb.Message.setField(msg, 10, obj.canRxRadarFovMr);
  obj.canRxRadarFovLr != null && jspb.Message.setField(msg, 11, obj.canRxRadarFovLr);
  obj.canRxLongAccelValidity != null && jspb.Message.setField(msg, 12, obj.canRxLongAccelValidity);
  obj.canRxLongAccel != null && jspb.Message.setField(msg, 13, obj.canRxLongAccel);
  obj.canRxLatAccelValidity != null && jspb.Message.setField(msg, 14, obj.canRxLatAccelValidity);
  obj.canRxLatAccel != null && jspb.Message.setField(msg, 15, obj.canRxLatAccel);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle3_5f2}
 */
proto.apollo.drivers.Vehicle3_5f2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle3_5f2;
  return proto.apollo.drivers.Vehicle3_5f2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle3_5f2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle3_5f2}
 */
proto.apollo.drivers.Vehicle3_5f2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxServAlignUpdatesNeed(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType} */ (reader.readEnum());
      msg.setCanRxServAlignType(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType} */ (reader.readEnum());
      msg.setCanRxServAlignEnable(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxAalignAvgCtrTotal(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType} */ (reader.readEnum());
      msg.setCanRxAutoAlignConverged(value);
      break;
    case 6:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType} */ (reader.readEnum());
      msg.setCanRxAutoAlignDisable(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxAngleMountingOffset(value);
      break;
    case 8:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType} */ (reader.readEnum());
      msg.setCanRxWheelSlip(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxRadarHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxRadarFovMr(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxRadarFovLr(value);
      break;
    case 12:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType} */ (reader.readEnum());
      msg.setCanRxLongAccelValidity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxLongAccel(value);
      break;
    case 14:
      var value = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType} */ (reader.readEnum());
      msg.setCanRxLatAccelValidity(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxLatAccel(value);
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
proto.apollo.drivers.Vehicle3_5f2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle3_5f2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle3_5f2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle3_5f2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType} */ (jspb.Message.getField(message, 3));
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
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType} */ (jspb.Message.getField(message, 14));
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
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType = {
  CAN_RX_SERV_ALIGN_TYPE_AUTO_OR_DEALER: 0,
  CAN_RX_SERV_ALIGN_TYPE_VOLVO_SHORT_TRACK: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType = {
  CAN_RX_SERV_ALIGN_ENABLE_DISABLED: 0,
  CAN_RX_SERV_ALIGN_ENABLE_ENABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType = {
  CAN_RX_AUTO_ALIGN_CONVERGED_NOT_CONVERGED: 0,
  CAN_RX_AUTO_ALIGN_CONVERGED_CONVERGED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType = {
  CAN_RX_AUTO_ALIGN_DISABLE_ENABLED: 0,
  CAN_RX_AUTO_ALIGN_DISABLE_DISABLED: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType = {
  CAN_RX_WHEEL_SLIP_NO_CONTROL: 0,
  CAN_RX_WHEEL_SLIP_BRAKE_SLIP_CONTROL: 1,
  CAN_RX_WHEEL_SLIP_TRACTION_SLIP_CONTROL: 2,
  CAN_RX_WHEEL_SLIP_INVALID_3: 3
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType = {
  CAN_RX_LONG_ACCEL_VALIDITY_INVALID: 0,
  CAN_RX_LONG_ACCEL_VALIDITY_VALID: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType = {
  CAN_RX_LAT_ACCEL_VALIDITY_INVALID: 0,
  CAN_RX_LAT_ACCEL_VALIDITY_VALID: 1
};

/**
 * optional int32 can_rx_serv_align_updates_need = 1;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxServAlignUpdatesNeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxServAlignUpdatesNeed = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxServAlignUpdatesNeed = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxServAlignUpdatesNeed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Can_rx_serv_align_typeType can_rx_serv_align_type = 2;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxServAlignType = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_typeType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxServAlignType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxServAlignType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxServAlignType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Can_rx_serv_align_enableType can_rx_serv_align_enable = 3;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxServAlignEnable = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_serv_align_enableType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxServAlignEnable = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxServAlignEnable = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxServAlignEnable = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double can_rx_aalign_avg_ctr_total = 4;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxAalignAvgCtrTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxAalignAvgCtrTotal = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxAalignAvgCtrTotal = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxAalignAvgCtrTotal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Can_rx_auto_align_convergedType can_rx_auto_align_converged = 5;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxAutoAlignConverged = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_convergedType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxAutoAlignConverged = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxAutoAlignConverged = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxAutoAlignConverged = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Can_rx_auto_align_disableType can_rx_auto_align_disable = 6;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxAutoAlignDisable = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_auto_align_disableType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxAutoAlignDisable = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxAutoAlignDisable = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxAutoAlignDisable = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double can_rx_angle_mounting_offset = 7;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxAngleMountingOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxAngleMountingOffset = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxAngleMountingOffset = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxAngleMountingOffset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Can_rx_wheel_slipType can_rx_wheel_slip = 8;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxWheelSlip = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_wheel_slipType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxWheelSlip = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxWheelSlip = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxWheelSlip = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 can_rx_radar_height = 9;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxRadarHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxRadarHeight = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxRadarHeight = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxRadarHeight = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 can_rx_radar_fov_mr = 10;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxRadarFovMr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxRadarFovMr = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxRadarFovMr = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxRadarFovMr = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 can_rx_radar_fov_lr = 11;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxRadarFovLr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxRadarFovLr = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxRadarFovLr = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxRadarFovLr = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Can_rx_long_accel_validityType can_rx_long_accel_validity = 12;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxLongAccelValidity = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_long_accel_validityType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxLongAccelValidity = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxLongAccelValidity = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxLongAccelValidity = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double can_rx_long_accel = 13;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxLongAccel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxLongAccel = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxLongAccel = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxLongAccel = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Can_rx_lat_accel_validityType can_rx_lat_accel_validity = 14;
 * @return {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxLatAccelValidity = function() {
  return /** @type {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle3_5f2.Can_rx_lat_accel_validityType} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxLatAccelValidity = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxLatAccelValidity = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxLatAccelValidity = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double can_rx_lat_accel = 15;
 * @return {number}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.getCanRxLatAccel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.setCanRxLatAccel = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle3_5f2} returns this
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.clearCanRxLatAccel = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle3_5f2.prototype.hasCanRxLatAccel = function() {
  return jspb.Message.getField(this, 15) != null;
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
proto.apollo.drivers.Vehicle4_5f3.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle4_5f3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle4_5f3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle4_5f3.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxFacTgtRangeR2m: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    canRxFacTgtRangeM2t: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canRxFacTgtRange1: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canRxFacTgtMtgSpaceVer: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    canRxFacTgtMtgSpaceHor: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    canRxFacTgtMtgOffset: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    canRxFacAlignSampReq: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    canRxFacAlignMaxNt: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    canRxFacAlignCmd2: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    canRxFacAlignCmd1: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle4_5f3 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle4_5f3.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxFacTgtRangeR2m;

  /** @type {?|undefined} */
  this.canRxFacTgtRangeM2t;

  /** @type {?|undefined} */
  this.canRxFacTgtRange1;

  /** @type {?|undefined} */
  this.canRxFacTgtMtgSpaceVer;

  /** @type {?|undefined} */
  this.canRxFacTgtMtgSpaceHor;

  /** @type {?|undefined} */
  this.canRxFacTgtMtgOffset;

  /** @type {?|undefined} */
  this.canRxFacAlignSampReq;

  /** @type {?|undefined} */
  this.canRxFacAlignMaxNt;

  /** @type {?|undefined} */
  this.canRxFacAlignCmd2;

  /** @type {?|undefined} */
  this.canRxFacAlignCmd1;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle4_5f3.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle4_5f3}
 */
proto.apollo.drivers.Vehicle4_5f3.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle4_5f3();
  obj.canRxFacTgtRangeR2m != null && jspb.Message.setField(msg, 1, obj.canRxFacTgtRangeR2m);
  obj.canRxFacTgtRangeM2t != null && jspb.Message.setField(msg, 2, obj.canRxFacTgtRangeM2t);
  obj.canRxFacTgtRange1 != null && jspb.Message.setField(msg, 3, obj.canRxFacTgtRange1);
  obj.canRxFacTgtMtgSpaceVer != null && jspb.Message.setField(msg, 4, obj.canRxFacTgtMtgSpaceVer);
  obj.canRxFacTgtMtgSpaceHor != null && jspb.Message.setField(msg, 5, obj.canRxFacTgtMtgSpaceHor);
  obj.canRxFacTgtMtgOffset != null && jspb.Message.setField(msg, 6, obj.canRxFacTgtMtgOffset);
  obj.canRxFacAlignSampReq != null && jspb.Message.setField(msg, 7, obj.canRxFacAlignSampReq);
  obj.canRxFacAlignMaxNt != null && jspb.Message.setField(msg, 8, obj.canRxFacAlignMaxNt);
  obj.canRxFacAlignCmd2 != null && jspb.Message.setField(msg, 9, obj.canRxFacAlignCmd2);
  obj.canRxFacAlignCmd1 != null && jspb.Message.setField(msg, 10, obj.canRxFacAlignCmd1);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle4_5f3}
 */
proto.apollo.drivers.Vehicle4_5f3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle4_5f3;
  return proto.apollo.drivers.Vehicle4_5f3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle4_5f3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle4_5f3}
 */
proto.apollo.drivers.Vehicle4_5f3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxFacTgtRangeR2m(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxFacTgtRangeM2t(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxFacTgtRange1(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxFacTgtMtgSpaceVer(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxFacTgtMtgSpaceHor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxFacTgtMtgOffset(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxFacAlignSampReq(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxFacAlignMaxNt(value);
      break;
    case 9:
      var value = /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type} */ (reader.readEnum());
      msg.setCanRxFacAlignCmd2(value);
      break;
    case 10:
      var value = /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type} */ (reader.readEnum());
      msg.setCanRxFacAlignCmd1(value);
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
proto.apollo.drivers.Vehicle4_5f3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle4_5f3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle4_5f3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle4_5f3.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type} */ (jspb.Message.getField(message, 10));
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
proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type = {
  CAN_RX_FAC_ALIGN_CMD_2_OFF: 0,
  CAN_RX_FAC_ALIGN_CMD_2_ON: 1
};

/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type = {
  CAN_RX_FAC_ALIGN_CMD_1_OFF: 0,
  CAN_RX_FAC_ALIGN_CMD_1_ON: 1
};

/**
 * optional double can_rx_fac_tgt_range_r2m = 1;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtRangeR2m = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtRangeR2m = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtRangeR2m = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtRangeR2m = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_rx_fac_tgt_range_m2t = 2;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtRangeM2t = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtRangeM2t = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtRangeM2t = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtRangeM2t = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_rx_fac_tgt_range_1 = 3;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtRange1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtRange1 = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtRange1 = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtRange1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 can_rx_fac_tgt_mtg_space_ver = 4;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtMtgSpaceVer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtMtgSpaceVer = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtMtgSpaceVer = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtMtgSpaceVer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 can_rx_fac_tgt_mtg_space_hor = 5;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtMtgSpaceHor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtMtgSpaceHor = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtMtgSpaceHor = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtMtgSpaceHor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 can_rx_fac_tgt_mtg_offset = 6;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacTgtMtgOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacTgtMtgOffset = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacTgtMtgOffset = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacTgtMtgOffset = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 can_rx_fac_align_samp_req = 7;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacAlignSampReq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacAlignSampReq = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacAlignSampReq = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacAlignSampReq = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 can_rx_fac_align_max_nt = 8;
 * @return {number}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacAlignMaxNt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacAlignMaxNt = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacAlignMaxNt = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacAlignMaxNt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Can_rx_fac_align_cmd_2Type can_rx_fac_align_cmd_2 = 9;
 * @return {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacAlignCmd2 = function() {
  return /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_2Type} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacAlignCmd2 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacAlignCmd2 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacAlignCmd2 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Can_rx_fac_align_cmd_1Type can_rx_fac_align_cmd_1 = 10;
 * @return {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.getCanRxFacAlignCmd1 = function() {
  return /** @type {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle4_5f3.Can_rx_fac_align_cmd_1Type} value
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.setCanRxFacAlignCmd1 = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle4_5f3} returns this
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.clearCanRxFacAlignCmd1 = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle4_5f3.prototype.hasCanRxFacAlignCmd1 = function() {
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
proto.apollo.drivers.Vehicle5_5f4.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle5_5f4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle5_5f4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle5_5f4.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxYawRateBiasShift: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    canRxSteeringGearRatio: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canRxWheelbase: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    canRxDistanceRearAxle: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    canRxCwBlockageThreshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    canRxFunnelOffsetRight: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    canRxFunnelOffsetLeft: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    canRxBeamwidthVert: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    canRxOversteerUndersteer: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle5_5f4 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle5_5f4.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxYawRateBiasShift;

  /** @type {?|undefined} */
  this.canRxSteeringGearRatio;

  /** @type {?|undefined} */
  this.canRxWheelbase;

  /** @type {?|undefined} */
  this.canRxDistanceRearAxle;

  /** @type {?|undefined} */
  this.canRxCwBlockageThreshold;

  /** @type {?|undefined} */
  this.canRxFunnelOffsetRight;

  /** @type {?|undefined} */
  this.canRxFunnelOffsetLeft;

  /** @type {?|undefined} */
  this.canRxBeamwidthVert;

  /** @type {?|undefined} */
  this.canRxOversteerUndersteer;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle5_5f4.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle5_5f4}
 */
proto.apollo.drivers.Vehicle5_5f4.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle5_5f4();
  obj.canRxYawRateBiasShift != null && jspb.Message.setField(msg, 1, obj.canRxYawRateBiasShift);
  obj.canRxSteeringGearRatio != null && jspb.Message.setField(msg, 2, obj.canRxSteeringGearRatio);
  obj.canRxWheelbase != null && jspb.Message.setField(msg, 3, obj.canRxWheelbase);
  obj.canRxDistanceRearAxle != null && jspb.Message.setField(msg, 4, obj.canRxDistanceRearAxle);
  obj.canRxCwBlockageThreshold != null && jspb.Message.setField(msg, 5, obj.canRxCwBlockageThreshold);
  obj.canRxFunnelOffsetRight != null && jspb.Message.setField(msg, 6, obj.canRxFunnelOffsetRight);
  obj.canRxFunnelOffsetLeft != null && jspb.Message.setField(msg, 7, obj.canRxFunnelOffsetLeft);
  obj.canRxBeamwidthVert != null && jspb.Message.setField(msg, 8, obj.canRxBeamwidthVert);
  obj.canRxOversteerUndersteer != null && jspb.Message.setField(msg, 9, obj.canRxOversteerUndersteer);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle5_5f4}
 */
proto.apollo.drivers.Vehicle5_5f4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle5_5f4;
  return proto.apollo.drivers.Vehicle5_5f4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle5_5f4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle5_5f4}
 */
proto.apollo.drivers.Vehicle5_5f4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType} */ (reader.readEnum());
      msg.setCanRxYawRateBiasShift(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxSteeringGearRatio(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxWheelbase(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxDistanceRearAxle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxCwBlockageThreshold(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxFunnelOffsetRight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxFunnelOffsetLeft(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxBeamwidthVert(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanRxOversteerUndersteer(value);
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
proto.apollo.drivers.Vehicle5_5f4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle5_5f4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle5_5f4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle5_5f4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * @enum {number}
 */
proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType = {
  CAN_RX_YAW_RATE_BIAS_SHIFT_NO_DETECT: 0,
  CAN_RX_YAW_RATE_BIAS_SHIFT_DETECT: 1
};

/**
 * optional Can_rx_yaw_rate_bias_shiftType can_rx_yaw_rate_bias_shift = 1;
 * @return {!proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxYawRateBiasShift = function() {
  return /** @type {!proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.drivers.Vehicle5_5f4.Can_rx_yaw_rate_bias_shiftType} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxYawRateBiasShift = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxYawRateBiasShift = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxYawRateBiasShift = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_rx_steering_gear_ratio = 2;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxSteeringGearRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxSteeringGearRatio = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxSteeringGearRatio = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxSteeringGearRatio = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double can_rx_wheelbase = 3;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxWheelbase = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxWheelbase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxWheelbase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxWheelbase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double can_rx_distance_rear_axle = 4;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxDistanceRearAxle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxDistanceRearAxle = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxDistanceRearAxle = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxDistanceRearAxle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double can_rx_cw_blockage_threshold = 5;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxCwBlockageThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxCwBlockageThreshold = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxCwBlockageThreshold = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxCwBlockageThreshold = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double can_rx_funnel_offset_right = 6;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxFunnelOffsetRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxFunnelOffsetRight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxFunnelOffsetRight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxFunnelOffsetRight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double can_rx_funnel_offset_left = 7;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxFunnelOffsetLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxFunnelOffsetLeft = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxFunnelOffsetLeft = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxFunnelOffsetLeft = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double can_rx_beamwidth_vert = 8;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxBeamwidthVert = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxBeamwidthVert = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxBeamwidthVert = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxBeamwidthVert = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 can_rx_oversteer_understeer = 9;
 * @return {number}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.getCanRxOversteerUndersteer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.setCanRxOversteerUndersteer = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle5_5f4} returns this
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.clearCanRxOversteerUndersteer = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle5_5f4.prototype.hasCanRxOversteerUndersteer = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.apollo.drivers.Vehicle6_5f5.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.Vehicle6_5f5.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.Vehicle6_5f5} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle6_5f5.toObject = function(includeInstance, msg) {
  var f, obj = {
    canRxInnerFunnelOffsetRight: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    canRxInnerFunnelOffsetLeft: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    canVolvoFaRangeMaxShort: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    canVolvoFaMinVspeedShort: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    canVolvoFaAalignEstimate: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Vehicle6_5f5 as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.Vehicle6_5f5.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.canRxInnerFunnelOffsetRight;

  /** @type {?|undefined} */
  this.canRxInnerFunnelOffsetLeft;

  /** @type {?|undefined} */
  this.canVolvoFaRangeMaxShort;

  /** @type {?|undefined} */
  this.canVolvoFaMinVspeedShort;

  /** @type {?|undefined} */
  this.canVolvoFaAalignEstimate;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.Vehicle6_5f5.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.Vehicle6_5f5}
 */
proto.apollo.drivers.Vehicle6_5f5.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.Vehicle6_5f5();
  obj.canRxInnerFunnelOffsetRight != null && jspb.Message.setField(msg, 1, obj.canRxInnerFunnelOffsetRight);
  obj.canRxInnerFunnelOffsetLeft != null && jspb.Message.setField(msg, 2, obj.canRxInnerFunnelOffsetLeft);
  obj.canVolvoFaRangeMaxShort != null && jspb.Message.setField(msg, 3, obj.canVolvoFaRangeMaxShort);
  obj.canVolvoFaMinVspeedShort != null && jspb.Message.setField(msg, 4, obj.canVolvoFaMinVspeedShort);
  obj.canVolvoFaAalignEstimate != null && jspb.Message.setField(msg, 5, obj.canVolvoFaAalignEstimate);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.Vehicle6_5f5}
 */
proto.apollo.drivers.Vehicle6_5f5.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.Vehicle6_5f5;
  return proto.apollo.drivers.Vehicle6_5f5.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.Vehicle6_5f5} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.Vehicle6_5f5}
 */
proto.apollo.drivers.Vehicle6_5f5.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxInnerFunnelOffsetRight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanRxInnerFunnelOffsetLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanVolvoFaRangeMaxShort(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanVolvoFaMinVspeedShort(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCanVolvoFaAalignEstimate(value);
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
proto.apollo.drivers.Vehicle6_5f5.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.Vehicle6_5f5.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.Vehicle6_5f5} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.Vehicle6_5f5.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
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
};


/**
 * optional double can_rx_inner_funnel_offset_right = 1;
 * @return {number}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.getCanRxInnerFunnelOffsetRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.setCanRxInnerFunnelOffsetRight = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.clearCanRxInnerFunnelOffsetRight = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.hasCanRxInnerFunnelOffsetRight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double can_rx_inner_funnel_offset_left = 2;
 * @return {number}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.getCanRxInnerFunnelOffsetLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.setCanRxInnerFunnelOffsetLeft = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.clearCanRxInnerFunnelOffsetLeft = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.hasCanRxInnerFunnelOffsetLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 can_volvo_fa_range_max_short = 3;
 * @return {number}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.getCanVolvoFaRangeMaxShort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.setCanVolvoFaRangeMaxShort = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.clearCanVolvoFaRangeMaxShort = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.hasCanVolvoFaRangeMaxShort = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double can_volvo_fa_min_vspeed_short = 4;
 * @return {number}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.getCanVolvoFaMinVspeedShort = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.setCanVolvoFaMinVspeedShort = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.clearCanVolvoFaMinVspeedShort = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.hasCanVolvoFaMinVspeedShort = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double can_volvo_fa_aalign_estimate = 5;
 * @return {number}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.getCanVolvoFaAalignEstimate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.setCanVolvoFaAalignEstimate = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.drivers.Vehicle6_5f5} returns this
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.clearCanVolvoFaAalignEstimate = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.Vehicle6_5f5.prototype.hasCanVolvoFaAalignEstimate = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.drivers.DelphiESR.repeatedFields_ = [7,9];



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
proto.apollo.drivers.DelphiESR.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.drivers.DelphiESR.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.drivers.DelphiESR} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.DelphiESR.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && modules_common_proto_header_pb.Header.toObject(includeInstance, f),
    esrStatus95e8: (f = msg.getEsrStatus95e8()) && proto.apollo.drivers.Esr_status9_5e8.toObject(includeInstance, f),
    esrStatus65e5: (f = msg.getEsrStatus65e5()) && proto.apollo.drivers.Esr_status6_5e5.toObject(includeInstance, f),
    esrStatus55e4: (f = msg.getEsrStatus55e4()) && proto.apollo.drivers.Esr_status5_5e4.toObject(includeInstance, f),
    esrStatus34e2: (f = msg.getEsrStatus34e2()) && proto.apollo.drivers.Esr_status3_4e2.toObject(includeInstance, f),
    esrStatus44e3: (f = msg.getEsrStatus44e3()) && proto.apollo.drivers.Esr_status4_4e3.toObject(includeInstance, f),
    esrTrackmotionpower540List: jspb.Message.toObjectList(msg.getEsrTrackmotionpower540List(),
    proto.apollo.drivers.Esr_trackmotionpower_540.toObject, includeInstance),
    acmInstReq7e0: (f = msg.getAcmInstReq7e0()) && proto.apollo.drivers.Acm_inst_req_7e0.toObject(includeInstance, f),
    esrTrack01500List: jspb.Message.toObjectList(msg.getEsrTrack01500List(),
    proto.apollo.drivers.Esr_track01_500.toObject, includeInstance),
    esrValid15d0: (f = msg.getEsrValid15d0()) && proto.apollo.drivers.Esr_valid1_5d0.toObject(includeInstance, f),
    esrValid25d1: (f = msg.getEsrValid25d1()) && proto.apollo.drivers.Esr_valid2_5d1.toObject(includeInstance, f),
    acmInstResp7e4: (f = msg.getAcmInstResp7e4()) && proto.apollo.drivers.Acm_inst_resp_7e4.toObject(includeInstance, f),
    vehicle24f1: (f = msg.getVehicle24f1()) && proto.apollo.drivers.Vehicle2_4f1.toObject(includeInstance, f),
    vehicle14f0: (f = msg.getVehicle14f0()) && proto.apollo.drivers.Vehicle1_4f0.toObject(includeInstance, f),
    esrSim15c0: (f = msg.getEsrSim15c0()) && proto.apollo.drivers.Esr_sim1_5c0.toObject(includeInstance, f),
    esrStatus14e0: (f = msg.getEsrStatus14e0()) && proto.apollo.drivers.Esr_status1_4e0.toObject(includeInstance, f),
    esrStatus24e1: (f = msg.getEsrStatus24e1()) && proto.apollo.drivers.Esr_status2_4e1.toObject(includeInstance, f),
    esrStatus85e7: (f = msg.getEsrStatus85e7()) && proto.apollo.drivers.Esr_status8_5e7.toObject(includeInstance, f),
    esrStatus75e6: (f = msg.getEsrStatus75e6()) && proto.apollo.drivers.Esr_status7_5e6.toObject(includeInstance, f),
    vehicle35f2: (f = msg.getVehicle35f2()) && proto.apollo.drivers.Vehicle3_5f2.toObject(includeInstance, f),
    vehicle45f3: (f = msg.getVehicle45f3()) && proto.apollo.drivers.Vehicle4_5f3.toObject(includeInstance, f),
    vehicle55f4: (f = msg.getVehicle55f4()) && proto.apollo.drivers.Vehicle5_5f4.toObject(includeInstance, f),
    vehicle65f5: (f = msg.getVehicle65f5()) && proto.apollo.drivers.Vehicle6_5f5.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DelphiESR as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.drivers.DelphiESR.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.esrStatus95e8;

  /** @type {?|undefined} */
  this.esrStatus65e5;

  /** @type {?|undefined} */
  this.esrStatus55e4;

  /** @type {?|undefined} */
  this.esrStatus34e2;

  /** @type {?|undefined} */
  this.esrStatus44e3;

  /** @type {?|undefined} */
  this.esrTrackmotionpower540List;

  /** @type {?|undefined} */
  this.acmInstReq7e0;

  /** @type {?|undefined} */
  this.esrTrack01500List;

  /** @type {?|undefined} */
  this.esrValid15d0;

  /** @type {?|undefined} */
  this.esrValid25d1;

  /** @type {?|undefined} */
  this.acmInstResp7e4;

  /** @type {?|undefined} */
  this.vehicle24f1;

  /** @type {?|undefined} */
  this.vehicle14f0;

  /** @type {?|undefined} */
  this.esrSim15c0;

  /** @type {?|undefined} */
  this.esrStatus14e0;

  /** @type {?|undefined} */
  this.esrStatus24e1;

  /** @type {?|undefined} */
  this.esrStatus85e7;

  /** @type {?|undefined} */
  this.esrStatus75e6;

  /** @type {?|undefined} */
  this.vehicle35f2;

  /** @type {?|undefined} */
  this.vehicle45f3;

  /** @type {?|undefined} */
  this.vehicle55f4;

  /** @type {?|undefined} */
  this.vehicle65f5;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.drivers.DelphiESR.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.drivers.DelphiESR}
 */
proto.apollo.drivers.DelphiESR.fromObject = function(obj) {
  var msg = new proto.apollo.drivers.DelphiESR();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, modules_common_proto_header_pb.Header.fromObject(obj.header));
  obj.esrStatus95e8 && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.drivers.Esr_status9_5e8.fromObject(obj.esrStatus95e8));
  obj.esrStatus65e5 && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.drivers.Esr_status6_5e5.fromObject(obj.esrStatus65e5));
  obj.esrStatus55e4 && jspb.Message.setWrapperField(
      msg, 4, proto.apollo.drivers.Esr_status5_5e4.fromObject(obj.esrStatus55e4));
  obj.esrStatus34e2 && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.drivers.Esr_status3_4e2.fromObject(obj.esrStatus34e2));
  obj.esrStatus44e3 && jspb.Message.setWrapperField(
      msg, 6, proto.apollo.drivers.Esr_status4_4e3.fromObject(obj.esrStatus44e3));
  obj.esrTrackmotionpower540List && jspb.Message.setRepeatedWrapperField(
      msg, 7, obj.esrTrackmotionpower540List.map(
          proto.apollo.drivers.Esr_trackmotionpower_540.fromObject));
  obj.acmInstReq7e0 && jspb.Message.setWrapperField(
      msg, 8, proto.apollo.drivers.Acm_inst_req_7e0.fromObject(obj.acmInstReq7e0));
  obj.esrTrack01500List && jspb.Message.setRepeatedWrapperField(
      msg, 9, obj.esrTrack01500List.map(
          proto.apollo.drivers.Esr_track01_500.fromObject));
  obj.esrValid15d0 && jspb.Message.setWrapperField(
      msg, 10, proto.apollo.drivers.Esr_valid1_5d0.fromObject(obj.esrValid15d0));
  obj.esrValid25d1 && jspb.Message.setWrapperField(
      msg, 11, proto.apollo.drivers.Esr_valid2_5d1.fromObject(obj.esrValid25d1));
  obj.acmInstResp7e4 && jspb.Message.setWrapperField(
      msg, 12, proto.apollo.drivers.Acm_inst_resp_7e4.fromObject(obj.acmInstResp7e4));
  obj.vehicle24f1 && jspb.Message.setWrapperField(
      msg, 13, proto.apollo.drivers.Vehicle2_4f1.fromObject(obj.vehicle24f1));
  obj.vehicle14f0 && jspb.Message.setWrapperField(
      msg, 14, proto.apollo.drivers.Vehicle1_4f0.fromObject(obj.vehicle14f0));
  obj.esrSim15c0 && jspb.Message.setWrapperField(
      msg, 15, proto.apollo.drivers.Esr_sim1_5c0.fromObject(obj.esrSim15c0));
  obj.esrStatus14e0 && jspb.Message.setWrapperField(
      msg, 16, proto.apollo.drivers.Esr_status1_4e0.fromObject(obj.esrStatus14e0));
  obj.esrStatus24e1 && jspb.Message.setWrapperField(
      msg, 17, proto.apollo.drivers.Esr_status2_4e1.fromObject(obj.esrStatus24e1));
  obj.esrStatus85e7 && jspb.Message.setWrapperField(
      msg, 18, proto.apollo.drivers.Esr_status8_5e7.fromObject(obj.esrStatus85e7));
  obj.esrStatus75e6 && jspb.Message.setWrapperField(
      msg, 19, proto.apollo.drivers.Esr_status7_5e6.fromObject(obj.esrStatus75e6));
  obj.vehicle35f2 && jspb.Message.setWrapperField(
      msg, 20, proto.apollo.drivers.Vehicle3_5f2.fromObject(obj.vehicle35f2));
  obj.vehicle45f3 && jspb.Message.setWrapperField(
      msg, 21, proto.apollo.drivers.Vehicle4_5f3.fromObject(obj.vehicle45f3));
  obj.vehicle55f4 && jspb.Message.setWrapperField(
      msg, 22, proto.apollo.drivers.Vehicle5_5f4.fromObject(obj.vehicle55f4));
  obj.vehicle65f5 && jspb.Message.setWrapperField(
      msg, 23, proto.apollo.drivers.Vehicle6_5f5.fromObject(obj.vehicle65f5));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.drivers.DelphiESR}
 */
proto.apollo.drivers.DelphiESR.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.drivers.DelphiESR;
  return proto.apollo.drivers.DelphiESR.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.drivers.DelphiESR} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.drivers.DelphiESR}
 */
proto.apollo.drivers.DelphiESR.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new modules_common_proto_header_pb.Header;
      reader.readMessage(value,modules_common_proto_header_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.apollo.drivers.Esr_status9_5e8;
      reader.readMessage(value,proto.apollo.drivers.Esr_status9_5e8.deserializeBinaryFromReader);
      msg.setEsrStatus95e8(value);
      break;
    case 3:
      var value = new proto.apollo.drivers.Esr_status6_5e5;
      reader.readMessage(value,proto.apollo.drivers.Esr_status6_5e5.deserializeBinaryFromReader);
      msg.setEsrStatus65e5(value);
      break;
    case 4:
      var value = new proto.apollo.drivers.Esr_status5_5e4;
      reader.readMessage(value,proto.apollo.drivers.Esr_status5_5e4.deserializeBinaryFromReader);
      msg.setEsrStatus55e4(value);
      break;
    case 5:
      var value = new proto.apollo.drivers.Esr_status3_4e2;
      reader.readMessage(value,proto.apollo.drivers.Esr_status3_4e2.deserializeBinaryFromReader);
      msg.setEsrStatus34e2(value);
      break;
    case 6:
      var value = new proto.apollo.drivers.Esr_status4_4e3;
      reader.readMessage(value,proto.apollo.drivers.Esr_status4_4e3.deserializeBinaryFromReader);
      msg.setEsrStatus44e3(value);
      break;
    case 7:
      var value = new proto.apollo.drivers.Esr_trackmotionpower_540;
      reader.readMessage(value,proto.apollo.drivers.Esr_trackmotionpower_540.deserializeBinaryFromReader);
      msg.addEsrTrackmotionpower540(value);
      break;
    case 8:
      var value = new proto.apollo.drivers.Acm_inst_req_7e0;
      reader.readMessage(value,proto.apollo.drivers.Acm_inst_req_7e0.deserializeBinaryFromReader);
      msg.setAcmInstReq7e0(value);
      break;
    case 9:
      var value = new proto.apollo.drivers.Esr_track01_500;
      reader.readMessage(value,proto.apollo.drivers.Esr_track01_500.deserializeBinaryFromReader);
      msg.addEsrTrack01500(value);
      break;
    case 10:
      var value = new proto.apollo.drivers.Esr_valid1_5d0;
      reader.readMessage(value,proto.apollo.drivers.Esr_valid1_5d0.deserializeBinaryFromReader);
      msg.setEsrValid15d0(value);
      break;
    case 11:
      var value = new proto.apollo.drivers.Esr_valid2_5d1;
      reader.readMessage(value,proto.apollo.drivers.Esr_valid2_5d1.deserializeBinaryFromReader);
      msg.setEsrValid25d1(value);
      break;
    case 12:
      var value = new proto.apollo.drivers.Acm_inst_resp_7e4;
      reader.readMessage(value,proto.apollo.drivers.Acm_inst_resp_7e4.deserializeBinaryFromReader);
      msg.setAcmInstResp7e4(value);
      break;
    case 13:
      var value = new proto.apollo.drivers.Vehicle2_4f1;
      reader.readMessage(value,proto.apollo.drivers.Vehicle2_4f1.deserializeBinaryFromReader);
      msg.setVehicle24f1(value);
      break;
    case 14:
      var value = new proto.apollo.drivers.Vehicle1_4f0;
      reader.readMessage(value,proto.apollo.drivers.Vehicle1_4f0.deserializeBinaryFromReader);
      msg.setVehicle14f0(value);
      break;
    case 15:
      var value = new proto.apollo.drivers.Esr_sim1_5c0;
      reader.readMessage(value,proto.apollo.drivers.Esr_sim1_5c0.deserializeBinaryFromReader);
      msg.setEsrSim15c0(value);
      break;
    case 16:
      var value = new proto.apollo.drivers.Esr_status1_4e0;
      reader.readMessage(value,proto.apollo.drivers.Esr_status1_4e0.deserializeBinaryFromReader);
      msg.setEsrStatus14e0(value);
      break;
    case 17:
      var value = new proto.apollo.drivers.Esr_status2_4e1;
      reader.readMessage(value,proto.apollo.drivers.Esr_status2_4e1.deserializeBinaryFromReader);
      msg.setEsrStatus24e1(value);
      break;
    case 18:
      var value = new proto.apollo.drivers.Esr_status8_5e7;
      reader.readMessage(value,proto.apollo.drivers.Esr_status8_5e7.deserializeBinaryFromReader);
      msg.setEsrStatus85e7(value);
      break;
    case 19:
      var value = new proto.apollo.drivers.Esr_status7_5e6;
      reader.readMessage(value,proto.apollo.drivers.Esr_status7_5e6.deserializeBinaryFromReader);
      msg.setEsrStatus75e6(value);
      break;
    case 20:
      var value = new proto.apollo.drivers.Vehicle3_5f2;
      reader.readMessage(value,proto.apollo.drivers.Vehicle3_5f2.deserializeBinaryFromReader);
      msg.setVehicle35f2(value);
      break;
    case 21:
      var value = new proto.apollo.drivers.Vehicle4_5f3;
      reader.readMessage(value,proto.apollo.drivers.Vehicle4_5f3.deserializeBinaryFromReader);
      msg.setVehicle45f3(value);
      break;
    case 22:
      var value = new proto.apollo.drivers.Vehicle5_5f4;
      reader.readMessage(value,proto.apollo.drivers.Vehicle5_5f4.deserializeBinaryFromReader);
      msg.setVehicle55f4(value);
      break;
    case 23:
      var value = new proto.apollo.drivers.Vehicle6_5f5;
      reader.readMessage(value,proto.apollo.drivers.Vehicle6_5f5.deserializeBinaryFromReader);
      msg.setVehicle65f5(value);
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
proto.apollo.drivers.DelphiESR.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.drivers.DelphiESR.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.drivers.DelphiESR} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.drivers.DelphiESR.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      modules_common_proto_header_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus95e8();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.drivers.Esr_status9_5e8.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus65e5();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.drivers.Esr_status6_5e5.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus55e4();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.drivers.Esr_status5_5e4.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus34e2();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.drivers.Esr_status3_4e2.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus44e3();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.apollo.drivers.Esr_status4_4e3.serializeBinaryToWriter
    );
  }
  f = message.getEsrTrackmotionpower540List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.apollo.drivers.Esr_trackmotionpower_540.serializeBinaryToWriter
    );
  }
  f = message.getAcmInstReq7e0();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.apollo.drivers.Acm_inst_req_7e0.serializeBinaryToWriter
    );
  }
  f = message.getEsrTrack01500List();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.apollo.drivers.Esr_track01_500.serializeBinaryToWriter
    );
  }
  f = message.getEsrValid15d0();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.apollo.drivers.Esr_valid1_5d0.serializeBinaryToWriter
    );
  }
  f = message.getEsrValid25d1();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.apollo.drivers.Esr_valid2_5d1.serializeBinaryToWriter
    );
  }
  f = message.getAcmInstResp7e4();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.apollo.drivers.Acm_inst_resp_7e4.serializeBinaryToWriter
    );
  }
  f = message.getVehicle24f1();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.apollo.drivers.Vehicle2_4f1.serializeBinaryToWriter
    );
  }
  f = message.getVehicle14f0();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.apollo.drivers.Vehicle1_4f0.serializeBinaryToWriter
    );
  }
  f = message.getEsrSim15c0();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.drivers.Esr_sim1_5c0.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus14e0();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.apollo.drivers.Esr_status1_4e0.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus24e1();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.apollo.drivers.Esr_status2_4e1.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus85e7();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.apollo.drivers.Esr_status8_5e7.serializeBinaryToWriter
    );
  }
  f = message.getEsrStatus75e6();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.apollo.drivers.Esr_status7_5e6.serializeBinaryToWriter
    );
  }
  f = message.getVehicle35f2();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.apollo.drivers.Vehicle3_5f2.serializeBinaryToWriter
    );
  }
  f = message.getVehicle45f3();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.apollo.drivers.Vehicle4_5f3.serializeBinaryToWriter
    );
  }
  f = message.getVehicle55f4();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.apollo.drivers.Vehicle5_5f4.serializeBinaryToWriter
    );
  }
  f = message.getVehicle65f5();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.apollo.drivers.Vehicle6_5f5.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.drivers.DelphiESR.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, modules_common_proto_header_pb.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Esr_status9_5e8 esr_status9_5e8 = 2;
 * @return {?proto.apollo.drivers.Esr_status9_5e8}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus95e8 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status9_5e8} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status9_5e8, 2));
};


/**
 * @param {?proto.apollo.drivers.Esr_status9_5e8|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus95e8 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus95e8 = function() {
  return this.setEsrStatus95e8(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus95e8 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Esr_status6_5e5 esr_status6_5e5 = 3;
 * @return {?proto.apollo.drivers.Esr_status6_5e5}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus65e5 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status6_5e5} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status6_5e5, 3));
};


/**
 * @param {?proto.apollo.drivers.Esr_status6_5e5|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus65e5 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus65e5 = function() {
  return this.setEsrStatus65e5(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus65e5 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Esr_status5_5e4 esr_status5_5e4 = 4;
 * @return {?proto.apollo.drivers.Esr_status5_5e4}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus55e4 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status5_5e4} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status5_5e4, 4));
};


/**
 * @param {?proto.apollo.drivers.Esr_status5_5e4|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus55e4 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus55e4 = function() {
  return this.setEsrStatus55e4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus55e4 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Esr_status3_4e2 esr_status3_4e2 = 5;
 * @return {?proto.apollo.drivers.Esr_status3_4e2}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus34e2 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status3_4e2} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status3_4e2, 5));
};


/**
 * @param {?proto.apollo.drivers.Esr_status3_4e2|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus34e2 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus34e2 = function() {
  return this.setEsrStatus34e2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus34e2 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Esr_status4_4e3 esr_status4_4e3 = 6;
 * @return {?proto.apollo.drivers.Esr_status4_4e3}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus44e3 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status4_4e3} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status4_4e3, 6));
};


/**
 * @param {?proto.apollo.drivers.Esr_status4_4e3|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus44e3 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus44e3 = function() {
  return this.setEsrStatus44e3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus44e3 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Esr_trackmotionpower_540 esr_trackmotionpower_540 = 7;
 * @return {!Array<!proto.apollo.drivers.Esr_trackmotionpower_540>}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrTrackmotionpower540List = function() {
  return /** @type{!Array<!proto.apollo.drivers.Esr_trackmotionpower_540>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.drivers.Esr_trackmotionpower_540, 7));
};


/**
 * @param {!Array<!proto.apollo.drivers.Esr_trackmotionpower_540>} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrTrackmotionpower540List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.apollo.drivers.Esr_trackmotionpower_540=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.drivers.Esr_trackmotionpower_540}
 */
proto.apollo.drivers.DelphiESR.prototype.addEsrTrackmotionpower540 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.apollo.drivers.Esr_trackmotionpower_540, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrTrackmotionpower540List = function() {
  return this.setEsrTrackmotionpower540List([]);
};


/**
 * optional Acm_inst_req_7e0 acm_inst_req_7e0 = 8;
 * @return {?proto.apollo.drivers.Acm_inst_req_7e0}
 */
proto.apollo.drivers.DelphiESR.prototype.getAcmInstReq7e0 = function() {
  return /** @type{?proto.apollo.drivers.Acm_inst_req_7e0} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Acm_inst_req_7e0, 8));
};


/**
 * @param {?proto.apollo.drivers.Acm_inst_req_7e0|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setAcmInstReq7e0 = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearAcmInstReq7e0 = function() {
  return this.setAcmInstReq7e0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasAcmInstReq7e0 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Esr_track01_500 esr_track01_500 = 9;
 * @return {!Array<!proto.apollo.drivers.Esr_track01_500>}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrTrack01500List = function() {
  return /** @type{!Array<!proto.apollo.drivers.Esr_track01_500>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.drivers.Esr_track01_500, 9));
};


/**
 * @param {!Array<!proto.apollo.drivers.Esr_track01_500>} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrTrack01500List = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.apollo.drivers.Esr_track01_500=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.drivers.Esr_track01_500}
 */
proto.apollo.drivers.DelphiESR.prototype.addEsrTrack01500 = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.apollo.drivers.Esr_track01_500, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrTrack01500List = function() {
  return this.setEsrTrack01500List([]);
};


/**
 * optional Esr_valid1_5d0 esr_valid1_5d0 = 10;
 * @return {?proto.apollo.drivers.Esr_valid1_5d0}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrValid15d0 = function() {
  return /** @type{?proto.apollo.drivers.Esr_valid1_5d0} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_valid1_5d0, 10));
};


/**
 * @param {?proto.apollo.drivers.Esr_valid1_5d0|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrValid15d0 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrValid15d0 = function() {
  return this.setEsrValid15d0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrValid15d0 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Esr_valid2_5d1 esr_valid2_5d1 = 11;
 * @return {?proto.apollo.drivers.Esr_valid2_5d1}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrValid25d1 = function() {
  return /** @type{?proto.apollo.drivers.Esr_valid2_5d1} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_valid2_5d1, 11));
};


/**
 * @param {?proto.apollo.drivers.Esr_valid2_5d1|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrValid25d1 = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrValid25d1 = function() {
  return this.setEsrValid25d1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrValid25d1 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Acm_inst_resp_7e4 acm_inst_resp_7e4 = 12;
 * @return {?proto.apollo.drivers.Acm_inst_resp_7e4}
 */
proto.apollo.drivers.DelphiESR.prototype.getAcmInstResp7e4 = function() {
  return /** @type{?proto.apollo.drivers.Acm_inst_resp_7e4} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Acm_inst_resp_7e4, 12));
};


/**
 * @param {?proto.apollo.drivers.Acm_inst_resp_7e4|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setAcmInstResp7e4 = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearAcmInstResp7e4 = function() {
  return this.setAcmInstResp7e4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasAcmInstResp7e4 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Vehicle2_4f1 vehicle2_4f1 = 13;
 * @return {?proto.apollo.drivers.Vehicle2_4f1}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle24f1 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle2_4f1} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle2_4f1, 13));
};


/**
 * @param {?proto.apollo.drivers.Vehicle2_4f1|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle24f1 = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle24f1 = function() {
  return this.setVehicle24f1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle24f1 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Vehicle1_4f0 vehicle1_4f0 = 14;
 * @return {?proto.apollo.drivers.Vehicle1_4f0}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle14f0 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle1_4f0} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle1_4f0, 14));
};


/**
 * @param {?proto.apollo.drivers.Vehicle1_4f0|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle14f0 = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle14f0 = function() {
  return this.setVehicle14f0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle14f0 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Esr_sim1_5c0 esr_sim1_5c0 = 15;
 * @return {?proto.apollo.drivers.Esr_sim1_5c0}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrSim15c0 = function() {
  return /** @type{?proto.apollo.drivers.Esr_sim1_5c0} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_sim1_5c0, 15));
};


/**
 * @param {?proto.apollo.drivers.Esr_sim1_5c0|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrSim15c0 = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrSim15c0 = function() {
  return this.setEsrSim15c0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrSim15c0 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Esr_status1_4e0 esr_status1_4e0 = 16;
 * @return {?proto.apollo.drivers.Esr_status1_4e0}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus14e0 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status1_4e0} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status1_4e0, 16));
};


/**
 * @param {?proto.apollo.drivers.Esr_status1_4e0|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus14e0 = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus14e0 = function() {
  return this.setEsrStatus14e0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus14e0 = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Esr_status2_4e1 esr_status2_4e1 = 17;
 * @return {?proto.apollo.drivers.Esr_status2_4e1}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus24e1 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status2_4e1} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status2_4e1, 17));
};


/**
 * @param {?proto.apollo.drivers.Esr_status2_4e1|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus24e1 = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus24e1 = function() {
  return this.setEsrStatus24e1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus24e1 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Esr_status8_5e7 esr_status8_5e7 = 18;
 * @return {?proto.apollo.drivers.Esr_status8_5e7}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus85e7 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status8_5e7} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status8_5e7, 18));
};


/**
 * @param {?proto.apollo.drivers.Esr_status8_5e7|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus85e7 = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus85e7 = function() {
  return this.setEsrStatus85e7(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus85e7 = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Esr_status7_5e6 esr_status7_5e6 = 19;
 * @return {?proto.apollo.drivers.Esr_status7_5e6}
 */
proto.apollo.drivers.DelphiESR.prototype.getEsrStatus75e6 = function() {
  return /** @type{?proto.apollo.drivers.Esr_status7_5e6} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Esr_status7_5e6, 19));
};


/**
 * @param {?proto.apollo.drivers.Esr_status7_5e6|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setEsrStatus75e6 = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearEsrStatus75e6 = function() {
  return this.setEsrStatus75e6(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasEsrStatus75e6 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Vehicle3_5f2 vehicle3_5f2 = 20;
 * @return {?proto.apollo.drivers.Vehicle3_5f2}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle35f2 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle3_5f2} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle3_5f2, 20));
};


/**
 * @param {?proto.apollo.drivers.Vehicle3_5f2|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle35f2 = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle35f2 = function() {
  return this.setVehicle35f2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle35f2 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Vehicle4_5f3 vehicle4_5f3 = 21;
 * @return {?proto.apollo.drivers.Vehicle4_5f3}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle45f3 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle4_5f3} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle4_5f3, 21));
};


/**
 * @param {?proto.apollo.drivers.Vehicle4_5f3|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle45f3 = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle45f3 = function() {
  return this.setVehicle45f3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle45f3 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Vehicle5_5f4 vehicle5_5f4 = 22;
 * @return {?proto.apollo.drivers.Vehicle5_5f4}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle55f4 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle5_5f4} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle5_5f4, 22));
};


/**
 * @param {?proto.apollo.drivers.Vehicle5_5f4|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle55f4 = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle55f4 = function() {
  return this.setVehicle55f4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle55f4 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Vehicle6_5f5 vehicle6_5f5 = 23;
 * @return {?proto.apollo.drivers.Vehicle6_5f5}
 */
proto.apollo.drivers.DelphiESR.prototype.getVehicle65f5 = function() {
  return /** @type{?proto.apollo.drivers.Vehicle6_5f5} */ (
    jspb.Message.getWrapperField(this, proto.apollo.drivers.Vehicle6_5f5, 23));
};


/**
 * @param {?proto.apollo.drivers.Vehicle6_5f5|undefined} value
 * @return {!proto.apollo.drivers.DelphiESR} returns this
*/
proto.apollo.drivers.DelphiESR.prototype.setVehicle65f5 = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.drivers.DelphiESR} returns this
 */
proto.apollo.drivers.DelphiESR.prototype.clearVehicle65f5 = function() {
  return this.setVehicle65f5(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.drivers.DelphiESR.prototype.hasVehicle65f5 = function() {
  return jspb.Message.getField(this, 23) != null;
};


goog.object.extend(exports, proto.apollo.drivers);
