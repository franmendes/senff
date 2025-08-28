describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("should not log in with invalid credentials", () => {
    cy.get("#login2").click();

    cy.get("#logInModalLabel").should("be.visible");

    cy.get("#loginusername").type("teste27");
    cy.get("#loginpassword").type("teste27");

    cy.once("window:alert", (msg) => {
      expect(msg).to.match(/User does not exist./);
    });

    cy.contains("button", "Log in").click();
  });

  it("should log in successfully", () => {
    cy.get("#login2").click();

    cy.get("#logInModalLabel").should("be.visible");

    cy.get("#loginusername").type("teste2708");
    cy.get("#loginpassword").type("teste2708");

    cy.contains("button", /^Log in$/i).click();

    cy.get("#nameofuser").should("contain", "Welcome teste2708");
  });
});
