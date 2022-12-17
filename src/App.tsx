import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './styles/global.css';
import logo from './assets/logo_haizer.png';
import { Input } from './components/Input';
import axios from 'axios';
import api from '../src/services/api';

export interface itensProps {
  id: number;
  name: string;
}

function App() {
  const [years, setYears] = useState<itensProps[]>([]);
  useEffect(() => {
    api
      .get('year')
      .then((res) => setYears(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <header className="flex items-center justify-around w-full  h-28 fixed top-0 bg-[#fff]">
        <a href="https://www.haizerusa.com" className="w-[50%]">
          <img src={logo} className="w-[300px] self-start" />
        </a>
        <div className="flex items-center justify-between w-[20%]">
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
      <div className="bg-zinc-100 w-screen h-screen pt-32">
        <div className="w-[75%] mx-auto">
          <a
            href="https://www.haizerusa.com"
            className="tracking-[3.5px] font-bold text-base text-zinc-800 hover:text-orange-500 hover:underline"
          >
            Home &gt;
          </a>{' '}
          <a
            href="https://www.haizerusa.com/haizer-bulb-finder"
            className="tracking-[3.5px] font-bold text-base text-zinc-800 hover:text-orange-500 hover:underline"
          >
            Bulb Finder
          </a>
          <div className="bg-orange-500 h-2 w-44 mt-8 -ml-4"></div>
          <h1 className="text-zinc-800 tracking-wider font-bold text-[28px] mt-3 mx-4">
            Bulb Finder
          </h1>
          <div>
            <Input label="Year" placeholder="year" itens={years} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
