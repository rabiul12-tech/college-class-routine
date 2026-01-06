"use client";
import { useState } from "react";
import { useAppStore, Project } from "@/lib/store";
import { cn, formatDate } from "@/lib/utils";

export default function ProjectList() {
  const { projects, addProject, deleteProject, updateProject } = useAppStore(); // updateProject আনা হয়েছে
  const [isAdding, setIsAdding] = useState(false);

  // States for Add New
  const [newProjectName, setNewProjectName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newDate, setNewDate] = useState("");

  // ✅ States for Editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    fileLocation: "",
    date: "",
  });

  // Add Handler
  const handleAdd = () => {
    if (!newProjectName.trim()) return;
    const location =
      newLocation.trim() ||
      `/local/${newProjectName.toLowerCase().replace(/\s+/g, "-")}`;
    addProject(newProjectName, newDescription, location, newDate);
    setNewProjectName("");
    setNewDescription("");
    setNewLocation("");
    setNewDate("");
    setIsAdding(false);
  };

  // ✅ Start Editing Handler
  const startEditing = (project: Project) => {
    setEditingId(project.id);
    setEditForm({
      name: project.name,
      description: project.description,
      fileLocation: project.fileLocation,
      // ISO Date string থেকে YYYY-MM-DD ফরম্যাটে কনভার্ট করা ইনপুটের জন্য
      date: project.createdAt
        ? new Date(project.createdAt).toISOString().split("T")[0]
        : "",
    });
  };

  // ✅ Save Edit Handler
  const saveEdit = () => {
    if (!editingId || !editForm.name.trim()) return;

    updateProject(editingId, {
      name: editForm.name,
      description: editForm.description,
      fileLocation: editForm.fileLocation,
      createdAt: editForm.date
        ? new Date(editForm.date).toISOString()
        : new Date().toISOString(),
    });

    setEditingId(null); // Edit mode বন্ধ
  };

  // ✅ Cancel Edit Handler
  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-gray-400 text-3xl font-bold uppercase tracking-wider">
          🚀 Projects
        </h3>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="text-gray-400 hover:text-white text-3xl bg-gray-800 px-2 py-1 rounded transition"
        >
          {isAdding ? "Cancel" : "+ New"}
        </button>
      </div>

      {/* Add New Form */}
      {isAdding && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg animate-in fade-in slide-in-from-top-2 border border-gray-700 shrink-0">
          <textarea
            autoFocus
            rows={2}
            placeholder="Project Description / Goals..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-white focus:outline-none focus:border-purple-500 mb-2 resize-none"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Project Name..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-4xl text-white focus:outline-none focus:border-purple-500 mb-2"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <input
            type="text"
            placeholder="File Location (Optional)..."
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-gray-300 focus:outline-none focus:border-purple-500 mb-2"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <input
            type="date"
            className="w-full bg-black/30 border border-gray-600 rounded px-2 py-1.5 text-3xl text-gray-300 focus:outline-none focus:border-purple-500 mb-2 [color-scheme:dark]"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-3xl py-1.5 rounded font-medium transition"
          >
            Create Project
          </button>
        </div>
      )}

      {/* Column Headers */}
      {projects.length > 0 && (
        <div className="grid grid-cols-12 gap-2 text-[30px] font-bold text-gray-500 uppercase px-2 mb-2 pl-3 shrink-0">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Location</div>
          <div className="col-span-3 text-right">Created</div>
        </div>
      )}

      {/* Project List */}
      <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar min-h-0 max-h-[400px]">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-20 text-gray-600">
            <span className="text-6xl mb-1">📂</span>
            <p className="text-3xl italic">No projects found</p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col p-3 hover:bg-white/5 rounded-lg transition border border-transparent hover:border-gray-700/50 bg-gray-900/30"
            >
              {/* ======================= */}
              {/* EDIT MODE          */}
              {/* ======================= */}
              {editingId === project.id ? (
                <div className="flex flex-col gap-2">
                  <textarea
                    rows={2}
                    placeholder="Description"
                    className="w-full bg-black/50 border border-blue-500/50 rounded px-2 py-1 text-3xl text-white focus:outline-none resize-none"
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm({ ...editForm, description: e.target.value })
                    }
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-black/50 border border-blue-500/50 rounded px-2 py-1 text-4xl text-white focus:outline-none"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                    />
                    <input
                      type="date"
                      className="w-24 bg-black/50 border border-blue-500/50 rounded px-1 py-1 text-xs text-white focus:outline-none [color-scheme:dark]"
                      value={editForm.date}
                      onChange={(e) =>
                        setEditForm({ ...editForm, date: e.target.value })
                      }
                    />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-blue-500/50 rounded px-2 py-1 text-3xl text-gray-300 focus:outline-none"
                    value={editForm.fileLocation}
                    onChange={(e) =>
                      setEditForm({ ...editForm, fileLocation: e.target.value })
                    }
                  />

                  <div className="flex justify-end gap-2 mt-1">
                    <button
                      onClick={cancelEdit}
                      className="text-3xl px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveEdit}
                      className="text-3xl px-2 py-1 rounded bg-green-600 hover:bg-green-500 text-white"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                /* ======================= */
                /* VIEW MODE          */
                /* ======================= */
                <>
                  {/* Row 1: Description */}
                  {project.description && (
                    <div className="w-full text-3xl text-gray-400 italic mb-2 border-b border-gray-800/50 pb-2 break-words">
                      {project.description}
                    </div>
                  )}

                  {/* Row 2: Metadata Grid */}
                  <div className="grid grid-cols-12 gap-2 items-center text-3xl w-full">
                    {/* Name */}
                    <div className="col-span-4 flex items-center gap-2 overflow-hidden">
                      <span
                        className={cn(
                          "w-4.5 h-4.5 rounded-full flex-shrink-0",
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
                      className="col-span-5 truncate text-gray-500 font-mono text-[30px]"
                      title={project.fileLocation}
                    >
                      {project.fileLocation}
                    </div>

                    {/* Date + Actions (Edit & Delete) */}
                    <div className="col-span-3 flex justify-end items-center gap-1">
                      <span className="text-gray-600 text-[30px] truncate mr-1">
                        {formatDate(project.createdAt)}
                      </span>

                      {/* ✅ Edit Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditing(project);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 p-1 rounded transition-all text-3xl"
                        title="Edit Project"
                      >
                        ✏️
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm("Delete this project?"))
                            deleteProject(project.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 hover:bg-red-500/10 p-1 rounded transition-all text-3xl"
                        title="Delete Project"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
