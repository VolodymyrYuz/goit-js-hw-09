let formData = {
  email: '',
  message: '',
};

const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  formData = JSON.parse(storedData);
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

document
  .querySelector('.feedback-form')
  .addEventListener('input', function (event) {
    if (event.target.name === 'email') {
      formData.email = event.target.value;
    } else if (event.target.name === 'message') {
      formData.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

document
  .querySelector('.feedback-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };

    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  });
