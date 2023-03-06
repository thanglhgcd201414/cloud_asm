var pg_conn = require('./pg.config');
async function viewShop() {
  const shop_query = {
    text: `SELECT shop.name from shop inner join account on account.shop = shop
          where account.role = 'shop';`
  }
  var query_data = await pg_conn.query(shop_query)
  var select_box_string = `<label for="shop">Choose a shop:</label>
    <select name="shop">
    <option value="all">all</option>`;
  for (let i = 0; i < query_data.rows.length; i++) {
    select_box_string += `<option value="${query_data.rows[i].name}">${query_data.rows[i].name}</option>`;
  }
  select_box_string += `</select>`;
  var form_select_box = `
    <form method="POST" action="/findShop"> 
    ${select_box_string}
    <button type="submit"> Search </button>
    </form>`

  return form_select_box;
}
module.exports = viewShop;

