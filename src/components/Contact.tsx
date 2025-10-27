import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { contactInfo } from "../data/contact";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    if (newMessage.length <= 1000) {
      setMessage(newMessage);
    }
  };

  const charCount = message.length;

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
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
              }}
              error={emailError}
              helperText={
                emailError ? contactInfo.formFields.email.errorMessage : ""
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
              maxLength: 1000
            }}
          />
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={sendEmail}
          >
            {contactInfo.submitButton.text}
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
