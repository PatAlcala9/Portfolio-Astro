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