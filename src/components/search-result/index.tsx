import { Box } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.scss';

const SearchResult: FC = () => {
	return (
		<Box maxWidth={1440} sx={{ margin: '0 auto' }}>
			<h1 className={styles.title}>Результаты поиска</h1>
		</Box>
	);
};

export default SearchResult;
