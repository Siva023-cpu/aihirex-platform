from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api.routes import router
from .api.application_routes import router as application_router

from .db.session import engine, SessionLocal
from .db.base import Base

# Import models so SQLAlchemy knows about them
from .models.job import Job
from .models.application import Application

Base.metadata.create_all(bind=engine)

db = SessionLocal()

if db.query(Job).count() == 0:
    sample_jobs = [
        Job(
            title="DevOps Engineer",
            company="TechCorp",
            location="Remote",
            description="Docker, Kubernetes, AWS, CI/CD",
            skills="docker,kubernetes,aws,ci/cd",
            salary="12 LPA"
        ),
        Job(
            title="Cloud Engineer",
            company="CloudX",
            location="Hyderabad",
            description="AWS, Terraform, Linux",
            skills="aws,terraform,linux",
            salary="10 LPA"
        ),
        Job(
            title="Backend Developer",
            company="InnovateTech",
            location="Bangalore",
            description="Python, FastAPI, PostgreSQL",
            skills="python,fastapi,postgresql",
            salary="8 LPA"
        ),
        Job(
            title="AI Engineer",
            company="AI Labs",
            location="Remote",
            description="Python, ML, OpenAI",
            skills="python,machine learning,openai",
            salary="15 LPA"
        )
    ]

    db.add_all(sample_jobs)
    db.commit()

db.close()

app = FastAPI(
    title="AIHireX Job Service"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(application_router)