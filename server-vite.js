const { createServer } = require("vite");

(async () => {
  const server = await createServer({
    root: __dirname,
    server: {
      port: 1337,
      
    },
  });
  await server.listen();

  server.printUrls();
})();
