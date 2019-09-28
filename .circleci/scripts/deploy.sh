#!/bin/bash
set -ex

docker-compose -f docker-compose-deploy.yml up -d
sleep 5
docker-compose ps
#curl http://localhost:8082/api/about
#npm run db && npm run migrate && npm run seed
docker-compose -f docker-compose-deploy.yml exec app bash -c "npm run db && npm run migrate && npm run seed"