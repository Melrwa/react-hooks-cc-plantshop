const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Connect to db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Set the port to 3000 or any environment-specified port
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
