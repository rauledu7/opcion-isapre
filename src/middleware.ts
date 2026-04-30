// @ts-ignore - Ignoramos el error visual, Astro lo encontrará al compilar
import { reflux } from '@keystatic/astro/middleware';

export const onRequest = reflux;