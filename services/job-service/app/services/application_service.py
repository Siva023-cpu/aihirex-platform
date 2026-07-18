from sqlalchemy.orm import Session

from app.models.application import Application


def create_application(db: Session, application):
    db_application = Application(
        user_email=application.user_email,
        job_title=application.job_title,
        company=application.company,
        match_score=application.match_score,
        status="Applied"
    )

    db.add(db_application)
    db.commit()
    db.refresh(db_application)

    return db_application


def get_applications(db: Session):
    return db.query(Application).all()


def update_status(
    db: Session,
    application_id: int,
    status: str
):
    application = (
        db.query(Application)
        .filter(Application.id == application_id)
        .first()
    )

    if application:
        application.status = status
        db.commit()
        db.refresh(application)

    return application