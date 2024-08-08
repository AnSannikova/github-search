import { FC } from 'react';
import { Header, SearchResult } from '../../components';
import { CssBaseline } from '@mui/material';

const MainPage: FC = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<main>
				<SearchResult />
			</main>
		</>
	);
};

export default MainPage;
