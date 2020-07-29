$(document).ready(function () {
  $("#code__width-container__project").slick({
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    touchThreshold: 100,
  });
  const projectsHtml = createProjectList();
  injectList(projectsHtml);
});

function injectList(html) {
  $("#code__width-container__project").slick("slickAdd", html);
}
function createProjectList() {
  const html = [];
  const projectsArray = [
    {
      name: "Pikere",
      desc: "Aplicativo desktop para upload de imagens",
      url: "https://github.com/MerciaOliveira/pikere",
      src: "/src/assets/imgs/2.gif",
    },
    {
      name: "Pikere",
      desc: "2",
      url: "#",
      src: "/src/assets/imgs/1.gif",
    },
    {
      name: "Pikere",
      desc: "2",
      url: "#",
      src: "/src/assets/imgs/2.gif",
    },
  ];
  projectsArray.map(function (project) {
    if (project.name) {
      html.push(`
      <div class="code__width-container__project__image-container">
        <div class="code__width-container__project__image-container__image" style="--image: url(${project.src})">
          <div class="code__width-container__project__image-container__link-container">
            <a href="${project.url}" target="_blank">Source code</a>
          </div>
          <div class="code__width-container__project__image-container__name">${project.name}</div>
          <div class="code__width-container__project__image-container__desc">${project.desc}</div>
        </div>
      </div>
      `);
    }
  });
  return html.join("");
}
