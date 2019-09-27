#!/bin/bash
set -e

docker-compose pull nazmulb/api_integration_test
docker-compose up -d
sleep 5
docker-compose exec node bash -c "npm run db && npm run migrate && npm run seed"