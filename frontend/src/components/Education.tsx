import useFetch from "../hooks/useFetch";
import "../styles/Education.css";

function Education() {

    const data = useFetch("http://127.0.0.1:8000/education");

    if (!data) {
        return <p>Carregando...</p>;
    }

    return (
        <section className="education">
            <h2>Minha Educação</h2>

            {data.education.map((item: any) => (
                <div key={item.id}>
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                    <span>{item.duration}</span>
                </div>
            ))}
        </section>
    );
}

export default Education;