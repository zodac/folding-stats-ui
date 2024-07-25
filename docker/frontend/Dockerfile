ARG NODE_VERSION
ARG REST_ENDPOINT_URL
FROM node:${NODE_VERSION}-slim AS node_builder

WORKDIR /app

COPY *.json ./
COPY ./public/ ./public/
COPY ./res/ ./res/
COPY ./src/ ./src/

# Configure env variables
COPY ./docker/frontend/config/.env .env
ARG REST_ENDPOINT_URL
# Update .env file with values defined in docker-compose.yml file
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN grep -rl '%REST_ENDPOINT_URL%' .env | xargs sed -i "s|%REST_ENDPOINT_URL%|${REST_ENDPOINT_URL}|g"

# Install required packages, then build the application
RUN npm install --ignore-scripts && \
    npm run build

ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=node_builder /app .
COPY --chmod=0755 ./docker/frontend/scripts/entry.sh /entry.sh

RUN npm install --ignore-scripts -g serve@14.2.3

CMD ["/entry.sh"]
