import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg yellow-90 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-120'></div>
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>SPRING SUMMER</h2>
        <p className='text-2xl'>CHECK OUT</p>
      </div>
    </section>
  );
}
