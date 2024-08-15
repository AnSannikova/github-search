import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './services/store.ts';
import { Provider } from 'react-redux';
import App from './components/app/index.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
