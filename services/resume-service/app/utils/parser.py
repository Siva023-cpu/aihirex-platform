import pdfplumber

SKILLS = [
    "Python",
    "Java",
    "Docker",
    "Kubernetes",
    "AWS",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "React",
    "JavaScript",
    "Linux",
    "Git",
    "Jenkins",
    "Terraform",
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
        if skill.lower() in text.lower():
            found.append(skill)

    return found