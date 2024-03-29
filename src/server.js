const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5050;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`[server]: server alive on http://localhost:${PORT}`);
});
