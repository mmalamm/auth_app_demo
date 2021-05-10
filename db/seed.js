const client = require("./client.js");

// drop users table

async function dropUsersTable() {
  console.log("dropping users table...");
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// create users table

async function createUsersTable() {
  console.log("creating users table...");
  try {
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
      );
    `);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/// createInitialUsers()

// rebuilddb
async function rebuildDb() {
  client.connect();
  try {
    await dropUsersTable();
    await createUsersTable();
  } catch (error) {
    console.error("error rebuilding db !!!!", error);
    throw error;
  }
}

rebuildDb();
