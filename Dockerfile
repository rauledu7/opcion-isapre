# Etapa 1: Build
FROM node:22-slim AS build
WORKDIR /app
# Instalamos dependencias nativas necesarias
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:22-slim AS runtime
WORKDIR /app

# Copiamos package.json para las dependencias de ejecución
COPY package*.json ./
# Instalamos solo dependencias de producción
RUN npm install --omit=dev --legacy-peer-deps

# COPIAMOS TODO EL CONTENIDO DE DIST
COPY --from=build /app/dist ./dist

# IMPORTANTE: Copiamos el keystatic.config y contenidos si Keystatic los necesita en runtime
# Dependiendo de tu setup, Keystatic puede necesitar leer archivos fuera de dist
COPY --from=build /app/keystatic.config.ts ./keystatic.config.ts 2>/dev/null || true
COPY --from=build /app/src/content ./src/content 2>/dev/null || true

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080
# Usamos el entrypoint generado por @astrojs/node
CMD ["node", "./dist/server/entry.mjs"]