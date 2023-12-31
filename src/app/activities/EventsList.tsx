'use client';

import { useSearchParams } from 'next/navigation';
import Event from '../Components/Event';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PiSmileySad } from 'react-icons/pi';

type Events = {
  data: [
    {
      category: 'event' | 'workshop';
      details_url: string;
      image_url: string;
      subtitle: string;
      timestamp: number;
      title: string;
    }
  ];
};

const EventsList = ({ data }: { data: any[] }) => {
  const [typeString, setTypeString] = useState<string>('events');
  const type = useSearchParams().get('type');
  const scroll = useSearchParams().get('scroll');

  useEffect(() => {
    if (scroll) {
      document.getElementById('SCROLLHERE')?.scrollIntoView();
    }

    if (type != 'events' && type != 'project' && type != 'publication' && type != 'workshop') {
      setTypeString('event');
    } else {
      setTypeString(type);
    }
  }, [type]);

  return (
    <section className="w-full">
      <div className="flex gap-3 mb-9 flex-wrap w-full">
        <Link
          href="/activities?type=event&scroll=true"
          type="button"
          className={` shadow-[5px_5px_21px_7px_#00000024]  font-Nunito font-bold -gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-xl text-sm md:text-base px-5 py-2.5 me-2 mb-2  transition-colors  ${
            type == 'event'
              ? 'bg-blue-500 hover:bg-blue-600 hover:text-white  text-white shadow-[5px_5px_21px_7px_#00000024]'
              : 'bg-white text-black hover:bg-blue-100 hover:text-blue-500'
          }`}
        >
          Events
        </Link>
        <Link
          href="/activities?type=workshop&scroll=true"
          type="button"
          className={`shadow-[5px_5px_21px_7px_#00000024] font-Nunito font-bold -gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-xl text-sm md:text-base px-5 py-2.5 me-2 mb-2  transition-colors  ${
            type == 'workshop'
              ? 'bg-blue-500 hover:bg-blue-600 hover:text-white  text-white shadow-[5px_5px_21px_7px_#00000024]'
              : 'bg-white text-black hover:bg-blue-100 hover:text-blue-500'
          }`}
        >
          Workshop
        </Link>

        <Link
          href="/activities?type=project&scroll=true"
          type="button"
          className={` shadow-[5px_5px_21px_7px_#00000024] font-Nunito font-bold -gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-xl text-sm md:text-base px-5 py-2.5 me-2 mb-2  transition-colors  ${
            type == 'project'
              ? 'bg-blue-500 hover:bg-blue-600 hover:text-white  text-white shadow-[5px_5px_21px_7px_#00000024]'
              : 'bg-white text-black hover:bg-blue-100 hover:text-blue-500'
          }`}
        >
          Projects
        </Link>

        <Link
          href="/activities?type=publication&scroll=true"
          type="button"
          className={` shadow-[5px_5px_21px_7px_#00000024]  font-Nunito font-bold -gray-300 focus:outline-none active:outline-none focus:ring-4 focus:ring-gray-200 rounded-xl text-sm md:text-base px-5 py-2.5 me-2 mb-2  transition-colors  ${
            type == 'publication'
              ? 'bg-blue-500 hover:bg-blue-600 hover:text-white  text-white shadow-[5px_5px_21px_7px_#00000024]'
              : 'bg-white text-black hover:bg-blue-100 hover:text-blue-500'
          }`}
        >
          Publication
        </Link>
      </div>
      <div
        className="flex gap-3 ml-1 mt-8 items-end justify-center self-start md:justify-start pb-7"
        id="SCROLLHERE"
      >
        <h1 className="text-3xl md:text-5xl text-blue-500">ALL</h1>
        <h1 className="text-3xl md:text-5xl">{typeString + 'S'}</h1>
      </div>

      {data.length > 0 ? (
        <div className="grid-fluid-fill-[16.5rem] gap-3  2xl:gap-5 justify-items-center w-full">
          {data.map((e, i) => {
            return (
              <Event
                title={e.title}
                imageURL={e.image_url}
                descURL={e.details_url}
                timestamp={e.timestamp}
                shortDesc={e.short_description}
                key={i}
                type={typeString}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid place-items-center w-full text-2xl my-5  py-5 rounded-xl text-center">
          <PiSmileySad color={'#3b82f6'} size={150} />
          <p>
            We have <span className="text-blue-500 inline">nothing</span>
            <br></br> to show here
          </p>
        </div>
      )}
    </section>
  );
};

interface EventDataFormat {
  title: string;
  description: string;
  imageURL: string;
}

export default EventsList;
