# FROM node:22

# RUN corepack enable
# COPY . /app
# WORKDIR /app
# RUN pnpm install
# COPY package.json pnpm-lock.yaml ./
# COPY . .
# RUN pnpm build
# CMD ["pnpm", "http-server", "dist"]

FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN corepack enable
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080

# FROM --platform=linux/amd64 oven/bun
# WORKDIR /app
# COPY . /app

# RUN bun install
# COPY package.json bun.lock ./
# COPY . .
# RUN bun run build
# CMD ["bunx", "http-server", "dist"]
