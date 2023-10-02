const dropdownItems = document.querySelectorAll(".dropdown-item");
let selectedLanguage = "pt-br";
const languageStrings = {
  'en': {
    "language-selector": "Language",
    "nav-bar-about": "About",
    "nav-bar-projects": "Projects",
    "nav-bar-contacting": "Contacting",
    "welcome-text": "Hi, my name is Matheus.",
    "welcome-subtext": "I'm a front-end developer.",
    'description': `My greatest boons at the moment are <strong>JavaScript,
    React e CSS</strong>, but i'm a fast learner and adapt well to new technologies.`,
    'subdescription': `For more details, you can check my CV at <a class="welcome-link" href="https://drive.google.com/file/d/17uJXKoX9VM4dFIdPv-FopqDBWVhi5fvz/view?usp=drive_link" target="_blank">this link</a>.`,
    "projects-header": "Here are some of my projects.",
    "daft-punk-text": `A soundboard app that plays a Daft Punk song.`,
    "daft-punk-subtext": `Built with: React`,
    "daft-punk-click": `Click here`,
    "quote-app-text": `An app that returns a random famous quote.`,
    "quote-app-subtext": `Built with: React, JSON parsing`,
    "quote-app-click": `Click here`,
    "weather-app-text": `A weather app that returns weather conditions to any desired place.`,
    "weather-app-subtext": `Built with: TailwindCSS, DaisyUI, OpenWeatherMap API, React`,
    "weather-app-click": `Click here`,
    "calculator-app-text": `A calculator app, with iPhone/IOS mockup design.`,
    "calculator-app-subtext": `Built with: React, Bootstrap, MathJS`,
    "calculator-app-click": `Click here`,
    "contacting-header": "Contacting",
  },
  "pt-br": {
    "language-selector": "Linguagem",
    "nav-bar-about": "Sobre",
    "nav-bar-projects": "Projetos",
    "nav-bar-contacting": "Contato",
    "welcome-text": "Oi, meu nome é Matheus.",
    "welcome-subtext": "Sou desenvolvedor front-end.",
    'description': `Meus pontos de desenvolvimento mais altos no momento são <strong>JavaScript,
    React e CSS</strong>, no entanto me adapto bem a novas tecnologias.`,
    'subdescription': `Para informações mais detalhadas sobre mim,
    <a
      target="_blank"
      class="welcome-link"
      href="https://drive.google.com/file/d/17uJXKoX9VM4dFIdPv-FopqDBWVhi5fvz/view?usp=sharing"
      >este link</a
    >
    contém meu currículo.`,
    "projects-header": "Aqui estão alguns dos meus projetos.",
    "daft-punk-text": `Um app que toca uma música do Daft Punk.`,
    "daft-punk-subtext": `Criado com: React`,
    "daft-punk-click": `Clique para acessar`,
    "quote-app-text": `Um app que retorna uma frase famosa aleatória.`,
    "quote-app-subtext": `Criado com: React, JSON parsing`,
    "quote-app-click": `Clique para acessar`,
    "weather-app-text": `Um aplicativo que mostra as condições do tempo em qualquer local.`,
    "weather-app-subtext": `Criado com: TailwindCSS, DaisyUI, OpenWeatherMap API, React`,
    "weather-app-click": `Clique para acessar`,
    "calculator-app-text": `Um aplicativo de calculadora, com design mockup do iPhone/IOS.`,
    "calculator-app-subtext": `Criado com: React, Bootstrap, MathJS`,
    "calculator-app-click": `Clique para acessar`,
    "contacting-header": "Contato"
  },
};

function languageApplier(language) {
  for (id of Object.keys(languageStrings[language])) {
    document.getElementById(id).innerHTML = languageStrings[language][id]
  }
}

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    selectedLanguage = this.getAttribute("data-lang");
    languageApplier(selectedLanguage)
  });
});


