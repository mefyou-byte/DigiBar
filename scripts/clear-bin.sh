#!/usr/bin/env bash
source "$(dirname $0)/environment.sh"

curl -X PUT \
  https://api.myjson.com/bins/$1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '[]'
