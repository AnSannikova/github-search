import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import RepInfo from '../rep-info';
import ResultTable from '../result-table';
import Loader from '../loader';
import { TSortType } from '../../utils/types';
import { CellSort, TSearchResult, TCellOrder } from './types';
import { useDispatch, useSelector } from '../../services/store';
import {
	getRepositoriesThunk,
	getSearchWord,
	getTotalCountSelector,
} from '../../services/repSlice';
import styles from './styles.module.scss';

const SearchResult: FC<TSearchResult> = ({ items, isLoading }) => {
	const totalCountPage = useSelector(getTotalCountSelector);
	const searchWord = useSelector(getSearchWord);
	const dispatch = useDispatch();
	const [currentRep, setCurrentRep] = useState(0);
	const [page, setPage] = useState(0);
	const [perPage, setPerPage] = useState(10);
	const [sortedBy, setSortedBy] = useState<TSortType | undefined>(undefined);
	const [cellOrder, setCellOrder] = useState<TCellOrder>({
		stars: 'desc',
		forks: 'desc',
		updated: 'desc',
	});

	useEffect(() => {
		setPage(0);
		setSortedBy(undefined);
	}, [searchWord]);

	const handleChangePage = (newPage: number) => {
		setPage(newPage);
		dispatch(
			getRepositoriesThunk({
				name: searchWord,
				page: newPage + 1,
				perPage,
				sortType: sortedBy,
				order: sortedBy && cellOrder[sortedBy],
			})
		);
	};

	const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const perPage = parseInt(event.target.value, 10);
		setPerPage(perPage);
		setPage(0);
		dispatch(
			getRepositoriesThunk({
				name: searchWord,
				page: 1,
				perPage,
				sortType: sortedBy,
				order: sortedBy && cellOrder[sortedBy],
			})
		);
	};

	const handleChangeSortedBy = (sortType: TSortType) => {
		const orderCell =
			cellOrder[sortType] === 'desc' && sortType === sortedBy ? 'asc' : 'desc';
		setSortedBy(sortType);
		setPage(0);
		setCellOrder({ ...cellOrder, [CellSort[sortType]]: orderCell });
		dispatch(
			getRepositoriesThunk({
				name: searchWord,
				page: 1,
				perPage,
				sortType: sortType,
				order: orderCell,
			})
		);
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
							sortedBy={sortedBy}
							onHeadCellClick={handleChangeSortedBy}
							cellOrder={cellOrder}
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
