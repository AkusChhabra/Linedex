# linedex

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

# Linedex

Splay design application built under Advisory Circular (AC) No. 700-016 and AC 120-91A regulations.

Electron (main + preload + renderer, contextIsolation on, no nodeIntegration in renderer [API])
React + TypeScript in the renderer
MapLibre GL JS for the map, vector tiles as base layer
Turf.js for all geometry (bearing/destination, polygon buffering, line intersection, arc generation)
Zustand or Redux Toolkit for procedure state
SQLite (better-sqlite3) for airport/runway/navaid data
