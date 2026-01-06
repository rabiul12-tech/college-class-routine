import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ==========================================
// 1. UI Helper (Tailwind Class Merger)
// ==========================================
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==========================================
// 2. General Helpers (ID & Date)
// ==========================================

// ইউনিক আইডি জেনারেটর
export const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

// ডেট ফরম্যাটার (বাংলায় তারিখ দেখানোর জন্য)
export const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("bn-BD", {
    month: "short",
    day: "numeric",
  });
};

// রিকারিং ডেট ক্যালকুলেটর (পরবর্তী তারিখ বের করার জন্য)
export const calculateNextDate = (
  currentDateStr: string,
  frequency: string
) => {
  const date = currentDateStr ? new Date(currentDateStr) : new Date();
  switch (frequency) {
    case "daily":
      date.setDate(date.getDate() + 1);
      break;
    case "weekly":
      date.setDate(date.getDate() + 7);
      break;
    case "monthly":
      date.setMonth(date.getMonth() + 1);
      break;
  }
  return date.toISOString().split("T")[0];
};

// ==========================================
// 3. Class Routine Helpers (Existing Code)
// ==========================================

// পিরিয়ডটি ফাঁকা কিনা চেক করার ফাংশন
export function isFreePeriod(subject: string | undefined | null): boolean {
  if (!subject) return true;
  const clean = subject.trim();
  if (clean === "" || clean === "---") return true;
  return false;
}

// সাবজেক্টের নাম দেখানোর ফাংশন (ফাঁকা থাকলে 'ফাঁকা পিরিয়ড' দেখাবে)
export function displaySubjectName(subject: string | undefined | null): string {
  if (!subject || subject.trim() === "" || subject.trim() === "---") {
    return "ফাঁকা পিরিয়ড (---)";
  }
  return subject;
}
