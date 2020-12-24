import './App.css';
import { HashRouter } from "react-router-dom";

import Routes from './routes/Route';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <HashRouter>
      <Routes />
      <GlobalStyles />
    </HashRouter>
  );
}


