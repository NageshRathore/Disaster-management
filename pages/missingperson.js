import Head from "next/head";
import { useState } from 'react';

export default function MissingPerson() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    time: '',
    place: '',
    about: '',
    image: null,
    id: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    
    // Reset the form fields
    setFormData({
      name: '',
      age: '',
      location: '',
      time: '',
      place: '',
      about: '',
      image: null,
      id: ''
    });
    
    setSubmitted(true);

    // Optionally, reset the submission message after a delay
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Report Missing Person</title>
        <meta name="description" content="Report a missing person and provide details for assistance." />
      </Head>

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Report a Missing Person</h1>
          <p className="text-lg mt-4">Please provide all necessary details to help us assist in locating the missing person.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Missing Person Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location of Incident</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time of Incident</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place of Incident</label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">About (Description)</label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID (if available)</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </form>
          {submitted && (
            <div className="mt-6 text-center text-green-600">
              <p className="text-lg font-semibold">Thank you! Your report has been submitted successfully.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
