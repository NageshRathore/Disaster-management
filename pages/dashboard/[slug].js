// pages/dashboard/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '../../components/DashboardLayout';

const DashboardPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Example fallback content if a page is not found
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4 text-white">Page Not Found</h1>
      <p className="text-white">The page "{slug}" does not exist. Please select a valid option from the sidebar.</p>
    </DashboardLayout>
  );
};

export default DashboardPage;
