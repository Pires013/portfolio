from fastapi import APIRouter

router = APIRouter()

@router.get("/education")
def education():
    return {
        "education": [
            {
                "id": 1,
                "institution": "Unifaj",
                "degree": "Bacharelado em Ciência da Computação",
                "duration": "2024 - 2027"
            }
        ]
    }