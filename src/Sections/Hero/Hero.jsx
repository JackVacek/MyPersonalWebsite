import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/ProfilePicture.svg";
import sun from "../../assets/icons8-sun-filled-static.svg";
import moon from "../../assets/icons8-moon-light.png";
import linkedinLight from "../../assets/icons8-linkedin-filled.svg";
import githubLight from "../../assets/icons8-github-filled.svg";
import twitterxLight from "../../assets/icons8-twitterx-filled.svg";
import instagramLight from "../../assets/icons8-instagram-light.png";
import instagramDark from "../../assets/icons8-instagram-dark.png";
import linkedinDark from "../../assets/icons8-linkedin-hollow.png";
import githubDark from "../../assets/icons8-github-hollow.png";
import twitterxDark from "../../assets/icons8-twitterx-hollow.png";
import resume from "../../assets/Jack_Vacek_ResumeFin_2024.pdf";
import maLight from "../../assets/icons8-hiragana-ma-filled.png";
import maDark from "../../assets/icons8-hiragana-ma-hollow.png";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const japanIcon = theme === "light" ? maLight : maDark;
  const twitterxIcon = theme === "light" ? twitterxLight : twitterxDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;

  const languages = {
    en: {
      first: "Jack",
      last: "Vacek",
      major: "Honors Computer Science Major",
      college: "Texas A&M University",
      description:
        "With a passion for problem solving, algorithmic design, and machine learning.",
      resume: "Resume",
    },
    ja: {
      first: "ジャック",
      last: "ヴァチェック",
      major: "コンピュータサイエンス専攻の優秀学生",
      college: "テキサスA&M大学",
      description: "問題解決やアルゴリズム設計や機械学習に情熱を持っています。",
      resume: "履歴書",
    },
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Jack Vacek"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
        <img
          className={styles.japan}
          src={japanIcon}
          alt="Japanese Icon"
          onClick={toggleLanguage}
        />
      </div>
      <div className={styles.info}>
        <h1>
          {languages[language].first}
          <br />
          {languages[language].last}
        </h1>
        <h2>{languages[language].major}</h2>
        <h3>{languages[language].college}</h3>
        <br />
        <span>
          <a href="https://www.linkedin.com/in/jackvacek/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/JackVacek" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.instagram.com/jackcodingjourney/"
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://x.com/JackCodeJourney" target="_blank">
            <img src={twitterxIcon} alt="X Icon" />
          </a>
        </span>
        <p>{languages[language].description}</p>
        <a href={resume} download>
          <button className="hover">{languages[language].resume}</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
