import { Box } from '@mui/material';
import { FC, useState } from 'react';
import styles from './styles.module.scss';
import RepInfo from '../rep-info';
import ResultTable from '../result-table';
import { TRepository } from '../../utils/types';
import Loader from '../loader';
import { useSelector } from '../../services/store';
import { getLoadingSelector } from '../../services/repSlice';

const SearchResult: FC<{ items: TRepository[] }> = ({ items }) => {
	const [currentRep, setCurrentRep] = useState(0);
	const isLoading = useSelector(getLoadingSelector);
	return (
		<Box
			component={'section'}
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Box
						sx={{
							width: '66.7%',
							padding: '24px 16px 0 32px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<h1 className={styles.title}>Результаты поиска</h1>
						<ResultTable
							rows={items}
							currentRow={currentRep}
							onRowClick={setCurrentRep}
						/>
					</Box>
					<Box sx={{ width: '33.3%' }}>
						<RepInfo
							currentRep={items.filter((item) => item.id === currentRep)[0]}
						/>
					</Box>
				</>
			)}
		</Box>
	);
};

export default SearchResult;
