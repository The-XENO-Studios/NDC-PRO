/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import Member from '../Components/Executive/Member';
import ExecutiveData from '../db/executives';
import Executives from '../Components/Executive/executives';
import Modal from '../Components/Executive/Modal';

const Executive = () => {
  const [modalState, setModalState] = useState<[number, number] | null>(null);
  return (
    <>
      <div className={'w-full min-h-[100vh] py-[125px] md:px-12 px-5 bg-slate-50 relative'}>
        <img className="absolute right-0 top-1/4 z-0" src="/image/bg.svg" alt="bg" />
        <img className="absolute left-0 top-3/4 z-0" src="/image/bg2.svg" alt="bg" />
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className={'grid place-items-center w-full'}>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-16 justify-start md:justify-center">
              {ExecutiveData.heads.map(({ image_url, name, post, dept }) => (
                <Member key="" img={image_url} name={name} designation={post} department={dept} />
              ))}
            </div>
          </div>
          <h1 className="text-5xl mt-12">
            MEET THE <br /> <span className="text-blue-500">EXECUTIVES</span>
          </h1>
          <Executives setModalState={setModalState} />
        </div>
        <Modal modalState={modalState} setModalState={setModalState} />
      </div>
    </>
  );
};

export default Executive;
