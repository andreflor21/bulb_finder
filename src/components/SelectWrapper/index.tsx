import React from 'react';
import { useServices } from '../../providers/services';
import { SelectInput } from '../SelectInput';
// import { Container } from './styles';

export const SelectWrapper = () => {
  const { years, makes, models } = useServices();
  return (
    <div className="flex min-w-full mx-auto">
      <SelectInput label="Year" placeholder="Select a year" options={years} />
      <SelectInput label="Make" placeholder="Select a make" options={makes} />
      <SelectInput
        label="Model"
        placeholder="Select a model"
        options={models}
      />
    </div>
  );
};
