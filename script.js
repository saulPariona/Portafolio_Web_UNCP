const weeklyData = [
    {
        title: 'Fundamentos web',
        description: 'Conceptos esenciales para pensar y resolver problemas.',
        introduction: 'Introducción al entorno web, estructura de funcionamiento y conceptos básicos necesarios para empezar a desarrollar.',
        topics: [
            'Se presentaron el curso, donde se explicaron los objetivos, contenidos, metodología de enseñanza y forma de evaluación.',
            'Se desarrolló una prueba de diagnóstico para identificar el nivel de conocimientos previo de los estudiantes.',
            'Se estudiaron los fundamentos de las tecnologías web, entendiendo que permiten crear páginas, sistemas y aplicaciones accesibles desde Internet.',
            'Se diferenciaron conceptos importantes: sistema web, aplicación web, sitio web y página web.',
            'Se comprendió que el DNS traduce nombres de dominio legibles en direcciones IP para localizar servidores en Internet.'
        ],
        reflection: 'Esta sesión fue importante porque permitió comprender cómo funciona la web desde sus bases y reconocer que detrás de una página existen tecnologías y procesos que hacen posible su funcionamiento.',
        practice: { label: 'Práctica de laboratorio', url: 'https://github.com/saulPariona' }
    },
    {
        title: 'HTML y estructura web',
        description: 'Estructura de una página web con HTML, etiquetas semánticas y buenas prácticas.',
        introduction: 'Durante esta semana se estudió cómo construir la estructura básica de una página web utilizando HTML.',
        topics: [
            'Se reconoció la estructura básica de un documento HTML: DOCTYPE, html, head y body.',
            'Se utilizaron títulos, párrafos, enlaces, imágenes y listas para organizar el contenido.',
            'Se conocieron las etiquetas semánticas como header, nav, main, section, article y footer.',
            'Se aprendió a relacionar páginas mediante enlaces internos y externos.',
            'Se aplicaron buenas prácticas para crear documentos ordenados, accesibles y fáciles de mantener.'
        ],
        reflection: 'Esta semana permitió comprender que HTML es la base estructural de toda página web y que una buena organización facilita el diseño, la accesibilidad y el mantenimiento del proyecto.',
        practice: { label: 'Práctica HTML - Semana 02', url: 'https://github.com/saulPariona' }
    }
    

];

const notebookData = weeklyData.map((week, index) => ({
    ...week,
    url: `semana.html?semana=${index + 1}`
}));

// Genera los cuadernos desde datos para mantener la sección fácil de editar.
const notebooksGrid = document.querySelector('#notebooksGrid');
if (notebooksGrid) {
    notebookData.forEach(({ title, description, url }, index) => {
        const notebook = document.createElement('article');
        notebook.className = 'notebook reveal';
        notebook.innerHTML = `<span class="notebook-number"><i data-lucide="book-open" aria-hidden="true"></i>SEMANA ${String(index + 1).padStart(2, '0')}</span><h3>${title}</h3><p>${description}</p><a href="${url}"><i data-lucide="arrow-up-right" aria-hidden="true"></i>Ver contenido</a>`;
        notebooksGrid.appendChild(notebook);
    });
}

const weeklyPage = document.querySelector('#weeklyPage');
if (weeklyPage) {
    const weekNumber = Number(new URLSearchParams(window.location.search).get('semana')) || 1;
    const week = weeklyData[weekNumber - 1] || weeklyData[0];
    const formattedNumber = String(weeklyData.indexOf(week) + 1).padStart(2, '0');

    document.title = `Semana ${formattedNumber} | ${week.title}`;
    weeklyPage.querySelector('[data-week-number]').textContent = `SEMANA ${formattedNumber}`;
    weeklyPage.querySelector('[data-week-title]').textContent = week.title;
    weeklyPage.querySelector('[data-week-introduction]').textContent = week.introduction;
    weeklyPage.querySelector('[data-week-topics]').innerHTML = week.topics.map((topic) => `<li>${topic}</li>`).join('');
    weeklyPage.querySelector('[data-week-reflection]').textContent = week.reflection;
    const practiceLink = weeklyPage.querySelector('[data-week-practice]');
    practiceLink.href = week.practice.url;
    practiceLink.querySelector('[data-practice-label]').textContent = week.practice.label;
}

const topbar = document.querySelector('#topbar');
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

window.addEventListener('scroll', () => topbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.addEventListener('click', (event) => {
        if (event.target.matches('a')) {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('nombre');
        const email = formData.get('correo');
        const message = formData.get('mensaje');
        const whatsappMessage = `Hola Saúl, soy ${name}. Mi correo es ${email}.\n\n${message}`;
        window.open(`https://wa.me/51923791008?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
        formStatus.textContent = 'Se abrió WhatsApp con tu mensaje listo para enviar.';
        contactForm.reset();
    });
}

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

if (window.lucide) {
    window.lucide.createIcons();
}
