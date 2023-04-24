import { FC, PropsWithChildren } from 'react';
import { ApolloProvider as ApolloProviderLib } from '@apollo/client/react';
import { ApolloClient } from './services/ApolloClient';

const ApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProviderLib client={ApolloClient}>{children}</ApolloProviderLib>
  );
};

export default ApolloProvider;
