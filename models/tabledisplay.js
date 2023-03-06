var pg_conn = require('./pg.config');

async function getTable(user)
{
    const acc_query = 
    {
        text: 'SELECT role FROM account WHERE username = $1',
        values: [user]
    };
    console.log(user)
    var query_data = await pg_conn.query(acc_query);
    var role = query_data.rows[0].role;
    let table_query = {}
    if(role == 'director'){
        table_query=
        {
            text: 'SELECT * FROM product'
        };
    }
    else{
        table_query = 
        {
            text: 'SELECT * FROM product WHERE shop = $1',
            values: [role]
        };
    }
    query_data = await pg_conn.query(table_query);
    var dataTable = query_data.rows
    console.log
    var stringTable = "<table><tr>"
    var headerData = Object.keys(dataTable[0])
    for(let headerIndex in headerData){
        var header = "<th>"+headerData[headerIndex]+"</th>"
        stringTable+=header
    }
    stringTable += `<tr><form method='POST' action='/users/edit${get_query}'>`
    for(let rowIndex in dataTable){
        rowData = dataTable[rowIndex]
        id_product = rowData[Object.keys(rowData)[0]]
        var get_query = "?id=" + id_product + "&user="+ user 
        var bodyTable = `<tr> <form method='POST' action=/users/edit${get_query}>`
        for(let fieldName in rowData){
            var cell = `<td><input type='text' value = '${rowData[fieldName]}' 
            placeholder='${rowData[fieldName]}' name='${fieldName}'></input></td>`
            bodyTable+=cell
            console.log(rowData)
            console.log(fieldName)
        }
        bodyTable += `<td>  <button type='submit'> Edit </button>
        <a href='/users/delete${get_query}'> Delete </a> </td>`
        bodyTable+="</form></tr>"
        stringTable+=bodyTable
    }
    stringTable += `<tr><form method='POST' action='/users/add${get_query}'>`
    for(let headerIndex in headerData){
        stringTable += `<td><input type='text' name=${headerData[headerIndex]} ></td>`;
    }
    stringTable += "<td> <button type='submit'> Add </button></td>"
    stringTable += "</form></tr>"
    stringTable+="</table>"
    return stringTable;
}

module.exports = getTable;