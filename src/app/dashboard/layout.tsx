import Link from 'next/link';
import React from 'react';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const layout = (props: DashboardLayoutProps) => {
  return (
    <div>
      <nav className="bg-black flex text-white py-4 px-5  justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="flex">
        <div className="h-screen bg-black w-[15vw] text-white text-2xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <Link href={'/dashboard/todos'}>Todos</Link>
            </li>
            <li>
              <Link href={'/dashboard/users'}>users</Link>
            </li>
            <li>
              <Link href={'/dashboard/profile'}>Profile</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-6 max-h-screen overflow-scroll">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default layout;
