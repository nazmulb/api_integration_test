#!/bin/bash
set -ex

docker-compose up -d
sleep 5
./is_healthy.sh