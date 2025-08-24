let validPin = 1234;
const transactionData = [];

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

// function to get innertext
function getInnerText(id) {
  const elementValue = document.getElementById(id).innerText;
  const elementValueNum = parseInt(elementValue);
  return elementValueNum;
}

// function to set innertext
function setInnerText(value) {
  let availableBalanceElement = document.getElementById('available-banalce');
  availableBalanceElement.innerText = value;
}

// function to handle toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName('form');
  for (const form of forms) {
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}

// function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName('form-btn');

  for (const btn of formBtns) {
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
  }

  document.getElementById(id).classList.remove('border-gray-300');
  document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}


// add money feature
document.getElementById('add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account').value;
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');

    const availableBalance = getInnerText('available-banalce');
    if (accountNumber.length < 11 || pin !== validPin) {
      alert('Please! Provide valid account number or pin.');
      return;
    }
    const totalNewBalance = availableBalance + amount;
    setInnerText(totalNewBalance);
    alert(`${amount} TK added from ${bank}`);

    const data = {
      name : 'Add Money',
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);
  })

// cashout money feature
document.getElementById('withdraw-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueNumber('withdraw-amount');
    const accountNumber = document.getElementById('agent-number').value;
    const pin = getInputValueNumber('cash-pin');
    const availableBalance = getInnerText('available-banalce');
    if (accountNumber.length < 11 || pin !== validPin) {
      alert('Wrong account number or pin');
      return;
    }
    const remainBalance = availableBalance - amount;
    document.getElementById('available-banalce').innerText = remainBalance;

    const data = {
      name : 'Cash Out',
      date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);
  })


// toggoling feature
document.getElementById('add-button')
  .addEventListener('click', function () {
    handleToggle('add-money-parent');
    handleButtonToggle('add-button');
  })

document.getElementById('cash-out-button')
  .addEventListener('click', function () {
    handleToggle('cash-out-parent');
    handleButtonToggle('cash-out-button');
  })

document.getElementById('transfer-button')
  .addEventListener('click', function () {
    handleToggle('transfer-money-parent');
    handleButtonToggle('transfer-button');
  })

document.getElementById('getbonus-button')
  .addEventListener('click', function () {
    handleToggle('get-bonus-parent');
    handleButtonToggle('getbonus-button');
  })

document.getElementById('bill-button')
  .addEventListener('click', function () {
    handleToggle('bill-button-parent');
    handleButtonToggle('bill-button');
  })

document.getElementById('transaction-button')
  .addEventListener('click', function () {
    handleToggle('transaction-button-parent');
    handleButtonToggle('transaction-button');
  })