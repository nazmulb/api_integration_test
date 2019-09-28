#!/bin/bash
set -ex

sh ./.circleci/scripts/start-mysql.sh
docker pull nazmulb/api_integration_test
docker run -d -p 8082:8082 --name node_server --link mysql_server:mysql -e DEV_DATABASE_URL: "mysql://root:123@mysql:3306/apimicro_dev" nazmulb/api_integration_test

#docker-compose -f docker-compose-deploy.yml up -d
sleep 5
docker ps
curl http://localhost:8082/api/about
#npm run db && npm run migrate && npm run seed
#docker-compose -f docker-compose-deploy.yml exec app bash -c "npm run db && npm run migrate && npm run seed"