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
})();
