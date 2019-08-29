import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Contato from './components/Contato';
import Curriculo from './components/Curriculo';

const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contato' exact component={Contato}/>
        <Route path='/curriculo' exact component={Curriculo}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;