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
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterxIcon = theme === "light" ? twitterxLight : twitterxDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;

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
      </div>
      <div className={styles.info}>
        <h1>
          Jack
          <br />
          Vacek
        </h1>
        <h2>Honors Computer Science Major</h2>
        <h3>Texas A&M University</h3>
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
        <p>
          With a passion for problem solving, algorithmic design, and machine
          learning.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
