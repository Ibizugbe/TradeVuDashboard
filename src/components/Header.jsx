import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import NotificationPopup from './popups/NotificationPopup';
import ProfilePopup from './popups/ProfilePopup';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const closeProfile = () => {
    setProfileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-10 py-5 bg-white border-b shadow-sm z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="TradevuLogo.svg" alt="logo" className="h-6" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="flex items-center gap-3 text-[#6F00FF] font-medium"
        >
          <img src="home.svg" alt="" />
          Dashboard
        </a>
        <a href="#" className="text-gray-700">
          Pay
        </a>
        <a href="#" className="text-gray-700">
          Finance
        </a>
        <a href="#" className="text-gray-700">
          Flex
        </a>
      </nav>

      {/* Notification and User Profile */}
      <div className="flex items-center space-x-5 relative">
        <div className="relative cursor-pointer" onClick={toggleNotification}>
          <img src="notification.svg" alt="notification" className="h-8 w-8" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
        <div
          className="hidden md:flex gap-1 items-center cursor-pointer"
          onClick={toggleProfile}
        >
          <div className="w-8 h-8 border border-purple-300 rounded-full"></div>
          <span className="text-gray-800">Vance Refrigeration</span>
          <MdOutlineKeyboardArrowDown size={28} />
        </div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose size={27} /> : <FaBars size={27} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 pr-10 md:hidden">
          <div className="flex items-center justify-between mb-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src="TradevuLogo.svg" alt="logo" className="h-6" />
            </div>
            {/* Close Button */}
            <button onClick={closeMobileMenu}>
              <MdClose size={32} className="text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col items-end space-y-6">
            <a
              href="#"
              className="flex items-center gap-3 text-[#6F00FF] font-medium"
              onClick={closeMobileMenu}
            >
              <img src="home.svg" alt="" className="h-5" />
              Dashboard
            </a>
            <a href="#" className="text-gray-700" onClick={closeMobileMenu}>
              Pay
            </a>
            <a href="#" className="text-gray-700" onClick={closeMobileMenu}>
              Finance
            </a>
            <a href="#" className="text-gray-700" onClick={closeMobileMenu}>
              Flex
            </a>
            <div className="flex items-center space-x-3 mt-8">
              <div className="w-8 h-8 border border-purple-300 rounded-full"></div>
              <span className="text-gray-800">Vance Refrigeration</span>
              <MdOutlineKeyboardArrowDown size={28} />
            </div>
          </nav>
        </div>
      )}

      {/* Notification Popup */}
      <NotificationPopup
        isOpen={isNotificationOpen}
        onClose={closeNotification}
      />

      {/* Profile Popup */}
      <ProfilePopup isOpen={isProfileOpen} onClose={closeProfile} />
    </header>
  );
};

export default Header;
