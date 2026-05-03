# 🍔 BurgerHouse – Food Ordering App

A fully responsive food ordering web app built with vanilla HTML, CSS and JavaScript — inspired by platforms like Lieferando.  
Developed as part of the **Developer Akademie** curriculum.

**Live Demo →** [alexander-lindt.developerakademie.net/BestellApp](https://alexander-lindt.developerakademie.net/BestellApp/)

---

## Features

- Browse menu by category (Burgers, Pizza, Salads)
- Add items to basket, adjust quantity or remove them
- Live basket with subtotal, delivery fee and total
- Order confirmation animation
- Fully responsive — optimized for mobile, tablet and desktop
- Custom Figma-designed icons and UI components
- Scroll spy for active category highlighting

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- **No frameworks** — pure vanilla JS, CSS custom properties, CSS Grid & Flexbox
- **Fonts:** Figtree, Palanquin, Palanquin Dark (Google Fonts)
- **Icons:** Custom SVG icons from Figma design

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| 1100px+ | Full desktop with sidebar cart |
| 769–1100px | Tablet – compact cart |
| ≤768px | Mobile – bottom nav + cart dialog |
| ≤374px | Small phones |
| ≤320px | Tiny phones |
| Landscape | Compact hero & nav |

## Project Structure

```
BestellApp/
├── index.html        # App shell & markup
├── style.css         # All styles & responsive breakpoints
├── script.js         # App logic (cart, rendering, UI)
├── favicon.svg       # Custom takeout bag favicon
├── hero.jpg          # Hero image
├── logo.png          # BurgerHouse logo
└── dish-*.jpg / *.png  # Menu & UI images
```

## Local Setup

No build step needed. Just open `index.html` in your browser or serve it with any static file server:

```bash
# with VS Code Live Server or:
npx serve .
```

---

*Built by [Alexander Lindt](https://github.com/alexlindt-arch) · Developer Akademie München*
