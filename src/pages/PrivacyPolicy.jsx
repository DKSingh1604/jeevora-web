export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-sm sm:prose text-gray-600">
          <p className="mb-4">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>
          <p>
            At Jeevora, accessible from www.jeevora.com, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by Jeevora and how we use it.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the marketplace, express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This includes:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Personal details:</strong> Name, email address, phone number, and physical address for shipping.</li>
            <li><strong>Payment information:</strong> Payment details are securely processed by Razorpay. We do not store full credit card numbers on our servers.</li>
            <li><strong>Transaction data:</strong> Order history, items purchased or sold, and communications between buyers and sellers.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. How We Use Your Information</h3>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Provide, operate, and maintain our marketplace.</li>
            <li>Process transactions and send related information, including order confirmations and invoices.</li>
            <li>Improve, personalize, and expand our website features.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you for customer service, updates, and marketing purposes.</li>
            <li>Find and prevent fraud to ensure a secure trading environment.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Sharing Your Information</h3>
          <p>
            To facilitate the buying and selling process, we share necessary information (such as shipping address and name) with the specific buyer or seller you are transacting with. We may also share data with trusted third-party service providers (like logistics partners and payment processors) who assist us in operating our platform.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Security</h3>
          <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
          </p>

          <p className="mt-8">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at dev1604karan@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}