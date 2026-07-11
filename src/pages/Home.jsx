import { Link } from "react-router-dom";
import { Sparkles, HeartPulse, FileText, CreditCard, ArrowRightLeft } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Jeevora – Your Digital Healthcare Companion
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Seamlessly book appointments, consult online, manage your medical
              history, receive digital prescriptions, and make secure payments –
              all from the comfort of your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-sm hover:bg-primary-700 transition-colors"
              >
                Get Started
                <ArrowRightLeft className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Optional decorative wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-12 text-primary-100"
          fill="none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10 Q 25 0 50 10 T 100 10 L100 20 L0 20 Z"
          />
        </svg>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-12 text-center">
            How Jeevora Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Sparkles className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Book Appointments</h3>
              <p className="text-gray-600">
                Find specialists, view availability, and schedule visits instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <HeartPulse className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Online Consultations</h3>
              <p className="text-gray-600">
                Video calls with doctors, prescription sharing, and follow‑up reminders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Digital Health Records</h3>
              <p className="text-gray-600">
                Upload reports, track conditions, and keep a secure longitudinal history.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <CreditCard className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Razorpay‑powered checkout for consultations, lab tests, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call‑to‑Action */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">
            Ready to experience better healthcare?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust Jeevora for their medical needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-sm hover:bg-primary-700 transition-colors"
          >
            Contact Us
            <ArrowRightLeft className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}