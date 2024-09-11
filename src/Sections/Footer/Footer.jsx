import styles from "./FooterStyles.module.css";
import { useTheme } from "../../common/ThemeContext.jsx";

function Footer() {
  const { language } = useTheme();

  const languages = {
    en: {
      copy: "&copy;2024 Jack Vacek.",
      rights: "All rights reserved.",
    },
    ja: {
      copy: "©2024 ジャック・ヴァチェック。",
      rights: "全著作権保有。",
    },
  };

  return (
    <section id="footer" className={styles.container}>
      <p>
        {languages[language].copy}
        <br />
        {languages[language].rights}
      </p>
    </section>
  );
}

export default Footer;
