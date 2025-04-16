$(document).ready(function() {
  // Abrir carta al tocar el corazón
  $('.heart-container').click(function() {
    $('.valentine-card').addClass('card-open');
  });

  // Cerrar carta
  $('.close-btn').click(function(e) {
    e.stopPropagation();
    $('.valentine-card').removeClass('card-open');
  });
});