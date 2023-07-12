() => {
  const baseUrl = "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"; // Replace with your base URL
  const baseUrl = "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";
	const baseUrl = "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";
  cy.visit(baseUrl + "/main.html");
  
  cy.get('nav').within(() => {
    cy.get('ul').within(() => {
      cy.get('li').should('have.length', 3);
      cy.get('a').should('have.length', 3);
    });
  });
}
