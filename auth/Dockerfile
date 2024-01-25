FROM oven/bun:1

COPY app.js ./
COPY package.json ./

RUN bun install

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "start" ]