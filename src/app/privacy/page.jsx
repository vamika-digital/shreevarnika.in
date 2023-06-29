import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/ui/container"
import Image from 'next/image'

export default function Privacy() {
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Privacy Policy</h2>
          </div>
        </div>
      </div>

      <section id="termsandconditions" aria-label="Terms and Conditions" className="pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mt-4 tracking-tight text-slate-700">Welcome to the Shree Varnika Privacy Policy. This policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or purchase our products. We are committed to safeguarding your privacy and ensuring that your personal information is handled securely and in compliance with applicable privacy laws.</p>
            <div className="mt-2 tracking-tight text-slate-700">
              <ol class="list-decimal">
                <li><span className="font-bold">Information We Collect:</span>When you visit our website or make a purchase, we may collect certain personal information, such as your name, email address, shipping address, and payment details. We collect this information to fulfill your orders, provide customer support, and improve your overall experience with Shree Varnika.</li>
                <li><span className="font-bold">Use of Personal Information:</span>We use your personal information to process and fulfill your orders, communicate with you regarding your purchases, provide customer support, and respond to your inquiries. We may also use your information to send you promotional offers or newsletters if you have subscribed to them. You have the option to opt-out of receiving such communications.</li>
                <li><span className="font-bold">Information Sharing:</span>We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our website, processing payments, delivering orders, or conducting business activities on our behalf. These third parties are contractually obligated to handle your information securely and in accordance with this Privacy Policy.</li>
                <li><span className="font-bold">Data Security:</span>We take the security of your personal information seriously. We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</li>
                <li><span className="font-bold">Cookies and Tracking Technologies:</span>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website usage, and personalize content. You have the option to disable cookies through your web browser settings, although this may affect your ability to access certain features of our website.</li>
                <li><span className="font-bold">Third-Party Links:</span>Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of third-party websites before providing any personal information.</li>
                <li><span className="font-bold">Children's Privacy:</span>Our website and products are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we may have inadvertently collected personal information from a child, please contact us immediately, and we will take appropriate steps to delete the information.</li>
                <li><span className="font-bold">Changes to the Privacy Policy:</span>We may update this Privacy Policy from time to time to reflect changes in our business practices or legal requirements. We will notify you of any significant changes by posting the updated Privacy Policy on our website. We encourage you to review this policy periodically to stay informed about how we handle your personal information.</li>
              </ol>
            </div>

            <p className="mt-4 tracking-tight text-slate-700">If you have any questions or concerns about our Privacy Policy, please contact us at <a className="text-blue-600/100 hover:text-amber-600" href="mailto:support@shreevarnika.in">support@shreevarnika.in</a>.</p>
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
