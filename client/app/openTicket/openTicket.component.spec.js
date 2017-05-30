'use strict';

describe('Component: OpenTicketComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.openTicket'));

  var OpenTicketComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    OpenTicketComponent = $componentController('openTicket', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
