'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './openTicket.routes';

export class OpenTicketComponent {
  /*@ngInject*/
  constructor($http, Auth, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.date = new Date();
    this.$http = $http;
    this.Auth = Auth;
    this.short;
    this.long;
    this.category;
    this.typeList;

    this.categoryList = ['Software','Redes', 'Hardware', 'Mensajeria', 'Telefonia'];
    this.typeList = ['incidente', 'servicio'];
    $scope.name = '';
    this.Auth.getCurrentUserSync()
    .$promise
    .then(function(response){
      $scope.name = response.name;


    })


  }

  $onInit(){


  }

  sendTicket(){
    var ticket = {
      user: this.$scope.name,
      nombre: this.short,
      descripcion: this.long,
      categoria: this.category,
      tipo: this.type,
      fechaAbierto: this.date,
      fechaCerrado: '',
      sla: 1,
      estado: 'abierto'
    }

    var toPost = JSON.stringify(ticket);
    this.$http.post('/api/tickets', toPost)
    .then(data => {
      console.log(data.status);
      console.log(toPost);
    })
  }
  saveUser(user){
    this.name = user;
    console.log(this.name);
  }
}

export default angular.module('helpDeskApp.openTicket', [uiRouter])
  .config(routes)
  .component('openTicket', {
    template: require('./openTicket.html'),
    controller: OpenTicketComponent,
    controllerAs: 'openTicketCtrl'
  })
  .name;
