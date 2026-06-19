from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.schemas.job import JobCreate, JobUpdate
from app.services.job_service import JobService

from app.models.application import Application
from app.schemas.application import ApplicationCreate

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/jobs")
def create_job(job: JobCreate, db: Session = Depends(get_db)):
    return JobService.create_job(db, job)


@router.get("/jobs")
def get_jobs(db: Session = Depends(get_db)):
    return JobService.get_jobs(db)


@router.get("/jobs/{job_id}")
def get_job(job_id: int, db: Session = Depends(get_db)):
    return JobService.get_job(db, job_id)

@router.put("/jobs/{job_id}")
def update_job(
    job_id: int,
    job: JobUpdate,
    db: Session = Depends(get_db)
):
    return JobService.update_job(db, job_id, job)

@router.delete("/jobs/{job_id}")
def delete_job(job_id: int, db: Session = Depends(get_db)):
    return JobService.delete_job(db, job_id)

@router.post("/apply")
def apply_job(data: ApplicationCreate):

    db = SessionLocal()

    application = Application(
        user_email=data.user_email,
        job_title=data.job_title,
        company=data.company,
        match_score=data.match_score
    )

    db.add(application)
    db.commit()

    return {
        "message": "Application Submitted"
    }