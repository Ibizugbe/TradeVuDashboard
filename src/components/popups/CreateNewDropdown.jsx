import React from 'react';
import { FiFileText, FiPackage, FiTruck } from 'react-icons/fi';
import Overlay from '../Overlay';

const CreateNewDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <Overlay onClick={onClose} />
      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
        <ul className="p-2">
          <li
            className="px-4 border-b py-3 cursor-pointer hover:bg-gray-100 flex items-center"
            onClick={onClose}
          >
            <FiFileText className="mr-3" />
            New invoice
          </li>
          <li
            className="px-4 py-3 border-b cursor-pointer hover:bg-gray-100 flex items-center"
            onClick={onClose}
          >
            <FiPackage className="mr-3" />
            New order
          </li>
          <li
            className="px-4 py-3 cursor-pointer hover:bg-gray-100 flex items-center"
            onClick={onClose}
          >
            <FiTruck className="mr-3" />
            New shipment
          </li>
        </ul>
      </div>
    </>
  );
};

export default CreateNewDropdown;
