import React from 'react';
import { BulbsData } from '../../providers/services';

interface cardProps {
  data: BulbsData;
  series: string;
}
export const Card = ({ data, series }: cardProps) => {
  const { bulb, img_m_series, url_m_series, img_platinum, url_platinum } = data;
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col md:w-56 md:h-64 w-32 h-48 bg-transparent rounded-lg">
        <h5 className="relative w-full bg-zinc-300 text-xs md:text-base rounded-t-lg overflow-hidden text-center py-3 z-10 font-semibold tracking-wide">
          {series == 'M' ? 'M Series - LED' : 'Platinum Series'} {bulb}
        </h5>
        <img
          className="rounded-b-lg -mt-3"
          src={series == 'M' ? img_m_series : img_platinum}
        />
      </div>
      <a
        className="mt-3 bg-zinc-300 w-fit py-2 px-4 rounded-[4px] hover:text-orange-500 hover:outline-1 hover:border hover:border-zinc-600 "
        href={series == 'M' ? url_m_series : url_platinum}
      >
        Learn More
      </a>
    </div>
  );
};
