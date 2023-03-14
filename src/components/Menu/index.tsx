import React, { useState, useEffect } from 'react';
import type { MenuProps as MenuAntProps } from 'antd';
import { Button, Menu as MenuAnt } from 'antd';
import { MenuItem } from '../MenuItem';
import { List, X } from 'phosphor-react';
type MenuItem = Required<MenuAntProps>['items'][number];
type MenuProps = {
  display: string;
};
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<MenuItem href="" label="Home" />, '1'),
  getItem(<MenuItem href="products" label="Products" />, '2'),
  getItem(<MenuItem href="be-a-dealer" label="Be a Dealer" />, '4'),
  getItem(<MenuItem href="haizer-where-to-buy" label="Where To Buy" />, '5'),
  getItem(<MenuItem href="haizer-merchandising" label="Merchandising" />, '6'),
  getItem(<MenuItem href="blog" label="Blog" />, '7'),
  getItem(<MenuItem href="faq" label="FAQ" />, '9'),
];

export const Menu = ({ display }: MenuProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (display != 'normal') {
      setMenuItems(
        [
          ...menuItems,
          getItem(<MenuItem href="about-us" label="About Us" />, '3'),
          getItem(
            <MenuItem href="haizer-contact-us" label="Contact Us" />,
            '8'
          ),
        ].sort((a, b) => a?.key - b?.key)
      );
    }
  }, []);
  return (
    <>
      <div
        className={
          'flex mr-8 ' +
          (display != 'normal'
            ? 'flex-col self-start ' + (!collapsed ? ' mt-9' : 'mt-9')
            : 'w-full gap-4 items-center justify-end')
        }
      >
        {display == 'normal' && (
          <>
            <MenuItem href="be-a-dealer" label="be a dealer" />
            <MenuItem href="haizer-contact-us" label="Contact Us" />
          </>
        )}
        <div
          className={
            'flex flex-col ' +
            (display == 'normal' && collapsed ? 'mt-96' : 'w-fit')
          }
        >
          <button
            onClick={toggleCollapsed}
            className={
              display != 'normal'
                ? 'self-end ' + (collapsed ? 'mr-8' : '')
                : 'self-end px-5'
            }
          >
            {!collapsed ? <List size={32} /> : <X size={32} />}
          </button>
          <ul
            className={
              !collapsed
                ? 'hidden'
                : 'bg-menu-gradient gap-1 w-full rounded-lg shadow-md h-full'
            }
          >
            {menuItems.map((item) => (
              <li key={item?.key} className="px-6 py-4 hover:bg-zinc-100">
                {item?.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
