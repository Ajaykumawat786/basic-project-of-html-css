$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
  
      const name = $('input[name="name"]').val();
      const email = $('input[name="email"]').val();
      const message = $('textarea[name="message"]').val();
  
      if (name && email && message) {
        $('#responseMsg').html(`<p>Thanks, ${name}! Your message has been received ✅</p>`);
        $('#contactForm')[0].reset();
      } else {
        $('#responseMsg').html("<p>Please fill out all fields 😬</p>");
      }
    });
  
    // Smooth scroll
    $('nav a').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
    });
  });
  