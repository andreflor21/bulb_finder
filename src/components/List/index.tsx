import { DotOutline } from '@phosphor-icons/react';
import React from 'react';

// import { Container } from './styles';
interface ListItem {
    link: string;
    name: string;
}
interface ListProps {
    list: ListItem[];
}

const List = ({ list }: ListProps) => {
    return (
        <ul className="pt-10 w-fit grid grid-rows-4 gap-x-10 whitespace-nowrap grid-cols-2 justify-between items-center content-center mx-auto">
            {list.map((item, index) => (
                <li
                    className="text-zinc-100 flex items-center basis-1/2 w-fit hover:list-none self-start hover:text-orange-500 hover:underline tracking-widest"
                    key={index}
                >
                    <DotOutline size={16} weight="fill" />
                    <a target="_blank" href={item.link}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export { List };
