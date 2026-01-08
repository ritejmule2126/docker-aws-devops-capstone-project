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


<img width="752" height="115" alt="Folder_structure" src="https://github.com/user-attachments/assets/cefd28b4-5e88-45b2-9736-f3c18d2bc145" />


---

## 🧩 Detailed Step-by-Step Implementation

### 1️⃣ Prepare Application Source Code
- Verified frontend-backend API communication
- Ensured database queries work correctly
- Added proper environment variable support


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
  
📸 Screenshots:  
<img width="1297" height="88" alt="docker_ps" src="https://github.com/user-attachments/assets/d009f04d-c04d-4711-80c4-50b158af213f" />

  
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
  
<img width="1346" height="507" alt="EC2_Instance _running" src="https://github.com/user-attachments/assets/7366c8cf-1068-47b2-86cc-979546c42e3e" />
EC2 instance running

<img width="1340" height="493" alt="inbound_rules" src="https://github.com/user-attachments/assets/554231fe-17cd-496c-99c6-54662f923262" />
Security group inbound rules  
  
5️⃣ Application Deployment on AWS   
  
Cloned GitHub repository on EC2  
  
Built and ran containers using Docker Compose  
  
Verified services are running  
  
  
6️⃣ Application Verification   
  
Accessed frontend using:  
  
http://3.110.40.231:3001  
  
  
Backend API tested using:  
  
curl http://3.110.40.231/:3000/user   
  
  
📸 Screenshots:  
  
<img width="1334" height="602" alt="frontend_running" src="https://github.com/user-attachments/assets/e67d31fe-bfbe-4432-9625-8cb9b2bff428" />

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
  
<img width="334" height="134" alt="health_check" src="https://github.com/user-attachments/assets/fbaeb26d-32df-4382-9a47-59e009dae436" />

8️⃣ Logging & Debugging  
  
Used Docker logs to debug backend and database  
  
Ensured logs provide meaningful error messages  
  
Command:  
  
docker logs <api-container>  
  
  
📸 Screenshot:  

<img width="1076" height="145" alt="logs_monitoring" src="https://github.com/user-attachments/assets/9dd4e465-8441-4599-9224-842255795a08" />
  
✅ Real-World DevOps Expectations Met  
  
✔ Application survives container restarts  
✔ Database uses persistent volumes  
✔ Logs assist in debugging  
✔ Configuration is clean and documented  
✔ Cloud deployment completed successfully   
  
🏁 Project Status  
  
✔ Completed Successfully  
  
This project demonstrates end-to-end DevOps skills, including containerization, orchestration, cloud deployment, monitoring, and debugging.  
  
👩‍💻 Author  
  
Ritej Mule  
DevOps Capstone Project  
Docker • AWS • Node.js • React • MySQL  
