import useFetch from "../hooks/useFetch";
import "../styles/Skills.css";

const ICON_SLUGS: Record<string, string> = {
  Python: "python",
  SQL: "mysql",
  Git: "git",
  React: "react",
  Vue: "vuedotjs",
  JavaScript: "javascript",
  FastAPI: "fastapi",
  Pandas: "pandas",
  MongoDB: "mongodb",
  "Spring Boot": "springboot",
};

function iconUrl(name: string): string | null {
  const slug = ICON_SLUGS[name];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
}

function SkillBadge({ skill }: { skill: any }) {
  const url = iconUrl(skill.name);
  return (
    <span className="skill-badge">
      {url ? (
        <img
          className="skill-badge__icon"
          src={url}
          alt={skill.name}
          loading="lazy"
        />
      ) : (
        <span className="skill-badge__icon skill-badge__icon--fallback">
          {skill.name.charAt(0)}
        </span>
      )}
      {skill.name}
    </span>
  );
}

function Skills() {
  const data = useFetch(`${import.meta.env.VITE_API_URL}/skills`);

  if (!data) {
    return <p>Carregando...</p>;
  }

  const groups = [
    { title: "Hard Skills", items: data.hard_skills },
    { title: "Frontend", items: data.frontend },
    { title: "Backend", items: data.backend },
  ];

  return (
    <section className="skills">
      {groups.map((group) => (
        <div key={group.title} className="skills__group">
          <h2>{group.title}</h2>
          <div className="skills__list">
            {group.items.map((skill: any) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
