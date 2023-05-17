const inputPassword = document.querySelector('.input-pass');
const buttonPassword = document.getElementById('validate-button');
const passContainer = document.querySelector('.pass');
// ----------------------------------------------------------------

const userPass = () => inputPassword.value;

const verifyPassword = (password) => {
  if(password.length < 8 || password.length > 20) {
    console.log('Muito curto ou muito longa.');
    return;
  };
  
};

const handleValidate = () => {
  verifyPassword(userPass());
};
buttonPassword.addEventListener('click', handleValidate);
