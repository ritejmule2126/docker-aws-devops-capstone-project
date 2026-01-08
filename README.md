# 🚀 DevOps Capstone Project: Dockerized Full-Stack Application on AWS

## 📌 Capstone Intent
This capstone project simulates a **real-world DevOps scenario** where a full-stack application is containerized, deployed on cloud infrastructure (AWS), and made **reachable, observable, and manageable**.

The project bridges **Docker, cloud infrastructure, networking, monitoring, and logging**, reflecting practical DevOps responsibilities.

---

## 🎯 Project Objectives
- Containerize a **full-stack application** (Frontend, Backend, Database)
- Write **Dockerfiles** for each component
- Use **Docker Compose** for service orchestration and networking
- Deploy the application on **AWS EC2**
- Configure **AWS security groups and networking**
- Implement **health checks and logging**
- Ensure the application survives container restarts

---

## 🛠️ Technology Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React.js |
| Backend | Node.js (Express) |
| Database | MySQL 8 |
| Containers | Docker |
| Orchestration | Docker Compose |
| Cloud | AWS EC2 (Ubuntu) |
| Monitoring | Docker Health Checks |
| Logging | Docker Logs |
| Version Control | Git & GitHub |

---

## 🧱 Application Architecture

User  
↓  
React Frontend (Container)  
↓  
Node.js API (Container)  
↓  
MySQL Database (Container)  

	
All services communicate over a **Docker bridge network** and run on **AWS EC2**.

---

## 📂 Project Structure

docker-aws-devops-capstone-project/  
│  
├── backend/  
│ ├── Dockerfile  
│ ├── package.json  
│ └── server.js  
│  
├── frontend/  
│ ├── Dockerfile  
│ ├── package.json  
│ └── src/App.js  
│  
├── docker-compose.yml  
└── README.md  


📸 **Screenshot Required**
- Folder structure from terminal

---

## 🧩 Detailed Step-by-Step Implementation

### 1️⃣ Prepare Application Source Code
- Verified frontend-backend API communication
- Ensured database queries work correctly
- Added proper environment variable support

📸 Screenshot:
- Local application running (optional)

---

### 2️⃣ Create Dockerfiles

- **Frontend Dockerfile**
  - Builds React app
  - Serves using Node

- **Backend Dockerfile**
  - Runs Express server
  - Exposes API port

- **Database**
  - Uses official MySQL image
  - Persistent volume configured

📸 Screenshot:
- Dockerfiles opened in editor

---

### 3️⃣ Docker Compose Configuration
Docker Compose is used to:
- Define frontend, backend, and database services
- Create internal networking
- Manage volumes for database persistence
- Configure port mappings
  
Command used:  
```bash  
docker-compose up -d --build  
  
📸 Screenshots:  
  
docker-compose up -d --build  
  
docker ps showing all containers running  
  
4️⃣ AWS EC2 Provisioning   
  
Launched Ubuntu EC2 instance  
  
Installed Docker & Docker Compose  
  
Configured security groups  
  
Inbound Rules  
  
Port	Purpose  
3001	Frontend  
3000	Backend API  
22	SSH  
  
📸 Screenshots:  
  
EC2 instance running  
  
Security group inbound rules  
  
5️⃣ Application Deployment on AWS   
  
Cloned GitHub repository on EC2  
  
Built and ran containers using Docker Compose  
  
Verified services are running  
  
📸 Screenshots:  
  
docker ps on EC2  
  
Application running via public IP  
  
6️⃣ Application Verification   
  
Accessed frontend using:  
  
http://3.110.40.231:3001  
  
  
Backend API tested using:  
  
curl http://3.110.40.231/:3000/user   
  
  
📸 Screenshots:  
  
Browser UI  
  
API response  
  
7️⃣ Health Checks & Monitoring     
  
Implemented /health endpoint in backend  
  
Docker monitors container health status  
  
Example response:  
  
{  
  "status": "UP",  
  "timestamp": "2026-01-08T10:30:00Z"  
}  
  
  
Commands used:  
  
curl http://3.110.40.231:3000/health  
docker inspect --format='{{.State.Health.Status}}' <container-id>  


📸 Screenshots:  
  
Health endpoint output  
  
Docker health status  
  
8️⃣ Logging & Debugging  
  
Used Docker logs to debug backend and database  
  
Ensured logs provide meaningful error messages  
  
Command:  
  
docker logs <api-container>  
  
  
📸 Screenshot:  
  
Backend logs showing requests and DB inserts 
  
✅ Real-World DevOps Expectations Met  
  
✔ Application survives container restarts  
✔ Database uses persistent volumes  
✔ Logs assist in debugging  
✔ Configuration is clean and documented  
✔ Cloud deployment completed successfully  
  
📦 Version Control & Professional Sharing  
  
GitHub repository with full source code  
  
Clear commit history  
  
Detailed README documentation  
  
📸 Screenshots:  
  
GitHub repository page  
  
Commit history  
  
README preview on GitHub  
  
🏁 Project Status  
  
✔ Completed Successfully  
  
This project demonstrates end-to-end DevOps skills, including containerization, orchestration, cloud deployment, monitoring, and debugging.  
  
👩‍💻 Author  
  
Ritej Mule  
DevOps Capstone Project  
Docker • AWS • Node.js • React • MySQL  
