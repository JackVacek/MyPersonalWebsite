import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/icons8-checkmark.svg";
import python from "../../assets/icons8-python-48.png";
import java from "../../assets/icons8-java-48.png";
import javaScript from "../../assets/icons8-javascript-48.png";
import typeScript from "../../assets/icons8-typescript-48.png";
import cpp from "../../assets/icons8-c++-48.png";
import c from "../../assets/icons8-c-programming-48.png";
import css from "../../assets/icons8-css-logo-48.png";
import html from "../../assets/icons8-html-5-48.png";
import react from "../../assets/icons8-react-40.png";
import express from "../../assets/icons8-node-js-48.png";
import javaFX from "../../assets/icons8-scene-builder-64.png";
import chakra from "../../assets/icons8-chakra-ui-48.png";
import restAPI from "../../assets/icons8-rest-api-48.png";
import pytorch from "../../assets/icons8-pytorch-48.png";
import pandas from "../../assets/icons8-pandas-48.png";
import numpy from "../../assets/icons8-numpy-48.png";
import scikit from "../../assets/scikit-learn.svg";
import matplotlib from "../../assets/64px-Matplotlib_icon.svg.png";
import seaborn from "../../assets/logo-mark-lightbg.svg";
import ec2 from "../../assets/EC2-instance-contents_32.svg";
import lightsail from "../../assets/lightsail.png";
import azure from "../../assets/icons8-azure-48.png";
import docker from "../../assets/icons8-docker-48.png";
import postgresql from "../../assets/icons8-postgresql-48.png";
import git from "../../assets/icons8-git-48.png";
import jira from "../../assets/icons8-jira-48.png";
import jupyter from "../../assets/icons8-jupyter-48.png";
import colab from "../../assets/colab.png";
import uml from "../../assets/uml.png";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext.jsx";

function Skills() {
  const { language } = useTheme();

  const languages = {
    en: {
      title: "Skills",
    },
    ja: {
      title: "スキル",
    },
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">{languages[language].title}</h1>
      <div className={styles.skillList}>
        <SkillList src={python} skill="Python" />
        <SkillList src={java} skill="Java" />
        <SkillList src={javaScript} skill="JavaScript" />
        <SkillList src={typeScript} skill="TypeScript" />
        <SkillList src={c} skill="C" />
        <SkillList src={cpp} skill="C++" />
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={express} skill="Node" />
        <SkillList src={javaFX} skill="JavaFX" />
        <SkillList src={chakra} skill="ChakraUI" />
        <SkillList src={restAPI} skill="RESTful API" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={pytorch} skill="PyTorch" />
        <SkillList src={pandas} skill="Pandas" />
        <SkillList src={numpy} skill="NumPy" />
        <SkillList src={scikit} skill="Scikit-Learn" />
        <SkillList src={matplotlib} skill="Matplotlib" />
        <SkillList src={seaborn} skill="Seaborn" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={ec2} skill="EC2" />
        <SkillList src={lightsail} skill="LightSail" />
        <SkillList src={docker} skill="Docker" />
        <SkillList src={azure} skill="Azure" />
        <SkillList src={postgresql} skill="PostgreSQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git" />
        <SkillList src={jira} skill="Jira" />
        <SkillList src={jupyter} skill="Jupyter" />
        <SkillList src={colab} skill="Google Colab" />
        <SkillList src={uml} skill="UML" />
      </div>
    </section>
  );
}

export default Skills;
