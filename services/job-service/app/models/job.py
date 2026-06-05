from sqlalchemy import Column, Integer, String, Text, DateTime, func
from app.db.base import Base


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    company = Column(String(255), nullable=False)
    location = Column(String(255))
    description = Column(Text)
    skills = Column(Text)
    salary = Column(String(100))
    created_at = Column(DateTime, server_default=func.now())