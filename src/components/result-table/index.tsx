import { FC } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { TResultTable } from './types';
import dayjs from 'dayjs';

const ResultTable: FC<TResultTable> = ({ rows, currentRow, onRowClick }) => {
	return (
		<TableContainer>
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
					{rows.map((row) => (
						<TableRow
							hover={true}
							onClick={() => onRowClick(row.id)}
							selected={row.id === currentRow}
							key={row.name}
						>
							<TableCell component="th" scope="row">
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
		</TableContainer>
	);
};

export default ResultTable;
