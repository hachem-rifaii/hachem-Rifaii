import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import { useForm, ValidationError } from "@formspree/react";
import validator from "validator";
import process from "process";

export const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [state, handleSubmit] = useForm("xknkpqry");
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");

  // Verify email using validator.js
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("Form is not available!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
      });
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Email successfully sent!", {
            position: toast.POSITION.BOTTOM_LEFT,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            hideProgressBar: false,
            toastId: "success",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send email. Please try again!", {
            position: toast.POSITION.BOTTOM_LEFT,
            pauseOnFocusLoss: false,
            closeOnClick: true,
          });
        }
      );
  };

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={(e) => verifyEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message}
        >
          Send
        </button>
      </form>
    </Container>
  );
};
