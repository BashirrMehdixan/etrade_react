import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    count: 0,
    total: 0,
}
const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                if (!existingItem.salePrice) {
                    existingItem.total += existingItem.salePrice;
                } else {
                    existingItem.total += existingItem.price;
                };
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    total: action.payload.salePrice === 0 ? action.payload.price : action.payload.salePrice,
                };
                state.items.push(newItem);
            }
            state.count += 1;
            state.total += action.payload.salePrice;
        },
        removeFromCart(state, action) {
            const itemIdToRemove = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === itemIdToRemove);

            if (itemIndex !== -1) {
                const removedItem = state.items[itemIndex];
                const removedItemCount = removedItem.quantity;

                state.items.splice(itemIndex, 1);
                state.count -= removedItemCount;
                state.total -= removedItem.total;
            }
        },
        increment: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                if (!existingItem.salePrice) {
                    existingItem.total += existingItem.price;
                } else {
                    existingItem.total += existingItem.salePrice;
                }
                existingItem.quantity += 1;
                state.count += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                if (!existingItem.salePrice) {
                    existingItem.total -= existingItem.price;
                } else {
                    existingItem.total -= existingItem.salePrice;
                }
                existingItem.quantity -= 1;
                state.count -= 1;
            }
        },
    }
})

export const { addToCart, removeFromCart, increment, decrement } = cart.actions;

export default cart.reducer;