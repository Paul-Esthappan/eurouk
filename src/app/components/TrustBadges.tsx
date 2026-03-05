import Image from "next/image";

const badges = [
  { name: "Fully Insured", src: "/images/certifications/fully-insured.svg" },
  { name: "General Liability Insurance", src: "/images/certifications/general-liability.svg" },
  { name: "HMRC Registered", src: "/images/certifications/hmrc.svg" },
  { name: "Professional Indemnity Insurance", src: "/images/certifications/professional-indemnity.svg" },
  { name: "ICO Registered", src: "/images/certifications/ico.svg" },
  { name: "Property Redress Scheme", src: "/images/certifications/prs.svg" },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">

        <p className="text-center text-sm text-muted mb-8">
          Certified, compliant and trusted in the UK property market
        </p>

        <div className="grid grid-cols-2 gap-8 items-center justify-items-center sm:grid-cols-3 md:grid-cols-6">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="opacity-80 hover:opacity-100 transition duration-200"
            >
              <Image
                src={badge.src}
                alt={badge.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}