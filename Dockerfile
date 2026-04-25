FROM node:22-slim AS build
WORKDIR /app

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

# Instalamos todo incluyendo el plugin de postcss necesario para v4
RUN npm install --legacy-peer-deps

COPY . .

# IMPORTANTE: Para Tailwind v4 a veces es necesario que este env esté presente
ENV NODE_ENV=production
RUN npm run build

FROM node:22-slim AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"]