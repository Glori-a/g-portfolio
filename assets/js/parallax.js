window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.me-background');
    const scrollPosition = window.scrollY;
  
    // Ajustez le fond pour qu'il se déplace lentement en fonction du défilement
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  