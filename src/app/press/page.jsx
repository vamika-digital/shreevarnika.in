import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/ui/container"
import Image from 'next/image'

export default function Press() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/images/illustrations/about-us-header.jpg"
          width="1280"
          height="678"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Press</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">Welcome to the Shree Varnika Press Page! Here you'll find the latest news, updates, and press releases about our exceptional range of products. As a leading provider of premium saffron, silver leaves, gold leaves, hing (asafoetida), and silver/gold coated elaichi (cardamom), we take great pride in offering the finest quality ingredients sourced from India. Our commitment to excellence and customer satisfaction has earned us a trusted reputation in the industry.
            </p>
          </div>
        </div>
      </div>

      <section id="our-presspage" aria-label="Our Press" className="pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mt-4 tracking-tight text-slate-700">Shree Varnika is dedicated to preserving the rich traditions of Indian cuisine by delivering products that meet the highest standards. Our saffron is carefully handpicked to ensure its vibrant color, distinct aroma, and exquisite flavor. It adds a touch of luxury to culinary creations, making every dish a masterpiece.</p>
            <p className="mt-4 tracking-tight text-slate-700">We also offer silver leaves and gold leaves, meticulously crafted to perfection. These edible metallic sheets are widely used in Indian sweets and confections, bringing a touch of elegance and opulence to the dining experience. Our silver and gold leaves are made with utmost care and precision, meeting the expectations of both home cooks and professional chefs.</p>
            <p className="mt-4 tracking-tight text-slate-700">In addition, we provide premium hing, a key ingredient in Indian cuisine known for its distinctive aroma and flavor. Our hing is carefully sourced and processed to ensure its authenticity and optimal quality. It adds a unique taste profile to a variety of dishes, enhancing their overall appeal.</p>
            <p className="mt-4 tracking-tight text-slate-700">To elevate the festive spirit, we offer silver/gold coated elaichi (cardamom), which is highly prized for its aromatic fragrance and captivating appearance. Our silver/gold coated elaichi is a perfect indulgence for special occasions, making celebrations even more memorable.</p>
            <p className="mt-4 tracking-tight text-slate-700">At Shree Varnika, we understand the importance of delivering exceptional products and outstanding customer service. Our mission is to provide a seamless experience for our customers, from product selection to online support. We are dedicated to fostering long-lasting relationships built on trust, reliability, and utmost satisfaction.</p>
            <p className="mt-4 tracking-tight text-slate-700">For media inquiries, product samples, or interview requests, please contact our press team at <a className="text-blue-600/100 hover:text-amber-600" href="mailto:support@shreevarnika.in">support@shreevarnika.in</a>. We would be delighted to assist you and provide any necessary information.</p>
            {/* <p className="mt-4 tracking-tight text-slate-700">Stay updated with the latest news and announcements by following us on our social media channels: [List your social media handles].</p> */}
            <p className="mt-4 tracking-tight text-slate-700">Thank you for your interest in Shree Varnika. We look forward to sharing our journey and products with you through our press releases and media updates.</p>
            <div className="mt-4 tracking-tight text-slate-700">
              <p className="font-bold">Shree Varnika Royal Products Private Limited</p>
              <p className="text-sm"><MapPinIcon className="h-7 w-5 mr-2 inline-flex items-baseline text-indigo-400" aria-hidden="true" />B-78, Sector 65, Noida, Uttar Pradesh 201001</p>
              <p className="text-sm"><GlobeAltIcon className="h-7 w-5 mr-2 inline-flex items-baseline text-indigo-400" aria-hidden="true" />https://shreevarnika.in/</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
