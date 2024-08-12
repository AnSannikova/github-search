import { Button, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch } from '../../services/store';
import { getRepositoriesThunk } from '../../services/repSlice';

const Header: FC = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onSubmitForm = (evt: FormEvent) => {
		evt.preventDefault();
		dispatch(getRepositoriesThunk(value));
	};

	return (
		<header className={styles.header}>
			<form className={styles.form} onSubmit={onSubmitForm}>
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
							lineHeight: '24px',
							letterSpacing: '0.17px',
							color: 'rgba(0, 0, 0, 0.87)',
							backgroundColor: '#fff',
						},
						'& .MuiInputBase-input': {
							padding: '9px 16px',
							height: 'auto',
						},
						'& .MuiInputBase-input::placeholder': {
							fontStyle: 'italic',
						},
					}}
				/>
				<Button
					type={'submit'}
					variant="contained"
					sx={{ padding: '8px 22px', fontSize: '15px', lineHeight: 1.73 }}
				>
					Искать
				</Button>
			</form>
		</header>
	);
};

export default Header;
