import {createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
            const existingItemSalePrice = action.payload.price - (action.payload.price * (action.payload.discountPercentage) / 100);
            if (existingItem) {
                existingItem.quantity += 1;
                toast.success(`${existingItem.title} added to cart!`);
                if (!existingItem.discountPercentage) {
                    existingItem.total += existingItemSalePrice;
                } else {
                    existingItem.total += existingItem.price;
                };
            } else {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                    total: action.payload.discountPercentage === 0 ? action.payload.price : existingItemSalePrice,
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
                toast.success(`${removedItem.title} removed from cart!`);

                state.items.splice(itemIndex, 1);
                state.count -= removedItemCount;
                state.total -= removedItem.total;
            }
        },
        increment: (state, action) => {
            const {id} = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            const existingItemSalePrice = existingItem.price - (existingItem.price * (existingItem.discountPercentage) / 100);
            if (existingItem) {
                if (!existingItem.discountPercentage) {
                    existingItem.total += existingItem.price;
                } else {
                    existingItem.total += existingItemSalePrice;
                }
                existingItem.quantity += 1;
                state.count += 1;
            }
        },
        decrement: (state, action) => {
            const {id} = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            const existingItemSalePrice = existingItem.price - (existingItem.price * (existingItem.discountPercentage) / 100);
            if (existingItem && existingItem.quantity > 1) {
                if (!existingItem.discountPercentage) {
                    existingItem.total -= existingItem.price;
                } else {
                    existingItem.total -= existingItemSalePrice;
                }
                existingItem.quantity -= 1;
                state.count -= 1;
            }
        },
    }
})

export const {addToCart, removeFromCart, increment, decrement} = cart.actions;

export default cart.reducer;