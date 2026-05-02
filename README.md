<div align="center">
  <!-- Replace this path with your actual animated logo GIF -->
  <img src="./assets/animated-logo.gif" alt="IRCTE Animated Logo" width="150" />
  
  <h1>🚆 IRCTE</h1>
  <p><b>Modern Railway Reservation System</b></p>
  <p><i>A next-generation web application designed to provide a premium, high-speed train booking experience.</i></p>
</div>

---

## 🌟 Overview

**IRCTE** (Indian Railway Catering and Tourism Experience) is built to elevate the standard booking process. Powered by Next.js and Tailwind CSS, it offers a seamless, cinematic user interface for searching routes, selecting classes, and choosing seats. 

<!-- Primary UI Screenshot -->
<div align="center">
</div>

## ✨ Features

### 🔍 Dynamic Search Flow
Search for trains with destination, date, and class preferences. URL-synchronized parameters ensure your search state perfectly persists across page reloads.

<!-- Add a short GIF of your search bar working here -->
<div align="center">
  <img src="./assets/search-flow.gif" alt="Search Flow Demonstration" style="border-radius: 8px; margin: 15px 0;" />
</div>

### 💺 Interactive Seat Selection
Features visual layout mapping of train coaches. The interface automatically adapts the layout based on travel class (e.g., 2x2 grid for Executive Chair Car, and 2+3 layout for Sleeper classes).

<!-- Add a short GIF of the user clicking on seats here -->
<div align="center">
  <img src="./assets/seat-selection.gif" alt="Seat Selection Demonstration" style="border-radius: 8px; margin: 15px 0;" />
</div>

### ⚙️ Context-Aware Engine & UI
* **Seat Preference Engine:** Context-aware dropdowns offer smart selections like Aisle/Window options for Chair Cars, and Lower/Middle/Upper/Side options for Sleeper classes.
* **Algorithmic Distance Calculation:** Uses string hashing to dynamically generate consistent distances and trip durations based on your selected departure and arrival stations.
* **🎬 Cinematic UI/UX:** Built with the latest Tailwind CSS v4, featuring glassmorphism, smooth micro-animations, dynamic gradients, and responsive "Bento Box" layouts.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Language** | TypeScript |

## 🚀 Getting Started

First, install the project dependencies:

```bash
npm install

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3015](http://localhost:3015) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: The stunning landing page featuring the hero section and initial search form.
- `src/app/search/page.tsx`: Search results page displaying available trains, dynamic journey durations, and class availability.
- `src/app/seat-selection/page.tsx`: The interactive seat mapper and trip summary sidebar, complete with preference selection.
- `src/app/globals.css`: Global Tailwind directives and CSS variables.

## License

MIT License.

