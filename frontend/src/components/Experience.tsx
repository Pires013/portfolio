import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import "../styles/Experience.css";
import Eldorado from "../pages/image.png";

function Experience() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const data = useFetch("http://127.0.0.1:8000/experience");

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="experience">
      <h2>Minhas Experiências</h2>

      {data.experience.map((job: any) => (
        <div
          key={job.id}
          className="experience__item"
          onClick={() =>
            setSelectedJob(selectedJob === job.id ? null : job.id)
          }
        >
          <div className="experience__header">
            <div className="experience__company">
              <img
                src={Eldorado}
                alt={job.company}
                className="experience__logo"
              />

              <div className="experience__content">
                <h3>{job.company}</h3>
                <p>{job.role}</p>

                <div
                  className={`experience__about ${
                    selectedJob === job.id ? "open" : ""
                  }`}
                >
                  <ul>
                    {job.about.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="experience__right">
              <span className="experience__date">
                {job.duration}
              </span>

              <span className="experience__icon">
                {selectedJob === job.id ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;