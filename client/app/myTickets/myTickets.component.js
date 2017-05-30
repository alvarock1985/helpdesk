'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './myTickets.routes';

export class MyTicketsComponent {
  openTickets = [];
  tickets = [];
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.edit = false;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('ticket');
    });
  }


  $onInit(){
    this.$http.get('/api/tickets')
    .then(response => {
      this.tickets = response.data;

      for(var i in this.tickets){
        if(this.tickets[i].estado ==='abierto'){
          this.openTickets.push(this.tickets[i]);
        }
      }
    })
    console.log(this.openTickets);
    this.socket.syncUpdates('ticket', this.openTickets);
  }

  deleteTicket(ticket){
    this.$http.delete(`/api/tickets/${ticket._id}`);
  }

  updateTicket(ticket){
    this.$http.put(`/api/tickets/${ticket._id}`, ticket)
    this.socket.syncUpdates('ticket', this.tickets);
    this.reloadConfig();
  }

  editTicket(ticket){
    this.edit = true;
  }

  reloadConfig(){
    this.tickets = [];
    this.edit = false;
    this.$http.get('/api/tickets')
    .then(response => {
      this.tickets = response.data;
      this.socket.syncUpdates('ticket', this.tickets);
    })
  }
}



export default angular.module('helpDeskApp.myTickets', [uiRouter])
  .config(routes)
  .component('myTickets', {
    template: require('./myTickets.html'),
    controller: MyTicketsComponent,
    controllerAs: 'myTicketsCtrl'
  })
  .name;
