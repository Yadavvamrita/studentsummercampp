import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const HostCamp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    organizationName: '',
    organizationType: '',
    otherType: '',
    address: '',
    city: '',
    pinCode: '',
    preferredDuration: '',
    startDate: '',
    timeSlot: '',
    expectedStudents: '',
    availableSpace: '',
    powerSupply: '',
    furnitureAvailable: '',
    demoWorkshop: '',
    specificExpectations: '',
    heardFrom: '',
    otherSource: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "hostCampRequests"), formData);
      navigate('/registration-success');
    } catch (error) {
      // handle error (show message, etc.)
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center overflow-hidden relative" style={{ background: `url('/kids-sunset.jpg') center/cover no-repeat` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="bg-white shadow-xl rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Host the DreamAdvance Summer Camp in Your Society or School!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              DreamAdvance by CoGrad (as seen on Shark Tank India) brings cutting-edge STEM workshops — like Drone Tech, Robotics, AI, Space Tech & more — to your doorstep!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Organizer Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Section 1: Organizer Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name of Contact Person</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Name of Society/School</label>
                  <input
                    type="text"
                    name="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <div className="space-y-2">
                    {['Residential Society', 'School (Private)', 'School (Government)', 'Other'].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="organizationType"
                          value={type}
                          checked={formData.organizationType === type}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.organizationType === 'Other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Please specify</label>
                    <input
                      type="text"
                      name="otherType"
                      value={formData.otherType}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Location (Full Address)</label>
                  <textarea
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      required
                      value={formData.pinCode}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Logistics & Preferences */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Section 2: Logistics & Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Camp Duration</label>
                  <div className="space-y-2">
                    {['7 Days', '14 Days', '28 Days'].map((duration) => (
                      <label key={duration} className="flex items-center">
                        <input
                          type="radio"
                          name="preferredDuration"
                          value={duration}
                          checked={formData.preferredDuration === duration}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Tentative Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                  <div className="space-y-2">
                    {[
                      'Morning (9 AM – 12 PM)',
                      'Afternoon (1 PM – 4 PM)',
                      'Evening (5 PM – 8 PM)'
                    ].map((slot) => (
                      <label key={slot} className="flex items-center">
                        <input
                          type="radio"
                          name="timeSlot"
                          value={slot}
                          checked={formData.timeSlot === slot}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Expected Number of Students</label>
                  <input
                    type="number"
                    name="expectedStudents"
                    required
                    value={formData.expectedStudents}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Available Space for Workshop Setup (Indoor/Outdoor?)</label>
                  <input
                    type="text"
                    name="availableSpace"
                    required
                    value={formData.availableSpace}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Power Supply Available?</label>
                  <div className="space-x-4">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="powerSupply"
                          value={option}
                          checked={formData.powerSupply === option}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Do you have tables/chairs available for student use?</label>
                  <div className="space-x-4">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="furnitureAvailable"
                          value={option}
                          checked={formData.furnitureAvailable === option}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Would you like to include a demo workshop before final booking?</label>
                  <div className="space-x-4">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="demoWorkshop"
                          value={option}
                          checked={formData.demoWorkshop === option}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Final Notes */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Section 3: Final Notes</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Any specific expectations or topics of interest?</label>
                  <textarea
                    name="specificExpectations"
                    value={formData.specificExpectations}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about DreamAdvance?</label>
                  <div className="space-y-2">
                    {[
                      'Instagram',
                      'Facebook',
                      'Newspaper',
                      'Word of Mouth',
                      'Shark Tank India',
                      'Other'
                    ].map((source) => (
                      <label key={source} className="flex items-center">
                        <input
                          type="radio"
                          name="heardFrom"
                          value={source}
                          checked={formData.heardFrom === source}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.heardFrom === 'Other' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Please specify</label>
                    <input
                      type="text"
                      name="otherSource"
                      value={formData.otherSource}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium"
              >
                Submit Request
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600 border-t pt-6">
            <p>We will get in touch within 24 hours to finalize the details.</p>
            <p className="mt-2">
              For any queries, reach us at{' '}
              <a href="tel:+919220253001" className="text-blue-600 hover:text-blue-500">
                +91-9220253001
              </a>
              {' '}or email at{' '}
              <a href="mailto:connect@cograd.in" className="text-blue-600 hover:text-blue-500">
                connect@cograd.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCamp; 