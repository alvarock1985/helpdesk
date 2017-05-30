'use strict';

describe('Component: ClosedTicketsComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.closedTickets'));

  var ClosedTicketsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClosedTicketsComponent = $componentController('closedTickets', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
