# OpsMate Docker Deployment Project

## Project Overview

OpsMate is a DevOps mini-project demonstrating the containerization and deployment of a Node.js application using Docker and AWS.

The project covers Docker installation, Dockerfile creation, image and container management, Docker Compose with MySQL, Amazon ECR, Amazon ECS, and AWS Fargate deployment.

## Technologies Used

- AWS EC2
- Docker
- Docker Compose
- Node.js
- Express.js
- MySQL
- Amazon ECR
- Amazon ECS
- AWS Fargate
- AWS CloudWatch
- Git & GitHub
- Ubuntu Linux

## Project Architecture

```text
Developer
    |
    v
Dockerfile
    |
    v
Docker Image
    |
    v
Amazon ECR
    |
    v
ECS Task Definition
    |
    v
ECS Service
    |
    v
AWS Fargate
    |
    v
OpsMate Application
```

## Project Structure

```text
OpsMate-Docker-Project/
├── app/
│   ├── package.json
│   └── server.js
├── config/
│   └── environment.example
├── scripts/
│   ├── install-docker.sh
│   ├── build-image.sh
│   ├── run-container.sh
│   └── cleanup.sh
├── screenshots/
├── documentation/
├── Dockerfile
├── compose.yaml
├── .dockerignore
├── .gitignore
├── docker-deployment-report.txt
└── README.md
```

## Docker Image Build

```bash
docker build -t opsmate:v1 .
```

## Run the Container

```bash
docker run -d -p 3000:3000 --name opsmate-container opsmate:v1
```

Access the application on:

```text
http://<EC2-PUBLIC-IP>:3000
```

## Docker Compose Deployment

Start the application and MySQL database:

```bash
docker compose up -d
```

Check the services:

```bash
docker compose ps
```

Stop the deployment:

```bash
docker compose down
```

## Amazon ECR

The OpsMate Docker images were stored in a private Amazon ECR repository.

Two application versions were deployed:

- `opsmate:v1`
- `opsmate:v2`

## Amazon ECS and AWS Fargate

The application was deployed using:

- ECS Cluster: `opsmate_cluster`
- Task Definition: `opsmate-task`
- ECS Service: `opsmate-service`
- Launch Type: AWS Fargate
- Container Port: `3000`

The application was successfully updated from Version 1 to Version 2 by pushing a new image to ECR and creating a new ECS task definition revision.

## Screenshots

Project screenshots are available in the `screenshots/` directory and include evidence of:

- Docker installation
- Docker daemon
- Hello World container
- Docker image
- Docker container
- Running application
- Docker Compose
- Database connectivity
- Amazon ECR
- Amazon ECS
- AWS Fargate
- Version 2 deployment

## Security

- AWS credentials are not stored in this repository.
- Sensitive environment files are excluded using `.gitignore`.
- Example configuration uses placeholder credentials.
- IAM permissions should follow the principle of least privilege.

## Conclusion

This project demonstrates an end-to-end container deployment workflow, starting with Docker containerization and progressing through multi-container deployment with Docker Compose, image storage in Amazon ECR, and serverless container deployment using Amazon ECS and AWS Fargate.
