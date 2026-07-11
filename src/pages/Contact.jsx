export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">support@jeevora.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.8.58l1.5 7.5A1 1 0 019.82 17H9a2 2 0 01-2-2zm0 0a2 2 0 002 2h3.28a1 1 0 00.8-.58l1.5-7.5a1 1 0 01-.8-.58H5a2 2 0 00-2-2z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+91-9999999999</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9v2a2 2 0 002 2m0 0V9a2 2 0 012-2m0 0V9a2 2 0 00-2-2m2 2h6a2 2 0 002-2m0 6a2 2 0 01-2 2m0-6a2 2 0 00-2-2m2 2H5a2 2 0 01-2-2m0 6a2 2 0 002 2m0 6a2 2 0 012 2"></path>
              </svg>
              <div>
                <h3 className="font-medium text-gray-900">Operating Address</h3>
                <p className="text-gray-600">
                  123 Health Street, Bengaluru<br />
                  Karnataka 560001, India
                </p>
              </div>
            </div>
          </div>

          {/* Simple contact form (stub) */}
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}