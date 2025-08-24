// login button functionality
document.getElementById('loginButton')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = 8801856689693;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumValueConverted = parseInt(pinNumberValue);

    if (mobileNumValueConverted === mobileNumber && pinNumValueConverted === pinNumber) {
      window.location.href = "./home.html";
    } else {
      document.getElementById('invalid').innerText = 'Invalid Number or Password';
    }
  })