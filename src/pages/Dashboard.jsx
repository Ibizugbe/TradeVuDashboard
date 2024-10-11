import React, { useState } from 'react';
import { FaPaperPlane, FaPlusCircle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { PiCopy } from 'react-icons/pi';
import DashboardTransactions from '../components/cards/DashboardTransactions';
import CreateNewDropdown from '../components/popups/CreateNewDropdown';
import { copyToClipboard } from '../utils/copyToClipBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState('NGN');
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [isCreateNewDropdownOpen, setCreateNewDropdownOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState('🇳🇬');
  const accountNumber = '0912873467';

  const currencyFlagMap = {
    NGN: '🇳🇬',
    USD: '🇺🇸',
    EUR: '🇪🇺',
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const toggleCreateNewDropdown = () => {
    setCreateNewDropdownOpen(!isCreateNewDropdownOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setSelectedFlag(currencyFlagMap[currency]);
    setCurrencyDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setCurrencyDropdownOpen(false);
    setCreateNewDropdownOpen(false);
  };

  return (
    <div className="md:p-8 lg:p-10 mt-16 bg-gray-50 min-h-screen relative">
      {/* Toast Container */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      {/* Header Section */}
      <div className="px-4 py-2 pt-8 md:pt-0 md:pb-5 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        {/* Greeting and Overview */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
            Hello Bob,{' '}
            <button onClick={toggleVisibility} className="ml-2 text-gray-400">
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </h1>
          <p className="text-gray-500">
            Overview of your activity in{' '}
            <div className="relative inline-block">
              <button
                className="bg-gray-100 px-2 py-1 rounded-md inline-flex items-center"
                onClick={toggleCurrencyDropdown}
              >
                <span className="mr-1">{selectedFlag}</span> {selectedCurrency}
                <IoMdArrowDropdown className="ml-1" />
              </button>
              {isCurrencyDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    <li
                      onClick={() => selectCurrency('NGN')}
                      className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      🇳🇬 NGN
                    </li>
                    <li
                      onClick={() => selectCurrency('USD')}
                      className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      🇺🇸 USD
                    </li>
                    <li
                      onClick={() => selectCurrency('EUR')}
                      className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      🇪🇺 EUR
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </p>
        </div>

        {/* Action Buttons for Larger Screens */}
        <div className="hidden lg:flex space-x-4">
          <button className="bg-[#EBE4FF] text-[#6F00FF] px-4 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition flex items-center">
            <FaPaperPlane className="mr-2" />
            Send money
          </button>
          <div className="relative">
            <button
              className="bg-[#6F00FF] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-purple-800 transition flex items-center"
              onClick={toggleCreateNewDropdown}
            >
              <FaPlusCircle className="mr-2" />
              Create new
            </button>
            {/* Create New Dropdown */}
            <CreateNewDropdown
              isOpen={isCreateNewDropdownOpen}
              onClose={closeDropdowns}
            />
          </div>
        </div>
      </div>

      {/* Overview Cards - Horizontal Scroll Enabled Across All Screens */}
      <div className="px-4 md:px-0 overflow-x-auto scrollbar-hidden">
        <div className="flex gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex-shrink-0 min-w-[320px] md:min-w-[382px]">
            <h3 className="text-gray-500 text-sm">Your balance</h3>
            <p className="text-3xl font-bold text-gray-800">
              {isVisible ? '₦4,350,000.20' : '••••••••••'}
            </p>
            <p className="text-gray-400 mt-2 text-sm flex items-center">
              {accountNumber}{' '}
              <PiCopy
                className="ml-2 text-[#2C53F2] cursor-pointer"
                title="Copy"
                onClick={() => copyToClipboard(accountNumber)}
              />
              <span className="mx-2">·</span> Sudo Bank
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm relative flex-shrink-0 min-w-[320px] md:min-w-[382px]">
            <h3 className="text-gray-500 text-sm">Active orders</h3>
            <p className="text-3xl font-bold text-gray-800">7</p>
            <p className="text-gray-400 mt-2 text-sm">₦0.00 overdue</p>
            <div className="absolute bottom-6 right-6 flex space-x-1">
              <span className="h-2 w-2 rounded-full bg-purple-600"></span>
              <span className="h-2 w-2 rounded-full bg-gray-300"></span>
              <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex-shrink-0 min-w-[320px] md:min-w-[382px]">
            <h3 className="text-gray-500 text-sm">Active loans</h3>
            <p className="text-3xl font-bold text-gray-800">10</p>
            <p className="text-gray-400 mt-2 text-sm">2 pending payment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex-shrink-0 min-w-[320px] md:min-w-[382px]">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-sm">Unpaid invoices</h3>
              <button className="text-gray-500 hover:text-gray-700 text-sm">
                All time <IoMdArrowDropdown className="inline" />
              </button>
            </div>
            <p className="text-3xl font-bold text-gray-800">2</p>
            <p className="text-gray-400 mt-2 text-sm">₦720,000.00 overdue</p>
          </div>
        </div>
      </div>

      {/* Action Buttons for Mobile */}
      <div className="flex lg:hidden gap-2 px-4 pb-8">
        <button className="bg-[#EBE4FF] w-1/2 text-[#6F00FF] px-4 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition flex items-center justify-center">
          <FaPaperPlane className="mr-2" />
          Send money
        </button>
        <button
          className="bg-[#6F00FF] w-1/2 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-purple-800 transition flex items-center justify-center relative"
          onClick={toggleCreateNewDropdown}
        >
          <FaPlusCircle className="mr-2" />
          Create new
        </button>
      </div>

      {/* Main Content */}
      <DashboardTransactions />
    </div>
  );
};

export default Dashboard;
