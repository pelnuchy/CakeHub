import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavItem from './NavItem';

const Header: React.FC = () => (
  <header className="fixed left-0 right-0 top-0 z-50 flex h-[100px] items-center bg-black px-16 shadow-md">
    <Logo />
    <SearchBar />
    <NavItem />
  </header>
);

export default Header;
