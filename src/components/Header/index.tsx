import React from 'react';
import logo from '../../assets/logo_haizer.png';
import { Menu } from '../Menu';
// import { Container } from './styles';

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-28 fixed bg-[#fff] z-20 w-screen top-0">
      <a href="https://www.haizerusa.com" className="relative w-1/2">
        <img src={logo} className="max-w-[208px] xs:max-w-[300px]" />
      </a>
      {window.innerWidth < 640 ? (
        <Menu display="mobile" />
      ) : (
        <Menu display="normal" />
      )}
    </header>
  );
};
