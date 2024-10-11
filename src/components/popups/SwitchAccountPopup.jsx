import React, { useState } from 'react';
import Overlay from '../Overlay';
import { truncateText } from '../../utils/truncateText';

const SwitchAccountPopup = ({ isOpen, onClose }) => {
  const [showMoreBusinesses, setShowMoreBusinesses] = useState(false);

  const handleAddBusinessClick = () => {
    setShowMoreBusinesses(!showMoreBusinesses);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <Overlay onClick={onClose} />

      {/* Switch Account Popup */}
      <div className="absolute top-28 right-2 md:right-5 w-64 bg-white rounded-lg shadow-lg z-50 p-4">
        {/* Main Business - Vance Refrigeration */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 border border-purple-300 rounded-full"></div>
          <div>
            <span className="text-gray-800 font-medium">
              Vance Refrigeration
            </span>
            <p className="text-green-600 text-sm">Logged in</p>
          </div>
        </div>

        {/* Additional Businesses */}
        {showMoreBusinesses && (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 border border-purple-300 rounded-full"></div>
              <span className="text-gray-800 font-medium">
                Dunder Mifflin Co.
              </span>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 border border-purple-300 rounded-full"></div>
              <span className="text-gray-800 font-medium">
                {truncateText('The Michael Scott Publishing Co.', 17)}
              </span>
            </div>
          </>
        )}

        {/* Add Business Button */}
        <button
          className="w-full py-2 border border-purple-500 text-purple-500 rounded-lg text-sm hover:bg-purple-50"
          onClick={handleAddBusinessClick}
        >
          + Add business
        </button>
      </div>
    </>
  );
};

export default SwitchAccountPopup;
