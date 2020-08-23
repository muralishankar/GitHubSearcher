import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import GitHubSearcher from './GitHubSearcher';
import './App.css';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/:id" children={<Child />} />
        <Route children={<Child />} />
      </Switch>
    </Router>
  );
}
function Child() {
  let { id } = useParams();
  return (
    <GitHubSearcher id={id}></GitHubSearcher>
  );
}
export default App;
