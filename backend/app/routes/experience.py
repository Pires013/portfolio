from fastapi import APIRouter

router = APIRouter()

@router.get("/experience")
def experience():
    return {
        "experience": [
            {
                "id": 1,
                "company": "Instituto Eldorado de Pesquisas",
                "role": "Estágiário de Verão",
                "duration": "Jan 2026 - Mar 2026",
                "about": [
                    "Automatizei ciclos de teste de estresse em placas ESP32 (ligar/desligar e conexão Bluetooth), eliminando execução manual e aumentando a cobertura da validação de hardware.",
                    "Implementei comunicação serial com firmware via Pytest Embedded, capturando estados do dispositivo em tempo real durante os testes.",
                    "Construí uma pipeline de processamento de métricas com Pandas, gerando relatórios técnicos que aceleraram a triagem de defeitos.",
                    "Realizei análise e documentação de logs de falha, contribuindo para a identificação e correção de bugs críticos.",
                    "Trabalhei em ambiente ágil utilizando Jira e versionamento de código com Git/GitHub.",
                    "Tecnologias: Python, Pytest, Pytest Embedded, Pandas, ESP32, Git/GitHub, Jira."
]
            },
        ]
    }
