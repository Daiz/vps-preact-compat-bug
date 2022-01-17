# Vite SSR preact/compat resolve issue

Reproduction repo for [this Vite issue.](https://github.com/vitejs/vite/issues/6542)

## Installation

1. Clone the repo.
2. `npm install`

## Usage

- `npm run dev` to run Vite's own development server. (`vite --port 1337`)
- `npm run vite` to run Vite's own development server initialized via Vite's JS API, [as per Vite docs.](https://vitejs.dev/guide/api-javascript.html)
- `npm run express` to run Vite's development server in `middlewareMode: "ssr"` inside an [express](https://expressjs.com/) server, [as per Vite docs.](https://vitejs.dev/config/#server-middlewaremode)
- `npm run vps` to run Vite's development server with a [vite-plugin-ssr](https://github.com/brillout/vite-plugin-ssr) express setup. This setup comes largely from VPS's init script, with some unnecessary bits for reproduction stripped out. This is the only configuration where the resolve issue manifests.