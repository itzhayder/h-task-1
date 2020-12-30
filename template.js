// select dom elements
const form = document.querySelector('#form');
const contacts = document.querySelector('#contacts');
const contactTemplate = document.querySelector('#contact-template');

// add event listener
form.addEventListener('submit', addContact);

// add new contact to DOM
function addContact(event) {
  event.preventDefault();

  const inputName = form['input-name'].value.trim();
  const inputEmail = form['input-email'].value.trim();
  const inputHomepage = form['input-homepage'].value.trim();

  clearFormInputs();

  if (!inputName.length || !inputEmail.length || !inputHomepage.length) {
    console.error('please provide the required field!');
    return;
  }

  const cloneNode = contactTemplate.cloneNode(true);

  cloneNode.content.querySelector('h2').textContent = inputName;
  cloneNode.content.querySelector('.email').textContent = inputEmail;
  cloneNode.content.querySelector('a').textContent = inputHomepage;
  cloneNode.content.querySelector('a').setAttribute('href', inputHomepage);

  contacts.appendChild(cloneNode.content);
}

// clear form input fields
function clearFormInputs() {
  form['input-name'].value = '';
  form['input-email'].value = '';
  form['input-homepage'].value = '';
};