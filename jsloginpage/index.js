// get the login form element
const loginForm = document.getElementById('login-form');

// handle form submit event
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // get the form data
  const formData = new FormData(event.target);
  const fullName = formData.get('fullname');
  const email = formData.get('email');
  const password = formData.get('password');

  // check if the user entered the correct email and password
  if (email === 'admin@user.com' && password === '123456') {
    // set the user's full name in local storage
    localStorage.setItem('fullName', fullName);

    // redirect the user to the home page
    window.location.href = 'home.html';
  } else {
    // show error message using toastify
    Toastify({
      text: 'Wrong email or password',
      backgroundColor: 'red'
    }).showToast();
  }
});