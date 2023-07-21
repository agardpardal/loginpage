function login() {
  // Obter os valores inseridos nos campos de usuário e senha
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar se as credenciais são válidas (usuário: "user", senha: "1234")
  if (username === "user" && password === "1234") {
    alert("Login bem-sucedido! Bem-vindo, " + username + "!");
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}

// Adicionar um evento de clique ao botão de login
document.getElementById('loginButton').addEventListener('click', login);
