// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-2">
            <Link href="/dashboard" legacyBehavior>
              <a className="hover:text-gray-400">Dashboard</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/disasters" legacyBehavior>
              <a className="hover:text-gray-400">Disasters</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/contacts" legacyBehavior>
              <a className="hover:text-gray-400">Emergency Contacts</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/resources" legacyBehavior>
              <a className="hover:text-gray-400">Resources</a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/dashboard/reports" legacyBehavior>
              <a className="hover:text-gray-400">Reports</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
