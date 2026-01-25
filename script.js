// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const isOpen = mobileMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Header Scroll Effect
const header = document.getElementById('main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 10) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Modal
const modal = document.getElementById('modal');
const getStartedBtn = document.getElementById('get-started-btn');
const modalClose = document.getElementById('modal-close');

if (getStartedBtn && modal) {
    getStartedBtn.addEventListener('click', () => {
        modal.showModal();
    });
}

if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
        modal.close();
    });
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}

// Legal Modal
const legalModal = document.getElementById('legal-modal');
const legalModalClose = document.getElementById('legal-modal-close');
const legalDisclaimerLink = document.getElementById('legal-disclaimer-link');
const legalLinks = document.querySelectorAll('#legal-link, #terms-link, #privacy-link');

if (legalModal) {
    // Open legal modal from footer links
    legalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            legalModal.showModal();
        });
    });
    
    // Open from disclaimer link
    if (legalDisclaimerLink) {
        legalDisclaimerLink.addEventListener('click', (e) => {
            e.preventDefault();
            legalModal.showModal();
        });
    }
    
    // Close legal modal
    if (legalModalClose) {
        legalModalClose.addEventListener('click', () => {
            legalModal.close();
        });
    }
    
    // Close when clicking outside
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) {
            legalModal.close();
        }
    });
}

// Form Submission - Redirect to GitHub
const modalForm = document.querySelector('.modal-form');
if (modalForm) {
    // Remove required attribute from email input
    const emailInput = modalForm.querySelector('#modal-email');
    if (emailInput) {
        emailInput.removeAttribute('required');
    }
    
    // The form now just contains a link to GitHub, no submission needed
    // The link will handle navigation
}

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .benefit-item, .pricing-card, .testimonial-card, .faq-item, .instruction-card');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// User Count Animation
const userCountEl = document.getElementById('user-count');
if (userCountEl) {
    const targetCount = 10000;
    const duration = 2000;
    const startTime = Date.now();
    
    const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * targetCount);
        
        userCountEl.textContent = currentCount.toLocaleString('fr-FR');
        
        if (progress < 1) {
            requestAnimationFrame(animateCount);
        } else {
            userCountEl.textContent = targetCount.toLocaleString('fr-FR');
        }
    };
    
    // Start animation when element is visible
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount();
                countObserver.unobserve(entry.target);
            }
        });
    });
    
    countObserver.observe(userCountEl);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect removed to prevent overlapping issues

// Pricing card hover effect
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        pricingCards.forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.6';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        pricingCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// FAQ smooth open/close
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            // Close other items (optional)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item && otherItem.open) {
            //         otherItem.open = false;
            //     }
            // });
        }
    });
});


console.log('ScoreMirage Website loaded successfully! 🚀');

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update toggle button state
    updateThemeToggle();
}

function updateThemeToggle() {
    const currentTheme = html.getAttribute('data-theme');
    const isDark = currentTheme === 'dark';
    
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', isDark ? 'false' : 'true');
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.setAttribute('aria-pressed', isDark ? 'false' : 'true');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme toggle state
updateThemeToggle();

// Copy Link Functionality
const copyLinkBtn = document.getElementById('copy-link-btn');
if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            const originalText = copyLinkBtn.innerHTML;
            copyLinkBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg> Copié !';
            copyLinkBtn.style.color = 'var(--primary-light)';
            setTimeout(() => {
                copyLinkBtn.innerHTML = originalText;
                copyLinkBtn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie:', err);
        });
    });
}

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // ESC key closes modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('dialog[open]');
        if (openModal) {
            openModal.close();
        }
        const openChat = document.getElementById('chat-window');
        if (openChat && openChat.classList.contains('active')) {
            openChat.classList.remove('active');
        }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Chat AI Widget
const chatWidget = document.getElementById('chat-widget');
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatChoices = document.getElementById('chat-choices');
const chatBadge = document.querySelector('.chat-badge');

// Suivre le scroll de manière fluide et plus bas (sans délai)
if (chatWidget) {
    const updatePosition = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        // Position à 94% de la hauteur de la fenêtre (plus bas)
        const targetTop = scrollY + viewportHeight * 0.94;
        chatWidget.style.top = `${targetTop}px`;
        chatWidget.style.transform = 'translateY(-50%)';
    };
    
    // Mise à jour immédiate sans throttling pour fluidité maximale
    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
}

// État du chat
let chatState = 'intro';
let conversationHistory = [];

// Réponses prédéfinies améliorées
const chatResponses = {
    intro: {
        message: "Bonjour ! 👋\n\nJe suis l'assistant ScoreMirage. Je peux vous guider pour télécharger, installer et utiliser l'extension en quelques minutes.\n\nQue souhaitez-vous faire ?",
        choices: [
            { text: "Téléchargement direct", next: 'download' },
            { text: "Est-ce que l'outil est gratuit ?", next: 'pricing' },
            { text: "Fonctionnalités clés", next: 'features' },
            { text: "Confidentialité & sécurité", next: 'security' },
            { text: "Guide d'installation (2 min)", next: 'installation' }
        ]
    },
    installation: {
        message: "Installation express ⚡\n\nL'installation prend moins de 2 minutes :\n\n**Étape 1 — Télécharger :**\n• Téléchargez le ZIP officiel : https://download2288.mediafire.com/x4yw67ftyihgXwUkUqClk8PsN-7eUQX0iaaK3Ek1Kv0oihZbcVZzKGhuR-QxIwvb9P24kKtG7ty6wF39gembYh6FVB9c_nkITJBp4zByuHwiGsh9tVQfDhA1UXJVfuSTmm4jhVkK4badsW-KLEqwJJ_vYMh2RnAVN4JHJhuMFmndww/glahuii3cq270a1/ScoreMirage.zip\n• Décompressez le fichier ZIP dans un dossier\n\n**Étape 2 — Installer :**\n• Chrome / Edge / Brave / Opera / Vivaldi : ouvrez chrome://extensions/ → activez \"Mode développeur\" → \"Charger l'extension non empaquetée\" → sélectionnez le dossier\n• Firefox : ouvrez about:debugging → \"Ce Firefox\" → \"Charger un module complémentaire temporaire\" → sélectionnez manifest.json\n\n**Gratuit & complet :**\nScoreMirage est gratuit, sans version Pro ni limitation. Toutes les fonctions sont incluses.",
        choices: [
            { text: "Comment utiliser l'extension ?", next: 'usage' },
            { text: "Problèmes d'installation", next: 'troubleshoot' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    features: {
        message: "Fonctionnalités clés ✨\n\n**Édition intelligente :**\n• Modification automatique des notes (multi-formats)\n• Mode réaliste pour un rendu crédible\n• Édition manuelle précise par élément\n\n**Masquage & contrôle :**\n• Masquage sélectif des absences, devoirs et messages\n• Gestion séparée des absences prévues et de l'historique\n• Affichage personnalisé \"Pas d'absences\"\n\n**Technique & fiabilité :**\n• Compatible tous navigateurs principaux\n• Persistance automatique après rafraîchissement\n• Support SPA via MutationObserver\n• Stockage local sécurisé, aucun tracking\n\nRésultat : rapide, pro et totalement contrôlable.",
        choices: [
            { text: "Détails sur les notes", next: 'modify-notes' },
            { text: "Masquer des éléments", next: 'hide-elements' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    pricing: {
        message: "Gratuit & open-source ✅\n\nScoreMirage est **100% gratuit**, sans version Pro ni abonnement. Toutes les fonctionnalités sont incluses.\n\nLien direct : https://download2288.mediafire.com/x4yw67ftyihgXwUkUqClk8PsN-7eUQX0iaaK3Ek1Kv0oihZbcVZzKGhuR-QxIwvb9P24kKtG7ty6wF39gembYh6FVB9c_nkITJBp4zByuHwiGsh9tVQfDhA1UXJVfuSTmm4jhVkK4badsW-KLEqwJJ_vYMh2RnAVN4JHJhuMFmndww/glahuii3cq270a1/ScoreMirage.zip\n\nVous pouvez aussi vérifier le code sur GitHub si besoin.",
        choices: [
            { text: "Télécharger maintenant", next: 'download' },
            { text: "Guide d'installation (2 min)", next: 'installation' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'how-it-works': {
        message: "Fonctionnement technique 🔧\n\n**1) Détection intelligente**\nSélecteurs optimisés pour repérer notes, absences, devoirs et messages.\n\n**2) Édition instantanée**\nLes changements s'appliquent directement dans le DOM, sans rechargement.\n\n**3) Persistance locale**\nSauvegarde via chrome.storage.local / browser.storage.local avec réapplication automatique.\n\n**4) Support SPA**\nMutationObserver surveille les changements dynamiques et restaure vos réglages.\n\n**Sécurité**\nTout reste sur votre appareil : aucune donnée n'est envoyée.",
        choices: [
            { text: "Confidentialité & sécurité", next: 'security' },
            { text: "Est-ce détectable ?", next: 'detection' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'modify-notes': {
        message: "Modification des notes 📝\n\nVoici comment modifier les notes avec ScoreMirage :\n\n**Méthode automatique :**\n1. Ouvrez la popup de l'extension (icône dans la barre d'outils)\n2. Allez dans l'onglet \"Notes\"\n3. Activez le toggle \"Modification automatique\"\n4. Choisissez le mode \"Réaliste\" pour des notes crédibles\n5. Les notes sont modifiées automatiquement selon vos préférences\n\n**Méthode manuelle :**\n1. Dans l'onglet \"Notes\", vous verrez la liste de toutes les notes détectées\n2. Cliquez sur une note pour la modifier individuellement\n3. Entrez la nouvelle valeur souhaitée\n4. La modification est sauvegardée automatiquement\n\n**Fonctionnalités avancées :**\n• Filtrage par élève et par matière\n• Support de tous les formats (sur 20, pourcentage, lettres)\n• Mode réaliste qui ajuste les notes de manière crédible\n• Persistance après rafraîchissement de la page\n\nToutes les modifications sont appliquées en temps réel et persistent même après fermeture du navigateur !",
        choices: [
            { text: "Comment masquer les notes ?", next: 'hide-elements' },
            { text: "Comment modifier les absences ?", next: 'modify-absences' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'hide-elements': {
        message: "Masquage d'éléments 👁️\n\nVous pouvez masquer complètement certains éléments du portail :\n\n**Masquage des notes :**\n1. Ouvrez la popup de l'extension\n2. Allez dans l'onglet \"Notes\"\n3. Activez le toggle \"Masquer toutes les notes\"\n4. Toutes les notes disparaissent de la page\n\n**Masquage des absences :**\n1. Dans l'onglet \"Absences\"\n2. Activez \"Masquer toutes les absences\"\n3. Vous pouvez aussi masquer individuellement chaque absence\n4. Un message \"Pas d'absences\" peut s'afficher à la place\n\n**Masquage des devoirs et messages :**\n1. Dans les onglets \"Devoirs\" et \"Messages\"\n2. Activez le masquage global ou sélectionnez les éléments à masquer\n3. Les éléments masqués disparaissent complètement\n\n**Gestion fine :**\nVous pouvez combiner masquage et modification. Par exemple, masquer certaines notes et modifier d'autres. Tout est sauvegardé et réappliqué automatiquement.",
        choices: [
            { text: "Comment modifier le contenu au lieu de masquer ?", next: 'modify-notes' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'modify-absences': {
        message: "Modification des absences et retards ⏰\n\nScoreMirage permet de modifier complètement le contenu des absences et retards :\n\n**Modification du texte :**\n1. Ouvrez la popup de l'extension\n2. Allez dans l'onglet \"Absences\"\n3. Vous verrez la liste de toutes les absences et retards\n4. Cliquez sur une absence pour modifier son contenu\n5. Entrez le nouveau texte à afficher\n6. La modification est sauvegardée automatiquement\n\n**Fonctionnalités :**\n• Modification individuelle de chaque absence\n• Gestion séparée des absences prévues et de l'historique\n• Personnalisation complète du texte affiché\n• Masquage sélectif avec affichage personnalisé\n• Persistance après rafraîchissement\n\n**Exemple d'utilisation :**\nVous pouvez remplacer \"Absence non justifiée\" par \"Justifiée\" ou même par un texte personnalisé comme \"Rendez-vous médical\". Le texte modifié s'affiche à la place de l'original.",
        choices: [
            { text: "Comment modifier les devoirs ?", next: 'modify-homework' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'modify-homework': {
        message: "Modification des devoirs et messages 📚\n\nVous pouvez modifier le contenu des devoirs, leçons et messages :\n\n**Modification des devoirs :**\n1. Ouvrez la popup de l'extension\n2. Allez dans l'onglet \"Devoirs\"\n3. Sélectionnez un devoir dans la liste\n4. Modifiez le titre, la description ou la date\n5. Les modifications sont appliquées immédiatement\n\n**Modification des messages :**\n1. Dans l'onglet \"Messages\"\n2. Sélectionnez un message\n3. Modifiez le contenu, l'expéditeur ou la date\n4. Le message modifié remplace l'original\n\n**Fonctionnalités :**\n• Modification complète du contenu HTML\n• Personnalisation de tous les détails\n• Masquage sélectif avec contrôle granulaire\n• Interface moderne avec mode nuit\n• Sauvegarde automatique avec ID unique\n\nToutes les modifications sont persistantes et réappliquées même après rechargement de la page !",
        choices: [
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    security: {
        message: "Confidentialité & sécurité 🔒\n\n**100% local :**\nToutes vos modifications restent sur votre appareil (chrome.storage.local / browser.storage.local). Aucun serveur externe.\n\n**Aucune collecte :**\nPas de tracking, pas d'analytics, aucune donnée personnelle envoyée.\n\n**Aucune connexion requise :**\nPas de compte, pas d'activation, tout fonctionne en local.\n\n**Code source ouvert :**\nLe code est disponible sur GitHub pour vérification.\n\n**Contrôle total :**\nVous pouvez supprimer ou réinitialiser vos réglages à tout moment.\n\nEn bref : vos données restent privées et sous votre contrôle.",
        choices: [
            { text: "L'extension peut-elle être détectée ?", next: 'detection' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    detection: {
        message: "Détection de l'extension 🔍\n\n**Sur le portail Mozaïk :**\nLes modifications sont appliquées directement dans le DOM de la page. Techniquement, quelqu'un qui inspecte le code source de la page pourrait voir les modifications, mais dans un usage normal, les modifications sont invisibles.\n\n**Important à savoir :**\n• Les modifications sont visibles uniquement sur votre navigateur\n• Elles n'affectent pas les données sur les serveurs de Mozaïk\n• Les modifications sont locales à votre appareil\n• Si vous vous connectez depuis un autre appareil, les modifications ne seront pas présentes\n\n**Recommandations :**\nCette extension est conçue pour un usage personnel et éducatif. Utilisez-la de manière responsable et conformément aux règles de votre établissement.",
        choices: [
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    usage: {
        message: "Utilisation de l'extension après installation 🚀\n\nUne fois ScoreMirage installée, voici comment l'utiliser :\n\n**Première utilisation :**\n1. Allez sur le portail Mozaïk-Portail Parents\n2. Connectez-vous avec vos identifiants\n3. L'extension détecte automatiquement les éléments de la page\n4. Cliquez sur l'icône de l'extension dans la barre d'outils\n5. La popup s'ouvre avec tous les onglets disponibles\n\n**Configuration de base :**\n• Entrez le nom de l'élève (optionnel, pour filtrage)\n• Sélectionnez les matières à modifier (optionnel)\n• L'extension fonctionne immédiatement sans configuration\n\n**Utilisation quotidienne :**\n• Ouvrez la popup pour modifier ou masquer des éléments\n• Toutes les modifications sont sauvegardées automatiquement\n• Les modifications persistent après rafraîchissement\n• Vous pouvez tout réinitialiser depuis les paramètres\n\nL'extension est prête à l'emploi dès l'installation !",
        choices: [
            { text: "Comment modifier les notes ?", next: 'modify-notes' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    troubleshoot: {
        message: "Dépannage des problèmes d'installation 🔧\n\n**L'extension ne s'installe pas :**\n• Vérifiez que vous avez bien activé le mode développeur\n• Assurez-vous d'avoir sélectionné le bon dossier (celui contenant manifest.json)\n• Vérifiez que tous les fichiers sont présents dans le dossier\n\n**L'extension ne fonctionne pas :**\n• Vérifiez que vous êtes bien sur le portail Mozaïk-Portail Parents\n• Rechargez la page après l'installation\n• Vérifiez que l'extension est activée dans chrome://extensions/\n• Essayez de désactiver et réactiver l'extension\n\n**Les modifications ne persistent pas :**\n• Vérifiez que vous avez bien sauvegardé les modifications\n• Assurez-vous que les permissions de stockage sont accordées\n• Videz le cache du navigateur si nécessaire\n\n**Besoin d'aide supplémentaire :**\nVisitez le dépôt GitHub pour ouvrir une issue ou consulter la documentation complète.",
        choices: [
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    download: {
        message: "Téléchargement direct 📥\n\nTéléchargez l'extension ici :\nhttps://download2288.mediafire.com/x4yw67ftyihgXwUkUqClk8PsN-7eUQX0iaaK3Ek1Kv0oihZbcVZzKGhuR-QxIwvb9P24kKtG7ty6wF39gembYh6FVB9c_nkITJBp4zByuHwiGsh9tVQfDhA1UXJVfuSTmm4jhVkK4badsW-KLEqwJJ_vYMh2RnAVN4JHJhuMFmndww/glahuii3cq270a1/ScoreMirage.zip\n\n**Après téléchargement :**\n1. Décompressez le ZIP dans un dossier\n2. Suivez l'installation (Chrome/Firefox)\n3. L'extension est prête à l'emploi\n\nBesoin d'aide pour l'installation ? Je peux vous guider étape par étape.",
        choices: [
            { text: "Guide d'installation (2 min)", next: 'installation' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    contribute: {
        message: "Contribuer au projet 🤝\n\nScoreMirage est un projet open-source et les contributions sont les bienvenues !\n\n**Comment contribuer :**\n1. Visitez le dépôt GitHub : https://github.com/benzoXdev/ScoreMirage\n2. Forkez le projet\n3. Créez une branche pour votre fonctionnalité\n4. Faites vos modifications\n5. Soumettez une Pull Request\n\n**Types de contributions :**\n• Signaler des bugs (ouvrir une issue)\n• Proposer de nouvelles fonctionnalités\n• Améliorer la documentation\n• Traduire l'extension dans d'autres langues\n• Améliorer le code existant\n\n**Besoin d'aide pour contribuer ?**\nConsultez le fichier README.md sur GitHub pour plus d'informations sur la structure du projet et les guidelines de contribution.",
        choices: [
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    referral: {
        message: "ScoreMirage est déjà gratuit 🎁\n\nAucun achat ni parrainage n'est nécessaire. Téléchargez et utilisez l'extension immédiatement.",
        choices: [
            { text: "Télécharger maintenant", next: 'download' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    purchase: {
        message: "Aucun paiement requis ✅\n\nScoreMirage est 100% gratuit et open-source. Vous pouvez télécharger l'extension dès maintenant.",
        choices: [
            { text: "Télécharger maintenant", next: 'download' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    'payment-methods': {
        message: "Aucun moyen de paiement nécessaire 💡\n\nScoreMirage est gratuit. Téléchargez l'extension et installez-la en quelques minutes.",
        choices: [
            { text: "Télécharger maintenant", next: 'download' },
            { text: "Retour au menu principal", next: 'intro' }
        ]
    },
    goodbye: {
        message: "De rien ! 😊\n\nJ'espère avoir répondu à toutes vos questions. N'hésitez pas à revenir si vous avez besoin d'aide supplémentaire.\n\nBonne utilisation de ScoreMirage !",
        choices: [
            { text: "Nouvelle question", next: 'intro' }
        ]
    }
};

// Fonction pour ajouter un message avec support des sauts de ligne et formatage
function addMessage(text, isBot = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'chat-message-avatar';
    avatar.textContent = isBot ? 'AI' : 'Vous';
    
    const content = document.createElement('div');
    content.className = 'chat-message-content';
    
    // Gérer les sauts de ligne et le formatage pour une meilleure lisibilité
    const lines = text.split('\n');
    lines.forEach((line, lineIndex) => {
        if (line.trim() === '') {
            // Ligne vide = espacement
            const br = document.createElement('br');
            content.appendChild(br);
        } else {
            // Traiter le formatage **texte** pour le gras
            const parts = line.split(/(\*\*.*?\*\*)/g);
            parts.forEach(part => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    // Texte en gras
                    const strong = document.createElement('strong');
                    strong.textContent = part.slice(2, -2);
                    content.appendChild(strong);
                } else if (part.trim() !== '') {
                    // Texte normal
                    const span = document.createElement('span');
                    span.textContent = part;
                    content.appendChild(span);
                }
            });
            
            // Ajouter un saut de ligne sauf pour la dernière ligne
            if (lineIndex < lines.length - 1) {
                content.appendChild(document.createElement('br'));
            }
        }
    });
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);
    
    // Scroll vers le bas avec animation
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

// Fonction pour afficher les choix
function showChoices(choices) {
    chatChoices.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'chat-choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            addMessage(choice.text, false);
            setTimeout(() => {
                updateChatState(choice.next);
            }, 500);
        });
        chatChoices.appendChild(button);
    });
}

// Fonction pour mettre à jour l'état du chat
function updateChatState(state) {
    chatState = state;
    const response = chatResponses[state];
    
    if (response) {
        addMessage(response.message, true);
        showChoices(response.choices);
    }
}

// Ouvrir/Fermer le chat (toggle)
if (chatToggle && chatWindow) {
    chatToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêcher la propagation du clic
        
        // Toggle : ouvrir si fermé, fermer si ouvert
        const isOpen = chatWindow.classList.contains('active');
        
        if (isOpen) {
            // Fermer le chat
            chatWindow.classList.remove('active');
        } else {
            // Ouvrir le chat
            chatWindow.classList.add('active');
            chatBadge.style.display = 'none';
            
            // Initialiser le chat si c'est la première fois
            if (chatMessages.children.length === 0) {
                setTimeout(() => {
                    updateChatState('intro');
                }, 300);
            }
        }
    });
}

// Fermer le chat avec le bouton de fermeture
if (chatClose && chatWindow) {
    chatClose.addEventListener('click', (e) => {
        e.stopPropagation();
        chatWindow.classList.remove('active');
    });
}

// Fermer en cliquant en dehors de la fenêtre (mais pas sur la bulle)
document.addEventListener('click', (e) => {
    if (chatWindow && chatWindow.classList.contains('active')) {
        // Si on clique en dehors de la fenêtre ET en dehors de la bulle
        if (!chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
            chatWindow.classList.remove('active');
        }
    }
});

// Checkout Functions
let currentPlan = null;

function openCheckout(plan) {
    currentPlan = plan;
    const plans = {
        weekly: { name: '1 Semaine', price: 5, duration: '7 jours' },
        monthly: { name: '1 Mois', price: 15, duration: '30 jours' },
        lifetime: { name: 'Lifetime', price: 30, duration: 'à vie' }
    };
    
    const selectedPlan = plans[plan];
    if (!selectedPlan) return;
    
    // Scroll vers la section paiement
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
}

// Payment Modal Functions
function openPaymentModal(paymentMethod) {
    if (!currentPlan) {
        alert('Veuillez d\'abord sélectionner un plan');
        return;
    }
    
    const plans = {
        weekly: { name: '1 Semaine', price: 5 },
        monthly: { name: '1 Mois', price: 15 },
        lifetime: { name: 'Lifetime', price: 30 }
    };
    
    const plan = plans[currentPlan];
    const modal = document.getElementById('payment-modal');
    const title = document.getElementById('payment-modal-title');
    const planInfo = document.getElementById('selected-plan-info');
    
    // Masquer tous les formulaires
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.add('payment-form-hidden');
        form.classList.remove('payment-form-visible');
        form.style.display = 'none';
    });
    
    // Afficher les infos du plan
    planInfo.querySelector('.plan-name').textContent = plan.name;
    planInfo.querySelector('.plan-price').textContent = plan.price + ' CAD';
    
    // Afficher le formulaire approprié
    if (['btc', 'eth', 'usdt', 'xmr'].includes(paymentMethod)) {
        title.textContent = `Paiement en ${paymentMethod.toUpperCase()}`;
        setupCryptoForm(paymentMethod, plan.price);
        const cryptoForm = document.getElementById('crypto-payment-form');
        cryptoForm.classList.remove('payment-form-hidden');
        cryptoForm.classList.add('payment-form-visible');
        cryptoForm.style.display = 'flex';
    } else if (paymentMethod === 'paypal') {
        title.textContent = 'Paiement avec PayPal';
        const paypalFormEl = document.getElementById('paypal-payment-form');
        paypalFormEl.classList.remove('payment-form-hidden');
        paypalFormEl.classList.add('payment-form-visible');
        paypalFormEl.style.display = 'flex';
    } else if (['visa', 'mastercard'].includes(paymentMethod)) {
        title.textContent = `Paiement par carte ${paymentMethod === 'visa' ? 'Visa' : 'Mastercard'}`;
        document.getElementById('card-amount').textContent = plan.price;
        const cardForm = document.getElementById('card-payment-form');
        cardForm.classList.remove('payment-form-hidden');
        cardForm.classList.add('payment-form-visible');
        cardForm.style.display = 'flex';
    }
    
    modal.showModal();
}

function setupCryptoForm(crypto, cadAmount) {
    const addresses = {
        btc: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        eth: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        usdt: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
        xmr: '48e9VuQMU2ydU8vNjVtW8hxBhar2dDc5Hsc3sG5s7RJLZc5M2Tscf2gYjaEk22Bf2eU3KmGWsquc4VDtp'
    };
    
    const symbols = {
        btc: 'BTC',
        eth: 'ETH',
        usdt: 'USDT',
        xmr: 'XMR'
    };
    
    // Taux de change approximatifs (à remplacer par des taux réels)
    const rates = {
        btc: 0.000014,
        eth: 0.00023,
        usdt: 1,
        xmr: 0.003
    };
    
    document.getElementById('crypto-address-text').textContent = addresses[crypto];
    document.getElementById('crypto-symbol').textContent = symbols[crypto];
    const cryptoAmount = (cadAmount * rates[crypto]).toFixed(8);
    document.getElementById('crypto-amount-text').textContent = cryptoAmount;
    document.getElementById('cad-amount').textContent = cadAmount + ' CAD';
}

function copyCryptoAddress() {
    const address = document.getElementById('crypto-address-text').textContent;
    navigator.clipboard.writeText(address).then(() => {
        alert('Adresse copiée dans le presse-papiers !');
    });
}

// Payment Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const paymentModal = document.getElementById('payment-modal');
    const paymentModalClose = document.getElementById('payment-modal-close');
    
    if (paymentModalClose) {
        paymentModalClose.addEventListener('click', () => {
            paymentModal.close();
        });
    }
    
    if (paymentModal) {
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                paymentModal.close();
            }
        });
    }
    
    // Form submissions
    const cryptoForm = document.getElementById('crypto-payment-form');
    if (cryptoForm) {
        cryptoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: Envoyer les données au backend
            alert('Paiement en cryptomonnaie confirmé ! Vous recevrez votre clé d\'activation par email.');
            paymentModal.close();
        });
    }
    
    const paypalForm = document.getElementById('paypal-payment-form');
    if (paypalForm) {
        paypalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: Intégrer PayPal
            alert('Redirection vers PayPal...');
        });
    }
    
    const cardForm = document.getElementById('card-payment-form');
    if (cardForm) {
        cardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: Traiter le paiement par carte
            alert('Paiement par carte confirmé ! Vous recevrez votre clé d\'activation par email.');
            paymentModal.close();
        });
        
        // Formatage du numéro de carte
        const cardNumber = document.getElementById('card-number');
        if (cardNumber) {
            cardNumber.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\s/g, '');
                let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
                e.target.value = formatted;
            });
        }
        
        // Formatage de la date d'expiration
        const cardExpiry = document.getElementById('card-expiry');
        if (cardExpiry) {
            cardExpiry.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }
    }
});

// Referral Code Functions
function generateReferralCode() {
    const code = 'SCORE-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const referralInput = document.getElementById('referral-code');
    if (referralInput) {
        referralInput.value = code;
        // Sauvegarder dans le localStorage
        localStorage.setItem('referralCode', code);
        alert('Code de parrainage généré : ' + code);
    }
}

function copyReferralCode() {
    const referralInput = document.getElementById('referral-code');
    if (referralInput && referralInput.value) {
        referralInput.select();
        document.execCommand('copy');
        alert('Code de parrainage copié dans le presse-papiers !');
    } else {
        alert('Veuillez d\'abord générer un code de parrainage');
    }
}

// Charger le code de parrainage au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedCode = localStorage.getItem('referralCode');
    const referralInput = document.getElementById('referral-code');
    if (savedCode && referralInput) {
        referralInput.value = savedCode;
    }
    
    // TODO: Charger les statistiques de parrainage depuis votre backend
    // updateReferralStats();
});

function updateReferralStats(count) {
    const statsEl = document.getElementById('referral-stats');
    if (statsEl) {
        statsEl.textContent = `${count || 0}/3 personnes ont utilisé votre code`;
    }
}

// Wheel of Fortune
let wheelSpins = 1;
let isSpinning = false;
let wheelRotation = 0;

const wheelPrizes = [
    { type: 'key', value: 'lifetime', label: 'Clé Lifetime', color: '#14F195', probability: 5 },
    { type: 'key', value: 'monthly', label: 'Clé 1 Mois', color: '#6366f1', probability: 10 },
    { type: 'key', value: 'weekly', label: 'Clé 1 Semaine', color: '#8b5cf6', probability: 15 },
    { type: 'malus', value: 'nothing', label: 'Rien', color: '#ef4444', probability: 20 },
    { type: 'malus', value: 'try-again', label: 'Réessayez', color: '#f59e0b', probability: 15 },
    { type: 'key', value: 'weekly', label: 'Clé 1 Semaine', color: '#8b5cf6', probability: 15 },
    { type: 'malus', value: 'nothing', label: 'Rien', color: '#ef4444', probability: 10 },
    { type: 'key', value: 'monthly', label: 'Clé 1 Mois', color: '#6366f1', probability: 10 }
];

function initWheel() {
    const canvas = document.getElementById('wheel-canvas');
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }
    
    // S'assurer que le canvas a les bonnes dimensions
    if (canvas.width !== 450 || canvas.height !== 450) {
        canvas.width = 450;
        canvas.height = 450;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get 2d context');
        return;
    }
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
    
    // Effacer complètement le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner un fond circulaire pour la roue
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(26, 26, 26, 0.8)';
    ctx.fill();
    
    // Calculer les angles pour chaque segment
    const totalProbability = wheelPrizes.reduce((sum, prize) => sum + prize.probability, 0);
    let currentAngle = -Math.PI / 2; // Commencer en haut
    
    wheelPrizes.forEach((prize, index) => {
        const segmentAngle = (prize.probability / totalProbability) * 2 * Math.PI;
        
        // Créer un gradient pour chaque segment
        const gradient = ctx.createRadialGradient(
            centerX, centerY, radius * 0.3,
            centerX, centerY, radius
        );
        
        // Couleurs avec gradient moderne
        if (prize.type === 'key') {
            if (prize.value === 'lifetime') {
                gradient.addColorStop(0, '#14F195');
                gradient.addColorStop(1, '#0FA86E');
            } else if (prize.value === 'monthly') {
                gradient.addColorStop(0, '#818cf8');
                gradient.addColorStop(1, '#6366f1');
            } else {
                gradient.addColorStop(0, '#a78bfa');
                gradient.addColorStop(1, '#8b5cf6');
            }
        } else {
            if (prize.value === 'try-again') {
                gradient.addColorStop(0, '#fbbf24');
                gradient.addColorStop(1, '#f59e0b');
            } else {
                gradient.addColorStop(0, '#f87171');
                gradient.addColorStop(1, '#ef4444');
            }
        }
        
        // Dessiner le segment avec ombre
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + segmentAngle);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.restore();
        
        // Bordure du segment (arc extérieur)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + segmentAngle);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Ligne de séparation depuis le centre
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(currentAngle) * radius,
            centerY + Math.sin(currentAngle) * radius
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Dessiner la ligne de fin du segment
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(currentAngle + segmentAngle) * radius,
            centerY + Math.sin(currentAngle + segmentAngle) * radius
        );
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        currentAngle += segmentAngle;
    });
    
    // Cercle central avec gradient moderne et effet 3D
    const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 55);
    centerGradient.addColorStop(0, '#818cf8');
    centerGradient.addColorStop(0.5, '#6366f1');
    centerGradient.addColorStop(1, '#4f46e5');
    
    // Ombre du cercle central
    ctx.save();
    ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 55, 0, 2 * Math.PI);
    ctx.fillStyle = centerGradient;
    ctx.fill();
    ctx.restore();
    
    // Bordure du cercle central brillante
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Cercle intérieur pour effet de profondeur
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Point central
    ctx.beginPath();
    ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    
    console.log('Wheel initialized successfully');
}

function spinWheel() {
    if (isSpinning || wheelSpins <= 0) return;
    
    isSpinning = true;
    wheelSpins--;
    document.getElementById('wheel-spins').textContent = wheelSpins;
    const spinButton = document.getElementById('spin-button');
    const wheelWrapper = document.querySelector('.wheel-wrapper');
    
    spinButton.disabled = true;
    spinButton.querySelector('.btn-spin-text').textContent = 'Rotation...';
    document.getElementById('wheel-result').style.display = 'none';
    
    // Ajouter l'effet de rotation
    if (wheelWrapper) {
        wheelWrapper.classList.add('spinning');
    }
    
    // Sélectionner un prix selon les probabilités
    const random = Math.random() * 100;
    let cumulative = 0;
    let selectedPrize = null;
    
    for (const prize of wheelPrizes) {
        cumulative += prize.probability;
        if (random <= cumulative) {
            selectedPrize = prize;
            break;
        }
    }
    
    if (!selectedPrize) selectedPrize = wheelPrizes[0];
    
    // Trouver l'index du prix sélectionné
    const prizeIndex = wheelPrizes.findIndex(p => p === selectedPrize);
    const totalProbability = wheelPrizes.reduce((sum, prize) => sum + prize.probability, 0);
    let targetAngle = -90; // Commencer en haut (-90 degrés)
    
    // Calculer l'angle jusqu'au segment sélectionné
    for (let i = 0; i < prizeIndex; i++) {
        targetAngle += (wheelPrizes[i].probability / totalProbability) * 360;
    }
    // Ajouter la moitié du segment pour viser le centre
    targetAngle += (selectedPrize.probability / totalProbability) * 360 / 2;
    
    // Rotation avec plusieurs tours (5-8 tours)
    const spins = 5 + Math.random() * 3;
    // Normaliser l'angle pour qu'il soit positif
    const normalizedTarget = (360 - (targetAngle % 360)) % 360;
    const totalRotation = spins * 360 + normalizedTarget;
    wheelRotation = totalRotation;
    
    const canvas = document.getElementById('wheel-canvas');
    canvas.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    canvas.style.transform = `rotate(${wheelRotation}deg)`;
    
    setTimeout(() => {
        showWheelResult(selectedPrize);
        isSpinning = false;
        
        // Retirer l'effet de rotation
        const wheelWrapper = document.querySelector('.wheel-wrapper');
        if (wheelWrapper) {
            wheelWrapper.classList.remove('spinning');
        }
        
        if (wheelSpins > 0) {
            spinButton.disabled = false;
            spinButton.querySelector('.btn-spin-text').textContent = 'Tourner la roue';
        } else {
            spinButton.querySelector('.btn-spin-text').textContent = 'Plus de tours';
        }
    }, 4000);
}

function showWheelResult(prize) {
    const resultDiv = document.getElementById('wheel-result');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    const secondChanceSection = document.getElementById('second-chance-section');
    
    resultDiv.style.display = 'block';
    resultDiv.style.animation = 'result-appear 0.5s ease-out';
    
    if (prize.type === 'key') {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = 'Félicitations !';
        resultMessage.textContent = `Vous avez gagné : **${prize.label}** !\n\nVotre clé d'activation vous sera envoyée par email dans les prochaines minutes.`;
        resultDiv.style.borderColor = '#14F195';
        secondChanceSection.style.display = 'none';
    } else if (prize.value === 'try-again') {
        resultIcon.textContent = '🔄';
        resultTitle.textContent = 'Seconde chance !';
        resultMessage.textContent = 'Vous avez gagné une seconde chance ! Tournez à nouveau la roue gratuitement.';
        resultDiv.style.borderColor = '#f59e0b';
        wheelSpins++;
        document.getElementById('wheel-spins').textContent = wheelSpins;
        secondChanceSection.classList.remove('second-chance-hidden');
        secondChanceSection.classList.add('second-chance-visible');
        secondChanceSection.style.display = 'block';
    } else {
        resultIcon.textContent = '😔';
        resultTitle.textContent = 'Dommage !';
        resultMessage.textContent = 'Vous n\'avez rien gagné cette fois.\n\nNe vous découragez pas, réessayez plus tard !';
        resultDiv.style.borderColor = '#ef4444';
        secondChanceSection.style.display = 'none';
        secondChanceSection.classList.add('second-chance-hidden');
        secondChanceSection.classList.remove('second-chance-visible');
    }
}

// Ouvrir la roue de la fortune
function openWheelModal() {
    wheelSpins = 1;
    isSpinning = false;
    wheelRotation = 0;
    document.getElementById('wheel-spins').textContent = wheelSpins;
    const spinButton = document.getElementById('spin-button');
    spinButton.disabled = false;
    spinButton.querySelector('.btn-spin-text').textContent = 'Tourner la roue';
    const wheelResultInit = document.getElementById('wheel-result');
    wheelResultInit.style.display = 'none';
    wheelResultInit.classList.add('wheel-result-hidden');
    wheelResultInit.classList.remove('wheel-result-visible');
    
    const modal = document.getElementById('wheel-modal');
    modal.showModal();
    
    // Réinitialiser la rotation et redessiner
    const canvas = document.getElementById('wheel-canvas');
    if (canvas) {
        // Réinitialiser les dimensions du canvas
        const currentWidth = canvas.width;
        const currentHeight = canvas.height;
        canvas.width = 450;
        canvas.height = 450;
        canvas.style.transition = 'none';
        canvas.style.transform = 'rotate(0deg)';
        
        // Forcer le redessin immédiatement
        requestAnimationFrame(() => {
            initWheel();
            // Vérifier que la roue est bien dessinée
            console.log('Wheel canvas dimensions:', canvas.width, canvas.height);
            console.log('Wheel prizes count:', wheelPrizes.length);
        });
    }
}

// Event listeners pour la roue
document.addEventListener('DOMContentLoaded', () => {
    const wheelModal = document.getElementById('wheel-modal');
    const wheelModalClose = document.getElementById('wheel-modal-close');
    
    if (wheelModalClose) {
        wheelModalClose.addEventListener('click', () => {
            wheelModal.close();
        });
    }
    
    if (wheelModal) {
        wheelModal.addEventListener('click', (e) => {
            if (e.target === wheelModal) {
                wheelModal.close();
            }
        });
        
        // Réinitialiser la roue quand le modal s'ouvre
        wheelModal.addEventListener('close', () => {
            // Réinitialiser pour la prochaine ouverture
        });
    }
});
