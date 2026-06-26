from fastapi import APIRouter

router = APIRouter()

@router.get("/skills")
def skills():
    return {
      "hard_skills": [
          {"id": 1, "name": "Python"},
          {"id": 2, "name": "SQL"},
          {"id": 3, "name": "Git"},
      ],
      "frontend": [
          {"id": 4, "name": "React"},
          {"id": 5, "name": "Vue"},
          {"id": 6, "name": "JavaScript"}
      ],
      "backend": [
          {"id": 7, "name": "FastAPI"},
          {"id": 8, "name": "Pandas"},
          {"id": 9, "name": "MongoDB"},
          {"id": 10, "name": "Spring Boot"}
      ]
    }