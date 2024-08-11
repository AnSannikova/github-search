import { createSlice } from '@reduxjs/toolkit';
import { TRepository } from '../types';

type TRepState = {
	items: Array<TRepository>;
};

const initialState: TRepState = {
	items: [],
};

const repSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {},
	selectors: {
		getReps: (state) => state.items,
	},
});

export const repReducer = repSlice.reducer;
export const { getReps } = repSlice.selectors;
