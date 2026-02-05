"use client";

import { useState } from "react";
import { Mail, CheckCircle, Calendar, ArrowRight } from "lucide-react";

const BOOKING_URL = "#calendly-placeholder";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: Replace with your GHL webhook URL
    const webhookUrl = "YOUR_GHL_WEBHOOK_URL_HERE";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Webhook may have CORS issues but still work
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text tracking-tight mb-4">
            Ready to stop losing leads?
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Book a free 30-minute call or send us a message. No pressure, no pitch deck — just answers.
          </p>
        </div>

        {/* Calendly CTA */}
        <div className="bg-dark rounded-2xl p-8 text-center mb-8">
          <Calendar size={32} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Book a free strategy call
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            We&apos;ll show you exactly where you&apos;re losing revenue — even if you don&apos;t work with us.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 glow-primary-sm"
          >
            Pick a Time
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Contact form */}
        <div className="bg-surface border border-border rounded-2xl p-7">
          {!submitted ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text">
                  Or send us a message
                </h3>
                <a
                  href="mailto:ray@redmansystems.com"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  ray@redmansystems.com
                </a>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-1.5"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your business..."
                    className="w-full px-4 py-3 bg-cream border border-border rounded-lg text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light transition-all resize-y"
                  />
                </div>

                <div className="flex gap-2.5 items-start">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    className="mt-1 accent-primary"
                  />
                  <label
                    htmlFor="smsConsent"
                    className="text-xs text-text-muted leading-relaxed"
                  >
                    I agree to receive SMS messages from Redman Systems. Reply
                    STOP to opt out.{" "}
                    <a href="/privacy-policy" className="text-primary underline">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-base hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  Send Message
                </button>

                <p className="text-xs text-text-muted text-center">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text mb-2">
                Message sent!
              </h3>
              <p className="text-text-secondary">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
