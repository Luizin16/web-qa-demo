export function mockLogin() {
  cy.intercept("POST", "/api/login", (req) => {
    const { email, password } = req.body;

    if (email === "qa@teste.com" && password === "123456") {
      req.reply({ statusCode: 200, body: { token: "fake-token-123" } });
    } else {
      req.reply({ statusCode: 401, body: { message: "Credenciais inválidas" } });
    }
  }).as("login");
}