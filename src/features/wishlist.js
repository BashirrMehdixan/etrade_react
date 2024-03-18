import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    items: [],
    count: 0,
}
const wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.count += 1;
            const tempProduct = { ...action.payload };
            state.items.push(tempProduct);
            toast.success(`${action.payload.title} added to wishlist`)
        },
        removeFromWishlist(state, action) {
            const itemIdToRemove = action.payload;

            if (!state.items || state.items.length === 0) {
                return;
            }

            const itemIndex = state.items.findIndex(item => item.id === itemIdToRemove);

            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
                state.count -= 1;
            }
        },
    }
})

export const { addToWishlist, removeFromWishlist } = wishlist.actions;

export default wishlist.reducer;