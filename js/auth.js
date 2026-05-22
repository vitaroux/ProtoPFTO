// auth.js - Système d'authentification Collect 2030

// Vérifier si l'utilisateur est connecté
function checkAuth() {
    const session = localStorage.getItem('collect2030_session');
    if (!session) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(session);
}

// Vérifier le rôle de l'utilisateur
function checkRole(allowedRoles) {
    const userData = checkAuth();
    if (!userData) return false;
    
    if (!allowedRoles.includes(userData.role)) {
        alert('⚠️ Accès refusé. Vous n\'avez pas les permissions nécessaires.');
        logout();
        return false;
    }
    return true;
}

// Déconnexion
function logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        localStorage.removeItem('collect2030_session');
        window.location.href = 'login.html';
    }
}

// Obtenir l'utilisateur connecté
function getCurrentUser() {
    const session = localStorage.getItem('collect2030_session');
    return session ? JSON.parse(session) : null;
}

// Obtenir tous les utilisateurs
function getAllUsers() {
    const users = localStorage.getItem('collect2030_users');
    return users ? JSON.parse(users) : [];
}

// Sauvegarder les utilisateurs
function saveUsers(users) {
    localStorage.setItem('collect2030_users', JSON.stringify(users));
}

// Mettre à jour le badge utilisateur dans le header
function updateUserBadge() {
    const userData = getCurrentUser();
    if (!userData) return;
    
    // Chercher les éléments user-info ou user-badge dans la page
    const userBadges = document.querySelectorAll('.user-badge, .user-info span');
    userBadges.forEach(badge => {
        if (badge.textContent.includes('Admin') || 
            badge.textContent.includes('Pilote') || 
            badge.textContent.includes('Chef de Projet')) {
            badge.textContent = userData.name;
        }
    });
}

// Ajouter un bouton de déconnexion
function addLogoutButton() {
    const userInfos = document.querySelectorAll('.user-info');
    userInfos.forEach(userInfo => {
        // Vérifier si le bouton n'existe pas déjà
        if (!userInfo.querySelector('.logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.className = 'logout-btn';
            logoutBtn.innerHTML = '🚪';
            logoutBtn.title = 'Déconnexion';
            logoutBtn.style.cssText = `
                margin-left: 0.75rem;
                padding: 0.5rem 0.75rem;
                background: rgba(239, 68, 68, 0.2);
                border: 1px solid rgba(239, 68, 68, 0.3);
                border-radius: 8px;
                color: #EF4444;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 1rem;
            `;
            logoutBtn.addEventListener('mouseover', function() {
                this.style.background = 'rgba(239, 68, 68, 0.3)';
            });
            logoutBtn.addEventListener('mouseout', function() {
                this.style.background = 'rgba(239, 68, 68, 0.2)';
            });
            logoutBtn.onclick = logout;
            userInfo.appendChild(logoutBtn);
        }
    });
}

// Initialiser l'authentification sur la page
function initAuth(requiredRoles = []) {
    // Vérifier l'authentification
    const userData = checkAuth();
    if (!userData) return;
    
    // Vérifier le rôle si nécessaire
    if (requiredRoles.length > 0) {
        if (!checkRole(requiredRoles)) return;
    }
    
    // Mettre à jour l'interface
    updateUserBadge();
    addLogoutButton();
    
    return userData;
}

// Exporter pour utilisation globale
if (typeof window !== 'undefined') {
    window.checkAuth = checkAuth;
    window.checkRole = checkRole;
    window.logout = logout;
    window.getCurrentUser = getCurrentUser;
    window.getAllUsers = getAllUsers;
    window.saveUsers = saveUsers;
    window.initAuth = initAuth;
}
