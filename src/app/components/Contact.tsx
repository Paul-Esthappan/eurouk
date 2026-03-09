"use client";

import { useState } from "react";
import { site } from "@/content/site";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      body: new URLSearchParams(data as any).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    setLoading(false);
    setSuccess(true);
    form.reset();
  };

  return (
    <section id="contact" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="text-sm">
              Email:{" "}
              <a href={`mailto:${site.contact.email}`} className="underline">
                {site.contact.email}
              </a>
            </p>

            <p className="mt-2 text-sm">Phone: {site.contact.phone}</p>

            <h3 className="mt-6 font-medium">Opening Hours</h3>

            <ul className="mt-2 space-y-1 text-sm">
              {site.contact.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>

            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-2xl border p-6 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot spam protection */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
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
                rows={5}
                placeholder="Message"
                className="rounded-xl border px-3 py-2"
              />

              <button className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">
                Send Message
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}