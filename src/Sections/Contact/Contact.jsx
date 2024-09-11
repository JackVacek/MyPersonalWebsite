import styles from "./ContactStyles.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useTheme } from "../../common/ThemeContext.jsx";

function Contact() {
  const { language } = useTheme();
  const [state, handleSubmit] = useForm("mrbzjkdr");
  const languages = {
    en: {
      title: "Contact",
      successMessage: "Thanks for reaching out!",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
    },
    ja: {
      title: "連絡先",
      successMessage: "連絡してくれてありがとう！",
      name: "名前",
      email: "メール",
      message: "メッセージ",
      submit: "送信",
    },
  };

  if (state.succeeded) {
    return (
      <p className={styles.successMessage}>
        {languages[language].successMessage}
      </p>
    );
  }
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{languages[language].title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={languages[language].name}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder={languages[language].email}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={languages[language].message}
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <input
          className="hover btn"
          type="submit"
          value={languages[language].submit}
        />
      </form>
    </section>
  );
}

export default Contact;
