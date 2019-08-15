const express = require('express')
const app = express()

app.get('*', function (req, res) {
  console.log('Got request!');
  console.log(req.originalUrl);
  console.log('---');

  res.send({hello: 'hello little potato'});
})

app.post('*', (req, res) => {
  console.log('POST got in!');
  res.send({post: 'post potato'});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
