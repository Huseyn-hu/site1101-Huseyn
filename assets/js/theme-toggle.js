document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'site-theme';
    const body = document.body;
    const themeToggle =
      document.querySelector('.theme-toggle') ||
      document.querySelector('[data-theme-toggle]');
    const navToggle =
      document.querySelector('.nav-toggle') ||
      document.querySelector('[data-menu-toggle]');
    const navMenu = document.querySelector('.header__nav');
  
    const updateButtonUI = (theme) => {
      if (!themeToggle) return;
      
      const icon = themeToggle.querySelector('.header__theme-icon');
      const label = themeToggle.querySelector('.header__theme-label');
      const isDark = theme === 'dark';
      
      if (icon) {
        icon.textContent = isDark ? '🌙' : '☀️';
      }
      
      if (label) {
        label.textContent = isDark ? 'Dark' : 'Light';
      }
      
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute('aria-label', isDark ? 'Toggle light mode' : 'Toggle dark mode');
    };
  
    const applyTheme = (theme) => {
      const nextTheme = theme === 'dark' ? 'dark' : 'light';
      body.setAttribute('data-theme', nextTheme);
      localStorage.setItem(STORAGE_KEY, nextTheme);
      updateButtonUI(nextTheme);
    };
  
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    applyTheme(savedTheme);
  
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }
  });