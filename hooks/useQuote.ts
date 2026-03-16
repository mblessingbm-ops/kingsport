import { create } from 'zustand';

interface QuoteItem {
    id: number;
    name: string;
    quantity: number;
}

interface QuoteState {
    items: QuoteItem[];
    isOpen: boolean;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    toggleDrawer: () => void;
    addItem: (item: QuoteItem) => void;
}

export const useQuote = create<QuoteState>((set) => ({
    items: [],
    isOpen: false,
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
    addItem: (newItem) => set((state) => {
        const existing = state.items.find(i => i.id === newItem.id);
        if (existing) {
            return { items: state.items.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i) };
        }
        return { items: [...state.items, { ...newItem, quantity: 1 }], isOpen: true };
    }),
    updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(i => i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)
    })),
    removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
    })),
}));
