const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'dani',
    password: 'daniadmin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
