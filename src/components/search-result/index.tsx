import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import RepInfo from '../rep-info';
import ResultTable from '../result-table';
import { TRepository } from '../../utils/types';
import Loader from '../loader';
import { useDispatch, useSelector } from '../../services/store';
import {
	getLoadingSelector,
	getRepositoriesThunk,
	getSearchWord,
	getTotalCountSelector,
} from '../../services/repSlice';

const SearchResult: FC<{ items: TRepository[] }> = ({ items }) => {
	const isLoading = useSelector(getLoadingSelector);
	const totalCountPage = useSelector(getTotalCountSelector);
	const searchWord = useSelector(getSearchWord);
	const dispatch = useDispatch();
	const [currentRep, setCurrentRep] = useState(0);
	const [page, setPage] = useState(0);
	const [perPage, setPerPage] = useState(10);

	useEffect(() => {
		setPage(0);
	}, [searchWord]);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
		dispatch(
			getRepositoriesThunk({ name: searchWord, page: newPage + 1, perPage })
		);
	};

	const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const perPage = parseInt(event.target.value, 10);
		setPerPage(perPage);
		setPage(0);
		dispatch(getRepositoriesThunk({ name: searchWord, page: 1, perPage }));
	};

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
							totalCountPage={totalCountPage}
							page={page}
							handleChangePage={handleChangePage}
							perPage={perPage}
							handleChangePerPage={handleChangePerPage}
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
