import os

from app.db.database import Base, engine
from app.models.resume import Resume

from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.models.resume import Resume
from app.db.database import Base, engine

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Resume Service")
from app.utils.parser import extract_skills
# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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

    skills = extract_skills(filepath)

    return {
        "id": resume.id,
        "filename": resume.filename,
        "status": "uploaded"
    }