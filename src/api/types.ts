import { TRepository } from '../types';

export type TResponse = {
	total_count: number;
	items: TRepository[];
};
