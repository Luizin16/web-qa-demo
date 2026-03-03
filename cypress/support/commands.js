import { routes } from "../utils/routes";
import { sel } from "../utils/selectors";
import { mockLogin } from "../utils/api";

Cypress.Commands.add("loginUi", (email, password) => {
  mockLogin();
  cy.visit(routes.login);

  cy.get(sel.login.email).clear().type(email);
  cy.get(sel.login.password).clear().type(password);
  cy.get(sel.login.submit).click();

  cy.wait("@login");
});