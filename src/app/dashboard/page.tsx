import React from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

const DashboardPage: React.FC = (props) => {
  return (
    <>
      <div className="text-4xl">
        <h1>I am a dashboard</h1>
        <LogoutLink className="px-4 text-lg mt-4 py-2 rounded-lg text-white bg-blue-700 cursor-pointer">
          Log out
        </LogoutLink>
      </div>
    </>
  );
};

export default DashboardPage;
