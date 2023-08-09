'use client';

import { NoSSR } from '@/app/admin/utils/NoSSR';
import { useIsAuthenticated } from '@/app/admin/utils/auth';
import { useParams } from 'next/navigation';
import React from 'react';
import { users } from '../utils';
import Link from 'next/link';

const UserPage = () => {
  const isAuth = useIsAuthenticated();
  const { id } = useParams();
  console.log({ id });
  const user = users.find(u => u.id === id);

  return (
    <NoSSR>
      {!isAuth ? null : !user ? (
        <div className="flex-1 flex items-center justify-center">User not found</div>
      ) : (
        <div className="flex-1 flex my-4 items-start justify-center max-w-full">
          <div className="bg-white p-8 rounded shadow-md max-w-full">
            <div className="mb-4">
              <Link href={'/admin/dashboard/users'} className="hover:text-slate-600">
                ← <span className="underline">Back to all users</span>
              </Link>
            </div>
            <h2 className="text-2xl mb-4">Users</h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <strong>ID</strong>
              <div>{user.id}</div>
              <strong>First name</strong>
              <div>{user.firstName}</div>
              <strong>Last name</strong>
              <div>{user.lastName}</div>
              <strong>Birth date</strong>
              <div>{user.dateOfBirth}</div>
              <strong>Email (encrypted)</strong>
              <div>{user.email}</div>
            </div>
            <hr className="my-4" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <strong>Training searched:</strong>
              <div>{user.jobWanted}</div>
              <strong>Status:</strong>
              <div>{user.researchStatus}</div>
            </div>
          </div>
        </div>
      )}
    </NoSSR>
  );
};

export default UserPage;
