import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ButtonStore = () => {
  const themeLocal = useState(localStorage.getItem("theme"));
  const theme = themeLocal[0];
  const { t, i18n } = useTranslation();

  const textColor = theme === "dark" ? "#ECECEC" : "#2b2b2b";

  return (
    <Link
      to={"/createstore"}
      className="flex flex-col hover:shadow-lg active:translate-y-[5%] cursor-pointer items-center justify-center text-center border border-gray-300 rounded-lg shadow-md p-6"
      style={{ width: "300px", height: "200px" }}
    >
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-lg flex items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          />
        </svg>
        <span>{t('confirmation.store')}</span>
      </button>
      <p
        className="text-gray-600 mt-2 text-center"
        style={{ color: textColor }}
      >
        {t('confirmation.storeDetail')}
      </p>
    </Link>
  );
};
