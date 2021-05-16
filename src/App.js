
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Entry from './Entry'
import Track from './Components/TrackPage/Track'
import Bill from "./Components/BillPage";
import Test from "./Components/Test/Test";


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
          <Route path="/test" exact>
            <Test />
          </Route>
        </Switch>

    </Router>
    
    </>
  );
}

export default App;
