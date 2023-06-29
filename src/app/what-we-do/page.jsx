import SectionSplitWithImage from '@/components/pages/SectionSplitWithImage'
import { Testimonials } from '@/components/pages/Testimonials'
import { Container } from '@/components/ui/container'
import { LifebuoyIcon, HandThumbUpIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Sales',
    description: 'Elevate your culinary creations with the exquisite touch of silver leaves. Turn ordinary dishes into extraordinary masterpieces that dazzle both the eyes and the taste buds.',
    icon: PhoneIcon,
  },
  {
    name: 'Support',
    description: 'We understand the importance of reliable customer support, which is why we offer comprehensive assistance through our online channels. From product inquiries to troubleshooting, our team is ready to guide you every step of the way.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Quality Products',
    description: 'At Shree Varnika, customer satisfaction is our top priority. We guarantee the utmost quality and excellence in our silver leaves, ensuring they enhance your culinary creations to perfection.',
    icon: HandThumbUpIcon,
  },
];

const products = [
  {
    name: 'Saffron',
    description: 'We take great pride in offering the finest quality saffron. Carefully handpicked, our saffron is known for its vibrant color, distinct aroma, and exquisite flavor. We source our saffron from reputable farms to ensure its authenticity and optimal quality. Saffron from Shree Varnika adds a touch of luxury and enhances the taste and visual appeal of a wide range of culinary creations.',
    image: '/images/products/saffron/saffron-poster.png',
    imagePlaceAtRight: true
  },
  {
    name: 'Silver Leaves and Gold Leaves',
    description: 'Our silver leaves and gold leaves are meticulously crafted to perfection. These edible metallic sheets are widely used in Indian sweets and confections, imparting a touch of elegance and opulence to the dining experience. We adhere to strict quality standards to ensure that our silver and gold leaves meet the expectations of both home cooks and professional chefs.',
    image: '/images/products/silver/silver-leaves-vertical.jpg',
    imagePlaceAtRight: false
  },
  {
    name: 'Hing (Asafoetida)',
    description: 'Hing, also known as asafoetida, is a key ingredient in Indian cuisine. Known for its distinctive aroma and flavor, hing adds a unique taste profile to a variety of dishes. At Shree Varnika, we source and process hing with utmost care to ensure its authenticity and optimal quality. Our hing is a testament to our commitment to delivering exceptional ingredients for authentic Indian flavors.',
    image: '/images/products/hing-listed/hing.png',
    imagePlaceAtRight: true
  },
  {
    name: 'Silver/Gold Coated Elaichi (Cardamom)',
    description: 'To elevate the festive spirit, we offer silver/gold coated elaichi (cardamom). Highly prized for its aromatic fragrance and captivating appearance, our silver/gold coated elaichi is a perfect indulgence for special occasions. It adds an exquisite touch to traditional sweets, desserts, and beverages, making celebrations even more memorable.',
    image: '/images/products/elaichi/elaichi-bottle.jpeg',
    imagePlaceAtRight: false
  },
];

const productsRender = products.map(product => (
  <SectionSplitWithImage key={product.name} imageAtRight={product.imagePlaceAtRight} imageSrc={product.image}>
    <div className="mx-auto max-w-2xl lg:mx-0">
      <div className="hidden sm:mt-32 sm:flex lg:mt-16">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 whitespace-nowrap font-semibold ring-gray-900/10 hover:ring-gray-900/20 text-indigo-600 hover:text-white hover:bg-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          { product.name } <span aria-hidden="true">&rarr;</span>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      { product.description }
      </p>
    </div>
  </SectionSplitWithImage>
));
      

export default function WhatWeDo() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="/images/illustrations/about-us-header.jpg"
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">What We Do</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">At Shree Varnika, we are dedicated to providing exceptional quality products that elevate the culinary experience. We specialize in producing and delivering premium saffron, silver leaves, gold leaves, hing (asafoetida), and silver/gold coated elaichi (cardamom) sourced from trusted suppliers in India. Our commitment to excellence and customer satisfaction sets us apart in the industry.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-white">{card.name}</h3>
                  <p className="mt-2 text-gray-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      { productsRender }

      <Testimonials />
    </>
  )
}
