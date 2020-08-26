import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import GitHubSearcher from './containers/gitHubSearcher';
import './app.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:type" children={<Child />} />
        <Route children={<Child />} />
      </Switch>
    </Router>
  );
}
function Child() {
  let { type } = useParams();
  return (
    <GitHubSearcher type={type}></GitHubSearcher>
  );
}
export default App;
