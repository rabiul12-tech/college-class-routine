"use client";

import React from "react";
import { dayMap, scheduleData, departments, grades } from "@/lib/data";

type Props = {
  onFilter: (day: string, dept: string, grade: string) => void;
};

export default function FilterPanel({ onFilter }: Props) {
  const [day, setDay] = React.useState<string>("");
  const [dept, setDept] = React.useState<string>("");
  const [grade, setGrade] = React.useState<string>("");

  // initialize defaults to first available
  React.useEffect(() => {
    const firstDayWithData =
      dayMap.find((d) => Object.keys(scheduleData[d] || {}).length > 0) ||
      dayMap[0];
    setDay(firstDayWithData);
    setDept(departments[0]);
    setGrade(grades[0]);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 sticky top-20 z-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            দিন
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            {dayMap
              .filter(
                (d) => Object.keys(scheduleData[d] || {}).length > 0
              )
              .map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            বিভাগ
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            শ্রেণী
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            className="w-full bg-blue-600 text-white p-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors"
            onClick={() => onFilter(day, dept, grade)}
          >
            রুটিন দেখুন
          </button>
        </div>
      </div>
    </div>
  );
}
