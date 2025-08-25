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

    if (amount <= 0 || isNaN(amount)) {
      alert('Invalid amount!');
      return;
    }

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
      name: 'Add Money',
      date: new Date().toLocaleTimeString()
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

    if (amount <= 0 || isNaN(amount) || amount >= availableBalance) {
      alert('Invalid Amount!');
      return;
    }

    if (accountNumber.length < 11 || pin !== validPin) {
      alert('Wrong account number or pin');
      return;
    }

    const remainBalance = availableBalance - amount;
    document.getElementById('available-banalce').innerText = remainBalance;
    alert(`Cash out ${amount} TK Successfully.`);

    const data = {
      name: 'Cash Out',
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);
  })

// transfer money feature
document.getElementById('transfer-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const userAccountNumber = document.getElementById('user-account-number').value;
    const userAmount = getInputValueNumber('transfer-amount');
    const userPin = getInputValueNumber('user-pin');
    const currentBalance = getInnerText('available-banalce');

    if (userAccountNumber.length < 11) {
      alert('Invalid account number!');
      return;
    }

    if (userAmount <= 0 || isNaN(userAmount)) {
      alert('Invalid Amount');
      return;
    }

    if (userAmount > currentBalance) {
      alert('Not enough money!');
      return;
    }

    if (userPin !== validPin) {
      alert('Invalid pin number!');
      return;
    }

    const newBalance = currentBalance - userAmount;
    document.getElementById('available-banalce').innerText = newBalance;
    alert('Money transfer successfully!');

    const data = {
      name: 'Transfer money',
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);
  })

// get bonus feature
document.getElementById('get-bonus-button')
  .addEventListener('click', function (event) {
    event.preventDefault();

    let couponCode = 'Babu450';
    let bonusMoney = 450;

    let copunCode2 = 'Nafisa360';
    let bonusMoney2 = 360;

    let currentBalance = parseInt(document.getElementById('available-banalce').innerText);
    const copunInput = document.getElementById('copun-code-input').value;

    if (copunInput.toLowerCase() === couponCode.toLowerCase()) {
      currentBalance += bonusMoney;
      document.getElementById('available-banalce').innerText = currentBalance;
      alert(`Congratulations! You have got ${bonusMoney} TK.`);

      const data = {
        name: 'Get Bonus',
        date: new Date().toLocaleTimeString()
      }
      transactionData.push(data);
    } else if (copunInput.toLowerCase() === copunCode2.toLowerCase()) {
      currentBalance += bonusMoney2;
      document.getElementById('available-banalce').innerText = currentBalance;
      alert(`Congratulations! You have got ${bonusMoney2} TK.`);

      const data = {
        name: 'Get Bonus',
        date: new Date().toLocaleTimeString()
      }
      transactionData.push(data);
    } else {
      alert('Copun code is invalid!');
    }
  })

// pay bill feature
document.getElementById('pay-bill-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueNumber('pay-bill-amount');
    const accountNumber = document.getElementById('pay-bill-account-number').value;
    const pin = getInputValueNumber('pay-bill-pin');
    const availableBalance = getInnerText('available-banalce');

    if (amount <= 0 || isNaN(amount) || amount >= availableBalance) {
      alert('Invalid Amount!');
      return;
    }

    if (accountNumber.length < 11 || pin !== validPin) {
      alert('Wrong account number or pin');
      return;
    }

    const remainBalance = availableBalance - amount;
    document.getElementById('available-banalce').innerText = remainBalance;
    alert(`Pay Bill ${amount} TK Successfully.`);

    const data = {
      name: 'Pay Bill',
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);
  })

// transaction money feature
document.getElementById('transaction-button')
  .addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
    for (const data of transactionData) {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex items-center justify-between mt-3">
          <div class="flex items-center gap-3">
            <div class="p-3 rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png" alt="">
            </div>
            <div>
              <h3>${data.name}</h3>
              <p>${data.date}</p>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `;
      transactionContainer.append(div);
    }
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