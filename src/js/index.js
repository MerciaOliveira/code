$(document).ready(function () {
  $("#projects").slick({
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    touchThreshold: 100,
  });
  const projectsHtml = createProjectList();
  injectList(projectsHtml);
});

function injectList(html) {
  $("#projects").slick("slickAdd", html);
}
function createProjectList() {
  const html = [];
  const projectsArray = [
    {
      name: "Pikere",
      desc: "asuhdiaushduia",
      url: "https://github.com/MerciaOliveira/pikere",
      src: "/src/assets/imgs/2.gif",
    },
    {
      name: "Pikere",
      desc: "2",
      url: "3",
      src: "/src/assets/imgs/2.gif",
    },
    {
      name: "Pikere",
      desc: "2",
      url: "3",
      src: "/src/assets/imgs/2.gif",
    },
  ];
  projectsArray.map(function (project) {
    if (project.name) {
      html.push(`
      <div class="code__container-project">
        <div class="code__container-project__block">
          <picture>
            <img src="${project.src}" alt="${project.src}" srcset="${project.src}" class="code__container-project__block__preview" />
          </picture>
          
          <div class="code__container-project__block__info">
            <div class="code__container-project__block__info__name">${project.name}</div>
            <div class="code__container-project__block__info__desc">${project.desc}</div>
            <a
              class="code__container-project__block__info__button"
              href=${project.url}
            >
              Repository
            </a>
          </div>
        </div>
      </div>`);
    }
  });
  return html.join("");
}
