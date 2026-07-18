from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.models.application import Application

router = APIRouter(
    prefix="/applications",
    tags=["Applications"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def get_applications(
    db: Session = Depends(get_db)
):
    return db.query(Application).all()