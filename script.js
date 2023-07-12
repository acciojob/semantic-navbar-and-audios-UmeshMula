() => {
  const baseUrl = "http://example.com"; // Replace with your base URL
  
  cy.visit(baseUrl + "/main.html");
  
  cy.get('nav').within(() => {
    cy.get('ul').within(() => {
      cy.get('li').should('have.length', 3);
      cy.get('a').should('have.length', 3);
    });
  });
}
