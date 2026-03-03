import { routes } from "../../utils/routes";
import { sel } from "../../utils/selectors";
import { mockLogin } from "../../utils/api";

describe("Auth - Login inválido", () => {
  it("deve mostrar erro para credenciais inválidas", () => {
    mockLogin();

    cy.fixture("users").then((u) => {
      cy.visit(routes.login);
      cy.get(sel.login.email).type(u.invalid.email);
      cy.get(sel.login.password).type(u.invalid.password);
      cy.get(sel.login.submit).click();

      cy.wait("@login");
      cy.get(sel.login.error).should("contain", "Credenciais inválidas");
      cy.url().should("include", routes.login);
    });
  });
});