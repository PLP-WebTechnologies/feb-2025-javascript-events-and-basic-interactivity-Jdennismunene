document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
  
    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('confirmationMessage').innerText = '';
  
    let isValid = true;
  
    // Simple form validation
    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required.';
      isValid = false;
    }
  
    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required.';
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').innerText = 'Enter a valid email.';
      isValid = false;
    }
  
    if (message.length < 10) {
      document.getElementById('messageError').innerText = 'Message must be at least 10 characters.';
      isValid = false;
    }
  
    if (isValid) {
    document.getElementById('confirmationMessage').innerText = `Thank you, ${name}. Your message has been sent!`;

    // Optional: reset the form
    document.getElementById('contactForm').reset();
  }
});
