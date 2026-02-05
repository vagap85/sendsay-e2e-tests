describe('Full Flow Test', () => {
  it('should test basic flow', () => {
    cy.visit('/signin');
    cy.contains('Войти').should('be.visible');
  });
});