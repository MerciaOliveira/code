$(document).ready(function () {
  $("#code__width-container__project").slick({
    infinite: true,
    arrows: false,
    dots: true,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    touchThreshold: 100,
    customPaging: function (slider, i) {
      return (
        '<div class="code__width-container__project__dots" id=' + i + "></div>"
      );
    },
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
      desc:
        "Aplicativo para desktop de upload de imagens, usando <b>Electron</b>, <b>Puppeteer</b> e <b>VueJS</b>",
      url: "https://github.com/MerciaOliveira/pikere",
      src: "../imgs/2.gif",
    },
    {
      name: "AngularJS Login Project",
      desc:
        "CRUD com login e upload de dados, usando <b>AngularJS</b>, <b>NodeJS</b> e <b>MongoDB</b>",
      url: "https://github.com/MerciaOliveira/angularjs-login-project",
      src: "../imgs/1.gif",
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
