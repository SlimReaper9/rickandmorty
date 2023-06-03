import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const allCharactersApiThunk = createAsyncThunk('charactersThunk', async (data) => {
  let { currentPage, name } = data;
  let response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${name}`,
  );
  return response.data;
});
export const getSingleCharacterDetail = createAsyncThunk('singleCharacterDetail', async (id) => {
  let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return response.data;
});
const initialState = {
  allChars: [],
  info: [],
  characterDetail: [],
  name: '',
  currentPage: 1,
};
const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    deleteCharacterDetail: (state) => {
      state.characterDetail = [];
    },
    setCurrentPage: (state, { payload }) => {
      return { ...state, currentPage: payload };
    },
    setName: (state, { payload }) => {
      return { ...state, name: payload };
    },
  },
  extraReducers: {
    [allCharactersApiThunk.fulfilled]: (state, { payload }) => {
      return { ...state, allChars: payload.results, info: payload.info };
    },
    [getSingleCharacterDetail.fulfilled]: (state, { payload }) => {
      return { ...state, characterDetail: payload };
    },
  },
});
export const { deleteCharacterDetail, setCurrentPage, setName } = characterSlice.actions;
export default characterSlice.reducer;
