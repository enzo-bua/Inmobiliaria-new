import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HouseContextProvider from './context/HouseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HouseContextProvider>
      <Layout>
        <App />
      </Layout>
    </HouseContextProvider>
  </BrowserRouter>
);
