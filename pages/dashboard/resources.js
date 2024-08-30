// pages/dashboard/resources.js

import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
const Resources = () => {
  return (
    <DashboardLayout>
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Disaster Management Resources</h1>
      <p className="mb-4">
        Explore various resources to help you prepare for and respond to disasters effectively.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Government Resources</h2>
      <p className="mt-2">
        Links to government websites, policies, and guidelines related to disaster management.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">NGO Resources</h2>
      <p className="mt-2">
        Information about NGOs involved in disaster relief and their contact details.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Educational Materials</h2>
      <p className="mt-2">
        Download guides, PDFs, and watch video resources on disaster preparedness and first aid.
      </p>
    </div>
    </DashboardLayout>
  );
};

export default Resources;
