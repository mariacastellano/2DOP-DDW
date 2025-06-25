document.addEventListener('DOMContentLoaded', () => {
  // Animar enlaces del menú al hacer hover
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'transform 0.3s ease, color 0.3s ease';
      link.style.transform = 'translateY(-3px)';
      link.style.color = '#5a3d7c';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
      link.style.color = ''; // vuelve al color original del CSS
    });
  });

  // Smooth scroll para enlaces internos 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1); // quitar #
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // Crear botón para cambiar tema claro/oscuro
  const btnThemeToggle = document.createElement('button');
  btnThemeToggle.title = 'Cambiar tema claro/oscuro';
  btnThemeToggle.style.position = 'fixed';
  btnThemeToggle.style.top = '20px';
  btnThemeToggle.style.right = '20px';
  btnThemeToggle.style.padding = '10px 15px';
  btnThemeToggle.style.fontSize = '18px';
  btnThemeToggle.style.border = 'none';
  btnThemeToggle.style.borderRadius = '8px';
  btnThemeToggle.style.backgroundColor = '#b48bdb';
  btnThemeToggle.style.color = 'white';
  btnThemeToggle.style.cursor = 'pointer';
  btnThemeToggle.style.zIndex = '1000';
  document.body.appendChild(btnThemeToggle);

  // Función para aplicar tema y guardar en localStorage
  function aplicarTema(tema) {
    if (tema === 'dark') {
      document.body.classList.add('dark-theme');
      btnThemeToggle.textContent = '☀️'; // icono sol para modo claro
    } else {
      document.body.classList.remove('dark-theme');
      btnThemeToggle.textContent = '🌙'; // icono luna para modo oscuro
    }
    localStorage.setItem('tema', tema);
  }

  // Al cargar la página, aplicar tema guardado o por defecto claro
  const temaGuardado = localStorage.getItem('tema') || 'light';
  aplicarTema(temaGuardado);

  // Listener para el botón toggle
  btnThemeToggle.addEventListener('click', () => {
    const temaActual = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    aplicarTema(nuevoTema);
  });

  // Validación básica de formularios con clase 'needs-validation'
  document.querySelectorAll('form.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        alert('Por favor, complete todos los campos correctamente.');
      }
      form.classList.add('was-validated');
    });
  });
});
