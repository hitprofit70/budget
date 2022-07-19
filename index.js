var balance = 50;
var income = 0;
var expense = 0;
var inputName;
var amountMoney;
var displayData;
var items = [];


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
            item: inputName,
            Type: 'Income',
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
            item: inputName,
            Type: 'Expense',
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
    var balanceTotal = document.getElementById('balanceTotal');
    var incomeTotal = document.getElementById('incomeTotal');
    var expenseTotal = document.getElementById('expenseTotal');
    displayData = document.getElementById('displayData');

    displayData.innerHTML = `<table>
    <thead>
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
    </thead>
  </table>`

  for (let i = 0; i < items.length; i++) {
    displayData.innerHTML += `<table>
    <tbody>
    <tr>
      <th>${items[i]}.#</th>
      <td>${items[i]}.item</td>
      <td>${items[i]}.type</td>
      <td>${items[i]}.amount</td>
    </tr>
  </tbody>
  </table>`;
    
  }

    balanceTotal.innerHTML = `R${balance}`;
    incomeTotal.innerHTML = `R${income}`;
    expenseTotal.innerHTML = `R${expense}`;
}

displayScreen();


