/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2014, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

var _ = require('lodash');

var driverManager = require('../driverManager');
var pwdSimulator = require('../simulator/pwdSimulator.js');
var carelinkDriver = require('../carelink/carelinkDriver');

var config = require('../config');

var carelink = {
  log: require('bows')('Carelink')
};

carelink.init = function(options, cb) {
  options = options || {};
  this._jellyfish = options.jellyfish;
  cb();
};

carelink._createDriverManager = function(data, options) {
  options = options || {};
  var timezone = options.timezone || config.DEFAULT_TIMEZONE;

  var drivers = {
    'Carelink': carelinkDriver(pwdSimulator, this._jellyfish)
  };
  var configs = {
    'Carelink': {
      fileData: data,
      timezone: timezone
    }
  };

  return driverManager(drivers, configs);
};

carelink.upload = function(data, options, cb) {
  var dm = this._createDriverManager(data, options);
  dm.process('Carelink', function(err, result) {
    if (err) {
      return cb(err);
    }
    return cb(null, result.post_records);
  });
};

module.exports = carelink;