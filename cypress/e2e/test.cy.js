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
   // Plays the game with the "Paper" option and checks the result
  it('Plays the game with the "Paper" option and checks the result', () => {
    //Get the "Paper" button that should exist and click on it
    cy.get('[data-cy="paper"]').should("exist").click();

    //Check that the user option is set to "Paper" 
    cy.get('[data-cy="user option"]').should("have.text", "Paper")

     //Check the computer option
     cy.get('[data-cy="computer option"]').then((Option) => {

       // If the computer option is set to "Paper"
       if (Option.text().includes("Paper")){
        cy.get('[data-cy="result"]').contains("It's a tie!"); //The result is a tie
     }
     // If the computer option is set to "Spock"
     else if ((Option.text().includes("Spock"))) {
      cy.get('[data-cy="result"]'). contains("Paper disproves Spock, You win!")
     }
     // If the computer option is set to "Rock"
     else if ((Option.text().includes("Rock"))) {
      cy.get('[data-cy="result"]'). contains("Paper covers Rock, You win!")
     }
     else {
      cy.get ('[data-cy="result"]').contains("Oh no, You lose :(")
    }
  });
})
  // Plays the game with the "Scissors" option and checks the result
  it('Plays the game with the "Scissors" option and checks the result', () => {
    //Get the "Paper" button that should exist and click on it
    cy.get('[data-cy="scissors"]').should("exist").click();

    //Check that the user option is set to "Scissors" 
    cy.get('[data-cy="user option"]').should("have.text", "Scissors")

     //Check the computer option
     cy.get('[data-cy="computer option"]').then((Option) => {

       // If the computer option is set to "Scissors"
       if (Option.text().includes("Scissors")){
        cy.get('[data-cy="result"]').contains("It's a tie!"); //The result is a tie
     }
     // If the computer option is set to "Lizard"
     else if ((Option.text().includes("Lizard"))) {
      cy.get('[data-cy="result"]'). contains("Scissors decapitates Lizard, You win!")
     }
     // If the computer option is set to "Paper"
     else if ((Option.text().includes("Paper"))) {
      cy.get('[data-cy="result"]'). contains("Scissors cuts Paper, You win!")
     }
     else {
      cy.get ('[data-cy="result"]').contains("Oh no, You lose :(")
    }
  });
  })
  // Plays the game with the "Lizard" option and checks the result
  it('Plays the game with the "Lizard" option and checks the result', () => {
    //Get the "Paper" button that should exist and click on it
    cy.get('[data-cy="lizard"]').should("exist").click();

    //Check that the user option is set to "Lizard" 
    cy.get('[data-cy="user option"]').should("have.text", "Lizard")

     //Check the computer option
     cy.get('[data-cy="computer option"]').then((Option) => {

       // If the computer option is set to "Lizard"
       if (Option.text().includes("Lizard")){
        cy.get('[data-cy="result"]').contains("It's a tie!"); //The result is a tie
     }
     // If the computer option is set to "Spock"
     else if ((Option.text().includes("Spock"))) {
      cy.get('[data-cy="result"]'). contains("Lizard poisons Spock, You win!")
     }
     // If the computer option is set to "Paper"
     else if ((Option.text().includes("Paper"))) {
      cy.get('[data-cy="result"]'). contains("Lizard eats Paper, You win!")
     }
     else {
      cy.get ('[data-cy="result"]').contains("Oh no, You lose :(")
    }
  });
  })
  // Plays the game with the "Spock" option and checks the result
  it('Plays the game with the "Spock" option and checks the result', () => {
    //Get the "Spock" button that should exist and click on it
    cy.get('[data-cy="Spock"]').should("exist").click();

    //Check that the user option is set to "Spock" 
    cy.get('[data-cy="user option"]').should("have.text", "Spock")

     //Check the computer option
     cy.get('[data-cy="computer option"]').then((Option) => {

       // If the computer option is set to "Spock"
       if (Option.text().includes("Spock")){
        cy.get('[data-cy="result"]').contains("It's a tie!"); //The result is a tie
     }
     // If the computer option is set to "Scissors"
     else if ((Option.text().includes("Scissors"))) {
      cy.get('[data-cy="result"]'). contains("Spock smashes Scissors, You win!")
     }
     // If the computer option is set to "Rock"
     else if ((Option.text().includes("Rock"))) {
      cy.get('[data-cy="result"]'). contains("Spock vaporizes Rock, You win!")
     }
     else {
      cy.get ('[data-cy="result"]').contains("Oh no, You lose :(")
    }
  })
  })
})
