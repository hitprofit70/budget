var state = {
    balance: 0,
    income: 0,
    expense: 0,
    item: [
        {items: 'Salary', type: 'Income', amount: 'R7 000'},
        {items: 'Bus fare', type: 'Expense', amount: 'R200'},
        {items: 'Foods', type: 'Expense', amount: 'R1 000'}
    ]
}

var balance = document.getElementById('balance')
var income = document.getElementById('income')
var expense = document.getElementById('expense')
var itemSt = document.getElementById('itemSt')


//run for browser
function browserState() {}
browserState();

// put varabile in function
function addIncome() {
    console.log('htgh');
}
