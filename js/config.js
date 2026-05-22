// config.js - Configuration globale de Collect 2030

const COLLECT_CONFIG = {
    // Version de l'application
    version: '1.0.0',
    
    // Nom de l'application
    appName: 'Collect 2030',
    
    // Clés localStorage
    storageKeys: {
        users: 'collect2030_users',
        session: 'collect2030_session',
        topologies: 'collect2030_topologies',
        projects: 'collect2030_projects',
        segments: 'collect2030_segments'
    },
    
    // Rôles disponibles
    roles: {
        ADMIN: 'admin',
        PILOTE: 'pilote',
        CP: 'cp',
        BE: 'be'
    },
    
    // Labels des rôles
    roleLabels: {
        admin: 'Administrateur',
        pilote: 'Pilote',
        cp: 'Chef de Projet',
        be: 'Bureau d\'Études'
    },
    
    // Couleurs par rôle
    roleColors: {
        admin: '#EF4444',
        pilote: '#8B5CF6',
        cp: '#3B82F6',
        be: '#10B981'
    },
    
    // Pages par rôle
    rolePages: {
        admin: 'admin.html',
        pilote: 'pilote.html',
        cp: 'dashboard.html',
        be: 'dashboard.html'
    },
    
    // Messages
    messages: {
        loginSuccess: '✅ Connexion réussie ! Redirection...',
        loginError: '❌ Email ou mot de passe incorrect',
        accessDenied: '⚠️ Accès refusé. Vous n\'avez pas les permissions nécessaires.',
        logoutConfirm: 'Êtes-vous sûr de vouloir vous déconnecter ?',
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cet élément ?'
    }
};

// Exporter pour utilisation globale
if (typeof window !== 'undefined') {
    window.COLLECT_CONFIG = COLLECT_CONFIG;
}

// ── TOPOLOGIES (shared localStorage helpers) ────────────────────────────────

function getTopologies() {
    return JSON.parse(localStorage.getItem('collect2030_topologies') || '[]');
}

function saveTopologies(topos) {
    localStorage.setItem('collect2030_topologies', JSON.stringify(topos));
}

// Retourne les topologies affectées à un CDP donné (par email)
function getToposForCDP(email) {
    return getTopologies().filter(t => t.cdpEmail === email);
}

// Retourne les topologies prêtes à être affectées (LOT défini, pas encore affectées)
function getToposReadyForAffectation() {
    return getTopologies().filter(t => t.lot && !t.cdpEmail);
}

if (typeof window !== 'undefined') {
    window.getTopologies = getTopologies;
    window.saveTopologies = saveTopologies;
    window.getToposForCDP = getToposForCDP;
    window.getToposReadyForAffectation = getToposReadyForAffectation;
}
