import React, {
  Fragment,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from 'react';
import { ServiceData } from '../../providers/services';
import { useServices } from '../../providers/services';
interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ServiceData[];
  label: string;
}
export const SelectInput = ({
  label,
  placeholder,
  options,
  ...rest
}: selectProps) => {
  const [selected, setSelected] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const {
    getMakes,
    getModels,
    getBulbs,
    bulbs,
    selectedYear,
    setYear,
    selectedMake,
    setMake,
    selectedModel,
    setModel,
  } = useServices();
  async function handleOnChange(e: any): Promise<void> {
    const value = +e.target.value;
    if (label.toLowerCase() == 'year') {
      setYear(value);
      getMakes(setError, +e.target.value);
    } else if (label.toLowerCase() == 'make') {
      console.log(selectedYear, value, 'make');
      getModels(setError, selectedYear, value);
    } else if (label.toLowerCase() == 'model') {
      setModel(value);
      console.log(value, 'model');
      getBulbs(setError, value);
      console.log(JSON.stringify(bulbs), 'comp');
    }
  }
  return (
    <div>
      <label className="mt-[72px] mx-12 block text-2xl font-normal text-zinc-900">
        {label}
      </label>
      <select
        value={selected}
        onChange={(e: any) => {
          handleOnChange(e);
          setSelected(e.target.value);
        }}
        className="relative w-52 mx-12 mt-1 cursor-default rounded-md border-none bg-none py-2 pl-3 pr-10 text-left focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm"
      >
        {selected == '' && (
          <option disabled value={''}>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option
            key={opt.id}
            value={opt.id}
            className="absolute z-10 mt-1 max-h-56 w-52 mx-16 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-orange-500 hover:text-white sm:text-sm"
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};
