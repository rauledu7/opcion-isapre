// @ts-ignore - Ignoramos el error visual, Astro lo encontrará al compilar
// src/middleware.ts
import { reflux } from '@keystatic/astro/middleware';

// @ts-ignore
export const onRequest = (context, next) => {
  return reflux(context, next);
};