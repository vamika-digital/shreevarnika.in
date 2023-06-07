import logoImage from '@/images/logo.png'
import Image from 'next/image'

export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="p-10 bg-black rounded w-auto">
            <Image
              src={logoImage}
              className="h-36 w-auto m-auto"
              alt="Shree Vernika Royal Products Pvt. Ltd."
              unoptimized
            />
          </div>
          <p className="text-base font-semibold text-indigo-600">Site Under Updation</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">We are coming soon</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we are currently re-designing process, We are coming soon.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="mailto:sales@shreevarnika.in" className="text-sm font-semibold text-gray-900">
              Contact At <span aria-hidden="true">&rarr;</span> sales@shreevarnika.in
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
