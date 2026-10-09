FROM node:24.8.0 as build-stage
WORKDIR /client

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /client/dist/ /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY env.js.template /app/env.js.template
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
