import Link from "next/link";
import React from "react";

type User = {
  id: number;
  name: string;
  [key: string]: string | number;
};

type Props = {
  sortOrder: string;
};

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const sorting = (parameter: string) => {
    if (sortOrder === parameter) {
      users.sort((a, b) => {
        if (a[parameter] > b[parameter]) return 1;
        if (a[parameter] < b[parameter]) return -1;
        return 0;
      });
    }
  };
  const users: User[] = await res.json();
  sorting(sortOrder);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
