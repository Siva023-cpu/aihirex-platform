from sqlalchemy.orm import Session
from app.models.job import Job


class JobService:

    @staticmethod
    def create_job(db: Session, data):
        job = Job(**data.model_dump())
        db.add(job)
        db.commit()
        db.refresh(job)
        return job

    @staticmethod
    def get_jobs(db: Session):
        return db.query(Job).all()

    @staticmethod
    def get_job(db: Session, job_id: int):
        return db.query(Job).filter(Job.id == job_id).first()

    @staticmethod
    def update_job(db: Session, job_id: int, data):
        job = db.query(Job).filter(Job.id == job_id).first()

        if not job:
            return None

        update_data = data.model_dump(exclude_unset=True)

        for key, value in update_data.items():
            setattr(job, key, value)

        db.commit()
        db.refresh(job)

        return job

    @staticmethod
    def delete_job(db: Session, job_id: int):
        job = db.query(Job).filter(Job.id == job_id).first()
        if job:
            db.delete(job)
            db.commit()
        return job