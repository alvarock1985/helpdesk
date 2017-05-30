'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('closedTickets', {
      url: '/closedTickets',
      template: '<closed-tickets></closed-tickets>'
    });
}
