const form = document.querySelector("#myForm");
async function handleSubmit(e) {
  e.preventDefault();

  const FORMPREE= 'https://formspree.io/f/mrgrqvbe';

  const status = document.querySelector("#my-form-status");
  const data = new FormData(e.target);
  fetch(FORMPREE, {
    method: 'POST',
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form.reset();
      status.type='text';
    status.value = "Thanks for your submission!";
  }).catch(error => {
    status.type='text';
    status.value = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)