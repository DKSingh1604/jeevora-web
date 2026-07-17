export default function RefundPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund & Cancellation Policy</h1>

        <div className="prose prose-sm sm:prose text-gray-600">
          <p className="mb-4">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>
          <p>
            At Jeevora, we strive to ensure that every transaction on our marketplace is smooth and satisfactory for both buyers and sellers. However, we understand that sometimes things don't go as planned. This policy outlines the conditions under which refunds and cancellations are processed.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Order Cancellations</h3>
          <p>
            <strong>By the Buyer:</strong> Buyers can cancel an order for a full refund before the seller has dispatched the item. Once the item is marked as "Shipped," the order cannot be cancelled, and the buyer will need to initiate a return request upon receiving the item.
          </p>
          <p>
            <strong>By the Seller:</strong> Sellers may cancel an order if the item is out of stock, damaged before shipping, or if there is an issue with the shipping address. In such cases, the buyer will receive a full refund immediately.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Returns and Refunds</h3>
          <p>
            Buyers can request a return and refund within 7 days of receiving the product under the following conditions:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>The item received is significantly different from the seller's description.</li>
            <li>The item arrived damaged or defective.</li>
            <li>The wrong item was shipped.</li>
          </ul>
          <p>
            To be eligible for a return, the item must be unused, in the same condition that you received it, and in its original packaging. Please note that certain categories (e.g., perishable goods, intimate apparel, downloadable digital products) are non-returnable.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Process for Requesting a Refund</h3>
          <ol className="list-decimal pl-5 mb-4">
            <li>Contact the seller through the Jeevora platform to report the issue.</li>
            <li>If the seller approves the return, you will receive instructions on how to ship the item back.</li>
            <li>Once the seller receives and inspects the returned item, they will notify us to process the refund.</li>
            <li>If you and the seller cannot reach an agreement within 5 business days, you may escalate the issue to Jeevora Support.</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Refund Processing Time</h3>
          <p>
            Approved refunds will be processed and automatically applied to your original method of payment (via Razorpay) within 5-7 business days. Processing times may vary depending on your bank or credit card company.
          </p>

          <p className="mt-8">
            If you have any questions regarding our Refund and Cancellation Policy, please contact us at dev1604karan@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}