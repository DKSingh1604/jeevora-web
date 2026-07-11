export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Effective Date: <span className="font-medium">July 11, 2026</span>
        </p>

        <div className="prose prose-sm max-w-none text-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h2>
          <p>
            Jeevora collects personal data necessary to provide our telemedicine
            services, including:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>
              Contact details (name, email, phone number) for account creation
              and communication.
            </li>
            <li>
              Health‑related information (medical history, uploaded reports,
              diagnoses, prescriptions) stored securely in your Digital Health
              Locker.
            </li>
            <li>
              Payment details (tokenized via Razorpay) – we do not store full
              card numbers.
            </li>
            <li>
              Usage data (app interactions, device type, IP address) to improve
              service quality and security.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Data</h2>
          <p>
            We use the collected information to:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Facilitate appointment booking and video consultations.</li>
            <li>Maintain and update your electronic health records.</li>
            <li>Process payments for services rendered.</li>
            <li>Send appointment reminders, health tips, and service updates.</li>
            <li>Ensure the security and integrity of our platform.</li>
            <li>Comply with legal obligations and respond to legal requests.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Data Sharing & Disclosure</h2>
          <p>
            We never sell your personal data. We may share information only with:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>
              Healthcare providers you consult with, solely for the purpose of
              delivering care.
            </li>
            <li>
              Razorpay (our payment gateway) to process transactions securely.
            </li>
            <li>
              Trusted third‑party service providers (hosting, analytics, CRM)
              under strict data‑protection agreements.
            </li>
            <li>
              Legal authorities when required by law or to protect vital interests.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Data Security</h2>
          <p>
            We employ industry‑standard technical and organizational measures,
            including end‑to‑end encryption for video calls, encrypted storage
            for health records, regular security audits, and role‑based access
            controls. All data is hosted on ISO‑27001 certified cloud infrastructure.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Access, correct, or delete your personal data.</li>
            <li>Restrict or object to certain processing activities.</li>
            <li>Receive a copy of your data in a portable format.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, please contact us at
            <a href="mailto:support@jeevora.com" className="text-primary-600 underline">
              support@jeevora.com
            </a>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective
            date at the top reflects the most recent revision. Continued use of
            the Jeevora platform after changes constitutes acceptance.
          </p>

          <p className="mt-6">
            If you have any questions or concerns, please reach out to our
            Data Protection Officer at
            <a href="mailto:privacy@jeevora.com" className="text-primary-600 underline">
              privacy@jeevora.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}