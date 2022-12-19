import React from 'react';
import { CaretDown, Placeholder } from 'phosphor-react';
import { CaretUp, Check } from 'phosphor-react';
import { itensProps } from '../../App';

interface selectProps extends React.HTMLProps<HTMLSelectElement> {
  itens: itensProps[];
}

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

export const Input = ({ placeholder, itens, ...rest }: inputProps) => {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      suffixIcon={<CaretDown />}
      className="text-zinc-800 border-none"
      style={{
        border: 'none',
        width: 'w-8',
        color: '#212121',
        fontFamily: 'UniNeue, sans-serif',
      }}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={itens.map((item) => {
        return { label: item.id.toString(), value: item.name };
      })}
    />
  );
};

export const Select = ({ label, itens, ...rest }: selectProps) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select name={label} {...rest}>
        {itens.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
