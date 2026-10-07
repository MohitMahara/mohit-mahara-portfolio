"use client";

import { useEffect, useMemo, useState } from "react";

type Platform = "github";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionGraphProps = {
  platform: Platform;
  username: string;
};

const CELL_SIZE = 13;
const GAP = 4;
const WEEKS = 44;

function getMonday(date: Date) {
  const d = new Date(date);
  const day = d.getDay();

  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);

  return d;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

function formatMonth(date: Date) {
  return date.toLocaleString("en-US", {
    month: "short",
  });
}


function getLevelClass(level: number) {
  switch (level) {
    case 0:
      return "bg-[#1b1b1e]";

    case 1:
      return "bg-[#555559]";

    case 2:
      return "bg-[#88888d]";

    case 3:
      return "bg-[#bdbdc2]";

    case 4:
      return "bg-[#f2f2f2]";

    default:
      return "bg-[#1b1b1e]";
  }
}

export default function ContributionGraph({
  platform,
  username,
}: ContributionGraphProps) {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (platform !== "github" || !username) return;

    const fetchContributions = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch GitHub contributions"
          );
        }

        const result = await response.json();

        setContributions(
          result.contributions.map(
            (item: {
              date: string;
              count: number;
              level: number;
            }) => ({
              date: item.date,
              count: item.count,
              level: item.level,
            })
          )
        );

        setTotalContributions(
          result.total?.lastYear ?? 0
        );
      } catch (error) {
        console.error(
          "Failed to load contributions:",
          error
        );

        setContributions([]);
        setTotalContributions(0);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [platform, username]);


  const contributionMap = useMemo(() => {
    return new Map(
      contributions.map((item) => [
        item.date,
        item,
      ])
    );
  }, [contributions]);


  const weeks = useMemo(() => {
    const today = new Date();

    const currentMonday = getMonday(today);

    const start = addDays(
      currentMonday,
      -(WEEKS - 1) * 7
    );

    return Array.from(
      { length: WEEKS },
      (_, weekIndex) => {
        const weekStart = addDays(
          start,
          weekIndex * 7
        );

        return Array.from(
          { length: 7 },
          (_, dayIndex) =>
            addDays(weekStart, dayIndex)
        );
      }
    );
  }, []);


  const monthLabels = useMemo(() => {
    const labels: {
      month: string;
      column: number;
    }[] = [];

    let lastMonth = "";

    weeks.forEach((week, column) => {
      const month = formatMonth(week[0]);

      if (month !== lastMonth) {
        labels.push({
          month,
          column,
        });

        lastMonth = month;
      }
    });

    return labels;
  }, [weeks]);

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-md font-semibold text-white">
            Contributions
          </h2>

          <p className="mt-2 text-sm text-zinc-400 font-semibold">
            {loading
              ? "Loading contributions..."
              : `${totalContributions.toLocaleString()} in the last year`}
          </p>
        </div>

        <span className="text-xs text-zinc-400">
          @{username}
        </span>
      </div>

      {/* Graph */}
      <div className="overflow-x-auto scrollbar-none pb-2">
        <div
          className="grid min-w-max"
          style={{
            gridTemplateColumns: `24px repeat(${WEEKS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `20px repeat(7, ${CELL_SIZE}px)`,
            columnGap: `${GAP}px`,
            rowGap: `${GAP}px`,
          }}
        >
          {/* Month labels */}
          <div />

          {monthLabels.map((item) => (
            <div
              key={`${item.month}-${item.column}`}
              className="text-[11px] leading-4 text-zinc-400 font-semibold"
              style={{
                gridColumn: item.column + 2,
              }}
            >
              {item.month}
            </div>
          ))}

          {/* Contribution cells */}
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="contents"
            >
              {week.map((date, dayIndex) => {
                const dateString =
                  formatDate(date);

                const contribution =
                  contributionMap.get(
                    dateString
                  );

                const count =
                  contribution?.count ?? 0;

                const level =
                  contribution?.level ?? 0;

                return (
                  <div
                    key={dateString}
                    className={[
                      "group relative rounded-[2px]",
                      "transition-all duration-100",
                      getLevelClass(level),
                      "hover:ring-1 hover:ring-white/40",
                    ].join(" ")}
                    style={{
                      gridColumn: weekIndex + 2,
                      gridRow: dayIndex + 2,
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                    }}
                    title={`${count} contribution${
                      count === 1 ? "" : "s"
                    } on ${date.toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}`}
                  />
                );
              })}
            </div>
          ))}

          {/* Weekday labels */}
          <span
            className="text-[11px] leading-3 text-zinc-400 font-semibold"
            style={{
              gridColumn: 1,
              gridRow: 3,
            }}
          >
            Mon
          </span>

          <span
            className="text-[11px] leading-3 text-zinc-400 font-semibold"
            style={{
              gridColumn: 1,
              gridRow: 5,
            }}
          >
            Wed
          </span>

          <span
            className="text-[11px] leading-3 text-zinc-400 font-semibold"
            style={{
              gridColumn: 1,
              gridRow: 7,
            }}
          >
            Fri
          </span>
        </div>
      </div>
    </section>
  );
}