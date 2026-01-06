"use client";
import { useAppStore } from "@/lib/store";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { projects, addProject } = useAppStore();
  const [newProject, setNewProject] = useState("");

  return (
    <div className="flex min-h-screen bg-[#0b1020] text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 hidden md:flex flex-col bg-[#0b1020]">
        <div className="p-6 border-b border-gray-800">
          <h1 className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Routine App
          </h1>
        </div>

        <div className="p-4 flex-1">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
            Projects
          </h3>
          <div className="space-y-1 mb-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-2 text-gray-300 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition"
              >
                <span>🚀</span> {p.name}
              </div>
            ))}
            {projects.length === 0 && (
              <p className="text-gray-600 text-sm px-2">No projects yet</p>
            )}
          </div>

          <input
            className="bg-gray-900 w-full text-sm p-2 rounded border border-gray-800 text-white focus:border-purple-500 outline-none"
            placeholder="+ New Project..."
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newProject.trim()) {
                // ✅ ফিক্স: ২য় আর্গুমেন্ট হিসেবে ফাঁকা স্ট্রিং "" পাঠানো হয়েছে
                addProject(newProject, "");
                setNewProject("");
              }
            }}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen bg-[#0b1020]">
        <div className="max-w[1600px] mx-auto p-8">{children}</div>
      </main>
    </div>
  );
}
