import React from 'react';
import { logout } from '../utils/auth';

const Header = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Admin App</h1>
        <button
          onClick={handleLogout}
          className="bg-slate-50 hover:bg-slate-100 text-black py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
