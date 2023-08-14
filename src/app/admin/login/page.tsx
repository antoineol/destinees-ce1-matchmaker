'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { login } from '../utils/auth';
import Image from 'next/image';
import acmeLogoImg from './acme_Logo_round.webp';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'admin@acme.com' && password === 'j2b9SY_5DQVb!8hnKN4&Mp$WGdUtSB') {
      login(); // Call the login method
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen py-4 flex flex-col items-center justify-center space-y-10 bg-gray-100">
      <Image src={acmeLogoImg} width={200} alt="Acme" />
      <form className="max-w-md w-full bg-white p-8 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label>
            <div className="block mb-1">Username:</div>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="block mb-1">Password:</div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </label>
        </div>
        <button type="submit" className="w-full bg-[#015eb3] text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
