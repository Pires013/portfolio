from fastapi import FastAPI

from app.routes.profile import router as profile_router
from app.routes.skills import router as skills_router
from app.routes.projects import router as projects_router
from app.routes.experience import router as experience_router
from app.routes.education import router as education_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile_router)
app.include_router(skills_router)
app.include_router(projects_router)
app.include_router(experience_router)
app.include_router(education_router)
