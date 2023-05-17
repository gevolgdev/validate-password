const inputPassword = document.querySelector('.input-pass');
const buttonPassword = document.getElementById('validate-button');
const passContainer = document.querySelector('.pass');
// ----------------------------------------------------------------

const renderFeedback = (message) => {
  passContainer.innerHTML = '';
  const passElement = document.createElement('div');
  passElement.innerHTML = `<span class='feedback'>${message}</span>`;
  passContainer.appendChild(passElement);
  setTimeout(() => {
    passElement.innerHTML = '';
    return;
  }, 5000);
};

const userPass = () => inputPassword.value;

const verifyPassword = (password) => {
  if(password.length < 8 || password.length > 20) {
    password.length < 8 && renderFeedback('Senha curta!');
    password.length > 20 && renderFeedback('Senha muito longa!');
    return;
  };
  if(!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    !/[a-z]/.test(password) || renderFeedback('Coloque um letra minuscula.');
    !/[A-Z]/.test(password)|| renderFeedback('Coloque um letra maiúscula.');
    return;
  };
  if(!/[0-9]/.test(password)) {
    renderFeedback('Coloque um número.');
    return;
  };
  const specialCaracter = "!@#$%^&*()_-+=|]}[{':;?/>.<,~".split('');
  let noSpecialCaracter = true;
  for(let i= 0; i < specialCaracter.length; i++) {
    if(password.includes(specialCaracter[i])) {
      noSpecialCaracter = false;
      break;
    };
  };
  if(noSpecialCaracter) {
    renderFeedback('Coloque um caráctere especial.');
    return;
  };

  renderFeedback('Senha protegida!');
};

const handleValidate = () => {
  verifyPassword(userPass());
  inputPassword.value = '';
};
buttonPassword.addEventListener('click', handleValidate);
