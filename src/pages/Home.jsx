import { Link } from "react-router-dom";
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, ArrowRightLeft } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Jeevora – Your Ultimate Marketplace
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The smartest way to buy and sell items online. Connect with thousands of verified buyers and sellers, discover unique products, and enjoy secure transactions all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-sm hover:bg-primary-700 transition-colors"
              >
                Start Selling Today
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
            Why Choose Jeevora?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Vast Selection</h3>
              <p className="text-gray-600 text-sm">
                Discover a wide range of products from electronics to fashion, listed by sellers worldwide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Your money is safe. We use Razorpay to ensure all transactions are secure and encrypted.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Truck className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Reliable Shipping</h3>
              <p className="text-gray-600 text-sm">
                Integrated logistics ensure your products are delivered safely and on time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <RefreshCw className="h-10 w-10 mb-4 text-primary-500" />
              <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                Not satisfied? Our seamless return policy makes it easy to send items back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call‑to‑Action */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">
            Ready to join the marketplace?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you want to declutter your home or find amazing deals, Jeevora is the perfect place to start.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-sm hover:bg-primary-700 transition-colors"
          >
            Get in Touch
            <ArrowRightLeft className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}