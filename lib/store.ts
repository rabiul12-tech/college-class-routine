import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateId, calculateNextDate } from "./utils";

// ==========================================
// 1. Type Definitions
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
  projectId?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string; // ✅ প্রজেক্ট ডেসক্রিপশন
  active: boolean;
  fileLocation: string;
  createdAt: string;
};

export type Resource = {
  id: string;
  name: string;
  description: string; // ✅ রিসোর্স ডেসক্রিপশন (নতুন যোগ করা হয়েছে)
  fileLocation: string;
  createdAt: string;
};

interface AppState {
  tasks: Task[];
  projects: Project[];
  resources: Resource[];

  // --- Task Actions ---
  addTask: (task: Omit<Task, "id" | "done">) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;

  // --- Project Actions ---
  addProject: (
    name: string,
    description: string,
    location?: string,
    date?: string
  ) => void;
  deleteProject: (id: string) => void;

  // --- Resource Actions ---
  // ✅ addResource এ 'description' প্যারামিটার যুক্ত করা হয়েছে
  addResource: (
    name: string,
    description: string,
    location: string,
    date?: string
  ) => void;
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
      addProject: (name, description, location = "/documents/projects", date) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              id: generateId(),
              name,
              description: description || "",
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
      // Resource Logic
      // ---------------------------
      // ✅ আপডেটেড addResource (Description সহ)
      addResource: (name, description, location, date) =>
        set((state) => ({
          resources: [
            ...state.resources,
            {
              id: generateId(),
              name,
              description: description || "", // ✅ সেভ হচ্ছে
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
    { name: "class-routine-storage" }
  )
);
