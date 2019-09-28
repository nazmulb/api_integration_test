#!/bin/bash
set -ex

docker-compose -f docker-compose-deploy.yml up -d
sleep 5
docker-compose ps
#curl http://localhost:8082/api/about
#npm run db && npm run migrate && npm run seed
DEV_DATABASE_URL="mysql://root:123@localhost:3306/apimicro_dev" npm run db
#docker-compose -f docker-compose-deploy.yml exec app bash -c "npm run db && npm run migrate && npm run seed"