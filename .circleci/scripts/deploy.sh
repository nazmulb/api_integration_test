#!/bin/bash
set -ex

docker-compose -f docker-compose-deploy.yml up -d
sleep 5
docker-compose ps
curl http://localhost:8082/api/about
docker-compose -f docker-compose-deploy.yml exec node bash -c "DEV_DATABASE_URL: 'mysql://root:123@app_mysql_1:3306/apimicro_dev' npm run db && npm run migrate && npm run seed"