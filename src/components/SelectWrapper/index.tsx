import React, { useState } from 'react';
import { useServices } from '../../providers/services';
import { SelectInput } from '../SelectInput';
import { MagnifyingGlass } from '@phosphor-icons/react';
// import { Container } from './styles';

export const SelectWrapper = () => {
    const { years, makes, models, getBulbs, selectedModel } = useServices();
    const [error, setError] = useState<boolean>(false);
    return (
        <div className="flex min-w-full mx-auto flex-col sm:flex-row">
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
            <button
                onClick={() => getBulbs(setError, selectedModel)}
                className="disabled:cursor-default cursor-pointer py-2 flex justify-center items-center bg-orange-500 text-xl w-3/4 sm:w-32 my-10 sm:mt-20 self-center rounded-md hover:text-white"
                disabled={!selectedModel}
                type="button"
            >
                Search
                <MagnifyingGlass className="text-xl mx-2 font-bold" />
            </button>
        </div>
    );
};
