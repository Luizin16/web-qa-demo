import { routes } from "../../utils/routes";
import { sel } from "../../utils/selectors";

describe("Auth - Validações", () => {
  it("deve exigir e-mail e senha", () => {
    cy.visit(routes.login);
    cy.get(sel.login.submit).click();
    cy.get(sel.login.error).should("be.visible");
  });
});