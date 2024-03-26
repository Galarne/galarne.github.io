---
title: "Cas client : logiciel métier"
description: "Pour un logisticien automobile, nous créons un outil pour l'ensemble de son personnel et ses clients"
draft: false
summary: ""
container: container-fluid
sitemap:
  changefreq: monthly
  priority: 0.8
---


{{< line-with-picture src="/img/parking.svg" decorative="true" class="text-start" container=true >}}

## Le contexte :

Un **logisticien automobile** nous contacte pour créer son **logiciel métier**.

Ce client dispose de nombreux sites d'exploitations en France. Il souhaite créer un logiciel pour **uniformiser ses procédés** et son suivi client.

Après **un recueil des besoins** de ses différentes équipes, il nous présente **un cahier des charges** avec de nombreuses interfaces graphiques.

{{</ line-with-picture >}}



{{< line-with-picture position="left" src="/img/persona.svg" decorative="true" class="text-start" container=true >}}

## Les utilisateurs

Le **logiciel métier** doit permettre une vision de l'ensemble des activités et des postes de ce client. Les personae sont :
- Les **agents de parc**, en charge de réceptionner, garer et livrer les véhicules
- L'**atelier**, réalise les opérations sur les véhicules
- Le **chef de pôle**, suit ses équipes
- Le **responsable de parc**, chaperonne l'ensemble des équipes et des commandes clients
- Le **secrétariat**, ajuste les commandes des clients
- Les **clients**, visualisent leurs stocks, leurs demandes et l'avancement
- La **direction** bénéficie d'une vision 360 de l'ensemble des parcs.

{{</ line-with-picture >}}


{{< line-with-picture src="/img/screens.svg" decorative="true" class="text-start" container=true >}}

## La plateforme créée

Ce client souhaite disposer d'une **application mobile** ainsi que d'un **site internet sécurisé**.

Nous partons sur une **architecture orientée service**, composée de :
- un **intranet sécurisé**
- une **application Android** déployée sur ses téléphones
- un composant d'**authentification**
- une **API** qui contient sa logique métier

Avec les évolutions de ce projet, nous rajoutons :
- un composant de **planification des tâches** récurrentes
- un système de **génération de PDF**
- un outil pour designer et **envoyer des emails**

{{</ line-with-picture >}}


{{< line-with-picture position="left" src="/img/logos-tech/all.svg" decorative="true" container=true >}}

## Le point de vue technologique

L'**intranet** et l'**application Android** sont développées en **Flutter** afin d'avoir un seul code source.

Les composants avec une forte valeur ajoutée sont conçus en **C#&nbsp;Core**. Les composants génériques sont en **Node.js**.

Seuls les composants **C#** accèdent à la base de données.

L'ensemble des communications sont **chiffrées** et nécessitent d'être **authentifiées**.

Le tout est déployé dans notre **cluster Kubernetes** afin d'assurer un **niveau de service** optimal.

{{</ line-with-picture >}}

{{< cta >}}

