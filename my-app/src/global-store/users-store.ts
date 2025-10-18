import { create } from "zustand";


import { IUser } from "@/interfaces";


const usersGlobalStore = create((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
}));

export default usersGlobalStore;


export interface IUsersGlobalStore {
  user: IUser;
  setUser: (user: IUser) => void;
}