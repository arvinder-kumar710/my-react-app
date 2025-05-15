import db from '../db.js';

export const findUserByEmailAndPassword = async (email, password) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password]
  );
  return rows[0];
};
