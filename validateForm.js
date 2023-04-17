function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  if (name.value.trim() === "") {
    alert("Name must be filled out.");
    return false;
  }

  if (email.value.trim() === "") {
    alert("Email must be filled out.");
    return false;
  } else if (!isValidEmail(email.value)) {
    alert("Email is invalid. Please enter a valid email address (e.g. john.doe@example.com)");
    return false;
  }

  if (phone.value.trim() === "") {
    alert("Phone must be filled out.");
    return false;
  } else if (!isValidPhone(phone.value)) {
    alert("Phone is invalid. Please enter a valid 10-digit phone number (e.g. 5551234567)");
    return false;
  }

  if (password.value.trim() === "") {
    alert("Password must be filled out.");
    return false;
  } else if (!isValidPassword(password.value)) {
    alert("Password is invalid. Please enter a password that is at least 8 characters long and contains at least one lowercase letter, one uppercase letter, and one digit.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

function isValidEmail(email) {
  // A simple email validation regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  // A simple phone validation regular expression
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}

function isValidPassword(password) {
  // A password validation regular expression that requires at least one lowercase letter, one uppercase letter, one digit, and a minimum length of 8 characters.
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  return passwordPattern.test(password);
}
