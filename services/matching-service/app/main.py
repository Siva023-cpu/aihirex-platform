from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(
    title="AIHireX Matching Service"
)

app.include_router(router)