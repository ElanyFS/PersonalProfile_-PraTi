const carouselDiv = document.getElementById("carousel");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRigth = document.getElementById("buttonRigth");

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

const spanData = document.getElementById('data');

spanData.innerText = newData