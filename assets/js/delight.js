(function () {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Header glow effect (desktop only)
  const header = document.querySelector('.site-header');
  if (header && supportsHover.matches && !prefersReduced.matches) {
    let pending = false;
    let lastX = 0;
    let lastY = 0;

    const applyVars = () => {
      header.style.setProperty('--mx', `${lastX}px`);
      header.style.setProperty('--my', `${lastY}px`);
      pending = false;
    };

    const queueUpdate = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(applyVars);
      }
    };

    header.addEventListener('mousemove', (event) => {
      const rect = header.getBoundingClientRect();
      lastX = event.clientX - rect.left;
      lastY = event.clientY - rect.top;
      queueUpdate();
    });

    header.addEventListener('mouseenter', () => {
      header.classList.add('site-header--glow');
    });

    header.addEventListener('mouseleave', () => {
      header.classList.remove('site-header--glow');
    });
  }

  // Snow interaction
  const snowButton = document.querySelector('[data-snow-button]');
  if (!snowButton) return;

  const SNOW_DURATION = 1500;
  const SNOW_COUNT = 100;
  let snowRunning = false;

  const showReducedMotionMessage = () => {
    const existing = document.querySelector('.snow-message');
    if (existing) existing.remove();

    const message = document.createElement('div');
    message.className = 'snow-message';
    message.textContent = 'Snow disabled by reduced motion settings.';
    document.body.appendChild(message);

    requestAnimationFrame(() => {
      message.classList.add('is-visible');
    });

    setTimeout(() => {
      message.classList.remove('is-visible');
      setTimeout(() => message.remove(), 300);
    }, 1000);
  };

  const startSnow = () => {
    if (snowRunning) return;
    snowRunning = true;
    snowButton.disabled = true;

    const overlay = document.createElement('div');
    overlay.className = 'snow-overlay';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    overlay.appendChild(canvas);
    document.body.appendChild(overlay);

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      r: 1 + Math.random() * 2.5,
      vy: 0.8 + Math.random() * 1.3,
      vx: (Math.random() - 0.5) * 0.6,
    });

    const flakes = Array.from({ length: SNOW_COUNT }, createParticle);
    const endAt = performance.now() + SNOW_DURATION;
    let rafId = null;

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

      for (const flake of flakes) {
        flake.x += flake.vx;
        flake.y += flake.vy;

        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }

        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (performance.now() < endAt) {
        rafId = requestAnimationFrame(tick);
      } else {
        cleanup();
      }
    };

    const cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      overlay.remove();
      snowButton.disabled = false;
      snowRunning = false;
    };

    tick();
  };

  snowButton.addEventListener('click', () => {
    if (prefersReduced.matches) {
      snowButton.disabled = true;
      showReducedMotionMessage();
      setTimeout(() => {
        snowButton.disabled = false;
      }, 1000);
      return;
    }

    startSnow();
  });
})();
