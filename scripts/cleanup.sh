#!/bin/bash

echo "Cleaning unused Docker resources..."

docker container prune -f
docker image prune -f
docker builder prune -f

echo "Docker cleanup completed."

docker system df
