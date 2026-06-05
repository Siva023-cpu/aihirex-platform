from fastapi import APIRouter
from app.schemas.notification import NotificationRequest
from app.services.notification_service import NotificationService

router = APIRouter()


@router.post("/notify")
def send_notification(data: NotificationRequest):
    return NotificationService.send(data)