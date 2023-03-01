import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PersistGate persistor={persistStore(store)}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </PersistGate>
)
