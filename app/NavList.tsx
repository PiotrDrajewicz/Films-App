'use client';

import Link from "next/link";
import { useState } from "react";

const NavList: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <div className="nav-list">
            <Link href="/" className="nav-item">Movies</Link>
            <Link href="/profile" className="nav-item" onMouseOver={() => setIsDropdownOpen(true)} onMouseOut={() => setIsDropdownOpen(false)}>Library</Link>
            <div className={`sub-links ${isDropdownOpen && 'open'}`}>
              <Link href="/profile" className="nav-item sub-nav-item" onMouseOver={() => setIsDropdownOpen(true)} onMouseOut={() => setIsDropdownOpen(false)}>Favourite</Link>
              <Link href="/rated" className="nav-item sub-nav-item" id="rated-item" onMouseOver={() => setIsDropdownOpen(true)} onMouseOut={() => setIsDropdownOpen(false)}>Rated</Link >
            </div>
        </div>
    )
}

export default NavList;