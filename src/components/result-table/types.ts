import { TRepository } from '../../utils/types';

// type TRow = {
// 	id: number;
// 	name: string;
// 	language: string;
// 	forks_count: number;
// 	stargazers_count: number;
// 	updated_at: string;
// };

export type TResultTable = {
	rows: TRepository[];
	currentRow: number;
	onRowClick: React.Dispatch<React.SetStateAction<number>>;
};
