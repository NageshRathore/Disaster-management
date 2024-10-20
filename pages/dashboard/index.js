import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import NewsDashboard from '../../components/NewsDashboard'; 
import { useState, useEffect } from 'react';

const Dashboard = () => {

  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);

      try {
        const response = await fetch('/api/getTweets?keyword=earthquake&startTime=2024-01-01T00:00:00Z&endTime=2024-01-10T00:00:00Z');
        const data = await response.json();
        setTweets(data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }

      setLoading(false);
    };

    fetchTweets();
  }, []);

  if (loading) {
    return <p>Loading tweets...</p>;
  }

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4 text-red-600">Welcome to the Disaster Management Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-red-600">Active Disasters</h2>
          <p className="text-2xl font-bold text-black">5</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-red-600">Reported Cases</h2>
          <p className="text-2xl font-bold text-black">150</p>
        </div>
        <div className="bg-white p-5 shadow-md rounded">
          <h2 className="text-lg font-semibold text-red-600">Emergency Responses</h2>
          <p className="text-2xl font-bold text-black">10</p>
        </div>
      </div>
      

      <div>
      <h1>Disaster Tweets Dashboard</h1>

      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.text}</p>
          </div>
        ))
      ) : (
        <p>No tweets found.</p>
      )}
    </div>
      {/* <NewsDashboard /> */}

    </DashboardLayout>
  );
};

export default Dashboard;
