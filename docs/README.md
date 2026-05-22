# 🚀 Collect 2030 - Guide d'utilisation

## 📦 Fichiers nécessaires

Assurez-vous d'avoir TOUS ces fichiers dans le **même dossier** :

### Pages HTML
1. `login.html` - Page de connexion ⭐ POINT D'ENTRÉE
2. `admin.html` - Interface administrateur
3. `pilote.html` - Vue Pilote
4. `dashboard.html` - Vue Chef de Projet
5. `auth.js` - Système d'authentification

### Images (optionnel)
- `andrea_glass.jpg` - Photo (si vous l'avez gardée)

---

## 🎯 Démarrage rapide

### 1️⃣ Première connexion

**Ouvrez `login.html` dans votre navigateur**

Vous verrez 4 comptes de test prêts à utiliser :

| Rôle | Email | Mot de passe | Accès |
|------|-------|--------------|-------|
| **Admin** | admin@collect2030.fr | admin123 | Interface Admin |
| **Pilote** | pilote@collect2030.fr | pilote123 | Vue Pilote |
| **Chef de Projet** | jean.dupont@free.fr | cp123 | Dashboard CP |
| **Bureau d'Études** | be@collect2030.fr | be123 | Dashboard BE |

💡 **Astuce** : Cliquez directement sur une carte de compte de test !

---

## 🔐 Système d'authentification

### Comment ça marche ?

**LocalStorage** : Toutes les données sont stockées dans votre navigateur
- ✅ Les comptes persistent même après fermeture du navigateur
- ✅ Chaque utilisateur a sa propre session
- ✅ Les données sont séparées par utilisateur
- ⚠️ Les données restent sur CETTE machine uniquement

### Connexion / Déconnexion

**Se connecter :**
1. Entrez email + mot de passe
2. Ou cliquez sur un compte de test
3. Vous êtes redirigé selon votre rôle

**Se déconnecter :**
- Cliquez sur le bouton 🚪 en haut à droite
- Vous retournez à la page de login

---

## 👥 Gestion des utilisateurs (Admin uniquement)

### En tant qu'Admin, vous pouvez :

**Créer un utilisateur :**
1. Connectez-vous avec `admin@collect2030.fr` / `admin123`
2. Cliquez sur "+ Créer un utilisateur"
3. Remplissez : Nom, Email, Profil, Statut
4. Le compte est créé immédiatement

**Modifier un utilisateur :**
1. Cliquez sur ✏️ dans la ligne de l'utilisateur
2. Modifiez le profil ou le statut
3. Enregistrez

**Supprimer un utilisateur :**
1. Cliquez sur 🗑️
2. Confirmez la suppression

**Tester les nouveaux comptes :**
1. Créez un compte avec email + mot de passe
2. Déconnectez-vous (🚪)
3. Reconnectez-vous avec le nouveau compte

---

## 🧪 Scénarios de test

### Test 1 : Multi-utilisateurs sur une seule machine

**Étape 1 - Admin**
```
1. Ouvrez login.html
2. Connectez-vous avec admin@collect2030.fr
3. Créez un nouveau Chef de Projet : "Test User" / test@free.fr / cp123
4. Déconnectez-vous 🚪
```

**Étape 2 - Test User**
```
1. Connectez-vous avec test@free.fr / cp123
2. Vous arrivez sur le dashboard CP
3. Créez un projet, modifiez des segments
4. Déconnectez-vous 🚪
```

**Étape 3 - Pilote**
```
1. Connectez-vous avec pilote@collect2030.fr
2. Voyez toutes les topologies
3. Modifiez une topologie
4. Vérifiez la timeline
```

### Test 2 : Rôles et permissions

**Admin** → Peut tout voir et gérer les utilisateurs
**Pilote** → Voit toutes les topos, tous les CP
**Chef de Projet** → Voit ses topologies affectées
**Bureau d'Études** → Injecte les segments

### Test 3 : Persistance des données

```
1. Connectez-vous
2. Créez une topologie / un projet / modifiez des segments
3. FERMEZ le navigateur complètement
4. Rouvrez login.html
5. Reconnectez-vous
6. ✅ Vos données sont toujours là !
```

---

## 🔧 Réinitialiser tout

### Effacer toutes les données

Ouvrez la **Console du navigateur** (F12) et tapez :

```javascript
localStorage.clear();
location.reload();
```

Cela supprime :
- Tous les comptes utilisateurs
- Toutes les sessions
- Toutes les topologies
- Tous les projets

Les comptes par défaut seront recréés au prochain chargement de la page de login.

---

## 💾 Où sont stockées les données ?

### Dans le navigateur (localStorage) :

| Clé | Contenu |
|-----|---------|
| `collect2030_users` | Liste de tous les utilisateurs |
| `collect2030_session` | Session de l'utilisateur connecté |
| `collect2030_topologies` | Toutes les topologies (à implémenter) |
| `collect2030_projects` | Tous les projets (à implémenter) |
| `collect2030_segments` | Tous les segments (à implémenter) |

---

## 🚫 Limitations actuelles

**LocalStorage** :
- ❌ Données NON synchronisées entre machines
- ❌ Limite ~10MB de stockage
- ❌ Visible dans les outils développeur (pas sécurisé pour prod)
- ✅ PARFAIT pour tester localement

**Prochaine étape** : Migration vers Firebase pour :
- ✅ Synchronisation temps réel
- ✅ Multi-utilisateurs sur plusieurs machines
- ✅ Sécurité renforcée
- ✅ Hébergement en ligne

---

## 🐛 Problèmes fréquents

### "Accès refusé"
→ Vous essayez d'accéder à une page sans avoir le bon rôle
→ Connectez-vous avec le bon compte

### "Les données ont disparu"
→ Vous avez vidé le cache du navigateur
→ Utilisez toujours le même navigateur pour vos tests

### "Je ne peux pas créer de compte"
→ Vous devez être connecté en tant qu'Admin
→ Utilisez admin@collect2030.fr / admin123

### "Page blanche après connexion"
→ Vérifiez que TOUS les fichiers sont dans le même dossier
→ Vérifiez la console du navigateur (F12) pour voir les erreurs

---

## 📞 Support

Pour toute question ou amélioration, n'hésitez pas !

**Version actuelle** : LocalStorage v1.0
**Prochaine version** : Firebase v2.0 (synchronisation multi-machines)

---

**Bon test ! 🚀**
