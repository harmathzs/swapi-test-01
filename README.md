# swapi-test-01

A React and Vite application that displays Star Wars films from [SWAPI](https://swapi.dev/). Films are sorted by episode number and shown in responsive cards with their title, director, release date, and opening crawl. The layout uses plain CSS.

## Prerequisites

- Node.js matching `^18.20.8 || ^20.0.0 || >=22.0.0`, and npm.
- An internet connection to load film data.

The build tooling is pinned for Node 18 compatibility. Node 18 is end-of-life and no longer receives security updates; use a supported Node.js release where possible.

## Getting Started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally after running the build. |
| `npm run lint` | Check the source using oxlint. |

There is currently no automated test suite.

## Film Data

The browser fetches films from `https://swapi.dev/api/films/`. No API key or environment variables are required. The app displays a loading message while the request is in progress and an error message if it fails; network problems or API availability can prevent films from loading.

## Project Structure

- `src/main.jsx`: React entry point.
- `src/App.jsx`: film fetching, sorting, and rendering.
- `src/App.css`: responsive film card styles.
- `src/index.css`: global styles and light color scheme.
- `vite.config.js`: Vite and React plugin configuration.
