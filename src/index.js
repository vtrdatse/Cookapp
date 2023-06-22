import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MaterialUIControllerProvider } from './admin/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<MaterialUIControllerProvider>
			<App />
		</MaterialUIControllerProvider>
	</BrowserRouter>
);

reportWebVitals();
