import os

from app.db.database import Base, engine
from app.models.resume import Resume

from fastapi import FastAPI, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.models.resume import Resume
from app.db.database import Base, engine

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Resume Service")

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/")
def home():
    return {"message": "Resume Service Running"}

@app.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    filepath = os.path.join(UPLOAD_DIR, file.filename)

    with open(filepath, "wb") as buffer:
        buffer.write(await file.read())

    resume = Resume(
        user_id=1,   # temporary until JWT integration
        filename=file.filename,
        filepath=filepath
    )

    db.add(resume)
    db.commit()
    db.refresh(resume)

    return {
        "id": resume.id,
        "filename": resume.filename,
        "status": "uploaded"
    }