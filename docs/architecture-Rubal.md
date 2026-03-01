# Sprint 3 Architecture - Movie Cards

## Repository
- **MovieRepository.ts** handles all movie data (get, add, update, delete) using test data.
- Keeps data logic separate from UI.
- Used by hook and service.

## Service
- **MovieService.ts** handles business rules like marking watched/unwatched and removing movies.
- Makes logic reusable across components.

## Hook
- **useMovies.ts** fetches movies from repository and uses service for updates.
- Returns movies list and functions to toggle watched or remove movies.
- Used in MoviesPage, FavouritesPage, and MovieCards.

## Component
- **MovieCard.tsx** shows movie cover and title, buttons to remove/toggle watched.
- Calls hook functions for actions.
- Only handles UI (presentation) logic.

## How it works
1. Component calls hook → hook calls service → service updates repository → state updates → component re-renders.
2. This avoids prop drilling and keeps UI, business, and data logic separate.