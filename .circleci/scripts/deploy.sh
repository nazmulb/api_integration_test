#!/bin/bash
set -ex

pwd
docker-compose -f docker-compose-deploy.yml up -d
sleep 5
pwd
#docker-compose ps
#curl http://localhost:8082/api/about
npm run db && npm run migrate && npm run seed
#docker-compose -f docker-compose-deploy.yml exec node bash -c "npm run db && npm run migrate && npm run seed"