from node:18-alpine as builder

WORKDIR /react-app

copy . .

RUN npm install
RUN npm run build


from ngnix:1.25.1

copy --from=builder /react-app/dist/ /usr/share/ngnix/html/

copy --from=builder /react-app/ngnix.config /etc/nginx/conf.d/default.conf