import { TRepository } from '../../utils/types';

export enum CellSort {
	stars = 'stars',
	forks = 'forks',
	updated = 'update',
}

export type TSearchResult = {
	items: TRepository[];
};
