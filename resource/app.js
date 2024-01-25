const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Resource Server!");
  },
});

console.log(`Listening on ${server.url}`);