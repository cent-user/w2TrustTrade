import React from 'react';
import Cta from "../../components/section/Cta";
export default function WhyUs() {
  return (
    <>
      <section className='w-full relative text-primary5' id="why-us">
        <div className='px-[3em] py-[4em] bg-primary1'>
          <header className="text-center mb-[3em]">
            <h3 className='font-h1 pb-[1em]'>Why Choose Us?</h3>
            <p className='text-primary1 text-xl font-m1'>
              Here&apos;s why we&apos;re the best choice for your custom furniture needs—experience, quality, and creativity combined.
            </p>
          </header>

          {/* Flex container for responsive design */}
          <div className='flex flex-wrap justify-center gap-[3em] text-primary1'>
            <div className="flex flex-col items-center text-center bg-white p-[2em] rounded-2xl shadow-lg transition-all hover:shadow-2xl transform hover:scale-105 
              min-w-[280px] sm:min-w-[320px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <header className='font-bold text-2xl'>
                Durable MDF Furniture
              </header>
              <p className='text-lg mt-4'>
                We use high-quality Medium-Density Fiberboard (MDF) that&apos;s smooth, consistent, and designed to last, offering your furniture exceptional durability and style.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-[2em] rounded-2xl shadow-lg transition-all hover:shadow-2xl transform hover:scale-105 
              min-w-[280px] sm:min-w-[320px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <header className='font-bold text-2xl'>
                Expert Finishing
              </header>
              <p className='text-lg mt-4'>
                Our finishing is our signature. With meticulous attention to detail, we ensure that each piece has a smooth, polished finish that makes it stand out in any room.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-[2em] rounded-2xl shadow-lg transition-all hover:shadow-2xl transform hover:scale-105 
              min-w-[280px] sm:min-w-[320px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <header className='font-bold text-2xl'>
                Global Experience
              </header>
              <p className='text-lg mt-4'>
                Our extensive experience in exporting furniture globally ensures that your orders will meet the highest standards and arrive on time, no matter where you are.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-[2em] rounded-2xl shadow-lg transition-all hover:shadow-2xl transform hover:scale-105 
              min-w-[280px] sm:min-w-[320px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <header className='font-bold text-2xl'>
                Custom Designs Just for You
              </header>
              <p className='text-lg mt-4'>
                Whether you&apos;re looking for something specific or need a creative solution, we offer fully customizable designs to fit your vision perfectly.
              </p>
            </div>
          </div>

          <div className="mt-[4em] text-center">
            <Cta />
          </div>
        </div>
      </section>
    </>
  );
}
