'use strict';

describe('Component: TicketsManageComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.ticketsManage'));

  var TicketsManageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TicketsManageComponent = $componentController('ticketsManage', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
