const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(`Resource Server!\n${JSON.stringify(request.headers, null, 2)}`);
  },
});

console.log(`Listening on ${server.url}`);