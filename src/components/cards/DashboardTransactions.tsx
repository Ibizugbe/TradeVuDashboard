import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const DashboardTransactions = () => {
  return (
    <div className="p-0  pb-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent transactions
          </h2>
          <button className="bg-[#EAECF0] px-3 py-2 rounded-md text-[#344054] hover:text-gray-700 flex items-center">
            Print <span className="hidden pl-1 md:flex">statement</span>{' '}
            <IoMdArrowDropdown className="ml-1" />
          </button>
        </div>
        <ul className="space-y-4">
          {/* Transaction Items */}
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-xs lg:text-sm text-gray-500">Today</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">To Emina Odette</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  7:18 AM · <span className="text-yellow-500">Pending</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-semibold">- ₦10,000.00</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  ₦4,350,000.20
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-xs lg:text-sm text-gray-500">Yesterday</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  To Archibald Holdings
                </p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  7:18 AM · <span className="text-green-500">Completed</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-semibold">- ₦65,000.00</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  ₦4,350,000.20
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-xs lg:text-sm text-gray-500">Fri 19 Jul</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">To Bass Industries</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  7:18 AM · <span className="text-red-500">Failed</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-semibold">- ₦10,000.00</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  ₦4,415,000.20
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-gray-200" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  From S&B Incorporated
                </p>
                <p className="text-gray-500 text-xs lg:text-sm">7:18 AM</p>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold">+ ₦190,000.00</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  ₦4,415,000.20
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-gray-200" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">To Humphrey & Co.</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  7:18 AM · <span className="text-green-500">Completed</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-red-500 font-semibold">- ₦30,000.00</p>
                <p className="text-gray-500 text-xs lg:text-sm">
                  ₦4,225,000.20
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-4 text-center">
          <a href="#" className="text-purple-600 font-medium hover:underline">
            View full transaction history
          </a>
        </div>
      </div>

      {/* Pending Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Pending actions{' '}
            <span className="bg-[#EAECF0] text-[#344054] text-xs rounded-full py-2 px-3 ml-1">
              4
            </span>
          </h2>
          <div className="flex items-center gap-4">
            Filter
            <button className="bg-[#EAECF0] px-3 md:py-2 py-1 rounded-md text-[#344054] hover:text-gray-700 flex items-center">
              All <IoMdArrowDropdown className="ml-1" />
            </button>
          </div>
        </div>
        <ul className="space-y-4 pt-4">
          {/* Pending Action Items */}
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-sm text-gray-500">Today</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="grid md:flex gap-2 justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  You've received an offer of ₦3,000,000
                </p>
                <p className="text-gray-500 text-sm">
                  Invoice Factoring · Moetown Purchase Order
                </p>
              </div>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Review offer
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-sm text-gray-500">Yesterday</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="grid md:flex gap-2 justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  You've received a quote of ₦1,000,000
                </p>
                <p className="text-gray-500 text-sm">
                  Velcro Packaging · Bass Industries
                </p>
              </div>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Review quote
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <h3 className="text-sm text-gray-500">Fri 19 Jul</h3>
              <hr className="flex-grow border-gray-200 ml-3" />
            </div>
            <div className="grid md:flex gap-2 justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  Your shipment TPO-14 is pending{' '}
                  <span className="font-semibold">confirmation</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Trucking · Tradevu Commerce
                </p>
              </div>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Review shipment
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-gray-200" />
            </div>
            <div className="grid md:flex gap-2 justify-between items-center">
              <div>
                <p className="text-gray-800 font-medium">
                  Your repayment of ₦280,000 is due
                </p>
                <p className="text-gray-500 text-sm">
                  Working Capital · Maersk Haulage
                </p>
              </div>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Make payment
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardTransactions;
