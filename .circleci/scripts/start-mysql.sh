#!/bin/bash
set -ex

docker run -d -p 3306:3306 --name mysql_server -e MYSQL_ROOT_PASSWORD=123 -v $PWD/mysql:/var/lib/mysql mysql:5.6
sleep 5