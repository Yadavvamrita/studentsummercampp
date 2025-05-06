import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // adjust path if needed
import { collection, addDoc } from 'firebase/firestore';

// Reusable components
const Input = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <select
      {...props}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select an option</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <textarea
      {...props}
      rows={4}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    organization: '',
    type: '',
    address: '',
    cityPin: '',
    duration: '',
    startDate: '',
    timeSlot: '',
    studentCount: '',
    spaceInfo: '',
    power: '',
    furniture: '',
    demo: '',
    expectations: '',
    heardFrom: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "registrations"), form);
      alert("Form submitted successfully!");
      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Host the DreamAdvance Summer Camp!</h1>
        <p className="text-gray-600 mb-6">
          DreamAdvance by CoGrad (as seen on Shark Tank India) brings cutting-edge STEM workshops — like Drone Tech, Robotics, AI, Space Tech & more — to your doorstep! Fill out this form to express interest.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Section 1: Organizer Details */}
          <fieldset className="border border-gray-200 rounded-xl p-6 mb-6">
            <legend className="text-lg font-semibold text-blue-600">Section 1: Organizer Details</legend>
            <Input label="Full Name of Contact Person" name="name" value={form.name} onChange={handleChange} />
            <Input label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />
            <Input label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} />
            <Input label="Name of Society/School" name="organization" value={form.organization} onChange={handleChange} />
            <Select
              label="Type"
              name="type"
              value={form.type}
              onChange={handleChange}
              options={['Residential Society', 'School (Private)', 'School (Government)', 'Other']}
            />
            <Input label="Location (Full Address)" name="address" value={form.address} onChange={handleChange} />
            <Input label="City & Pin Code" name="cityPin" value={form.cityPin} onChange={handleChange} />
          </fieldset>

          {/* Section 2: Logistics & Preferences */}
          <fieldset className="border border-gray-200 rounded-xl p-6 mb-6">
            <legend className="text-lg font-semibold text-blue-600">Section 2: Logistics & Preferences</legend>
            <Select
              label="Preferred Camp Duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              options={['7 Days', '14 Days', '28 Days']}
            />
            <Input label="Tentative Start Date" type="date" name="startDate" value={form.startDate} onChange={handleChange} />
            <Select
              label="Preferred Time Slot"
              name="timeSlot"
              value={form.timeSlot}
              onChange={handleChange}
              options={['Morning (9 AM – 12 PM)', 'Afternoon (1 PM – 4 PM)', 'Evening (5 PM – 8 PM)']}
            />
            <Input label="Expected Number of Students" type="number" name="studentCount" value={form.studentCount} onChange={handleChange} />
            <Input label="Available Space for Workshop Setup (Indoor/Outdoor?)" name="spaceInfo" value={form.spaceInfo} onChange={handleChange} />
            <Select
              label="Power Supply Available?"
              name="power"
              value={form.power}
              onChange={handleChange}
              options={['Yes', 'No']}
            />
            <Select
              label="Tables/Chairs Available?"
              name="furniture"
              value={form.furniture}
              onChange={handleChange}
              options={['Yes', 'No']}
            />
            <Select
              label="Would you like a demo workshop?"
              name="demo"
              value={form.demo}
              onChange={handleChange}
              options={['Yes', 'No']}
            />
          </fieldset>

          {/* Section 3: Final Notes */}
          <fieldset className="border border-gray-200 rounded-xl p-6 mb-6">
            <legend className="text-lg font-semibold text-blue-600">Section 3: Final Notes</legend>
            <TextArea
              label="Any specific expectations or topics of interest?"
              name="expectations"
              value={form.expectations}
              onChange={handleChange}
            />
            <Select
              label="How did you hear about DreamAdvance?"
              name="heardFrom"
              value={form.heardFrom}
              onChange={handleChange}
              options={['Instagram', 'Facebook', 'Newspaper', 'Word of Mouth', 'Shark Tank India', 'Other']}
            />
          </fieldset>

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Submit Registration
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-700">
          We will get in touch within 24 hours to finalize the details. <br />
          For queries, call <strong>+91-9220253001</strong> or email <strong>connect@cograd.in</strong>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
