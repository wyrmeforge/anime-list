import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./app/graphql";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <ApolloProvider client={apolloClient}>
          <Provider store={store}>
              <App />
          </Provider>
      </ApolloProvider>
  </React.StrictMode>
);

