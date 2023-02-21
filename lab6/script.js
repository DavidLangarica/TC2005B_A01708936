const button = document.getElementById('submit');
const signal = document.getElementById('signal');
const errorMsg = document.getElementById('error');
const passMsg = document.getElementById('pass');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const contraseña = document.getElementById('contraseña').value;
  const verContraseña =
    document.getElementById('verContraseña').value;
  let biggest = contraseña;

  if (contraseña.length < verContraseña.length) {
    biggest = verContraseña;
  }
  if (contraseña.length >= 1 && verContraseña.length >= 1) {
    for (let i = 0; biggest[i] !== undefined; i++) {
      if (contraseña[i] !== verContraseña[i]) {
        signal.style.backgroundImage = "url('./no.png')";
        errorMsg.style.display = 'inline';
        passMsg.style.display = 'none';
      } else {
        signal.style.backgroundImage = "url('./yes.png')";
        passMsg.style.display = 'inline';
        errorMsg.style.display = 'none';
      }
    }
  }
});
