const server = Bun.serve({
  port: 3000,
  fetch(request) {
    if (request.headers.get('authorization') == "Bearer jason") {
      return new Response("Absolutely!", {headers: {"X-Auth-Attributes": "he's awesome"}});
    } else {
      return new Response("Go away!", {status: 401});
    }
  },
});

console.log(`Listening on ${server.url}`);