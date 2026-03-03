import { routes } from "../../utils/routes";
import { sel } from "../../utils/selectors";

describe("Auth - Logout", () => {
  it("deve deslogar e bloquear dashboard", () => {
    cy.visit(routes.login);
    cy.window().then((win) => win.localStorage.setItem("qa_demo_token", "fake-token-123"));

    cy.visit(routes.dashboard);
    cy.get(sel.dashboard.title).should("be.visible");

    cy.get(sel.dashboard.logout).click();
    cy.url().should("include", routes.login);

    cy.visit(routes.dashboard);
    cy.url().should("include", routes.login);
  });
});