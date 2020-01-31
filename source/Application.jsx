import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AdminPage, SigninPage, TestPage, ResultsPage } from 'Pages';

import { Container } from './Application.Components';

const Application = () => (
  <Container>
    <Switch>
      <Route path="/" exact component={TestPage} />
      <Route path="/results/:readingSpeed" component={ResultsPage} />

      <Route exact path="/signin" component={SigninPage} />
      <Route exact path="/admin" component={AdminPage} />
    </Switch>
  </Container>
);

export { Application };
