import Link from "next/link";

const BOOKING_URL = "#calendly-placeholder";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-base font-semibold text-text">
            Redman<span className="text-primary">Systems</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a
              href="mailto:ray@redmansystems.com"
              className="hover:text-primary transition-colors"
            >
              ray@redmansystems.com
            </a>
            <a
              href={BOOKING_URL}
              className="hover:text-primary transition-colors"
            >
              Book a Call
            </a>
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Redman Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
