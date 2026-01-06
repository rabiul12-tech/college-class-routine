"use client";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { cn, formatDate } from "@/lib/utils";

export default function ProjectList() {
  const { projects, addProject, deleteProject } = useAppStore();
  const [isAdding, setIsAdding] = useState(false);

  // States for inputs
  const [newProjectName, setNewProjectName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleAdd = () => {
    if (!newProjectName.trim()) return;

    // লোকেশন লজিক
    const location =
      newLocation.trim() ||
      `/local/${newProjectName.toLowerCase().replace(/\s+/g, "-")}`;

    // স্টোরে সেভ করা
    addProject(newProjectName, newDescription, location, newDate);

    // রিসেট
    setNewProjectName("");
    setNewDescription("");
    setNewLocation("");
    setNewDate("");
    setIsAdding(false);
  };

  return (
    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          🚀 Projects
        </h3>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="text-gray-400 hover:text-white text-xs bg-gray-800 px-2 py-1 rounded transition"
        >
          {isAdding ? "Cancel" : "+ New"}
        </button>
      </div>

      {/* Input Form */}
      {isAdding && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg animate-in fade-in slide-in-from-top-2 border border-gray-700 shrink-0">
          {/* Description Input */}
          <textarea
            autoFocus
            rows={2}
            placeholder="Project Description / Goals..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500 mb-2 resize-none"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          {/* Name Input */}
          <input
            type="text"
            placeholder="Project Name..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500 mb-2"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />

          {/* Location Input */}
          <input
            type="text"
            placeholder="File Location (Optional)..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500 mb-2"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />

          {/* Date Input */}
          <input
            type="date"
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-purple-500 mb-2 [color-scheme:dark]"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-1.5 rounded font-medium transition"
          >
            Create Project
          </button>
        </div>
      )}

      {/* Column Headers */}
      {projects.length > 0 && (
        <div className="grid grid-cols-12 gap-2 text-[10px] font-bold text-gray-500 uppercase px-2 mb-2 pl-3 shrink-0">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Location</div>
          <div className="col-span-3 text-right">Created</div>
        </div>
      )}

      {/* Project List Container */}
      {/* ✅ এখানে max-h-[400px] যোগ করা হয়েছে যাতে ~8 টি আইটেমের পর স্ক্রল হয় */}
      <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar min-h-0 max-h-[400px]">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-20 text-gray-600">
            <span className="text-2xl mb-1">📂</span>
            <p className="text-xs italic">No projects found</p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col p-3 hover:bg-white/5 rounded-lg cursor-pointer transition border border-transparent hover:border-gray-700/50 bg-gray-900/30"
            >
              {/* Row 1: Description */}
              {project.description && (
                <div className="w-full text-3xl  text-gray-400 italic mb-2 border-b border-gray-800/50 pb-2 break-words">
                  {project.description}
                </div>
              )}

              {/* Row 2: Metadata Grid */}
              <div className="grid grid-cols-12 gap-2 items-center text-3xl w-full">
                {/* Name */}
                <div className="col-span-4 flex items-center gap-2 overflow-hidden">
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full flex-shrink-0",
                      project.active
                        ? "bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"
                        : "bg-gray-600"
                    )}
                  />
                  <span
                    className="truncate font-medium text-gray-200 group-hover:text-white"
                    title={project.name}
                  >
                    {project.name}
                  </span>
                </div>

                {/* Location */}
                <div
                  className="col-span-5 truncate text-gray-500 font-mono text-[20px]"
                  title={project.fileLocation}
                >
                  {project.fileLocation}
                </div>

                {/* Date + Delete Action */}
                <div className="col-span-3 flex justify-end items-center gap-2">
                  <span className="text-gray-600 text-[20px] truncate">
                    {formatDate(project.createdAt)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Delete this project?"))
                        deleteProject(project.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 hover:bg-red-500/10 p-1 rounded transition-all"
                    title="Delete Project"
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
