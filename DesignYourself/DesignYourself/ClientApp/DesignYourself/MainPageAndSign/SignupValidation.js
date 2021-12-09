const form1 = document.getElementById('signupData');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');

form1.addEventListener('submit', event => {
  event.preventDefault();
  checkInputs1();
});

function checkInputs1() {
  // trim to remove the whitespaces
  const emailValue1 = email1.value.trim();
  const passwordValue1 = password1.value.trim();
  const passwordValue2 = password2.value.trim();
  const fNameValue3 = fName.value.trim();
  const lNameValue4 = lName.value.trim();

  if(fNameValue3 === '') {
    setErrorFor1(fName, 'First Name cannot be blank');
  } else {
    setSuccessFor1(fName);
  }

  if(lNameValue4 === '') {
    setErrorFor1(lName, 'Last Name cannot be blank');
  } else {
    setSuccessFor1(lName);
  }

  if(emailValue1 === '') {
    setErrorFor1(email1, 'Email cannot be blank');
  } else if (!isEmail1(emailValue1)) {
    setErrorFor1(email1, 'Not a valid email');
  } else {
    setSuccessFor1(email1);
  }
  
  if(passwordValue1 === '') {
    setErrorFor1(password1, 'Password cannot be blank');
  } else {
    setSuccessFor1(password1);
  }

  if(passwordValue2 === '') {
    setErrorFor1(password2, 'Password cannot be blank');
  } else if(passwordValue1 !== passwordValue2) {
    setErrorFor1(password2, 'Passwords does not match');
  } else{
    setSuccessFor1(password2);
  }
}

function setErrorFor1(input1, message1) {
  const formControl1 = input1.parentElement;
  const small1 = formControl1.querySelector('small');
  formControl1.className = 'error';
  small1.innerText = message1;
}

function setSuccessFor1(input1) {
  const formControl1 = input1.parentElement;
  formControl1.className = 'success';
}
  
function isEmail1(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}