// Backend API RESTful

import Fastify from "fastify";
import fastifyCors from "@fastify/cors";


const app = Fastify();
app.register(fastifyCors)

/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */

app.get("/hello", async () => {
  return "I LVOE YOU MORE" ;
});

app.get("/api", async () =>  {
  return { message: "Dengo, marry me!!!" }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running!");
  });
