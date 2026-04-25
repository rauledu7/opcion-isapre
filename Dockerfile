# Etapa 1: Construcción (Build)
FROM node:22-slim AS build
WORKDIR /app

# Instalamos dependencias mínimas del sistema para compilar módulos nativos
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copiamos archivos de dependencias
COPY package*.json ./

# Usamos 'npm ci' para una instalación exacta y limpia basada en el lockfile
RUN npm ci

# Copiamos el resto del código
COPY . .

# Construimos el sitio para producción
RUN npm run build

# Etapa 2: Ejecución (Runtime)
FROM node:22-slim AS runtime
WORKDIR /app

# Instalamos un servidor estático ligero
RUN npm install -g serve

# Copiamos la carpeta de salida desde la etapa de construcción
COPY --from=build /app/dist ./dist

# Cloud Run requiere que el contenedor escuche en el puerto definido por $PORT
# 'serve' usa el flag -l para especificar el puerto
EXPOSE 8080
CMD serve -s dist -l $PORT