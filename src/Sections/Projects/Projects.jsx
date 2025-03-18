import styles from "./ProjectsStyles.module.css";
import AI4ALL from "../../assets/AI4ALL.png";
import AmericanGO from "../../assets/americanGo.png";
import styndr from "../../assets/styndr.png";
import infoStealerPic from "../../assets/infoStealer.png";
import infoStealerInfo from "../../assets/infoStealer.pdf";
import medAI from "../../assets/MedAI.png";
//import medAIInfo from "../../assets/MedAI.pdf";
import ProjectCard from "../../common/ProjectCard";
import { useTheme } from "../../common/ThemeContext.jsx";

function Projects() {
  const { language } = useTheme();
  const languages = {
    en: {
      title: "Projects",
      AmericanGO: "3D Flight Visualization Platform",
      AmericanGODescription: "Visualize and plan trips",
      Styndr: "Personal Style Finder",
      StyndrDescription: "Recommendation system for clothing",
      AI4ALL: "Computer Science Salary Predictor",
      AI4ALLDescription: "Predict Indian Computer Science Salaries",
      infoStealer: "Reverse Engineered Info Stealer",
      infoStealerDescription: "Report on how an Info Stealer behaves",
      medAI: "Optimizing Medical Classification Model",
      medAIDescription: "Report on how changing parameters optimizes AI model",
    },
    ja: {
      title: "プロジェクト",
      AmericanGO: "3D旅客飛行可視化プラットフォーム",
      AmericanGODescription: "旅行を可視化して計画する",
      Styndr: "パーソナルスタイルを見つける",
      StyndrDescription: "服の推薦システム",
      AI4ALL: "コンピュータサイエンス給与予測",
      AI4ALLDescription: "インドのコンピュータサイエンスの給与を予測する",
      infoStealer: "リバースエンジニアリングされた情報窃盗ツール",
      infoStealerDescription: "情報窃盗ツールの動作に関する報告",
      medAI: "医療分類モデルの最適化",
      medAIDescription:
        "パラメータを変更することによるAIモデルの最適化に関する報告書",
    },
  };
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{languages[language].title}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AmericanGO}
          link="https://devpost.com/software/travel-visualizer"
          h3={languages[language].AmericanGO}
          p={languages[language].AmericanGODescription}
        />
        <ProjectCard
          src={styndr}
          link="https://styndr.com"
          h3={languages[language].Styndr}
          p={languages[language].StyndrDescription}
        />
        <ProjectCard
          src={AI4ALL}
          link="https://github.com/JackVacek/AI4ALL"
          h3={languages[language].AI4ALL}
          p={languages[language].AI4ALLDescription}
        />
        <ProjectCard
          src={infoStealerPic}
          link={infoStealerInfo}
          h3={languages[language].infoStealer}
          p={languages[language].infoStealerDescription}
        />
        <ProjectCard
          src={medAI}
          link={""}
          h3={languages[language].medAI}
          p={languages[language].medAIDescription}
        />
      </div>
    </section>
  );
}

export default Projects;
