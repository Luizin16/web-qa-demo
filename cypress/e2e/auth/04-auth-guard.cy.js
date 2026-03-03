import { routes } from "../../utils/routes";
import { sel } from "../../utils/selectors";

describe("Auth - Guard", () => {
  it("deve bloquear dashboard sem login", () => {
    cy.clearLocalStorage();
    cy.visit(routes.dashboard);
    cy.url().should("include", routes.login);
    cy.get(sel.login.title).should("be.visible");
  });
});