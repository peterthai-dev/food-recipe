import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
        toggleFavorite: (state, action) => {
            const recipe = action.payload; // Ожидаем весь объект статьи
            const existingIndex = state.favoriterecipes.findIndex(
                (item) => item.id === recipe.idFood // Предполагаем, что у статей есть свойство 'id'
            );
            if (existingIndex >= 0) {
                state.favoriterecipes.splice(existingIndex, 1); // Удалить из избранного
            } else {
                state.favoriterecipes.push(recipe); // Добавить в избранное
            }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
