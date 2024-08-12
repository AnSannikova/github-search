import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TRepository } from '../utils/types';
import { getRepositoriesApi } from '../utils/api';

type TRepositoriesState = {
	items: Array<TRepository>;
	loading: boolean;
	error: string | null | undefined;
};

const initialState: TRepositoriesState = {
	items: [],
	loading: true,
	error: null,
};

export const getRepositoriesThunk = createAsyncThunk(
	'repositories/getRepositories',
	async (name: string) => getRepositoriesApi(name)
);

const repSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {},
	selectors: {
		getRepositoriesSelector: (state) => state.items,
		getLoadingSelector: (state) => state.loading,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRepositoriesThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getRepositoriesThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getRepositoriesThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.items = [...action.payload.data.items];
			});
	},
});

export const repReducer = repSlice.reducer;
export const { getRepositoriesSelector, getLoadingSelector } =
	repSlice.selectors;
