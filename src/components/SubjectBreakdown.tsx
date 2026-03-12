"use client";

import React, { useMemo, useState } from "react";

import { useAttendanceStore } from "@/lib/useAttendanceStore";
import { scheduleData } from "@/lib/data";

function collectAllSubjects(): string[] {
  const set = new Set<string>();

  Object.values(scheduleData).forEach((dayObj: any) => {
    Object.values(dayObj || {}).forEach((deptObj: any) => {
      Object.values(deptObj || {}).forEach((periodArray: any) => {
        (periodArray || []).forEach((subj: string) => {
          if (subj && subj.trim() !== "" && subj.trim() !== "---") {
            set.add(subj.normalize("NFKC").replace(/\s+/g, " ").trim());
          }
        });
      });
    });
  });

  return Array.from(set).sort();
}

export default function SubjectBreakdown() {
  const { attendanceLog, removeRecordAt } = useAttendanceStore();
  const [selectedSubject, setSelectedSubject] = React.useState<string>("");
  const [selectedGrade, setSelectedGrade] = React.useState<string>("all");
  const [resultHtml, setResultHtml] = useState<React.ReactElement | null>(null);

  const subjects = React.useMemo(() => collectAllSubjects(), []);

  function generateReport() {
    if (!selectedSubject || attendanceLog.length === 0) {
      setResultHtml(
        <p className="text-gray-500 text-center">
          কোনো তথ্য নেই। প্রথমে উপস্থিতি মার্ক করুন।
        </p>
      );
      return;
    }

    // include original index for safe deletion
    const filtered = attendanceLog
      .map((row, idx) => ({ row, idx }))
      .filter(({ row }) => {
        if (row.subject !== selectedSubject) return false;
        if (selectedGrade !== "all" && row.grade !== selectedGrade)
          return false;
        return true;
      });

    if (filtered.length === 0) {
      setResultHtml(
        <p className="text-gray-500 text-center">
          কোন রেকর্ড পাওয়া যায়নি এই বাছাই অনুযায়ী।
        </p>
      );
      return;
    }

    let ontimeCount = 0;
    let delayedCount = 0;
    let absentCount = 0;
    let snCount = 0; // NEW: S.N counter

    filtered.forEach(({ row }) => {
      if (row.status === "ontime") ontimeCount++;
      else if (row.status === "delayed") delayedCount++;
      else if (row.status === "absent") absentCount++;
      else if (row.status === "sn") snCount++; // count S.N
    });

    const summary = (
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          বিষয়: {selectedSubject}
          {selectedGrade !== "all" ? ` • শ্রেণী: ${selectedGrade}` : ""}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
            <div className="text-sm text-green-600 font-medium">On Time</div>
            <div className="text-2xl font-bold text-green-700">
              {ontimeCount}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-center">
            <div className="text-sm text-yellow-600 font-medium">Delayed</div>
            <div className="text-2xl font-bold text-yellow-700">
              {delayedCount}
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded p-4 text-center">
            <div className="text-sm text-red-600 font-medium">Absent</div>
            <div className="text-2xl font-bold text-red-700">{absentCount}</div>
          </div>

          {/* NEW: S.N panel */}
          <div className="bg-purple-50 border border-purple-200 rounded p-4 text-center">
            <div className="text-sm text-purple-600 font-medium">
              S.N (Not Present)
            </div>
            <div className="text-2xl font-bold text-purple-700">{snCount}</div>
          </div>
        </div>
      </div>
    );

    const rows = filtered.map(({ row, idx }, i) => {
      let label = "";
      let color = "";
      if (row.status === "ontime") {
        label = "On Time";
        color = "text-green-600";
      } else if (row.status === "delayed") {
        label = "Delayed";
        color = "text-yellow-600";
      } else if (row.status === "absent") {
        label = "Absent";
        color = "text-red-600";
      } else if (row.status === "sn") {
        label = "S.N"; // NEW label
        color = "text-purple-600"; // NEW color
      }

      const onDelete = () => {
        if (!confirm("রেকর্ডটি মুছবেন?")) return;
        removeRecordAt(idx); // remove from store
        // rebuild the table view using latest store state
        setTimeout(generateReport, 0);
      };

      return (
        <tr key={idx} className="border-t border-gray-200">
          <td className="px-3 py-2">{row.date}</td>
          <td className="px-3 py-2">{row.time}</td>
          <td className="px-3 py-2">{row.grade}</td>
          <td className={`px-3 py-2 font-semibold ${color}`}>{label}</td>{" "}
          <td className="px-3 py-2">
            {row.status === "delayed"
              ? Number.isFinite(row.delayMinutes as number)
                ? row.delayMinutes
                : 0
              : "—"}
          </td>
          <td className="px-3 py-2 text-right">
            <button
              onClick={onDelete}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 text-xs"
              title="রেকর্ড মুছুন"
            >
              {/* tiny trash icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 2a1 1 0 00-1 1v1H3.5a.5.5 0 000 1h13a.5.5 0 000-1H15V3a1 1 0 00-1-1H6zm1 4a.75.75 0 011.5 0v8a.75.75 0 01-1.5 0V6zm5 0a.75.75 0 00-1.5 0v8a.75.75 0 001.5 0V6z" />
                <path d="M5 5h10v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
              ডিলিট
            </button>
          </td>
        </tr>
      );
    });

    const table = (
      <table className="min-w-full text-left border border-gray-200 rounded overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-sm font-medium border-b border-gray-200">
          <tr>
            <th className="px-3 py-2">তারিখ</th>
            <th className="px-3 py-2">সময়</th>
            <th className="px-3 py-2">শ্রেণী</th>
            <th className="px-3 py-2">স্ট্যাটাস</th>
            <th className="px-3 py-2">বিলম্ব (মিনিট)</th> {/* NEW */}{" "}
            <th className="px-3 py-2 text-right">মুছুন</th> {/* ⬅️ NEW */}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">{rows}</tbody>
      </table>
    );

    setResultHtml(
      <div>
        {summary}
        {table}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        বিষয়ভিত্তিক উপস্থিতি (সিলেক্ট করুন)
      </h3>

      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-700 font-medium mb-1">
            বিষয় নির্বাচন করুন
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">-- সিলেক্ট করুন --</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-gray-700 font-medium mb-1">
            শ্রেণী
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            <option value="all">সব</option>
            <option value="একাদশ">একাদশ</option>
            <option value="দ্বাদশ">দ্বাদশ</option>
          </select>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors"
          onClick={generateReport}
        >
          রিপোর্ট দেখুন
        </button>
      </div>

      <div className="overflow-x-auto">
        {resultHtml ? (
          resultHtml
        ) : (
          <p className="text-gray-500 text-center">
            কোনো তথ্য নেই। প্রথমে উপস্থিতি মার্ক করুন।
          </p>
        )}
      </div>
    </div>
  );
}
