import styles from "./FooterStyles.module.css";
import { useTheme } from "../../common/ThemeContext.jsx";

function Footer() {
  const { language } = useTheme();

  const languages = {
    en: {
      copy: "2025 Jack Vacek.",
    },
    ja: {
      copy: "2025 ジャック・ヴァチェック。",
    },
  };

  return (
    <section id="footer" className={styles.container}>
      <p>{languages[language].copy}</p>
    </section>
  );
}

export default Footer;
