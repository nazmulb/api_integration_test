#!/bin/bash
set -ex

cd ~/app
docker-compose -f docker-compose-deploy.yml up -d
sleep 5
docker-compose -f docker-compose-deploy.yml exec node bash -c "npm run db && npm run migrate && npm run seed"