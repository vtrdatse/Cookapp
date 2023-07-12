import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './shared/routes/AppRouter'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 2 } } });
import './index.css'
import '@fontsource-variable/quicksand';
import store from './shared/store/store';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
   </Provider>
  </React.StrictMode>,
)
