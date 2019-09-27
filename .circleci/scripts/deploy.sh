#!/bin/bash
set -ex

docker pull nazmulb/api_integration_test:latest
docker-compose up -d
sleep 5
docker-compose exec node bash -c "npm run db && npm run migrate && npm run seed"