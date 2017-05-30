'use strict';

describe('Component: MyTicketsComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.myTickets'));

  var MyTicketsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MyTicketsComponent = $componentController('myTickets', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
