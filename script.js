

const servicios = {
  A: ["Adenomiosis", "Amenorrea primaria", "Amenorrea secundaria", "Aborto incompleto", "Aborto inevitable", "Aborto séptico", "Aborto espontáneo", "Absceso de Bartolino", "Absceso en la glándula areolar", "Adherencias uterinas", "Amenaza de aborto", "Ausencia de la menstruación"],
  B: ["Bacteriuria asintomática"],
  C: ["Cáncer de mama", "Cáncer de los ovarios", "Cáncer de útero", "Cáncer del cuello uterino", "Cáncer endometrial", "Candidiasis vaginal", "Cambios precancerosos del cuello uterino", "Cervicitis", "Chancroide", "Citomegalovirus (CMV)", "Climaterio y menopausia", "Cistitis", "Condiloma acuminado"],
  D: ["Diabetes gestacional", "Desminución del deseo sexual", "Disminución del flujo vaginal - leucorrea", "Displasia cervical", "Dolor asociado con la ovulación"],
  E: ["Esterilidad femenina", "Embarazo anembrionario (Huevo huero)", "Embarazo de alto riesgo", "Embarazo molar", "Embarazo normal", "Endometriosis", "Enfermedad benigna de las mamas", "Enfermedad de los ovarios poliquísticos", "Enfermedad fibroquística de las mamas", "Enfermedad inflamatoria pélvica (EIP)", "Enfermedad ovárica poliquística", "Enfermedad trofoblástica gestacional", "Enfermedades de la glándula mamaria", "Enfermedad de transmisión sexual femenina (ETS)", "Exceso de flujo vaginal - leucorrea"],
  F: ["Fibroadenoma de mama"],
  G: ["Glándula de Bartolino"],
  H: ["Hematoma retroplacentario", "Herpes genital", "Hiperandrogenismo", "Hipertensión inducida por el embarazo", "Hiperplasia endometrial benigna"],
  I: ["Infertilidad", "Infección de la vagina por levaduras", "Infección del tejido mamario", "Infección mamaria", "Infecciones por clamidia en mujeres", "Infección de vías urinarias", "Insuficiencia ovárica prematura", "Interrupción legal del embarazo"],
  M: ["Mastopatia fibroquística", "Menopausia", "Miomas uterinos"],
  O: ["Obesidad en el embarazo", "Ovarios poliquísticos"],
  P: ["Pérdida gestacional recurrente", "Preeclampsia"],
  Q: ["Quiste del conducto de Gartner", "Quistes ováricos fisiológicos", "Quistes ováricos funcionales"],
  S: ["Salpingitis", "Sangrado uterino anormal", "Sangrado uterino disfuncional", "Síndrome de hiperestimulación ovárica", "Síndrome de los ovarios poliquísticos (PCOS)"],
  T: ["Trastornos del desarrollo sexual", "Trastorno disfórico premenstrual (TDPM)"]
};

document.addEventListener("DOMContentLoaded", function() {
  const botonesServicio = document.querySelectorAll(".servicio-btn");
  const listaServicios = document.getElementById("lista-servicios");

  botonesServicio.forEach(btn => {
    btn.addEventListener("click", function() {
      const letra = this.getAttribute("data-letra");
      const serviciosConLetra = servicios[letra];
      
      let html = `<h4>Servicios que empiezan con ${letra}</h4>`;
      html += "<ul>";
      
      serviciosConLetra.forEach(servicio => {
        html += `<li>${servicio}</li>`;
      });
      
      html += "</ul>";
      
      listaServicios.innerHTML = html;
    });
  });
});

$('.carousel').on('slid.bs.carousel', function (e) {
  var href = $(e.relatedTarget).find('img').attr('src');
  $('.expand-icon').attr('href', href).attr('data-lightbox', 'carousel');
});

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'wrapAround': true
});


$('.expand-icon').on('click', function (e) {
  e.preventDefault();
});



$(window).on('load resize', function() {
  var carouselHeight = $('#carouselExampleIndicators .carousel-item.active img').height();
  $('#carousel-indicators').css('bottom', (carouselHeight + 10) + 'px');
});

$('.carousel').on('slide.bs.carousel', function() {
  var carouselHeight = $('.carousel-item.active img').height();
  $('#carousel-indicators').css('bottom', (carouselHeight + 10) + 'px');
});

