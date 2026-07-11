export default function TermsConditions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4">
          Effective Date: <span className="font-medium">July 11, 2026</span>
        </p>

        <div className="prose prose-sm max-w-none text-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Jeevora website, mobile application, or
            any related services (“Service”), you agree to be bound by these
            Terms and Conditions (“Terms”). If you do not agree, please do not
            use the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Description of Service</h2>
          <p>
            Jeevora provides a telemedicine platform that enables users to:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Search for and book appointments with licensed healthcare professionals.</li>
            <li>Conduct video consultations and exchange medical information.</li>
            <li>Maintain a personal Digital Health Locker for records and prescriptions.</li>
            <li>Make secure payments for services via integrated payment gateways.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. User Account</h2>
          <p>
            You must register an account to use certain features. You are
            responsible for maintaining the confidentiality of your password and
            for all activities under your account. Jeevora may suspend or
            terminate accounts that violate these Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Medical Disclaimer</h2>
          <p>
            The Service is intended to facilitate communication between you and
            qualified healthcare providers. Jeevora does not provide medical
            advice, diagnosis, or treatment. All medical decisions remain the
            responsibility of the licensed professional you consult with.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Payments & Fees</h2>
          <p>
            Fees for consultations and any additional services are displayed
            before you confirm payment. Payments are processed through Razorpay,
            which is PCI‑DSS compliant. All fees are non‑refundable except as
            expressly provided in our Refund & Cancellation Policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Privacy</h2>
          <p>
            Your use of Jeevora is also governed by our Privacy Policy, which
            is incorporated into these Terms by reference.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and software on the Jeevora platform
            are the property of Jeevora or its licensors. You may not copy,
            modify, distribute, sell, or lease any part of our Service without
            our explicit written permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Jeevora shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, good‑will, or other
            intangible losses resulting from your access to or use of the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">9. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of India, without regard to its conflict of law principles. Any
            disputes arising under these Terms shall be subject to the exclusive
            jurisdiction of the courts located in Bengaluru, Karnataka.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">10. Changes to Terms</h2>
          <p>
            Jeevora reserves the right to modify these Terms at any time. We will
            notify users of material changes via email or a notice within the
            Service. Your continued use after such modifications constitutes
            acceptance of the updated Terms.
          </p>

          <p className="mt-6">
            If you have any questions about these Terms, please contact us at
            <a href="mailto:legal@jeevora.com" className="text-primary-600 underline">
              legal@jeevora.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}