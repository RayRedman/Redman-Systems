import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Redman Systems",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-sm text-primary hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="font-serif text-3xl font-bold text-text mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-neutral max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
          <p>Last updated: January 2025</p>

          <h2 className="text-lg font-semibold text-text mt-8">1. Services</h2>
          <p>
            Redman Systems provides marketing automation, website development,
            CRM setup, and related services for home service businesses. Our
            services are provided on a monthly subscription basis.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">2. Subscription &amp; Billing</h2>
          <p>
            Services are billed monthly at the agreed-upon rate. There are no
            long-term contracts — you may cancel at any time. Cancellation takes
            effect at the end of the current billing period.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">3. Client Responsibilities</h2>
          <p>
            You agree to provide accurate business information, respond to
            reasonable requests for input during onboarding, and use the
            services in compliance with applicable laws.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">4. Intellectual Property</h2>
          <p>
            Websites and content created for your business remain your property.
            Proprietary systems, automations, and templates developed by Redman
            Systems remain our intellectual property.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">5. Limitation of Liability</h2>
          <p>
            Redman Systems is not liable for indirect, incidental, or
            consequential damages. Our total liability shall not exceed the
            amount paid for services in the preceding 3 months.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">6. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:ray@redmansystems.com"
              className="text-primary underline"
            >
              ray@redmansystems.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
