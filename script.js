/* =====================================
   CHAMA SERVIÇO
   Pirapora e Buritizeiro - MG
===================================== */

/*
  IMPORTANTE:
  Substitua pelo número de WhatsApp
  da administração da plataforma.

  Formato: 5538999999999
*/

const WHATSAPP_ADMIN = "5538999999999";

const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_ADMIN}`;


/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  menuToggle.textContent =
    navMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


/* SELECIONAR SERVIÇO */

function selecionarServico(servico) {

  const campo = document.getElementById("servico");

  campo.value = servico;

  document.getElementById("orcamento").scrollIntoView({
    behavior: "smooth"
  });

}


/* FORMULÁRIO DE ORÇAMENTO */

const budgetForm = document.getElementById("budgetForm");

budgetForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();

  const telefone = document.getElementById("telefone").value.trim();

  const cidade = document.getElementById("cidade").value;

  const servico = document.getElementById("servico").value;

  const descricao = document.getElementById("descricao").value.trim();


  if (!nome || !telefone || !cidade || !servico || !descricao) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const mensagem = `
🌿 *NOVA SOLICITAÇÃO - CHAMA SERVIÇO*

👤 Cliente: ${nome}

📱 Telefone: ${telefone}

📍 Cidade: ${cidade} - MG

🔧 Serviço: ${servico}

📝 Descrição:
${descricao}

-------------------------
CHAMA SERVIÇO
Pirapora e Buritizeiro - MG
  `;

  const url = WHATSAPP_LINK + "?text=" +
    encodeURIComponent(mensagem);

  window.open(url, "_blank", "noopener,noreferrer");

});


/* CADASTRO DE PROFISSIONAIS */

function cadastrarProfissional(event) {

  event.preventDefault();

  const mensagem = `
👷 *INTERESSE EM SER PROFISSIONAL*

Olá! Quero fazer parte da plataforma Chama Serviço.

Gostaria de receber informações sobre o cadastro de profissionais.

📍 Atendimento: Pirapora e Buritizeiro - MG.
  `;

  const url = WHATSAPP_LINK + "?text=" +
    encodeURIComponent(mensagem);

  window.open(url, "_blank", "noopener,noreferrer");

}


/* BOTÃO FLUTUANTE WHATSAPP */

const whatsappFloat = document.getElementById("whatsappFloat");

const mensagemInicial =
  "Olá! Gostaria de conhecer os serviços do Chama Serviço.";

whatsappFloat.href =
  WHATSAPP_LINK + "?text=" + encodeURIComponent(mensagemInicial);


/* ANO AUTOMÁTICO */

document.getElementById("year").textContent =
  new Date().getFullYear();
