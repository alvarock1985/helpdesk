'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './usuarios.routes';

export class UsuariosComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('helpDeskApp.usuarios', [uiRouter])
  .config(routes)
  .component('usuarios', {
    template: require('./usuarios.html'),
    controller: UsuariosComponent,
    controllerAs: 'usuariosCtrl'
  })
  .name;
