import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Redman Systems",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <div className="prose prose-neutral max-w-none text-text-secondary leading-relaxed space-y-6 text-sm">
          <p>Last updated: January 2025</p>

          <h2 className="text-lg font-semibold text-text mt-8">1. Information We Collect</h2>
          <p>
            When you use our services or visit our website, we may collect
            personal information you provide directly, such as your name, email
            address, phone number, and business information. We also collect
            usage data automatically, including IP address, browser type, and
            pages visited.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services,
            communicate with you about our offerings, process transactions, send
            promotional and transactional messages (with your consent), and
            comply with legal obligations.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">3. SMS Communications</h2>
          <p>
            By providing your phone number and opting in, you consent to receive
            SMS messages from Redman Systems regarding your inquiry and our
            services. Message frequency varies. Reply STOP to opt out at any
            time. Standard message and data rates may apply.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information
            with service providers who assist in operating our business, or as
            required by law.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="text-lg font-semibold text-text mt-8">6. Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
