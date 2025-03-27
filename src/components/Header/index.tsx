const Header = () => {
  const headers = [
    {
      id: 1,
      label: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      label: 'Analytics',
      icon: 'analytics'
    },
    {
      id: 3,
      label: 'Revenue',
      icon: 'revenue'
    },
    {
      id: 4,
      label: 'CRM',
      icon: 'crm'
    },
    {
      id: 5,
      label: 'Apps',
      icon: 'apps'
    }
  ];

  return (
    <section className="w-full flex items-center justify-between rounded-full p-3 shadow-md bg-white">
      <img src="/logo.svg" alt="mainstack logo" className="ml-3" />

      <div className="flex items-center gap-10">
        {headers.map((header) => (
          <div key={header.id} className="flex items-center gap-2 text-base">
            <img src={`/headers/${header.icon}-icon.svg`} alt={`${header.label} icon`} />
            <p>{header.label}</p>
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
