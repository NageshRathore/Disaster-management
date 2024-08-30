import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-red-600 bg-slate-400 body-font">
      <div className="container px-5 py-18 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Tagline Section */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="/logo.jpg"
              className="w-30 h-30 text-white p-2 rounded-full"
              alt="Logo"
            />
          </a>
          <p className="mt-2 text-sm text-white">Har Samasya Ke Liye Ek Nayi Ummeed</p>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full p-8">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Home</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">About</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/donation" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Donate</a>
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full p-8">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Dashboard</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/reports" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Reports</a>
                </Link>
              </li>
              <li>
                <Link href="/resources" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/disasters" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Disasters</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full p-8">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">External links</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/missingperson" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Missing Person</a>
                </Link>
              </li>
              <li>
                <Link href="/login" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">Volunteer</a>
                </Link>
              </li>
              <li>
                <Link href="/disasters" legacyBehavior>
                  <a className="text-slate-900 hover:text-red-500">News</a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Social Media Icons */}
      <div className="px-5 py-8 mx-auto flex w-full items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src="/logo.jpg"
            className="w-20 h-10 text-white p-2 rounded-full"
            alt="Logo"
          />
          <span className="ml-3 text-xl">UMEED</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Har Samasya Ke Liye Ek Nayi Ummeed
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Social Media Icons */}
          <a className="text-gray-500" href="#">
            {/* Facebook Icon */}
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            {/* Twitter Icon */}
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            {/* Instagram Icon */}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="#">
            {/* LinkedIn Icon */}
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
