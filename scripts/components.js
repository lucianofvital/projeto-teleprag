// Função para carregar componentes HTML
async function loadComponent(elementId, componentPath) {
  try {
    // Busca o componente HTML
    const response = await fetch(componentPath);
    const html = await response.text();

    // Insere o componente no elemento
    document.getElementById(elementId).innerHTML = html;

    // Atualiza links ativos no menu
    updateActiveLinks();
  } catch (error) {
    console.error("Erro ao carregar componente:", error);
  }
}

// Função para atualizar links ativos no menu
function updateActiveLinks() {
  const currentPath = window.location.pathname;
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

// Função para corrigir rolagem lateral
function fixScrolling() {
  document.documentElement.style.overflow = "hidden";
  setTimeout(() => {
    document.documentElement.style.overflow = "";
  }, 10);
}

// Função para inicializar componentes
function initComponents() {
  // Carrega header e footer
  loadComponent("header-container", "../components/header.html");
  loadComponent("footer-container", "../components/footer.html");

  // Corrige rolagem ao carregar e redimensionar
  window.addEventListener("load", fixScrolling);
  window.addEventListener("resize", fixScrolling);
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initComponents);
