import { Product } from '@/types/product';
import {create} from 'zustand';

interface CompareState {
  selectedProducts: Product[];
  isModalOpen: boolean;
  toggleModal: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearProducts: () => void;
}

export const useCompareStore = create<CompareState>((set) => ({
  selectedProducts: [],
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  addProduct: (product) =>
    set((state) => {
      if (state.selectedProducts.length < 3) {
        return { selectedProducts: [...state.selectedProducts, product] };
      }
      return state;
    }),
  removeProduct: (productId) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter((p) => p.id !== productId),
    })),
  clearProducts: () => set({ selectedProducts: [] }),
}));
