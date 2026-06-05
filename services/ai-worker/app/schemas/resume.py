from pydantic import BaseModel
from typing import List


class ResumeRequest(BaseModel):
    text: str


class AnalyzeResponse(BaseModel):
    skills: List[str]