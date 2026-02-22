import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="text-sm text-neutral-700">
              Email:{" "}
              <a className="underline" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-neutral-700">Phone: {site.contact.phone}</p>

            <h3 className="mt-6 font-medium">Opening Hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              {site.contact.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>

            <a
              className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>

          <form
            name="contact"
            method="POST"
            action="/contact/success"
            data-netlify="true"
            netlify-honeypot="leave_blank"
            className="rounded-2xl border p-6 shadow-sm"
          >
            {/* required for Netlify to identify the form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* honeypot field (hide with CSS; bots will fill it) */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="leave_blank" />
              </label>
            </p>

            <div className="grid gap-3">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl border px-3 py-2"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="rounded-xl border px-3 py-2"
              />
              <input
                name="subject"
                required
                placeholder="Subject"
                className="rounded-xl border px-3 py-2"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={5}
                className="rounded-xl border px-3 py-2"
              />
              <button className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">
                Send Message
              </button>
              <p className="text-xs text-neutral-500">
                This form is protected with a honeypot to reduce spam.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}