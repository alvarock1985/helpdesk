'use strict';

describe('Component: UsuariosComponent', function() {
  // load the controller's module
  beforeEach(module('helpDeskApp.usuarios'));

  var UsuariosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    UsuariosComponent = $componentController('usuarios', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
