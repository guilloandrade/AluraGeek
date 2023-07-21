const btnLupa2 = document.querySelector(".header__lupa2");
const btnLupa = document.querySelector(".header__lupa");
const barraBuscar = document.querySelector(".header__buscar");
const logo = document.querySelector(".header__logo");
const header = document.querySelector(".header");

function Lupa2() {
    barraBuscar.classList.add("miclase");
    btnLupa2.classList.add("lupaNone2");
    btnLupa.classList.add("lupaNone");
    header.classList.add("headerBusqueda");
    if (logo) {
        logo.classList.add("logomargen");
    }

    

}

function quitarClases() {
    barraBuscar.classList.remove("miclase");
    btnLupa2.classList.remove("lupaNone2");
    btnLupa.classList.remove("lupaNone");
    header.classList.remove("headerBusqueda");
    if (logo) {
        logo.classList.remove("logomargen");
    }

}

function clicFueraDeSeccion(event) {
    if (!barraBuscar.contains(event.target)) {
      quitarClases();
    }
  }

  btnLupa2.addEventListener("click", Lupa2);
  window.addEventListener("scroll", quitarClases);
  document.addEventListener("mousedown", clicFueraDeSeccion);