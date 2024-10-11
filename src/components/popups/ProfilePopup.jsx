import { useState } from 'react';
import Overlay from '../Overlay';
import SwitchAccountPopup from './SwitchAccountPopup';
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const ProfilePopup = ({ isOpen, onClose }) => {
  const [isSwitchAccountOpen, setSwitchAccountOpen] = useState(false);

  const toggleSwitchAccount = () => {
    setSwitchAccountOpen(!isSwitchAccountOpen);
  };

  const closeSwitchAccount = () => {
    setSwitchAccountOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <Overlay onClick={onClose} />

      {/* Profile Popup */}
      <div className="absolute top-12 right-0 md:right-5 w-64 bg-white rounded-lg shadow-lg z-40">
        <ul className="py-2">
          {/* Switch Account */}
          <li
            className="border-b mx-2 rounded-lg px-4 py-2 bg-[#f2f4f7] cursor-pointer"
            onClick={toggleSwitchAccount}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-800 text-sm">
                  Switch account
                </span>
                <p className="text-xs text-gray-500">
                  Access your other businesses
                </p>
              </div>
              <IoMdArrowDropdown size={24} />
              {/* Downward arrow */}
            </div>
          </li>
          {/* Manage Account */}
          <li className="flex items-center px-4 py-4 border-b cursor-pointer hover:bg-gray-100">
            <span className="text-gray-600 mr-3">👤</span>
            <span className="text-gray-800 text-sm">Manage account</span>
          </li>
          {/* Logout */}
          <li className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-100">
            <span className="text-gray-600 mr-3">🚪</span>
            <span className="text-gray-800 text-sm">Logout</span>
          </li>
        </ul>
      </div>

      {/* Nested Switch Account Popup */}
      <SwitchAccountPopup
        isOpen={isSwitchAccountOpen}
        onClose={closeSwitchAccount}
      />
    </>
  );
};

export default ProfilePopup;
