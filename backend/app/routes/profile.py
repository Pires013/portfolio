from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
def profile():
    return {
        "name": "Matheus Pires",
        "title": "Backend Developer",
        "course": "Ciência da Computação",
        "about": (
            "Estudante de Ciência da Computação apaixonado por tecnologia "
            "e desenvolvimento de software. Tenho foco em desenvolvimento "
            "backend com Python e interesse em criar soluções eficientes "
            "para problemas reais. Estou constantemente buscando aprimorar "
            "minhas habilidades técnicas, aprender novas tecnologias e "
            "enfrentar desafios que contribuam para minha evolução profissional."
        )
    }