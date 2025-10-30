import { create } from 'zustand';

type State = {
  xp: number;
  streak: number;
  setXP: (n: number) => void;
  addXP: (n: number) => void;
  incStreak: () => void;
  resetStreak: () => void;
};

export const useAppStore = create<State>((set) => ({
  xp: 0,
  streak: 0,
  setXP: (n) => set({ xp: n }),
  addXP: (n) => set((s) => ({ xp: s.xp + n })),
  incStreak: () => set((s) => ({ streak: s.streak + 1 })),
  resetStreak: () => set({ streak: 0 }),
}));