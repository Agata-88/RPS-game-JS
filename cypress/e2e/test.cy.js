describe('template spec', () => {
  // Open the URL before each test
  beforeEach(()=> {
    cy.visit('http://127.0.0.1:5500/index.html')
  });

  // Plays the game with the "Rock" option and checks the result
  it('Plays the game with the "Rock" option and checks the result', () => {
    //Get the "Rock" button that should exist and click on it
    cy.get('[data-cy="rock"]').should("exist").click();

    //Check that the user option is set to "Rock" 
    cy.get('[data-cy="user option"]').should("have.text", "Rock")

    //Check the computer option
    cy.get('[data-cy="computer option"]').then((Option) => {
      // If the computer option is set to "Rock"
      if (Option.text().includes("Rock")){
        cy.get('[data-cy="result"]').contains("It's a tie!"); //The result is a tie
      }
      // If the computer option is set to "Paper"
      //else if (Option.text().includes("Paper")){
        //cy.get('[data-cy="result"]').contains("Oh no, You lose :(") // Computer wins
      //}
      // If the computer option is set to "Scissors"
      else if ((Option.text().includes("Scissors"))) {
        cy.get('[data-cy="result"]'). contains("Rock crushes Scissors, You win!")
      }
      // If the computer option is set to "Lizard"
      else if ((Option.text().includes("Lizard"))) {
        cy.get('[data-cy="result"]'). contains("Rock crushes Lizard, You win!")
      }
      else {
        cy.get ('[data-cy="result"]').contains("Oh no, You lose :(")
      }

    });
  })
})