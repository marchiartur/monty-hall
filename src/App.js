import './App.css';
import { BrowserRouter } from "react-router-dom";

import Routes from './routes/Route';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}


