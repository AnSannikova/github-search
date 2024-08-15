import { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from '../header';
import SearchResult from '../search-result';
import Footer from '../footer';
import { useSelector } from '../../services/store';
import {
	getLoadingSelector,
	getRepositoriesSelector,
} from '../../services/repSlice';
import styles from './styles.module.scss';
import Loader from '../loader';

const App: FC = () => {
	const repositories = useSelector(getRepositoriesSelector);
	const isLoading = useSelector(getLoadingSelector);

	return (
		<Box
			sx={{
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CssBaseline />
			<Header />
			<main className={styles.main}>
				{repositories.length > 0 ? (
					<SearchResult items={repositories} isLoading={isLoading} />
				) : isLoading ? (
					<Box
						component={'section'}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Loader />
					</Box>
				) : (
					<Box sx={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
						<h1 className={styles.title}>Добро пожаловать</h1>
					</Box>
				)}
			</main>
			<Footer />
		</Box>
	);
};

export default App;
