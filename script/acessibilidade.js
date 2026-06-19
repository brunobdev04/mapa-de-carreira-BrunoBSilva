
    // const themeToggle = document.getElementById('theme-toggle');
    // const body = document.body;
    // const icon = themeToggle.querySelector('i');

    // const savedTheme = localStorage.getItem('theme') || 'light';
    // body.setAttribute('data-theme', savedTheme);
    // updateThemeIcon(savedTheme);

    // themeToggle.addEventListener('click', () => {
    //     const currentTheme = body.getAttribute('data-theme');
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
    //     body.setAttribute('data-theme', newTheme);
    //     localStorage.setItem('theme', newTheme);
    //     updateThemeIcon(newTheme);
    // });

    // function updateThemeIcon(theme) {
    //     if (theme === 'dark') {
    //         icon.className = 'fas fa-sun';
    //     } else {
    //         icon.className = 'fas fa-moon';
    //     }
    // }

    // // 2. Lógica de Internacionalização (Tradução PT/EN)
    // const langToggle = document.getElementById('lang-toggle');
    // const langText = langToggle.querySelector('.lang-text');

    // // Dicionário de dados baseado no seu perfil profissional
    // const translations = {
    //     pt: {
    //         headline: "Desenvolvedor Full Stack | React | Next.js | IA & Arquitetura de Software",
    //         hello: "Olá, tudo bem?",
    //         summary: "Sou desenvolvedor apaixonado por tecnologia, design moderno e soluções digitais inteligentes. Tenho experiência com desenvolvimento frontend, interfaces responsivas, APIs, automação e inteligência artificial. Meu objetivo é evoluir continuamente em arquitetura de software, liderança técnica e gestão estratégica de tecnologia."
    //     },
    //     en: {
    //         headline: "Full Stack Developer | React | Next.js | AI & Software Architecture",
    //         hello: "Hello, world!",
    //         summary: "I am a developer passionate about technology, modern design, and intelligent digital solutions. I have experience with frontend development, responsive interfaces, APIs, automation, and artificial intelligence. My goal is to continuously evolve in software architecture, technical leadership, and strategic technology management."
    //     }
    // };

    // langToggle.addEventListener('click', () => {
    //     const currentLang = langToggle.getAttribute('data-lang');
    //     const newLang = currentLang === 'pt' ? 'en' : 'pt';
        
    //     langToggle.setAttribute('data-lang', newLang);
    //     langText.textContent = newLang === 'pt' ? 'EN' : 'PT';

   
    //     document.querySelectorAll('[data-i18n]').forEach(element => {
    //         const key = element.getAttribute('data-i18n');
    //         if (translations[newLang][key]) {
    //             element.textContent = translations[newLang][key];
    //         }
    //     }); 
    // });