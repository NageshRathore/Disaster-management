// pages/dashboard/disasters.js
import DashboardLayout from '../../components/DashboardLayout';
import React from 'react';

const Disasters = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Recent Disasters in India</h1>
        <div className="mb-4">
          <img src="/cyclone.jpg" alt="Cyclone Mocha" className="w-full mb-4" />
          <p>
            <strong>Cyclone Mocha</strong> (2023) is one of the most recent and powerful cyclones that affected the eastern coast of India. It caused severe damage to infrastructure and homes, and efforts are underway to provide relief and rebuild the affected areas.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold text-red-500 mt-8">Past Disasters</h2>
        <div className="mt-2">
          <h3 className="font-bold text-xl text-red-500">2018 Kerala Floods</h3>
          <img src="/keral.jpg" alt="Kerala Floods" className="w-full mb-4" />
          <p>
            The 2018 Kerala floods were one of the most severe floods in Kerala's history, with hundreds of casualties and thousands displaced. The state experienced unprecedented rainfall, leading to widespread destruction.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold text-red-500 mt-8">Disaster Preparedness Tips</h2>
        <div className="mt-2">
          <h3 className="font-bold text-xl text-red-500">Emergency Kits</h3>
          <p className="mt-2">
            Prepare emergency kits that include essential items like food, water, first aid supplies, important documents, and necessary medications.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Disasters;
