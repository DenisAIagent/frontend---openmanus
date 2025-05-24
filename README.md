<<<<<<< HEAD
# Basic project starter
=======
# MDMC Neura Orkestra - Documentation d'intégration

## Vue d'ensemble

Cette documentation explique comment intégrer l'interface MDMC Neura Orkestra dans votre projet. L'interface a été conçue selon les spécifications fournies, avec un design premium, sobre et futuriste adapté à une plateforme SaaS d'IA pour le marketing musical.

## Structure du projet

```
mdmc-neura-orkestra/
├── components/
│   ├── App.jsx                 # Point d'entrée principal
│   ├── Layout.jsx              # Layout principal avec sidebar, header et footer
│   ├── Sidebar.jsx             # Barre latérale de navigation
│   ├── Header.jsx              # En-tête avec tagline et profil utilisateur
│   ├── Dashboard.jsx           # Page dashboard avec grille de widgets
│   ├── dashboard/              # Composants spécifiques au dashboard
│   │   ├── WelcomeCard.jsx     # Carte de bienvenue personnalisée
│   │   ├── StatsWidget.jsx     # Widget de statistiques
│   │   ├── ActivityTimeline.jsx # Timeline des activités
│   │   ├── PerformanceChart.jsx # Graphique de performance
│   │   ├── ChatModule.jsx      # Module de chat IA
│   │   └── QuickActions.jsx    # Actions rapides
│   └── common/                 # Composants réutilisables
│       ├── NotificationToast.jsx # Notifications toast
│       └── SkeletonLoader.jsx  # Loaders pendant le chargement
├── styles/
│   ├── globals.css             # Styles globaux et design system
│   └── responsive.css          # Styles responsifs et accessibilité
└── assets/
    └── icons/                  # Dossier pour les icônes
```

## Intégration dans Builder.io

1. Importez les composants dans Builder.io en tant que composants personnalisés
2. Configurez les styles globaux dans les paramètres de votre projet Builder.io
3. Utilisez les composants dans vos pages Builder.io

## Intégration dans un projet React

1. Copiez les dossiers `components`, `styles` et `assets` dans votre projet React
2. Importez les styles globaux dans votre fichier principal
3. Utilisez le composant `App.jsx` comme point d'entrée ou intégrez les composants individuellement

## Design System

Le design system MDMC Neura Orkestra est défini dans `styles/globals.css` avec :

- Palette de couleurs (fond noir #18191b, accents rouges MDMC)
- Typographie (Poppins/Inter)
- Espacement et ombres
- Composants de base (boutons, cartes, inputs)
- Utilitaires CSS

## Responsivité et Accessibilité

L'interface est entièrement responsive (desktop, tablette, mobile) et respecte les bonnes pratiques d'accessibilité :

- Contraste suffisant
- Navigation au clavier
- Support des lecteurs d'écran
- Mode contraste élevé
- Préférences de mouvement réduit

## Personnalisation

Pour personnaliser l'interface :

1. Modifiez les variables CSS dans `styles/globals.css` pour adapter les couleurs et le branding
2. Ajustez les composants selon vos besoins spécifiques
3. Étendez les fonctionnalités en ajoutant de nouveaux composants

## Dépendances recommandées

Pour une implémentation complète, nous recommandons d'ajouter :

- Lucide Icons ou Heroicons pour les icônes
- Chart.js ou Recharts pour les graphiques
- React Router pour la navigation
- Framer Motion pour les animations (optionnel)

## Support

Pour toute question ou assistance supplémentaire concernant l'intégration de cette interface, n'hésitez pas à contacter l'équipe MDMC.
>>>>>>> 15ac6d4 (first commit)
