import React from 'react';
import { Router } from '@reach/router';
import Hello from './components/hello';
import Four from './components/four';
import CoolHello from './components/coolhello';
import Welcome from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Router>
            <Four path="/:id"/>
            <Welcome path="/home"/>
            <CoolHello path="/hello/:bgColor/:txtColor"/>
            <Hello path="/:word"/>
        </Router>
    </div>
  );
}

export default App;
