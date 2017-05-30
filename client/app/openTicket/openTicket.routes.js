'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('openTicket', {
      url: '/openTicket',
      template: '<open-ticket></open-ticket>'
    });
}
