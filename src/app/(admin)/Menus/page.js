"use client"
import { useState } from 'react';
import RegularMenuAdmin from './RegularMenuAdmin';
import HomeMenuAdmin from './HousePartiesAdmin';

const Tabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('profile');

  // Handle click on tab to set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <RegularMenuAdmin />;
      case 'dashboard':
        return <HomeMenuAdmin />;
    }
  };

  return (
    <>
    <div>
      {/* Tab Header */}
      <h1 className="text-2xl text-black underline mb-5 font-bold">Menus</h1>
      <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className={`inline-block py-3 px-5 rounded-lg ${activeTab === 'profile' ? ' bg-black text-white' : 'bg-gray-100 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              onClick={() => handleTabClick('profile')}
            >
              Regular Menu
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-block py-3 px-5 rounded-lg ${activeTab === 'dashboard' ? 'bg-black text-white' : 'bg-gray-100 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              onClick={() => handleTabClick('dashboard')}
              aria-current="page"
            >
              House Parties
            </a>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
    </>
  );
};

export default Tabs;
