import React, { useState,useEffect,useRef } from "react";

const Language = () => {
  const [lang, setLang] = useState(`English`);
  const [isDropDown, setIsDropDown] = useState(false);
  const dropdownRef = useRef(null);


  const handleLanguageChange = (language) => {
    setLang(language)
    setIsDropDown(false)
  }

  useEffect(() => {
    // Function to handle clicks outside of dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false)
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Unbind the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative" >
      <div className="flex items-center gap-1 cursor-pointer" onClick={()=>setIsDropDown(!isDropDown)}>
        <svg
          height="17"
          viewBox="0 0 20 20"
          width="17"
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
            fill="#5E5E5E"
            fillRule="evenodd"
          ></path>
        </svg>
        <span className="text-xs">{lang}</span>
        <button className="h-full font-thin text-black hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isDropDown && (
        <div className="absolute start-5 z-10 mt-2 py-2 rounded-md border border-gray-100 bg-white shadow-lg flex flex-col ">
          <span
            onClick={() => handleLanguageChange(`English`)}
            className="cursor-pointer leading-9 font-thin l text-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 py-2 px-6"
          >
            English
          </span>
          <span
            onClick={() => handleLanguageChange(`Español`)}
            className="cursor-pointer leading-9 text-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 py-2 px-6"
          >
            Español
          </span>
        </div>
      )}
    </div>
  );
};

export default Language;
