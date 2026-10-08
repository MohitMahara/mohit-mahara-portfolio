"use client";

import { technologies } from "@/data/skillsData";


export default function TechStackSection() {
  return (
    <section className="py-10 max-w-4xl mx-auto px-4 md:px-10" id="skills">
      <h2 className="mb-8 text-lg font-semibold text-white">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-2">
        {technologies.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="
              group flex items-center gap-2
              rounded-md border border-white/10
              bg-white/[0.015]
              px-4 py-2
              text-sm text-white/65
              transition-all duration-200
              hover:border-white/20
              hover:bg-white/[0.04]
              hover:text-white
            "
          >
            <Icon
              className="
                text-[15px] text-white/35
                transition-colors duration-200
                group-hover:text-white/70
              "
            />

            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}