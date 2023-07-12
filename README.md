# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](/images/screenshot-desktop.png)
![](/images/screenshot-mobile.png)

### Links

- Solution URL: [https://github.com/KatrineNPedersen/Interactive-Details-Form.git]
- Live Site URL: [https://katrinenpedersen.github.io/Interactive-Details-Form]

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Sass
- JavaScript
- Mobile-first workflow

### What I learned

This challenge was a great practice for using regular expression to validate the input fields of the form. When needing a specific pattern (for example 3 digits only), it is very important to designate the start and end of the string, so that the pattern test stays true.

### Continued development

I want to continue focusing on event handlers and their respective preventDefault() methods. Although this challenge required the use of the preventDefault() method for the submit button, I was able to only submit once all fields had been validated by adding a valid variable for each step.

## Author

- Frontend Mentor - [@KatrineNPedersen](https://www.frontendmentor.io/profile/KatrineNPedersen)
