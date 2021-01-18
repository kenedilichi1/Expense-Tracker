
let expense_table = document.querySelector("#table");
const table_body = document.querySelector("#table_body")
let clear_table = document.querySelector("#button2");
let add_expense = document.querySelector("#button");
// let row = 0;

add_expense.addEventListener('click', displayFunction);

function displayFunction(){
    let expense_name = document.querySelector('#name').value;
    let expense_date = document.querySelector("#date").value;
    let expense_amount = document.querySelector("#amount").value;
    
    if(!expense_name || !expense_date || !expense_amount){
        alert("Please fill all spaces");
        return;
    }

    let newRow = expense_table.insertRow();
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2)
    
    cell1.textContent = expense_name;
    cell2.textContent = expense_date;
    cell3.textContent = expense_amount;
    table_body.appendChild(newRow)

    // row++;
    console.log(newRow)

    // expense_name.value = ''
    // expense_date.value = ''
    // expense_amount.value = ''

}

clear_table.addEventListener('click', function(){
    // table_body.removeChild(expense_table)
    while (table_body.firstChild){
        table_body.removeChild(table_body.firstChild);

    }
    // console.log(expense_table)
})


// clear_table.addEventListener('click', deleteDisplay);
// table_body.appendChild(displayFunction)
// function deleteDisplay(){
//    table_body.removeChild(displayFunction)
// }


