import Image from 'next/image'

import { Container } from '../ui/container'

const testimonials = [
  [
    {
      content:
        "I've been using silver leaves from Shree Varnika for years, and they never disappoint. The delicate silver sheets add a touch of elegance to my desserts and sweets. The online support provided by Shree Varnika is remarkable too. They promptly address any queries I have, ensuring a smooth and delightful experience.",
      author: {
        name: 'Nisha Sahai',
        role: 'Delhi, India',
        image: '/images/avatars/avatar-1.png',
      },
    },
    {
      content:
        "The saffron from Shree Varnika is truly exceptional. Its vibrant color and rich aroma have elevated the flavors of my dishes to a whole new level. I appreciate the care and quality that goes into their saffron. It's my go-to choice for adding a touch of luxury to my culinary creations.",
      author: {
        name: 'Rajesh Kumar',
        role: 'Mumbai, India',
        image: '/images/avatars/avatar-3.png',
      },
    },
  ],
  [
    {
      content:
        "Using gold leaves from Shree Varnika has been a game-changer for me. The lustrous gold layer brings a regal touch to my special occasion desserts. The online support team at Shree Varnika is always there to assist me. Their product knowledge and friendly guidance have made my experience truly wonderful.",
      author: {
        name: 'Arjun Mohapatra',
        role: 'Kolkata, India',
        image: '/images/avatars/avatar-5.png',
      },
    },
    {
      content:
        "I cannot imagine cooking without the high-quality hing from Shree Varnika. Its intense aroma and authentic flavor truly enhance my dishes. The online support provided by Shree Varnika is exceptional too. They offer valuable tips on using hing effectively and promptly address any concerns I may have.",
      author: {
        name: 'Priya Rajvansh',
        role: 'Chennai, India',
        image: '/images/avatars/avatar-2.png',
      },
    },
  ],
  [
    {
      content:
        "The silver/gold coated elaichi from Shree Varnika is a delightful treat for the senses. Its aromatic flavor and stunning appearance make it the perfect addition to my festive sweets. The online support team at Shree Varnika is extremely helpful, providing me with all the necessary information and ensuring my complete satisfaction.",
      author: {
        name: 'Vikram Singh',
        role: 'Hyderabad, India',
        image: '/images/avatars/avatar-6.jpeg',
      },
    },
    {
      content:
        "I am absolutely in love with the silver/gold coated elaichi from [Company Name]. It adds a touch of elegance and luxury to my traditional sweets. The quality is unmatched, and the online support provided by [Company Name] is commendable. They assisted me in choosing the right product and ensured its timely delivery. I highly recommend their products to anyone seeking top-notch quality and excellent customer service.",
      author: {
        name: 'Deepa B.',
        role: 'Bangalore, India',
        image: '/images/avatars/avatar-4.png',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
