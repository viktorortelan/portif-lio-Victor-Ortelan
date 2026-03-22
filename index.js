const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const text = document.getElementById("modal-text");
const tags = document.getElementById("modal-tags");
const link = document.getElementById("modal-link");
const close = document.querySelector(".close");

function openModal(project) {
  modal.style.display = "flex";

  if (project === "imobiliaria") {
    title.innerText = "Feel Good INC";

    text.innerText = `Como parte do meu trabalho de conclusão de curso, desenvolvi um site para a imobiliária Feel Good INC, que oferece imóveis de moradia tanto na planta quanto prontos para morar. A plataforma permite aos usuários navegar por diversas opções de imóveis, facilitando a busca e a compra de propriedades. O site foi projetado com foco em uma interface amigável, proporcionando uma experiência de usuário intuitiva e responsiva, além de integrar ferramentas que otimizam o processo de compra e venda.`;

    tags.innerHTML = `
      <span>React</span>
      <span>SASS</span>
      <span>HTML</span>
      <span>JS</span>
      <span>SQL</span>
      <span>Git</span>
      <span>GitHub</span>
    `;

    link.href = "https://www.figma.com/design/TuaQaqHNxldVziJ97uMfne/imobiliaria?node-id=0-1";
  }

  if (project === "qrcode") {
    title.innerText = "Gerador de QR Code";

    text.innerText = `Desenvolvi um gerador de QR Code para uma feira de profissões do meu curso, com o objetivo de facilitar o controle de acesso e a administração do número de visitantes. A solução permitia gerar QR Codes únicos que eram escaneados na entrada, registrando a quantidade de pessoas que participavam do evento de maneira eficiente e organizada. O projeto foi fundamental para otimizar o gerenciamento de fluxo de pessoas, melhorando a logística e o controle de acesso ao evento.`;

    tags.innerHTML = `
      <span>React</span>
      <span>SASS</span>
      <span>API</span>
    `;

    link.href = "https://qrcodensf.netlify.app";
  }
}

close.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};