import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { persistor, store } from '@redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
      <App />
      <ToastContainer position="bottom-right" theme="colored" />
    </PersistGate>
  </Provider>
)
