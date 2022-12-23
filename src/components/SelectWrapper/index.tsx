import React from 'react';
import { useServices } from '../../providers/services';
import { SelectInput, SelectDemo } from '../SelectInput';
// import { Container } from './styles';

export const SelectWrapper = () => {
  const { years, makes, models } = useServices();
  return (
    <div className="flex mx-auto">
      <SelectDemo placeholder="Select a year" label="Year" options={years} />
      <SelectDemo label="Make" placeholder="Select a make" options={makes} />
      <SelectDemo label="Model" placeholder="Select a model" options={models} />
    </div>
  );
};
