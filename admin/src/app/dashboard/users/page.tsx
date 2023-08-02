'use client';

import { NoSSR } from '@/app/utils/NoSSR';
import { useIsAuthenticated } from '@/app/utils/auth';
import React from 'react';

const UsersPage = () => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  const isAuth = useIsAuthenticated();

  return (
    <NoSSR>
      {!isAuth ? null : (
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl mb-4">Users</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">ID</th>
                  <th className="text-left">Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </NoSSR>
  );
};

export default UsersPage;
