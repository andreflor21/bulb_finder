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
    async function handleOnChange(
        e: React.ChangeEvent<HTMLSelectElement>
    ): Promise<void> {
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
            // getBulbs(setError, value);
        }
    }
    return (
        <div className="w-fit">
            <label className="mt-10 xs:mt-[72px] ml-12 mr-0 md:mx-2 block text-2xl font-normal text-zinc-900">
                {label}
            </label>
            <select
                value={selected}
                onChange={(e) => {
                    handleOnChange(e);
                    setSelected(e.target.value);
                }}
                className="md:w-40 w-52 ml-12 mr-0 md:mx-2 mt-1 cursor-default rounded-md appearance-none border-none bg-zinc-100 py-2 pl-3 pr-10 text-left duration-300 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm"
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
