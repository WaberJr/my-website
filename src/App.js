import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Contato from './components/Contato';

const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contato}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;