import { create } from "zustand"

const useStore = create((set) => ({
  store: 0,
  increasePopulation: () => set((state) => ({ store: state.store + 1 })),
  removeAllStores: () => set({ stores: 0 }),
}))

export default useStore
