var pg_conn = require('./pg.config');

async function addProduct(id, name, quantity, price, shop) {
    const query = {
        text: `insert into product values ($1,$2,$3,$4,$5)`,
        values: [id, name, quantity, price, shop]
    }
    var query_data = pg_conn.query(query);
    return query_data;
}
module.exports = addProduct;

