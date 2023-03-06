var pg_conn = require("./pg.config");
async function test_query(){
    const acc_query =
{
    text:'SELECT * FROM account WHERE username=$1 AND passw=$2',
    values: ["ngan", "123"]
}
query_data = await pg_conn.query(acc_query);
console.log(query_data);
return query_data;
}
results = test_query();
console.log("results: " + results);

