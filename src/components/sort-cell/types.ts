import { TOrder, TSortType } from '../../utils/types';

export type TSortCell = {
	data: string;
	sortType: TSortType;
	sortedBy: TSortType | undefined;
	order?: TOrder;
	onHeadCellClick: (sortType: TSortType) => void;
};
