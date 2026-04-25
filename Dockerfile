# Etapa 1: Construcción
FROM node:22-slim AS build
WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

# Instalamos con el flag para ignorar conflictos de versiones
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Etapa 2: Ejecución (Runtime)
FROM node:22-slim AS runtime
WORKDIR /app

# Copiamos la carpeta dist que ahora contiene el servidor generado por Astro
COPY --from=build /app/dist ./dist

# Variables para Cloud Run
ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080

# El entry point correcto para el adaptador de Node de Astro
CMD ["node", "./dist/server/entry.mjs"]