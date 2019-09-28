#!/bin/bash
set -ex

export AUTH=$(curl -d "email=nazmul.basher@gmail.com&password=123" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:8082/api/auth)

curl http://localhost:8082/api/users -v -H "auth_token: $AUTH" -X GET