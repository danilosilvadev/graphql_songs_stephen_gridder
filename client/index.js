import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.css'
import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'

const client = new ApolloClient({});

const Root = () => {
  return (
        <HashRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/songs" component={SongList} />
            <Route path="/song/new" component={SongCreate} />
          </Switch>
        </HashRouter>
      )};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.querySelector('#root')
);
