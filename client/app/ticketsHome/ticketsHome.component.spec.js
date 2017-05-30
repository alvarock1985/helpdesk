'use strict';

describe('Component: TicketsHomeComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.ticketsHome'));

  var TicketsHomeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TicketsHomeComponent = $componentController('ticketsHome', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
