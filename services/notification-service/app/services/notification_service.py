class NotificationService:

    @staticmethod
    def send(data):
        return {
            "status": "success",
            "message": "Notification sent successfully",
            "recipient": data.email,
            "subject": data.subject
        }