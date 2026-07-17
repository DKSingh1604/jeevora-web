import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-sm">
          {/* Left column */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Jeevora</h3>
            <p className="text-gray-600">
              Your trusted marketplace – connecting buyers and sellers,
              providing a wide range of products, and enabling secure payments.
            </p>
          </div>

          {/* Nav columns */}
          <div className="space-y-2">
            <p className="font-medium text-gray-900 mb-2">Company</p>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              About Us
            </Link>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-900 mb-2">Legal</p>
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <br></br>
            <Link
              to="/terms-conditions"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Terms & Conditions
            </Link>
            <br></br>

            <Link
              to="/refund-policy"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Refund & Cancellation Policy
            </Link>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-900 mb-2">Contact</p>
            <p className="text-gray-600">dev1604karan@gmail.com</p>
            <p className="text-gray-600">+91-8868019315</p>
            <p className="text-gray-600">
              Alliance, Rudrapur, Uttarakhand - 263153, India
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jeevora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}