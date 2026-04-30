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

# Copiamos TODOS los archivos desde build para asegurar que los renderizadores estén
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Copiamos el config (algunas integraciones lo leen en runtime)
COPY --from=build /app/astro.config.mjs ./astro.config.mjs 2>/dev/null || true
COPY --from=build /app/keystatic.config.ts ./keystatic.config.ts 2>/dev/null || true

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080
CMD ["node", "./dist/server/entry.mjs"]