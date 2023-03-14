import React from 'react';

// import { Container } from './styles';
type MenuItemProps = {
  href: string;
  label: string;
};

export const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <a
      className="tracking-[3.5px] font-bold text-zinc-800 text-sm  hover:text-orange-500 hover:underline"
      href={'https://haizerusa.com/' + href}
      target="_blank"
    >
      {label.toUpperCase()}
    </a>
  );
};
