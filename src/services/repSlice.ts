import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGetRepositoriesApi, TRepository } from '../utils/types';
import { getRepositoriesApi } from '../utils/api';

type TRepositoriesState = {
	searchWord: string;
	items: Array<TRepository>;
	totalCount: number;
	loading: boolean;
	error: string | null | undefined;
};

const initialState: TRepositoriesState = {
	searchWord: '',
	items: [],
	totalCount: 0,
	loading: true,
	error: null,
};

export const getRepositoriesThunk = createAsyncThunk(
	'repositories/getRepositories',
	async ({ name, page, perPage, sortType, order }: TGetRepositoriesApi) =>
		getRepositoriesApi({ name, page, perPage, sortType, order })
);

const repSlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {
		addSearchWord: (state, action: PayloadAction<string>) => {
			state.searchWord = action.payload;
		},
	},
	selectors: {
		getSearchWord: (state) => state.searchWord,
		getRepositoriesSelector: (state) => state.items,
		getTotalCountSelector: (state) => state.totalCount,
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
				state.totalCount = action.payload.data.total_count;
			});
	},
});

export const repReducer = repSlice.reducer;
export const { addSearchWord } = repSlice.actions;
export const {
	getSearchWord,
	getRepositoriesSelector,
	getTotalCountSelector,
	getLoadingSelector,
} = repSlice.selectors;
