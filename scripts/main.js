document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    delay: 100,
  });

  // Controle dos botões flutuantes
  const backToTop = document.getElementById("backToTop");
  const whatsappButton = document.querySelector(".floating-whatsapp");
  const aboutSection = document.getElementById("sobre");

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Botão Voltar ao Topo
    if (scrollTop > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    // Botão WhatsApp
    const aboutOffset = aboutSection.offsetTop;
    if (scrollTop >= aboutOffset) {
      whatsappButton.classList.add("visible");
    } else {
      whatsappButton.classList.remove("visible");
    }
  }

  // Adiciona listener de scroll
  window.addEventListener("scroll", handleScroll);

  // Scroll suave ao topo
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Scroll suave para links do menu
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Inicialização do carrossel de pragas
document.addEventListener("DOMContentLoaded", function () {
  // Configuração do carrossel
  const pragasCarousel = new bootstrap.Carousel(
    document.getElementById("pragasCarousel"),
    {
      interval: 3000, // Tempo entre slides (3 segundos)
      wrap: true, // Loop infinito
      touch: true, // Habilita gestos touch
    }
  );

  // Pausa o carrossel no hover (opcional)
  document
    .querySelector("#pragasCarousel")
    .addEventListener("mouseenter", function () {
      pragasCarousel.pause();
    });

  document
    .querySelector("#pragasCarousel")
    .addEventListener("mouseleave", function () {
      pragasCarousel.cycle();
    });
});
