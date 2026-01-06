"use client";
import { Task, useAppStore } from "@/lib/store";
import { formatDate, cn } from "@/lib/utils";

export default function TaskCard({ task }: { task: Task }) {
  const { toggleTask, deleteTask } = useAppStore();

  return (
    <div
      className={cn(
        "p-4 rounded-xl border mb-3 transition-all group",
        task.done
          ? "opacity-50 border-dashed border-gray-700"
          : "bg-white/5 border-white/10 hover:border-purple-500/50"
      )}
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
              {task.status}
            </span>
            {task.recurrence && (
              <span title="Recurring" className="text-xs">
                🔁
              </span>
            )}
          </div>
          <p
            className={cn(
              "font-medium text-gray-200 text-sm",
              task.done && "line-through text-gray-500"
            )}
          >
            {task.text}
          </p>
          {task.due && (
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              📅 {formatDate(task.due)}
            </p>
          )}
        </div>

        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => toggleTask(task.id)}
            className="p-1.5 hover:bg-green-500/20 rounded text-green-400"
            title={task.done ? "Undo" : "Complete"}
          >
            {task.done ? "↩️" : "✅"}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-1.5 hover:bg-red-500/20 rounded text-red-400"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
