FROM --platform=linux/amd64 oven/bun
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build
CMD ["bunx", "http-server", "dist"]