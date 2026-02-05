describe('Создание email-рассылки', () => {
  before(() => {
    cy.visit('https://app.sendsay.ru/signin');
    cy.wait(3000);
    cy.fixture('users').then((users) => {
      const { email, password } = users.validUser;
      cy.get('input').eq(0).type(email);
      cy.get('input').eq(1).type(password, { log: false });
      cy.get('button').contains('Войти').click({ force: true });
      cy.url({ timeout: 20000 }).should('not.include', '/signin');
      cy.wait(3000);
    });
  });

  it('Переходит в раздел "Рассылки" и проверяет доступность', () => {
    cy.visit('https://app.sendsay.ru/campaigns/issues');
    cy.wait(3000);
    
    // Проверяем что мы на странице рассылок
    cy.url().should('include', '/campaigns');
    cy.get('body').should('contain', 'Рассылки');
    cy.screenshot('campaigns-page');
    
    // Проверяем что есть хотя бы какие-то элементы на странице
    cy.get('body').should('not.be.empty');
  });
  
  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});