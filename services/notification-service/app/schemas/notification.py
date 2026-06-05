from pydantic import BaseModel


class NotificationRequest(BaseModel):
    email: str
    subject: str
    message: str