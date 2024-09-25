import React from 'react'
import PrimaryContainer from '../Components/PrimaryContainer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Education = () => {
    return (
        <PrimaryContainer>
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-6">
                <img
                  src="https://your-logo-url.com/logo.png" // Replace with your logo URL
                  alt="nacc"
                  className="h-12"
                />
              </div>
              <form>
                {/* First Name */}
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
                />
      
                {/* Last Name */}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
                />
      
                {/* Role */}
                <div className="relative mb-4">
                  <select className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg appearance-none focus:outline-none">
                    <option>Role</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Guest</option>
                  </select>
                  <ChevronDownIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3" />
                </div>
      
                {/* Chapter */}
                <div className="relative mb-4">
                  <select className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg appearance-none focus:outline-none">
                    <option>Chapter</option>
                    <option>Chapter 1</option>
                    <option>Chapter 2</option>
                    <option>Chapter 3</option>
                  </select>
                  <ChevronDownIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3" />
                </div>
      
                {/* Committee */}
                <div className="relative mb-6">
                  <select className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg appearance-none focus:outline-none">
                    <option>Committee</option>
                    <option>Committee 1</option>
                    <option>Committee 2</option>
                    <option>Committee 3</option>
                  </select>
                  <ChevronDownIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3" />
                </div>
      
                {/* Send Invite Button */}
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white transition-colors duration-300 bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  SEND INVITE
                </button>
              </form>
            </div>
          </div>
          </PrimaryContainer>
    )

}

export default Education;
