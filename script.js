const carouselDiv = document.getElementById("carousel");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRigth = document.getElementById("buttonRigth");
const header = document.querySelector("header");
const navMenu = document.getElementById('ulNav');

const newData = new Date().getFullYear();

fetch("/data.json")
  .then((response) => response.json())
  .then((projects) => {
    const carousel = document.getElementById("carousel");

    projects.forEach((project) => {
      const card = document.createElement("div");

      card.classList.add("carousel-card-element");

      card.innerHTML = `
            <img src=${project.pathImg} alt=""/>
            <div class="card-element-info">
                <h1>
                 ${project.titulo}
                </h1>

                <p>
                  ${project.detalhes}
                </p>

                <ul>
  ${project.tecnologias
    .map(
      (tech) => `
    <li>
      <img src="${tech}" alt="" />
    </li>
  `
    )
    .join("")}
</ul>
                <div class="card-element-buttons">
                  <a
                    href=${project.pathCodigo}
                    target="_blank"
                  >
                    Código
                  </a>
                  <a
                    href=${project.pathUrl}
                    target="_blank"
                  >
                    Acessar
                  </a>
                </div>

            </div>
        `;
      carousel.appendChild(card);
    });
  });

function handleLeft() {
  if (carouselDiv) {
    carouselDiv.scrollLeft -= carouselDiv.offsetWidth;
  }
}

function handleRigth() {
  if (carouselDiv) {
    carouselDiv.scrollLeft += carouselDiv.offsetWidth;
  }
}

// Footer & Header
function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const spanData = document.getElementById("data");

spanData.innerText = newData;

// Header

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header-fixo");
  } else {
    header.classList.remove("header-fixo");
  }
});

// Maquina digitalizadora
const texts = ["Desenvolvimento Web", "FrontEnd", "React", "Angular", "JavaScript", "Next.Js", "Node.Js"];
const typingSpeed = 150;
const deletingSpeed = 80;
const pauseDuration = 2000;

let currentText = "";
let textIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
  const fullText = texts[textIndex];

  if (!isDeleting) {
    currentText = fullText.substring(0, currentText.length + 1);
  } else {
    currentText = fullText.substring(0, currentText.length - 1);
  }

  typingElement.textContent = currentText;

  let timeout = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && currentText === fullText) {
    timeout = pauseDuration;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    timeout = typingSpeed;
  }

  setTimeout(type, timeout);
}

type(); // Inicia a animação


// Menu Mobile

function showMenuMobile(){
  navMenu.classList.toggle("nav-mobile");

  console.log('cliclou');
  
}