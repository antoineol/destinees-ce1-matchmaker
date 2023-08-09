'use client';

import { NoSSR } from '@/app/admin/utils/NoSSR';
import { useIsAuthenticated } from '@/app/admin/utils/auth';
import type { PropsWithChildren } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import type { User } from './utils';
import { users, normalizeSearchTerm, normalizeUserFields } from './utils';
import { useRouter } from 'next/navigation';

const UsersPage = () => {
  const isAuth = useIsAuthenticated();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(
    () =>
      users.filter(user => {
        if (!searchTerm) return true;
        const normalizedSearchTerm = normalizeSearchTerm(searchTerm);
        const normalizedUserFields = normalizeUserFields(user);

        return Object.values(normalizedUserFields).some(field =>
          field.includes(normalizedSearchTerm),
        );
      }),
    [searchTerm],
  );

  return (
    <NoSSR>
      {!isAuth ? null : (
        <div className="flex-1 flex my-4 items-start justify-center max-w-full">
          <div className="bg-white p-8 rounded shadow-md max-w-full">
            <h2 className="text-2xl mb-4">Users</h2>

            <input
              type="text"
              className="mb-4 p-2 border rounded w-full"
              placeholder="Search users..."
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />

            <div className="overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr className="border-b border-slate-300">
                    <Th>ID</Th>
                    <Th>First name</Th>
                    <Th>Last name</Th>
                    <Th>Birth date</Th>
                    <Th>Email</Th>
                    <Th>Password</Th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <Row key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </NoSSR>
  );
};

export default UsersPage;

function Row({ user }: { user: User }) {
  const { id, firstName, lastName, dateOfBirth, email, password } = user;
  const { push } = useRouter();

  const navToUser = useCallback(() => {
    push(`/admin/dashboard/users/${id}`);
  }, [id, push]);
  return (
    <tr
      key={id}
      className="border-b border-slate-300 hover:bg-slate-100 cursor-pointer"
      onClick={navToUser}
    >
      <Td>{id}</Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{dateOfBirth}</Td>
      <Td>{email}</Td>
      <Td>{password}</Td>
    </tr>
  );
}

function Th({ children }: PropsWithChildren) {
  return <th className="py-1 px-2 text-left bg-slate-100">{children}</th>;
}

function Td({ children }: PropsWithChildren) {
  return <td className="py-1 px-2 max-w-xs truncate">{children}</td>;
}
