import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, NotFound } from './components/App.js';
import { About, Description } from './components/About.js';
import { Portfolio } from './components/Portfolio.js';
import { Contact } from './components/Contact.js';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' title='App - About' component={About} />
    <Route path='portfolio' title='App - Portfolio' component={Portfolio }  />
    <Route path='contact' title='App - Contact' component={Contact }  />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
