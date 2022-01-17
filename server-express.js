const express = require("express");
const { createServer: createViteServer } = require("vite");
const path = require("path");

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode.
  const vite = await createViteServer({
    server: { port: 1337, middlewareMode: "ssr" },
  });
  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  
  app.use("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
  
  app.listen(1337);
}

createServer();
