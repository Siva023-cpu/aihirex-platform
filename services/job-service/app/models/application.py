from sqlalchemy import Column, Integer, String

from app.db.base import Base

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)

    user_email = Column(String)

    job_title = Column(String)

    company = Column(String)

    match_score = Column(Integer)

    status = Column(String, default="Applied")