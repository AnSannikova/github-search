import { FC } from 'react';
import { Footer, Header, SearchResult } from '../../components';
import { Box, CssBaseline } from '@mui/material';
import styles from './styles.module.scss';
import { useSelector } from '../../services/store';
import { getRepositoriesSelector } from '../../services/repSlice';

const MainPage: FC = () => {
	const repositories = useSelector(getRepositoriesSelector);

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
					<SearchResult items={repositories} />
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

export default MainPage;
