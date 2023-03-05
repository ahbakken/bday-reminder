"use strict";
// Backend API RESTful
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const app = (0, fastify_1.default)();
app.register(fastify_cors_1.default);
/**
 * Metodo HTTP: Get, Post, Put, Patch, Delete
 */
app.get("/hello", async () => {
    return { hello: "world" };
});
app
    .listen({
    port: 3333,
})
    .then(() => {
    console.log("Server running!");
});
