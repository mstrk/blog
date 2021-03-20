const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();
const PORT = 3000;
const httpsOptions = {
  key: fs.readFileSync("./ssl/localhost-key.pem"),
  cert: fs.readFileSync("./ssl/localhost.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Server started on https://localhost:${PORT}`);
  });
});