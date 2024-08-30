import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage only on the client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
    // Redirect to the login page with the selected role as a query parameter
    router.push(`/login?role=${role}`);
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token'); // Remove the token
    }
    setIsLoggedIn(false);
    router.push('/login'); // Redirect to the login page
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-red-700">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.jpg" className="w-20 h-10 text-white p-2 rounded-full" alt="Logo" />
            <span className="ml-3 text-2xl lobster-font">Umeed</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              <a className="mr-5 text-red-500 hover:text-zinc-50">Home</a>
            </Link>
            <Link href="/gallery" legacyBehavior>
              <a className="mr-5 text-slate-900 hover:text-zinc-50">Gallery</a>
            </Link>
            <Link href="/#" legacyBehavior>
              <a className="mr-5 text-slate-900 hover:text-zinc-50">About</a>
            </Link>
            <Link href="/dashboard" legacyBehavior>
              <a className="mr-5 text-slate-900 hover:text-zinc-50">Dashboard</a>
            </Link>
            <Link href="/missingperson" legacyBehavior>
              <a className="mr-5 text-slate-900 hover:text-zinc-50">Missing Person</a>
            </Link>
            <Link href="/donation" legacyBehavior>
              <a className="mr-5 text-slate-900 hover:text-zinc-50">Donate</a>
            </Link>
          </nav>
          <div className="relative">
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            ) : (
              <div>
                <button
                  onClick={handleDropdownToggle}
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <button
                      onClick={() => handleRoleSelect('Volunteer')}
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                    >
                      Volunteer
                    </button>
                    <button
                      onClick={() => handleRoleSelect('Admin')}
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handleRoleSelect('General User')}
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                    >
                      General User
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

    </div>
  );
};

export default Navbar;
