import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Home from './routes/home';
import NotFound from './routes/not-found';
import Context from "./components/context";


const Router: React.FC = () => {
  const [global, setGlobal] = useState();
  return (
    <div className="background">
      <Context.Provider value={{ global, setGlobal }}>
        <BrowserRouter>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition timeout={450} classNames='fade' key={location.key}>
                <Switch location={location}>
                  <Route exact path = '/' component = {Home} />
                  <Route component = {NotFound}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default Router;
