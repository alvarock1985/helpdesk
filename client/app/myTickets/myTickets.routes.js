'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('myTickets', {
      url: '/myTickets',
      template: '<my-tickets></my-tickets>'
    });
}
