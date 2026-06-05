from fastapi import APIRouter

from app.schemas.matching import (
    MatchRequest
)

from app.services.matching_service import (
    MatchingService
)

router = APIRouter()


@router.post("/match")
def match_skills(data: MatchRequest):
    return MatchingService.calculate_match(
        data.resume_skills,
        data.job_skills
    )