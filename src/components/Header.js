import React, { useState, useEffect, useRef } from 'react';

const Header = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setOpenSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <header className=" sticky font-poppins p-4 bg-transparent inset-0 backdrop-blur-lg rounded-md shadow-slate-500 flex flex-row space-x-10 justify-start items-center " >
      <div className="text-2xl font-bold cursor-pointer text-white">Campus<span className='text-slate-300'>Connect</span></div>
      
      <div className="hidden md:flex space-x-10 text-black ">
        <button className=' text-white p-2 rounded hover:bg-white hover:text-black' onClick={() => setView('grid')}>Grid View</button>
        <button className=' text-white p-2 rounded hover:bg-white hover:text-black' onClick={() => setView('tile')}>Tile View</button>
      </div>
      
      <div className="absolute right-4 text-2xl">
        <button onClick={handleHamburgerClick}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"/></svg></button>
      </div>
      
      {isOpen && (
        <div ref={menuRef} className="absolute top-full right-4 mt-2 bg-indigo-900 text-white rounded-lg shadow-lg w-1/4">
          <ul>
            <li className="p-2 hover:bg-gray-900 cursor-pointer flex items-center justify-between">Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></svg></li>
            <li 
              className="p-2 hover:bg-gray-900 cursor-pointer"
              onClick={() => handleMenuItemClick(1)}
            >
               <span className='flex items-center justify-between'>Views <svg className='' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5"/></svg></span>
              {openSubMenu === 1 && (
                <ul className="ml-4 mt-1">
                  <li className="p-1 hover:underline cursor-pointer" onClick={() => setView('grid')}>Grid view</li>
                  <li className="p-1 hover:underline cursor-pointer" onClick={() => setView('tile')}>Tile View</li>
                </ul>
              )}
            </li>
            <li 
              className="p-2 hover:bg-gray-900 cursor-pointer"
              onClick={() => handleMenuItemClick(2)}
            >
               <span className='flex items-center justify-between'>Profile <svg className='' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5"/></svg></span>
              {openSubMenu === 2 && (
                <ul className="ml-4 mt-1">
                  <li className="p-1 hover:underline cursor-pointer">Edit profile</li>
                  <li className="p-1 hover:underline cursor-pointer">View Profile</li>
                </ul>
              )}
            </li>
            <li className="p-2 hover:bg-gray-900 cursor-pointer flex items-center justify-between">Settings <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg></span> </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
