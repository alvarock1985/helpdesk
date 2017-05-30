'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ticketsHome.routes';

export class TicketsHomeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('helpDeskApp.ticketsHome', [uiRouter])
  .config(routes)
  .component('ticketsHome', {
    template: require('./ticketsHome.html'),
    controller: TicketsHomeComponent,
    controllerAs: 'ticketsHomeCtrl'
  })
  .name;
