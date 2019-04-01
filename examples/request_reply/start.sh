#!/usr/bin/env bash

echo 'Starting web-worker example...'

../../svarmctl.js init -c examples
../../svarmctl.js start request_reply

echo 'Example finished.'