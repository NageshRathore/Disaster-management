import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-2">
            <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="/disasters" className="hover:text-gray-400">Disasters</a>
          </li>
          <li className="mb-2">
            <a href="/contacts" className="hover:text-gray-400">Emergency Contacts</a>
          </li>
          <li className="mb-2">
            <a href="/resources" className="hover:text-gray-400">Resources</a>
          </li>
          <li className="mb-2">
            <a href="/reports" className="hover:text-gray-400">Reports</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
