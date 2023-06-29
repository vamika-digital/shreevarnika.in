import { classNames } from '@/utils/helper';
import React from 'react'

export default function SectionSplitWithImage({ imageAtRight, imageSrc, children }) {

  return (
    <div className="relative bg-white">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <img
          className={classNames(
            'h-full w-full absolute opacity-25 md:opacity-100 bg-gray-50 object-cover md:inset-y-0 md:w-1/2',
            imageAtRight ? 'md:right-0' : 'md:left-0'
          )}
          src={imageSrc}
        />
        <div
          className={classNames(
            'px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 md:px-8 md:pt-32',
            imageAtRight ? 'md:col-start-1' : 'md:col-start-2 '
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
