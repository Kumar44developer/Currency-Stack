# 💶 3D Isometric Currency Stack Parallax

An interactive 3D parallax visualizer built using vanilla HTML, CSS, and JavaScript. The project models an isometric stack of Euro banknotes where each layer reacts to cursor movement with custom depth coefficients, creating an illusion of realistic three-dimensional floating depth.

---

## Features

- **3D Isometric Projection**: Transforms the card stack using CSS matrix skewing and rotation (`rotate(-30deg) skew(25deg)`).
- **Multi-Depth Parallax Effect**: Each layer responds to mouse coordinates at varying speeds (`data-speed` values 10 through 40) to simulate spatial distance.
- **Layered Opacity & Stacking**: Applies progressive opacity gradients (from 1.0 down to 0.4) across four stacked layers with layered z-index hierarchy.
- **Realistic Drop Shadow Depth**: Utilizes `filter: drop-shadow(...)` to project soft ambient elevation shadows.
- **Hardware-Accelerated Motion**: Uses CSS transform translations for high framerate, GPU-accelerated parallax motion.
- **Zero Framework Overhead**: Built with pure native web standards without Three.js, Canvas, or external animation libraries.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Container markup, banknote image nodes, and `data-speed` attribute mapping |
| CSS3 | Isometric perspective transformations, flexbox centering, radial vignette gradients, and drop shadows |
| JavaScript (ES6) | Real-time `mousemove` coordinate calculation and per-layer transform injection |

---

## Project Structure

```
Currency-Stack/
├── index.html       # Markup structure hosting the isometric layers and data attributes
├── style.css        # Isometric skewing, radial background gradient, layer opacities, and shadows
├── script.js        # Mouse tracking and multi-depth parallax transformation logic
└── README.md        # Project documentation
```

---

## How It Works

1. **Isometric Stacking (`style.css`)**: The `.container` is transformed into an isometric plane using:
   ```css
   transform: rotate(-30deg) skew(25deg) scale(0.85);
   ```
2. **Depth Speed Mapping (`index.html`)**: Each `<img>` node is assigned a distinct `data-speed` multiplier (10, 20, 30, 40).
3. **Parallax Motion (`script.js`)**:
   - Captures cursor coordinates on `mousemove`.
   - Computes displacement offsets for horizontal and vertical planes based on the layer's speed factor:
     ```javascript
     const x = (window.innerWidth - e.pageX * movement) / 200;
     const y = (window.innerHeight - e.pageY * movement) / 200;
     ```
   - Injects the computed translation into each layer's `transform` property to produce dynamic multi-plane displacement.

---

## Layer Configuration

| Layer | Speed Coefficient | Opacity | Z-Index |
| --- | --- | --- | --- |
| **Top Layer** | `data-speed="40"` | `1.0` | `4` |
| **Second Layer** | `data-speed="30"` | `0.8` | `3` |
| **Third Layer** | `data-speed="20"` | `0.6` | `2` |
| **Base Layer** | `data-speed="10"` | `0.4` | `1` |

---

## Getting Started

No build configurations, package managers, or server installations are necessary.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/Currency-Stack.git
```

### 2. Launch the application

Open `index.html` directly in any web browser, or serve it using an extension like VS Code Live Server.

---

## Customization

- **Change Asset Image**: Replace the `src` URL in `index.html` with your desired banknote, card, or graphic asset.
- **Adjust Parallax Intensity**: Modify the `data-speed` values in `index.html` or change the division factor (currently `200`) in `script.js` to increase or decrease movement sensitivity.
- **Adjust Isometric Angle**: Edit the `rotate(-30deg) skew(25deg)` rule on `.container` in `style.css` to customize the isometric viewing angle.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
