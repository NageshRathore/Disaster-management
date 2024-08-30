import React, { useState } from 'react';

const Volunteer = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        location: '',
        disasterType: '',
        date: '',
        text: '',
        media: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormToggle = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'media' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would handle form submission logic (e.g., send data to an API)
        console.log('Form submitted:', formData);

        setIsSubmitted(true);
        setFormData({
            location: '',
            disasterType: '',
            date: '',
            text: '',
            media: null,
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Volunteer Dashboard</h1>
            <div className="mt-4 p-4 flex space-x-80">
                <p><strong>Name:</strong> Volunteer Name</p>
                <p><strong>Credit Score:</strong> 85</p>
                <p><strong>Level:</strong> Contributor</p>
            </div>
            <button
                onClick={handleFormToggle}
                className="mt-4 p-2 bg-red-500 text-white rounded"
            >
                Register an Incident
            </button>

            {isFormVisible && !isSubmitted && (
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="block w-full mt-1 border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="disasterType" className="block text-sm font-medium">Type of Disaster</label>
                        <select
                            id="disasterType"
                            name="disasterType"
                            value={formData.disasterType}
                            onChange={handleChange}
                            className="block w-full mt-1 border border-gray-300 rounded p-2"
                            required
                        >
                            <option value="">Select a type</option>
                            <option value="Flood">Flood</option>
                            <option value="Earthquake">Earthquake</option>
                            <option value="Fire">Fire</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="block w-full mt-1 border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="text" className="block text-sm font-medium">Description</label>
                        <textarea
                            id="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            className="block w-full mt-1 border border-gray-300 rounded p-2"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="media" className="block text-sm font-medium">Upload Images or Videos</label>
                        <input
                            type="file"
                            id="media"
                            name="media"
                            onChange={handleChange}
                            className="block w-full mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 p-2 bg-green-500 text-white rounded"
                    >
                        Submit
                    </button>
                </form>
            )}

            {isSubmitted && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
                    <p>Thank you for your submission! We will look forward to tackle this problem.</p>
                </div>
            )}

            {/* Recent Incidents Table */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 bg-red-500 text-white text-center"> Some Recent Incidents</h2>
                <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border-b">Location</th>
                            <th className="py-2 px-4 border-b">Disaster Type</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="py-2 px-4 border-b">UP</td>
                            <td className="py-2 px-6 border-b">Flood</td>
                            <td className="py-2 px-7 border-b">2024-08-30</td>
                            <td className="py-2 px-7 border-b">Heavy rainfall causing flooding in area.</td>
                        </tr> 
                        <tr>
                            <td className="py-2 px-4 border-b">Uttrakhand</td>
                            <td className="py-2 px-6 border-b">Flood</td>
                            <td className="py-2 px-7 border-b">2024-08-29</td>
                            <td className="py-2 px-7 border-b">Heavy rainfall causing flooding in area.</td>
                        </tr> 
                        <tr>
                            <td className="py-2 px-4 border-b">Delhi</td>
                            <td className="py-2 px-6 border-b">Earthquake</td>
                            <td className="py-2 px-7 border-b">2024-08-30</td>
                            <td className="py-2 px-7 border-b">Earthquake striked</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            {/* Methods for Self-Protection */}
            <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4 text-center bg-red-600 text-white p-5">Self-Protection Methods</h2>
    <div className="flex flex-wrap gap-8">
        {/* Flood */}
        <div className="w-full  flex items-center">
            <div className="w-full">
                <h3 className="text-lg font-semibold text-red-500">Flood</h3>
                <p>Move to higher ground, avoid walking through water, and stay informed through reliable sources.</p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8">
            <iframe width="460" height="215" src="https://www.youtube.com/embed/43M5mZuzHF8?si=PW3sUsbVxKT05aW2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        {/* Earthquake */}
        <div className="w-full flex items-center">
        <div className="w-full lg:w-1/2">
        <iframe width="460" height="215" src="https://www.youtube.com/embed/BLEPakj1YTY?si=BDtyhG2ZyFdwReuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-8">
                <h3 className="text-lg font-semibold text-red-600">Earthquake</h3>
                <p>Drop to your hands and knees, cover your head and neck, and stay away from windows.</p>
            </div>
           
        </div>

        {/* Add more items as needed */}
    </div>
</div>

        </div>
    );
};

export default Volunteer;
