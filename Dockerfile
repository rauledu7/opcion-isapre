# Etapa 1: Build
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Runtime
FROM node:lts-alpine AS runtime
WORKDIR /app

# Instalamos 'serve'
RUN npm install -g serve

# Copiamos solo la carpeta dist (el sitio estático)
COPY --from=build /app/dist ./dist

# Cloud Run pasa el puerto por variable de entorno $PORT
# 'serve' usa el flag -l para el puerto
CMD serve -s dist -l $PORT