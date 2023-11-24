const loginForm = document.querySelector('.js-login-form');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    return alert('All form fields must be filled in');
  }
  const userData = {
    email,
    password,
  };
  console.log(userData);
  form.reset();
}

loginForm.addEventListener('submit', event => {
  handleSubmit(event);
});
