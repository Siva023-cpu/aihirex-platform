from fastapi import FastAPI

from app.db.database import Base, engine
from app.api.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AIHireX Auth Service",
    version="1.0.0",
    root_path="/auth"
)

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

@app.get("/")
def root():
    return {"message": "Auth Service Running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}