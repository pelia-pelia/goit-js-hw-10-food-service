import { Theme } from './constant';

const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');
toggle.addEventListener('change', onToggleChange);

const userTheme = localStorage.getItem('theme');

if (userTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  toggle.checked = localStorage.getItem('chkbx-active');
} else {
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function onToggleChange() {
  const userTheme = localStorage.getItem('theme');
  let chkbxValue = toggle.checked;

  if (userTheme === Theme.LIGHT) {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(userTheme);
    localStorage.setItem('theme', Theme.DARK);

    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('chkbx-active', chkbxValue);
    localStorage.removeItem(userTheme);
    localStorage.setItem('theme', Theme.LIGHT);

    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}