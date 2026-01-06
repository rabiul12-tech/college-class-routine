import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateId, calculateNextDate } from "./utils";

// ==========================================
// 1. Type Definitions (সব টাইপ এখানে)
// ==========================================

export type Task = {
  id: string;
  text: string;
  list: "inbox" | "today" | "week" | "waiting";
  status: "next" | "waiting" | "blocked" | "scheduled";
  recurrence?: string;
  due?: string;
  done: boolean;
  priority: number;
  projectId?: string; // ✅ এই লাইনটি যোগ করুন
};

export type Project = {
  id: string;
  name: string;
  active: boolean;
  fileLocation: string;
  createdAt: string;
};

// ✅ নতুন Resource টাইপ
export type Resource = {
  id: string;
  name: string;
  fileLocation: string;
  createdAt: string;
};

interface AppState {
  tasks: Task[];
  projects: Project[];
  resources: Resource[]; // ✅ নতুন স্টেট

  // --- Task Actions ---
  addTask: (task: Omit<Task, "id" | "done">) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;

  // --- Project Actions ---
  addProject: (name: string, location?: string, date?: string) => void;
  deleteProject: (id: string) => void;

  // --- Resource Actions ---
  addResource: (name: string, location: string, date?: string) => void;
  deleteResource: (id: string) => void;
}

// ==========================================
// 2. Store Implementation
// ==========================================

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      tasks: [],
      projects: [],
      resources: [],

      // ---------------------------
      // Task Logic
      // ---------------------------
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: generateId(), done: false }],
        })),

      toggleTask: (id) => {
        const { tasks } = get();
        const task = tasks.find((t) => t.id === id);
        if (!task) return;

        // Recurring Logic
        if (!task.done && task.recurrence) {
          const nextDue = calculateNextDate(
            task.due || new Date().toISOString(),
            task.recurrence
          );

          const nextTask: Task = {
            ...task,
            id: generateId(),
            done: false,
            due: nextDue,
            list: "week",
            status: "scheduled",
          };

          set((state) => ({
            tasks: [
              ...state.tasks.map((t) =>
                t.id === id ? { ...t, done: true } : t
              ),
              nextTask,
            ],
          }));
        } else {
          set((state) => ({
            tasks: state.tasks.map((t) =>
              t.id === id ? { ...t, done: !t.done } : t
            ),
          }));
        }
      },

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      // ---------------------------
      // Project Logic
      // ---------------------------
      addProject: (name, location = "/documents/projects", date) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              id: generateId(),
              name,
              active: true,
              fileLocation: location,
              createdAt: date
                ? new Date(date).toISOString()
                : new Date().toISOString(),
            },
          ],
        })),

      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      // ---------------------------
      // Resource Logic (New)
      // ---------------------------
      addResource: (name, location, date) =>
        set((state) => ({
          resources: [
            ...state.resources,
            {
              id: generateId(),
              name,
              fileLocation: location,
              createdAt: date
                ? new Date(date).toISOString()
                : new Date().toISOString(),
            },
          ],
        })),

      deleteResource: (id) =>
        set((state) => ({
          resources: state.resources.filter((r) => r.id !== id),
        })),
    }),
    { name: "class-routine-storage" } // LocalStorage Key
  )
);
