FROM node:22-slim AS build
WORKDIR /app

# Herramientas necesarias para compilar módulos si hiciera falta
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

# Forzamos la instalación limpia ignorando los llantos de peer-dependencies
RUN npm install --legacy-peer-deps

COPY . .

# Desactivamos telemetría para que el log sea más limpio
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-slim AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"]