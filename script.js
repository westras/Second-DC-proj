const documentElement = document.documentElement;
const checkbox = document.getElementById('checkbox');
const logbro = document.getElementById('loginscreen');
const content = document.querySelector('.content'); 
const label = document.getElementsByName('label');



checkbox.addEventListener('change', function() {
  if (this.checked) {
    logbro.classList.remove('hide-login');
    logbro.classList.add('show-login');
    content.classList.add('blur');
    

  }
});
