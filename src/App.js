import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DetailsPlace from './Component/DetailsPlace/DetailsPlace';
import { createContext, useState } from 'react';

export const HappyTravel = createContext();
function App() {
  const [travelInfo, setTravelInfo] = useState();
  return (
    <HappyTravel.Provider value={[travelInfo, setTravelInfo]}>
      <Router>
      <Switch>
          <Route path="/viewDetail/:id">
              <DetailsPlace></DetailsPlace>
          </Route>
          <Route path="/">
              <Header></Header>
          </Route>
        </Switch>
        </Router>
    </HappyTravel.Provider>
  );
}

export default App;
