# Frontend Mentor - Advice generator app

This is a solution to the [advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Difficulty: `junior`

![](screenshot.png)

**Deployment status**

[![Netlify Status](https://api.netlify.com/api/v1/badges/65b3ab3b-ab6f-44b8-bd40-5e7de0b8a0ce/deploy-status)](https://app.netlify.com/sites/advice-generator-app-yari-morcus/deploys?branch=main)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Build with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Project information](#project-information)
  - [User stories and features](#user-stories-and-features)
  - [Flowchart](#flowchart)
  - [Good to know](#good-to-know)
- [Author](#author)

## Overview

### The challenge

To build the advice generator app according to the given designs as close as possible.
The users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Open GitHub repository](https://github.com/YariMorcus/advice-generator-app)
- Live Site URL: [open Netlify page](https://advice-generator-app-yari-morcus.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS _(BEM naming convention used, [see getbem.com](http://getbem.com) for more information)_
- Flexbox
- ES6 modules
- ES6 classes
- Fetch API / promises
- MVC (model-view-controller) architecture
- Mobile-first workflow
- Optimized for both Open Graph (Facebook) and Twitter Cards
- [Node.js](https://nextjs.org/) - Open source and multiplatform JavaScript runtime environment
- [NPM](https://www.npmjs.com/) - Package Manager for Node JavaScript platform
- [Browsersync](https://browsersync.io) - Synchronous browser testing (in collaboration with Gulp)
- [Parcel](https://parceljs.org/) - Zero configuration build tool / module bundler to automate workflow
- [Sass](https://sass-lang.com/) - CSS Preprocessor (in collaboration with Parcel)
- [GitHub](https://github.com/) - Technological platform based on Git
- [Git](https://git-scm.com/) - Free and open source distributed version control system
- [Netlify](https://www.netlify.com/) - Free service to host static webpages and web applications

### What I learned

1. Always use semantic compliants-standard HTML
2. To keep testing the application for Web Accessibility
3. To spend time looking at the details of the designs to create the application as accurately as possible
4. How to work with ES6 classes and modules
5. How to work with a zero configuration build tool such as Parcel
6. How to implement the MVC (model-view-controller) architecture in JavaScript
7. How to implement the Publisher-Subscriber pattern
8. How to write documentation for functions
9. How to implement a project configuration file and use it throughout the project
10. How to solve problems with a framework _(provided by a [course](https://www.udemy.com/course/the-complete-javascript-course/) I followed)_
11. How to create a flowchart based on the given project information

### Continued development

The way I want to continue to develop myself is by focusing on laying out a proper foundation of HTML, CSS, and JavaScript.
This so I can build quality websites for clients by just using the core languages of the Web.
At the present, I am working on the above things by going through (interactive) articles on the MDN Web Docs (see chapter [Useful resources](#useful-resources)).

Another way I want to improve my knowledge of these subjects is to do more challenges that [Frontend Mentor](https://www.frontendmentor.io/challenges) is offering, starting at the lowest level, and building that up to the more advanced ones.

Besides the above, I want to continue to develop myself by using several tools more often to improve my workflow. and spend less time doing things that can be automated.

A few tools that I will start using more often are:

1. Gulp
2. Parcel
3. Git
4. GitHub
5. Netlify (in combination with Continues Deployment)

_I will learn the above points in between but do not want to focus too much on those at the moment._

As soon as I am capable of creating quality websites with the core languages of the Web, I will start to learn JavaScript libraries and frameworks. Both of these change over time, so I do not want to spend my time on those before I have a solid understanding of prior mentioned languages.

### Useful resources

- [Transfonter](https://transfonter.org) - Has been used to convert the downloaded font files to woff and woff2 (most recent font formats, supported in all major browsers), and generate the corresponding `@font-face` css rulesets
- [Frontend Mentor - Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

## Project information

### User stories and features

1. As a user I want to generate a new piece of advice so I might be able to learn something from it

   **Feature**: A button that generates a new piece of advice based on an API call

   :information_source: The button disables for 2 seconds when pressed due to an API restriction. The API will send back the same advice when pressed again within 2 seconds. To prevent confusion, this mechanism has been added.\*

### Flowchart

![](flowchart.jpg)

## Author

- LinkedIn - [Yari Morcus](https://www.linkedin.com/in/yarimorcus) _(must be logged in)_
- Frontend Mentor - [@YariMorcus](https://www.frontendmentor.io/profile/YariMorcus)
