"use client";
import { useState } from "react";
import { useAppStore, Task } from "@/lib/store";

export default function AddTaskForm() {
  // ১. projects লিস্ট এবং addTask ফাংশন স্টোর থেকে আনুন
  const { addTask, projects } = useAppStore();

  const [text, setText] = useState("");
  const [list, setList] = useState<Task["list"]>("inbox");
  const [recurrence, setRecurrence] = useState("");
  const [due, setDue] = useState("");

  // ২. প্রোজেক্ট আইডি রাখার জন্য নতুন স্টেট
  const [projectId, setProjectId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      text,
      list,
      status: "next",
      recurrence: recurrence || undefined,
      due: due || undefined,
      // ৩. সিলেক্ট করা প্রোজেক্ট আইডি পাঠানো (যদি থাকে)
      projectId: projectId || undefined,
      priority: 2,
    });

    // রিসেট
    setText("");
    setProjectId("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1f2937] border border-gray-700 p-5 rounded-2xl mb-8 shadow-lg"
    >
      <div className="flex flex-col gap-4">
        {/* টেক্সট ইনপুট এবং বাটন */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition placeholder-gray-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-purple-900/20"
          >
            Add
          </button>
        </div>

        {/* অপশনস (লিস্ট, প্রোজেক্ট, রিকারেন্স, ডেট) */}
        <div className="flex gap-3 flex-wrap">
          {/* List Select */}
          <select
            value={list}
            onChange={(e) => setList(e.target.value as any)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-purple-500"
          >
            <option value="inbox">📥 Inbox</option>
            <option value="today">⭐ Today</option>
            <option value="week">📅 This Week</option>
            <option value="waiting">⏳ Waiting</option>
          </select>

          {/* ৪. নতুন Project Select Dropdown */}
          <select
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-purple-500 max-w-[150px]"
          >
            <option value="">📂 No Project</option>
            {projects
              .filter((p) => p.active) // শুধুমাত্র অ্যাক্টিভ প্রজেক্ট দেখাবে
              .map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
          </select>

          {/* Recurrence Select */}
          <select
            value={recurrence}
            onChange={(e) => setRecurrence(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-purple-500"
          >
            <option value="">No Repeat</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          {/* Due Date Input */}
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:border-purple-500 [color-scheme:dark]"
          />
        </div>
      </div>
    </form>
  );
}
