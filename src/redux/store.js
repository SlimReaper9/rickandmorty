import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './CharacterSlice';
const store = configureStore({
  reducer: {
    allCharacters: characterSlice,
  },
});

export default store;
