import React from 'react';
import logo from '../../assets/logo_haizer.png';
import { List, X } from '@phosphor-icons/react';
// import { Container } from './styles';

const handleOpenMenu = () => {
    const menu = document.getElementById('menu_mobile');
    if (menu?.classList.contains('hidden')) {
        menu.classList.add('flex', 'transition', 'ease-in-out', 'delay-150');
        menu.classList.remove('hidden');
    }
};
const handleCloseMenu = () => {
    const menu = document.getElementById('menu_mobile');
    if (menu?.classList.contains('flex')) {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
    }
};

export const Header = () => {
    return (
        <header className="flex items-center justify-around min-w-full h-28 fixed bg-[#fff] z-20">
            <a href="https://www.haizerusa.com" className="w-1/2">
                <img src={logo} className="w-[300px] self-start" />
            </a>
            {/* <nav className="flex items-center justify-between w-1/5 max-w-1/2"> */}
            <a
                className="hidden sm:flex tracking-[3.5px] font-bold text-zinc-800 text-sm whitespace-nowrap  hover:text-orange-500 hover:underline"
                href="https://www.haizerusa.com/be-a-dealer"
                target="_blank"
            >
                BE A DEALER
            </a>
            <a
                className="hidden sm:flex tracking-[3.5px] font-bold text-zinc-800 text-sm whitespace-nowrap hover:text-orange-500 hover:underline"
                href="https://www.haizerusa.com/be-a-dealer"
                target="_blank"
            >
                CONTACT US
            </a>
            <button type="button" onClick={handleOpenMenu}>
                <List className="sm:hidden" size={32} />
            </button>
            <nav
                id="menu_mobile"
                className="bg-zinc-100  absolute left-32 right-0 top-0 hidden flex-col z-50 h-[100vh] sm:hidden pl-8"
            >
                <button
                    type="button"
                    className="self-end pt-8 pr-4"
                    onClick={handleCloseMenu}
                >
                    <X className="sm:hidden" size={32} />
                </button>
                <a
                    className="mt-8 flex tracking-[3.5px] font-bold text-zinc-800 text-sm  hover:text-orange-500 hover:underline"
                    href="https://www.haizerusa.com/be-a-dealer"
                    target="_blank"
                >
                    BE A DEALER
                </a>
                <a
                    className="mt-8 flex tracking-[3.5px] font-bold text-zinc-800 text-sm  hover:text-orange-500 hover:underline"
                    href="https://www.haizerusa.com/be-a-dealer"
                    target="_blank"
                >
                    CONTACT US
                </a>
            </nav>
            {/* </nav> */}
        </header>
    );
};
