import React from 'react';
import logo from '../../assets/logo_haizer.png';
// import { Container } from './styles';

export const Header = () => {
  return (
    <header className="flex items-center justify-around min-w-full h-28 fixed bg-[#fff] z-20">
      <a href="https://www.haizerusa.com" className="w-1/2">
        <img src={logo} className="w-[300px] self-start" />
      </a>
      <div className="flex items-center justify-between w-1/5 max-w-1/2">
        <a
          className="tracking-[3.5px] font-bold text-zinc-800 text-sm  hover:text-orange-500 hover:underline"
          href="https://www.haizerusa.com/be-a-dealer"
          target="_blank"
        >
          BE A DEALER
        </a>
        <a
          className="tracking-[3.5px] font-bold text-zinc-800 text-sm  hover:text-orange-500 hover:underline"
          href="https://www.haizerusa.com/be-a-dealer"
          target="_blank"
        >
          CONTACT US
        </a>
      </div>
    </header>
  );
};
