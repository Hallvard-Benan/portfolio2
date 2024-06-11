import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <section className="section section--contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="container content content--contact">
        <ContactForm />
        <div className="contact__links">
          <h3>Links</h3>
          <div className="email-group">
            <a
              aria-label="link to my email"
              href="mailto: hallvard.dev@gmail.com"
              target="_blank"
              className="contact-link"
            >
              <FaEnvelope />
              <label>hallvard.dev@gmail.com </label>
            </a>
            <button
              aria-label="copy email to clipboard"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("hallvard.benan@gmail.com");
                setIsCopied(true);
              }}
            >
              {!isCopied ? (
                <div>
                  {" "}
                  <FaCopy />
                  <p className="copied">Copy</p>
                </div>
              ) : (
                <div>
                  {" "}
                  <FaCheck />
                  <p className="copied">Copied</p>
                </div>
              )}
            </button>
          </div>

          <a
            target="_blank"
            className="contact-link"
            aria-label="link to my github"
            href="https://github.com/Hallvard-Benan"
          >
            <FaGithub />
            <label>Github </label>
          </a>
          <a
            target="_blank"
            className="contact-link"
            aria-label="link to my linkedin"
            href="https://www.linkedin.com/in/hallvard-benan-282937249/"
          >
            <FaLinkedin />
            <label>Linked in </label>
          </a>
        </div>
      </div>
    </section>
  );
}
