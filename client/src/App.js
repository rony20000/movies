import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';

import { theme } from './theme';
import Login from './pages/login/login.component';
import Search from './pages/search/search.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router>
      <Switch>

        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/search">
          <Search/>
        </Route>

      </Switch>
     </Router>
    </ThemeProvider>
  );
}

export default App;
