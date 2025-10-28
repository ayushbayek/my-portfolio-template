# Email Setup Guide

## EmailJS Configuration

The emailing feature has been implemented with email string validation. To enable email functionality, you need to set up EmailJS with your credentials.

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service

1. In EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Copy the **Service ID** from the service settings

### Step 3: Create Email Template

1. In EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Design your template with these variables:
   - `{{to_email}}` - Your email address
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
4. Save the template and copy the **Template ID**

### Step 4: Get Your Public Key

1. In EmailJS dashboard, go to "Account" section
2. Copy your **Public Key**

### Step 5: Configure Your App

1. Open `src/config/emailConfig.ts`
2. Replace the placeholder values with your actual credentials:
   ```typescript
   export const emailConfig = {
     serviceId: "your_actual_service_id",
     templateId: "your_actual_template_id",
     publicKey: "your_actual_public_key",
     toEmail: "ayush81029@gmail.com",
   };
   ```

## Features Implemented

### Email Validation

- **Real-time validation**: Email format is validated as user types
- **Regex pattern**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` for standard email validation
- **Error messages**: Clear feedback for empty fields and invalid email formats
- **Sanitization**: Email addresses are trimmed and converted to lowercase

### Form Validation

- **Required fields**: Name, email, and message are required
- **Character limit**: Message field has 1000 character limit with counter
- **Error states**: Visual feedback for validation errors
- **Auto-clear**: Errors clear when user starts typing

### Email Sending

- **EmailJS integration**: Uses EmailJS service for reliable email delivery
- **Template support**: Customizable email templates
- **Success/error handling**: User feedback for submission status
- **Loading states**: Button shows "Sending..." during submission

### Security Features

- **Email sanitization**: Prevents common email injection attacks
- **Input validation**: Prevents malformed data submission
- **Rate limiting**: Built-in protection through EmailJS service

## Testing the Email Feature

1. Start your development server: `npm start`
2. Navigate to the Contact section
3. Fill out the form with valid data
4. Submit the form
5. Check your email inbox for the test message

## Troubleshooting

### Common Issues

1. **Emails not sending**

   - Verify EmailJS credentials are correct
   - Check browser console for error messages
   - Ensure EmailJS service is properly connected

2. **Validation errors**

   - Make sure email follows standard format (user@domain.com)
   - Check that all required fields are filled

3. **Template variables not working**
   - Verify template uses exact parameter names: `to_email`, `from_name`, `from_email`, `message`
   - Check template syntax in EmailJS dashboard

### Debug Mode

Enable console logging by checking the browser console for:

- Email parameters being sent
- EmailJS response status
- Any error messages

## File Structure

```
src/
├── components/
│   └── Contact.tsx              # Main contact form component
├── config/
│   └── emailConfig.ts           # EmailJS configuration
├── utils/
│   └── emailValidation.ts       # Email validation utilities
├── data/
│   └── contact.ts               # Contact form text and messages
└── assets/styles/
    └── Contact.scss             # Contact form styles
```

The email feature is now fully implemented and ready for use once you configure your EmailJS credentials!
