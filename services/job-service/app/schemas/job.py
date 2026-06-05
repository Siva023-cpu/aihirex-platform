from pydantic import BaseModel
from typing import Optional


class JobCreate(BaseModel):
    title: str
    company: str
    location: Optional[str] = None
    description: Optional[str] = None
    skills: Optional[str] = None
    salary: Optional[str] = None


class JobUpdate(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None
    skills: Optional[str] = None
    salary: Optional[str] = None


class JobResponse(JobCreate):
    id: int

    class Config:
        from_attributes = True