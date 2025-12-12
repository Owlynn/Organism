# Organism - Simulation pAequor

## Description

Ce projet est une simulation JavaScript d'organismes pAequor, une espèce hypothétique d'organisme marin. Le projet permet de créer et manipuler des spécimens avec des séquences d'ADN générées aléatoirement.

## Fonctionnalités

- **Génération de bases ADN aléatoires** : Génère des bases ADN (A, T, C, G) de manière aléatoire
- **Création de brins d'ADN** : Crée des brins d'ADN composés de 15 bases
- **Factory d'organismes pAequor** : Permet de créer des spécimens avec un numéro unique et une séquence d'ADN
- **Mutation** : Méthode permettant de muter l'ADN d'un organisme

## Structure du projet

```
Organism/
├── index.html    # Page HTML principale
├── main.js       # Logique JavaScript du projet
└── README.md     # Documentation du projet
```

## Utilisation

1. Ouvrez `index.html` dans un navigateur web
2. Ouvrez la console du navigateur (F12) pour voir les résultats
3. Les organismes pAequor sont générés et affichés dans la console

## Code principal

### Génération de bases ADN
```javascript
returnRandBase() // Retourne une base ADN aléatoire (A, T, C, ou G)
```

### Création de brins d'ADN
```javascript
mockUpStrand() // Génère un brin d'ADN de 15 bases
```

### Factory d'organismes
```javascript
pAequorFactory(number, baseArray) // Crée un organisme pAequor avec un numéro et un ADN
```

## Exemple de sortie

Lors de l'exécution, le projet génère des organismes pAequor avec leurs caractéristiques :
- Numéro de spécimen
- Séquence d'ADN (15 bases)

## Technologies utilisées

- HTML5
- JavaScript (Vanilla)

## Auteur

Projet développé dans le cadre de l'apprentissage JavaScript.

