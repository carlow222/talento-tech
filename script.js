// Datos de los bootcamps
const bootcampData = {
    fullstack: {
        title: "💻 Desarrollo Web Full Stack",
        subtitle: "Conviértete en un desarrollador completo",
        duration: "16 semanas intensivas",
        schedule: "Lunes a Viernes, 6:00 PM - 10:00 PM",
        description: "Domina el arte de crear aplicaciones web completas desde cero. Aprende las tecnologías más demandadas del mercado y conviértete en un desarrollador full stack altamente cotizado.",
        curriculum: [
            {
                phase: "Fundamentos Frontend",
                topics: ["HTML5 semántico", "CSS3 avanzado", "JavaScript ES6+", "Responsive Design", "Git & GitHub"]
            },
            {
                phase: "Frameworks Modernos",
                topics: ["React.js", "Redux/Context API", "Next.js", "Tailwind CSS", "TypeScript"]
            },
            {
                phase: "Backend & APIs",
                topics: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Autenticación JWT"]
            },
            {
                phase: "Bases de Datos & Deploy",
                topics: ["MongoDB", "PostgreSQL", "Prisma ORM", "Docker", "AWS/Vercel Deploy"]
            }
        ],
        requirements: [
            "Bachillerato completo",
            "Conocimientos básicos de computación",
            "Dedicación de 20 horas semanales",
            "Computador con mínimo 8GB RAM"
        ],
        opportunities: [
            "Frontend Developer - $3.5M - $5M COP",
            "Backend Developer - $4M - $6M COP",
            "Full Stack Developer - $5M - $8M COP",
            "Tech Lead - $7M - $12M COP"
        ]
    },
    datascience: {
        title: "📊 Ciencia de Datos",
        subtitle: "Conviértete en un científico de datos experto",
        duration: "18 semanas intensivas",
        schedule: "Lunes a Viernes, 6:00 PM - 10:00 PM",
        description: "Aprende a extraer insights valiosos de los datos. Domina Python, machine learning e inteligencia artificial para tomar decisiones basadas en datos y transformar industrias completas.",
        curriculum: [
            {
                phase: "Fundamentos de Datos",
                topics: ["Python para Data Science", "Pandas & NumPy", "Estadística Descriptiva", "Visualización con Matplotlib/Seaborn"]
            },
            {
                phase: "Machine Learning",
                topics: ["Scikit-learn", "Algoritmos Supervisados", "Algoritmos No Supervisados", "Evaluación de Modelos"]
            },
            {
                phase: "Deep Learning & IA",
                topics: ["TensorFlow/Keras", "Redes Neuronales", "CNN & RNN", "NLP Básico"]
            },
            {
                phase: "Big Data & Deploy",
                topics: ["SQL Avanzado", "Apache Spark", "Cloud ML (AWS/GCP)", "MLOps Básico"]
            }
        ],
        requirements: [
            "Bachillerato completo",
            "Conocimientos básicos de matemáticas",
            "Lógica de programación (deseable)",
            "Dedicación de 22 horas semanales"
        ],
        opportunities: [
            "Data Analyst - $4M - $6M COP",
            "Data Scientist - $6M - $10M COP",
            "ML Engineer - $8M - $12M COP",
            "AI Specialist - $10M - $15M COP"
        ]
    },
    cybersecurity: {
        title: "🔒 Ciberseguridad",
        subtitle: "Protege el mundo digital",
        duration: "20 semanas intensivas",
        schedule: "Lunes a Viernes, 6:00 PM - 10:00 PM",
        description: "Especialízate en proteger sistemas y datos críticos. Aprende ethical hacking, análisis de vulnerabilidades y las últimas técnicas de seguridad informática para defender organizaciones contra ciberataques.",
        curriculum: [
            {
                phase: "Fundamentos de Seguridad",
                topics: ["Redes y Protocolos", "Sistemas Operativos", "Criptografía", "Políticas de Seguridad"]
            },
            {
                phase: "Ethical Hacking",
                topics: ["Pentesting", "Kali Linux", "Metasploit", "Burp Suite", "OWASP Top 10"]
            },
            {
                phase: "Análisis Forense",
                topics: ["Forense Digital", "Análisis de Malware", "Incident Response", "SIEM Tools"]
            },
            {
                phase: "Seguridad Avanzada",
                topics: ["Cloud Security", "DevSecOps", "Threat Intelligence", "Compliance & Auditoría"]
            }
        ],
        requirements: [
            "Bachillerato completo",
            "Conocimientos básicos de redes",
            "Experiencia con sistemas operativos",
            "Dedicación de 25 horas semanales"
        ],
        opportunities: [
            "Security Analyst - $5M - $7M COP",
            "Ethical Hacker - $7M - $10M COP",
            "Security Consultant - $8M - $12M COP",
            "CISO - $15M - $25M COP"
        ]
    }
};

// Función para mostrar detalles del bootcamp
function showBootcampDetail(bootcampType) {
    const data = bootcampData[bootcampType];
    const modal = document.getElementById('bootcampModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = data.title;
    
    modalBody.innerHTML = `
        <div class="bootcamp-detail-content">
            <div class="detail-header">
                <h3>${data.subtitle}</h3>
                <p class="detail-description">${data.description}</p>
            </div>
            
            <div class="detail-info-grid">
                <div class="info-card">
                    <h4>📅 Duración</h4>
                    <p>${data.duration}</p>
                </div>
                <div class="info-card">
                    <h4>🕐 Horario</h4>
                    <p>${data.schedule}</p>
                </div>
            </div>
            
            <div class="curriculum-section">
                <h4>🎓 Currículo Completo</h4>
                <div class="curriculum-grid">
                    ${data.curriculum.map((phase, index) => `
                        <div class="curriculum-phase">
                            <div class="phase-header">
                                <span class="phase-num">${String(index + 1).padStart(2, '0')}</span>
                                <h5>${phase.phase}</h5>
                            </div>
                            <ul class="topics-list">
                                ${phase.topics.map(topic => `<li>${topic}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="requirements-section">
                <h4>📋 Requisitos</h4>
                <ul class="requirements-list">
                    ${data.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            
            <div class="opportunities-section">
                <h4>💼 Oportunidades Laborales</h4>
                <div class="opportunities-grid">
                    ${data.opportunities.map(opp => {
                        const [role, salary] = opp.split(' - ');
                        return `
                            <div class="opportunity-card">
                                <h5>${role}</h5>
                                <p class="salary">${salary}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Preseleccionar el bootcamp en el formulario
    selectedBootcamp = bootcampType;
    
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Variable para almacenar el bootcamp seleccionado
let selectedBootcamp = null;

// Función para cerrar modal de bootcamp
function closeModal() {
    const modal = document.getElementById('bootcampModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para abrir formulario de inscripción
function openRegistrationForm() {
    closeModal();
    const registrationModal = document.getElementById('registrationModal');
    
    // Preseleccionar el bootcamp si hay uno seleccionado
    if (selectedBootcamp) {
        setTimeout(() => {
            const radioButton = document.getElementById(`${selectedBootcamp}-option`);
            if (radioButton) {
                radioButton.checked = true;
            }
        }, 100);
    }
    
    registrationModal.classList.add('show');
    registrationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de inscripción
function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Limpiar formulario
    document.getElementById('registrationForm').reset();
}

// Función para mostrar modal de confirmación
function showConfirmationModal(formData) {
    const modal = document.getElementById('confirmationModal');
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de confirmación
function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función de inscripción (mantener compatibilidad)
function mostrarInscripcion() {
    openRegistrationForm();
}

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Navbar móvil
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(102, 126, 234, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Animaciones de entrada
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.bootcamp-card, .feature-item, .detail-item, .contact-item, .stat-item, .phase, .testimonial-card, .success-stat'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Efecto de escritura para el título
function typeWriterEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const originalText = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .success-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                const originalText = counter.textContent;
                
                if (originalText.includes('%')) {
                    counter.textContent = Math.ceil(current) + '%';
                } else if (originalText.includes('+')) {
                    counter.textContent = Math.ceil(current) + '+';
                } else if (originalText.includes('M')) {
                    counter.textContent = '$' + (current / 1000).toFixed(1) + 'M';
                } else {
                    counter.textContent = Math.ceil(current);
                }
                setTimeout(updateCounter, 20);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Efecto parallax suave
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-elements');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Navegación activa
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Validación del formulario
function validateForm(formData) {
    const errors = [];
    
    // Validar campos requeridos
    if (!formData.firstName.trim()) errors.push('El nombre es requerido');
    if (!formData.lastName.trim()) errors.push('Los apellidos son requeridos');
    if (!formData.email.trim()) errors.push('El correo electrónico es requerido');
    if (!formData.phone.trim()) errors.push('El teléfono es requerido');
    if (!formData.document.trim()) errors.push('El documento es requerido');
    if (!formData.age || formData.age < 16 || formData.age > 65) errors.push('La edad debe estar entre 16 y 65 años');
    if (!formData.education) errors.push('El nivel educativo es requerido');
    if (!formData.bootcamp) errors.push('Debes seleccionar un bootcamp');
    if (!formData.motivation.trim()) errors.push('La motivación es requerida');
    if (!formData.terms) errors.push('Debes aceptar los términos y condiciones');
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
        errors.push('El formato del correo electrónico no es válido');
    }
    
    // Validar teléfono
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
        errors.push('El formato del teléfono no es válido');
    }
    
    return errors;
}

// Mostrar errores de validación
function showValidationErrors(errors) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'validation-errors';
    errorContainer.innerHTML = `
        <div class="error-content">
            <h4>⚠️ Por favor corrige los siguientes errores:</h4>
            <ul>
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        </div>
    `;
    
    const modalBody = document.querySelector('#registrationModal .modal-body');
    const existingErrors = modalBody.querySelector('.validation-errors');
    if (existingErrors) {
        existingErrors.remove();
    }
    
    modalBody.insertBefore(errorContainer, modalBody.firstChild);
    
    // Scroll al top del modal
    modalBody.scrollTop = 0;
    
    // Remover errores después de 5 segundos
    setTimeout(() => {
        if (errorContainer.parentNode) {
            errorContainer.remove();
        }
    }, 5000);
}

// Procesar envío del formulario
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Convertir checkbox a boolean
    data.terms = formData.has('terms');
    data.newsletter = formData.has('newsletter');
    
    // Validar formulario
    const errors = validateForm(data);
    if (errors.length > 0) {
        showValidationErrors(errors);
        return;
    }
    
    // Simular envío (aquí iría la lógica real de envío)
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = '⏳ Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        closeRegistrationModal();
        showConfirmationModal(data);
        
        // Restaurar botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Log de datos (en producción esto se enviaría al servidor)
        console.log('Datos de inscripción:', data);
    }, 2000);
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Configurar observadores de intersección
    setupIntersectionObserver();
    
    // Efecto de escritura para el título
    typeWriterEffect();
    
    // Animación de contadores
    animateCounters();
    
    // Event listeners para navbar móvil
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Event listeners para enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Cerrar menú móvil si está abierto
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Event listener para el formulario de inscripción
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Event listeners para cerrar modales al hacer clic fuera
    window.addEventListener('click', (event) => {
        const bootcampModal = document.getElementById('bootcampModal');
        const registrationModal = document.getElementById('registrationModal');
        const confirmationModal = document.getElementById('confirmationModal');
        
        if (event.target === bootcampModal) {
            closeModal();
        }
        if (event.target === registrationModal) {
            closeRegistrationModal();
        }
        if (event.target === confirmationModal) {
            closeConfirmationModal();
        }
    });
    
    // Event listeners para scroll
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleParallax();
        updateActiveNavLink();
    });
    
    // Llamar funciones iniciales
    handleNavbarScroll();
    updateActiveNavLink();
});

// CSS adicional para estilos dinámicos
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .nav-link.active {
        color: var(--primary-blue) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .bootcamp-detail-content {
        color: var(--white);
    }
    
    .detail-header h3 {
        color: var(--primary-blue);
        margin-bottom: 15px;
        font-size: 1.5rem;
    }
    
    .detail-description {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.6;
        margin-bottom: 30px;
    }
    
    .detail-info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .info-card {
        background: rgba(102, 126, 234, 0.1);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(102, 126, 234, 0.3);
    }
    
    .info-card h4 {
        color: var(--primary-blue);
        margin-bottom: 10px;
        font-size: 1.1rem;
    }
    
    .curriculum-section,
    .requirements-section,
    .opportunities-section {
        margin: 30px 0;
    }
    
    .curriculum-section h4,
    .requirements-section h4,
    .opportunities-section h4 {
        color: var(--primary-blue);
        margin-bottom: 20px;
        font-size: 1.3rem;
    }
    
    .curriculum-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
    
    .curriculum-phase {
        background: rgba(255, 255, 255, 0.05);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .phase-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }
    
    .phase-num {
        background: var(--gradient-primary);
        color: var(--white);
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
    }
    
    .phase-header h5 {
        color: var(--white);
        font-size: 1.1rem;
    }
    
    .topics-list {
        list-style: none;
        padding: 0;
    }
    
    .topics-list li {
        color: rgba(255, 255, 255, 0.8);
        padding: 5px 0;
        padding-left: 20px;
        position: relative;
        font-size: 0.9rem;
    }
    
    .topics-list li::before {
        content: '▸';
        color: var(--primary-blue);
        position: absolute;
        left: 0;
    }
    
    .requirements-list {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
    }
    
    .requirements-list li {
        background: rgba(102, 126, 234, 0.1);
        padding: 15px;
        border-radius: 10px;
        color: rgba(255, 255, 255, 0.9);
        border-left: 3px solid var(--primary-blue);
    }
    
    .opportunities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
    
    .opportunity-card {
        background: rgba(16, 185, 129, 0.1);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid rgba(16, 185, 129, 0.3);
        text-align: center;
    }
    
    .opportunity-card h5 {
        color: var(--white);
        margin-bottom: 10px;
        font-size: 1rem;
    }
    
    .opportunity-card .salary {
        color: #10b981;
        font-weight: 700;
        font-size: 1.1rem;
    }
    
    .validation-errors {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .error-content h4 {
        color: #ef4444;
        margin-bottom: 15px;
        font-size: 1.1rem;
    }
    
    .error-content ul {
        list-style: none;
        padding: 0;
    }
    
    .error-content li {
        color: rgba(255, 255, 255, 0.9);
        padding: 5px 0;
        padding-left: 20px;
        position: relative;
    }
    
    .error-content li::before {
        content: '•';
        color: #ef4444;
        position: absolute;
        left: 0;
        font-weight: bold;
    }
    
    @media (max-width: 768px) {
        .detail-info-grid {
            grid-template-columns: 1fr;
        }
        
        .curriculum-grid {
            grid-template-columns: 1fr;
        }
        
        .requirements-list {
            grid-template-columns: 1fr;
        }
        
        .opportunities-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(additionalStyles);