import { FC } from 'react';
import { Footer, Header, SearchResult } from '../../components';
import { Box, CssBaseline } from '@mui/material';
import styles from './styles.module.scss';

const MainPage: FC = () => {
	return (
		<Box
			sx={{
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CssBaseline />
			<Header />
			<main className={styles.main}>
				<SearchResult />
			</main>
			<Footer />
		</Box>
	);
};

export default MainPage;
