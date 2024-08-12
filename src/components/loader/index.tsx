import { FC } from 'react';
import styles from './styles.module.scss';

const Loader: FC = () => (
	<div className={styles.loader}>
		<span className={styles.circle}></span>
		<span className={styles.circle}></span>
		<span className={styles.circle}></span>
	</div>
);

export default Loader;
