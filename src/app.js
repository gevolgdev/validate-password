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
  if(!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    console.log('Sem letra minuscula ou maiuscula.');
    return;
  };
  if(!/[0-9]/.test(password)) {
    console.log('Sem numero.');
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
    console.log('Sem caracteres especial.');
    return;
  };

  console.log('Senha protegida!');
};

const handleValidate = () => {
  verifyPassword(userPass());
};
buttonPassword.addEventListener('click', handleValidate);
