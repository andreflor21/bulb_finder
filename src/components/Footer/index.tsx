import {
  Buildings,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900  min-h-[350px] flex flex-col justify-start">
      <div className="">
        <div className="flex flex-col gap-y-6 items-center justify-center pt-10">
          <ul className="flex justify-around items-start mx-auto w-[40%] sm:min-w-[60%]">
            <a href="https://www.haizerusa.com/products" target="_blank">
              <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline tracking-widest">
                PRODUCTS
              </li>
            </a>
            <a
              href="https://www.haizerusa.com/haizer-contact-us"
              target="_blank"
            >
              <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline tracking-widest">
                CONTACT US
              </li>
            </a>
            <a
              href="https://www.haizerusa.com/haizer-where-to-buy"
              target="_blank"
            >
              <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline tracking-widest">
                WHERE TO BUY
              </li>
            </a>
            <a href="https://www.haizerusa.com/blog" target="_blank">
              <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline tracking-widest">
                BLOG
              </li>
            </a>
          </ul>
          <ul className="flex justify-around items-start mx-auto w-[40%] sm:min-w-[60%]">
            <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline">
              <a href="https://www.haizerusa.com/about-us" target="_blank">
                ABOUT US
              </a>
            </li>
            <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline">
              <a href="https://www.haizerusa.com/be-a-dealer" target="_blank">
                BE A DEALER
              </a>
            </li>
            <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline">
              <a
                href="https://www.haizerusa.com/haizer-merchandising"
                target="_blank"
              >
                MERCHANDISING
              </a>
            </li>
            <li className="text-zinc-100 list-disc hover:list-none hover:text-orange-500 hover:underline">
              <a href="https://www.haizerusa.com/faq" target="_blank">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex items-start mx-auto justify-center gap-3 mt-7 w-[40%] sm:min-w-[60%]">
          <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
            <a href="https://www.instagram.com/haizer_usa/" target="_blank">
              <InstagramLogo className="fill-zinc-900" size={24} />
            </a>
          </li>
          <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
            <a href="https://www.facebook.com/haizerusa/" target="_blank">
              <FacebookLogo
                className="fill-zinc-900"
                size={40}
                weight="regular"
              />
            </a>
          </li>
          <li className="bg-[#929292] rounded-full w-8 h-8 flex items-center justify-center">
            <a
              href="https://www.youtube.com/watch?v=S7Z2_-jKR9o"
              target="_blank"
            >
              <YoutubeLogo className="fill-zinc-900" size={24} weight="fill" />
            </a>
          </li>
        </ul>
        <div className="flex items-start mx-auto justify-center gap-x-2 mt-5 w-[40%] sm:min-w-[60%]">
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
            <p className="text-zinc-100">PO BOX 228281 MIAMI, FL 33222</p>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto mt-8 gap-x-12">
          <p className="text-zinc-100 text-lg mr-11">2022 | HAIZER USA</p>
          <a href="https://www.haizerusa.com/privacy-policy" target="_blank">
            <p className="text-zinc-600 underline">PRIVACY POLICY</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
