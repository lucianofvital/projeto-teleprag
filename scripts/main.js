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
