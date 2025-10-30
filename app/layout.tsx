import "./globals.css";
import { AttendanceProvider } from "@/lib/AttendanceContext";

export const metadata = {
  title: "ক্লাস রুটিন ম্যানেজমেন্ট",
  description: "রিয়েল-টাইম উপস্থিতি ও রুটিন ম্যানেজমেন্ট সিস্টেম",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="stylesheet" href="/fonts.css" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* 🔥 Global attendance state lives here */}
        <AttendanceProvider>{children}</AttendanceProvider>
      </body>
    </html>
  );
}
