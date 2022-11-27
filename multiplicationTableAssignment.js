function test() {
    myTable.innerHTML = "";
    if (myOptions.value == 1) {
        multiply();
    } else if (myOptions.value == 2) {
        addition();
    } else if (myOptions.value == 3) {
        subtraction();
    } else if (myOptions.value == 4) {
        division();
    }
}

function multiply() {
    var myRows = row.value
    var myColumn = col.value
    for (let i = 1; i <= myRows; i++) {
        myTable.innerHTML += `
        <tr>
            <th>Table ${i} </th> 
        </tr>
        `
        for (let j = 1; j <= myColumn; j++) {
            myTable.innerHTML += `
            <tr>
                <td> ${i} * ${j} = ${i*j} </td>
            </tr>
            `
        }
        
    }
}


function addition() {
    var myRows = row.value
    var myColumn = col.value
    for (let i = 1; i <= myRows; i++) {
        myTable.innerHTML += `<tr><th>Table ${i} </th> </tr>`
        for (let j = 1; j <= myColumn; j++) {
            myTable.innerHTML += `<tr><td> ${i} + ${j} = ${i+j} </td></tr>`
        }
        
    }
}


function subtraction() {
    var output = "";
    var myRows = row.value
    var myColumn = col.value
    for (let i = 1; i <= myRows; i++) {
        output += `<tr>`
        for (let j = 1; j <= myColumn; j++) {
            output += `<td> ${i} - ${j} = ${i-j} </td>`
        }
        output += `</tr>`
        
    }
    myTable.innerHTML = output
}


function division() {
    var output = "";
    var myRows = row.value
    var myColumn = col.value
    for (let i = 1; i <= myRows; i++) {
        output += `<tr>`
        for (let j = 1; j <= myColumn; j++) {
            output += `<td> ${i} / ${j} = ${(i/j).toFixed(2)} </td>`
        }
        output += `</tr>`
        
    }
    myTable.innerHTML = output
}
