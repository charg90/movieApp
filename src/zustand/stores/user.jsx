import create from "zustand";
import { devtools } from "zustand/middleware";

const profileStore = create((set) => ({
  profileUser: "",
  setProfile: (email) => set(() => ({ profileUser: email })),
}));

export default profileStore;
