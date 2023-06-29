import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/ui/container"

export default function Careers() {
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Join Our Passionate Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-center">At Shree Varnika, we are passionate about producing and delivering the finest quality saffron, silver leaves, gold leaves, hing (asafoetida), and silver/gold coated elaichi (cardamom) to our valued customers. We take immense pride in our rich heritage and are committed to upholding the traditions of Indian cuisine.</p>
          </div>
        </div>
      </div>

      <section id="careers" aria-label="Careers" className="pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mt-4 tracking-tight text-slate-700">We believe that our success is driven by the dedication and talent of our team. If you have a passion for exceptional ingredients, a desire to work in a dynamic environment, and a commitment to excellence, we invite you to explore career opportunities with us.</p>
            <p className="mt-4 text-lg font-bold tracking-tight text-slate-700">Why Choose Shree Varnika?</p>
            <div className="mt-2 tracking-tight text-slate-700">
              <ol class="list-decimal">
                <li>Commitment to Quality: At Shree Varnika, quality is the cornerstone of everything we do. We are committed to maintaining the highest standards in our products, sourcing them responsibly, and ensuring they meet the expectations of our customers.</li>
                <li>Culture of Collaboration: We foster a culture that values collaboration, teamwork, and open communication. We believe in the power of collective ideas and encourage our employees to contribute their unique perspectives, fostering an environment of innovation and growth.</li>
                <li>Career Development: We are dedicated to the professional growth and development of our team members. Through training programs, mentorship opportunities, and ongoing support, we strive to provide an environment where employees can learn, thrive, and advance their careers.</li>
                <li>Work-Life Balance: At Shree Varnika, we understand the importance of maintaining a healthy work-life balance. We offer flexible work arrangements, competitive compensation packages, and comprehensive benefits to support the well-being of our employees.</li>
              </ol>
            </div>

            <p className="mt-4 text-lg font-bold tracking-tight text-slate-700">Current Job Openings:</p>
            <p className="mt-2 tracking-tight text-slate-700">Come back here for our upcoming openings</p>
            
            <p className="mt-4 text-lg font-bold tracking-tight text-slate-700">How to Apply:</p>
            <p className="mt-4 tracking-tight text-slate-700">To apply for a position at Shree Varnika, please send your resume/CV and a cover letter to <a className="text-blue-600/100 hover:text-amber-600" href="mailto:careers@shreevarnika.in">careers@shreevarnika.in</a>. Please include the job title in the subject line of your email. We review all applications carefully and will reach out to candidates whose qualifications align with our requirements.</p>
            
            <p className="mt-4 text-lg font-bold tracking-tight text-slate-700">Join the Shree Varnika Family:</p>
            <p className="mt-4 tracking-tight text-slate-700">At Shree Varnika, we take pride in our products, our team, and the impact we make on the culinary world. If you are passionate about our offerings and are driven to excel in a fast-paced, dynamic environment, we invite you to consider a career with us.</p>
            <p className="mt-4 tracking-tight text-slate-700">Follow us on our website and social media channels to stay updated on new career opportunities and company news. We thank all applicants for their interest in Shree Varnika and look forward to potentially welcoming you to our team!</p>

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
