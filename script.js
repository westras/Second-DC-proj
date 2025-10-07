const documentElement = document.documentElement;
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function() {
  if (this.checked) {
    documentElement.classList.remove('hide-login');
  } else {
    documentElement.classList.add('hide-login');
  }
});
    