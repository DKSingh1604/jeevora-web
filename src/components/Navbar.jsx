import { Link } from "react-router-dom";
import { Menu, X, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 flex items-center justify-center bg-primary-500 text-white rounded-full">
                J
              </span>
              <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-600">
                Jeevora
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-gray-700 hover:text-primary-600 transition-colors">
                Privacy
              </Link>
              <Link to="/terms-conditions" className="text-gray-700 hover:text-primary-600 transition-colors">
                Terms
              </Link>
              <Link to="/refund-policy" className="text-gray-700 hover:text-primary-600 transition-colors">
                Refund
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Open main menu"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden mt-2">
            <nav className="space-y-2 px-2 pt-2 pb-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Contact
              </Link>
              <Link
                to="/privacy-policy"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/refund-policy"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Refund & Cancellation Policy
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}