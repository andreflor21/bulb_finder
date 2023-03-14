import { useState, useEffect } from 'react';
import './styles/global.css';
import { Header } from './components/Header';
import { SelectWrapper } from './components/SelectWrapper';
import { Model } from './components/Model';
import { useServices } from './providers/services';
import { Footer } from './components/Footer';

function App() {
  const { getYears, bulbs, selectedYear } = useServices();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    getYears(setError);
  }, [selectedYear]);

  return (
    <>
      <Header />
      <div className="w-full bg-zinc-100 pt-32">
        <div className="md:w-3/4 w-4/5 min-h-[500px] mx-auto">
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
          <div className="bg-orange-500 h-2 w-44 mt-8 -ml-4 mr-auto"></div>
          <h1 className="text-zinc-800 tracking-wider font-bold text-[28px] mt-3 mx-4">
            Bulb Finder
          </h1>
          <SelectWrapper />
          <Model bulbs={bulbs} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
