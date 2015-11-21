r = require('rethinkdb');

var connection = null;

r.connect( {host: 'localhost', port: 28015, db: 'foodcort'})
.then((conn) => {
  console.log('connection success');
  connection = conn;
  return r.table('User').insert([{email: 'a2323@dfdf.ru', 'password': '12345'}]).run(conn);
})
.then((result) => {
  console.log(result);
  return r.table('User').run(connection)
  .then(function(cursor){
    return cursor.toArray();
  });
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err);
});
