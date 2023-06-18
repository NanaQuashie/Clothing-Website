const loader = document.querySelector('.loader');



// Create account button event listener
document.addEventListener('DOMContentLoaded', () => {
  const createAccountButton = document.getElementById('submit');
  createAccountButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const number = document.getElementById('number');
    const tac = document.getElementById('terms-and-cond');
    const notification = document.getElementById('notification');
    // const loader = document.getElementById('loader');

  
  if(name != null){//signup page
    if (name.value.length < 3) {
      showAlert('Name must be at least 3 letters long');
    } else if (email.value.length === 0) {
      showAlert('Please enter your email');
    } else if (password.value.length < 8) {
      showAlert('Password should be at least 8 letters long');
    } else if (!number.value.length === 0) {
      showAlert('Please enter your phone number');
    } else if (!Number(number.value) || number.value.length < 10) {
      showAlert('Invalid number, please enter a valid one');
    } else if (!tac.checked) {
      showAlert('You must agree to our terms and conditions');
    } else {
      // Submit form
      // loader.style.display = 'red';
      // console.log("loader element",loader)
      loader.style.display = 'block';
      sendData('/signup', {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        tac: tac.checked,
        notification: notification.checked,
        seller: false,
      });
    }
  }else{
    //login page
    if(!email.value.length || !password.value.length){ //this part is working as intended. so if you fill the form it skips the if statement 
      showAlert('fill in the form');
    }else{
      loader.style.display = 'block';
      sendData('/login', {
        email: email.value,
        password: password.value,
      })
    }
    // you are supposed to make the request here
    // console.log("Make request here")

  };
});


})
