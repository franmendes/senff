describe("Purchase", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();

    cy.get("#logInModalLabel").should("be.visible");

    cy.get("#loginusername").type("teste2708");
    cy.get("#loginpassword").type("teste2708");

    cy.contains("button", /^Log in$/i).click();

    cy.get("#logInModal .close").click();
  });

  it("should purchase a product successfully", () => {
    cy.contains("a.hrefch", /samsung galaxy s6/i).click();

    cy.contains("a.btn", /Add to cart/i).click();

    cy.contains("a", /Cart/i).click();

    cy.contains("button", "Place Order").click();

    cy.get("#name").type("teste2708");
    cy.get("#country").type("Brasil");
    cy.get("#city").type("São Paulo");
    cy.get("#card").type("1234 5678 9012 3456");
    cy.get("#month").type("12");
    cy.get("#year").type("2026");

    cy.contains("button", "Purchase").click();

    cy.get(".sweet-alert").should("be.visible");
    cy.get(".confirm").click();
  });
});
