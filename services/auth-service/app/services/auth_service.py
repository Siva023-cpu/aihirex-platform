from fastapi import Depends, HTTPException
from jose import jwt, JWTError
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.models.user import User
from app.core.security import oauth2_scheme

SECRET_KEY = "supersecretkey"
ALGORITHM = "HS256"

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials"
    )

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email: str = payload.get("sub")

        if email is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    user = db.query(User).filter(
        User.email == email
    ).first()

    if user is None:
        raise credentials_exception

    return user