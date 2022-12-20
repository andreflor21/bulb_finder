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
          </a>
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
          {bulbs.length > 0 && (
            <div className="mt-10 ml-10">
              <h2 className="text-3xl text-zinc-900">
                {`${bulbs[0].year} ${bulbs[0].make} ${bulbs[0].model}`}
              </h2>

              <div className=" w-[90%] h-[2px] bg-orange-500 mt-2" />
              {bulbs.map((bulb) => (
                <>
                  <div
                    key={`${bulb.model_id}_${bulb.id}`}
                    className="flex mt-6"
                  >
                    <h4 className="text-zinc-900 text-xl font-semibold ">
                      {bulb.part}
                    </h4>
                    <span className="ml-11 text-zinc-900 text-xl font-light">
                      {bulb.bulb}
                    </span>
                  </div>
                  <span className="text-zinc-900 font-normal italic text-base">
                    Available in
                  </span>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
