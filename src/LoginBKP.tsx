  import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('john.doe@gmail.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("here",API_BASE_URL);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(API_BASE_URL+'/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.role === 'admin') {
          localStorage.setItem("isAuthenticated", "true");
          navigate('/dashboard');
        } else {
          setError('Access denied: Not an administrator.');
        }
      } else {
        setError(data.message);
      }
    } catch {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-3xl flex w-[90%] max-w-6xl overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 p-10">
          <img src="/logo.png" alt="Logo" className="h-10 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Login to access your travelwise account</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-sm block mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-md p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Don’t have an account? <a href="#" className="text-red-500">Sign up</a>
          </p>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-500 mb-4">Or login with</p>
            <div className="flex justify-center gap-4">
              <button className="border p-2 px-4 rounded-md"><img src="/facebook.svg" alt="Facebook" /></button>
              <button className="border p-2 px-4 rounded-md"><img src="/google.svg" alt="Google" /></button>
              <button className="border p-2 px-4 rounded-md"><img src="/apple.svg" alt="Apple" /></button>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="hidden md:block md:w-1/2 bg-gray-50 p-10 flex items-center justify-center">
          <img
            src="/login-illustration.png"
            alt="Secure Login"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
