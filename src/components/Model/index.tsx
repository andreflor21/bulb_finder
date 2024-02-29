import React from 'react';
import { BulbsData } from '../../providers/services';
import { SmileySad } from '@phosphor-icons/react';
import { Card } from '../Card';
// import { Container } from './styles';

interface modelProps {
    bulbs: BulbsData[];
}
export const Model = ({ bulbs }: modelProps) => {
    return (
        <div className="min-w-full">
            {bulbs.length > 0 && (
                <div className="flex flex-col w-full justify-center items-strech mb-6 sm:mt-10 sm:ml-10">
                    <h2 className="w-[90%] text-3xl text-zinc-900">
                        {`${bulbs[0].year} ${bulbs[0].make} ${bulbs[0].model}`}
                    </h2>

                    <div className="w-[90%] h-[2px] bg-orange-500 mt-2" />
                    {bulbs.map((bulb, index) => (
                        <div key={index}>
                            <div className="flex flex-col sm:flex-row mt-6">
                                <h4 className="text-zinc-900 text-xl font-semibold ">
                                    {bulb.part}
                                </h4>
                                <span className="ml-0 sm:ml-11 text-zinc-900 text-xl font-light">
                                    Bulb size: {bulb.bulb}
                                </span>
                            </div>
                            <span className="text-zinc-900 font-extralight mt-2 italic text-base">
                                {!bulbs[0].url_m_series &&
                                !bulbs[0].url_platinum
                                    ? 'Product unavailable!'
                                    : 'Available in'}
                            </span>
                            {!(
                                !bulbs[0].url_m_series && !bulbs[0].url_platinum
                            ) && (
                                <div className="flex flex-col gap-10 my-10 mx-8 md:flex-row">
                                    <Card data={bulb} series="M" />
                                    <Card data={bulb} series="P" />
                                </div>
                            )}
                        </div>
                    ))}
                    {!bulbs[0].url_m_series && !bulbs[0].url_platinum && (
                        <span className="mt-8 mx-4">
                            But you can check it out our other products{' '}
                            <a
                                className="text-orange-500 hover:underline"
                                href="https://www.haizerusa.com/products"
                            >
                                here!
                            </a>
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};
