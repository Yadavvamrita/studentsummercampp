import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for registering for our Summer Camp 2025!
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <p className="text-green-800">
              We have received your registration. You will receive a confirmation email shortly with further details.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              For any queries, please contact us at:
              <br />
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 font-medium">
                +1234567890
              </a>
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess; 