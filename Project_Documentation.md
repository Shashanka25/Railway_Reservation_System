# IRCTE Railway Reservation System - Complete Project Documentation

## 1. Introduction
This document outlines the step-by-step implementation, libraries, and algorithmic logic used to build the IRCTE (Indian Railway Catering and Tourism Experience) web application. The project is a Next.js-based frontend application designed to mimic a premium railway reservation system.

## 2. Libraries Used
*   **React (v19)**: The core UI library. Used to build encapsulated components and manage component-level state.
    *   *How it was used*: Utilized hooks like `useState` for tracking active input selections (e.g., selected seats, travel class, filters). `Suspense` was used to handle asynchronous boundaries when reading URL parameters.
*   **Next.js (v16 App Router)**: The React framework used for routing and server/client component architecture.
    *   *How it was used*: `next/navigation` (`useRouter`, `useSearchParams`) was heavily relied upon to pass data between the Home, Search, and Seat-Selection pages using URL query strings.
*   **Tailwind CSS (v4)**: A utility-first CSS framework for styling.
    *   *How it was used*: Employed for rapid UI development, implementing glassmorphic effects (`backdrop-blur`), grid layouts (`grid-cols-12`), and responsive breakpoints (`md:`, `lg:`).
*   **TypeScript**: Syntactical superset of JavaScript.
    *   *How it was used*: Ensured type safety across the React components, specifically for typing arrays like `selectedSeats` (`number[]`) and handling form events.

## 3. Algorithms & Logic Implemented Step-by-Step

### Step 1: URL State Synchronization (Search Form)
**Logic**: Instead of using complex global state management (like Redux), the application uses URL search parameters to pass state.
*   **Implementation**: In the landing page (`page.tsx`), the form captures "From", "To", "Date", and "Class". On submit, these are serialized into a `URLSearchParams` object and appended to the `/search` URL route.
*   **Usage After**: The `/search` page reads these parameters to display personalized results, and subsequently passes the `class` parameter down to the `/seat-selection` page.

### Step 2: String Hashing Algorithm for Mock Distance
**Algorithm**: Deterministic String Hashing (DJB2 variant).
*   **Implementation**: In `search/page.tsx`, to avoid hardcoding distances for every possible station combination, we compute a hash from the departure and arrival station codes.
    ```javascript
    let hash = 0;
    const strForHash = fromCode + toCode;
    for (let i = 0; i < strForHash.length; i++) {
      hash = strForHash.charCodeAt(i) + ((hash << 5) - hash);
    }
    const distance = 300 + (Math.abs(hash) % 1500);
    ```
*   **Usage After**: This ensures that searching "NDLS" to "BSB" always yields the exact same distance (e.g., 780km), providing a consistent user experience without a backend database.

### Step 3: Dynamic Grid Matrix Generation (Seat Selection)
**Algorithm**: Modulo Arithmetic for Grid Mapping.
*   **Implementation**: In `seat-selection/page.tsx`, the visual seat layout is dynamically generated based on the selected train class.
    *   *Chair Car (EC/CC)*: Uses a 5-column layout. The math `(i-1) % 4` determines if a seat is Window or Aisle.
    *   *Sleeper (1A/2A/3A/SL)*: Uses a 6-column layout (2+3 with an aisle). The algorithm `(i-1) % 5` assigns seat types: 0=Lower, 1=Middle, 2=Upper, 3=Side Lower, 4=Side Upper. The columns are then re-ordered using CSS Grid `col-start-X` properties to accurately depict a sleeper layout.
*   **Usage After**: The UI dynamically switches between a 2x2 seating plan and a sleeper compartment plan instantly when the URL query parameter `?class=...` changes.

### Step 4: Contextual Seat Preference Selection
**Logic**: Conditional Array Mapping.
*   **Implementation**: A dropdown is rendered before checkout. Based on the boolean `isChairCar`, the array of preference options switches.
    *   `true` -> `['Window', 'Aisle']`
    *   `false` -> `['Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper']`
*   **Usage After**: Guarantees the user is only presented with logically correct seat preferences for their specific travel class.

### Step 5: Pricing Calculation Engine
**Logic**: Basic Arithmetic mapped to selection length.
*   **Implementation**: Base fare dynamically alters based on `isChairCar`. Total price is calculated via `(baseFare + catering + taxes) * selectedSeats.length`.
*   **Usage After**: The right-hand Trip Summary updates the total checkout price in real-time as users click and toggle seats on the canvas.
