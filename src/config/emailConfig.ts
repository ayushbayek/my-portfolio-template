/**
 * EmailJS Configuration
 *
 * To set up EmailJS:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create a service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Replace the placeholder values below with your actual credentials
 */

export const emailConfig = {
  // Replace with your EmailJS service ID
  serviceId: "service_pdtx49e",

  // Replace with your EmailJS template ID
  templateId: "template_93i6m8n",

  // Replace with your EmailJS public key
  publicKey: "UvfIMX05l-pnSf4IZ",

  // Your email address where contact form messages will be sent
  toEmail: "ayush81029@gmail.com",
};

/**
 * Email template parameters structure
 * Make sure your EmailJS template uses these parameter names
 */
export interface EmailTemplateParams {
  to_email: string;
  from_name: string;
  from_email: string;
  message: string;
}
