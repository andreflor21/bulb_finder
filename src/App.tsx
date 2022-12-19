import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './styles/global.css';
import logo from './assets/logo_haizer.png';
import { Input, Select as sel } from './components/Input';
import { SelectYear, SelectMake, SelectModel } from './components/Select';
import { SelectInput } from './components/SelectInput';
import { useServices } from './providers/services';
import api from '../src/services/api';

function App() {
  const {
    getYears,
    getMakes,
    getModels,
    getBulbs,
    years,
    makes,
    models,
    bulbs,
    selectedYear,
    setYear,
    selectedMake,
    setMake,
    selectedModel,
    setModel,
  } = useServices();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getYears(setError);
  }, [selectedYear]);

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
          <div className="flex">
            <SelectInput
              label="Year"
              placeholder="Select a year"
              options={years}
            />
            <SelectInput
              label="Make"
              placeholder="Select a make"
              options={makes}
            />
            <SelectInput
              label="Model"
              placeholder="Select a model"
              options={models}
            />
          </div>
          {bulbs.length > 0}
        </div>
      </div>
    </>
  );
}

export default App;
