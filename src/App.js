
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
import Bill from "./Components/BillPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Entry />
          </Route>
          <Route path="/track" exact>
            <Track />
          </Route>
          <Route path="/bill" exact>
            <Bill />
          </Route>
        </Switch>

    </Router>
    
    </>
  );
}

export default App;
