'use strict';

import angular from 'angular';

export default angular.module('helpDeskApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
