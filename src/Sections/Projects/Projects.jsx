import styles from "./ProjectsStyles.module.css";
import AI4ALL from "../../assets/AI4ALL.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AI4ALL}
          link="https://github.com/JackVacek/AI4ALL"
          h3="Computer Science Salary Predictor"
          p="Predict Indian Computer Science Salaries"
        />
      </div>
    </section>
  );
}

export default Projects;
