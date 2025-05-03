import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    classGrade: '',
    homeAddress: '',
    parentPhone: '',
    personalPhone: '',
    schoolName: '',
    courseOption: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters long';
    }

    // Date of Birth validation
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    } else {
      const dobDate = new Date(formData.dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      if (age < 8 || age > 16) {
        newErrors.dob = 'Age must be between 8 and 16 years';
      }
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.parentPhone) {
      newErrors.parentPhone = 'Parent phone number is required';
    } else if (!phoneRegex.test(formData.parentPhone)) {
      newErrors.parentPhone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.personalPhone && !phoneRegex.test(formData.personalPhone)) {
      newErrors.personalPhone = 'Please enter a valid 10-digit phone number';
    }

    // Class/Grade validation
    if (!formData.classGrade) {
      newErrors.classGrade = 'Class/Grade is required';
    }

    // School Name validation
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }

    // Course Option validation
    if (!formData.courseOption) {
      newErrors.courseOption = 'Please select a course option';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        await addDoc(collection(db, "studentRegistrations"), formData);
        navigate('/registration-success');
      } catch (error) {
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to submit form. Please try again.'
        }));
      }
    }
    setIsSubmitting(false);
  };

  const renderError = (fieldName) => {
    return errors[fieldName] ? (
      <p className="mt-1 text-sm text-red-600">{errors[fieldName]}</p>
    ) : null;
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center overflow-y-auto relative" style={{ background: `url('/sec41.jpg') center/cover no-repeat` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-4 w-full flex flex-col items-center">
          <div className="text-center mb-2">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-1">Registration Form</h2>
            <p className="text-lg text-gray-500 mb-6">Fill out the form carefully for registration</p>
          </div>
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{errors.submit}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 pb-24">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-base font-semibold text-gray-700 mb-1">Full Name</label>
              <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="Full Name" />
              {renderError('fullName')}
            </div>
            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-base font-semibold text-gray-700 mb-1">Gender</label>
              <select name="gender" id="gender" required value={formData.gender} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400">
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {renderError('gender')}
            </div>
            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-base font-semibold text-gray-700 mb-1">Date of Birth</label>
              <input type="date" name="dob" id="dob" required value={formData.dob} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="dd-mm-yyyy" />
              {renderError('dob')}
            </div>
            {/* Class/Grade */}
            <div>
              <label htmlFor="classGrade" className="block text-base font-semibold text-gray-700 mb-1">Class / Grade</label>
              <input type="text" name="classGrade" id="classGrade" required value={formData.classGrade} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="Class / Grade" />
              {renderError('classGrade')}
            </div>
            {/* Home Address */}
            <div className="md:col-span-2">
              <label htmlFor="homeAddress" className="block text-base font-semibold text-gray-700 mb-1">Home Address</label>
              <input type="text" name="homeAddress" id="homeAddress" required value={formData.homeAddress} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="Home Address" />
              {renderError('homeAddress')}
            </div>
            {/* Phone Numbers */}
            <div>
              <label htmlFor="parentPhone" className="block text-base font-semibold text-gray-700 mb-1">Phone Number (Parent)</label>
              <input type="tel" name="parentPhone" id="parentPhone" required value={formData.parentPhone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="Parent Phone Number" />
              {renderError('parentPhone')}
            </div>
            <div>
              <label htmlFor="personalPhone" className="block text-base font-semibold text-gray-700 mb-1">Phone Number (Personal, if any)</label>
              <input type="tel" name="personalPhone" id="personalPhone" value={formData.personalPhone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="Personal Phone Number" />
              {renderError('personalPhone')}
            </div>
            {/* School Name */}
            <div className="md:col-span-2">
              <label htmlFor="schoolName" className="block text-base font-semibold text-gray-700 mb-1">School Name</label>
              <input type="text" name="schoolName" id="schoolName" required value={formData.schoolName} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400" placeholder="School Name" />
              {renderError('schoolName')}
            </div>
            {/* Course Option */}
            <div className="md:col-span-2">
              <label htmlFor="courseOption" className="block text-base font-semibold text-gray-700 mb-1">Course Option</label>
              <select name="courseOption" id="courseOption" required value={formData.courseOption} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:ring-2 focus:ring-blue-400">
                <option value="">Please Select</option>
                <option value="course1">Course 1 - AI + IoT + Robotics</option>
                <option value="course2">Course 2 - Drone Tech + Aero Modelling</option>
                <option value="both">Both Courses</option>
              </select>
              {renderError('courseOption')}
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-4 md:static fixed bottom-0 left-0 w-full bg-white bg-opacity-95 p-2 md:p-0 z-20 md:z-auto border-t md:border-0">
              <button type="submit" disabled={isSubmitting} className="w-full md:w-40 bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 md:py-2 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration; 