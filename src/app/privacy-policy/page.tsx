export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-16">

      {/* Privacy Policy */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-muted">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-6 space-y-6 leading-relaxed text-muted">

          <p>
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or contact us
            regarding our services. We are committed to protecting your privacy
            and handling your information responsibly.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Information We Collect
          </h2>

          <p>
            We may collect personal information that you voluntarily provide
            when submitting enquiries through our contact form or when
            communicating with us. This may include your name, email address,
            phone number, and any information you choose to provide.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            How We Use Your Information
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Respond to enquiries and provide customer support</li>
            <li>Provide property-related services</li>
            <li>Improve our website and services</li>
            <li>Communicate with you regarding our services</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            Data Protection
          </h2>

          <p>
            We take appropriate measures to protect your personal information
            against unauthorised access, misuse, or disclosure.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Your Rights
          </h2>

          <p>
            Under applicable data protection laws, you have the right to request
            access to the personal data we hold about you and request that your
            information be corrected or removed.
          </p>

        </div>
      </section>


      {/* Terms & Conditions */}
      <section>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Terms & Conditions
        </h1>

        <div className="mt-6 space-y-6 leading-relaxed text-muted">

          <p>
            By accessing and using this website, you agree to comply with these
            terms and conditions. If you do not agree with any part of these
            terms, please do not use this website.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Website Use
          </h2>

          <p>
            The content provided on this website is for general informational
            purposes only. While we aim to ensure the information is accurate
            and up to date, we do not guarantee its completeness or accuracy.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Intellectual Property
          </h2>

          <p>
            All content on this website, including text, images, and design, is
            the property of the website owner unless otherwise stated and may
            not be reproduced without permission.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Limitation of Liability
          </h2>

          <p>
            We are not responsible for any direct or indirect loss or damage
            arising from the use of this website or reliance on the information
            provided.
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            Changes to These Terms
          </h2>

          <p>
            These terms may be updated from time to time. Continued use of this
            website after any updates constitutes acceptance of the revised
            terms.
          </p>

        </div>
      </section>

    </main>
  );
}

