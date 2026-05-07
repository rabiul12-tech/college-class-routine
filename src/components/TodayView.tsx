"use client";

import React, { useState } from "react";
import {
  scheduleData,
  dayMap,
  departments,
  grades,
  timeSlots,
} from "@/lib/data";
import ClassCard from "./ClassCard";

export default function TodayView() {
  const todayIndex = new Date().getDay(); // 0-6
  const defaultDay = dayMap[todayIndex];

  const [selectedDay, setSelectedDay] = useState(defaultDay);

  const todayData: any = scheduleData[selectedDay] || {};

  const noClass = !todayData || Object.keys(todayData).length === 0;

  return (
    <section className="mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        রুটিন ({selectedDay})
      </h2>

      <p className="mb-6 text-gray-600">
        এটি আজকের নির্ধারিত ক্লাসের একটি রিয়েল-টাইম ভিউ। এখান থেকে শিক্ষকদের
        উপস্থিতি সরাসরি আপডেট করা যাবে।
      </p>

      {/* 7 Days Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {dayMap.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded border transition ${
              selectedDay === day
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {noClass ? (
        <p className="text-center text-2xl text-gray-500 mt-10">
          আজ কোনো নির্ধারিত ক্লাস নেই।
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {departments.map((dept) => {
            const deptSchedules = todayData[dept];

            if (!deptSchedules) return null;

            return (
              <div key={dept} className="col-span-1">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  {dept}
                </h3>

                {grades.map((grade) => {
                  const slots = deptSchedules[grade];

                  if (!slots) return null;

                  return (
                    <div key={grade}>
                      <h4 className="text-xl font-medium mb-3 text-gray-700">
                        {grade} শ্রেণী
                      </h4>

                      {slots.map((subject: string, i: number) => (
                        <ClassCard
                          key={i}
                          time={timeSlots[i] || ""}
                          subject={subject ?? ""}
                          grade={grade}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
