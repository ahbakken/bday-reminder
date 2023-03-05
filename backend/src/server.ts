// Backend API RESTful

import Fastify from "fastify";


const app = Fastify();

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get("/", async () => {
  return "I LVOE YOU MORE" ;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running!");
  });
