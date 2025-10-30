// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation active
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Modals
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Contenu des modals
const modalContent = {
    interests: {
        title: "Mes centres d'intérêts",
        content: `
            <h3>Technologie et Innovation</h3>
            <p>Passionné par les dernières avancées technologiques, j'aime explorer les nouvelles tendances en développement web, intelligence artificielle et cybersécurité. Je passe du temps à lire des articles techniques et à expérimenter avec de nouveaux frameworks.</p>
            
            <h3>Lecture et Culture</h3>
            <p>Grand amateur de littérature, particulièrement les romans de science-fiction et les biographies d'entrepreneurs. J'aime également découvrir de nouvelles cultures à travers les voyages et la cuisine internationale.</p>
            
            <h3>Musique et Arts</h3>
            <p>Je joue de la guitare pendant mon temps libre et j'apprécie tous les genres musicaux. L'art numérique et la photographie font également partie de mes passions créatives.</p>
            
            <h3>Apprentissage Continu</h3>
            <p>Toujours en quête de nouvelles compétences, je suis régulièrement des cours en ligne sur des plateformes comme Coursera et Udemy. L'apprentissage des langues étrangères fait également partie de mes objectifs.</p>
        `
    },
    sports: {
        title: "Mes sports",
        content: `
            <h3>Football</h3>
            <p>Je pratique le football depuis mon enfance. Ce sport m'a appris l'importance du travail d'équipe, de la persévérance et de la stratégie. Je joue régulièrement avec des amis et participe à des tournois locaux.</p>
            
            <h3>Course à pied</h3>
            <p>La course à pied est devenue ma passion ces dernières années. Elle m'aide à maintenir une bonne condition physique et à évacuer le stress. J'ai participé à plusieurs semi-marathons et je m'entraîne pour un marathon complet.</p>
            
            <h3>Natation</h3>
            <p>Sport complet par excellence, la natation fait partie de ma routine d'entraînement. Elle me permet de travailler tous les groupes musculaires tout en améliorant ma capacité respiratoire.</p>
            
            <h3>Escalade</h3>
            <p>L'escalade en salle est une activité récente que j'ai découverte. Elle développe la force mentale, la concentration et la résolution de problèmes - des compétences très utiles dans la programmation !</p>
        `
    },
    studies: {
        title: "Mes études",
        content: `
            <h3>Formation Actuelle</h3>
            <p><strong>Master en Informatique (2023-2025)</strong><br>
            Spécialisation en développement web et intelligence artificielle. Cours avancés en algorithmes, structures de données, et développement d'applications web modernes.</p>
            
            <h3>Formation Précédente</h3>
            <p><strong>Licence en Informatique (2020-2023)</strong><br>
            Formation solide en programmation, mathématiques appliquées, et bases de données. Projet de fin d'études sur le développement d'une application mobile.</p>
            
            <h3>Certifications</h3>
            <ul>
                <li>Certification React Developer (2024)</li>
                <li>AWS Cloud Practitioner (2023)</li>
                <li>Google Analytics Certified (2023)</li>
                <li>TOEIC - Score: 950 (2022)</li>
            </ul>
            
            <h3>Projets Académiques Notables</h3>
            <ul>
                <li>Développement d'une plateforme e-learning avec React et Node.js</li>
                <li>Création d'un système de recommendation avec machine learning</li>
                <li>Application mobile de gestion de budget personnel</li>
                <li>Site web responsive pour une association locale</li>
            </ul>
        `
    },
    projects: {
        title: "Mes projets",
        content: `
            <h3>Portfolio Personnel</h3>
            <p>Développement de ce site portfolio avec HTML5, CSS3 et JavaScript vanilla. Design responsive et moderne avec animations CSS et interactions JavaScript.</p>
            
            <h3>Application de Gestion de Tâches</h3>
            <p>Application web complète développée avec React et Firebase. Fonctionnalités : authentification utilisateur, gestion de projets en équipe, notifications en temps réel.</p>
            
            <h3>Bot Discord Communautaire</h3>
            <p>Bot Discord développé en Python pour automatiser la modération et les interactions dans une communauté de développeurs. Plus de 500 utilisateurs actifs.</p>
            
            <h3>API RESTful E-commerce</h3>
            <p>API complète pour une boutique en ligne développée avec Node.js et Express. Gestion des produits, commandes, paiements et authentification JWT.</p>
            
            <h3>Extension Chrome Productivité</h3>
            <p>Extension de navigateur pour améliorer la productivité des développeurs. Bloqueur de distractions, tracker de temps et intégration avec GitHub.</p>
            
            <h3>Contributions Open Source</h3>
            <p>Participation active à plusieurs projets open source sur GitHub. Corrections de bugs, ajout de fonctionnalités et amélioration de la documentation.</p>
        `
    }
};

// Fonction pour ouvrir un modal
function openModal(type) {
    const content = modalContent[type];
    modalBody.innerHTML = `
        <h2>${content.title}</h2>
        <div class="modal-text">
            ${content.content}
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermer le modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Appliquer l'animation aux cards et sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .cv-item, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulaire de contact
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulation d'envoi de formulaire
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Message envoyé !';
        submitBtn.style.background = '#10b981';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Effet de parallaxe léger pour le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animation du hamburger
hamburger.addEventListener('click', () => {
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => {
        span.style.transform = hamburger.classList.contains('active') 
            ? 'rotate(45deg)' 
            : 'rotate(0deg)';
    });
});

// Preloader simple
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Gestion du formulaire de contact avec Formspree
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Vérifier si Formspree est configuré
    if (this.action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        
        // Fallback vers mailto si Formspree n'est pas configuré
        const userName = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;
        const userMessage = document.getElementById('userMessage').value;
        
        const subject = encodeURIComponent(`Message de ${userName} via Portfolio`);
        const body = encodeURIComponent(`Nom: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${userMessage}`);
        const mailtoLink = `mailto:riedel.ruben@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        alert('Votre client email va s\'ouvrir avec le message pré-rempli !\n\n🔧 Pour l\'envoi direct, configurez Formspree selon les instructions.');
        console.log('🔧 CONFIGURATION FORMSPREE:');
        console.log('1. Allez sur https://formspree.io/');
        console.log('2. Créez un compte gratuit');
        console.log('3. Créez un nouveau formulaire');
        console.log('4. Remplacez YOUR_FORM_ID dans index.html par votre vraie ID Formspree');
        
        this.reset();
        return;
    }
    
    // Si Formspree est configuré, afficher le feedback
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Le formulaire sera envoyé automatiquement par Formspree
    // Après envoi, Formspree redirige vers une page de confirmation
});
