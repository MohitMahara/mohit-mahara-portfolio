import { contactData } from "@/data/contactData";

export default function Footer() {
  return (
    <footer className="py-10 max-w-4xl mx-auto px-4 md:px-10">
      <div className="divider my-4"></div>
      <div className="mb-10">
        <h2 className="text-xl font-medium text-white">
          Let&apos;s connect
        </h2>

        <p className="mt-3 text-base text-white/30">
          Find me around the web
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {contactData.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={name === "Mail" ? undefined : "_blank"}
            rel={name === "Mail" ? undefined : "noopener noreferrer"}
            className="
              group
              inline-flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.02]
              px-4 py-2
              text-sm text-white/60
              transition-all duration-200
              hover:border-white/20
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <Icon
              className="
                size-4
                text-white/40
                transition-colors duration-200
                group-hover:text-white/80
              "
            />

            <span>{name}</span>
          </a>
        ))}
      </div>

      <div className="my-8 h-px w-full bg-white/10" />

      <div className="flex justify-center items-center text-sm text-white/35">
        <p>© 2026 Mohit Mahara.</p>
      </div>
    </footer>
  );
}