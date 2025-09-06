# CI/CD Pipeline Infrastructure - Ansible Project

## Project Overview
Complete CI/CD pipeline infrastructure using Jenkins, Nexus, SonarQube with Ansible automation. Integrates with GitHub for source control and demonstrates modern DevOps practices.

## Architecture
2-System Setup:
- **rocky-cicd** (Rocky Linux 9) - Jenkins + Nexus + SonarQube
- **app-server** (Ubuntu 22.04) - Nginx proxy + deployment target

## Quick Start

### Prerequisites
```bash
# Install Ansible
sudo apt update && sudo apt install ansible -y

# Clone repository
git clone <your-repo-url>
cd ansible-pipeline-jenkins
```

### Deploy Infrastructure
```bash
# Deploy all services
make deploy

# Deploy individual services
make jenkins
make nexus
make sonar
```

### Access Services
- Jenkins: http://jenkins.local (admin/check initial password)
- Nexus: http://nexus.local (admin/admin123)
- SonarQube: http://sonar.local (admin/admin)

## Pipeline Flow
GitHub Push → Jenkins → SonarQube → Build → Nexus → Deploy → Verify

## Project Structure
```
cicd-pipeline-ansible/
├── inventories/dev/hosts.yml    # VM inventory
├── roles/                       # Ansible roles
│   ├── common/                  # Base system setup
│   ├── jenkins/                 # CI/CD orchestrator
│   ├── nexus/                   # Artifact repository
│   ├── sonarqube/              # Code quality
│   ├── nginx/                   # Reverse proxy
│   └── docker/                  # Container runtime
├── playbooks/site.yml          # Main deployment
├── sample-app/                 # Demo Node.js API
├── pipeline-configs/           # Jenkins & SonarQube configs
└── Makefile                    # Automation commands
```

## Success Criteria
- Push to GitHub triggers Jenkins build  
- SonarQube quality gate passes/fails appropriately  
- Artifacts stored in Nexus with versioning  
- Successful builds deploy automatically  
- Pipeline as Code (Jenkinsfile)  
- Secrets management with Ansible Vault  
- Professional documentation  

## Security Features
- Ansible Vault for sensitive data
- Firewall configuration
- SSL/TLS ready (certificates needed)
- Service isolation

## Documentation
This project demonstrates:
- End-to-end DevOps pipeline
- Infrastructure as Code
- Automated testing and deployment
- Quality gates and monitoring
- Professional DevOps practices
