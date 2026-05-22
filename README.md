# 🚀 Collect 2030 - Plateforme de Gestion Backbone

**Version :** 1.0  
**Date :** Mai 2026

---

## 📦 Contenu du projet

Ce projet contient une plateforme complète de gestion du déploiement backbone avec système d'authentification multi-rôles.

### Structure des fichiers

```
collect2030_project/
├── index.html                  # Page d'accueil (redirige vers login)
├── pages/
│   ├── login.html             # Page de connexion
│   ├── admin.html             # Interface administrateur
│   ├── pilote.html            # Vue Pilote
│   └── dashboard.html         # Dashboard Chef de Projet
├── js/
│   └── auth.js                # Système d'authentification
├── css/
│   └── (styles intégrés dans les pages pour l'instant)
├── assets/
│   └── (images à ajouter si besoin)
└── docs/
    └── README.md              # Documentation détaillée
```

---

## 🎯 Démarrage rapide (3 étapes)

### 1️⃣ Extraire le ZIP
Décompressez le fichier `collect2030_project.zip` dans un dossier de votre choix.

### 2️⃣ Ouvrir le projet
Double-cliquez sur **`index.html`** (ou ouvrez `pages/login.html` directement)

### 3️⃣ Se connecter
Utilisez un des comptes de test (cliquez dessus directement) :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| **Admin** | admin@collect2030.fr | admin123 |
| **Pilote** | pilote@collect2030.fr | pilote123 |
| **Chef de Projet** | jean.dupont@free.fr | cp123 |
| **Bureau d'Études** | be@collect2030.fr | be123 |

---

## 🌐 Navigateurs supportés

✅ Chrome / Edge (recommandé)  
✅ Firefox  
✅ Safari  
⚠️ Internet Explorer non supporté

---

## 🔐 Système d'authentification

Le projet utilise **localStorage** pour stocker :
- Les comptes utilisateurs
- Les sessions actives
- Les données des topologies/projets

**Important :** Les données sont stockées localement dans votre navigateur. Elles ne sont pas synchronisées entre machines.

---

## 📚 Documentation complète

Pour plus d'informations, consultez le fichier **`docs/README.md`** qui contient :
- Guide d'utilisation détaillé
- Scénarios de test
- Gestion des utilisateurs
- FAQ et dépannage

---

## 🛠️ Prochaines étapes

### Fonctionnalités à développer
- [ ] Gestion complète des topologies
- [ ] Système de notifications
- [ ] Export PDF/Excel
- [ ] Migration vers Firebase (sync multi-machines)
- [ ] Version mobile responsive

### Améliorations possibles
- [ ] Dark/Light mode toggle
- [ ] Graphiques et statistiques
- [ ] Système de chat interne
- [ ] Historique des modifications
- [ ] Backup/Restore des données

---

## 💡 Besoin d'aide ?

Ce projet est conçu pour être utilisé sans compétences techniques :
1. Ouvrez le fichier HTML dans votre navigateur
2. Tout fonctionne directement
3. Aucune installation nécessaire

Pour des modifications ou ajouts de fonctionnalités, contactez votre développeur ou revenez sur Claude.ai !

---

## 📝 Notes techniques

- **LocalStorage** : Limite de ~10MB par domaine
- **Pas de serveur requis** : Fonctionne en local
- **Données persistantes** : Restent après fermeture du navigateur
- **Sécurité** : Adapté pour tests/démo, pas pour production

---

**Créé avec ❤️ par Claude & Anthropic**
