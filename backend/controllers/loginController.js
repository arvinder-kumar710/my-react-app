// backend/controllers/loginController.js
import { getUserByEmail } from "../models/loginModel.js";

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  getUserByEmail(email, (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "User not found." });
    }

    const user = results[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    res.status(200).json({ message: "Login successful", role: user.role });
  });
};
