import AddTaskForm from "@/components/tasks/AddTaskForm";
import TaskColumn from "@/components/tasks/TaskColumn";
import ProjectList from "@/components/projects/ProjectList";
import ResourceList from "@/components/projects/ResourceList";
export default function DashboardPage() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
        <p className="text-gray-400">
          Manage your class routines and tasks efficiently.
        </p>
      </header>

      <AddTaskForm />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskColumn title="⭐ Today's Focus" filterList="today" />
        <TaskColumn title="📥 Inbox" filterList="inbox" />
        <TaskColumn title="📅 This Week" filterList="week" />
      </div>
      <div>
        <div className="hidden md:block w-full mt-10">
          <ProjectList />
        </div>
      </div>
      <div>
        <h1>neccassary little task </h1>
        <div className="hidden md:block w-full mt-10">
          <ResourceList />
        </div>
      </div>
    </div>
  );
}
