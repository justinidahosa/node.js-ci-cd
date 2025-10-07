# Node.js CI/CD

This project demonstrates how to **containerize a Node.js application** and **automate deployment** to an **AWS EC2 instance** using **GitHub Actions**.  
It also includes **secrets management**, **Terraform provisioning**, and **Docker Hub integration**.

---

## Project Overview

This project covers:
- Creating a **Node.js service** with public and authenticated routes.
- **Dockerizing** the application for portability and scalability.
- Using **Terraform** to provision AWS infrastructure (VPC, Security Group, EC2).
- Automating **CI/CD deployment** via GitHub Actions.
- Managing **secrets securely** with GitHub Secrets.

---

## Application Features

- `/` → Returns **"Hello, world!"**
- `/secret` → Protected by **Basic Authentication**:
  - Prompts for valid `USERNAME` and `PASSWORD`
  - If correct → shows **SECRET_MESSAGE**
  - If incorrect → returns an error

---

## Tech Stack

- **Node.js** – Backend service  
- **Express.js** – Web framework  
- **Docker** – Containerization  
- **Terraform** – Infrastructure as Code  
- **AWS EC2** – Hosting environment  
- **GitHub Actions** – CI/CD pipeline  
- **Docker Hub** – Container registry  
- **GitHub Secrets** – Secure credentials storage  

---

## Environment Variables

Create a `.env` file in your project root:


SECRET_MESSAGE=This is the secret!
USERNAME=admin
PASSWORD=1234

## Docker Commands

# Build image
docker build -t node-secret .

# Run container locally
docker run -d -p 3000:3000 --env-file .env node-secret


## Local Testing

http://localhost:3000/ → “Hello, world!”

http://localhost:3000/secret → Prompts for username/password


## Terraform

terraform init
terraform plan
terraform apply


## GitHub Secrets

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
EC2_HOST
EC2_USER
EC2_PRIVATE_KEY
SECRET_MESSAGE
USERNAME
PASSWORD


