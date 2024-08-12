import { FC, useMemo, useState } from 'react';
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

const ResultTable: FC<TResultTable> = ({ rows, currentRow, onRowClick }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const visibleRows = useMemo(
		() => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
		[page, rowsPerPage]
	);

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
						<TableCell>Число форков</TableCell>
						<TableCell>Число звезд</TableCell>
						<TableCell>Дата обновления</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{visibleRows.map((row) => (
						<TableRow
							hover={true}
							onClick={() => onRowClick(row.id)}
							selected={row.id === currentRow}
							key={row.id}
						>
							<TableCell component="th" scope="row" width={182}>
								{row.name}
							</TableCell>
							<TableCell>{row.language}</TableCell>
							<TableCell>{row.forks_count}</TableCell>
							<TableCell>{row.stargazers_count}</TableCell>
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
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
};

export default ResultTable;
