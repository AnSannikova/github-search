import { TRepository } from '../../utils/types';

export type TResultTable = {
	rows: TRepository[];
	currentRow: number;
	onRowClick: React.Dispatch<React.SetStateAction<number>>;
	totalCountPage: number;
	perPage: number;
	page: number;
	handleChangePage: (
		event: React.MouseEvent<HTMLButtonElement> | null,
		page: number
	) => void;
	handleChangePerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
