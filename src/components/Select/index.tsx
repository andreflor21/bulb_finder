import React, { Fragment, SetStateAction, useState, Dispatch } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CaretUp, CaretDown, Check } from 'phosphor-react';
import { ServiceData } from '../../providers/services';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface selectProps extends React.HTMLProps<HTMLSelectElement> {
  itens: ServiceData[];
  setItemValue?: Dispatch<SetStateAction<number>>;
  getMakes?: (
    setError: Dispatch<SetStateAction<boolean>>,
    year?: number
  ) => void;
  getModels?: (
    setError: Dispatch<SetStateAction<boolean>>,
    year?: number,
    make?: number
  ) => void;
  getBulbs?: (
    setError: Dispatch<SetStateAction<boolean>>,
    model?: number
  ) => void;
}
export const SelectYear = ({
  setItemValue,
  placeholder,
  label,
  itens,
  getMakes,
  ...rest
}: selectProps) => {
  const [error, setError] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  return (
    <Listbox
      onChange={(e) => {
        setItemValue(e);
        setSelected(e);
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="mt-[72px] mx-12 block text-2xl font-normal text-zinc-900">
            {label}
          </Listbox.Label>
          <div>
            <Listbox.Button className="relative w-52 mx-12 mt-1 cursor-default rounded-md border-none bg-none py-2 pl-3 pr-10 text-left focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <CaretDown
                  className="h-5 w-5 text-zinc-900"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 mx-16 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {itens.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-orange-500' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item?.id}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {item?.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-orange-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export const SelectMake = ({
  itemValue,
  setItemValue,
  placeholder,
  label,
  itens,
  getModels,
  ...rest
}: selectProps) => {
  console.log(itemValue, 'item value');
  const [error, setError] = useState<boolean>(false);
  return (
    <Listbox
      value={itemValue}
      onChange={(e) => {
        setItemValue;
        if (itemValue?.id) {
          getModels(setError, itemValue.id);
        }
        console.log(itemValue, 'event');
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="mt-[72px] mx-12 block text-2xl font-normal text-zinc-900">
            {label}
          </Listbox.Label>
          <div>
            <Listbox.Button className="relative w-52 mx-12 mt-1 cursor-default rounded-md border-none bg-none py-2 pl-3 pr-10 text-left focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{itemValue?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <CaretDown
                  className="h-5 w-5 text-zinc-900"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 mx-16 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {itens.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-orange-500' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-orange-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export const SelectModel = ({
  itemValue,
  setItemValue,
  placeholder,
  label,
  itens,
  getModels,
  getBulbs,
  ...rest
}: selectProps) => {
  console.log(itemValue, 'item value');
  const [error, setError] = useState<boolean>(false);
  return (
    <Listbox
      value={itemValue}
      onChange={(e) => {
        setItemValue;
        if (itemValue?.id) {
          getMakes(setError, itemValue.id);
        }
        console.log(itemValue, 'event');
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="mt-[72px] mx-12 block text-2xl font-normal text-zinc-900">
            {label}
          </Listbox.Label>
          <div>
            <Listbox.Button className="relative w-52 mx-12 mt-1 cursor-default rounded-md border-none bg-none py-2 pl-3 pr-10 text-left focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{itemValue?.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <CaretDown
                  className="h-5 w-5 text-zinc-900"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 mx-16 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {itens.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-orange-500' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-orange-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
