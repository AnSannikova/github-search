import { TOrder, TRepository } from '../../utils/types';

export enum CellSort {
	stars = 'stars',
	forks = 'forks',
	updated = 'update',
}

export type TSearchResult = {
	items: TRepository[];
	isLoading: boolean;
};

export type TCellOrder = {
	stars: TOrder;
	forks: TOrder;
	updated: TOrder;
};
