const client = require("./client.js");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const getUserByUsername = async (username) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE username = $1;
    `,
      [username]
    );

    if (!user) return null;
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const createUser = async ({ username, password }) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password) VALUES ($1, $2)
      ON CONFLICT (username) DO NOTHING
      RETURNING id username;
    `,
      [username, hashedPassword]
    );

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getUserByUsername,
  createUser,
};
