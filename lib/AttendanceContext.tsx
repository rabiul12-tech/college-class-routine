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
  status: "ontime" | "delayed" | "absent";
  delayMinutes?: number;
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

  // 1. On mount, load from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setAttendanceLog(parsed);
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
