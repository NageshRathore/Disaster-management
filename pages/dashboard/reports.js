// pages/dashboard/reports.js
import DashboardLayout from '../../components/DashboardLayout';
import React from 'react';

const Reports = () => {
  return (
    <DashboardLayout>
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Disaster Reports</h1>
      <p className="mb-4">
        Access the latest reports and analyses on various disasters and their management in India.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Latest Reports</h2>
      <p className="mt-2">
        View the most recent reports from government agencies, NGOs, and international organizations.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Report Archive</h2>
      <p className="mt-2">
        Search through an archive of past reports, categorized by year, type of disaster, and region.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Submit a Report</h2>
      <p className="mt-2">
        Use the form below to submit your own report or observations related to disasters.
      </p>
    </div>
    </DashboardLayout>
  );
};

export default Reports;
