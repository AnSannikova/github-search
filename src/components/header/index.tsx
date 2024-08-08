import { Box, Button, TextField } from '@mui/material';
import { FC, useState } from 'react';
import styles from './styles.module.scss';

const Header: FC = () => {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<header className={styles.header}>
			<Box maxWidth={1440} sx={{ margin: '0 auto', display: 'flex', gap: 1 }}>
				<TextField
					id="outlined-basic"
					variant="outlined"
					placeholder="Введите поисковый запрос"
					value={value}
					onChange={handleChange}
					sx={{
						width: '100%',
						maxWidth: '912px',
						'& .MuiInputBase-root': {
							fontWeight: 500,
							fontSize: '14px',
							lineHeight: '1.71',
							letterSpacing: '0.17px',
							color: 'rgba(0, 0, 0, 0.87)',
							backgroundColor: '#fff',
						},
						'& .MuiInputBase-input': {
							padding: '9px 16px',
						},
						'& .MuiInputBase-input::placeholder': {
							fontStyle: 'italic',
						},
					}}
				/>
				<Button variant="contained">Искать</Button>
			</Box>
		</header>
	);
};

export default Header;
