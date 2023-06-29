import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

import navigation from '../../data/navigation.json';
import { classNames } from '../../utils/helper'
import Link from 'next/link';



export default function MainHeader({ setMobileMenuOpen }) {
  return (
    <header className="relative z-10" >
      <nav aria-label="Top">
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      alt="Shree Varnika Royal Products Pvt. Ltd."
                      src="/logo.png"
                      width="96" height="96"
                      className="h-14 w-auto"
                    />
                    <span className="ml-3 w-52 text-sm font-bold text-primary">Shree Varnika Royal Products Pvt. Ltd.</span>
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-bold text-gray-500 transition-colors duration-200 ease-out">
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-white' : '',
                                      'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                  <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                        {category.featured.map((item) => (
                                          <div key={item.name} className="group relative">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                              <Image
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-cover object-center"
                                                width="280" height="340"
                                              />
                                            </div>
                                            <Link href={item.href} className="mt-4 block font-medium text-gray-900">
                                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                                              {item.name}
                                            </Link>
                                            <p aria-hidden="true" className="mt-1">
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {navigation.pages.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-bold text-gray-500"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" className="-ml-2 p-2 text-gray-500" onClick={() => setMobileMenuOpen(true)}>
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <Link href="#" className="ml-2 p-2 text-sm font-bold text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                {/* Logo (lg-) */}
                <Link href="/" className="lg:hidden">
                  <span className="sr-only">Shree Varnika Royal Products Pvt. Ltd.</span>
                  <Image
                    alt="Shree Varnika Royal Products Pvt. Ltd."
                    src="/logo.png"
                    width="96" height="96"
                    className="h-14 w-auto"
                  />
                </Link>

                {/* <div className="flex flex-1 items-center justify-end">
                  <Link href="#" className="hidden text-sm font-bold text-gray-500 lg:block">
                    Search
                  </Link>

                  <div className="flex items-center lg:ml-8">
                    <Link href="#" className="p-2 text-gray-500 lg:hidden">
                      <span className="sr-only">Help</span>
                      <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                    <Link href="#" className="hidden text-sm font-bold text-gray-500 lg:block">
                      Help
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}