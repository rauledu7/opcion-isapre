# Usamos una sola etapa para evitar pérdida de dependencias
FROM node:22

WORKDIR /app

# 1. Copiar archivos de dependencias
COPY package*.json ./

# 2. Instalar TODO (incluyendo devDeps que Astro usa para el build)
RUN npm install --legacy-peer-deps

# 3. Copiar el resto del código
COPY . .

# 4. Construir la aplicación
RUN npm run build

# 5. Configurar entorno
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

# 6. Ejecutar el servidor directamente
# Usamos el entrypoint que generó el build
CMD ["node", "./dist/server/entry.mjs"]