document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mainNav');

  function openMenu() {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'サイドバーを閉じる');
    nav.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'サイドバーを開く');
    nav.setAttribute('aria-hidden', 'true');
  }

  function toggleMenu() {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  btn.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      btn.focus();
    }
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMenu();
  });

  // 初期状態
  closeMenu();
});
