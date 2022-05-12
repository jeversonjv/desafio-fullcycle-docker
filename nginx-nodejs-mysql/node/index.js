const express = require('express');
const mysql = require('mysql');
const faker = require('faker');

const app = express();
const port = 3000;

const conn = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "challenge"
});

const createTable = async () => {
  return new Promise((resolve, reject) => {
    const sql = `
      CREATE TABLE IF NOT EXISTS people (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL
      );
    `;
    conn.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const createPerson = async () => {
  return new Promise((resolve, reject) => {
	  const name = faker.name.findName().replace(/\'/g, "");
    const sql = `
      INSERT INTO people (name) VALUES ('${name}');
    `;
    conn.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const getPeople = async () => {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT * FROM people ORDER BY id desc;
    `;
    conn.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

conn.connect(async (err) => {
  if (err) throw err;

  await createTable();

  app.get('/', async (req, res) => {
    await createPerson();

    const people = await getPeople();

    const html = `
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${people.map(person => `<li>${person.name}</li>`).join('')}
      </ul>
    `;

    res.send(html);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

