import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
