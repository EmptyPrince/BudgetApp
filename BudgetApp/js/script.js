console.log("This is the beginning");
/*
Variables:
    var has the scope of global
    let has a scope of local

Funtions notation:
    function functionName ( parameters ) {

    };

Conditional Statements
    If statement notation:
        if (condition) {
            code to run if condition is true
        } else {
            run some other code instead
        };

    For loop notation:
        for ( InitialExpression; condition; incrementExpression ) {
            code block
        };

        1. Initial expression: starts the loop
        2. Condition expression: if this value is true, the
        loop statements execute
        3. Statement: your block of code
        4. Increment expression: updates the loop
    */

/* Example for loop
for ( let i = 0; i < 4; i++ ){
    console.log(i);
}
*/

/*
Selecting Elements 
    Two ways:

        document.querySelector("#selector") :
           ● Finds, selects and returns the first element
            that matches the specified CSS selector
            ● Remember, CSS selectors include element
            name, class or ID 

        document.getElementById("selector") :
            ● Finds, selects and returns the element that
            matches the specified ID
            ● Remember, IDs must always be unique

Events
    ● Events are an action or occurrence that take
    place in the browser
    ● We can tell our code to do something when
    an event happens using JavaScript

    Event Properties
        onclick: Triggers when an element is clicked
        onkeyup: Tiggers when any key on a keyboard is released
        onsubmit: Triggers when a form is submitted
        onresize: Triggers when the window is resized
        onmouseover: Triggers when the mouse is moved onto an element
*/

//Selectors
let updateBudgetButton = document.querySelector('#update_budget_button');
let addExpensebutton = document.querySelector('#add_expense_button');
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expense');

//Events
updateBudgetButton.onclick = updateBudget;
addExpensebutton.onclick = addExpense;

//Variables
let montlhyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

//functions
function updateBudget( event ){
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0 ) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    };
}

function addExpense( event ) {
    event.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };
    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild( newExpense );
    let expenseAmount = parseInt(amountInput.value);
    expenses.push(expenseAmount);
    updateExpenseTotal();
 }

function updateExpenseTotal () {
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++){
        expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal;
    updateBalance();
}