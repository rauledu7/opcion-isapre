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

# Copiamos solo lo esencial que ya sabemos que existe
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

# Definimos variables de entorno
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

# Ejecutamos el servidor
CMD ["node", "./dist/server/entry.mjs"]