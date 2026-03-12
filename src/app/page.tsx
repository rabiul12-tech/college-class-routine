"use client";

import React from "react";
import TabsNav from "@/components/TabsNav";
import TodayView from "@/components/TodayView";
import FullScheduleView from "@/components/FullScheduleView";
import ReportsView from "@/components/ReportsView";

export default function HomePage() {
  const [activeTab, setActiveTab] = React.useState<
    "today" | "full" | "reports"
  >("today");

  return (
    <>
      <TabsNav active={activeTab} onChange={setActiveTab} />

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === "today" && <TodayView />}
        {activeTab === "full" && <FullScheduleView />}
        {activeTab === "reports" && <ReportsView />}
      </main>

      {/* Toast root */}
      <div
        id="toast-root"
        className="fixed bottom-10 right-10 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 text-sm"
      >
        স্ট্যাটাস সেভ করা হয়েছে!
      </div>
    </>
  );
}
