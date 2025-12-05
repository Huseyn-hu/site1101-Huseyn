(() => {
  const searchInput = document.getElementById('site-search');
  const resultsList = document.querySelector('[data-search-results]');

  if (!searchInput || !resultsList) return;

  const searchIndex = [
    {
      title: 'Home',
      url: '/',
      keywords: [
        'SITE1101 Portfolio',
        'Huseyn Huseynzada',
        'Mathematics student',
        'Leadership',
        'Volunteering',
      ],
    },
    {
      title: 'About',
      url: '/about.html',
      keywords: ['About', 'Background', 'Leadership', 'Volunteering', 'Experience'],
    },
    {
      title: 'Projects',
      url: '/projects.html',
      keywords: [
        'Projects',
        'Introduction to Computer Architecture',
        'Learn C++ – Introduction',
        'Computer Architecture',
        'C++',
      ],
    },
    {
      title: 'Books',
      url: '/books.html',
      keywords: [
        'Books I Have Read',
        'How to Win Friends and Influence People in the Digital Age',
        'The Opportunity Analysis Canvas',
        'The ONE Thing',
        'Animal Farm',
        'Harry Potter Series',
        'The 48 Laws of Power',
      ],
    },
    {
      title: 'Art',
      url: '/art.html',
      keywords: ['Art', 'Gallery', 'Drawings', 'Illustrations', 'Art Club'],
    },
    {
      title: 'Courses',
      url: '/courses.html',
      keywords: [
        'Courses',
        'Stepping Up: Preparing Yourself for Leadership',
        'Foundations of Project Management',
        'Effective Leadership: Master Management Styles',
        'Agile Leadership: Introduction to Change',
        'Developing Innovative Ideas for New Companies',
        'Introduction to Generative AI',
        'Developing An Entrepreneurial Mindset',
        'Introduction to Responsible AI',
      ],
    },
    {
      title: 'Resume',
      url: '/resume.html',
      keywords: [
        'Resume',
        'About Me',
        'Education',
        'Work Experience',
        'Volunteering',
        'Skills',
        'Languages',
        'Certifications',
        'Hobbies',
        'Coordinator of the Volunteers',
        'HR Manager',
        'Human Resources Intern',
        'Art Teacher Assistant',
        'Art Director',
        'Visitor Services Volunteer',
        'Regional Development Public Union',
      ],
    },
    {
      title: 'Contact',
      url: '/contact.html',
      keywords: ['Contact', 'Email', 'Form', 'Get in touch'],
    },
  ];

  const normalize = (value) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

  const levenshtein = (a, b) => {
    if (a === b) return 0;
    const alen = a.length;
    const blen = b.length;
    if (alen === 0) return blen;
    if (blen === 0) return alen;
    const matrix = Array.from({ length: alen + 1 }, (_, i) =>
      i === 0 ? Array.from({ length: blen + 1 }, (_, j) => j) : [i]
    );

    for (let i = 1; i <= alen; i++) {
      for (let j = 1; j <= blen; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    return matrix[alen][blen];
  };

  const similarityScore = (query, text) => {
    const q = normalize(query);
    const t = normalize(text);
    if (!q || !t) return 0;

    if (t.includes(q)) return 1;

    const distance = levenshtein(q, t.slice(0, Math.max(q.length, t.length)));
    const maxLen = Math.max(q.length, t.length, 1);
    return 1 - distance / maxLen;
  };

  const computeScore = (item, query) => {
    const texts = [item.title, ...(item.keywords || [])];
    return texts.reduce((best, text) => Math.max(best, similarityScore(query, text)), 0);
  };

  const renderResults = (query) => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) {
      resultsList.innerHTML = '';
      resultsList.classList.remove('is-visible');
      return;
    }

    const scored = searchIndex
      .map((item) => ({ ...item, score: computeScore(item, trimmed) }))
      .filter((item) => item.score > 0.25)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (!scored.length) {
      resultsList.innerHTML = '<li class="header__search-empty">No results found</li>';
      resultsList.classList.add('is-visible');
      return;
    }

    resultsList.innerHTML = scored
      .map(
        (item) => `
          <li class="header__search-item">
            <a class="header__search-link" href="${item.url}">
              <span class="header__search-title">${item.title}</span>
              <span class="header__search-sub">${(item.keywords && item.keywords[0]) || ''}</span>
            </a>
          </li>
        `
      )
      .join('');
    resultsList.classList.add('is-visible');
  };

  searchInput.addEventListener('input', (event) => {
    renderResults(event.target.value || '');
  });

  searchInput.addEventListener('focus', (event) => {
    if (event.target.value.trim().length >= 2) {
      renderResults(event.target.value);
    }
  });

  document.addEventListener('click', (event) => {
    if (!resultsList.contains(event.target) && event.target !== searchInput) {
      resultsList.classList.remove('is-visible');
    }
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      resultsList.classList.remove('is-visible');
      searchInput.blur();
    }
  });
})();
