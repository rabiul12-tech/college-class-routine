"use client";

import React from "react";
import AttendanceChart from "./AttendanceChart";
import SubjectBreakdown from "./SubjectBreakdown";

export default function ReportsView() {
  return (
    <section className="mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        উপস্থিতি রিপোর্ট
      </h2>

      <p className="mb-6 text-gray-600">
        এখানে দৈনিক, সাপ্তাহিক বা মাসিক উপস্থিতির সারাংশ দেখা যাবে।
        একটি সময়কাল নির্বাচন করুন এবং চার্টটি স্বয়ংক্রিয়ভাবে আপডেট হবে।
        নিচে বিষয়ভিত্তিক ব্রেকডাউনও দেখতে পারবেন।
      </p>

      <AttendanceChart />

      <SubjectBreakdown />
    </section>
  );
}
