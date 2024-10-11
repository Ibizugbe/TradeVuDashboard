import React, { useState } from 'react';
import Overlay from '../Overlay';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const NotificationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const notifications = [
    {
      message: 'S&B Inc. signed the lender’s agreement',
      time: 'Just now',
      isUnread: true,
    },
    {
      message: 'Humphrey & Co. confirmed your purchase order #21',
      time: '04:27 pm',
      isUnread: true,
    },
    {
      message: 'You received $20 from Bass Industries',
      time: 'Yesterday',
      isUnread: false,
    },
    {
      message: 'Archibald Holdings completed payment for Invoice #46',
      time: '09/02/2024',
      isUnread: false,
    },
  ];

  const filteredNotifications = showUnreadOnly
    ? notifications.filter((notification) => notification.isUnread)
    : notifications;

  return (
    <>
      {/* Dark Overlay */}
      <Overlay onClick={onClose} />

      {/* Notification Popup */}
      <div className="absolute top-12 right-5 md:right-10 w-80 md:w-96 bg-white rounded-lg shadow-lg p-4 z-50">
        <div className="flex justify-between items-center pb-4 py-2 mb-2 border-b">
          <h3 className="font-semibold text-gray-800">Notifications</h3>
          <label className="flex items-center">
            <span className="mr-2 text-sm text-gray-500">Unread only</span>
            <Toggle
              checked={showUnreadOnly}
              onChange={() => setShowUnreadOnly(!showUnreadOnly)}
              icons={false}
              className="react-toggle"
            />
          </label>
        </div>
        <ul className="mt-2 space-y-3 py-5">
          {filteredNotifications.map((notification, index) => (
            <li key={index} className="flex flex-col border-b pb-3">
              <div className="flex items-center">
                <span
                  className={`h-2 w-2 rounded-full mr-3 ${
                    notification.isUnread ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span
                  className={`text-sm ${
                    notification.isUnread
                      ? 'font-semibold text-gray-800'
                      : 'text-gray-500'
                  }`}
                >
                  {notification.message}
                </span>
              </div>
              <span className="ml-5 text-xs text-gray-400">
                {notification.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NotificationPopup;
