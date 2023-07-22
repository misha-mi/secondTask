import './lib/normalize.sass'

import ReactDOM from 'react-dom/client';

import App from './component/app/app';


import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
