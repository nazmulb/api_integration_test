#!/bin/bash
set -ex

docker-compose up -d
sleep 5
sh ./is_healthy.sh