FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

WORKDIR /app/.next/standalone
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
