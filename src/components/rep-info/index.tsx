import { FC } from 'react';
import { Box, Link } from '@mui/material';
import Star from '@mui/icons-material/Star';
import { TRepInfo } from './types';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

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
						{currentRep.language !== null && (
							<p className={styles.lable}>{currentRep.language}</p>
						)}
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<Star sx={{ color: '#FFB400' }} />
							<span className={styles.text}>
								{currentRep.stargazers_count.toLocaleString('ru-RU')}
							</span>
						</Box>
					</Box>
					<p className={styles.text}>{currentRep.description}</p>
					{currentRep.topics && currentRep.topics.length > 0 && (
						<Box
							sx={{
								marginBlockEnd: '24px',
								display: 'flex',
								flexWrap: 'wrap',
								gap: '8px',
							}}
						>
							{currentRep.topics.map((item) => (
								<span key={uuidv4()} className={styles.topic}>
									{item}
								</span>
							))}
						</Box>
					)}
					<p className={styles.text}>{currentRep.license?.name}</p>
					<Link target={'_blank'} href={currentRep.html_url}>
						Ссылка на github
					</Link>
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
