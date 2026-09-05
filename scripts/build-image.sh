#!/bin/bash

echo "Building OpsMate Docker image..."

docker build -t opsmate:v1 .

echo "Docker image built successfully."

docker images | grep opsmate
