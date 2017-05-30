'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ticketsManage.routes';

export class TicketsManageComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('helpDeskApp.ticketsManage', [uiRouter])
  .config(routes)
  .component('ticketsManage', {
    template: require('./ticketsManage.html'),
    controller: TicketsManageComponent,
    controllerAs: 'ticketsManageCtrl'
  })
  .name;
