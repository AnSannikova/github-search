import { FC } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import { TResultTable } from './types';
import dayjs from 'dayjs';
import SortCell from '../sort-cell';

const ResultTable: FC<TResultTable> = ({
	rows,
	currentRow,
	onRowClick,
	totalCountPage,
	perPage,
	page,
	handleChangePage,
	handleChangePerPage,
	sortedBy,
	onHeadCellClick,
	cellOrder,
}) => {
	return (
		<TableContainer
			sx={{
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Название</TableCell>
						<TableCell>Язык</TableCell>
						<SortCell
							sortedBy={sortedBy}
							order={sortedBy && cellOrder[sortedBy]}
							sortType={'forks'}
							onHeadCellClick={onHeadCellClick}
							data="Число форков"
						/>
						<SortCell
							sortedBy={sortedBy}
							order={sortedBy && cellOrder[sortedBy]}
							sortType={'stars'}
							onHeadCellClick={onHeadCellClick}
							data="Число звезд"
						/>
						<SortCell
							sortedBy={sortedBy}
							order={sortedBy && cellOrder[sortedBy]}
							sortType={'updated'}
							onHeadCellClick={onHeadCellClick}
							data="Дата обновления"
						/>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							hover={true}
							onClick={() => onRowClick(row.id)}
							selected={row.id === currentRow}
							key={row.id}
							sx={{ cursor: 'pointer' }}
						>
							<TableCell component="th" scope="row" width={'20%'}>
								{row.name}
							</TableCell>
							<TableCell width={'20%'}>{row.language}</TableCell>
							<TableCell>{row.forks_count.toLocaleString('ru-RU')}</TableCell>
							<TableCell>
								{row.stargazers_count.toLocaleString('ru-RU')}
							</TableCell>
							<TableCell>
								{dayjs(row.updated_at).format('DD.MM.YYYY')}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10, 20]}
				component="div"
				count={totalCountPage}
				rowsPerPage={perPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangePerPage}
			/>
		</TableContainer>
	);
};

export default ResultTable;
