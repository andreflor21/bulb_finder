import {
    Buildings,
    Envelope,
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
} from '@phosphor-icons/react';
import React from 'react';
import { List } from '../List';

interface ListItem {
    link: string;
    name: string;
}
// import { Container } from './styles';
const list: ListItem[] = [
    { link: 'https://www.haizerusa.com/products', name: 'PRODUCTS' },
    { link: 'https://www.haizerusa.com/haizer-contact-us', name: 'CONTACT US' },
    {
        link: 'https://www.haizerusa.com/haizer-where-to-buy',
        name: 'WHERE TO BUY',
    },
    { link: 'https://www.haizerusa.com/blog', name: 'BLOG' },
    { link: 'https://www.haizerusa.com/about-us', name: 'ABOUT US' },
    { link: 'https://www.haizerusa.com/be-a-dealer', name: 'BE A DEALER' },
    {
        link: 'https://www.haizerusa.com/haizer-merchandising',
        name: 'MERCHANDISING',
    },
    { link: 'https://www.haizerusa.com/faq', name: 'FAQ' },
];

export const Footer = () => {
    return (
        <footer className="bg-zinc-900 min-w-full min-h-[350px] flex flex-col justify-start">
            <div className="p-4 sm:p-9">
                <div className="flex flex-col gap-y-6 items-center justify-center pt-10">
                    <List list={list} />
                </div>
                <ul className="flex items-start mx-auto justify-center gap-3 mt-7 w-[40%] sm:min-w-[60%]">
                    <a
                        href="https://www.instagram.com/haizer_usa/"
                        target="_blank"
                    >
                        <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
                            <InstagramLogo
                                className="fill-zinc-900"
                                size={24}
                            />
                        </li>
                    </a>
                    <a
                        href="https://www.facebook.com/haizerusa/"
                        target="_blank"
                    >
                        <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
                            <FacebookLogo
                                className="fill-zinc-900"
                                size={40}
                                weight="regular"
                            />
                        </li>
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=S7Z2_-jKR9o"
                        target="_blank"
                    >
                        <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
                            <YoutubeLogo
                                className="fill-zinc-900"
                                size={24}
                                weight="fill"
                            />
                        </li>
                    </a>
                </ul>
                <div className="flex items-start mx-auto justify-center gap-2 mt-5 w-[40%] sm:min-w-[60%]">
                    <a href="https://www.haizerusa.com/" target="_top">
                        <span className="text-zinc-100">HAIZER USA</span>
                    </a>{' '}
                    <span className="h-0.5 w-4/5 bg-zinc-100 self-center" />
                </div>
                <div className="flex flex-col items-start ml-[23%] mr-auto">
                    <div className="flex my-6 gap-2 items-center justify-start">
                        <Buildings size={32} className="text-zinc-100" />
                        <p className="text-zinc-100">
                            6675 WESTWOOD BLVD, STE. 330, ORLANDO, FL, 32821
                        </p>
                    </div>
                    <div className="flex gap-2 items-center justify-start">
                        <Envelope size={32} className="text-zinc-100" />
                        <p className="text-zinc-100">
                            PO BOX 228281 MIAMI, FL 33222
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center mx-auto mt-8 gap-12">
                    <p className="text-zinc-100 text-lg mr-11">
                        2022 | HAIZER USA
                    </p>
                    <a
                        href="https://www.haizerusa.com/privacy-policy"
                        target="_blank"
                    >
                        <p className="text-zinc-600 underline">
                            PRIVACY POLICY
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
};
