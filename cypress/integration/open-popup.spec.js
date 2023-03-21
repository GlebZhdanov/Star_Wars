describe('popup People', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('open popup ingredient', () => {
    cy.get('#button').click();
    cy.get('#people-card').should('exist');
    cy.get('#people-card').click();
    cy.get('#popup').should('exist');
    cy.get('#close-button').click();
    cy.get('#people-card').should('exist');
  });
});
