from fastapi import APIRouter

from app.schemas.resume import ResumeRequest
from app.services.extractor import SkillExtractor
import requests
router = APIRouter()


@router.post("/extract")
def extract_skills(data: ResumeRequest):
    return SkillExtractor.extract(data.text)


@router.post("/analyze")
def analyze_resume(data: ResumeRequest):

    extracted = SkillExtractor.extract(data.text)

    payload = {
        "resume_skills": extracted["skills"],
        "job_skills": [
            "python",
            "docker",
            "aws",
            "kubernetes"
        ]
    }

    response = requests.post(
        "http://127.0.0.1:8003/match",
        json=payload
    )

    return {
        "skills": extracted["skills"],
        "matching_result": response.json()
    }