export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Jeevora</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Welcome to <strong>Jeevora</strong>, the premier online marketplace designed to bridge the gap between passionate buyers and dedicated sellers. We believe that e-commerce should be simple, secure, and accessible to everyone.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower individuals and small businesses by providing a robust platform to sell their goods, while offering buyers an unparalleled selection of unique and high-quality products. We strive to create a trusted community where commerce thrives on transparency and reliability.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What We Do</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Empower Sellers:</strong> We provide easy-to-use tools for sellers to list their products, manage inventory, and reach a wider audience.</li>
            <li><strong>Delight Buyers:</strong> We offer a seamless shopping experience with diverse categories, secure checkouts, and reliable buyer protection.</li>
            <li><strong>Secure Transactions:</strong> Powered by trusted payment gateways like Razorpay, we ensure every transaction is encrypted and safe.</li>
            <li><strong>Community Driven:</strong> We foster a community built on trust, verified reviews, and responsive customer support.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Jeevora?</h2>
          <p>
            Unlike traditional retail, Jeevora is a dynamic marketplace driven by the people, for the people. Whether you're hunting for a vintage collectible, everyday electronics, or looking to start your own online storefront, Jeevora is your ultimate destination.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">Join Our Growing Community</h3>
            <p className="text-gray-700">
              Start your journey with us today. Whether you are looking to buy the perfect item or sell to millions, Jeevora is here to make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}