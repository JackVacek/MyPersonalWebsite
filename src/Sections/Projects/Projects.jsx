import styles from "./ProjectsStyles.module.css";
import AI4ALL from "../../assets/AI4ALL.png";
import ProjectCard from "../../common/ProjectCard";
import { useTheme } from "../../common/ThemeContext.jsx";

function Projects() {
  const { language } = useTheme();
  const languages = {
    en: {
      title: "Projects",
      AI4ALL: "Computer Science Salary Predictor",
      AI4ALLDescription: "Predict Indian Computer Science Salaries",
    },
    ja: {
      title: "プロジェクト",
      AI4ALL: "コンピュータサイエンス給与予測",
      AI4ALLDescription: "インドのコンピュータサイエンスの給与を予測する",
    },
  };
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{languages[language].title}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AI4ALL}
          link="https://github.com/JackVacek/AI4ALL"
          h3={languages[language].AI4ALL}
          p={languages[language].AI4ALLDescription}
        />
      </div>
    </section>
  );
}

export default Projects;
