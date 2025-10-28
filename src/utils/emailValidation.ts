/**
 * Email validation utility functions
 */

/**
 * Validates an email address using regex pattern
 * @param email - The email address to validate
 * @returns boolean - true if email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates email and returns detailed validation result
 * @param email - The email address to validate
 * @returns { isValid: boolean, message: string }
 */
export const validateEmail = (
  email: string
): { isValid: boolean; message: string } => {
  if (!email || email.trim() === "") {
    return { isValid: false, message: "Email is required" };
  }

  if (!isValidEmail(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }

  return { isValid: true, message: "" };
};

/**
 * Sanitizes email input by trimming and converting to lowercase
 * @param email - The email address to sanitize
 * @returns string - Sanitized email address
 */
export const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};
