var balance = 50;
var income = 0;
var expense = 0;
var inputName;
var amountMoney;
var displayData;
var items = [];

function clearAlldata() {
    if (items.length == 0) {
        alert('Please fill in the empty');
        return;
    }
    if (window.confirm('Clear all your transaction?')) {
        items = [];
        calculate();
        displayScreen();
    }
}

function clearnameInput() {
    document.getElementById('input').value = '';
    document.getElementById('amount').value = '';
}

function inputState() {
    inputName = document.getElementById('input').value;
    amountMoney = document.getElementById('amount').value;
}

function approvalonScreen(value) {
    if (!value) {
        return false;
    }
    return true;
} 

function addIncome() {
    inputState();

    if (approvalonScreen(inputName) && approvalonScreen(amountMoney)) {
        items.push({
            no: items.length + 1,
            item: inputName,
            type: 'Income',
            amount: amountMoney,
        });
        clearnameInput();
        calculate();
        
    } else {
        alert('Please fill in the empty');
    }
    
    displayScreen();
}

function addExpense() {
    inputState();

    if (approvalonScreen(inputName) && approvalonScreen(amountMoney)) {
        items.push({
            no: items.length + 1,
            item: inputName,
            type: 'Expense',
            amount: amountMoney,
        });
        clearnameInput();
        calculate();
        
    } else {
        alert('Please fill in the empty');
    }
    
    displayScreen();
}

function calculate() {
    income = 0;
    expense = 0;
    balance = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'Income') {
            income += items[i].amount;
        }
        if (items[i].type == 'Expense') {
            expense += items[i].amount;
        }
    }

    balance = income - expense;
}

// display on screen
function displayScreen() {

    balance = 0;
    income = 0;
    expense = 0;
    var balanceTotal = document.getElementById('balanceTotal');
    var incomeTotal = document.getElementById('incomeTotal');
    var expenseTotal = document.getElementById('expenseTotal');
    displayData = document.getElementById('displayData');

    displayData.innerHTML = `<table>
    <thead>
      <tr>
        <th>No</th>
        <th>Item</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
    </thead>
  </table>`

  for (let i = 0; i < items.length; i++) {
    displayData.innerHTML += `
    <tbody>
    <tr>
      <th>${items[i].no}</th>
      <td>${items[i].item}</td>
      <td>${items[i].type}</td>
      <td>R${items[i].amount}</td>
    </tr>
  </tbody>
  `;
    
  }

    balanceTotal.innerHTML = `R${balance}`;
    incomeTotal.innerHTML = `R${income}`;
    expenseTotal.innerHTML = `R${expense}`;
} 
displayScreen();


