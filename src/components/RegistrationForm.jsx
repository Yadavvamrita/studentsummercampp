import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    gender: '',
    classGrade: '',
    homeAddress: '',
    phoneParent: '',
    phonePersonal: '',
    schoolName: '',
    courseOption: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.dob) newErrors.dob = 'Date of Birth is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.classGrade) newErrors.classGrade = 'Class/Grade is required';
    if (!form.homeAddress) newErrors.homeAddress = 'Home Address is required';
    if (!form.phoneParent) newErrors.phoneParent = 'Parent Phone Number is required';
    if (!form.schoolName) newErrors.schoolName = 'School Name is required';
    if (!form.courseOption) newErrors.courseOption = 'Please select a course option';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 1200);
    // Here you can handle the form submission (e.g., send to backend)
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{
      background: `url('/sec41.jpg') center/cover no-repeat`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0"></div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-xl z-10 relative">
        <h2 className="text-3xl font-bold text-center mb-1">Registration Form</h2>
        <p className="text-center text-gray-500 mb-4 text-base">Fill out the form carefully for registration</p>
        {submitted && <div className="text-green-600 text-center mb-2">Registration submitted successfully!</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Full Name</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="Full Name" />
            {errors.fullName && <div className="text-red-500 text-xs mt-1">{errors.fullName}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base">
              <option value="">Please Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="text-red-500 text-xs mt-1">{errors.gender}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Date of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" />
            {errors.dob && <div className="text-red-500 text-xs mt-1">{errors.dob}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Class / Grade</label>
            <input type="text" name="classGrade" value={form.classGrade} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="Class / Grade" />
            {errors.classGrade && <div className="text-red-500 text-xs mt-1">{errors.classGrade}</div>}
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1 text-base">Home Address</label>
            <input type="text" name="homeAddress" value={form.homeAddress} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="Home Address" />
            {errors.homeAddress && <div className="text-red-500 text-xs mt-1">{errors.homeAddress}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Phone Number (Parent)</label>
            <input type="tel" name="phoneParent" value={form.phoneParent} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="Parent Phone Number" />
            {errors.phoneParent && <div className="text-red-500 text-xs mt-1">{errors.phoneParent}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-base">Phone Number (Personal, if any)</label>
            <input type="tel" name="phonePersonal" value={form.phonePersonal} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="Personal Phone Number" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1 text-base">School Name</label>
            <input type="text" name="schoolName" value={form.schoolName} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base" placeholder="School Name" />
            {errors.schoolName && <div className="text-red-500 text-xs mt-1">{errors.schoolName}</div>}
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1 text-base">Course Option</label>
            <select name="courseOption" value={form.courseOption} onChange={handleChange} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-base">
              <option value="">Please Select</option>
              <option value="AI+IoT+Robotics">Course 1 - AI + IoT + Robotics</option>
              <option value="DroneTech+AeroModelling">Course 2 - Drone Tech + Aero Modelling</option>
              <option value="Both">Both</option>
            </select>
            {errors.courseOption && <div className="text-red-500 text-xs mt-1">{errors.courseOption}</div>}
          </div>
        </div>
        <button type="submit" className="w-32 mx-auto block bg-green-500 hover:bg-green-600 text-white text-base font-bold py-2 rounded-lg transition">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm; 