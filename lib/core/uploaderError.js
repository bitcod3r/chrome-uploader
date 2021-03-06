// == BSD2 LICENSE ==
// Copyright (c) 2014, Tidepool Project
//
// This program is free software; you can redistribute it and/or modify it under
// the terms of the associated License, which is identical to the BSD 2-Clause
// License as published by the Open Source Initiative at opensource.org.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
// FOR A PARTICULAR PURPOSE. See the License for more details.
//
// You should have received a copy of the License along with this program; if
// not, you can obtain one from Tidepool Project at tidepool.org.
// == BSD2 LICENSE ==

'use strict';

var sundial = require('sundial');

// Create a new object, that prototypally inherits from the Error constructor.
function UploaderError(message, stage, error) {

  this.name = this.constructor.name;
  this.message = message;

  var theStep = stage.Step || '';
  if(error && error.step){
    theStep = error.step;
  }

  this.debug = [
    message || stage.Message,'|',
    UploaderError.UTC_TIME, sundial.utcDateString(),'|',
    UploaderError.CODE, stage.Code,'|',
    UploaderError.STEP, theStep
  ].join(' ');

  this.originalError = { 'originalError' : error || {}};
}

UploaderError.UTC_TIME = 'UTC Time:';
UploaderError.CODE = 'Code:';
UploaderError.STEP = 'Step:';

UploaderError.prototype = Object.create(Error.prototype);
UploaderError.prototype.constructor = UploaderError;

exports = module.exports = UploaderError;