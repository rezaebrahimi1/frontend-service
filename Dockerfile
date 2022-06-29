# Stage 1

FROM repo.ficld.ir/node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build

# Stage 2
# FROM nginx:1.17.1-alpine
FROM repo.ficld.ir/nginxinc/nginx-unprivileged:1.17.1-alpine
COPY --from=build-step /app/dist /usr/share/nginx/html
