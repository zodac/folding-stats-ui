ARG NODE_VERSION
FROM node:${NODE_VERSION}-slim AS node_builder

WORKDIR /app

COPY ./public/ ./public/
COPY *.json ./
COPY ./src/ ./src/

# Install required packages
RUN npm install --ignore-scripts

# Build the application
RUN npm run build

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=node_builder /app .
COPY --chmod=0755 ./docker/frontend/scripts/entry.sh /entry.sh

RUN npm install -g serve

EXPOSE 3000
CMD ["/entry.sh"]
