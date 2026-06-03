import React from 'react';
import Image from 'next/image';

const SplitSection = (
  {
    left,
    right,
    addClassName = 'bg-background-secondary',
  }:{
    left: React.ReactNode,
    right?: React.ReactNode,
    addClassName?: string,
  }) => {
  return (
      <div className={`${addClassName} w-screen`}>
          <div data-animate className="py-32 flex max-md:flex-col max-w-7xl lg:mx-auto lg:px-16 px-8 items-center justify-center xl:gap-64 gap-16">

            <div data-animate className="h-full w-full">
              {left}
            </div>

            {right && (
              <div data-animate className="h-full w-full">
                {right}
              </div>
            )}

          </div>
      </div>
  );
};

export default SplitSection;