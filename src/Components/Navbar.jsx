import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <nav className="bg-blue-900 text-white p-4 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold transition-colors duration-300">Hijab Store</Link>
        </div>
        <div className="flex items-center">
          <NavLink to="/Home" activeClassName="font-bold" className="mr-4 transition-colors duration-300">Home</NavLink>
          <div className="dropdown inline-block relative" ref={dropdownRef}>
            
            <button className="mr-4 dropdown-toggle transition-colors duration-300" onClick={toggleDropdown}>Account</button>
            <ul className={`dropdown-menu absolute ${dropdownOpen ? 'block' : 'hidden'} text-white-700 pt-1 bg-black rounded-md`}>
              <li className="px-2 py-1 hover:bg-gray-800">
                <Link to="/LoginSignup" onClick={() => setDropdownOpen(false)}>Sign Up / Log In</Link>
              </li>
            </ul>
          </div>
          <NavLink to="/YourOrders" activeClassName="font-bold" className="mr-4 transition-colors duration-300">Your Orders</NavLink>
          <NavLink to="/Cart" activeClassName="font-bold" className="mr-4 transition-colors duration-300">Cart</NavLink>
        </div>
      </div>
    </nav>
  );
}
