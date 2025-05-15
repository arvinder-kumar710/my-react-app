import { findUserByEmailAndPassword } from '../models/loginModel.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmailAndPassword(email, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({
      message: 'Login successful',
      role: user.role,
      name: user.name
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
