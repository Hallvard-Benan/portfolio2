import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoMdSend } from "react-icons/io";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties

import { cn } from "../../utils";
export const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function ContactForm() {
  const [capVal, setCapVal] = useState(null);
  useEffect(() => {
    defineElement(lottie.loadAnimation);
  }, []);
  const handleCaptchaChange = (val) => {
    setCapVal(val);
  };

  return (
    <section className="contact-form">
      <h3>Get in touch</h3>
      <form
        action="https://formsubmit.co/hallvard.dev@gmail.com"
        method="POST"
        target="_blank"
      >
        {/* name */}
        <div className="input-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
        </div>
        <input type="hidden" name="_captcha" value="false" />
        {/* email */}
        <div>
          <label className="form-label" htmlFor="email">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="example@email.com"
            required
          />
        </div>
        {/* message */}
        <div>
          <label className="form-label" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="6"
            placeholder="Your message"
          ></textarea>
        </div>
        {/* submit */}
        <div className="button-group">
          {!capVal && (
            <div className="captcha-reminder speech-bubble">
              <p>Please verify captcha below</p>
            </div>
          )}
          <button className="submit-btn" disabled={!capVal} type="submit">
            <span>Send message </span>
            <lord-icon
              trigger="hover"
              target=".submit-btn"
              colors="primary:#ffffff,secondary:#08a88a"
              src="https://cdn.lordicon.com/aycieyht.json"
            ></lord-icon>
          </button>
        </div>
      </form>
      {/* captcha */}
      <ReCAPTCHA
        size="compact"
        sitekey={siteKey}
        onChange={handleCaptchaChange}
      />
    </section>
  );
}
