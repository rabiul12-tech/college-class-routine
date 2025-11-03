"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type AttendanceRecord = {
  date: string; // yyyy-mm-dd
  subject: string;
  grade: string;
  time: string;
  // widened to include "sn" (Student Not present)
  status: "ontime" | "delayed" | "absent" | "sn";
  delayMinutes?: number;
  // optional short note for S.N. (or any extra reason)
  snReason?: string;
};

const STORAGE_KEY = "attendanceLog_v1";

export type AttendanceContextType = {
  attendanceLog: AttendanceRecord[];
  addRecord: (rec: AttendanceRecord) => void;
  removeRecordAt: (index: number) => void; // NEW
};

const AttendanceContext = createContext<AttendanceContextType | null>(null);

export function AttendanceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // internal state
  const [attendanceLog, setAttendanceLog] = useState<AttendanceRecord[]>([]);
  const [loaded, setLoaded] = useState(false);
  // loaded = have we finished restoring from localStorage?

  // helper: validate / normalize a raw object from storage into AttendanceRecord
  function normalizeRecord(raw: any): AttendanceRecord | null {
    if (!raw || typeof raw !== "object") return null;
    const allowed = new Set(["ontime", "delayed", "absent", "sn"]);

    // keep basic fields but guard types
    const date = typeof raw.date === "string" ? raw.date : "";
    const subject = typeof raw.subject === "string" ? raw.subject : "";
    const grade = typeof raw.grade === "string" ? raw.grade : "";
    const time = typeof raw.time === "string" ? raw.time : "";

    // coerce/normalize status — if it's unknown, default to 'absent'
    const rawStatus = typeof raw.status === "string" ? raw.status : "absent";
    const status = allowed.has(rawStatus)
      ? (rawStatus as AttendanceRecord["status"])
      : "absent";

    // delayMinutes only valid for delayed
    let delayMinutes: number | undefined = undefined;
    if (status === "delayed") {
      const dm = Number(raw.delayMinutes);
      delayMinutes = Number.isFinite(dm) ? dm : 0;
    }

    const snReason =
      typeof raw.snReason === "string" ? raw.snReason : undefined;

    // minimal validation: require date/time/subject/grade (adjust as you prefer)
    if (!date || !time || !subject || !grade) return null;

    return {
      date,
      subject,
      grade,
      time,
      status,
      delayMinutes,
      snReason,
    };
  }

  // 1. On mount, load from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const fixed: AttendanceRecord[] = parsed
            .map((r: any) => normalizeRecord(r))
            .filter((r): r is AttendanceRecord => r !== null);
          setAttendanceLog(fixed);
        }
      }
    } catch (err) {
      console.error("Failed to load attendance from localStorage", err);
    } finally {
      // Mark that we've attempted loading
      setLoaded(true);
    }
  }, []);

  // 2. After load, whenever attendanceLog changes, persist to localStorage
  useEffect(() => {
    // IMPORTANT: don't write before we've loaded, or we will overwrite
    if (!loaded) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attendanceLog));
    } catch (err) {
      console.error("Failed to save attendance", err);
    }
  }, [attendanceLog, loaded]);

  // 3. API to add a new attendance record
  const addRecord = useCallback((rec: AttendanceRecord) => {
    setAttendanceLog((prev) => [...prev, rec]);
  }, []);
  const removeRecordAt = useCallback((index: number) => {
    setAttendanceLog((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <AttendanceContext.Provider
      value={{
        attendanceLog,
        addRecord,
        removeRecordAt, // NEW
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}

// Hook to read/write attendance from anywhere
export function useAttendanceStore() {
  const ctx = useContext(AttendanceContext);
  if (!ctx) {
    throw new Error(
      "useAttendanceStore must be used inside <AttendanceProvider>"
    );
  }
  return ctx;
}
