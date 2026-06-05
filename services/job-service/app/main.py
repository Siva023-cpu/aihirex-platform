from fastapi import FastAPI

from app.api.routes import router

app = FastAPI(
    title="AIHireX Job Service"
)

app.include_router(router)