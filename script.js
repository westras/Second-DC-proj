const documentElement = document.documentElement;
const checkbox = document.getElementById('checkbox');
const logbro = document.getElementById('loginscreen');

// Initial state

checkbox.addEventListener('change', function() {
  if (this.checked) {
    logbro=documentElement.classList.remove('hide-login');
    logbro=documentElement.classList.add('show-login');
  } else {
    logbro=documentElement.classList.add('hide-login');
    logbro=documentElement.classList.remove('show-login');
  }
});
    