import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FoodItem from './components/FoodItem';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
// import DisplayDate from './components/DisplayDate';
import SearchFood from './containers/SearchFood';
function App(props) {
return (
    <ThemeProvider theme ={theme}>
    <div className="app">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">FoodItem</Link>
              </li>
              <li>
                <Link to="/">SearchFood</Link>
              </li>

            </ul>
          </nav>
        </div>
        <Route path="/" exact component={FoodItem} />
        <Route path="/" exact component={SearchFood} />
      </Router>
    </div>
    </ThemeProvider>
  );



}


export default App;
