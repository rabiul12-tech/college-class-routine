"use client";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { cn, formatDate } from "@/lib/utils";

export default function ResourceList() {
  // ✅ Make sure 'updateResource' is defined in your store!
  const { resources, addResource, deleteResource, updateResource } =
    useAppStore();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // States for inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setLocation("");
    setDate("");
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleSave = () => {
    if (!name.trim()) return;

    const finalLocation = location.trim() || "N/A";

    if (editingId) {
      // ✅ EDIT MODE: Update existing resource
      if (updateResource) {
        updateResource(editingId, name, description, finalLocation, date);
      } else {
        console.error("updateResource action is missing in useAppStore");
      }
    } else {
      // ✅ ADD MODE: Create new resource
      addResource(name, description, finalLocation, date);
    }

    resetForm();
  };

  const handleEditClick = (res: any) => {
    setEditingId(res.id);
    setName(res.name);
    setDescription(res.description || "");
    setLocation(res.fileLocation === "N/A" ? "" : res.fileLocation);
    // Use the specific date string if stored, otherwise handle appropriately
    setDate(res.date || "");
    setIsFormOpen(true);
  };

  const toggleForm = () => {
    if (isFormOpen) {
      resetForm();
    } else {
      setIsFormOpen(true);
    }
  };

  return (
    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-gray-400 text-3xl font-bold uppercase tracking-wider">
          📂 Quick Files
        </h3>
        <button
          onClick={toggleForm}
          className={cn(
            "text-3xl px-2 py-1 rounded transition",
            isFormOpen
              ? "bg-red-900/30 text-red-400 hover:text-red-300"
              : "bg-gray-800 text-gray-400 hover:text-white"
          )}
        >
          {isFormOpen ? "Cancel" : "+ Add File"}
        </button>
      </div>

      {/* Input Form */}
      {isFormOpen && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg animate-in fade-in slide-in-from-top-2 border border-gray-700 shrink-0">
          {/* 1. Name Input */}
          <input
            type="text"
            autoFocus
            placeholder="File Name (e.g. Resume, Routine)..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-white focus:outline-none focus:border-blue-500 mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 2. Location Input */}
          <input
            type="text"
            placeholder="File Path / URL..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-gray-300 focus:outline-none focus:border-blue-500 mb-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* 3. Date Input */}
          <input
            type="date"
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-gray-300 focus:outline-none focus:border-blue-500 mb-2 [color-scheme:dark]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* 4. Description Textarea (Placed BELOW inputs) */}
          <textarea
            rows={2}
            placeholder="File Description / Note..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-white focus:outline-none focus:border-blue-500 mb-2 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={cn(
              "w-full text-3xl py-1.5 rounded font-medium transition text-white",
              editingId
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {editingId ? "Update File Info" : "Save File Info"}
          </button>
        </div>
      )}

      {/* Column Headers */}
      {resources.length > 0 && (
        <div className="grid grid-cols-12 gap-2 text-[30px] font-bold text-gray-500 uppercase px-2 mb-2 shrink-0 pl-3">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Location</div>
          <div className="col-span-3 text-right">Date</div>
        </div>
      )}

      {/* Resource List Container with Scroll */}
      <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar min-h-0 max-h-[400px]">
        {resources.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-20 text-gray-600">
            <span className="text-6xl mb-1">🗂️</span>
            <p className="text-3xl italic">No files stored</p>
          </div>
        ) : (
          resources.map((res) => (
            <div
              key={res.id}
              className="group flex flex-col p-3 hover:bg-white/5 rounded-lg cursor-pointer transition border border-transparent hover:border-gray-700/50 bg-gray-900/30"
            >
              {/* Row 2: Metadata Grid */}
              <div className="grid grid-cols-12 gap-2 items-center text-3xl w-full">
                {/* Name */}
                <div className="col-span-4 flex items-center gap-2 overflow-hidden">
                  <span className="w-4.5 h-4.5 rounded-full flex-shrink-0 bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                  <span
                    className="truncate font-medium text-6xl text-gray-300 group-hover:text-white pb-2"
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

                {/* Date + Actions (Edit & Delete) */}
                <div className="col-span-3 flex justify-end items-center gap-2">
                  <span className="text-gray-600 text-[30px] truncate">
                    {formatDate(res.createdAt)}
                  </span>

                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* EDIT BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(res);
                      }}
                      className="text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 p-1 rounded text-3xl"
                      title="Edit"
                    >
                      ✎
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm("Remove this file info?"))
                          deleteResource(res.id);
                      }}
                      className="text-gray-500 hover:text-red-400 hover:bg-red-500/10 p-1 rounded text-3xl"
                      title="Delete"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>{" "}
              {/* Row 1: Description */}
              {res.description && (
                <div className="w-full text-2xl text-gray-100 italic mb-2 border-t border-gray-400/50 pt-10 break-words">
                  {res.description}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
