import React, {
  Fragment,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
  forwardRef,
} from 'react';
import { ServiceData } from '../../providers/services';
import { useServices } from '../../providers/services';
import * as Select from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';
import classnames from 'classnames';
import { Check, CaretUp, CaretDown } from 'phosphor-react';
interface selectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: ServiceData[];
  label: string;
}
interface selectItemProps
  extends React.SelectHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
export const SelectDemo = ({ placeholder, label, options }: selectProps) => {
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
  async function handleOnChange(e: string): Promise<void> {
    if (label.toLowerCase() == 'year') {
      setYear(e);
      getMakes(setError, e);
    } else if (label.toLowerCase() == 'make') {
      setMake(e);
      getModels(setError, selectedYear, e);
    } else if (label.toLowerCase() == 'model') {
      setModel(e);
      getBulbs(setError, e);
    }
  }
  return (
    <Label
      htmlFor={label}
      className="relative md:mt-[72px] mt-14 mx-12 flex flex-col text-2xl font-normal text-zinc-900"
    >
      {label}

      <Select.Root
        onValueChange={(e) => {
          handleOnChange(e);
          setSelected(e);
        }}
      >
        <Select.Trigger
          id={label}
          className="inline-flex items-center justify-between rounded text-sm h-9 self-start gap-1 bg-zinc-100 w-52  mt-1 cursor-default border-none py-2 px-4 text-left duration-300 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm"
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="text-zinc-800">
            <CaretDown />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal className="fixed">
          <Select.Content className="fixed top-[40%] bottom-[40%] overflow-hidden max-h-xs h-52 justify-self-center self-center w-52 bg-white mt-6 rounded-md shadow-[0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-zinc-100 text-zinc-800 cursor-default">
              <CaretUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-1">
              <Select.Group>
                {options.map((opt) => (
                  <SelectItem key={opt.id} value={opt.id.toString()}>
                    {opt.name}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-zinc-100 text-zinc-800 cursor-default">
              <CaretDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </Label>
  );
};

const SelectItem = React.forwardRef<HTMLButtonElement, selectItemProps>(
  ({ children, className, ...props }, forwardRef) => {
    return (
      <Select.Item
        className={classnames(
          'text-sm text-zinc-800 rounded-sm flex items-center relative  pr-9 pl-6 select-none hover:outline-none hover:bg-orange-500 hover:text-zinc-100',
          className
        )}
        {...props}
        ref={forwardRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
          <Check />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
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
      setMake(value);
      console.log(selectedYear, value, 'make');
      getModels(setError, selectedYear, value);
    } else if (label.toLowerCase() == 'model') {
      setModel(value);
      console.log(value, 'model');
      getBulbs(setError, value);
    }
  }
  return (
    <div className="w-fit">
      <label className="md:mt-[72px] mt-14 mx-12 block text-2xl font-normal text-zinc-900">
        {label}
      </label>
      <select
        value={selected}
        onChange={(e: any) => {
          handleOnChange(e);
          setSelected(e.target.value);
        }}
        className="w-52 mx-12 mt-1 cursor-default rounded-md appearance-none border-none bg-zinc-100 py-2 pl-3 pr-10 text-left duration-300 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm"
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
            className="bg-zinc-100 border-none hover:selection:bg-orange-500"
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};
