import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "about": {},
  "blog": {},
  "project": {},
  "contact": {},
  "services": {}
}});

export default useIoStore;
