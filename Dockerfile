# Etapa 1: Build
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:22 AS runtime
WORKDIR /app

# En lugar de copiar node_modules, vamos a instalar SOLO producción aquí
# para asegurar que los enlaces simbólicos de los renderizadores se creen en el SO de destino
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Instalamos dependencias de producción directamente en el contenedor final
RUN npm install --omit=dev --legacy-peer-deps

ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080
CMD ["node", "./dist/server/entry.mjs"]