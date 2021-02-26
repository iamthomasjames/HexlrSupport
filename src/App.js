
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Entry from './Entry'
import Track from './Components/TrackPage/Track'
import Info from "./Components/Info";

function App() {
  return (
    <>
      <Router>
      <Header />
      <Info/>
        <Switch>
          <Route path="/" exact>
            <Entry />
          </Route>
          <Route path="/track" exact>
            <Track />
          </Route>
        </Switch>

    </Router>
    
    </>
  );
}

export default App;
