var pg_conn = require('./pg.config');

async function authen(user, pass)
{
    var authenticated = false;
    var arr = [];
    var idshop = 0;
    var role = "shop";
    const asc_query = {
        text: "SELECT * from account where name = $1 AND passwd = $2",
        values: [user,pass]
    };
    var query_data = await pg_conn.query(asc_query);
    if(query_data.rowCount == 1){
        authenticated = true;
        idshop = query_data.rows[0].shop;
        role = query_data.rows[0].role;
    }
    arr.push(authenticated, idshop, role)
    return arr;
}

// async function authen(user, pass)
// {
//     var authenticated = false;
//     const acc_query = 
//     {
//         text: 'SELECT * FROM account WHERE username = $1 AND passw=$2',
//         values: [user, pass]
//     };
//     var query_data = await pg_conn.query(acc_query);
//     if (query_data.rows.length==1) {
//         authenticated = true;
//     }
//     console.log(authenticated);
//     return authenticated;
// }

module.exports = authen;