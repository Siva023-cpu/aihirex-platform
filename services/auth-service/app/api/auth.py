from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.user import UserCreate, UserLogin
from app.models.user import User
from app.db.dependencies import get_db
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)
from app.services.auth_service import get_current_user
router = APIRouter()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully"}

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):

    print("LOGIN EMAIL:", form_data.username)

    existing_user = db.query(User).filter(
        User.email == form_data.username
    ).first()

    print("USER FOUND:", existing_user)

    if existing_user:
        print(
            "PASSWORD CHECK:",
            verify_password(
                form_data.password,
                existing_user.hashed_password
            )
        )

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not verify_password(
        form_data.password,
        existing_user.hashed_password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    access_token = create_access_token(
        {"sub": existing_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@router.get("/profile")
def profile(current_user: User = Depends(get_current_user)):

    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email
    }


