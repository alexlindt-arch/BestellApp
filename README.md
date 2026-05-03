# BurgerHouse – Food Ordering App

A fully responsive food ordering web app built with vanilla HTML, CSS and JavaScript — inspired by platforms like Lieferando. Developed as part of the **Developer Akademie** curriculum.

**Live Demo:** [alexander-lindt.developerakademie.net/BestellApp](https://alexander-lindt.developerakademie.net/BestellApp/)

---

## What it does

BurgerHouse lets you browse a restaurant menu, build your basket, and place an order — all without a page reload. The experience adapts seamlessly from a tiny phone to a wide desktop monitor.

- Browse items across three categories: Burgers, Pizza, Salads
- Add items to your basket, adjust quantities, or remove them with a single tap
- Live basket updates: subtotal, delivery fee, and total recalculate instantly
- Place order triggers a delivery animation and resets the cart
- Active category auto-highlights as you scroll (scroll spy)

---

## Tech Stack

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

No frameworks, no build step, no dependencies — pure vanilla JS with CSS custom properties, Grid, and Flexbox.

- **Fonts:** Figtree, Palanquin, Palanquin Dark (Google Fonts)
- **Icons:** Custom SVG icons designed in Figma

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| 1100px+ | Full desktop with sidebar cart |
| 769–1100px | Tablet — compact sidebar |
| ≤768px | Mobile — bottom nav + cart dialog |
| ≤480px | Small phones |
| ≤374px | Very small phones |
| ≤320px | Tiny phones |
| Landscape | Compact hero and nav |

---

## Project Structure

```
BestellApp/
├── index.html              # App shell and markup
├── style.css               # All styles and responsive breakpoints
├── script.js               # App logic: cart, rendering, UI
├── favicon.svg             # Custom takeout bag favicon
└── assets/
    ├── hero.jpg            # Hero image
    ├── logo.png            # BurgerHouse logo
    ├── burger-badge.png    # Restaurant badge
    ├── delivery-truck.png  # Order confirmation graphic
    ├── dishes/             # 12 menu item photos
    └── icons/              # Category icons (burger, pizza, salad)
```

---

## Local Setup

No build step needed. Open `index.html` directly or serve it with any static file server:

```bash
npx serve .
```

---

*Built by [Alexander Lindt](https://github.com/alexlindt-arch) · Developer Akademie München*
