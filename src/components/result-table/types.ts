import { TOrder, TRepository, TSortType } from '../../utils/types';
import { TCellOrder } from '../search-result/types';

export type TSortCell = {
	data: string;
	sortType: TSortType;
	sortedBy: TSortType | undefined;
	order?: TOrder;
	onHeadCellClick: (sortType: TSortType) => void;
};

export type TResultTable = {
	rows: TRepository[];
	currentRow: number;
	totalCountPage: number;
	perPage: number;
	page: number;
	sortedBy: TSortType | undefined;
	cellOrder: TCellOrder;
	onRowClick: React.Dispatch<React.SetStateAction<number>>;
	handleChangePage: (
		event: React.MouseEvent<HTMLButtonElement> | null,
		page: number
	) => void;
	handleChangePerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onHeadCellClick: (sortType: TSortType) => void;
};
