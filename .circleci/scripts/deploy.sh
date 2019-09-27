#!/bin/bash
set -ex

docker-compose up -d
sleep 5
cd ./app
docker-compose exec node bash -c "npm run db && npm run migrate && npm run seed"