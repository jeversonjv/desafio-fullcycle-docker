FROM nginx:1.21.6-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY proxy-reverse-node.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p && touch /var/www/html/index.html