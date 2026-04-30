# Etapa 1: Build
FROM node:22-slim AS build
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:22-slim AS runtime
WORKDIR /app

# En modo standalone, Astro pone todo lo necesario en dist/server.
# Sin embargo, para mayor seguridad con Keystatic, copiamos node_modules.
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

# No copiamos astro.config.mjs ya que no es necesario para ejecutar el bundle
# Si Keystatic requiere archivos de contenido, los copiamos:
COPY --from=build /app/src/content ./src/content 2>/dev/null || true

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080
CMD ["node", "./dist/server/entry.mjs"]