// Obtener todas las imágenes del carrusel
const carouselImages = document.querySelectorAll(".carousel-image");

// Establecer la primera imagen como activa
let activeImageIndex = 0;
carouselImages[activeImageIndex].classList.add("active");

// Función para pasar a la siguiente imagen
function nextImage() {
  carouselImages[activeImageIndex].classList.remove("active");
  activeImageIndex = (activeImageIndex + 1) % carouselImages.length;
  carouselImages[activeImageIndex].classList.add("active");
}

// Iniciar el carrusel y cambiar las imágenes cada 5 segundos
setInterval(nextImage, 5000);

// ...

const servicios = [
  "Embarazo normal",
  "Embarazo de alto riesgo",
  "Miomas uterinos",
  "Menopausia",
  "Virus del papiloma humano (VPH)",
  // Continuar con el resto de los servicios en la lista
];

document.querySelectorAll(".circulo-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.dataset.target;
    const filteredServicios = servicios.filter((servicio) =>
      servicio.startsWith(target)
    );

    const serviciosList = document.querySelector("#servicios-lista");
    serviciosList.innerHTML = "";
    filteredServicios.forEach((servicio) => {
      const listItem = document.createElement("li");
      listItem.textContent = servicio;
      serviciosList.appendChild(listItem);
    });
  });
});



  
