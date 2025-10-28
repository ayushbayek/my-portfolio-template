import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { contactInfo } from "../data/contact";
import { validateEmail, sanitizeEmail } from "../utils/emailValidation";
import { emailConfig } from "../config/emailConfig";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailInvalidError, setEmailInvalidError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newMessage = e.target.value;
    if (newMessage.length <= 1000) {
      setMessage(newMessage);
    }
  };

  const charCount = message.length;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset all errors
    setNameError(false);
    setEmailError(false);
    setEmailInvalidError(false);
    setMessageError(false);
    setSubmitStatus("idle");
    setSubmitMessage("");

    // Validate form fields
    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isMessageValid = message.trim() !== "";

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    // Validate email format if email is provided
    let isEmailFormatValid = true;
    if (isEmailValid) {
      const emailValidation = validateEmail(email);
      isEmailFormatValid = emailValidation.isValid;
      setEmailInvalidError(!isEmailFormatValid);
    }

    // If all validations pass, send email
    if (isNameValid && isEmailValid && isMessageValid && isEmailFormatValid) {
      setIsSubmitting(true);

      try {
        const sanitizedEmail = sanitizeEmail(email);

        const templateParams = {
          to_email: emailConfig.toEmail,
          from_name: name.trim(),
          from_email: sanitizedEmail,
          message: message.trim(),
        };

        console.log("Sending email with params:", templateParams);

        const response = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          emailConfig.publicKey
        );

        console.log("SUCCESS!", response.status, response.text);

        setSubmitStatus("success");
        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon."
        );

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.log("FAILED...", error);
        setSubmitStatus("error");
        setSubmitMessage("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className='contact-section' id='contact'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h1>{contactInfo.title}</h1>
          <p>{contactInfo.subtitle}</p>
        </div>
        <Box
          ref={form}
          component='form'
          noValidate
          autoComplete='off'
          className='contact-form'
        >
          <div className='form-flex'>
            <TextField
              required
              id='outlined-required'
              label={contactInfo.formFields.name.label}
              placeholder={contactInfo.formFields.name.placeholder}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameError}
              helperText={
                nameError ? contactInfo.formFields.name.errorMessage : ""
              }
            />
            <TextField
              required
              id='outlined-required'
              label={contactInfo.formFields.email.label}
              placeholder={contactInfo.formFields.email.placeholder}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Clear email validation errors when user starts typing
                if (emailError || emailInvalidError) {
                  setEmailError(false);
                  setEmailInvalidError(false);
                }
              }}
              error={emailError || emailInvalidError}
              helperText={
                emailError
                  ? contactInfo.formFields.email.errorMessage
                  : emailInvalidError
                  ? contactInfo.formFields.email.invalidEmailMessage
                  : ""
              }
            />
          </div>
          <TextField
            required
            id='outlined-multiline-static'
            label={contactInfo.formFields.message.label}
            placeholder={contactInfo.formFields.message.placeholder}
            multiline
            rows={10}
            className='body-form'
            value={message}
            onChange={handleMessageChange}
            error={messageError || charCount > 1000}
            helperText={
              messageError
                ? contactInfo.formFields.message.errorMessage
                : `${charCount}/1000 characters`
            }
            inputProps={{
              maxLength: 1000,
            }}
          />
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={sendEmail}
            disabled={isSubmitting}
            className={submitStatus === "success" ? "success-button" : ""}
          >
            {isSubmitting ? "Sending..." : contactInfo.submitButton.text}
          </Button>

          {submitMessage && (
            <div className={`submit-message ${submitStatus}`}>
              {submitMessage}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default Contact;
