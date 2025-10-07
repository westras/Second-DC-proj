const documentElement = document.documentElement;
const checkbox = document.getElementById('checkbox');
const logbro = document.getElementById('loginscreen');

// Initial state

checkbox.addEventListener('change', function() {
  if (this.checked) {
    logbro.classList.remove('hide-login');
    logbro.classList.add('show-login');
  } else {
    logbro.classList.add('hide-login');
    logbro.classList.remove('show-login');
  }
});
