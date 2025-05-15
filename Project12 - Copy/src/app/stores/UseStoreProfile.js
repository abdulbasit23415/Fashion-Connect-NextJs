import { create } from "zustand";




const categoryStore = (set) => ({
    category : null,
    Setcategory: (comingValue) = set({category:comingValue})
});
export const useStoreProfile = create(categoryStore)