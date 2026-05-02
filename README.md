# IRCTE - Modern Railway Reservation System

IRCTE (Indian Railway Catering and Tourism Experience) is a next-generation web application designed to provide a premium, high-speed train booking experience. Built with Next.js and Tailwind CSS, it offers a seamless, cinematic user interface for searching routes, selecting classes, and choosing seats.

## Features

- **Dynamic Search Flow**: Search for trains with destination, date, and class preferences. URL-synchronized parameters ensure state persists across page reloads.
- **Interactive Seat Selection**: Visual layout mapping of train coaches. Automatically adapts layout based on travel class (e.g., 2x2 grid for Executive Chair Car, and 2+3 layout for Sleeper classes).
- **Seat Preference Engine**: Context-aware dropdowns that offer Aisle/Window options for Chair Cars, and Lower/Middle/Upper/Side options for Sleeper classes.
- **Algorithmic Distance Calculation**: Uses string hashing to dynamically generate consistent distances and trip durations based on the selected departure and arrival stations.
- **Cinematic UI/UX**: Built with Tailwind CSS v4, featuring glassmorphism, smooth micro-animations, dynamic gradients, and responsive "Bento Box" layouts.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## Getting Started

First, install dependencies:
```bash
npm install
```

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
