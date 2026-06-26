import useFetch from "../hooks/useFetch";
import "../styles/About.css";

function About() {

  const profile = useFetch("http://127.0.0.1:8000/profile");
  console.log(profile);

  if (!profile) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="about">
        <h2>Sobre Mim</h2>
        <p>{profile.about}</p>
    </section>
  );
}

export default About;