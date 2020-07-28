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
      <picture class="code__width-container__project__image-container">
        <img src="${project.src}" alt="" srcset="${project.src}">
      </picture>
      `);
    }
  });
  return html.join("");
}
