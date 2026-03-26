/* Indito Blog — main.js */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initIngredientChecks();
});

/* ── Sticky nav scroll effect ── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  const overlay = document.querySelector('.nav__overlay');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');

  // Scroll shadow
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  const toggleMobile = (open) => {
    mobileNav?.classList.toggle('open', open);
    overlay?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.contains('open');
    toggleMobile(!isOpen);
  });

  overlay?.addEventListener('click', () => toggleMobile(false));
  mobileLinks.forEach(link => link.addEventListener('click', () => toggleMobile(false)));
}

/* ── Ingredient checkbox persistence ── */
function initIngredientChecks() {
  const items = document.querySelectorAll('.ingredient-item');
  if (!items.length) return;

  // Load saved state
  const slug = document.querySelector('[data-recipe-slug]')?.dataset.recipeSlug;
  if (slug) {
    const saved = JSON.parse(localStorage.getItem(`indito-checked-${slug}`) || '[]');
    items.forEach(item => {
      if (saved.includes(item.dataset.ingredient)) {
        item.classList.add('checked');
      }
    });
  }

  // Click handler
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      if (slug) {
        const checked = [...document.querySelectorAll('.ingredient-item.checked')]
          .map(el => el.dataset.ingredient);
        localStorage.setItem(`indito-checked-${slug}`, JSON.stringify(checked));
      }
    });
  });
}
