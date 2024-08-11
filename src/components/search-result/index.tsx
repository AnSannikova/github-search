import { Box } from '@mui/material';
import { FC, useState } from 'react';
import styles from './styles.module.scss';
import RepInfo from '../rep-info';
import data from '../../fake.json';
import ResultTable from '../result-table';

const SearchResult: FC = () => {
	const [currentRep, setCurrentRep] = useState(0);
	return (
		<Box
			component={'section'}
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
			}}
		>
			<Box sx={{ width: '66.7%', padding: '24px 16px 0 32px' }}>
				<h1 className={styles.title}>Результаты поиска</h1>
				<ResultTable
					rows={data.items}
					currentRow={currentRep}
					onRowClick={setCurrentRep}
				/>
			</Box>
			<Box sx={{ width: '33.3%' }}>
				<RepInfo
					currentRep={data.items.filter((item) => item.id === currentRep)[0]}
				/>
			</Box>
		</Box>
	);
};

export default SearchResult;
