# Kasa

Application web de location immobilière entre particuliers, développée en React dans le cadre de la formation Développeur Web d'OpenClassrooms.

## Fonctionnalités

- **Accueil** : liste des logements récupérés depuis l'API
- **Fiche logement** : galerie photo, informations, hôte, note, description et équipements
- **À propos** : valeurs de Kasa présentées dans des menus déroulants
- **Page 404** : pour toute URL inconnue ou tout logement inexistant
- Interface **responsive** (ordinateur, tablette, mobile)

## Technologies

- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite](https://vite.dev)
- CSS (un fichier par composant, nommage BEM)
- [Vitest](https://vitest.dev) et [React Testing Library](https://testing-library.com) pour les tests

## Prérequis

- [Node.js](https://nodejs.org) (version 20 ou plus récente)
- [Git](https://git-scm.com)

## Installation et lancement

L'application a besoin de deux parties lancées en même temps : le back-end (l'API) et le front-end (l'application React).

### 1. Le back-end

```bash
git clone https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React.git kasa-backend
cd kasa-backend/backend
npm install
npm start
```

L'API est disponible sur `http://localhost:8080`.

### 2. Le front-end

Dans un autre terminal :

```bash
git clone https://github.com/sobierajalexandre-lab/kasa.git
cd kasa
npm install
npm start
```

L'application est disponible sur `http://localhost:5173`.

## Tests

```bash
npm test              # lance les tests
npm run coverage      # lance les tests et affiche le taux de couverture
```

Composants testés : Collapse et Gallery (avec state), Tag, Card et Rating (sans state).

## Structure du projet

```
src/
  assets/       images et icônes
  components/   composants réutilisables, un dossier par composant
  pages/        pages de l'application, un dossier par page
  services/     appels à l'API
  Tests/        Tests des différents composants
  App.jsx       mise en page commune et routes
  main.jsx      point d'entrée
```

## Auteur

Alexandre Sobieraj