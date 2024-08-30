// pages/dashboard/emergency-contacts.js
import DashboardLayout from '../../components/DashboardLayout';
import React from 'react';

const EmergencyContacts = () => {
  return (
    <DashboardLayout>
    <div className="min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-6">Emergency Contacts in India</h1>
      <p className="mb-4">
        Quick access to all the essential emergency contact numbers you might need during a disaster.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">National Emergency Contacts</h2>
      <ul className="list-disc ml-8">
        <li>Police: 100</li>
        <li>Fire Brigade: 101</li>
        <li>Ambulance: 102</li>
        <li>Disaster Management: 108</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">State-wise Emergency Contacts</h2>
      <p className="mt-2">
        Select your state to find specific emergency contact numbers for local services.
      </p>
      
      <h2 className="text-2xl font-semibold text-red-500 mt-8">Hospitals and Relief Centers</h2>
      <p className="mt-2">
        Find nearby hospitals and relief centers with their contact details.
      </p>
    </div>
    </DashboardLayout>
  );
};

export default EmergencyContacts;
