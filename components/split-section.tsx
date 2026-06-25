import React from 'react';
import Image from 'next/image';

const SplitSection = (
  {
    left,
    right,
    addClassName = 'bg-background-secondary',
    addCustomGap = 'xl:gap-64 gap-16',
  }:{
    left: React.ReactNode,
    right?: React.ReactNode,
    addClassName?: string,
    addCustomGap?: string,
  }) => {
  return (
      <div className={`${addClassName} w-full`}>
          <div data-animate className={`flex max-md:flex-col w-full items-center justify-center ${addCustomGap}`}>

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