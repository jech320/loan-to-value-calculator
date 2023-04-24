import { ApolloClient as ApolloClientLib, InMemoryCache } from '@apollo/client';

export const ApolloClient = new ApolloClientLib({
  uri: import.meta.env.VITE_APP_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'network-only' } },
});
