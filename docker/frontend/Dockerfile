ARG NODE_VERSION
FROM node:${NODE_VERSION}-slim AS node_builder

WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force && \
    npm install --ignore-scripts

COPY ./ ./

# Build the application
RUN npm run build

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=node_builder /app .
COPY --chmod=0755 ./docker/frontend/scripts/entry.sh /entry.sh

EXPOSE 3000
CMD ["/entry.sh"]
