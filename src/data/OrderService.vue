<script>
  import axios from 'axios';


  //jsonbin
  /*
  const MYJSON_HTTP = axios.create({
 baseURL: `https://api.jsonbin.io/b/${process.env.BIN_ID}/`,
  headers: {
    'secret-key': process.env.JSONBIN_API_TOKEN,
      'cache-control': 'no-cache'
    }
   });
   */

  /*
  const MYJSON_HTTP = axios.create({
    baseURL: `https://api.myjson.com/bins/${process.env.BIN_ID}`,
    timeout: 5000
  });
  */

  const MYJSON_HTTP = axios.create({
    baseURL: `http://localhost:3000/drinks`,
    timeout: 5000
  });

  export default {
    read() {
      return MYJSON_HTTP
        .get()
        .then(response => response.data);
    },
    order(drinkId, name) {
      const newOrder = {id: new Date().valueOf(), drinkId, name, "afgeleverd": false};
      console.log(newOrder); 
      return this.read()
        .then(orders => Array.of(...orders, newOrder))
        .then(orders => MYJSON_HTTP.post('', orders))
    },
    afgeleverd(orderId) {
      return this.read()
        .then(orders => {
          orders.find(order => order.id === orderId).afgeleverd = true;
          return orders;
        })
        .then(orders => MYJSON_HTTP.put('', orders))
    }
  };
</script>
