import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.scss';
import { TRepInfo } from './types';
import Star from '@mui/icons-material/Star';

const RepInfo: FC<TRepInfo> = ({ currentRep }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#f2f2f2',
				padding: '24px',
			}}
		>
			{currentRep ? (
				<Box>
					<h2 className={styles.title}>{currentRep.name}</h2>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<p className={styles.lable}>{currentRep.language}</p>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<Star sx={{ color: '#FFB400' }} />
							<span className={styles.text}>
								{currentRep.stargazers_count.toLocaleString('ru-RU')}
							</span>
						</Box>
					</Box>
					<p className={styles.text}>{currentRep.description}</p>
					{currentRep.topics.length > 0 && (
						<Stack
							direction={'row'}
							spacing={1}
							sx={{ marginBlockEnd: '24px' }}
						>
							{currentRep.topics.map((item) => (
								<span className={styles.topic}>{item}</span>
							))}
						</Stack>
					)}
					<p className={styles.text}>{currentRep.license?.name}</p>
				</Box>
			) : (
				<Box
					sx={{
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<p className={styles.text}>Выберите репозиторий</p>
				</Box>
			)}
		</Box>
	);
};

export default RepInfo;
