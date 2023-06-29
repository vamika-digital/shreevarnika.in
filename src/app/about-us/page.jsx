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
]

export default function AboutUs() {
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">Shree Varnika Royal Products Private Limited is a reputable company dedicated to the manufacturing and distribution of high-quality products. With a commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry. Our company's foundation is built on integrity, innovation, and a relentless pursuit of perfection.
            </p>
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

      <section id="our-mission" aria-label="Our Mission" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-gradient-to-b from-emerald-400 to-cyan-400">
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Our mission is to provide customers with exceptional products that meet their needs and exceed their expectations. We strive to be a leader in the market by consistently delivering superior quality and value. Through continuous improvement and innovation, we aim to enhance the lives of our customers and contribute positively to society.
            </p>
          </div>
        </Container>
      </section>

      <section id="quality-assurance" aria-label="Quality Assurance" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-gradient-to-b from-neutral-300 to-stone-400">
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Quality Assurance</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            Quality is at the forefront of everything we do. At Shree Varnika Royal Products Private Limited, we have implemented a robust quality assurance system to ensure that our products consistently meet the highest standards. From raw material sourcing to production processes and final inspection, every step is meticulously monitored to deliver products of exceptional quality and reliability.
            </p>
          </div>
        </Container>
      </section>

      <section id="customer-satisfaction" aria-label="Customer Satisfaction" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-gradient-to-b from-indigo-500 to-purple-500">
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Customer Satisfaction</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            We prioritize customer satisfaction and aim to build long-lasting relationships with our clients. Our customer-centric approach involves understanding their needs, providing prompt and efficient service, and continuously improving our products based on their feedback. We strive to exceed customer expectations and ensure their complete satisfaction with every interaction.
            </p>
          </div>
        </Container>
      </section>

      <section id="social-responsibility" aria-label="Social Responsibility" className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-gradient-to-b from-violet-200 to-pink-200">
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Social Responsibility</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
            As a responsible corporate entity, we are committed to sustainable practices and minimizing our environmental impact. We follow eco-friendly manufacturing processes and adhere to ethical business practices. Additionally, we actively support social initiatives aimed at improving the communities in which we operate.
            </p>
          </div>
        </Container>
      </section>

      <Testimonials />
    </>
  )
}
