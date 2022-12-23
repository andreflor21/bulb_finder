import React from 'react';
import { BulbsData } from '../../providers/services';
import { SmileySad } from 'phosphor-react';
import { Card } from '../Card';
// import { Container } from './styles';

interface modelProps {
  bulbs: BulbsData[];
}
export const Model = ({ bulbs }: modelProps) => {
  return (
    <div className="w-full">
      {bulbs.length > 0 && (
        <div className="mt-10 ml-10">
          <h2 className="text-3xl text-zinc-900">
            {`${bulbs[0].year} ${bulbs[0].make} ${bulbs[0].model}`}
          </h2>

          <div className="w-[90%] h-[2px] bg-orange-500 mt-2" />
          {bulbs[0].bulb &&
            bulbs.map((bulb) => (
              <div key={`${bulb.model_id}_${bulb.id}`}>
                <div className="flex mt-6">
                  <h4 className="text-zinc-900 text-xl font-semibold ">
                    {bulb.part}
                  </h4>
                  <span className="ml-11 text-zinc-900 text-xl font-light">
                    {bulb.bulb}
                  </span>
                </div>
                <span className="text-zinc-900 font-extralight mt-2 italic text-base">
                  Available in
                </span>
                <div className="flex gap-10 my-10 mx-8">
                  <Card data={bulb} series="M" />
                  <Card data={bulb} series="P" />
                </div>
              </div>
            ))}
          {!bulbs[0].bulb && (
            <>
              <div className="flex mt-5 mx-4 text-xl align-center gap-2">
                <h4>
                  Sorry we don't have any available headlights bulbs for you
                </h4>
                <SmileySad className="text-2xl self-center" />
              </div>
              <span className="mt-8 mx-4">
                But you can check it out our other products{' '}
                <a
                  className="text-orange-500 hover:underline"
                  href="https://www.haizerusa.com/products"
                >
                  here!
                </a>
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
