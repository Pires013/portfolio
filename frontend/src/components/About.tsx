import useFetch from "../hooks/useFetch";
import "../styles/About.css";

function About() {

  const profile = useFetch(`${import.meta.env.VITE_API_URL}/profile`);
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