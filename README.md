#DOWNLOAD ⬇️

https://www.mediafire.com/file/glahuii3cq270a1/ScoreMirage.zip/file

# ScoreMirage

Extension web pour tous les navigateurs (Chrome, Edge, Firefox, Opera, Brave, Vivaldi, etc.) qui modifie automatiquement les notes, masque les absences, devoirs et messages affichés sur le portail **Mozaïk-Portail Parents**.

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Utilisation](#-utilisation)
- [Formats de notes supportés](#-formats-de-notes-supportés)
- [Dépannage](#-dépannage)
- [Structure des fichiers](#-structure-des-fichiers)
- [Notes importantes](#-notes-importantes)
- [Crédits](#-crédits)

## ✨ Fonctionnalités

### 🎯 Modification automatique des notes

- **Pré-configuré et prêt à l'emploi** : L'extension est pré-configurée pour fonctionner immédiatement sans configuration manuelle
- **Détection automatique** : Détecte automatiquement les notes et les modifie sans rechargement de page
- **Modification HTML directe** : Modifie directement le HTML comme dans l'inspecteur du navigateur, rendant les changements persistants et visibles
- **Mode réaliste** : Ajuste les notes juste au-dessus d'un seuil minimum (par défaut 60%) pour rester crédible, tout en limitant les notes trop élevées
- **Filtrage par élève** : Ne modifie les notes que pour un élève spécifique
- **Filtrage par matière** : Ne modifie les notes que pour une ou plusieurs matières spécifiques, ou toutes les matières
- **Application immédiate** : Les modifications sont appliquées instantanément sans nécessiter de rechargement de page
- **Support Vue.js** : Compatible avec les applications Vue.js SPA (comme Mozaïk-Portail) grâce à un MutationObserver
- **Formats multiples** : Supporte différents formats de notes (15/20, 75%, 15, etc.)
- **Persistance** : Les modifications sont sauvegardées et réappliquées automatiquement après un rafraîchissement de page
- **Variation réaliste** : Chaque note modifiée a un pourcentage différent mais réaliste (entre 70% et 85%) basé sur un hash de la note originale
- **Modification uniquement des notes < 19** : Seules les notes inférieures à 19 sont modifiées, les notes >= 19 restent inchangées
- **Gestion manuelle** : Possibilité de modifier manuellement les notes depuis l'onglet Notes de la popup

### 🚫 Masquage des absences et retards

- **Masquage automatique** : Masque automatiquement toutes les absences et retards sur la page
- **Gestion manuelle** : Possibilité de masquer/afficher individuellement chaque absence ou retard depuis l'onglet Absences
- **Affichage "Pas d'absences"** : Affiche un message "Pas d'absences" lorsque toutes les absences sont masquées
- **Absences prévues** : Gestion séparée des absences prévues et de l'historique
- **Persistance** : Les absences masquées restent masquées après un rafraîchissement

### 📚 Masquage des devoirs et leçons

- **Masquage automatique** : Masque automatiquement tous les devoirs et leçons sur la page
- **Gestion manuelle** : Possibilité de masquer/afficher individuellement chaque devoir ou leçon depuis l'onglet Devoirs
- **Persistance** : Les devoirs masqués restent masqués après un rafraîchissement

### ✉️ Masquage des messages

- **Masquage automatique** : Masque automatiquement tous les messages sur la page
- **Gestion manuelle** : Possibilité de masquer/afficher individuellement chaque message depuis l'onglet Messages
- **Persistance** : Les messages masqués restent masqués après un rafraîchissement

### 🎨 Interface utilisateur

- **Mode nuit** : Toggle pour activer/désactiver le mode sombre
- **Interface à onglets** : Organisation claire des fonctionnalités en onglets (Configuration, Notes, Absences, Devoirs, Messages)
- **Design moderne** : Interface utilisateur moderne et intuitive avec animations fluides
- **Responsive** : Interface adaptée à différentes tailles d'écran

## 📦 Installation

### Navigateurs basés sur Chromium

Cette extension fonctionne sur tous les navigateurs basés sur Chromium, notamment :

- **Google Chrome**
- **Microsoft Edge**
- **Opera**
- **Brave**
- **Vivaldi**
- **Chromium**
- **Yandex Browser**
- **Arc Browser**

#### Instructions d'installation (tous les navigateurs Chromium)

1. Téléchargez ou clonez ce dépôt
2. Ouvrez votre navigateur et accédez à la page des extensions :
   - **Chrome** : `chrome://extensions/`
   - **Edge** : `edge://extensions/`
   - **Opera** : `opera://extensions/`
   - **Brave** : `brave://extensions/`
   - **Vivaldi** : `vivaldi://extensions/`
   - **Autres** : `chrome://extensions/` (généralement)
3. Activez le **"Mode développeur"** en haut à droite (ou dans les paramètres)
4. Cliquez sur **"Charger l'extension non empaquetée"** (ou "Load unpacked")
5. Sélectionnez le dossier contenant les fichiers de l'extension
6. L'extension **ScoreMirage** devrait maintenant apparaître dans votre liste d'extensions

### Firefox

1. Téléchargez ou clonez ce dépôt
2. Ouvrez Firefox et allez dans `about:debugging`
3. Cliquez sur **"Ce Firefox"** dans le menu de gauche
4. Cliquez sur **"Charger un module complémentaire temporaire"**
5. Sélectionnez le fichier `manifest.json` dans le dossier de l'extension
6. L'extension **ScoreMirage** devrait maintenant être chargée

**Note** : Pour Firefox, l'extension sera temporaire et devra être rechargée à chaque redémarrage du navigateur. Pour une installation permanente, vous devrez créer un fichier `.xpi` ou publier l'extension sur le Firefox Add-ons Store.

### Safari (macOS)

**Note** : Safari nécessite une version spéciale de l'extension avec un manifest différent. Cette extension est principalement conçue pour les navigateurs Chromium et Firefox.

Pour utiliser cette extension sur Safari :
1. Vous devrez convertir le manifest.json en format Safari
2. Utiliser Xcode pour créer une extension Safari
3. Ou utiliser un outil de conversion automatique

### Autres navigateurs

Pour d'autres navigateurs basés sur Chromium non listés ci-dessus :
1. Suivez les instructions pour les navigateurs Chromium
2. Accédez généralement à `chrome://extensions/` dans la barre d'adresse
3. Activez le mode développeur et chargez l'extension non empaquetée

## ⚙️ Configuration

L'extension est **pré-configurée** et fonctionne immédiatement après l'installation. Vous pouvez simplement l'activer et elle modifiera automatiquement les notes selon vos paramètres.

### Paramètres disponibles

1. Cliquez sur l'icône de l'extension dans la barre d'outils
2. Configurez les paramètres suivants dans l'onglet **Configuration** :

#### Sélecteurs

- **Sélecteur CSS de la mosaïque** : Sélecteur pour identifier l'élément qui déclenche la modification (optionnel, laissez vide pour traiter immédiatement)
- **Sélecteur CSS des notes** : Sélecteur pour trouver les éléments contenant les notes (pré-configuré par défaut : `[data-travail-resultat="eleve"] .note, .res-eleve .note`)

#### Augmentation

- **Type d'augmentation** : 
  - **Pourcentage (%)** : Ajoute un pourcentage à la note
  - **Valeur fixe** : Ajoute un nombre de points fixe
  - **Réaliste (au-dessus du seuil)** : Ajuste les notes juste au-dessus du seuil minimum
- **Valeur d'augmentation** : La valeur à appliquer (utilisé uniquement si le mode réaliste est désactivé)
- **Mode réaliste (70–85%)** : Active le mode réaliste qui ajuste les notes dans une plage crédible (activé par défaut)
- **Seuil minimum (%)** : Le seuil minimum en pourcentage (par défaut : 60%)

#### Ciblage

- **Élève** : Le prénom de l'élève pour lequel modifier les notes (requis)
- **Toutes les matières** : Si activé, les modifications s'appliquent à toutes les matières
- **Matière(s)** : Une ou plusieurs matières, séparées par des virgules (requis si "Toutes les matières" est désactivé)

3. Cliquez sur **"💾 Enregistrer"** - Les modifications seront appliquées immédiatement sans rechargement de page

### Mode réaliste

Quand le mode réaliste est activé (par défaut), l'extension :

- Ajuste les notes en dessous du seuil minimum (60%) pour qu'elles soient juste au-dessus (entre 70% et 85%)
- Garde les notes entre 60% et 65% telles quelles (déjà réalistes)
- Limite les notes au-dessus de 65% à 85% maximum pour rester crédible
- Ne modifie que les notes inférieures à 19 ou avec un pourcentage entre 26% et 60%
- Génère des variations réalistes pour chaque note basées sur un hash de la note originale

**Note importante** : L'extension ne modifiera les notes QUE si :
- Le nom de l'élève correspond
- La matière correspond (ou "Toutes les matières" est activé)

### Exemples de sélecteurs CSS

#### Sélecteur de la mosaïque (optionnel)
```
.mosaique
#widget-notes
[data-mosaique]
div.mosaique-container
```

#### Sélecteur des notes
```
.note
.score
[data-note]
td.note-cell
div.note-value
[data-travail-resultat="eleve"] .note
.res-eleve .note
```

## 🚀 Utilisation

### Utilisation simple (pré-configurée)

1. Installez l'extension
2. Configurez le nom de l'élève et les matières dans l'onglet Configuration
3. Naviguez vers une page Mozaïk-Portail contenant les notes
4. Les notes seront automatiquement modifiées et affichées directement dans le HTML

### Configuration avancée

1. Cliquez sur l'icône de l'extension dans la barre d'outils
2. Modifiez les paramètres selon vos besoins dans l'onglet Configuration
3. Utilisez le bouton **"🔍 Tester les sélecteurs"** pour vérifier que vos sélecteurs fonctionnent
4. Cliquez sur **"💾 Enregistrer"** - Les modifications seront appliquées immédiatement sans rechargement
5. Les notes seront automatiquement modifiées et persistantes dans le HTML

### Gestion manuelle des notes

1. Ouvrez l'onglet **📝 Notes** dans la popup
2. Cliquez sur **"🔄 Actualiser"** pour charger les notes de la page
3. Modifiez manuellement les notes en utilisant les champs de saisie
4. Cliquez sur **"💾 Sauvegarder"** pour chaque note modifiée
5. Les modifications manuelles sont persistantes et ne sont pas affectées par les modifications automatiques

### Gestion des absences

1. Ouvrez l'onglet **🚫 Absences** dans la popup
2. Activez/désactivez le **"🔄 Masquer absences et retards"** pour le masquage automatique
3. Cliquez sur **"🔄 Actualiser"** pour charger les absences de la page
4. Masquez/affichez individuellement chaque absence ou retard en utilisant les boutons
5. Les absences masquées restent masquées après un rafraîchissement

### Gestion des devoirs

1. Ouvrez l'onglet **📚 Devoirs** dans la popup
2. Activez/désactivez le **"🔄 Masquer devoirs et leçons"** pour le masquage automatique
3. Cliquez sur **"🔄 Actualiser"** pour charger les devoirs de la page
4. Masquez/affichez individuellement chaque devoir ou leçon en utilisant les boutons
5. Les devoirs masqués restent masqués après un rafraîchissement

### Gestion des messages

1. Ouvrez l'onglet **✉️ Messages** dans la popup
2. Activez/désactivez le **"🔄 Masquer les messages"** pour le masquage automatique
3. Cliquez sur **"🔄 Actualiser"** pour charger les messages de la page
4. Masquez/affichez individuellement chaque message en utilisant les boutons
5. Les messages masqués restent masqués après un rafraîchissement

## 📊 Formats de notes supportés

L'extension reconnaît et modifie les formats suivants :

- **Fractions avec pourcentage** : `2/27 (7%)`, `19/43 (44%)` - Format principal sur Mozaïk-Portail
- **Fractions** : `15/20`, `12.5/20`, `18,5/20`
- **Pourcentages** : `75%`, `85.5%`
- **Valeurs simples** : `15`, `18.5`, `20`

**Note** : Pour le format "X/Y (Z%)", l'extension modifie la fraction et recalcule automatiquement le pourcentage.

## 🔧 Dépannage

### Les notes ne sont pas modifiées

1. Vérifiez que l'extension est activée dans la popup (toggle "Activer" en haut)
2. Vérifiez que les sélecteurs CSS sont corrects (utilisez "🔍 Tester les sélecteurs")
3. Vérifiez que vous êtes sur `portailparents.ca`
4. Ouvrez la console du navigateur (F12) et cherchez les messages `[ScoreMirage]`
5. Assurez-vous que l'application Vue.js est chargée (l'élément `#application` doit exister)
6. Vérifiez que le nom de l'élève et la matière sont correctement configurés

### Les modifications disparaissent

L'extension utilise un **MutationObserver** et des vérifications périodiques pour réappliquer automatiquement les modifications si Vue.js re-rend les composants. Les modifications sont également appliquées directement dans le HTML (comme dans l'inspecteur), ce qui les rend persistantes.

Si les modifications disparaissent quand même :
1. Vérifiez que l'extension est activée dans la popup
2. Ouvrez la console du navigateur (F12) et vérifiez les messages `[ScoreMirage]`
3. Vérifiez que l'observer est actif (vous devriez voir "Observer initialisé sur #application")
4. Les modifications devraient être réappliquées automatiquement dans les 2 secondes

### Comment trouver les bons sélecteurs CSS

1. Ouvrez la page Mozaïk-Portail avec les notes
2. Ouvrez les outils de développement (F12)
3. Utilisez l'outil de sélection pour inspecter les éléments
4. Identifiez les classes, IDs ou attributs uniques des éléments contenant les notes
5. Utilisez ces informations pour créer vos sélecteurs CSS
6. Utilisez le bouton "🔍 Tester les sélecteurs" pour vérifier

### Les absences/devoirs/messages ne sont pas masqués

1. Vérifiez que le mode auto est activé dans l'onglet correspondant
2. Vérifiez que l'extension est activée (toggle "Activer" en haut)
3. Rechargez la page Mozaïk-Portail
4. Ouvrez la console du navigateur (F12) et vérifiez les messages d'erreur

### Le mode nuit ne fonctionne pas

1. Vérifiez que le toggle "🌙 Nuit" est activé dans la popup
2. Fermez et rouvrez la popup pour voir les changements

## 📁 Structure des fichiers

```
.
├── manifest.json          # Configuration de l'extension (Manifest V3)
├── content.js            # Script injecté dans les pages Mozaïk-Portail
├── popup.html            # Interface de configuration (HTML)
├── popup.css             # Styles de l'interface
├── popup.js              # Logique de l'interface
├── background.js         # Service worker (gestion des événements)
├── icon.svg              # Icône SVG de l'extension
├── icon16.png            # Icône 16x16 pixels
├── icon48.png            # Icône 48x48 pixels
├── icon128.png           # Icône 128x128 pixels
├── README.md             # Ce fichier
├── EXEMPLE_CONFIGURATION.md  # Exemples de configuration
├── GUIDE_SELECTEURS.md   # Guide pour trouver les sélecteurs CSS
├── VERIFICATION.md       # Vérification du fonctionnement
├── CREDITS.md            # Guide de personnalisation des crédits
├── CREATE_ICONS.md       # Guide pour créer les icônes
└── ICONS.md              # Informations sur les icônes
```

## ⚠️ Notes importantes

- Cette extension modifie uniquement l'affichage des notes dans le navigateur
- Les modifications ne sont pas sauvegardées sur le serveur Mozaïk-Portail
- Les modifications sont appliquées directement dans le HTML (comme dans l'inspecteur), les rendant visibles et persistantes
- L'extension réapplique automatiquement les modifications si Vue.js re-rend les composants
- **Aucun rechargement de page n'est nécessaire** - les modifications sont appliquées immédiatement
- Les modifications sont sauvegardées localement dans le navigateur et réappliquées après un rafraîchissement
- Utilisez cette extension de manière responsable et éthique
- **Avertissement** : Cette extension est fournie « telle quelle ». Vous assumez l'entière responsabilité de son utilisation. L'auteur décline toute responsabilité quant aux conséquences, dommages ou tout usage de cet outil. Utilisation à vos propres risques.

## 🔍 Fonctionnalités techniques

### Détection automatique

- **MutationObserver** : Détecte les changements DOM en temps réel
- **Vérification périodique** : Toutes les 2 secondes pour les notes existantes
- **Vérification approfondie** : Toutes les 5 secondes pour les nouvelles notes
- Les nouvelles notes ajoutées dynamiquement seront automatiquement détectées et modifiées

### Persistance

- **Sauvegarde avec ID unique** : Basé sur travail, matière, date, titre
- **Réapplication automatique** : Au chargement de la page
- **Fonctionne pour tous les chapitres** : Les modifications persistent pour les chapitres 3, 4, 5, etc.
- **Stockage local** : Utilise `chrome.storage.local` pour sauvegarder les modifications

### Calcul des notes

- **Variation réaliste** : Chaque note a un pourcentage différent mais réaliste (entre 70% et 85%)
- **Hash stable** : Basé sur un hash de la note originale pour garantir la cohérence
- **Évite les répétitions** : Ajuste légèrement les notes pour éviter des valeurs identiques côte à côte
- **Validation** : Vérifie que les pourcentages sont réalistes avant d'appliquer

### Compatibilité

- **Manifest V3** : Compatible avec les dernières versions de Chrome/Edge
- **Vue.js SPA** : Compatible avec les applications Vue.js (comme Mozaïk-Portail)
- **Multi-formats** : Supporte différents formats de notes
- **Multi-élèves** : Peut être configuré pour différents élèves

## 👤 Crédits

**Créé par** : benzoXdev

**Contact** :
- 📧 Email : mimarliyesca@gmail.com
- 📷 Instagram : [@just._.amar_x1](https://www.instagram.com/just._.amar_x1)
- 💻 GitHub : [@benzoXdev](https://github.com/benzoXdev)

**Version** : 3.4.9

**Plateforme** : Mozaïk-Portail Parents

---

**ScoreMirage** - Extension pour adapter les notes sur Mozaïk-Portail Parents (tous utilisateurs)
