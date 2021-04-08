import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const TOKEN = 'token';

const isLoggedIn = Boolean(localStorage.getItem(TOKEN));

export const isLoggedInVar = makeVar(isLoggedIn);

export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
};

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
