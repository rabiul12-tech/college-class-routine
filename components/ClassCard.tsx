"use client";

import React from "react";
import { isFreePeriod, displaySubjectName } from "@/lib/utils";
import { useAttendanceStore } from "@/lib/useAttendanceStore";

type ClassCardProps = {
  time: string; // e.g. "10:00 - 10:40"
  subject: string | null;
  grade: string;
};

// -------- helpers --------
const normalize = (s: string) =>
  s.normalize("NFKC").replace(/\s+/g, " ").trim();

// Convert Bangla digits to ASCII (e.g., ১০:৩০ -> 10:30)
function bnToEnDigits(s: string) {
  const bn = "০১২৩৪৫৬৭৮৯";
  const en = "0123456789";
  return (s || "").replace(/[০-৯]/g, (ch) => {
    const i = bn.indexOf(ch);
    return i >= 0 ? en[i] : ch;
  });
}

// "10:30 - 11:10" (including Bangla digits/dashes) -> today 10:30 in ms
function parseStartMs(todayISO: string, timeRange: string) {
  // normalize digits and en/em dashes to ASCII hyphen
  const ascii = bnToEnDigits(timeRange || "").replace(/[–—]/g, "-");
  const [startPartRaw] = ascii.split("-");
  const startPart = (startPartRaw || "").trim();

  // extract HH:MM safely
  const m = startPart.match(/(\d{1,2}):(\d{2})/);
  let hh = 0,
    mm = 0;
  if (m) {
    const h = parseInt(m[1], 10);
    const m2 = parseInt(m[2], 10);
    hh = Number.isFinite(h) ? h : 0;
    mm = Number.isFinite(m2) ? m2 : 0;
  }

  const d = new Date(todayISO); // "yyyy-mm-dd"
  d.setHours(hh, mm, 0, 0);
  return d.getTime();
}

export default function ClassCard({ time, subject, grade }: ClassCardProps) {
  const { addRecord, attendanceLog } = useAttendanceStore();

  const free = isFreePeriod(subject || "");
  const shownSubject = displaySubjectName(subject || "");
  const classDate = React.useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );
  const subjKey = normalize(subject ? subject : "---");

  // 🔒 already saved?
  const isLocked = React.useMemo(
    () =>
      attendanceLog.some(
        (r) =>
          r.date === classDate &&
          r.time === time &&
          r.grade === grade &&
          normalize(r.subject) === subjKey
      ),
    [attendanceLog, classDate, time, grade, subjKey]
  );

  // UI state, hydrate from log if exists
  const [status, setStatus] = React.useState<
    "" | "ontime" | "delayed" | "absent"
  >("");

  React.useEffect(() => {
    const existing = attendanceLog.find(
      (r) =>
        r.date === classDate &&
        r.time === time &&
        r.grade === grade &&
        normalize(r.subject) === subjKey
    );
    if (existing) setStatus(existing.status);
  }, [attendanceLog, classDate, time, grade, subjKey]);

  function handleSetStatus(next: "ontime" | "delayed" | "absent") {
    if (free || isLocked) return;

    setStatus(next);

    // compute delay when delayed = now - scheduled start (clamped to 0)
    let delayMinutes: number | undefined = undefined;
    if (next === "delayed") {
      const now = Date.now();
      const startMs = parseStartMs(classDate, time);
      const diffMin = Math.round((now - startMs) / 60000);
      delayMinutes = Math.max(0, Number.isFinite(diffMin) ? diffMin : 0);
    }

    addRecord({
      date: classDate,
      subject: subjKey,
      grade,
      time,
      status: next,

      delayMinutes,
    });

    showToast("স্ট্যাটাস সেভ করা হয়েছে!");
  }

  // Toast helper
  function showToast(msg: string) {
    const el = document.getElementById("toast-root");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("opacity-0");
    el.classList.add("opacity-100");
    setTimeout(() => {
      el.classList.add("opacity-0");
      el.classList.remove("opacity-100");
    }, 2000);
  }

  // background by status
  let cardBg = "bg-white";
  if (free) cardBg = "bg-gray-100";
  else if (status === "ontime") cardBg = "bg-green-50";
  else if (status === "delayed") cardBg = "bg-yellow-50";
  else if (status === "absent") cardBg = "bg-red-50";

  const statusTextDisplay = free
    ? "এই পিরিয়ডে ক্লাস নেই"
    : status === ""
    ? "স্ট্যাটাস: অপেক্ষমান"
    : status === "ontime"
    ? "স্ট্যাটাস: On Time"
    : status === "delayed"
    ? "স্ট্যাটাস: Delayed"
    : "স্ট্যাটাস: Absent";

  const statusColorClass = free
    ? "text-gray-400"
    : status === "ontime"
    ? "text-green-700"
    : status === "delayed"
    ? "text-yellow-700"
    : status === "absent"
    ? "text-red-700"
    : "text-gray-500";

  return (
    <div className={`${cardBg} p-4 rounded-lg shadow-md mb-4`}>
      <div className="flex justify-between items-center mb-3">
        <span
          className={`font-bold text-lg ${
            free ? "text-gray-400 line-through" : ""
          }`}
        >
          {shownSubject}
        </span>
        <span className="text-sm text-gray-500">{time}</span>
      </div>

      <div className="mb-3">
        <span className="text-sm text-gray-600">{grade} শ্রেণী</span>
      </div>

      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${statusColorClass}`}>
          {statusTextDisplay}
        </span>

        {free ? (
          <div className="text-xs text-gray-400 italic">
            স্ট্যাটাস প্রযোজ্য নয়
          </div>
        ) : (
          <div
            className={`flex space-x-1 ${
              isLocked ? "pointer-events-none opacity-70" : ""
            }`}
            aria-disabled={isLocked}
          >
            <button
              onClick={() => handleSetStatus("ontime")}
              className="status-btn p-1 rounded-full hover:bg-green-100 disabled:opacity-50"
              disabled={isLocked}
              title={isLocked ? "Locked" : "On Time"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => handleSetStatus("delayed")}
              className="status-btn p-1 rounded-full hover:bg-yellow-100 disabled:opacity-50"
              disabled={isLocked}
              title={isLocked ? "Locked" : "Delayed"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v5a1 1 0 102 0V6zm-1 9a1 1 0 110-2 1 1 0 010 2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => handleSetStatus("absent")}
              className="status-btn p-1 rounded-full hover:bg-red-100 disabled:opacity-50"
              disabled={isLocked}
              title={isLocked ? "Locked" : "Absent"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {isLocked && (
        <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
          <i className="ri-lock-fill" />
          এই পিরিয়ডটি লক করা হয়েছে
        </div>
      )}
    </div>
  );
}
