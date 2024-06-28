import { useState } from "react";
import { OrderAbc } from "../Filter/OrderAbc";
import { OrderPrice } from "../Filter/OrderPrice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SidebarHistory = () => {
  const [expanded, setExpanded] = useState(true);
  const theme = useSelector((state) => state.themes.theme);
  const { t, i18n } = useTranslation();

  const toggleSidebar = () => {
    setExpanded(!expanded); // Alternar el estado de expansiÃ³n
  };

  const orangeColor = theme === "dark" ? "#cd7731" : "#e18336";

  return (
    <div
      className="flex items-start w-64 mt-auto mb-6 fixed z-30"
    >
      {expanded ? (
        <div className="relative flex flex-col transition-all ease-in-out text-gray-100 items-center w-40 h-full overflow-visible bg-orange-400 rounded-lg"
        style={{ backgroundColor: orangeColor }}
        >
          <a
            className="pl-2 w-full mt-3 mb-3 justify-center"
            href="#"
            onClick={toggleSidebar}
          >
            <div className="flex items-center">
            <svg
              className="w-7 h-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="currentColor"
            >
              <path
                d="M12 5.5C12 6.88071 10.8807 8 9.5 8C8.11929 8 7 6.88071 7 5.5M12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5M12 5.5H21M7 5.5H3M19 12C19 13.3807 17.8807 14.5 16.5 14.5C15.1193 14.5 14 13.3807 14 12M19 12C19 10.6193 17.8807 9.5 16.5 9.5C15.1193 9.5 14 10.6193 14 12M19 12H21M14 12H3M10 18.5C10 19.8807 8.88071 21 7.5 21C6.11929 21 5 19.8807 5 18.5M10 18.5C10 17.1193 8.88071 16 7.5 16C6.11929 16 5 17.1193 5 18.5M10 18.5H21M5 18.5H3"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-bolder">{t('sideBar.title')}</span>
            </div>
            <div className="flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                />
            </svg>
            </div>
          </a>
        </div>
      ) : (
        <div className="relative flex flex-col transition-all ease-in-out text-gray-100 items-center w-40 h-full overflow-visible bg-orange-400 rounded-lg"
        style={{ backgroundColor: orangeColor }}
      >
          <a
            className="pl-2 w-full mt-3 justify-center"
            href="#"
            onClick={toggleSidebar}
          >
            <div className="flex items-center">
            <svg
              className="w-7 h-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="currentColor"
            >
              <path
                d="M12 5.5C12 6.88071 10.8807 8 9.5 8C8.11929 8 7 6.88071 7 5.5M12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5M12 5.5H21M7 5.5H3M19 12C19 13.3807 17.8807 14.5 16.5 14.5C15.1193 14.5 14 13.3807 14 12M19 12C19 10.6193 17.8807 9.5 16.5 9.5C15.1193 9.5 14 10.6193 14 12M19 12H21M14 12H3M10 18.5C10 19.8807 8.88071 21 7.5 21C6.11929 21 5 19.8807 5 18.5M10 18.5C10 17.1193 8.88071 16 7.5 16C6.11929 16 5 17.1193 5 18.5M10 18.5H21M5 18.5H3"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-bolder">{t('sideBar.title')}</span>
            </div>
            <div className="flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                />
            </svg>
            </div>
          </a>
          <div className="w-full px-4 py-2">
            <div className="flex flex-col items-center w-full mt-3 border-gray-300">
              <a
                className="flex flex-col w-full items-center mt-2 border-gray-300"
                href="#"
              >
                <OrderAbc />
              </a>
              <a
                className="flex flex-col items-center mt-2 border-gray-300"
                href="#"
              >
                <OrderPrice />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarHistory;
