const weeklyData = [
    {
        title: 'Fundamentos web',
        description: 'Conceptos esenciales para comprender cómo funciona la web y cómo se organiza un proyecto.',
        introduction: 'Introducción al entorno web, su estructura de funcionamiento y los conceptos básicos necesarios para empezar a desarrollar.',
        topics: [
            'Se presentó el curso, sus objetivos, contenidos, metodología de enseñanza y forma de evaluación.',
            'Se desarrolló una prueba de diagnóstico para identificar los conocimientos previos de los estudiantes.',
            'Se estudiaron los fundamentos de las tecnologías web y su utilidad para crear páginas, sistemas y aplicaciones accesibles desde Internet.',
            'Se diferenciaron los conceptos de sistema web, aplicación web, sitio web y página web.',
            'Se comprendió que el DNS traduce nombres de dominio legibles en direcciones IP para localizar servidores en Internet.'
        ],
        reflection: 'Esta sesión permitió comprender cómo funciona la web desde sus bases y reconocer las tecnologías y procesos que hacen posible el funcionamiento de una página.',
        resources: [
            { label: 'Práctica de laboratorio', url: 'https://drive.google.com/file/d/10NV3pjX3UTL0GB2-ALpDkD5JyZffRqGR/view?usp=sharing' }
        ]
    },
    {
        title: 'HTML y estructura web',
        description: 'Diseño de páginas con HTML, proyectos de interfaz y organización del trabajo colaborativo.',
        introduction: 'Se desarrolló una práctica grupal e individual utilizando HTML5, CSS3, Tailwind CSS, JavaScript y Lucide Icons. El trabajo se organizó mediante Git y GitHub, con ramas individuales y una integración final realizada por el líder.',
        topics: [
            'Se simuló una bandeja de entrada de correo electrónico con mensajes recibidos, datos del remitente, asunto y contenido.',
            'La bandeja de entrada incluyó versiones clara y oscura, iconos de menú, búsqueda, mensajes destacados y diseño responsive.',
            'Se generaron mediante JavaScript tarjetas con las diez mejores playas del Perú, incluyendo nombre, ubicación e imagen.',
            'Se organizó un listado de diez ciudades del Perú con temperatura, velocidad del viento, humedad y alertas de clima extremo.',
            'Se construyó una tienda de plantas y accesorios con categorías, productos recién llegados, precios, carrito, registro, búsqueda, contacto y horarios.',
            'El equipo trabajó en ramas propias identificadas con sus apellidos y posteriormente integró los cambios en la rama principal mediante merge.'
        ],
        reflection: 'La semana permitió aplicar la estructura HTML en interfaces completas y entender cómo la combinación de estilos, JavaScript y control de versiones convierte una maqueta en una experiencia web funcional.',
        repositoryContent: `
            <p>Este proyecto web fue desarrollado en equipo para crear tres interfaces responsive utilizando HTML, CSS, Tailwind CSS, JavaScript y Lucide Icons.</p>
            <h3>Integrantes del proyecto</h3>
            <ul>
                <li><strong>Pariona Ramos Saul Anibal</strong> (líder)</li>
                <li>Pariona Larrota Andre Sebastian</li>
                <li>Huamanlazo Pariona Steven</li>
            </ul>
            <h3>Page01 - Bandeja de entrada</h3>
            <p>Se simuló una aplicación de correo electrónico con una lista de mensajes recibidos. Cada mensaje muestra información del remitente, asunto y contenido. También se incluyeron una versión clara y otra oscura de la bandeja, iconos de menú, búsqueda, mensajes destacados y un diseño responsive para diferentes tamaños de pantalla.</p>
            <h3>Page02 - Playas y ciudades del Perú</h3>
            <p>Se creó un listado de las diez mejores playas del Perú, mostrando el nombre, ubicación e imagen de cada una. Las tarjetas de playas se generaron mediante JavaScript. Además, se presentó un listado de diez ciudades del Perú con temperatura, velocidad del viento, humedad y alertas de clima extremo, organizado en tarjetas responsive.</p>
            <h3>Page03 - Tienda de plantas</h3>
            <p>Se desarrolló una tienda online de plantas y accesorios con categorías de plantas, macetas, ofertas, suscripciones y cuidados. Se mostraron productos recién llegados con imagen, nombre y precio, además de botones para agregar productos al carrito. La interfaz también incluyó registro, inicio de sesión, búsqueda, carrito, información de contacto, horarios y enlaces útiles.</p>
            <h3>Tecnologías utilizadas</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Lucide Icons</li>
                <li>Git y GitHub</li>
            </ul>
            <h3>Organización del trabajo</h3>
            <p>El líder del equipo creó el repositorio en GitHub y otorgó acceso a los integrantes. Cada integrante trabajó en una rama propia identificada con sus apellidos. Al finalizar el desarrollo, el líder realizó el merge de las ramas en la rama principal del proyecto.</p>
        `,
        resources: [
            { label: 'Repositorio GitHub - Semana 02', url: 'https://github.com/saulPariona/PRACTICA-CALIFICADA_2_SUAZNABAR.git' },
            { label: 'Semana 02 - Trabajo individual', url: 'PDF/SEMANA2_AGUILAR.pdf' },
            { label: 'Semana 02 - Trabajo grupal', url: 'PDF/SEMANA2_AGUILAR_GRUPAL.pdf' }
        ]
    },
    {
        title: 'Aula virtual y JavaScript puro',
        description: 'Desarrollo de una ruleta dinámica y un sorteador de equipos con persistencia y exportación.',
        introduction: 'Se implementó un aula virtual con dos herramientas desarrolladas en JavaScript puro. El equipo se organizó mediante ramas para crear la ruleta dinámica y el sorteador de equipos, y luego integró ambos módulos en la rama principal.',
        topics: [
            'En la rama-ruleta se desarrolló una ruleta dinámica con indicador triangular y cinco colores.',
            'La ruleta carga elementos desde un TextArea, conserva los datos con LocalStorage y actualiza la información en tiempo real.',
            'Se incorporaron controles de teclado: SPACE para girar, F para pantalla completa, R para reiniciar y S para descartar elementos sorteados.',
            'En la rama-sorteador se registraron hasta 100 alumnos mediante un TextArea con persistencia en LocalStorage.',
            'El sorteador permite configurar la distribución por número de equipos o por cantidad de integrantes.',
            'La generación muestra una animación progresiva en tarjetas y permite exportar los resultados como JPG, texto o copiarlos al portapapeles.',
            'Finalmente, las ramas de trabajo se integraron mediante un merge para conformar el aula virtual.'
        ],
        reflection: 'Esta semana permitió desarrollar interacción real con JavaScript puro, administrar datos en el navegador y practicar un flujo colaborativo basado en ramas, integración y entrega conjunta.',
        repositoryContent: `
            <p>Este repositorio contiene la solución de la Práctica Calificada 3 para la asignatura de Desarrollo de Aplicaciones Web de la Facultad de Ingeniería de Sistemas de la Universidad Nacional del Centro del Perú. El proyecto implementa una plataforma de aula virtual dividida en dos módulos independientes desarrollados con HTML, CSS y JavaScript puro.</p>
            <h3>1. Aula virtual con ruleta dinámica (carpeta RULETA)</h3>
            <p><strong>Desarrollado por:</strong> Pariona Ramos, Saul Anibal.</p>
            <ul>
                <li><strong>Ruleta interactiva:</strong> ruleta dividida en sectores con cinco colores básicos que se repiten cíclicamente. Incluye un indicador triangular rojo y permite realizar el sorteo mediante clic, botón de inicio o la tecla SPACE.</li>
                <li><strong>Gestión de datos multifila:</strong> un TextArea permite editar, copiar y pegar listas de elementos. Los cambios se sincronizan en tiempo real con los sectores y se guardan y recuperan automáticamente mediante LocalStorage.</li>
                <li><strong>Controles y atajos:</strong> la tecla S resalta y oculta el último elemento seleccionado; la tecla E o un clic en el TextArea activa la edición; la tecla R reinicia los elementos ocultos; y la tecla F alterna la pantalla completa.</li>
            </ul>
            <h3>2. Sistema de sorteo de equipos aleatorios (carpeta SorteoEquipos)</h3>
            <p><strong>Desarrollado por:</strong> Janampa Jaime, Khaled y Vivanco Solano, Jackeline.</p>
            <ul>
                <li><strong>Registro de participantes:</strong> permite gestionar hasta 100 participantes, con un máximo de 50 caracteres por nombre, utilizando un TextArea y LocalStorage.</li>
                <li><strong>Configuración del sorteo:</strong> permite elegir entre cantidad de equipos o cantidad de participantes por equipo y asignar un título personalizado.</li>
                <li><strong>Generación dinámica:</strong> muestra progresivamente los integrantes, uno a uno, organizados en bloques con el nombre de cada equipo.</li>
                <li><strong>Exportación:</strong> permite descargar la distribución como JPG, copiar el resultado completo al portapapeles o copiar los equipos estructurados por columnas.</li>
            </ul>
            <h3>Tecnologías utilizadas</h3>
            <ul>
                <li>HTML5 semántico</li>
                <li>CSS3 con diseño fluido y adaptativo</li>
                <li>JavaScript Vanilla ES6+</li>
                <li>Manipulación del DOM y LocalStorage</li>
            </ul>
            <h3>Instalación y uso local</h3>
            <p>Al utilizar tecnologías web nativas, el proyecto no requiere instalar paquetes ni dependencias de Node.js.</p>
            <ol>
                <li>Clonar el repositorio con <code>git clone</code>.</li>
                <li>Ingresar a la carpeta del proyecto.</li>
                <li>Para probar la ruleta, abrir el archivo <code>RULETA/index.html</code> en el navegador.</li>
                <li>Para probar el sorteo de equipos, abrir el archivo <code>SorteoEquipos/index.html</code>.</li>
            </ol>
            <h3>Integrantes del equipo</h3>
            <ul>
                <li>Janampa Jaime, Khaled</li>
                <li>Pariona Ramos, Saul Anibal</li>
                <li>Vivanco Solano, Jackeline</li>
            </ul>
        `,
        resources: [
            { label: 'Repositorio GitHub - Semana 03', url: 'https://github.com/saulPariona/SEMANA_3_DAW_SUAZNABAR.git' },
            { label: 'Semana 03 - Trabajo grupal', url: 'PDF/SEMANA3_GRUPAL.pdf' },
            { label: 'Semana 03 - Trabajo individual', url: 'PDF/SEMANA3_INDIVIDUAL.pdf' }
        ]
    },
    {
        title: 'Semana 04',
        description: 'Evidencias y actividades prácticas desarrolladas durante la cuarta semana del curso.',
        introduction: 'Esta semana reúne en un documento PDF las actividades, ejercicios y evidencias desarrolladas durante la cuarta semana de aprendizaje.',
        topics: [
            'Se revisaron los contenidos trabajados durante la semana y se organizaron las evidencias del proceso.',
            'Se aplicaron los conceptos estudiados mediante ejercicios prácticos orientados al desarrollo web.',
            'Se documentaron los resultados y las decisiones tomadas durante la elaboración de la actividad.',
            'Se fortaleció la capacidad para estructurar, revisar y presentar un trabajo técnico de forma ordenada.'
        ],
        reflection: 'La evidencia de esta semana muestra la continuidad del proceso de aprendizaje y la importancia de documentar cada práctica para evaluar los avances logrados.',
        resources: [
            { label: 'PDF de actividades - Semana 04', url: 'PDF/SEMANA4.pdf' }
        ]
    },
    {
        title: 'Semana 05',
        description: 'Registro de actividades, avances y aprendizajes de la quinta semana.',
        introduction: 'El PDF de esta semana reúne el trabajo realizado, los avances alcanzados y la explicación de las actividades prácticas correspondientes a la quinta semana.',
        topics: [
            'Se organizaron las actividades realizadas y se describió el propósito de cada evidencia.',
            'Se pusieron en práctica los conocimientos adquiridos en las semanas anteriores.',
            'Se revisó el resultado de la implementación para identificar mejoras y oportunidades de aprendizaje.',
            'Se presentó el trabajo de manera documentada, manteniendo una secuencia clara del proceso.'
        ],
        reflection: 'Documentar el trabajo de la semana permite observar la evolución del proyecto y valorar tanto el resultado final como el proceso seguido para alcanzarlo.',
        resources: [
            { label: 'PDF de actividades - Semana 05', url: 'PDF/SEMANA5.pdf' }
        ]
    },
    {
        title: 'React y Vite: componentes y diseño responsive',
        description: 'Desarrollo de una aplicación web en React con Vite, componentes reutilizables y diseño responsive para PC, tablet y móvil.',
        introduction: 'Durante esta semana se desarrolló una aplicación web utilizando React y Vite. La práctica se enfocó en crear una estructura visual basada en componentes, organizar una interfaz responsive y comunicar datos entre componentes mediante props.',
        topics: [
            'Se creó un proyecto con React utilizando Vite como herramienta de configuración y desarrollo.',
            'Se desarrolló una interfaz responsive con un diseño diferente para PC, tablet y móvil, utilizando CSS puro.',
            'Se organizó la aplicación en siete componentes, asignando un componente a cada sección de la estructura visual.',
            'Se construyó la estructura principal con una sección superior, un elemento nav, una sección de contenido, dos article, un aside y un footer.',
            'Se practicó la composición de componentes anidados en React, pasando información desde el componente 1 hasta el componente 4.',
            'Se envió un objeto con los datos de nombre, dirección y ciudad mediante props para mostrar la información recibida en una tarjeta.',
            'Se aplicaron conceptos de reutilización, separación de responsabilidades y comunicación entre componentes.'
        ],
        reflection: 'La práctica permitió comprender cómo React facilita la construcción de interfaces mediante componentes reutilizables y cómo Vite agiliza la creación del proyecto. También se reforzó el uso de props para compartir datos entre componentes y la creación de diseños adaptables a diferentes dispositivos.',
        repositoryContent: `
            <p>Este repositorio contiene la solución a un laboratorio de desarrollo web enfocado en la estructuración de componentes, el diseño responsivo con CSS puro y la transmisión de datos en React utilizando Vite como entorno de desarrollo.</p>
            <h3>1. Aplicación web responsiva (7 componentes)</h3>
            <ul>
                <li><strong>Estructura semántica:</strong> implementación de un diseño basado en <code>section</code>, <code>nav</code>, <code>article</code>, <code>aside</code> y <code>footer</code>.</li>
                <li><strong>Arquitectura modular:</strong> creación de siete componentes independientes, uno para cada sección del diseño.</li>
                <li><strong>Diseño responsivo autónomo:</strong> adaptación visual para PC, tablet y móvil utilizando CSS puro, media queries, Flexbox y Grid.</li>
            </ul>
            <h3>2. Transmisión de datos entre componentes</h3>
            <ul>
                <li><strong>Componentes anidados:</strong> estructura jerárquica de cuatro niveles, donde el Componente 1 contiene al Componente 2, este al Componente 3 y este al Componente 4.</li>
                <li><strong>Flujo de datos:</strong> envío de un objeto desde el Componente 1 hasta el Componente 4 mediante props.</li>
                <li><strong>Objeto utilizado:</strong> <code>{ nombre: "Jaime", direccion: "Jr. Junin 450", ciudad: "Huancayo" }</code>.</li>
                <li><strong>Visualización:</strong> presentación de los datos recibidos mediante una tarjeta en el Componente 4.</li>
            </ul>
            <h3>Tecnologías utilizadas</h3>
            <ul>
                <li>React</li>
                <li>Vite</li>
                <li>CSS3 para el diseño responsivo</li>
                <li>JavaScript ES6+</li>
            </ul>
            <h3>Instalación y uso local</h3>
            <ol>
                <li>Clonar el repositorio con <code>git clone</code>.</li>
                <li>Ingresar a la carpeta del proyecto.</li>
                <li>Instalar las dependencias con <code>npm install</code>.</li>
                <li>Iniciar el entorno de desarrollo con <code>npm run dev</code>.</li>
                <li>Abrir <code>http://localhost:5173</code> en el navegador.</li>
            </ol>
        `,
        resources: [
            { label: 'Repositorio GitHub - React y Vite', url: 'https://github.com/saulPariona/SEMANA6_EJERCICIO1_2_SUAZNABAR.git' },
            { label: 'PDF de actividades - Semana 06', url: 'PDF/SEMANA6.pdf' }
        ]
    },
    {
        title: 'React Hooks y dashboard de gestión',
        description: 'Aplicación práctica de Hooks de React para controlar estado, efectos, contexto, referencias y rendimiento.',
        introduction: 'Durante la Semana 7 se estudiaron los Hooks nativos y personalizados de React, y se aplicaron en un dashboard de gestión con estado complejo, persistencia local y optimización de renderizados.',
        topics: [
            'Se revisó el ciclo de renderizado de React, los re-renderizados producidos por useState y props, React.StrictMode y el uso de Profiler para medir el rendimiento.',
            'Se refactorizó la consulta de una API con async/await dentro de useEffect, incluyendo dependencias y AbortController para realizar la limpieza correctamente.',
            'Se implementó useContext mediante providers separados para compartir temas o preferencias sin prop drilling.',
            'Se utilizaron useMemo, useCallback y useRef para optimizar filtros, estabilizar handlers y acceder al DOM sin provocar re-renderizados.',
            'Se extrajo lógica reutilizable en Hooks personalizados, respetando las reglas de Hooks y las validaciones de ESLint.',
            'Se construyó un dashboard con useReducer para agregar, eliminar, filtrar y ordenar una lista, useState para la UI local y useEffect para sincronizar preferencias con Local Storage.',
            'Se organizaron roles técnicos para arquitectura de estado, efectos y contexto, optimización de rendimiento y validación de Hooks.'
        ],
        reflection: 'La Semana 7 permitió comprender cómo coordinar los Hooks de React para construir interfaces mantenibles. El dashboard integró estado complejo, persistencia, contexto y optimización, reforzando la importancia de medir los re-renderizados y mantener cada responsabilidad separada.',
        resources: [
            { label: 'Semana 07 - Parte 1: React Hooks', url: 'PDF/SEMANA7_parte1.pdf' },
            { label: 'Semana 07 - Parte 2: Dashboard de gestión', url: 'PDF/SEMANA7_PARTE2.pdf' }
        ]
    },
    {
        title: 'Semana 8 Parcial',
        description: 'Evaluación parcial: sistema de gestión de biblioteca universitaria desarrollado con React, Vite y TypeScript.',
        introduction: 'La evaluación parcial retomó los contenidos de la Semana 7 para desarrollar un sistema de gestión de biblioteca. La solución debía administrar categorías, libros, usuarios y préstamos con React, Vite, TypeScript y persistencia en Local Storage.',
        topics: [
            'Se diseñó un dashboard de administración para gestionar categorías y libros con formularios validados, edición, eliminación y control de stock.',
            'Se implementó el registro de estudiantes y docentes evitando códigos universitarios duplicados y almacenando la información en Local Storage.',
            'Se incorporó la búsqueda de libros, la solicitud de préstamos, la visualización de disponibilidad y la actualización automática del inventario.',
            'Se generó un comprobante digital con usuario, libro, fechas, código único y opción de descarga en PDF.',
            'Se creó el historial de préstamos con préstamos activos, estados de devolución, fechas y paginación.',
            'Se aplicaron React Router, componentes reutilizables, diseño responsive, tema claro/oscuro, alertas, importación desde Excel y reportes exportables en PDF.'
        ],
        reflection: 'El parcial integró los conocimientos de React Hooks en un caso empresarial completo. La gestión de biblioteca exigió combinar estado, persistencia, validaciones, navegación y generación de documentos para ofrecer una experiencia coherente a administradores y usuarios.',
        resources: [
            { label: 'Evaluación parcial - Sistema de gestión de biblioteca', url: 'PDF/EvalParcial_PARIONA RAMOS SAUL ANIBAL.pdf' }
        ]
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
    const repositorySection = weeklyPage.querySelector('[data-week-repository]');
    if (week.repositoryContent) {
        repositorySection.hidden = false;
        repositorySection.querySelector('[data-week-repository-content]').innerHTML = week.repositoryContent;
    }
    const practiceList = weeklyPage.querySelector('[data-week-practice-list]');
    practiceList.innerHTML = week.resources.map(({ label, url }) => `
        <a class="practice-link" href="${url}" target="_blank" rel="noreferrer">
            <span><i data-lucide="file-text" aria-hidden="true"></i> <span>${label}</span></span>
            <i data-lucide="external-link" aria-hidden="true"></i>
        </a>
    `).join('');
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
