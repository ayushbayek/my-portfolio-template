export interface ContactInfo {
  title: string;
  subtitle: string;
  formFields: {
    name: {
      label: string;
      placeholder: string;
      errorMessage: string;
    };
    email: {
      label: string;
      placeholder: string;
      errorMessage: string;
    };
    message: {
      label: string;
      placeholder: string;
      errorMessage: string;
    };
  };
  submitButton: {
    text: string;
    icon: string;
  };
}

export const contactInfo: ContactInfo = {
  title: "Contact Me",
  subtitle: "Got a project waiting to be realized? Let's collaborate and make it happen!",
  formFields: {
    name: {
      label: "Your Name",
      placeholder: "What's your name?",
      errorMessage: "Please enter your name"
    },
    email: {
      label: "Email / Phone",
      placeholder: "How can I reach you?",
      errorMessage: "Please enter your email or phone number"
    },
    message: {
      label: "Message",
      placeholder: "Send me any inquiries or questions",
      errorMessage: "Please enter the message"
    }
  },
  submitButton: {
    text: "Send",
    icon: "SendIcon"
  }
};
