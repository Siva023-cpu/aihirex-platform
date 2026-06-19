import pdfplumber
import re

SKILLS = [
    # Programming
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C++",

    # Backend
    "FastAPI",
    "Flask",
    "Django",
    "Node.js",
    "Express",

    # Frontend
    "React",
    "Angular",
    "Vue",

    # Databases
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",

    # DevOps
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Ansible",
    "GitHub Actions",
    "CI/CD",
    "Nginx",
    "Linux",

    # Cloud
    "AWS",
    "Azure",
    "GCP",
    "EC2",
    "S3",
    "EKS",

    # Messaging
    "RabbitMQ",
    "Kafka",

    # Security
    "DevSecOps",
    "OWASP",
    "SonarQube",
    "Trivy",

    # Tools
    "Git",
    "GitLab",
    "Prometheus",
    "Grafana",

    # AI
    "Machine Learning",
    "AI",
    "LLM",
    "OpenAI",
    "TensorFlow",
    "PyTorch"
]

def extract_skills(filepath):
    text = ""

    try:
        with pdfplumber.open(filepath) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
    except Exception:
        return []

    found = []

    for skill in SKILLS:
        pattern = r"\b" + re.escape(skill.lower()) + r"\b"

        if re.search(pattern, text.lower()):
            found.append(skill)

    return found