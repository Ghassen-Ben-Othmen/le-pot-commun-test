# Test AngularJS Le Pot Commun

Le projet est un test AngulaJS Frontend qui consiste à charger une liste des pots internationalisables à partir d'une API distante qui retourne des données sous format JSON.

# Objectifs

Les objectifs de ce test sont :

- Charger les données.
- I18N : faire une traduction sous 4 langues (FR, EN, ES et IT).
- Afficher un loader du chargement des images.

# Solution pour sauvgarder la langue

Pour ce faire j'ai utilisé le LocaleStorage qui permet de stocker des informations dans le navigateur et à chaque appel je vérifie s'il y'a une langue dans le LocalStorage si non la langue française sera activée par défaut.
