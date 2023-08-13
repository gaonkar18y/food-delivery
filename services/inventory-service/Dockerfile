FROM node:18 as builder

WORKDIR /usr/app

copy . .

RUN npm install
RUN npm run build

FROM node:18-alpine

WORKDIR /usr/app

ENV NODE_ENV="production"

copy --from=builder /usr/app/dist ./dist
copy --from=builder /usr/app/package.json ./package.json
copy --from=builder /usr/app/.env ./.env

RUN npm install

RUN mkdir -p public

ENTRYPOINT ["node","dist/index.js"]


