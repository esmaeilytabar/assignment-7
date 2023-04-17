# User Signup Form

This is a simple user signup form that collects the user's name, email, phone, and password. The form includes basic validation to ensure that the user enters valid information.

## Technologies Used

This project uses the following technologies:

- HTML
- CSS
- JavaScript

## Files

The project includes the following files:

- `index.html`: This file contains the HTML markup for the user signup form.
- `style.css`: This file contains the CSS styling for the user signup form.
- `script.js`: This file contains the JavaScript code that handles form validation and submission.

## Form Validation

The `validateForm()` function in `script.js` handles form validation. This function is called when the user submits the form.

### Name Validation

The function checks whether the user has entered a name by checking whether the value of the name input field is empty or not. If the name field is empty, an alert is displayed informing the user that the name must be filled out.

### Email Validation

The function checks whether the user has entered an email by checking whether the value of the email input field is empty or not. If the email field is empty, an alert is displayed informing the user that the email must be filled out.

If the email field is not empty, the function checks whether the value of the email field matches the regular expression pattern defined in the `isValidEmail()` function. The `isValidEmail()` function uses a simple regular expression pattern to validate the email format.

If the email field is not valid, an alert is displayed informing the user that the email is invalid and must be a valid email address.

### Phone Validation

The function checks whether the user has entered a phone number by checking whether the value of the phone input field is empty or not. If the phone field is empty, an alert is displayed informing the user that the phone must be filled out.

If the phone field is not empty, the function checks whether the value of the phone field matches the regular expression pattern defined in the `isValidPhone()` function. The `isValidPhone()` function uses a simple regular expression pattern to validate the phone format.

If the phone field is not valid, an alert is displayed informing the user that the phone is invalid and must be a valid 10-digit phone number.

### Password Validation

The function checks whether the user has entered a password by checking whether the value of the password input field is empty or not. If the password field is empty, an alert is displayed informing the user that the password must be filled out.

If the password field is not empty, the function checks whether the value of the password field matches the regular expression pattern defined in the `isValidPassword()` function. The `isValidPassword()` function uses a regular expression pattern that requires the password to be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.

If the password field is not valid, an alert is displayed informing the user that the password is invalid and must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.

## Form Submission

If the form passes validation, an alert is displayed informing the user that the form was submitted successfully, and the function returns `true`, which allows the form to be submitted to the server. If the form fails validation, the function returns `false`, which prevents the form from being submitted to the server.

## Conclusion

This project demonstrates how to use basic form validation techniques to ensure that users enter valid information into a user signup form. With the help of regular expressions, we can validate the format
