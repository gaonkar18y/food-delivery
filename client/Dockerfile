FROM node:18 as builder

WORKDIR /react-app

copy . .

RUN npm install
RUN npm run build


FROM nginx

copy --from=builder /react-app/dist /usr/share/nginx/html

copy --from=builder /react-app/ngnix.config /etc/nginx/conf.d/default.conf