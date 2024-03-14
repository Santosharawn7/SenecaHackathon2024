import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Collapsible({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-xl">
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer space-x-2 hover:text-gray-700 hover:bg-white text-black ${isOpen ? 'open' : ''}`}
        onClick={toggleOpen}
      >
        {isOpen ? <ArrowDropDownIcon fontSize="small" /> : <ArrowRightIcon fontSize="small" />}
        <span className="md:text-[0.9rem] text-[0.5rem] flex-grow">{header}</span>
      </div>
      {isOpen && <div className="md:text-[0.7rem] text-black font-gotham">{children}</div>}
    </div>
  );
}

export default Collapsible;