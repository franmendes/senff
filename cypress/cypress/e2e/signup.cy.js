describe("Signup", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("should sign up a user successfully", () => {
    cy.get("#signin2").click();

    cy.get("#signInModalLabel").should("be.visible");

    const user = `fran_${Date.now()}`;

    cy.get("#sign-username").type(user);
    cy.get("#sign-password").type("senha_teste");

    cy.once("window:alert", (msg) => {
      expect(msg).to.match(/Sign up successful./);
    });

    cy.contains("button", "Sign up").click();
  });
});
