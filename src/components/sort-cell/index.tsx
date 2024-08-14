import { FC } from 'react';
import { TSortCell } from './types';
import { TableCell, TableSortLabel } from '@mui/material';

const SortCell: FC<TSortCell> = ({
	data,
	sortType,
	sortedBy,
	onHeadCellClick,
	order,
}) => {
	return (
		<TableCell
			sx={{
				cursor: 'pointer',
				'&:hover .MuiSvgIcon-root': {
					opacity: 1,
				},
			}}
			onClick={() => onHeadCellClick(sortType)}
		>
			{data}
			<TableSortLabel
				active={sortedBy === sortType}
				direction={sortedBy === sortType ? order : 'desc'}
			/>
		</TableCell>
	);
};

export default SortCell;
