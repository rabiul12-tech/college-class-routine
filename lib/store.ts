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
  description: string;
  active: boolean;
  fileLocation: string;
  createdAt: string;
};

export type Resource = {
  id: string;
  name: string;
  description: string;
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
  // ✅ নতুন: প্রজেক্ট আপডেট করার জন্য
  updateProject: (id: string, updates: Partial<Project>) => void;

  // --- Resource Actions ---
  addResource: (
    name: string,
    description: string,
    location: string,
    date?: string
  ) => void;
  deleteResource: (id: string) => void;
  // ✅ নতুন: রিসোর্স আপডেট করার জন্য (ভবিষ্যতের ব্যবহারের জন্য)
  updateResource: (id: string, updates: Partial<Resource>) => void;
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

      // ✅ updateProject ইমপ্লিমেন্টেশন
      updateProject: (id, updates) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),

      // ---------------------------
      // Resource Logic
      // ---------------------------
      addResource: (name, description, location, date) =>
        set((state) => ({
          resources: [
            ...state.resources,
            {
              id: generateId(),
              name,
              description: description || "",
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

      // ✅ updateResource ইমপ্লিমেন্টেশন
      updateResource: (id, updates) =>
        set((state) => ({
          resources: state.resources.map((r) =>
            r.id === id ? { ...r, ...updates } : r
          ),
        })),
    }),
    { name: "class-routine-storage" } // LocalStorage Key
  )
);
