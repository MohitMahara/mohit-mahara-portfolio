"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { workData } from "../data/workData";

export default function WorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleWork = (index: number) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section className="pb-12 max-w-4xl mx-auto px-4 md:px-10" id="work">
      <h2 className="mb-7 text-lg font-semibold text-white">
        Work
      </h2>

      <div>
        {workData.map((work, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={`${work.Organization}-${work.startDate}`}
              className={[
                "border-b border-white/10",
                index === workData.length - 1
                  ? "border-b-0"
                  : "",
              ].join(" ")}
            >
              {/* Work header */}
              <button
                type="button"
                onClick={() => toggleWork(index)}
                className="group flex w-full items-center gap-3 py-4 text-left"
                aria-expanded={isOpen}
              >
                {/* Organization logo */}
                <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#171719]">
                  {work.OrgLogo ? (
                    <img
                      src={work.OrgLogo}
                      alt={`${work.Organization} logo`}
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="text-xs font-semibold text-white">
                      {work.Organization.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Organization + role */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-white">
                    {work.Organization}
                  </h3>

                  <p className="mt-0.5 text-sm text-zinc-500">
                    {work.Role}
                  </p>
                </div>

                {/* Date */}
                <span className="hidden shrink-0 text-xs text-zinc-500 sm:block">
                  {work.startDate} – {work.EndDate}
                </span>

                {/* Chevron */}
                <span className="ml-1 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-300">
                  {isOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </span>
              </button>

              {/* Mobile date */}
              <div
                className={[
                  "pb-3 pl-11 text-xs text-zinc-500 sm:hidden",
                  isOpen ? "block" : "hidden",
                ].join(" ")}
              >
                {work.startDate} – {work.EndDate}
              </div>

              {/* Expanded content */}
              <div
                className={[
                  "grid transition-[grid-template-rows,opacity]",
                  "duration-300 ease-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 pl-11 pr-2 sm:pr-8">
                    {work.Description.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={[
                            "text-sm leading-6 text-zinc-400",
                            paragraphIndex > 0
                              ? "mt-4"
                              : "",
                          ].join(" ")}
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}