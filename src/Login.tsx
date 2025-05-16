import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.role === 'admin') {
          navigate('/dashboard');
        } else {
          setError('Access denied: Not an administrator.');
        }
      } else {
        setError(data.message);
      }
    } catch{
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left Side – Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-gray-500 mb-6">Login to access your travelwise account</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-md p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between mb-4 text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account? <a href="#" className="text-red-500">Sign up</a>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">Or login with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex justify-between space-x-2">
            <button className="border p-2 w-full rounded-md">
              <i className="fab fa-facebook text-blue-600"></i> Facebook
            </button>
            <button className="border p-2 w-full rounded-md">
              <i className="fab fa-google text-red-500"></i> Google
            </button>
            <button className="border p-2 w-full rounded-md">
              <i className="fab fa-apple text-black"></i> Apple
            </button>
          </div>
        </div>

        {/* Right Side – Illustration */}
        <div className="hidden md:block md:w-1/2 flex justify-center items-center">
          <img src="/images/login-illustration.png" alt="Secure Login" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Login;
