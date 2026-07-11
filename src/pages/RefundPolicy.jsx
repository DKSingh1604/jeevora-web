export default function RefundPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund & Cancellation Policy</h1>
        <p className="text-gray-600 mb-4">
          Effective Date: <span className="font-medium">July 11, 2026</span>
        </p>

        <div className="prose prose-sm max-w-none text-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Appointment Cancellation</h2>
          <p>
            You may cancel or reschedule a booked appointment up to
            <strong>24 hours</strong> before the scheduled start time without
            incurring any cancellation fee. A full refund of the consultation
            fee will be issued to the original payment method within
            5–7 business days.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Late Cancellation & No‑Show</h2>
          <p>
            If you cancel less than 24 hours before the appointment or fail to
            attend without prior notice (“no‑show”), the consultation fee is
            <strong>non‑refundable</strong>. This compensates the healthcare
            provider for the reserved time slot that could not be filled on short
            notice.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Provider‑Initiated Cancellation</h2>
          <p>
            In the rare event that a healthcare provider needs to cancel an
            appointment (e.g., due to illness or emergency), Jeevora will notify
            you promptly and offer either:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Rescheduling at a mutually convenient time, or</li>
            <li>A full refund of the consultation fee.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Refund Process</h2>
          <p>
            Refunds are processed through the same payment method used for the
            original transaction. Depending on your bank or card issuer, the
            refund may appear in your account within 5–10 business days after we
            initiate it.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Refunds for Technical Issues</h2>
          <p>
            If a consultation cannot be completed due to a verified technical
            failure on Jeevora’s platform (e.g., server outage, video‑call
            breakdown), we will either reschedule the session or provide a full
            refund at your discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Non‑Refundable Items</h2>
          <p>
            The following items are not eligible for refund:
          </p>
          <ul className="list-disc list-inside mt-2 mb-4">
            <li>Subscription or membership fees (if applicable).</li>
            <li>Charges for missed appointments or late cancellations.</li>
            <li>Any fees for prescription delivery or lab test services already
              rendered.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. How to Request a Refund or Cancel</h2>
          <p>
            To cancel or request a refund, please contact our support team at
            <a href="mailto:support@jeevora.com" className="text-primary-600 underline">
              support@jeevora.com
            </a> or use the “Manage Booking” section within your Jeevora account.
          </p>

          <p className="mt-6">
            For any questions regarding this policy, reach out to us at
            <a href="mailto:billing@jeevora.com" className="text-primary-600 underline">
              billing@jeevora.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}