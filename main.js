// O conteúdo de texto de cada seção está armazenado nessa variável, organizando de maneira prática a fonte de cada página
const sections = {
  sobre: `<h2>Sobre mim</h2>
    <p>Olá! Sou Maria Rita, 26 anos, desenvolvedora apaixonada pelo universo digital. Carioca da gema, entrei no mundo do desenvolvimento web há cerca de 3 anos, com foco especial em front-end, onde encontro o equilíbrio perfeito entre criatividade e lógica. Tenho apresentado muito interesse nas áreas de ciberssegurança e DevOps, sempre em busca de expandir meus horizontes tecnológicos.</p>
    <p>Quando não estou codando, você pode me encontrar percorrendo exposições em museus, na sala escura do cinema assistindo a qualquer filme de terror que estiver em cartaz ou jogando Baldur's Gate III pela oitava vez.</p>`,

  formacao: `<h2>Formação Profissional</h2>
    <p>Minha jornada acadêmica começou com um bacharelado em Psicologia pela Universidade Federal Fluminense, de onde carrego uma bagagem preciosa sobre comportamento humano e interações sociais – habilidades que trago para o desenvolvimento de interfaces intuitivas. Minha transição para a tecnologia foi consolidada através de uma imersiva formação full stack de 6 meses na escola Resilia, onde construí bases sólidas em desenvolvimento web. Atualmente, estou expandindo meus conhecimentos técnicos com o curso de Engenharia de Software pela UNINTER.</p>
    <p>Meu arsenal técnico inclui HTML5, CSS3 (incluindo Flexbox e Grid), JavaScript ES6+, React (com hooks e context API), Node.js com Express, versionamento com Git/GitHub, bancos de dados SQL (MySQL e PostgreSQL), além de Python para automação e Java para aplicações robustas.</p>
    <p>No campo de idiomas, possuo inglês fluente, espanhol intermediário que me permite comunicação eficaz, e estou nos primeiros passos do francês.</p>`,

  portfolio: `<h2>Portfólio</h2>
    <p>Explore meu <a href="https://github.com/55021">Github</a> para visualizar minha jornada de desenvolvimento e evolução técnica através de projetos como:</p>
    <ul>
      <li><a href="https://55021.github.io/Projeto-APOD/">NASA Astronomy Picture of the Day</a> - Uma aplicação interativa que conecta-se à API da NASA para exibir e explicar a imagem astronômica do dia, permitindo também consultar imagens de datas anteriores.</li>
      <li><a href="https://55021.github.io/Projeto-Final-Modulo-I/">Jogo de Escolha Sua Própria Aventura</a> - Uma narrativa interativa onde suas decisões moldam o desenrolar da história, desenvolvida com JavaScript puro e técnicas avançadas de manipulação do DOM.</li>
    </ul>`,

  contato: `<h2>Contato</h2>
    <p>Para entrar em contato, preencha o formulário abaixo:</p>
    <form id="formulario-contato">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" placeholder="Seu nome">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Seu email">
      </div>
      <div class="form-group">
        <label for="assunto">Assunto:</label>
        <input type="text" name="assunto" id="assunto">
      </div>
      <div class="form-group">
        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem" rows="5" placeholder="Digite aqui sua mensagem"></textarea>
      </div>
      <button type="button" onclick="alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')">Enviar mensagem</button>
    </form>
    <p>Ou entre em contato diretamente:</p>
    <p>Email: <a href="mailto:bananinha@live.com">bananinha@live.com</a></p>
    <p>Telefone/WhatsApp: <a href="tel:+5521999999999">(21) 99999-9999</a></p>`,
};

// Para determinar qual conteúdo aparecerá em tela, a função setActive tem o objetivo simples de remover a classe "active" de todos os links e adicioná-la somente ao link clicado, que recebemos como parâmetro
function setActive(linkId) {
  document
    .querySelectorAll("nav a")
    .forEach((a) => a.classList.remove("active"));
  document.getElementById(linkId).classList.add("active");
}

// Por fim, aqui estamos mapeando o evento de click em cada um dos links da página com o método de event listening. Quando um link é clicado, enviamos seu id para a função setActive e atualizamos o conteúdo da seção principal com o conteúdo correspondente da variável sections.
document.getElementById("link-sobre").onclick = function (e) {
  e.preventDefault();
  document.getElementById("content").innerHTML = sections.sobre;
  setActive("link-sobre");
};

document.getElementById("link-formacao").onclick = function (e) {
  e.preventDefault();
  document.getElementById("content").innerHTML = sections.formacao;
  setActive("link-formacao");
};

document.getElementById("link-portfolio").onclick = function (e) {
  e.preventDefault();
  document.getElementById("content").innerHTML = sections.portfolio;
  setActive("link-portfolio");
};

document.getElementById("link-contato").onclick = function (e) {
  e.preventDefault();
  document.getElementById("content").innerHTML = sections.contato;
  setActive("link-contato");
};
