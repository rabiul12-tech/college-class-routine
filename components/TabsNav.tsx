"use client";

import Link from "next/link";

type TabsNavProps = {
  active: "today" | "full" | "reports";
  onChange: (tab: "today" | "full" | "reports") => void;
};

export default function TabsNav({ active, onChange }: TabsNavProps) {
  const base =
    "tab-btn px-4 py-3 font-semibold border-b-4 border-transparent cursor-pointer transition-colors";
  const activeClass = "border-blue-600 text-blue-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Row */}
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600">
            ক্লাস রুটিন ম্যানেজমেন্ট
          </h1>

          <nav className="hidden md:flex items-center space-x-4">
            {/* Internal Tabs */}
            <button
              className={`${base} ${active === "today" ? activeClass : ""}`}
              onClick={() => onChange("today")}
            >
              আজকের রুটিন
            </button>
            <button
              className={`${base} ${active === "full" ? activeClass : ""}`}
              onClick={() => onChange("full")}
            >
              সম্পূর্ণ রুটিন
            </button>
            <button
              className={`${base} ${active === "reports" ? activeClass : ""}`}
              onClick={() => onChange("reports")}
            >
              রিপোর্ট
            </button>

            {/* External Links */}

            {/* ✅ Dashboard Link Added */}
            <Link href="/dashboard" legacyBehavior>
              <a
                className={`${base} inline-flex items-center hover:bg-gray-50 text-purple-600`}
                aria-label="Dashboard"
              >
                ড্যাশবোর্ড
              </a>
            </Link>

            {/* QA Link */}
            <Link href="/qa" legacyBehavior>
              <a
                className={`${base} inline-flex items-center hover:bg-gray-50`}
                aria-label="QA"
              >
                প্রশ্নোত্তর
              </a>
            </Link>
          </nav>
        </div>

        {/* Mobile Row */}
        <nav className="md:hidden flex justify-around border-t overflow-x-auto">
          <button
            className={`${base} flex-1 text-center text-sm ${
              active === "today" ? activeClass : ""
            }`}
            onClick={() => onChange("today")}
          >
            আজ
          </button>
          <button
            className={`${base} flex-1 text-center text-sm ${
              active === "full" ? activeClass : ""
            }`}
            onClick={() => onChange("full")}
          >
            সম্পূর্ণ
          </button>
          <button
            className={`${base} flex-1 text-center text-sm ${
              active === "reports" ? activeClass : ""
            }`}
            onClick={() => onChange("reports")}
          >
            রিপোর্ট
          </button>

          {/* ✅ Dashboard Link (Mobile) */}
          <Link href="/dashboard" legacyBehavior>
            <a className={`${base} flex-1 text-center text-sm text-purple-600`}>
              Dash
            </a>
          </Link>

          {/* QA Link (Mobile) */}
          <Link href="/qa" legacyBehavior>
            <a className={`${base} flex-1 text-center text-sm`} aria-label="QA">
              QA
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
