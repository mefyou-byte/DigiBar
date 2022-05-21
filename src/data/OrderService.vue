<script>
  import axios from 'axios';

  //jsonbin
  // const JSONBIN_HTTP = axios.create({
  //   baseURL: `https://api.jsonbin.io/b/${process.env.BIN_ID}/`,
  //   headers: {
  //     'secret-key': process.env.JSONBIN_API_TOKEN,
  //     'cache-control': 'no-cache'
  //   }
  // });

  //myjson
  const MYJSON_HTTP = axios.create({
    baseURL: `https://api.myjson.com/bins/${process.env.BIN_ID}`,
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
      return this.read()
        .then(orders => Array.of(...orders, newOrder))
        .then(orders => MYJSON_HTTP.put('', orders))
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
