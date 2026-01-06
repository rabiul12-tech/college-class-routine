"use client";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { cn, formatDate } from "@/lib/utils";

export default function ResourceList() {
  const { resources, addResource, deleteResource } = useAppStore();
  const [isAdding, setIsAdding] = useState(false);

  // States for inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); // ✅ নতুন স্টেট
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;

    // ফাইলের জন্য লোকেশন যদি না দেওয়া হয়, ডিফল্ট পাথ সেট হবে
    const finalLocation = location.trim() || "N/A";

    // ✅ ডেসক্রিপশন সহ স্টোরে পাঠানো
    addResource(name, description, finalLocation, date);

    // রিসেট
    setName("");
    setDescription("");
    setLocation("");
    setDate("");
    setIsAdding(false);
  };

  return (
    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-gray-400 text-3xl font-bold uppercase tracking-wider">
          📂 Quick Files
        </h3>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="text-gray-400 hover:text-white text-3xl bg-gray-800 px-2 py-1 rounded transition"
        >
          {isAdding ? "Cancel" : "+ Add File"}
        </button>
      </div>

      {/* Input Form */}
      {isAdding && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg animate-in fade-in slide-in-from-top-2 border border-gray-700 shrink-0">
          {/* ✅ 1. Description Input (Full Width at Top) */}
          <textarea
            autoFocus
            rows={2}
            placeholder="File Description / Note..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500 mb-2 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* 2. Name Input */}
          <input
            type="text"
            placeholder="File Name (e.g. Resume, Routine)..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 3. Location Input */}
          <input
            type="text"
            placeholder="File Path / URL..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-blue-500 mb-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* 4. Date Input */}
          <input
            type="date"
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-blue-500 mb-2 [color-scheme:dark]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 rounded font-medium transition"
          >
            Save File Info
          </button>
        </div>
      )}

      {/* Column Headers */}
      {resources.length > 0 && (
        <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-gray-500 uppercase px-2 mb-2 shrink-0 pl-3">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Location</div>
          <div className="col-span-3 text-right">Date</div>
        </div>
      )}

      {/* Resource List Container with Scroll */}
      <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar min-h-0 max-h-[400px]">
        {resources.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-20 text-gray-600">
            <span className="text-2xl mb-1">🗂️</span>
            <p className="text-xs italic">No files stored</p>
          </div>
        ) : (
          resources.map((res) => (
            <div
              key={res.id}
              className="group flex flex-col p-3 hover:bg-white/5 rounded-lg cursor-pointer transition border border-transparent hover:border-gray-700/50 bg-gray-900/30"
            >
              {/* ✅ Row 1: Description (Full Width & Top) */}
              {res.description && (
                <div className="w-full text-4xl text-gray-400 italic mb-2 border-b border-gray-800/50 pb-2 break-words">
                  {res.description}
                </div>
              )}

              {/* ✅ Row 2: Metadata Grid */}
              <div className="grid grid-cols-12 gap-2 items-center text-3xl w-full">
                {/* Name */}
                <div className="col-span-4 flex items-center gap-2 overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                  <span
                    className="truncate font-medium text-gray-300 group-hover:text-white"
                    title={res.name}
                  >
                    {res.name}
                  </span>
                </div>

                {/* Location */}
                <div
                  className="col-span-5 truncate text-gray-500 font-mono text-[30px]"
                  title={res.fileLocation}
                >
                  {res.fileLocation}
                </div>

                {/* Date + Delete Action */}
                <div className="col-span-3 flex justify-end items-center gap-2">
                  <span className="text-gray-600 text-[10px] truncate">
                    {formatDate(res.createdAt)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Remove this file info?"))
                        deleteResource(res.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 hover:bg-red-500/10 p-1 rounded transition-all"
                    title="Delete"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
