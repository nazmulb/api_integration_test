FROM node:10.15.0
RUN mkdir -p /var/www/api_integration_test
ADD . /var/www/api_integration_test
WORKDIR /var/www/api_integration_test
RUN npm install
CMD npm start
EXPOSE 8082