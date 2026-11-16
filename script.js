// 1. Menu no celular: botão, Escape e seleção de uma seção.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navegacao");
const mobileLayout = window.matchMedia("(max-width: 760px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
document.body.classList.add("js");

function setMenu(open, returnFocus = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("is-open", open);
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobileLayout.matches) return;
  setMenu(false);
  const section = document.querySelector(link.hash);
  if (section) {
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  }
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false, true);
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
mobileLayout.addEventListener("change", () => setMenu(false));

// 2. Filtros: os cards continuam no HTML e funcionam sem JavaScript.
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    let count = 0;
    projectCards.forEach((card) => {
      const visible =
        button.dataset.filter === "todos" ||
        (button.dataset.filter === "principais" && card.dataset.featured === "true") ||
        card.dataset.category === button.dataset.filter;
      card.hidden = !visible;
      if (visible) count += 1;
    });
    document.querySelector("#filter-status").textContent =
      `${count} ${count === 1 ? "projeto exibido" : "projetos exibidos"}.`;
  });
});

document.querySelector('[data-filter="principais"]').click();

// 3. Aparição leve: conteúdo visível caso o navegador não ofereça suporte.
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-pending");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-pending");
    revealObserver.observe(element);
  });
  // Uma mudança na preferência também revela o conteúdo que ainda está fora da tela.
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      document
        .querySelectorAll(".is-pending")
        .forEach((element) => element.classList.remove("is-pending"));
      revealObserver.disconnect();
    }
  });
}

// 4. Brilho decorativo seguindo o ponteiro, apenas em dispositivos adequados.
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });
}

// 5. Ano do rodapé e destaque da seção visível na navegação.
document.querySelector("#current-year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll("a").forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => sectionObserver.observe(section));
}

// 6. Origin Button: mede o preenchimento sem alterar cliques ou navegação.
document.querySelectorAll('.origin-button').forEach((button) => {
  function updateOrigin(x, y) {
    const { width, height } = button.getBoundingClientRect();
    const radius = Math.ceil(Math.max(
      Math.hypot(x, y), Math.hypot(width - x, y),
      Math.hypot(x, height - y), Math.hypot(width - x, height - y)
    )) + 1;
    button.style.setProperty('--origin-x', `${x}px`);
    button.style.setProperty('--origin-y', `${y}px`);
    button.style.setProperty('--origin-radius', `${radius}px`);
  }
  function fromPointer(event) {
    const bounds = button.getBoundingClientRect();
    updateOrigin(event.clientX - bounds.left, event.clientY - bounds.top);
  }
  button.addEventListener('pointerenter', fromPointer);
  button.addEventListener('pointerdown', fromPointer);
  button.addEventListener('focus', () => {
    if (!button.matches(':focus-visible')) return;
    const { width, height } = button.getBoundingClientRect();
    updateOrigin(width / 2, height / 2);
  });
});
