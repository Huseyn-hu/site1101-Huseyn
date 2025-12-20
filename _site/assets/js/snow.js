(function () {
  const snowButton = document.querySelector('.js-snow-toggle');
  if (!snowButton) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SNOW_COUNT_MIN = 60;
  const SNOW_COUNT_MAX = 100;
  const RUN_DURATION = 3500;
  const FADE_OUT_DURATION = 520;
  let snowActive = false;

  const getTheme = () => {
    const bodyTheme = document.body.getAttribute('data-theme');
    const htmlTheme = document.documentElement.getAttribute('data-theme');
    return (bodyTheme || htmlTheme || '').toLowerCase();
  };

  const showToast = (message, duration = 2000) => {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('is-visible');
    });

    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 180);
    }, duration);
  };

  const createFlake = () => {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    const size = 2 + Math.random() * 4;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.opacity = (0.35 + Math.random() * 0.5).toFixed(2);
    flake.style.animationDuration = `${(2.5 + Math.random() * 1.5).toFixed(2)}s`;
    flake.style.animationDelay = `${(Math.random() * 0.35).toFixed(2)}s`;
    flake.style.setProperty('--drift', `${(Math.random() * 24 - 12).toFixed(1)}px`);
    return flake;
  };

  const startSnow = () => {
    if (snowActive) return;
    snowActive = true;
    snowButton.disabled = true;

    const overlay = document.createElement('div');
    overlay.id = 'snow-overlay';
    const fragment = document.createDocumentFragment();
    const flakeTotal =
      SNOW_COUNT_MIN + Math.floor(Math.random() * (SNOW_COUNT_MAX - SNOW_COUNT_MIN + 1));

    for (let i = 0; i < flakeTotal; i += 1) {
      fragment.appendChild(createFlake());
    }

    overlay.appendChild(fragment);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add('is-active');
    });

    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      overlay.remove();
      snowActive = false;
      snowButton.disabled = false;
    };

    setTimeout(() => {
      overlay.classList.add('is-leaving');
    }, RUN_DURATION);

    overlay.addEventListener('transitionend', (event) => {
      if (event.target === overlay && overlay.classList.contains('is-leaving')) {
        cleanup();
      }
    });

    setTimeout(cleanup, RUN_DURATION + FADE_OUT_DURATION + 80);
  };

  snowButton.addEventListener('click', () => {
    if (snowActive) return;

    if (prefersReduced.matches) {
      showToast('Reduced motion enabled', 2000);
      return;
    }

    if (getTheme() !== 'dark') {
      showToast('Please switch to dark mode to see the snow.', 2000);
      return;
    }

    startSnow();
  });
})();
