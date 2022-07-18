var balance = 0;
var income = 0;
var expense = 0;
var tableData;
var inputName;
var amountMoney;
var item = [];


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
        item.push({
            items: inputName,
            Type: 'Income',
            amount: amountMoney,
        });
        clearnameInput();
        
    } else {
        alert('Please fill in the empty');
    }
    
    displayScreen();

}

function addExpense() {
    inputState();

    if (approvalonScreen(inputName) && approvalonScreen(amountMoney)) {
        item.push({
            items: inputName,
            Type: 'Expense',
            amount: amountMoney,
        });
        clearnameInput();
        
    } else {
        alert('Please fill in the empty');
    }
    
    displayScreen();

}

// display on screen
function displayScreen() {
    var balanceTotal = document.getElementById('balanceTotal');
    var incomeTotal = document.getElementById('incomeTotal');
    var expenseTotal = document.getElementById('expenseTotal');
    displayData = document.getElementById('displayData');





    balanceTotal.innerHTML = `R${balance}`;
    incomeTotal.innerHTML = `R${income}`;
    expenseTotal.innerHTML = `R${expense}`;
}

displayScreen();


