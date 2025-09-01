function login() {
  const usuario = document.getElementById("username").value.trim();
  const senha = document.getElementById("password").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (usuario === "crecre" && senha === "Clecio2025") {
    mensagem.style.color = "#90ee90";
    mensagem.textContent = "✅ Login realizado com sucesso!";
    
    // Redirecionar após pequeno delay
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);
    
  } else {
    mensagem.style.color = "#ff5050";
    mensagem.textContent = "❌ Usuário ou senha incorretos.";
  }
}
