'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ticketsHome', {
      url: '/ticketsHome',
      template: '<tickets-home></tickets-home>'
    });
}
