// Obtener elementos del DOM
const menuToggle = document.querySelector('.button');
const menuItems = document.querySelector('.options');
const closeButton = document.querySelector('.close-button');

// Agregar evento de clic al botón del menú
menuToggle.addEventListener('click', function() {
  // Alternar la clase 'active' para mostrar/ocultar el menú
  menuItems.classList.toggle('active');

  // Verificar si el menú está activo
  if (menuItems.classList.contains('active')) {
    // Si el menú está activo, establecer el alto del cuerpo (DOM) al 100% de la página
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  } else {
    // Si el menú no está activo, restaurar el alto del cuerpo al valor predeterminado
    document.body.style.height = '';
    document.body.style.overflow = '';
  }
});

// Agregar evento de clic al botón de salida
closeButton.addEventListener('click', function() {
  // Ocultar el menú al hacer clic en el botón de salida
  menuItems.classList.remove('active');
  // Restaurar el alto del cuerpo al valor predeterminado
  document.body.style.height = '';
  document.body.style.overflow = '';
});

