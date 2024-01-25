const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Auth Server!", {status: 401});
  },
});

console.log(`Listening on ${server.url}`);