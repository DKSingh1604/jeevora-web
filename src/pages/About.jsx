export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Jeevora</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Jeevora is a full‑stack telemedicine platform designed to bridge the
          gap between patients and quality healthcare providers. Our mission is
          to make specialist care accessible, transparent, and convenient for
          everyone, regardless of location.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6">
          A world where every individual can consult a doctor, access their
          medical records, and receive timely treatment without the barriers of
          distance, time, or complexity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
          <li>
            <strong>Specialist Discovery:</strong> Search and book appointments
            with verified doctors across multiple specialties.
          </li>
          <li>
            <strong>Video Consultations:</strong> Secure, HD video calls with
            in‑appointment chat and file sharing.
          </li>
          <li>
            <strong>Digital Health Locker:</strong> Upload prescriptions, lab
            results, and imaging; track trends over time.
          </li>
          <li>
            <strong>E‑Prescriptions:</strong> Receive legally valid digital
            prescriptions that can be shown at any pharmacy.
          </li>
          <li>
            <strong>Secure Payments:</strong> Razorpay‑integrated checkout with
            PCI‑DSS compliance for hassle‑free settlements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
        <p className="text-gray-600">
          We adhere to the highest standards of data privacy (HIPAA‑inspired
          practices), clinical safety, and transparent billing. Patient trust is
          the cornerstone of everything we build.
        </p>
      </div>
    </section>
  );
}