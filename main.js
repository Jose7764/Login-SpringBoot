
const isCadastro = window.location.pathname.includes("cadastro.html");
const isLogin = window.location.pathname.includes("index.html");

if (isCadastro) {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const nome = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const senha = inputs[2].value;
    const confirmar = inputs[3].value;

    if (!nome || !email || !senha || !confirmar) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres!");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    const existe = usuarios.some((user) => user.email === email);
    if (existe) {
      alert("Esse e-mail já está cadastrado!");
      return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("Usuários cadastrados:", usuarios);

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}

if (isLogin) {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find((user) => user.email === email && user.senha === senha);

    if (usuario) {
      alert("Login bem-sucedido! Bem-vindo " + usuario.nome);
      console.log("Usuário logado:", usuario);
      
    } else {
      alert("Email ou senha incorretos!");
    }
  });
}
