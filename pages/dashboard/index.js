// pages/dashboard/index.js
import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Disaster Management Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-black">Active Disasters</h2>
          <p className="text-2xl font-bold text-black">3</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-black">Reported Cases</h2>
          <p className="text-2xl font-bold text-black">150</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-black">Emergency Responses</h2>
          <p className="text-2xl font-bold text-black">20</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
