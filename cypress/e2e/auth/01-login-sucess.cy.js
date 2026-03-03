import { routes } from "../../utils/routes";
import { sel } from "../../utils/selectors";

describe("Auth - Login", () => {
  it("deve logar com sucesso e acessar dashboard", () => {
    cy.fixture("users").then((u) => {
      cy.loginUi(u.valid.email, u.valid.password);
      cy.url().should("include", routes.dashboard);
      cy.get(sel.dashboard.title).should("be.visible");
    });
  });
});