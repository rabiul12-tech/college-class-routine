"use client";

import React from "react";
import { scheduleData, timeSlots } from "@/lib/data";
import FilterPanel from "./FilterPanel";
import { isFreePeriod, displaySubjectName } from "@/lib/utils";

export default function FullScheduleView() {
  const [rendered, setRendered] = React.useState<
    { time: string; subject: string; isFree: boolean }[]
  >([]);
  const [title, setTitle] = React.useState<string>(
    "অনুগ্রহ করে ফিল্টার নির্বাচন করে রুটিন দেখুন।"
  );

  function handleFilter(day: string, dept: string, grade: string) {
    const subjects: string[] | undefined =
      scheduleData?.[day]?.[dept]?.[grade];

    if (!subjects) {
      setRendered([]);
      setTitle("এই নির্বাচনের জন্য কোনো রুটিন পাওয়া যায়নি।");
      return;
    }

    const rows = subjects.map((subj, i) => {
      const free = isFreePeriod(subj);
      return {
        time: timeSlots[i] || "",
        subject: subj ?? "",
        isFree: free,
      };
    });

    setRendered(rows);
    setTitle(`${day} - ${dept} - ${grade} শ্রেণী`);
  }

  return (
    <section className="mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        সম্পূর্ণ রুটিন এক্সপ্লোরার
      </h2>

      <p className="mb-6 text-gray-600">
        সম্পূর্ণ সাপ্তাহিক সময়সূচী দেখতে ফিল্টার ব্যবহার করুন।
        অনুগ্রহ করে একটি দিন, বিভাগ এবং শ্রেণী নির্বাচন করুন, তারপর
        "রুটিন দেখুন" বাটনে ক্লিক করুন।
      </p>

      <FilterPanel onFilter={handleFilter} />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        {rendered.length === 0 ? (
          <p className="text-center text-gray-500">
            কোনো ডেটা নেই।
          </p>
        ) : (
          <div className="divide-y divide-gray-200">
            {rendered.map((row, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-4"
              >
                <span className="text-gray-500 font-medium">
                  {row.time}
                </span>
                <span
                  className={`font-bold text-lg ${
                    row.isFree
                      ? "text-gray-400 line-through"
                      : "text-blue-800"
                  }`}
                >
                  {displaySubjectName(row.subject)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
