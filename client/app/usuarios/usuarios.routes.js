'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('usuarios', {
      url: '/usuarios',
      template: '<usuarios></usuarios>'
    });
}
