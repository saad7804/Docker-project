#!/bin/bash

echo "Updating packages..."
sudo apt update

echo "Installing Docker..."
sudo apt install docker.io -y

echo "Starting Docker..."
sudo systemctl enable --now docker

echo "Docker version:"
docker --version

echo "Docker installation completed."
