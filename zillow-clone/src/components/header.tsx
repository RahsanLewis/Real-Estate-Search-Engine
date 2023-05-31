import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between items-center py-6 px-4">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/listings" className="hover:text-gray-300 transition-colors duration-200">Buy</a>
                    </li>
                    <li>
                        <a href="/rent" className="hover:text-gray-300 transition-colors duration-200">Rent</a>
                    </li>
                </ul>
            </nav>
            <Link href="/">
              <span className="text-xl font-bold cursor-pointer">Zillow Clone</span>
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/signup" className="hover:text-gray-300 transition-colors duration-200">Sign up</a>
                    </li>
                    <li>
                        <a href="/signin" className="hover:text-gray-300 transition-colors duration-200">Sign in</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
