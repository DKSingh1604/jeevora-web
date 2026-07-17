export default function TermsConditions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

        <div className="prose prose-sm sm:prose text-gray-600">
          <p className="mb-4">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>
          <p>
            Welcome to Jeevora! These Terms & Conditions outline the rules and regulations for the use of Jeevora's e-commerce marketplace platform, located at www.jeevora.com.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Jeevora if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. The Marketplace</h3>
          <p>
            Jeevora acts as an online marketplace bridging buyers and sellers. We provide a platform for third-party sellers to list their physical and digital goods, and for buyers to purchase these items. Jeevora is not the manufacturer, owner, or direct seller of the items listed by third parties.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. User Accounts</h3>
          <p>
            To buy or sell items on Jeevora, you must register for an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the confidentiality of your account and password.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Seller Obligations</h3>
          <p>
            Sellers must ensure that all items listed are legal, accurately described, and available for dispatch. Sellers must not list counterfeit items, restricted goods, or items that infringe upon intellectual property rights.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Payments</h3>
          <p>
            All payments are processed securely through our trusted payment gateway partner, Razorpay. Buyers agree to pay the listed price, shipping fees, and applicable taxes. Sellers will receive payouts in accordance with our payment processing terms, minus applicable platform fees.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Dispute Resolution</h3>
          <p>
            In the event of a dispute between a buyer and a seller, we encourage users to communicate directly to resolve the issue. If a resolution cannot be reached, Jeevora may intervene to mediate the dispute in accordance with our Refund and Cancellation Policy.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Limitation of Liability</h3>
          <p>
            Jeevora shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of your use of the platform, the products purchased, or disputes with other users.
          </p>

          <p className="mt-8">
            If you have any questions about these Terms, please contact us at dev1604karan@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}