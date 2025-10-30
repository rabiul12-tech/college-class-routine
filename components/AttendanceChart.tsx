"use client";

import React from "react";

export default function AttendanceChart() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const chartRef = React.useRef<any>(null);

  const [period, setPeriod] = React.useState<"today" | "week" | "month">(
    "today"
  );

  React.useEffect(() => {
    async function setup() {
      // ✅ use chart.js/auto so it's already fully registered
      const { default: ChartJS } = await import("chart.js/auto");

      if (!canvasRef.current) return;

      // destroy old chart instance if exists (avoid memory leak + duplicate charts)
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const { onTime, delayed, absent } = getData(period);

      chartRef.current = new ChartJS(canvasRef.current.getContext("2d")!, {
        type: "bar",
        data: {
          labels: ["On Time", "Delayed", "Absent"],
          datasets: [
            {
              label: "Attendance Status",
              data: [onTime, delayed, absent],
              backgroundColor: [
                "rgba(74, 222, 128, 0.6)",
                "rgba(251, 191, 36, 0.6)",
                "rgba(239, 68, 68, 0.6)",
              ],
              borderColor: [
                "rgba(34, 197, 94, 1)",
                "rgba(245, 158, 11, 1)",
                "rgba(220, 38, 38, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: `উপস্থিতি সারাংশ (${period})`,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "ক্লাসের সংখ্যা",
              },
            },
          },
        },
      });
    }

    setup();
  }, [period]);

  function getData(p: "today" | "week" | "month") {
    // Same placeholder logic
    if (p === "today") {
      return {
        onTime: rand(1, 10),
        delayed: rand(0, 3),
        absent: rand(0, 2),
      };
    }
    if (p === "week") {
      return {
        onTime: rand(10, 60),
        delayed: rand(5, 20),
        absent: rand(0, 10),
      };
    }
    return {
      onTime: rand(50, 250),
      delayed: rand(10, 50),
      absent: rand(5, 35),
    };
  }

  function rand(min: number, max: number) {
    // inclusive min, exclusive max
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Period Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <PeriodButton
          label="আজ"
          active={period === "today"}
          onClick={() => setPeriod("today")}
        />
        <PeriodButton
          label="গত ৭ দিন"
          active={period === "week"}
          onClick={() => setPeriod("week")}
        />
        <PeriodButton
          label="গত ৩০ দিন"
          active={period === "month"}
          onClick={() => setPeriod("month")}
        />
      </div>

      {/* Chart Area */}
      <div className="relative w-full max-w-[700px] mx-auto h-[300px] md:h-[350px]">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

function PeriodButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md shadow ${
        active
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-300 text-gray-800 hover:bg-gray-400"
      }`}
    >
      {label}
    </button>
  );
}
