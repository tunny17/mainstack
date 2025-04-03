import { Link, useLocation } from 'react-router';

// --- icons import
import CrmIcon from '../Icons/CrmIcon';
import HomeIcon from '../Icons/HomeIcon';
import AppsIcon from '../Icons/AppsIcon';
import RevenueIcon from '../Icons/RevenueIcon';
import AnalyticsIcon from '../Icons/AnalyticsIcon';

// --- types import
import { HeaderItem } from '../../types';

const Header = () => {
  const location = useLocation();

  const headers: HeaderItem[] = [
    {
      id: 1,
      label: 'Home',
      link: '/',
      icon: <HomeIcon isActive={location.pathname === '/'} />
    },
    {
      id: 2,
      label: 'Analytics',
      link: '/analytics',
      icon: <AnalyticsIcon isActive={location.pathname === '/analytics'} />
    },
    {
      id: 3,
      label: 'Revenue',
      link: '/revenue',
      icon: <RevenueIcon isActive={location.pathname === '/revenue'} />
    },
    {
      id: 4,
      label: 'CRM',
      link: '/crm',
      icon: <CrmIcon isActive={location.pathname === '/crm'} />
    },
    {
      id: 5,
      label: 'Apps',
      link: '/apps',
      icon: <AppsIcon isActive={location.pathname === '/apps'} />
    }
  ];

  return (
    <section className="w-full flex items-center justify-between rounded-full p-3 shadow-md bg-white sticky top-4 z-50">
      <img src="/logo.svg" alt="mainstack logo" className="ml-3" />

      <div className="flex items-center gap-10">
        {headers.map((header) => (
          <div
            key={header.id}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full ${
              location.pathname === header.link ? 'text-white bg-black' : 'text-gray-400'
            }`}
          >
            {header.icon}
            <Link to={header.link}>{header.label}</Link>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <button
          className="w-6 hover:scale-110 transition-all duration-300 cursor-pointer"
          type="button"
        >
          <img src="/headers/notification-icon.svg" alt="notifications icon" className="w-full" />
        </button>
        <button
          className="w-6 hover:scale-110 transition-all duration-300 cursor-pointer"
          type="button"
        >
          <img src="/headers/chat-icon.svg" alt="chat icon" className="w-full" />
        </button>

        {/* --- */}

        <div className="flex items-center gap-2 rounded-full p-2 bg-[#EFF1F6]">
          <button className="w-[50%] hover:scale-110 transition-all duration-300" type="button">
            <p className="p-2 text-xs rounded-full bg-black text-white flex items-center justify-center">
              OJ
            </p>
          </button>
          <button
            className="w-[50%] hover:scale-110 transition-all duration-300 cursor-pointer"
            type="button"
          >
            <img src="/headers/menu-icon.svg" alt="" className="w-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
