#!/usr/bin/env bash

echo 'Starting web-worker example...'

../../bin/forever start ./web/web.js
../../bin/forever start ./worker/worker.js

sleep 2
curl -X GET 'localhost:8080/worker?arg1=SomeArg'
sleep 2
../../bin/forever logs 1
sleep 1
../../bin/forever stopall

echo 'Example finished.'