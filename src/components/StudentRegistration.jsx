import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Redirect to success page
        navigate('/registration-success');
      } catch (error) {
        console.error('Submission error:', error);
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Student Registration Form</h2>
            <p className="mt-2 text-gray-600">Please fill in all the required information</p>
          </div>

          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{errors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.fullName ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {renderError('fullName')}
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.dob ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {renderError('dob')}
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender *
              </label>
              <select
                name="gender"
                id="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.gender ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {renderError('gender')}
            </div>

            {/* Class/Grade */}
            <div>
              <label htmlFor="classGrade" className="block text-sm font-medium text-gray-700">
                Class/Grade *
              </label>
              <input
                type="text"
                name="classGrade"
                id="classGrade"
                required
                value={formData.classGrade}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.classGrade ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {renderError('classGrade')}
            </div>

            {/* Home Address */}
            <div>
              <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
                Home Address *
              </label>
              <textarea
                name="homeAddress"
                id="homeAddress"
                required
                value={formData.homeAddress}
                onChange={handleChange}
                rows={3}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.homeAddress ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {renderError('homeAddress')}
            </div>

            {/* Phone Numbers */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
                  Parent's Phone Number *
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  id="parentPhone"
                  required
                  value={formData.parentPhone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.parentPhone ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {renderError('parentPhone')}
              </div>
              <div>
                <label htmlFor="personalPhone" className="block text-sm font-medium text-gray-700">
                  Personal Phone Number (if any)
                </label>
                <input
                  type="tel"
                  name="personalPhone"
                  id="personalPhone"
                  value={formData.personalPhone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.personalPhone ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {renderError('personalPhone')}
              </div>
            </div>

            {/* School Name */}
            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">
                School Name *
              </label>
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                required
                value={formData.schoolName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.schoolName ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {renderError('schoolName')}
            </div>

            {/* Course Option */}
            <div>
              <label htmlFor="courseOption" className="block text-sm font-medium text-gray-700">
                Course Option *
              </label>
              <select
                name="courseOption"
                id="courseOption"
                required
                value={formData.courseOption}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors.courseOption ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select Course</option>
                <option value="course1">Course 1 - AI + IoT + Robotics</option>
                <option value="course2">Course 2 - Drone Tech + Aero Modelling</option>
                <option value="both">Both Courses</option>
              </select>
              {renderError('courseOption')}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration; 