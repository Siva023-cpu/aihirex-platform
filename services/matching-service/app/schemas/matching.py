from pydantic import BaseModel
from typing import List


class MatchRequest(BaseModel):
    resume_skills: List[str]
    job_skills: List[str]


class MatchResponse(BaseModel):
    match_score: int
    matched_skills: List[str]
    missing_skills: List[str]