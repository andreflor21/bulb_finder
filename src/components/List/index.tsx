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
        <ul className="flex justify-around items-start flex-wrap w-full mx-auto">
            {list.map((item, index) => (
                <li
                    className="text-zinc-100 grow shrink basis-3/5 px-4 hover:list-none self-start hover:text-orange-500 hover:underline tracking-widest"
                    key={index}
                >
                    <DotOutline size={32} weight="fill" />
                    <a target="_blank" href={item.link}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export { List };
