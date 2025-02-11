import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
