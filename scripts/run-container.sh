#!/bin/bash

echo "Starting OpsMate container..."

docker run -d \
  -p 3000:3000 \
  --name opsmate-container \
  opsmate:v1

echo "OpsMate container started."

docker ps
