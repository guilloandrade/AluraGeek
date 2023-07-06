$(document).ready(function() {
    $('#loginLink').click(function(e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
      // Añade la clase para la transición de desvanecimiento
      $('body').addClass('fadeout');
  
      setTimeout(function() {
        // Navega a la página de productos
        window.location.href = 'login.html';
      }, 50) ; 
    });
  });