import React from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';

import { Contact } from './Contact';


const Main = () => {
    return (
        <Switch>
   
            <Route exact path='/Contact' component={Contact}></Route>

        </Switch>
    );
}

export { Main };
