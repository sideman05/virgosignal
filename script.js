// Welcome Popup Functions
function showPopup() {
    const popup = document.getElementById('welcomePopup');
    const dontShow = localStorage.getItem('dontShowWelcome');
    
    if (!dontShow) {
        setTimeout(() => {
            popup.classList.add('active');
        }, 500);
    }
}

function closePopup() {
    const popup = document.getElementById('welcomePopup');
    const checkbox = document.getElementById('dontShowAgain');
    
    if (checkbox.checked) {
        localStorage.setItem('dontShowWelcome', 'true');
    }
    
    popup.classList.remove('active');
}

// Close popup when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcomePopup');
    if (welcomePopup) {
        welcomePopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });
    }
});

// Show popup on page load
window.addEventListener('load', showPopup);

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Update active nav link based on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

function handleDownload(event) {
    event.preventDefault();
    
    // Replace this URL with your actual download link
    // For example, you can link to Google Drive, Dropbox, or your own server
    const downloadUrl = 'YOUR_DOWNLOAD_LINK_HERE';
    
    // You can also detect the user's OS and provide different download links
    const userAgent = navigator.userAgent.toLowerCase();
    let selectedUrl = downloadUrl;
    
    if (userAgent.includes('windows')) {
        // Windows download link
        selectedUrl = 'YOUR_WINDOWS_DOWNLOAD_LINK';
    } else if (userAgent.includes('mac')) {
        // Mac download link
        selectedUrl = 'YOUR_MAC_DOWNLOAD_LINK';
    } else if (userAgent.includes('android')) {
        // Android download link (APK)
        selectedUrl = 'YOUR_ANDROID_DOWNLOAD_LINK';
    }
    
    // Show download starting message
    alert('Download starting... Please wait.');
    
    // Initiate download (uncomment when you have actual download links)
    // window.location.href = selectedUrl;
    
    // For now, just log to console
    console.log('Download would start for:', selectedUrl);
}

// Add some interactive elements
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// FAQ Toggle Function
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card').forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(30px)';
    stat.style.transition = 'all 0.6s ease';
    observer.observe(stat);
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');

    if (isDark) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
});

// Language Translation Functionality
const languageSelect = document.getElementById('language-select');
const currentLang = localStorage.getItem('language') || 'en';
languageSelect.value = currentLang;

// Translation dictionary
const translations = {
    en: {
        home: "Home",
        features: "Features",
        stats: "Stats",
        download: "Download",
        faq: "FAQ",
        contact: "Contact",
        "hero-title": "Predict Mines with Precision",
        "hero-description": "Advanced AI-powered prediction system for 1Win Mines. Maximize your winnings with intelligent pattern recognition and real-time analysis.",
        "download-btn": "Download Now",
        "features-title": "Powerful Features",
        "stats-title": "Proven Results",
        "faq-title": "Frequently Asked Questions",
        "contact-title": "Get in Touch"
    },
    fr: {
        home: "Accueil",
        features: "Fonctionnalités",
        stats: "Statistiques",
        download: "Télécharger",
        faq: "FAQ",
        contact: "Contact",
        "hero-title": "Prédisez les Mines avec Précision",
        "hero-description": "Système de prédiction avancé alimenté par IA pour 1Win Mines. Maximisez vos gains avec la reconnaissance intelligente des motifs et l'analyse en temps réel.",
        "download-btn": "Télécharger Maintenant",
        "features-title": "Fonctionnalités Puissantes",
        "stats-title": "Résultats Prouvés",
        "faq-title": "Questions Fréquemment Posées",
        "contact-title": "Nous Contacter"
    },
    sw: {
        home: "Nyumbani",
        features: "Vipengele",
        stats: "Takwimu",
        download: "Pakua",
        faq: "Maswali Yanayoulizwa Mara Kwa Mara",
        contact: "Wasiliana",
        "hero-title": "Tabiri Migodi kwa Usahihi",
        "hero-description": "Mfumo wa hali ya juu wa utabiri unaoendeshwa na AI kwa 1Win Mines. Ongeza mapato yako kwa kutambua mifumo ya akili na uchambuzi wa wakati halisi.",
        "download-btn": "Pakua Sasa",
        "features-title": "Vipengele Vikali",
        "stats-title": "Matokeo Thabitishwa",
        "faq-title": "Maswali Yanayoulizwa Mara Kwa Mara",
        "contact-title": "Wasiliana Nasi"
    }
};

function translatePage(lang) {
    // Translate navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.textContent.toLowerCase();
        if (translations[lang] && translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });

    // Translate specific elements
    const elementsToTranslate = [
        { selector: '.hero-title', key: 'hero-title' },
        { selector: '.hero-description', key: 'hero-description' },
        { selector: '.download-btn', key: 'download-btn' },
        { selector: 'h2:contains("Powerful Features")', key: 'features-title' },
        { selector: 'h2:contains("Proven Results")', key: 'stats-title' },
        { selector: 'h2:contains("Frequently Asked Questions")', key: 'faq-title' },
        { selector: 'h2:contains("Get in Touch")', key: 'contact-title' }
    ];

    elementsToTranslate.forEach(({ selector, key }) => {
        const element = document.querySelector(selector);
        if (element && translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
}

languageSelect.addEventListener('change', (e) => {
    translatePage(e.target.value);
});

// Initialize translation
translatePage(currentLang);