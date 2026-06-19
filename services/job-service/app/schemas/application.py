from pydantic import BaseModel

class ApplicationCreate(BaseModel):
    user_email: str
    job_title: str
    company: str
    match_score: int