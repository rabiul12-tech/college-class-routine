"use client";
import { useAppStore } from "@/lib/store";
import TaskCard from "./TaskCard";

type TaskColumnProps = {
  title: string;
  filterList: "inbox" | "today" | "week" | "waiting";
};

export default function TaskColumn({ title, filterList }: TaskColumnProps) {
  const tasks = useAppStore((state) => state.tasks);
  const filteredTasks = tasks.filter((t) => t.list === filterList && !t.done);

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 h-full min-h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-100">{title}</h2>
        <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-400">
          {filteredTasks.length}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-600 text-sm text-center py-8 italic">
            No tasks found
          </p>
        ) : (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
