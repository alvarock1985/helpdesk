'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ticketsManage', {
      url: '/ticketsManage',
      template: '<tickets-manage></tickets-manage>'
    });
}
