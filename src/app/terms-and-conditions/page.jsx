import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import { Container } from "@/components/ui/container"

export default function TermsAndConditions() {
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
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Terms and Conditions</h2>
          </div>
        </div>
      </div>

      <section id="termsandconditions" aria-label="Terms and Conditions" className="pb-14 pt-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mt-4 tracking-tight text-slate-700">Welcome to the Shree Varnika website. Please read these Terms and Conditions carefully before using our website or purchasing our products. By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website.</p>
            <div className="mt-2 tracking-tight text-slate-700">
              <ol class="list-decimal">
                <li><span className="font-bold">Intellectual Property:</span> All content on the Shree Varnika website, including but not limited to text, images, logos, trademarks, and product information, is the intellectual property of Shree Varnika and protected by applicable copyright and intellectual property laws. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited.</li>
                <li><span className="font-bold">Product Information:</span> We strive to provide accurate and up-to-date information about our products. However, we cannot guarantee the accuracy, completeness, or reliability of the product descriptions, pricing, availability, or other information provided on our website. We reserve the right to modify or update the content at any time without prior notice.</li>
                <li><span className="font-bold">Product Purchase and Sales:</span> By placing an order through our website, you agree to provide accurate, current, and complete information for all required fields. We reserve the right to refuse or cancel any order at our discretion. In the event of a cancellation, we will notify you and refund any payments made for the canceled order.</li>
                <li><span className="font-bold">Pricing and Payments:</span> All prices listed on the Shree Varnika website are in the applicable currency and exclude taxes, duties, and shipping charges unless otherwise stated. We reserve the right to change the prices of our products at any time without prior notice. Payments for orders must be made through the available payment methods on our website. We do not store or have access to your payment information.</li>
                <li><span className="font-bold">Shipping and Delivery:</span> We strive to process and ship orders in a timely manner. However, delivery times may vary depending on your location and other factors beyond our control. We are not responsible for any delays or damages that may occur during the shipping process. Additional shipping charges, customs duties, or taxes may apply and are the responsibility of the customer.</li>
                <li><span className="font-bold">Returns and Refunds:</span> We take pride in the quality of our products. If you receive a damaged or defective product, please contact our customer support team within 30 days of receiving your order. We will assess the issue and, if deemed appropriate, provide a replacement or refund as per our discretion.</li>
                <li><span className="font-bold">Limitation of Liability:</span> Shree Varnika shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the purchase of our products. This includes, but is not limited to, any loss of profits, revenue, data, or business interruption.</li>
                <li><span className="font-bold">Governing Law:</span> These Terms and Conditions shall be governed in all respects by Indian Law and all disputes and litigation arising in any way out of or affecting this Agreement shall be subject to the exclusive jurisdiction of the Indian courts. Any legal actions or proceedings arising out of or relating to these terms shall be exclusively brought in the courts of Ghaziabad District Court, Uttar Pradesh, India.</li>
              </ol>
            </div>

            <p className="mt-2 tracking-tight text-slate-700">Please note that these Terms and Conditions may be subject to change without prior notice. It is your responsibility to review this page periodically for any updates or modifications.</p>
            <p className="mt-4 tracking-tight text-slate-700">If you have any questions or concerns regarding our Terms and Conditions, please contact us at <a className="text-blue-600/100 hover:text-amber-600" href="mailto: support@shreevarnika.in">support@shreevarnika.in</a>.</p>

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
