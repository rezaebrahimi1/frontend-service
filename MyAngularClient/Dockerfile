# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# # Expose the port the app runs in
EXPOSE 4200

# # # Serve the app
CMD ["npm", "start"]

# # Stage 2
# FROM nginxinc/nginx-unprivileged:latest
# COPY --from=build-step /app/dist /usr/share/nginx/html
